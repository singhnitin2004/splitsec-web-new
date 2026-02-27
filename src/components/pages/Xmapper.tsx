"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const MapDisplay = dynamic(
  () => import("./xmapper/MapDisplay"),
  { ssr: false }
);

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type Vertical = "outdoor" | "guard" | "parks" | "schools" | "medical" | "other";

interface GuardSite {
  id: string;
  name: string;
  address: string;
  terrainType: string;
  radiusVal: number;
  radiusUnit: string;
}

interface GuardScheduleRow {
  days: string[];
  startTime: string;
  endTime: string;
  siteIndex: number;
}

const makeGuardSite = (id: string, name: string): GuardSite => ({
  id,
  name,
  address: "",
  terrainType: "mixed",
  radiusVal: 300,
  radiusUnit: "ft",
});

const ASSUMP = {
  defaultCenter: { lat: 37.7749, lng: -122.4194 },
  minDisplayRadiusMiles: 0.08,
};

const TITLES: [string, string][] = [
  ["Choose vertical", "Select a vertical and enter your email to begin."],
  ["Site details", "Enter site details for sizing."],
  ["Radius and sizing", "Set radius and review sizing."],
  ["Contact and send report", "Confirm contact details and send your report."],
];

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

function toDigits(s: string): string {
  return String(s || "").replace(/\D/g, "").slice(0, 10);
}

function formatPhone(s: string): string {
  const d = toDigits(s);
  if (!d) return "";
  if (d.length <= 3) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 3)})${d.slice(3)}`;
  return `(${d.slice(0, 3)})${d.slice(3, 6)}-${d.slice(6, 10)}`;
}

function verticalLabel(v: Vertical | ""): string {
  if (!v) return "Not selected";
  const map: Record<Vertical, string> = {
    outdoor: "Outdoor events",
    guard: "Guard companies",
    parks: "Parks",
    schools: "Schools and colleges",
    medical: "Medical",
    other: "Other",
  };
  return map[v] || "Not selected";
}

function indoorRadiusFt(v: string): number {
  if (v === "standard") return 100;
  if (v === "largeopen") return 150;
  return 125;
}

function outdoorRadiusFt(v: string): number {
  if (v === "open") return 300;
  if (v === "urban") return 150;
  return 225;
}

function buildingSizeSqFt(v: string): number {
  if (v === "small") return 50000;
  if (v === "large") return 300000;
  return 150000;
}

function radiusToFeet(v: number, unit: string, blockFeet: number): number {
  const n = Math.max(0, Number(v) || 0);
  if (unit === "miles") return n * 5280;
  if (unit === "blocks") return n * Math.max(1, Number(blockFeet) || 300);
  return n;
}

function toUiUnit(u: string): string {
  if (u === "ft") return "feet";
  return u || "feet";
}

function fromUiUnit(u: string): string {
  if (u === "feet") return "ft";
  return u || "ft";
}

function kitSuggestion(total: number): string {
  if (total <= 10) return "Kit 10";
  if (total <= 20) return "Kit 20";
  if (total <= 30) return "Kit 30";
  if (total <= 50) return "Kit 50";
  if (total <= 100) return "Kit 100";
  return `Custom kit (${total})`;
}

async function geocodeAddress(addr: string): Promise<{ lat: number; lng: number; }> {
  const q = String(addr || "").trim();
  if (!q) return ASSUMP.defaultCenter;
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(q)}`
    );
    const data = await res.json();
    if (data && data[0]) return { lat: Number(data[0].lat), lng: Number(data[0].lon) };
  } catch {
    // ignore
  }
  return ASSUMP.defaultCenter;
}

const sharedOptionsMap: Record<string, string[]> = {
  schools: ["Cafeteria", "Gym", "Auditorium", "Commons", "Library", "Main entrance", "Other"],
  medical: ["ER waiting", "Main lobby", "Ambulance bay", "Cafeteria", "Security desk", "Main entrance", "Other"],
  guard: ["Main entrance", "Lobby", "Loading dock", "Parking chokepoint", "Other"],
  other: ["Main entrance", "Lobby", "Loading dock", "Parking chokepoint", "Other"],
};

export default function XmapperPage() {
  const [step, setStep] = useState(0);
  const [mapCenter, setMapCenter] = useState(ASSUMP.defaultCenter);
  const [mapRadiusMeters, setMapRadiusMeters] = useState(ASSUMP.minDisplayRadiusMiles * 1609.34);

  const [vertical, setVertical] = useState<Vertical | "">("");
  const [entryEmail, setEntryEmail] = useState("");
  const [address, setAddress] = useState("");
  const [safetyFactor, setSafetyFactor] = useState(1.3);
  const [blockFeet, setBlockFeet] = useState(300);
  const [radiusVal, setRadiusVal] = useState(300);
  const [radiusInputStr, setRadiusInputStr] = useState("300");
  const radiusInputFocusedRef = useRef(false);
  const [radiusUnit, setRadiusUnit] = useState("feet");

  const [indoorEnabled, setIndoorEnabled] = useState(false);
  const [buildingsCount, setBuildingsCount] = useState(1);
  const [staffPerBuilding, setStaffPerBuilding] = useState(50);
  const [indoorEnv, setIndoorEnv] = useState("mixed");
  const [buildingSize, setBuildingSize] = useState("medium");
  const [sharedSpaces, setSharedSpaces] = useState<string[]>([]);

  const [outdoorEnabled, setOutdoorEnabled] = useState(true);
  const [outdoorTerrain, setOutdoorTerrain] = useState("mixed");
  const [otherSiteType, setOtherSiteType] = useState("both");

  const [guardMultiSite, setGuardMultiSite] = useState(true);
  const [guardSites, setGuardSites] = useState<GuardSite[]>([makeGuardSite("A", "Site A")]);
  const [activeGuardSiteIndex, setActiveGuardSiteIndex] = useState(0);
  const [guardSchedule, setGuardSchedule] = useState<GuardScheduleRow[]>([]);
  const [totalGuardsOnDuty, setTotalGuardsOnDuty] = useState<string>("");

  const [reportEmail, setReportEmail] = useState("");
  const [reportName, setReportName] = useState("");
  const [reportPhone, setReportPhone] = useState("");

  const [phones, setPhones] = useState(0);
  const [spares, setSpares] = useState(0);
  const [total, setTotal] = useState(0);
  const [kit, setKit] = useState("Kit 10");
  const [usedIndoorRadiusFt, setUsedIndoorRadiusFt] = useState(125);
  const [usedOutdoorRadiusFt, setUsedOutdoorRadiusFt] = useState(225);
  const [coverageRadiusFt, setCoverageRadiusFt] = useState(300);
  const [overallKit, setOverallKit] = useState("Kit 10");
  const [overallDriver, setOverallDriver] = useState("");
  const [reportSent, setReportSent] = useState(false);

  const indoorAvailable = useCallback(() => {
    if (vertical === "schools" || vertical === "medical" || vertical === "guard") return true;
    if (vertical === "other") return otherSiteType !== "outdoor";
    return false;
  }, [vertical, otherSiteType]);

  const outdoorAvailable = useCallback(() => {
    if (vertical === "other") return otherSiteType !== "indoor";
    return true;
  }, [vertical, otherSiteType]);

  const sharedOptions = useCallback(() => {
    if (vertical === "schools") return sharedOptionsMap.schools;
    if (vertical === "medical") return sharedOptionsMap.medical;
    if (vertical === "guard") return sharedOptionsMap.guard;
    if (vertical === "other") return sharedOptionsMap.other;
    return [];
  }, [vertical]);

  const terrainOptionsForVertical = useCallback(() => {
    const openLabel = "Open (fields, parks, clear line of sight)";
    const mixedLabel = "Mixed (trees, tents, some buildings)";
    const urbanLabel = "Urban (dense structures)";
    if (vertical === "outdoor")
      return [
        { v: "open", l: openLabel },
        { v: "mixed", l: mixedLabel },
        { v: "urban", l: urbanLabel },
      ];
    return [
      { v: "open", l: openLabel },
      { v: "mixed", l: mixedLabel },
    ];
  }, [vertical]);

  const setVerticalDefaults = useCallback(() => {
    if (vertical === "outdoor") {
      setOutdoorEnabled(true);
      setOutdoorTerrain("mixed");
      setIndoorEnabled(false);
    } else if (vertical === "parks") {
      setOutdoorEnabled(true);
      setOutdoorTerrain("open");
      setIndoorEnabled(false);
    } else if (vertical === "guard") {
      setOutdoorEnabled(false);
      setOutdoorTerrain("mixed");
      setIndoorEnabled(true);
    } else if (vertical === "schools" || vertical === "medical") {
      setOutdoorEnabled(true);
      setOutdoorTerrain("mixed");
      setIndoorEnabled(true);
    } else if (vertical === "other") {
      setOtherSiteType("both");
      setOutdoorEnabled(true);
      setOutdoorTerrain("mixed");
      setIndoorEnabled(true);
    }
  }, [vertical]);

  const calcForSingle = useCallback(
    (
      radiusFt: number,
      terrain: string,
      indoorOn: boolean,
      outdoorOn: boolean
    ) => {
      const outR = outdoorRadiusFt(terrain);
      const outPhones = outdoorOn
        ? Math.ceil(
          ((radiusFt * radiusFt) / (outR * outR)) * safetyFactor
        )
        : 0;

      const inR = indoorRadiusFt(indoorEnv);
      const indoorAreaSqFt =
        Math.max(0, buildingsCount) * buildingSizeSqFt(buildingSize);
      const inPhones = indoorOn
        ? Math.ceil(
          (indoorAreaSqFt / (Math.PI * inR * inR)) * safetyFactor
        )
        : 0;

      let base = 1;
      if (outdoorOn && indoorOn) base = Math.max(1, outPhones + inPhones);
      else if (outdoorOn) base = Math.max(1, outPhones);
      else if (indoorOn) base = Math.max(1, inPhones);

      const spareCount = Math.max(1, Math.ceil(0.1 * base));
      const totalCount = base + spareCount;
      return {
        base,
        spares: spareCount,
        total: totalCount,
        kit: kitSuggestion(totalCount),
        outPhones,
        inPhones,
        outR,
        inR,
      };
    },
    [
      safetyFactor,
      indoorEnv,
      buildingsCount,
      buildingSize,
    ]
  );

  const computeForSingle = useCallback(
    (
      radiusFt: number,
      terrain: string,
      indoorOn: boolean,
      outdoorOn: boolean
    ) => {
      const result = calcForSingle(radiusFt, terrain, indoorOn, outdoorOn);
      setUsedOutdoorRadiusFt(result.outR);
      setUsedIndoorRadiusFt(result.inR);
      return result;
    },
    [calcForSingle]
  );

  const computeSizing = useCallback(() => {
    const indoorOn = indoorAvailable() && indoorEnabled;
    const outdoorOn = outdoorAvailable() && outdoorEnabled;

    if (vertical === "guard") {
      const sitesToUse = guardMultiSite ? guardSites : guardSites.slice(0, 1);
      const active = sitesToUse[activeGuardSiteIndex] || sitesToUse[0];
      if (active) {
        const rFt = radiusToFeet(
          Math.max(1, radiusVal),
          toUiUnit(active.radiusUnit === "ft" ? "feet" : active.radiusUnit),
          blockFeet
        );
        const result = computeForSingle(
          rFt,
          active.terrainType,
          indoorOn,
          outdoorOn
        );
        setCoverageRadiusFt(rFt);
        setPhones(result.base);
        setSpares(result.spares);
        setTotal(result.total);
        setKit(result.kit);
        setOverallKit(result.kit);
        setOverallDriver(active.name || `Site ${active.id}`);
      }
    } else {
      const rFt = radiusToFeet(Math.max(1, radiusVal), radiusUnit, blockFeet);
      const result = computeForSingle(rFt, outdoorTerrain, indoorOn, outdoorOn);
      setCoverageRadiusFt(rFt);
      setPhones(result.base);
      setSpares(result.spares);
      setTotal(result.total);
      setKit(result.kit);
      setOverallKit(result.kit);
      setOverallDriver("");
    }
  }, [
    vertical,
    guardMultiSite,
    guardSites,
    activeGuardSiteIndex,
    radiusVal,
    radiusUnit,
    outdoorTerrain,
    indoorEnabled,
    outdoorEnabled,
    indoorAvailable,
    outdoorAvailable,
    blockFeet,
    computeForSingle,
  ]);

  const updateMap = useCallback(async () => {
    computeSizing();
    let addr = address;
    if (vertical === "guard") {
      const sites = guardMultiSite ? guardSites : guardSites.slice(0, 1);
      const active = sites[activeGuardSiteIndex] || sites[0];
      addr = active ? active.address : "";
    }
    const rFt = radiusToFeet(Math.max(1, radiusVal), radiusUnit, blockFeet);
    const center = await geocodeAddress(addr);
    const radiusMeters = Math.max(
      ASSUMP.minDisplayRadiusMiles * 1609.34,
      rFt * 0.3048
    );
    setMapCenter(center);
    setMapRadiusMeters(radiusMeters);
  }, [
    vertical,
    address,
    guardMultiSite,
    guardSites,
    activeGuardSiteIndex,
    radiusVal,
    radiusUnit,
    blockFeet,
    computeSizing,
  ]);

  const validateStep0 = (): boolean =>
    !!vertical && isValidEmail(entryEmail);

  const validateStep1 = (): boolean => {
    const addressOk =
      vertical === "guard"
        ? (guardMultiSite ? guardSites : guardSites.slice(0, 1)).every(
          (s) => String(s.address || "").trim().length > 0
        )
        : String(address || "").trim().length > 0;

    let indoorOk = true;
    if (vertical === "schools" || vertical === "medical") {
      indoorOk =
        buildingsCount > 0 &&
        staffPerBuilding > 0 &&
        !!indoorEnv &&
        !!buildingSize;
    } else if (vertical === "guard" || indoorAvailable()) {
      const inOn = indoorAvailable() && indoorEnabled;
      if (inOn) {
        indoorOk = buildingsCount > 0 && !!indoorEnv && !!buildingSize;
      }
    }

    let outdoorOk = true;
    if (outdoorAvailable() && outdoorEnabled) {
      if (vertical === "guard") {
        const sites = guardMultiSite ? guardSites : guardSites.slice(0, 1);
        outdoorOk = sites.every((s) => !!s.terrainType);
      } else {
        outdoorOk = !!outdoorTerrain;
      }
    }
    return addressOk && indoorOk && outdoorOk;
  };

  const validateStep2 = (): boolean => (Number(radiusInputStr) || 0) > 0;

  const validateStep3 = (): boolean =>
    isValidEmail(reportEmail) && reportName.length > 0;

  const stepValid = (): boolean => {
    if (step === 0) return validateStep0();
    if (step === 1) return validateStep1();
    if (step === 2) return validateStep2();
    if (step === 3) return validateStep3();
    return true;
  };

  const reportPreviewText = useCallback((): string => {
    if (vertical === "guard") {
      const sites = (guardMultiSite ? guardSites : guardSites.slice(0, 1)).map(
        (s) => {
          const rf = radiusToFeet(
            s.radiusVal,
            toUiUnit(s.radiusUnit === "ft" ? "feet" : s.radiusUnit),
            blockFeet
          );
          const r = calcForSingle(
            rf,
            s.terrainType,
            indoorAvailable() && indoorEnabled,
            outdoorAvailable() && outdoorEnabled
          );
          return `- ${s.name}: ${s.address || "No address"}, terrain=${s.terrainType}, radius=${s.radiusVal} ${s.radiusUnit}, phones=${r.base}, spares=${r.spares}, total=${r.total}, kit=${r.kit}`;
        }
      ).join("\n");

      const rows =
        guardSchedule
          .map((row) => {
            const site = guardSites[Number(row.siteIndex) || 0];
            return `- ${(row.days || []).join(", ") || "No days"} ${row.startTime || "--:--"}-${row.endTime || "--:--"} ${site ? site.name : "Site A"}`;
          })
          .join("\n") || "- No schedule rows";

      return [
        "xMapper Report Preview",
        "",
        `Vertical: ${verticalLabel(vertical)}`,
        "Sites",
        sites,
        "",
        "Weekly schedule",
        rows,
        "",
        "Terrain assumptions: Open 300, Mixed 225",
        "Radius selected: per site",
        `Safety factor: ${safetyFactor}`,
        `Indoor assumptions: ${indoorAvailable() && indoorEnabled ? `${buildingsCount} buildings, ${buildingSize}, ${indoorEnv} (${usedIndoorRadiusFt} ft)` : "Indoor not enabled"}`,
        `Shared spaces selected: ${sharedSpaces.length}`,
        `Phones: ${phones}`,
        `Spares: ${spares}`,
        `Total phones: ${total}`,
        `Recommended kit: ${overallKit}`,
        Number(totalGuardsOnDuty) > 0
          ? `Staff phones available: ${Number(totalGuardsOnDuty)}`
          : "",
        Number(totalGuardsOnDuty) > 0
          ? `Extra anchors needed: ${Math.max(0, phones - Number(totalGuardsOnDuty))}`
          : "",
        "",
        "Planning estimate only. Results vary by conditions and placement.",
      ]
        .filter(Boolean)
        .join("\n");
    }

    return [
      "xMapper Report Preview",
      "",
      `Vertical: ${verticalLabel(vertical)}`,
      `Address: ${address || "Not provided"}`,
      `Terrain assumptions: ${outdoorEnabled ? `${outdoorTerrain} (${usedOutdoorRadiusFt} ft)` : "Outdoor not enabled"}`,
      `Radius selected: ${radiusVal} ${radiusUnit}`,
      `Safety factor: ${safetyFactor}`,
      `Indoor assumptions: ${indoorAvailable() && indoorEnabled ? `${buildingsCount} buildings, ${buildingSize}, ${indoorEnv} (${usedIndoorRadiusFt} ft)` : "Indoor not enabled"}`,
      `Shared spaces selected: ${sharedSpaces.length}`,
      "",
      `Phones: ${phones}`,
      `Spares: ${spares}`,
      `Total phones: ${total}`,
      `Recommended kit: ${kit}`,
      "",
      "Planning estimate only. Results vary by conditions and placement.",
    ].join("\n");
  }, [
    vertical,
    guardMultiSite,
    guardSites,
    guardSchedule,
    address,
    outdoorEnabled,
    outdoorTerrain,
    radiusVal,
    radiusUnit,
    safetyFactor,
    indoorAvailable,
    outdoorAvailable,
    indoorEnabled,
    buildingsCount,
    buildingSize,
    indoorEnv,
    usedIndoorRadiusFt,
    usedOutdoorRadiusFt,
    sharedSpaces.length,
    phones,
    spares,
    total,
    overallKit,
    kit,
    totalGuardsOnDuty,
    blockFeet,
    computeForSingle,
  ]);

  const addGuardSite = () => {
    if (guardSites.length >= 3) return;
    const id = ["A", "B", "C"][guardSites.length];
    setGuardSites([...guardSites, makeGuardSite(id, `Site ${id}`)]);
  };

  const removeGuardSite = (index: number) => {
    if (index <= 0 || guardSites.length <= 1) return;
    setGuardSites(guardSites.filter((_, i) => i !== index));
    setGuardSchedule(
      guardSchedule.map((r) => {
        let siteIndex = Number(r.siteIndex) || 0;
        if (siteIndex === index) siteIndex = 0;
        if (siteIndex > index) siteIndex -= 1;
        return { ...r, siteIndex };
      })
    );
    setActiveGuardSiteIndex((prev) =>
      Math.max(0, Math.min(prev, guardSites.length - 2))
    );
  };

  const addGuardScheduleRow = () => {
    setGuardSchedule([
      ...guardSchedule,
      {
        days: [],
        startTime: "08:00",
        endTime: "16:00",
        siteIndex: 0,
      },
    ]);
  };

  const removeGuardScheduleRow = (i: number) => {
    setGuardSchedule(guardSchedule.filter((_, idx) => idx !== i));
  };

  const goNext = () => {
    if (!stepValid()) return;
    if (step < 3) setStep(step + 1);
  };

  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSendReport = () => {
    if (!validateStep3()) return;
    computeSizing();
    setReportSent(true);
  };

  // When radius changes in step 2 for guard, update active site
  useEffect(() => {
    if (step === 2 && vertical === "guard") {
      setGuardSites((prev) => {
        const sites = guardMultiSite ? prev : prev.slice(0, 1);
        const idx = Math.min(activeGuardSiteIndex, sites.length - 1);
        if (idx >= 0 && idx < prev.length) {
          const active = prev[idx];
          const newUnit = fromUiUnit(radiusUnit);
          if (active.radiusVal === radiusVal && active.radiusUnit === newUnit)
            return prev;
          return prev.map((s, i) =>
            i === idx
              ? {
                ...s,
                radiusVal,
                radiusUnit: newUnit,
              }
              : s
          );
        }
        return prev;
      });
    }
  }, [step, vertical, radiusVal, radiusUnit, activeGuardSiteIndex, guardMultiSite]);

  // Sync radius from active guard site when entering step 2 or switching site. Omit guardSites from deps to avoid loop with form->guardSites effect.
  useEffect(() => {
    if (step === 2 && vertical === "guard") {
      const sites = guardMultiSite ? guardSites : guardSites.slice(0, 1);
      const idx = Math.min(activeGuardSiteIndex, Math.max(0, sites.length - 1));
      const active = sites[idx] || sites[0];
      if (active) {
        const newUnit = toUiUnit(active.radiusUnit === "ft" ? "feet" : active.radiusUnit);
        if (active.radiusVal !== radiusVal) setRadiusVal(active.radiusVal);
        if (newUnit !== radiusUnit) setRadiusUnit(newUnit);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- omit guardSites to break sync loop
  }, [step, vertical, activeGuardSiteIndex, guardMultiSite]);

  // Sync radiusVal into input string when value is set from outside (e.g. load scenario), but not while user is typing
  useEffect(() => {
    if (!radiusInputFocusedRef.current) {
      const next = String(radiusVal);
      setRadiusInputStr((prev) => (prev === next ? prev : next));
    }
  }, [radiusVal]);

  useEffect(() => {
    if (step === 2) {
      updateMap();
    }
  }, [step, radiusVal, radiusUnit, address, guardSites, activeGuardSiteIndex, vertical, guardMultiSite, updateMap]);

  useEffect(() => {
    if (step === 1 || step === 2 || step === 3) {
      computeSizing();
    }
  }, [
    step,
    vertical,
    address,
    radiusVal,
    radiusUnit,
    outdoorTerrain,
    indoorEnabled,
    outdoorEnabled,
    buildingsCount,
    buildingSize,
    indoorEnv,
    guardSites,
    activeGuardSiteIndex,
    guardMultiSite,
    otherSiteType,
    safetyFactor,
    blockFeet,
    computeSizing,
  ]);

  useEffect(() => {
    if (vertical) setVerticalDefaults();
  }, [vertical, setVerticalDefaults]);

  useEffect(() => {
    if (step === 3 && entryEmail) {
      setReportEmail((prev) => (prev || entryEmail));
    }
  }, [step, reportEmail, entryEmail]);

  const pageBackground = {
    background: `
      radial-gradient(900px 500px at 20% 10%, rgba(0,109,255,.25), transparent 60%),
      radial-gradient(900px 500px at 80% 20%, rgba(255,63,166,.22), transparent 60%),
      radial-gradient(900px 600px at 50% 95%, rgba(255,156,0,.14), transparent 60%),
      linear-gradient(180deg, #070a14 0%, #0b1020 100%)
    `,
  };

  const inputStyle = {
    border: "1px solid rgba(255,255,255,.15)",
    background: "rgba(10,14,28,.55)",
    color: "#fff",
    borderRadius: 12,
    padding: "10px 11px",
    fontSize: 14,
  };

  const vTiles: { vertical: Vertical; title: string; sub: string; icon: React.ReactNode; }[] = [
    {
      vertical: "outdoor",
      title: "Outdoor events",
      sub: "Festivals, fairs, concerts",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <path d="M4 9h16v7H4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 9l4-4 4 4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      vertical: "guard",
      title: "Guard companies",
      sub: "Patrols and roaming teams",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      vertical: "parks",
      title: "Parks",
      sub: "Park districts, public spaces",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <path d="M12 5l4 5H8l4-5z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 10v9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 19h8" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      vertical: "schools",
      title: "Schools and colleges",
      sub: "Campuses and stadiums",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <path d="M3 9l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6 11v4c0 1.8 3 3 6 3s6-1.2 6-3v-4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      vertical: "medical",
      title: "Medical",
      sub: "Hospitals and clinics",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      vertical: "other",
      title: "Other",
      sub: "Custom site",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <circle cx="6" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <circle cx="18" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      <main
        className="w-full pt-20 sm:pt-28 pb-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28"
        style={{
          background: "#0f1115",
          fontFamily: '"Manrope", ui-sans-serif, system-ui, -apple-system, sans-serif',
          color: "#eef1ff",
        }}
      >
        <div
          className="max-w-[1800px] mx-auto"
          style={{ maxWidth: 1800 }}
        >
          <section
            className="rounded-2xl p-5 sm:p-6 min-h-[700px] flex flex-col gap-4"
            style={{
              background: "#0f1115",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 16,
              boxShadow: "0 14px 40px rgba(0,0,0,.35)",
            }}
          >
            <header>
              <h2 className="m-0 text-2xl font-bold" style={{ color: "#eef1ff" }}>
                {TITLES[step][0]}
              </h2>
              <p className="mt-1 text-sm" style={{ color: "#aab3d0" }}>
                {TITLES[step][1]}
              </p>
            </header>

            <div className="flex-1 flex flex-col gap-4">
              {/* Step 0: Choose vertical */}
              {step === 0 && (
                <div className="flex flex-col">
                  <h3 className="m-0 text-[22px]">Mapper</h3>
                  <p className="mt-1 text-sm" style={{ color: "#aab3d0" }}>
                    Quick sizing in minutes.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-4">
                    {vTiles.map((t) => (
                      <button
                        key={t.vertical}
                        type="button"
                        onClick={() => {
                          setVertical(t.vertical);
                          setVerticalDefaults();
                        }}
                        className="flex flex-col items-center justify-center gap-1.5 p-3 min-h-[124px] rounded-xl text-center border transition-all"
                        style={{
                          ...(vertical === t.vertical
                            ? {
                              borderColor: "#006DFF",
                              background: "#006DFF",
                              color: "#fff",
                            }
                            : {
                              borderColor: "rgba(255,255,255,.16)",
                              background: "rgba(255,255,255,.04)",
                              color: "#fff",
                            }),
                        }}
                      >
                        <span
                          className="flex items-center justify-center"
                          style={{
                            color:
                              vertical === t.vertical
                                ? "#fff"
                                : "#006dff",
                          }}
                        >
                          {t.icon}
                        </span>
                        <span className="font-extrabold text-[13px]">
                          {t.title}
                        </span>
                        <span
                          className="text-[11px]"
                          style={{
                            color:
                              vertical === t.vertical
                                ? "rgba(255,255,255,.9)"
                                : "#aab3d0",
                          }}
                        >
                          {t.sub}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 max-w-[420px]">
                    <label className="block text-sm mb-1.5" style={{ color: "rgba(255,255,255,.9)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@org.com"
                      value={entryEmail}
                      onChange={(e) =>
                        setEntryEmail(e.target.value.trim())
                      }
                      required
                      className="w-full"
                      style={inputStyle}
                    />
                    <p
                      className="mt-1 text-xs"
                      style={{ color: "#aab3d0" }}
                    >
                      We use this to email your sizing report. No spam.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 1: Site details */}
              {step === 1 && (
                <div className="grid grid-cols-1 gap-3 ">
                  {vertical === "guard" ? (
                    <GuardStep1
                      guardMultiSite={guardMultiSite}
                      setGuardMultiSite={setGuardMultiSite}
                      guardSites={guardSites}
                      setGuardSites={setGuardSites}
                      addGuardSite={addGuardSite}
                      removeGuardSite={removeGuardSite}
                      outdoorEnabled={outdoorEnabled}
                      setOutdoorEnabled={setOutdoorEnabled}
                      indoorEnabled={indoorEnabled}
                      setIndoorEnabled={setIndoorEnabled}
                      buildingsCount={buildingsCount}
                      setBuildingsCount={setBuildingsCount}
                      indoorEnv={indoorEnv}
                      setIndoorEnv={setIndoorEnv}
                      buildingSize={buildingSize}
                      setBuildingSize={setBuildingSize}
                      sharedSpaces={sharedSpaces}
                      setSharedSpaces={setSharedSpaces}
                      sharedOptions={sharedOptions()}
                      guardSchedule={guardSchedule}
                      setGuardSchedule={setGuardSchedule}
                      addGuardScheduleRow={addGuardScheduleRow}
                      removeGuardScheduleRow={removeGuardScheduleRow}
                      safetyFactor={safetyFactor}
                      setSafetyFactor={setSafetyFactor}
                      blockFeet={blockFeet}
                      setBlockFeet={setBlockFeet}
                      totalGuardsOnDuty={totalGuardsOnDuty}
                      setTotalGuardsOnDuty={setTotalGuardsOnDuty}
                      inputStyle={inputStyle}
                    />
                  ) : (
                    <NonGuardStep1
                      address={address}
                      setAddress={setAddress}
                      vertical={vertical || "other"}
                      otherSiteType={otherSiteType}
                      setOtherSiteType={setOtherSiteType}
                      indoorAvailable={indoorAvailable()}
                      indoorEnabled={indoorEnabled}
                      setIndoorEnabled={setIndoorEnabled}
                      buildingsCount={buildingsCount}
                      setBuildingsCount={setBuildingsCount}
                      staffPerBuilding={staffPerBuilding}
                      setStaffPerBuilding={setStaffPerBuilding}
                      indoorEnv={indoorEnv}
                      setIndoorEnv={setIndoorEnv}
                      buildingSize={buildingSize}
                      setBuildingSize={setBuildingSize}
                      sharedSpaces={sharedSpaces}
                      setSharedSpaces={setSharedSpaces}
                      sharedOptions={sharedOptions()}
                      outdoorEnabled={outdoorEnabled}
                      setOutdoorEnabled={setOutdoorEnabled}
                      outdoorTerrain={outdoorTerrain}
                      setOutdoorTerrain={setOutdoorTerrain}
                      terrainOptions={terrainOptionsForVertical()}
                      safetyFactor={safetyFactor}
                      setSafetyFactor={setSafetyFactor}
                      blockFeet={blockFeet}
                      setBlockFeet={setBlockFeet}
                      inputStyle={inputStyle}
                    />
                  )}
                </div>
              )}

              {/* Step 2: Radius and map */}
              {step === 2 && (
                <div className="flex flex-col gap-4">
                  {vertical === "guard" && (
                    <div>
                      <label className="block text-sm mb-1.5">
                        Active site
                      </label>
                      <select
                        value={activeGuardSiteIndex}
                        onChange={(e) =>
                          setActiveGuardSiteIndex(
                            Number(e.target.value)
                          )
                        }
                        className="w-full"
                        style={inputStyle}
                      >
                        {(guardMultiSite
                          ? guardSites
                          : guardSites.slice(0, 1)
                        ).map((s, i) => (
                          <option key={s.id} value={i}>
                            {s.name || `Site ${s.id}`}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm mb-1.5">
                      {vertical === "guard"
                        ? `${(
                          guardMultiSite
                            ? guardSites
                            : guardSites.slice(0, 1)
                        )[activeGuardSiteIndex]?.name ||
                        "Site"
                        } radius`
                        : "Coverage radius"}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_170px] gap-2">
                      <input
                        type="number"
                        min={300}
                        step={1}
                        value={radiusInputStr}
                        onChange={(e) => {
                          const raw = e.target.value;
                          setRadiusInputStr(raw);
                          setRadiusVal(Number(raw) || 0);
                        }}
                        onFocus={() => {
                          radiusInputFocusedRef.current = true;
                        }}
                        onBlur={() => {
                          const num = Math.max(
                            1,
                            Number(radiusInputStr) || 0
                          );
                          setRadiusVal(num);
                          setRadiusInputStr(String(num));
                          radiusInputFocusedRef.current = false;
                        }}
                        placeholder="300"
                        className="w-full xmapper-radius-input"
                        style={inputStyle}
                      />
                      <select
                        value={radiusUnit}
                        onChange={(e) =>
                          setRadiusUnit(e.target.value)
                        }
                        className="w-full"
                        style={{
                          ...inputStyle,
                          appearance: "none",
                          paddingRight: 32,
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23ffffff' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 10px center",
                          backgroundSize: "12px 8px",
                        }}
                      >
                        <option value="feet">Feet</option>
                        <option value="miles">Miles</option>
                        <option value="blocks">City blocks</option>
                      </select>
                    </div>
                    <p
                      className="mt-1 text-xs"
                      style={{ color: "#aab3d0" }}
                    >
                      Default: 300 ft. Circle updates live as you change radius.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-3 items-start">
                    <div>
                      <MapDisplay
                        center={mapCenter}
                        radiusMeters={mapRadiusMeters}
                      />
                    </div>
                    <aside
                      className="p-3 rounded-xl sticky top-2"
                      style={{
                        border: "1px solid rgba(255,255,255,.14)",
                        background: "rgba(255,255,255,.04)",
                      }}
                    >
                      <div
                        className="rounded-xl p-3 mb-2"
                        style={{
                          border: "1px solid rgba(255,255,255,.14)",
                          background: "rgba(255,255,255,.05)",
                        }}
                      >
                        <div
                          className="text-[11px] mb-1.5"
                          style={{ color: "#aab3d0" }}
                        >
                          Recommended kit
                        </div>
                        <div className="text-[34px] font-black leading-none text-white">
                          {vertical === "guard"
                            ? overallKit
                            : kit}
                        </div>
                      </div>
                      <div
                        className="text-xs mb-2"
                        style={{ color: "#aab3d0" }}
                      >
                        Live sizing summary
                      </div>
                      {vertical === "guard" &&
                        guardMultiSite &&
                        overallDriver && (
                          <p
                            className="text-xs mb-2"
                            style={{ color: "#aab3d0" }}
                          >
                            Largest site: {overallDriver}
                          </p>
                        )}
                      {vertical === "guard" &&
                        totalGuardsOnDuty &&
                        Number(totalGuardsOnDuty) > 0 && (
                          <p
                            className="text-xs mb-2"
                            style={{ color: "#aab3d0" }}
                          >
                            Staff phones available:{" "}
                            {totalGuardsOnDuty} •
                            Extra anchors needed:{" "}
                            {Math.max(
                              0,
                              phones -
                              Number(
                                totalGuardsOnDuty
                              )
                            )}
                          </p>
                        )}
                      <div className="flex justify-between py-1.5 border-t border-white/10 text-[13px]">
                        <span>Phones</span>
                        <strong className="text-lg">
                          {phones}
                        </strong>
                      </div>
                      <div className="flex justify-between py-1.5 border-t border-white/10 text-[13px]">
                        <span>Spares</span>
                        <strong className="text-lg">
                          {spares}
                        </strong>
                      </div>
                      <div className="flex justify-between py-1.5 border-t border-white/10 text-[13px]">
                        <span>Total phones</span>
                        <strong className="text-lg">
                          {total}
                        </strong>
                      </div>
                    </aside>
                  </div>
                </div>
              )}

              {/* Step 3: Contact and send */}
              {step === 3 && (
                <div className="flex flex-col gap-4">
                  <div className="max-w-[520px] grid grid-cols-1 gap-3">
                    <p
                      className="text-sm m-0"
                      style={{ color: "#aab3d0" }}
                    >
                      We would like your email to send the report.
                    </p>
                    <div>
                      <label className="block text-sm mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="name@org.com"
                        value={reportEmail}
                        onChange={(e) =>
                          setReportEmail(
                            e.target.value.trim()
                          )
                        }
                        required
                        className="w-full"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={reportName}
                        onChange={(e) =>
                          setReportName(
                            e.target.value.trim()
                          )
                        }
                        required
                        className="w-full"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1.5">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="(555)555-5555"
                        value={reportPhone}
                        onChange={(e) =>
                          setReportPhone(
                            formatPhone(
                              e.target.value
                            )
                          )
                        }
                        className="w-full"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <pre
                    className="overflow-auto max-h-[260px] p-3 rounded-xl text-[11.5px] font-mono whitespace-pre-wrap"
                    style={{
                      background: "rgba(0,0,0,.25)",
                      border: "1px solid rgba(255,255,255,.12)",
                      color: "rgba(255,255,255,.92)",
                    }}
                  >
                    {reportPreviewText()}
                  </pre>

                  {reportSent && (
                    <div
                      className="rounded-xl p-2.5 text-xs"
                      style={{
                        borderLeft: "3px solid rgba(59,214,113,.9)",
                        background: "rgba(59,214,113,.08)",
                        color: "rgba(255,255,255,.95)",
                      }}
                    >
                      Report sent successfully.
                    </div>
                  )}
                </div>
              )}
            </div>

            <footer
              className="flex justify-between items-center gap-3 pt-3 border-t"
              style={{ borderColor: "rgba(255,255,255,.12)" }}
            >
              <button
                type="button"
                onClick={goBack}
                className="rounded-full px-4 py-2.5 text-sm font-extrabold transition-all"
                style={{
                  background: "rgba(255,255,255,.07)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,.14)",
                  visibility: step === 0 ? "hidden" : "visible",
                }}
              >
                Back
              </button>
              <div className="flex gap-2">
                {step === 3 ? (
                  <button
                    type="button"
                    onClick={handleSendReport}
                    className="rounded-full px-4 py-2.5 text-sm font-extrabold transition-all"
                    style={{
                      background: "#006DFF",
                      color: "#fff",
                      boxShadow:
                        "0 10px 24px rgba(0,109,255,.18)",
                    }}
                  >
                    Send report
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!stepValid()}
                    className="rounded-full px-4 py-2.5 text-sm font-extrabold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: stepValid()
                        ? "#006DFF"
                        : "#6d748d",
                      color: "#fff",
                      boxShadow: stepValid()
                        ? "0 10px 24px rgba(0,109,255,.18)"
                        : "none",
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            </footer>
          </section>
        </div>
      </main>
    </>
  );
}

// Sub-components for Step 1
function GuardStep1({
  guardMultiSite,
  setGuardMultiSite,
  guardSites,
  setGuardSites,
  addGuardSite,
  removeGuardSite,
  outdoorEnabled,
  setOutdoorEnabled,
  indoorEnabled,
  setIndoorEnabled,
  buildingsCount,
  setBuildingsCount,
  indoorEnv,
  setIndoorEnv,
  buildingSize,
  setBuildingSize,
  sharedSpaces,
  setSharedSpaces,
  sharedOptions,
  guardSchedule,
  setGuardSchedule,
  addGuardScheduleRow,
  removeGuardScheduleRow,
  safetyFactor,
  setSafetyFactor,
  blockFeet,
  setBlockFeet,
  totalGuardsOnDuty,
  setTotalGuardsOnDuty,
  inputStyle,
}: {
  guardMultiSite: boolean;
  setGuardMultiSite: (v: boolean) => void;
  guardSites: GuardSite[];
  setGuardSites: (v: GuardSite[] | ((p: GuardSite[]) => GuardSite[])) => void;
  addGuardSite: () => void;
  removeGuardSite: (i: number) => void;
  outdoorEnabled: boolean;
  setOutdoorEnabled: (v: boolean) => void;
  indoorEnabled: boolean;
  setIndoorEnabled: (v: boolean) => void;
  buildingsCount: number;
  setBuildingsCount: (v: number) => void;
  indoorEnv: string;
  setIndoorEnv: (v: string) => void;
  buildingSize: string;
  setBuildingSize: (v: string) => void;
  sharedSpaces: string[];
  setSharedSpaces: (v: string[] | ((p: string[]) => string[])) => void;
  sharedOptions: string[];
  guardSchedule: GuardScheduleRow[];
  setGuardSchedule: React.Dispatch<React.SetStateAction<GuardScheduleRow[]>>;
  addGuardScheduleRow: () => void;
  removeGuardScheduleRow: (i: number) => void;
  safetyFactor: number;
  setSafetyFactor: (v: number) => void;
  blockFeet: number;
  setBlockFeet: (v: number) => void;
  totalGuardsOnDuty: string;
  setTotalGuardsOnDuty: (v: string) => void;
  inputStyle: React.CSSProperties;
}) {
  const updateSite = (idx: number, field: keyof GuardSite, value: string | number) => {
    setGuardSites((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, [field]: value } : s))
    );
  };

  const sitesToShow = guardMultiSite ? guardSites : guardSites.slice(0, 1);

  return (
    <div className="flex flex-col gap-3">
      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          checked={guardMultiSite}
          onChange={(e) => setGuardMultiSite(e.target.checked)}
        />
        Multiple locations
      </label>

      <div
        className="p-3 rounded-xl"
        style={{
          border: "1px solid rgba(255,255,255,.14)",
          background: "rgba(255,255,255,.04)",
        }}
      >
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={outdoorEnabled}
            onChange={(e) => setOutdoorEnabled(e.target.checked)}
          />
          Outdoor monitoring
        </label>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="m-0 text-[15px]">Locations</h3>
        {guardMultiSite && (
          <button
            type="button"
            onClick={addGuardSite}
            disabled={guardSites.length >= 3}
            className="rounded-full px-3 py-2 text-xs font-extrabold"
            style={{
              background: "rgba(255,255,255,.07)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,.14)",
            }}
          >
            Add location
          </button>
        )}
      </div>

      {sitesToShow.map((site, idx) => (
        <div
          key={site.id}
          className="p-3 rounded-xl grid gap-2"
          style={{
            border: "1px solid rgba(255,255,255,.14)",
            background: "rgba(255,255,255,.04)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_120px] gap-2 items-end">
            <div>
              <label className="block text-xs mb-1">Site name</label>
              <input
                type="text"
                value={site.name}
                onChange={(e) =>
                  updateSite(idx, "name", e.target.value)
                }
                className="w-full"
                style={inputStyle}
              />
            </div>
            {guardMultiSite && idx > 0 && (
              <button
                type="button"
                onClick={() => removeGuardSite(idx)}
                className="rounded-full px-3 py-2 text-xs"
                style={{
                  background: "rgba(255,255,255,.07)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,.14)",
                }}
              >
                Remove
              </button>
            )}
          </div>
          <div>
            <label className="block text-xs mb-1">Address</label>
            <input
              type="text"
              value={site.address}
              onChange={(e) =>
                updateSite(idx, "address", e.target.value)
              }
              placeholder="Street, city, ZIP"
              className="w-full"
              style={inputStyle}
            />
          </div>
          {outdoorEnabled && (
            <div>
              <label className="block text-xs mb-1">
                Terrain type
              </label>
              <select
                value={site.terrainType}
                onChange={(e) =>
                  updateSite(idx, "terrainType", e.target.value)
                }
                className="w-full"
                style={inputStyle}
              >
                <option value="open">
                  Open (fields, parks, clear line of sight)
                </option>
                <option value="mixed">
                  Mixed (trees, tents, some buildings)
                </option>
              </select>
            </div>
          )}
        </div>
      ))}

      <div
        className="p-3 rounded-xl"
        style={{
          border: "1px solid rgba(255,255,255,.14)",
          background: "rgba(255,255,255,.04)",
        }}
      >
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={indoorEnabled}
            onChange={(e) => setIndoorEnabled(e.target.checked)}
          />
          Indoor monitoring
        </label>
        {indoorEnabled && (
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-xs mb-1">
                Buildings count
              </label>
              <input
                type="number"
                min={1}
                value={buildingsCount}
                onChange={(e) =>
                  setBuildingsCount(
                    Math.max(
                      0,
                      Math.round(
                        Number(e.target.value) || 0
                      )
                    )
                  )
                }
                className="w-full"
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-xs mb-1">
                Indoor environment
              </label>
              <select
                value={indoorEnv}
                onChange={(e) => setIndoorEnv(e.target.value)}
                className="w-full"
                style={inputStyle}
              >
                <option value="standard">
                  Standard rooms and hallways (100 ft)
                </option>
                <option value="mixed">
                  Mixed rooms plus commons (125 ft)
                </option>
                <option value="largeopen">
                  Large open hard surface areas (150 ft)
                </option>
              </select>
            </div>
            <div>
              <label className="block text-xs mb-1">
                Building size
              </label>
              <select
                value={buildingSize}
                onChange={(e) => setBuildingSize(e.target.value)}
                className="w-full"
                style={inputStyle}
              >
                <option value="small">Small 50000 sq ft</option>
                <option value="medium">Medium 150000 sq ft</option>
                <option value="large">Large 300000 sq ft</option>
              </select>
            </div>
            <div className="sm:col-span-2 grid grid-cols-2 gap-2">
              {sharedOptions.map((opt) => (
                <label
                  key={opt}
                  className="inline-flex items-center gap-2 text-xs"
                >
                  <input
                    type="checkbox"
                    checked={sharedSpaces.includes(opt)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSharedSpaces([
                          ...sharedSpaces,
                          opt,
                        ]);
                      } else {
                        setSharedSpaces(
                          sharedSpaces.filter(
                            (s) => s !== opt
                          )
                        );
                      }
                    }}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <h3 className="m-0 text-[15px]">Weekly schedule</h3>
        <button
          type="button"
          onClick={addGuardScheduleRow}
          className="rounded-full px-3 py-2 text-xs font-extrabold"
          style={{
            background: "rgba(255,255,255,.07)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,.14)",
          }}
        >
          Add row
        </button>
      </div>

      {guardSchedule.length === 0 ? (
        <p className="text-sm m-0" style={{ color: "#aab3d0" }}>
          No schedule rows yet.
        </p>
      ) : (
        guardSchedule.map((row, idx) => (
          <ScheduleRow
            key={idx}
            row={row}
            idx={idx}
            sitesToShow={sitesToShow}
            onRemove={() => removeGuardScheduleRow(idx)}
            onDaysChange={(days) => {
              setGuardSchedule((prev) =>
                prev.map((r, i) =>
                  i === idx ? { ...r, days } : r
                )
              );
            }}
            onStartChange={(v) => {
              setGuardSchedule((prev) =>
                prev.map((r, i) =>
                  i === idx ? { ...r, startTime: v } : r
                )
              );
            }}
            onEndChange={(v) => {
              setGuardSchedule((prev) =>
                prev.map((r, i) =>
                  i === idx ? { ...r, endTime: v } : r
                )
              );
            }}
            onSiteChange={(v) => {
              setGuardSchedule((prev) =>
                prev.map((r, i) =>
                  i === idx
                    ? { ...r, siteIndex: Number(v) }
                    : r
                )
              );
            }}
            inputStyle={inputStyle}
          />
        ))
      )}

      <details>
        <summary
          className="text-sm cursor-pointer select-none"
          style={{ color: "#aab3d0" }}
        >
          Advanced
        </summary>
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div>
            <label className="block text-xs mb-1">
              Total guards on duty (optional)
            </label>
            <input
              type="number"
              min={0}
              value={totalGuardsOnDuty}
              onChange={(e) =>
                setTotalGuardsOnDuty(
                  e.target.value.trim() === ""
                    ? ""
                    : String(
                      Math.max(
                        0,
                        Math.round(
                          Number(
                            e.target.value
                          ) || 0
                        )
                      )
                    )
                )
              }
              placeholder=""
              className="w-full"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-xs mb-1">
              Safety factor
            </label>
            <input
              type="number"
              min={0.1}
              step={0.1}
              value={safetyFactor}
              onChange={(e) =>
                setSafetyFactor(
                  Math.max(
                    0.1,
                    Number(e.target.value) || 1.3
                  )
                )
              }
              className="w-full"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-xs mb-1">
              City block length in feet
            </label>
            <input
              type="number"
              min={1}
              value={blockFeet}
              onChange={(e) => {
                setBlockFeet(Math.max(1, Number(e.target.value) || 300));
              }}
              className="w-full"
              style={inputStyle}
            />
          </div>
        </div>
      </details>
    </div>
  );
}

function ScheduleRow({
  row,
  idx,
  sitesToShow,
  onRemove,
  onDaysChange,
  onStartChange,
  onEndChange,
  onSiteChange,
  inputStyle,
}: {
  row: GuardScheduleRow;
  idx: number;
  sitesToShow: GuardSite[];
  onRemove: () => void;
  onDaysChange: (days: string[]) => void;
  onStartChange: (v: string) => void;
  onEndChange: (v: string) => void;
  onSiteChange: (v: string) => void;
  inputStyle: React.CSSProperties;
}) {
  const toggleDay = (d: string) => {
    const next = row.days.includes(d)
      ? row.days.filter((x) => x !== d)
      : [...row.days, d];
    onDaysChange(next);
  };

  return (
    <div
      className="p-3 rounded-xl"
      style={{
        border: "1px solid rgba(255,255,255,.14)",
        background: "rgba(255,255,255,.04)",
      }}
    >
      <div className="flex flex-wrap gap-2 mb-2">
        {DAYS.map((d) => (
          <label
            key={d}
            className="inline-flex items-center gap-1 text-[11px]"
          >
            <input
              type="checkbox"
              checked={row.days.includes(d)}
              onChange={() => toggleDay(d)}
            />
            {d}
          </label>
        ))}
      </div>
      <div className="grid grid-cols-[120px_120px_1fr_auto] gap-2 items-end">
        <div>
          <label className="block text-xs mb-1">Start</label>
          <input
            type="time"
            value={row.startTime}
            onChange={(e) => onStartChange(e.target.value)}
            className="w-full"
            style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs mb-1">End</label>
          <input
            type="time"
            value={row.endTime}
            onChange={(e) => onEndChange(e.target.value)}
            className="w-full"
            style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs mb-1">Site</label>
          <select
            value={row.siteIndex}
            onChange={(e) => onSiteChange(e.target.value)}
            className="w-full"
            style={inputStyle}
          >
            {sitesToShow.map((s, i) => (
              <option key={s.id} value={i}>
                {s.name || `Site ${s.id}`}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="rounded-full px-3 py-2 text-xs"
          style={{
            background: "rgba(255,255,255,.07)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,.14)",
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

function NonGuardStep1({
  address,
  setAddress,
  vertical,
  otherSiteType,
  setOtherSiteType,
  indoorAvailable,
  indoorEnabled,
  setIndoorEnabled,
  buildingsCount,
  setBuildingsCount,
  staffPerBuilding,
  setStaffPerBuilding,
  indoorEnv,
  setIndoorEnv,
  buildingSize,
  setBuildingSize,
  sharedSpaces,
  setSharedSpaces,
  sharedOptions,
  outdoorEnabled,
  setOutdoorEnabled,
  outdoorTerrain,
  setOutdoorTerrain,
  terrainOptions,
  safetyFactor,
  setSafetyFactor,
  blockFeet,
  setBlockFeet,
  inputStyle,
}: {
  address: string;
  setAddress: (v: string) => void;
  vertical: Vertical;
  otherSiteType: string;
  setOtherSiteType: (v: string) => void;
  indoorAvailable: boolean;
  indoorEnabled: boolean;
  setIndoorEnabled: (v: boolean) => void;
  buildingsCount: number;
  setBuildingsCount: (v: number) => void;
  staffPerBuilding: number;
  setStaffPerBuilding: (v: number) => void;
  indoorEnv: string;
  setIndoorEnv: (v: string) => void;
  buildingSize: string;
  setBuildingSize: (v: string) => void;
  sharedSpaces: string[];
  setSharedSpaces: (v: string[] | ((p: string[]) => string[])) => void;
  sharedOptions: string[];
  outdoorEnabled: boolean;
  setOutdoorEnabled: (v: boolean) => void;
  outdoorTerrain: string;
  setOutdoorTerrain: (v: string) => void;
  terrainOptions: { v: string; l: string; }[];
  safetyFactor: number;
  setSafetyFactor: (v: number) => void;
  blockFeet: number;
  setBlockFeet: (v: number) => void;
  inputStyle: React.CSSProperties;
}) {
  const alwaysIndoor = vertical === "schools" || vertical === "medical";
  const heading =
    vertical === "outdoor"
      ? "Event footprint"
      : vertical === "parks"
        ? "Park section to cover"
        : "";

  return (
    <div className="flex flex-col gap-3">
      <div>
        <label className="block text-xs mb-1">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Street, city, ZIP"
          className="w-full"
          style={inputStyle}
        />
      </div>

      {vertical === "other" && (
        <div>
          <label className="block text-xs mb-1">Site type</label>
          <select
            value={otherSiteType}
            onChange={(e) => setOtherSiteType(e.target.value)}
            className="w-full"
            style={inputStyle}
          >
            <option value="outdoor">Outdoor only</option>
            <option value="indoor">Indoor only</option>
            <option value="both">Both</option>
          </select>
        </div>
      )}

      {indoorAvailable && (
        <div
          className="p-3 rounded-xl"
          style={{
            border: "1px solid rgba(255,255,255,.14)",
            background: "rgba(255,255,255,.04)",
          }}
        >
          {!alwaysIndoor && (
            <label className="inline-flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={indoorEnabled}
                onChange={(e) =>
                  setIndoorEnabled(e.target.checked)
                }
              />
              Indoor monitoring
            </label>
          )}
          {(alwaysIndoor || indoorEnabled) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              <div>
                <label className="block text-xs mb-1">
                  Buildings count
                </label>
                <input
                  type="number"
                  min={1}
                  value={buildingsCount}
                  onChange={(e) => {
                    const val = Math.max(0, Math.round(Number(e.target.value) || 0));
                    setBuildingsCount(val);
                  }}
                  className="w-full"
                  style={inputStyle}
                />
              </div>
              {(vertical === "schools" ||
                vertical === "medical") && (
                  <div>
                    <label className="block text-xs mb-1">
                      {vertical === "schools"
                        ? "Teachers per building"
                        : "Staff per building"}
                    </label>
                    <input
                      type="number"
                      min={1}
                      value={staffPerBuilding}
                      onChange={(e) => {
                        const val = Math.max(0, Math.round(Number(e.target.value) || 0));
                        setStaffPerBuilding(val);
                      }}
                      className="w-full"
                      style={inputStyle}
                    />
                  </div>
                )}
              <div>
                <label className="block text-xs mb-1">
                  Indoor environment
                </label>
                <select
                  value={indoorEnv}
                  onChange={(e) => setIndoorEnv(e.target.value)}
                  className="w-full"
                  style={inputStyle}
                >
                  <option value="standard">
                    Standard rooms and hallways (100 ft)
                  </option>
                  <option value="mixed">
                    Mixed rooms plus commons (125 ft)
                  </option>
                  <option value="largeopen">
                    Large open hard surface areas (150 ft)
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1">
                  Building size
                </label>
                <select
                  value={buildingSize}
                  onChange={(e) =>
                    setBuildingSize(e.target.value)
                  }
                  className="w-full"
                  style={inputStyle}
                >
                  <option value="small">
                    Small 50000 sq ft
                  </option>
                  <option value="medium">
                    Medium 150000 sq ft
                  </option>
                  <option value="large">
                    Large 300000 sq ft
                  </option>
                </select>
              </div>
              <div className="sm:col-span-2 grid grid-cols-2 gap-2">
                {sharedOptions.map((opt) => (
                  <label
                    key={opt}
                    className="inline-flex items-center gap-2 text-xs"
                  >
                    <input
                      type="checkbox"
                      checked={sharedSpaces.includes(opt)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSharedSpaces((p) => [
                            ...p,
                            opt,
                          ]);
                        } else {
                          setSharedSpaces((p) =>
                            p.filter((s) => s !== opt)
                          );
                        }
                      }}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div
        className="p-3 rounded-xl"
        style={{
          border: "1px solid rgba(255,255,255,.14)",
          background: "rgba(255,255,255,.04)",
        }}
      >
        {heading && (
          <div
            className="text-sm mb-1.5"
            style={{ color: "#aab3d0" }}
          >
            {heading}
          </div>
        )}
        {(vertical === "outdoor" || vertical === "parks") ? (
          <div>
            <label className="block text-xs mb-1">
              Terrain type
            </label>
            <select
              value={outdoorTerrain}
              onChange={(e) =>
                setOutdoorTerrain(e.target.value)
              }
              className="w-full"
              style={inputStyle}
            >
              {terrainOptions.map((o) => (
                <option key={o.v} value={o.v}>
                  {o.l}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <>
            <label className="inline-flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={outdoorEnabled}
                onChange={(e) =>
                  setOutdoorEnabled(e.target.checked)
                }
              />
              Include outdoor monitoring
            </label>
            {outdoorEnabled && (
              <div className="mt-2">
                <label className="block text-xs mb-1">
                  Terrain type
                </label>
                <select
                  value={outdoorTerrain}
                  onChange={(e) =>
                    setOutdoorTerrain(e.target.value)
                  }
                  className="w-full"
                  style={inputStyle}
                >
                  {terrainOptions.map((o) => (
                    <option key={o.v} value={o.v}>
                      {o.l}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}
      </div>

      <details>
        <summary
          className="text-sm cursor-pointer select-none"
          style={{ color: "#aab3d0" }}
        >
          Advanced
        </summary>
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label className="block text-xs mb-1">
              Safety factor
            </label>
            <input
              type="number"
              min={0.1}
              step={0.1}
              value={safetyFactor}
              onChange={(e) => {
                const val = Math.max(0.1, Number(e.target.value) || 1.3);
                setSafetyFactor(val);
              }}
              className="w-full"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-xs mb-1">
              City block length in feet
            </label>
            <input
              type="number"
              min={1}
              value={blockFeet}
              onChange={(e) => {
                setBlockFeet(Math.max(1, Number(e.target.value) || 300));
              }}
              className="w-full"
              style={inputStyle}
            />
          </div>
        </div>
      </details>
    </div>
  );
}
