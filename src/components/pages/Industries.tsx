"use client";

import Link from "next/link";
import Image from "next/image";

const TILES = [
  {
    href: "#outdoor",
    title: "Outdoor events",
    desc: "Gunshot awareness across flexible perimeters, no wiring and no cameras.",
    icon: "outdoor",
    iconColor: "blue",
  },
  {
    href: "#guards",
    title: "Guard companies",
    desc: "Portable coverage for patrol routes, lots, and temporary posts.",
    icon: "guards",
    iconColor: "pink",
  },
  {
    href: "#health",
    title: "Health care",
    desc: "Faster recognition and escalation for staff and on site security.",
    icon: "health",
    iconColor: "blue",
  },
  {
    href: "#schools",
    title: "Schools and colleges",
    desc: "A simple awareness layer for staff, responders, and administrators.",
    icon: "schools",
    iconColor: "pink",
  },
];

const INDUSTRIES = [
  {
    id: "outdoor",
    title: "Outdoor events",
    tag: "Festivals, parades, fairs",
    image: "/industries/parade.png",
    outcomes: [
      "Deploy coverage fast and move it as the perimeter changes",
      "Reduce false alerts with evidence across multiple devices",
      "Share a simple readiness report after the event",
    ],
    steps: [
      { b: "Place phones at nodes", span: "Entry, stage, dense areas, command post" },
      { b: "Assign roles", span: "Event admin, security lead, key staff" },
      { b: "Run and review", span: "Confirm events, then export the pilot summary" },
    ],
  },
  {
    id: "guards",
    title: "Guard companies",
    tag: "Posts, patrols, client sites",
    image: "/industries/guard.png",
    outcomes: [
      "Add a clear safety layer for clients without cameras or wiring",
      "Standardize alerts across posts and patrol routes",
      "Give supervisors visibility into coverage readiness",
    ],
    steps: [
      { b: "Pick one site", span: "Choose posts and patrol zones to cover" },
      { b: "Deploy the kit", span: "Arm coverage and assign supervisor roles" },
      { b: "Report readiness", span: "Uptime, armed time, and confirmed events" },
    ],
  },
  {
    id: "health",
    title: "Health care",
    tag: "Clinics, hospitals, ER",
    image: "/industries/ER.jpg",
    outcomes: [
      "Privacy first coverage with audio kept on device by default",
      "Role based escalation for security and leadership",
      "Operational reporting focused on device health and readiness",
    ],
    steps: [
      { b: "Place phones in key areas", span: "Reception, corridors, security, entry points" },
      { b: "Assign response roles", span: "Security, charge nurse, admin" },
      { b: "Validate in context", span: "Measure uptime and false alerts in your noise profile" },
    ],
  },
  {
    id: "schools",
    title: "Schools and colleges",
    tag: "Districts, campuses",
    image: "/industries/school.png",
    outcomes: [
      "Start with one building and expand only with evidence",
      "Clear messaging: no cameras and no audio stored by default",
      "Reduced false alerts through multi device confirmation",
    ],
    steps: [
      { b: "Define pilot scope", span: "One building, wing, or floor" },
      { b: "Assign roles", span: "Admin and SRO response roles" },
      { b: "Report and decide", span: "Readiness, false alerts, and coverage gaps" },
    ],
  },
];

const FAQ_ITEMS = [
  { q: "Does it record audio", a: "No. Audio is not stored or uploaded by default." },
  { q: "Do we need cameras or wiring", a: "No cameras and no wiring. Phones mount and power like any other device." },
  { q: "How do we reduce false alerts", a: "Confirm by evidence across multiple devices before escalation." },
];

export default function IndustriesPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Section 1: Hero - Black (same pattern as Home / HowItWorks) */}
      <section
        id="top"
        className="w-full pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 xl:px-12 bg-black"
        style={{
          scrollMarginTop: "calc(74px + 14px)",
          color: "#F3F6FF",
        }}
      >
        <div className="w-full max-w-[1800px] mx-auto">
          <div>
            <p
              className="text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-2 sm:mb-2.5 font-extrabold m-0"
              style={{ color: "rgba(243,246,255,0.60)" }}
            >
              Industries
            </p>
            <h1 className="text-[clamp(28px,5.5vw,56px)] sm:text-[clamp(34px,4.6vw,56px)] font-bold leading-[1.08] sm:leading-[1.05] tracking-[-0.04em] m-0">
              Gunshot detection you can deploy in minutes
            </h1>
            <p
              className="mt-3 sm:mt-3.5 text-sm sm:text-base leading-[1.55] m-0 max-w-[78ch]"
              style={{ color: "rgba(243,246,255,0.78)" }}
            >
              No cameras. No wiring. Audio stays private by default. Pick an industry to open a clear recommended setup and pilot plan.
            </p>
            <div className="flex gap-3 flex-wrap items-center mt-4 sm:mt-5">
              <Link
                href="/#about"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-0 px-4 sm:px-5 py-3 sm:py-2.5 rounded-full font-extrabold text-sm whitespace-nowrap transition-all hover:brightness-105 w-full sm:w-auto"
                style={{
                  background: "#006DFF",
                  color: "#fff",
                  border: "1px solid rgba(0,109,255,0.30)",
                  boxShadow: "0 16px 35px rgba(0,109,255,0.20)",
                }}
              >
                Book 15 min walkthrough <span className="opacity-95">→</span>
              </Link>
            </div>
          </div>

          {/* Industry tiles - 1 col mobile, 2 sm, 4 lg */}
          <div className="mt-6 sm:mt-8 lg:mt-9" aria-label="Industry picker">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-2">
              {TILES.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="relative flex gap-3 sm:gap-3.5 items-start p-4 rounded-xl sm:rounded-2xl min-h-[140px] sm:min-h-[165px] overflow-hidden transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.99] focus-visible:outline-[3px] focus-visible:outline-[rgba(0,109,255,0.55)] focus-visible:outline-offset-2"
                  style={{
                    background: "rgba(20,24,36,0.72)",
                    border: "1px solid rgba(243,246,255,0.14)",
                    boxShadow: "0 20px 46px rgba(0,0,0,0.26)",
                  }}
                >
                  {/* Decorative gradient */}
                  <div
                    className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] opacity-55 rotate-18 pointer-events-none"
                    style={{
                      background:
                        t.iconColor === "pink"
                          ? "radial-gradient(circle at 30% 30%, rgba(255,63,166,0.38), transparent 58%)"
                          : t.iconColor === "gray"
                            ? "radial-gradient(circle at 30% 30%, rgba(169,180,194,0.30), transparent 60%)"
                            : "radial-gradient(circle at 30% 30%, rgba(0,109,255,0.42), transparent 58%)",
                    }}
                  />
                  <div
                    className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-xl sm:rounded-[20px] flex items-center justify-center shrink-0 border shadow-[0_16px_34px_rgba(0,0,0,0.24)]"
                    style={{
                      background: t.iconColor === "pink" ? "#FF3FA6" : t.iconColor === "blue" ? "#006DFF" : "#0F1115",
                      borderColor: "rgba(255,255,255,0.20)",
                    }}
                  >
                    {t.icon === "outdoor" && (
                      <svg className="w-5 h-5 sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.98)" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s7-4.4 7-10V7l-7-4-7 4v4c0 5.6 7 10 7 10z" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                      </svg>
                    )}
                    {t.icon === "guards" && (
                      <svg className="w-5 h-5 sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.98)" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l7 4v6c0 5-3.2 9.2-7 10-3.8-.8-7-5-7-10V6l7-4z" />
                        <path d="M9 12h6" />
                      </svg>
                    )}
                    {t.icon === "health" && (
                      <svg className="w-5 h-5 sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.98)" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10z" />
                        <path d="M9 11h6" />
                        <path d="M12 8v6" />
                      </svg>
                    )}
                    {t.icon === "schools" && (
                      <svg className="w-5 h-5 sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.98)" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 10l8-5 8 5-8 5-8-5z" />
                        <path d="M6 12v6" />
                        <path d="M18 12v6" />
                        <path d="M8 19h8" />
                      </svg>
                    )}
                  </div>
                  <div className="relative min-w-0 flex-1">
                    <h3 className="text-base sm:text-[19px] font-extrabold tracking-[-0.02em] m-0 mt-0.5 leading-tight">
                      {t.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] leading-[1.4] m-0" style={{ color: "rgba(243,246,255,0.76)" }}>
                      {t.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Deployment Guides - White (same pattern as Home / HowItWorks) */}
      <section
        id="guides"
        className="w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white"
        style={{ scrollMarginTop: "calc(74px + 14px)" }}
      >
        <div
          className="max-w-[1800px] mx-auto "
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-2 sm:mb-2.5 font-extrabold m-0" style={{ color: "rgba(26,26,26,0.55)" }}>
            Recommended setups
          </p>
          <h2 className="text-[clamp(22px,3.3vw,40px)] sm:text-[clamp(26px,3.3vw,40px)] font-bold leading-[1.12] tracking-[-0.03em] m-0" style={{ color: "#1A1A1A" }}>
            Clear setup and pilot plan for each environment
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-[1.55] m-0 max-w-[82ch]" style={{ color: "rgba(26,26,26,0.70)" }}>
            Start small, validate in your environment, and expand only when the data supports it.
          </p>

          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="pt-5 mt-5 sm:pt-7 sm:mt-7 first:mt-0 first:pt-0"
              style={{ scrollMarginTop: "calc(74px + 14px)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-3">
                <h3 className="text-lg sm:text-[22px] font-bold tracking-[-0.02em] text-[#111] m-0">
                  {ind.title}
                </h3>
                <span
                  className="text-xs font-extrabold py-1.5 sm:py-2 px-2 sm:px-2.5 rounded-full whitespace-nowrap w-fit"
                  style={{
                    color: "rgba(26,26,26,0.60)",
                    border: "1px solid rgba(26,26,26,0.10)",
                    background: "rgba(26,26,26,0.03)",
                  }}
                >
                  {ind.tag}
                </span>
              </div>

              <div className="mt-4 sm:mt-5 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 sm:gap-5 lg:gap-6 items-stretch">
                {/* Outcomes card */}
                <div
                  className="rounded-2xl sm:rounded-[32px] p-3.5 sm:p-5 border shadow-[0_10px_24px_rgba(0,0,0,0.10)] flex flex-col min-h-0 overflow-hidden"
                  style={{
                    background: "#fff",
                    borderColor: "rgba(26,26,26,0.12)",
                  }}
                >
                  <div
                    className="rounded-t-2xl rounded-b-xl sm:rounded-[22px] overflow-hidden border-0 sm:border mb-2.5 sm:mb-3 relative w-[calc(100%+1.75rem)] min-w-[calc(100%+1.75rem)] -mx-3.5 sm:mx-0 sm:min-w-0 sm:w-full shrink-0 aspect-4/3 min-h-[120px] max-h-[200px] sm:min-h-0 sm:max-h-[240px] md:max-h-[280px] lg:max-h-[320px]"
                    style={{ borderColor: "rgba(26,26,26,0.10)" }}
                  >
                    <Image
                      src={ind.image}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold tracking-[-0.01em] text-[#111] m-0">
                    Outcomes
                  </h3>
                  <ul className="mt-1.5 sm:mt-2 pl-4 sm:pl-[18px] m-0 list-disc list-outside text-xs sm:text-sm font-normal leading-[1.55]" style={{ color: "#1A1A1A" }}>
                    {ind.outcomes.map((o, i) => (
                      <li key={i} className="my-1 sm:my-1.5">
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pilot setup card */}
                <div
                  className="rounded-2xl sm:rounded-[32px] p-3.5 sm:p-5 border shadow-[0_10px_24px_rgba(0,0,0,0.10)] flex flex-col min-h-0"
                  style={{
                    background: "#fff",
                    borderColor: "rgba(26,26,26,0.12)",
                  }}
                >
                  <h3 className="text-sm sm:text-base font-bold tracking-[-0.01em] text-[#111] m-0">
                    Pilot setup
                  </h3>
                  <ol className="mt-2.5 sm:mt-3 grid gap-2 sm:gap-2.5 list-none p-0 m-0">
                    {ind.steps.map((s, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 sm:gap-3 items-start p-2.5 sm:p-3 rounded-2xl sm:rounded-[18px]"
                        style={{
                          background: "rgba(26,26,26,0.03)",
                          border: "1px solid rgba(26,26,26,0.08)",
                        }}
                      >
                        <span
                          className="w-8 h-8 sm:w-[34px] sm:h-[34px] shrink-0 rounded-xl sm:rounded-[14px] flex items-center justify-center font-extrabold text-white text-sm shadow-[0_14px_28px_rgba(0,0,0,0.10)]"
                          style={{
                            background: i === 0 ? "#006DFF" : i === 1 ? "#FF3FA6" : "rgba(26,26,26,0.70)",
                          }}
                        >
                          {i + 1}
                        </span>
                        <div className="min-w-0">
                          <b className="block text-xs sm:text-[13px] font-extrabold tracking-[-0.01em] text-[#111] m-0">
                            {s.b}
                          </b>
                          <span className="block mt-0.5 text-xs sm:text-[13px] font-normal leading-[1.35]" style={{ color: "#1A1A1A" }}>
                            {s.span}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-auto pt-3 sm:pt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center">
                    <Link
                      href="/#about"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-0 px-4 py-2.5 rounded-full font-extrabold text-sm whitespace-nowrap transition-all hover:brightness-105 w-full sm:w-auto"
                      style={{
                        background: "#006DFF",
                        color: "#fff",
                        border: "1px solid rgba(0,109,255,0.30)",
                        boxShadow: "0 16px 35px rgba(0,109,255,0.20)",
                      }}
                    >
                      Book 15 min walkthrough <span className="opacity-95">→</span>
                    </Link>
                    <Link
                      href="#metrics"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-0 px-4 py-2.5 rounded-full font-extrabold text-sm whitespace-nowrap transition-all w-full sm:w-auto"
                      style={{
                        border: "1px solid rgba(26,26,26,0.14)",
                        background: "rgba(26,26,26,0.03)",
                        color: "rgba(26,26,26,0.92)",
                        boxShadow: "0 10px 22px rgba(0,0,0,0.06)",
                      }}
                    >
                      Pilot metrics <span className="opacity-95">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Metrics - Black (same pattern as Home / HowItWorks) */}
      <section
        id="metrics"
        className="w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-black"
        style={{ scrollMarginTop: "calc(74px + 14px)" }}
      >
        <div
          className="w-full max-w-[1800px] mx-auto "
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-2 sm:mb-2.5 font-extrabold m-0" style={{ color: "rgba(243,246,255,0.60)" }}>
            Pilot
          </p>
          <h2 className="text-[clamp(22px,3.3vw,40px)] sm:text-[clamp(26px,3.3vw,40px)] font-bold leading-[1.12] tracking-[-0.03em] m-0" style={{ color: "#F3F6FF" }}>
            What we measure
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-[1.55] m-0 max-w-[82ch]" style={{ color: "rgba(243,246,255,0.78)" }}>
            Simple numbers that help you decide. Deploy, measure, scale.
          </p>

          <div className="mt-4 sm:mt-5 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5">
            {/* Pilot report card */}
            <div
              className="rounded-2xl sm:rounded-[28px] p-4 sm:p-5 lg:p-6 border"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.12)",
                boxShadow: "0 18px 46px rgba(0,0,0,0.18)",
              }}
            >
              <h3 className="text-lg font-bold tracking-[-0.01em] mb-3 m-0" style={{ color: "rgba(243,246,255,0.94)" }}>
                Pilot report snapshot
              </h3>
              <div
                className="rounded-xl sm:rounded-[20px] border overflow-hidden min-w-0"
                style={{
                  borderColor: "rgba(255,255,255,0.14)",
                  background: "rgba(0,0,0,0.18)",
                }}
                aria-label="SplitSec branded pilot report image"
              >
                <svg viewBox="0 0 960 540" role="img" aria-hidden="true" className="w-full h-auto block min-w-0">
                  <defs>
                    <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#0b1630" />
                      <stop offset="1" stopColor="#17244a" />
                    </linearGradient>
                    <linearGradient id="acc" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#006DFF" />
                      <stop offset="1" stopColor="#FF3FA6" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="960" height="540" fill="url(#pg)" />
                  <rect x="88" y="86" width="390" height="360" rx="20" fill="#ffffff" />
                  <rect x="478" y="94" width="394" height="352" rx="20" fill="#f7f9ff" />
                  <rect x="98" y="96" width="370" height="50" rx="12" fill="url(#acc)" />
                  <text x="120" y="128" fill="#ffffff" fontFamily="Segoe UI, Arial, sans-serif" fontSize="22" fontWeight="700">SplitSec Pilot Report</text>
                  <rect x="120" y="170" width="312" height="10" rx="5" fill="#c6d1e9" />
                  <rect x="120" y="194" width="260" height="10" rx="5" fill="#c6d1e9" />
                  <rect x="120" y="250" width="120" height="120" rx="16" fill="#e8efff" />
                  <rect x="258" y="250" width="170" height="20" rx="10" fill="#d2ddf5" />
                  <rect x="258" y="284" width="150" height="20" rx="10" fill="#d2ddf5" />
                  <rect x="258" y="318" width="110" height="20" rx="10" fill="#d2ddf5" />
                  <circle cx="674" cy="248" r="76" fill="#e9f0ff" />
                  <path d="M674 248 L674 186 A62 62 0 1 1 621 279 Z" fill="#006DFF" />
                  <path d="M674 248 L621 279 A62 62 0 0 1 674 186 Z" fill="#FF3FA6" />
                  <rect x="566" y="352" width="218" height="16" rx="8" fill="#c5d2eb" />
                  <rect x="566" y="378" width="180" height="16" rx="8" fill="#c5d2eb" />
                  <rect x="566" y="404" width="145" height="16" rx="8" fill="#c5d2eb" />
                </svg>
              </div>
              <div className="mt-2.5 sm:mt-3 grid gap-2 sm:gap-2.5">
                {[
                  { b: "Weekly summary", s: "Median alert latency: 6.2 seconds from detection to responder notification." },
                  { b: "Signal quality", s: "False-alert rate remained low with corroboration and multi-device confirmation." },
                  { b: "Coverage status", s: "Armed time, battery health, and connectivity trends exported in one report." },
                ].map((n, i) => (
                  <div
                    key={i}
                    className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl"
                    style={{
                      background: "rgba(0,0,0,0.16)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <b className="block font-bold tracking-[-0.01em]" style={{ color: "rgba(243,246,255,0.94)" }}>
                      {n.b}
                    </b>
                    <span className="block mt-1 text-xs sm:text-[13px] leading-[1.45] font-semibold" style={{ color: "rgba(243,246,255,0.60)" }}>
                      {n.s}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ card */}
            <div
              className="rounded-2xl sm:rounded-[28px] p-4 sm:p-5 lg:p-6 border"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.12)",
                boxShadow: "0 18px 46px rgba(0,0,0,0.18)",
              }}
            >
              <h3 className="text-base sm:text-lg font-bold tracking-[-0.01em] mb-2.5 sm:mb-3 m-0" style={{ color: "rgba(243,246,255,0.94)" }}>
                Common questions
              </h3>
              <div className="grid gap-2 sm:gap-2.5" aria-label="Common questions">
                {FAQ_ITEMS.map((qa, i) => (
                  <div
                    key={i}
                    className="p-2.5 sm:p-3 rounded-2xl sm:rounded-[18px]"
                    style={{
                      background: "rgba(0,0,0,0.16)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <div className="flex items-start gap-2 sm:gap-2.5">
                      <span className="font-extrabold shrink-0 min-w-4" style={{ color: "rgba(243,246,255,0.92)" }}>
                        {i + 1}.
                      </span>
                      <b className="block font-bold tracking-[-0.01em] min-w-0" style={{ color: "rgba(243,246,255,0.92)" }}>
                        {qa.q}
                      </b>
                    </div>
                    <span className="block mt-1 sm:mt-1.5 text-xs sm:text-[13px] font-extrabold leading-[1.45]" style={{ color: "rgba(243,246,255,0.60)" }}>
                      {qa.a}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center">
                <Link
                  href="/#about"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-0 px-4 py-2.5 rounded-full font-extrabold text-sm whitespace-nowrap transition-all hover:brightness-105 w-full sm:w-auto"
                  style={{
                    background: "#006DFF",
                    color: "#fff",
                    border: "1px solid rgba(0,109,255,0.30)",
                    boxShadow: "0 16px 35px rgba(0,109,255,0.20)",
                  }}
                >
                  Book 15 min walkthrough <span className="opacity-95">→</span>
                </Link>
                <Link
                  href="#top"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-0 px-4 py-2.5 rounded-full font-extrabold text-sm whitespace-nowrap transition-all w-full sm:w-auto"
                  style={{
                    border: "1px solid rgba(243,246,255,0.16)",
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(243,246,255,0.92)",
                  }}
                >
                  Back to top <span className="opacity-95">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
