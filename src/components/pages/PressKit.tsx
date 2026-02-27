"use client";

import Image from "next/image";
import { useCallback } from "react";

const SECTION_PADDING = "py-10 sm:py-12";
const SECTION_PX = "px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28";

// Press logos for marquee
const PRESS_LOGOS = [
    { src: "/publications/AP.webp", alt: "Associated Press" },
    { src: "/publications/YF.webp", alt: "Yahoo" },
    { src: "/publications/NBC.svg", alt: "NBC" },
    { src: "/publications/CBS.webp", alt: "CBS" },
    { src: "/publications/FOX.webp", alt: "Fox" },
    { src: "/publications/ABC.webp", alt: "ABC" },
];

// App screenshots (external from splitsec.ai)
const APP_SCREENSHOTS = [
    {
        src: "https://www.splitsec.ai/images/press/Home%20screen%20parents.png",
        alt: "Home screen",
        caption: "Home",
        href: "https://www.splitsec.ai/images/press/Home%20screen%20parents.png",
    },
    {
        src: "https://www.splitsec.ai/images/press/Gunshot%20Detected%20screen.png",
        alt: "Gunshot detected screen",
        caption: "Gunshot detected",
        href: "https://www.splitsec.ai/images/press/Gunshot%20Detected%20screen.png",
    },
    {
        src: "https://www.splitsec.ai/images/press/Safety%20check%20screen.png",
        alt: "Safety check screen",
        caption: "Safety check",
        href: "https://www.splitsec.ai/images/press/Safety%20check%20screen.png",
    },
];

// Team photos (local)
const TEAM_PHOTOS = [
    { src: "/About/Sri portrait 1.JPG", alt: "Sri Deivasigamani", caption: "Sri", href: "https://drive.google.com/drive/folders/1Bu9RXhWCOxFTaF4xg9_NGZ_C14bhLEzh" },
    { src: "/About/Viet Portrait 1.JPG", alt: "Viet Nguyen", caption: "Viet", href: "https://drive.google.com/drive/folders/1y3sKIVRDHYw5jKKEBJOTGygpIVoH1sef" },
    { src: "/About/Pri portrait 1.JPG", alt: "Prithika Deivasigamani", caption: "Pri", href: "https://drive.google.com/drive/folders/1suWS7wNyucUpNPoKL3mdQB5AIYBjLf-X" },
];

const BOILERPLATE =
    "SplitSec.AI provides privacy first, on device gunshot detection on everyday smartphones. Our vision is to save lives through early detection and warning of gunshots. Our mission is to deliver instant, pocket sized alerts that help people get to safety without storing or transmitting audio.";

const QUICK_LINKS = [
    {
        title: "Fact sheet",
        subtitle: "One page overview and key points",
        href: "https://docs.google.com/document/d/1wkdq7lke_j5XWyxcU5KH-lUeRkgs6XwC/edit",
    },
    {
        title: "Logo pack",
        subtitle: "Wordmark, icon, light and dark",
        href: "https://drive.google.com/drive/folders/1yC2FF_16COltsSA12CHs623K5ABPCpK_?usp=share_link",
    },
    {
        title: "Photos and screenshots",
        subtitle: "Approved imagery for coverage",
        href: "https://drive.google.com/drive/folders/1nDlMu48JDWyUdVPL8L9qg1bHAyxcZ7P0",
    },
];

const FACTS = [
    { label: "Tagline", value: "Hear first. Move fast.", sub: "Messaging for press and social" },
    { label: "Vision", value: "Save lives", sub: "Save lives through early detection and warning of gunshots." },
    { label: "Founded", value: "2025", sub: "Chicago based team" },
    { label: "Media contact", value: "pri@splitsec.ai", sub: "Email for interviews and assets" },
];

const CARDS_OVERVIEW = [
    { title: "Tagline", text: "Hear first. Move fast." },
    { title: "Vision", text: "Save lives through early detection and warning of gunshots." },
    { title: "Mission", text: "Deliver instant, privacy first, pocket sized gunshot detection and clear alerts that help people get to safety." },
];

const DIFFERENTIATORS = [
    { title: "Privacy first", text: "All sound analysis happens on device. No audio is recorded or sent to the cloud." },
    { title: "Real time response", text: "Detects gunshots in under one second." },
    { title: "No extra hardware", text: "Runs on standard smartphones, making advanced safety technology accessible." },
    { title: "Patent protected", text: "Proprietary AI and IP portfolio focused on defensibility and trust." },
    { title: "AI for good", text: "Built to save lives while upholding privacy, transparency, and responsible AI practices." },
    { title: "Recognized innovation", text: "2025 Chicago Innovation Awards nominee." },
];

const EXEC_BIOS = [
    {
        name: "Sridhar Deivasigamani",
        role: "Founder and CEO",
        initials: "SD",
        blurb: "Leads SplitSec AI's mission to deliver privacy first, real time detection through everyday smartphones.",
        emailSubject: "Interview%20request%20for%20Sridhar%20Deivasigamani",
    },
    {
        name: "Viet Nguyen",
        role: "Chief Engineer, AI and ML",
        initials: "VN",
        blurb: "Builds and optimizes on device ML models trained on real world sounds for fast, reliable detection.",
        emailSubject: "Interview%20request%20for%20Viet%20Nguyen",
    },
    {
        name: "Prithika Deivasigamani",
        role: "Director of Strategy and Growth",
        initials: "PD",
        blurb: "Drives partnerships and go to market execution, bridging AI technology, public safety, and community impact.",
        emailSubject: "Interview%20request%20for%20Prithika%20Deivasigamani",
    },
];

const PRESS_MATERIALS = [
    { title: "Press release (September 2025)", subtitle: "PDF link listed on site, hosted as a Google Doc", href: "https://docs.google.com/document/d/11vcfIulDzmq5afvqXnWcugDcDBftrd0i/edit" },
    { title: "Fact sheet", subtitle: "Company overview, positioning, quick facts", href: "https://docs.google.com/document/d/1wkdq7lke_j5XWyxcU5KH-lUeRkgs6XwC/edit" },
    { title: "Executive bios", subtitle: "Extended bios and approved language", href: "https://docs.google.com/document/d/1StPPpOS-ptIQeOnnBgf2Op-qZDlN5SfC/edit" },
    { title: "Full press kit folder", subtitle: "Logos, images, videos, releases", href: "https://drive.google.com/drive/folders/1y3sKIVRDHYw5jKKEBJOTGygpIVoH1sef" },
];

const LOGO_LINKS = [
    { title: "Logo pack", subtitle: "Primary logo, wordmark, light and dark", href: "https://drive.google.com/drive/folders/1yC2FF_16COltsSA12CHs623K5ABPCpK_?usp=share_link" },
    { title: "Brand guidelines", subtitle: "Color, spacing, usage rules", href: "https://docs.google.com/document/d/14mtaCnNbtPyGLVg_ko4NYHgFvyIap9kg/edit?tab=t.0" },
];

export default function PressKit() {
    const handleCopyBoilerplate = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(BOILERPLATE);
            const btn = document.getElementById("copyBoiler");
            if (btn) {
                const old = btn.textContent;
                btn.textContent = "Copied";
                setTimeout(() => { btn.textContent = old; }, 1200);
            }
        } catch {
            // Fallback: select the text
            const pre = document.getElementById("boilerText");
            if (pre) {
                const r = document.createRange();
                r.selectNode(pre);
                window.getSelection()?.removeAllRanges();
                window.getSelection()?.addRange(r);
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#0f1115] overflow-x-hidden" style={{ scrollPaddingTop: "86px" }}>
            {/* HERO */}
            <section id="top" className={`pt-20 sm:pt-24 pb-10 sm:pb-12 ${SECTION_PX} bg-[#0f1115] border-b border-[rgba(243,246,255,0.10)]`}>
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-9 items-start">
                        <div>
                            <p className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: "rgba(243,246,255,0.62)" }}>
                                Press Kit
                            </p>
                            <h1 className="text-[clamp(40px,5vw,62px)] font-bold leading-[1.04] tracking-[-0.05em] max-w-[20ch] m-0" style={{ color: "#E9ECF8" }}>
                                Press materials, ready to use
                            </h1>
                            <p className="mt-3.5 text-lg leading-[1.55] max-w-[74ch]" style={{ color: "rgba(233,236,248,0.60)" }}>
                                Logos, screenshots, fact sheet, executive bios, and official media contact for SplitSec.AI.
                            </p>

                            <div className="flex flex-wrap gap-3 items-center mt-4">
                                <a
                                    href="https://drive.google.com/drive/folders/1y3sKIVRDHYw5jKKEBJOTGygpIVoH1sef"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-black border shadow-[0_18px_45px_rgba(0,109,255,0.26)] hover:brightness-105 transition-all"
                                    style={{
                                        background: "#006dff",
                                        borderColor: "rgba(0,109,255,0.30)",
                                        color: "#fff",
                                    }}
                                >
                                    Download press kit folder →
                                </a>
                                <a
                                    href="mailto:pri@splitsec.ai?subject=SplitSec.AI%20media%20request"
                                    className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-black border border-[rgba(243,246,255,0.12)] bg-[rgba(255,255,255,0.06)] text-[rgba(243,246,255,0.92)] shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:brightness-105 transition-all"
                                >
                                    Email media contact →
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-2.5 mt-4">
                                <div className="inline-flex items-center gap-2.5 px-3 py-2.5 rounded-full border border-[rgba(243,246,255,0.12)] bg-[rgba(255,255,255,0.04)] text-[rgba(243,246,255,0.86)] font-extrabold text-sm">
                                    <span className="w-2 h-2 rounded-full bg-[#FF3FA6] shadow-[0_0_0_6px_rgba(255,63,166,0.14)]" aria-hidden />
                                    <span className="opacity-80 font-extrabold">Tagline</span>&nbsp;Hear first. Move fast.
                                </div>
                                <div className="inline-flex items-center gap-2.5 px-3 py-2.5 rounded-full border border-[rgba(243,246,255,0.12)] bg-[rgba(255,255,255,0.04)] text-[rgba(243,246,255,0.86)] font-extrabold text-sm">
                                    <span className="w-2 h-2 rounded-full bg-[#006DFF] shadow-[0_0_0_6px_rgba(0,109,255,0.12)]" aria-hidden />
                                    <span className="opacity-80 font-extrabold">HQ</span>&nbsp;Chicago, IL
                                </div>
                            </div>
                        </div>

                        <div
                            className="rounded-2xl border p-5 sm:p-6"
                            style={{ borderColor: "rgba(233,236,248,0.12)" }}
                            aria-label="Media quick links"
                        >
                            <div className="text-lg font-black tracking-[-0.02em]" style={{ color: "#E9ECF8" }}>Quick picks</div>
                            <p className="mt-2 text-[15px] leading-[1.55]" style={{ color: "rgba(233,236,248,0.60)" }}>
                                Most requested assets for journalists and partners.
                            </p>
                            <div className="mt-3.5 space-y-2.5">
                                {QUICK_LINKS.map((link) => (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between gap-3 px-3 py-3 rounded-2xl border transition-colors hover:border-[rgba(252,69,166,0.4)] hover:shadow-[0_12px_40px_rgba(252,69,166,0.15)] min-w-0"
                                        style={{ borderColor: "rgba(233,236,248,0.12)", background: "rgba(255,255,255,0.03)" }}
                                    >
                                        <div className="min-w-0 flex-1">
                                            <div className="font-black truncate sm:overflow-visible sm:whitespace-normal" style={{ color: "#E9ECF8" }}>{link.title}</div>
                                            <div className="text-sm line-clamp-2" style={{ color: "rgba(233,236,248,0.65)" }}>{link.subtitle}</div>
                                        </div>
                                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors  group-hover:text-[#FC45A6]" style={{ borderColor: "rgba(233,236,248,0.2)", color: "rgba(233,236,248,0.65)" }} aria-hidden>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#006DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </span>
                                    </a>
                                ))}
                            </div>
                            <p className="mt-3 text-[13px] leading-[1.5]" style={{ color: "rgba(233,236,248,0.60)" }}>
                                Need more? Use the full folder link.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW - White strip */}
            <section id="overview" className={`${SECTION_PADDING} ${SECTION_PX} bg-white`}>
                <div className="max-w-[1800px] mx-auto">
                    <div>
                        <h2 className="text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] m-0" style={{ color: "#1D1D1F" }}>
                            Company overview
                        </h2>
                        <p className="mt-2.5 text-lg leading-[1.55] max-w-[78ch]" style={{ color: "rgba(29,29,31,0.65)" }}>
                            SplitSec.AI helps teams recognize suspected gunfire fast, with privacy first on device detection.
                        </p>
                    </div>

                    <div className="mt-5 sm:mt-6 rounded-2xl border border-gray-200 bg-gray-100 overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {FACTS.map((f, i) => (
                            <div
                                key={f.label}
                                className={`p-4 sm:p-5 ${i < FACTS.length - 1 ? "sm:border-r border-b sm:border-b-0 border-gray-200" : ""}`}
                                role="listitem"
                            >
                                <div className="text-xs font-black uppercase tracking-[0.12em]" style={{ color: "rgba(29,29,31,0.65)" }}>
                                    {f.label}
                                </div>
                                <div className="mt-2 text-lg font-black tracking-[-0.02em]" style={{ color: "#1D1D1F" }}>
                                    {f.value}
                                </div>
                                <div className="mt-1.5 text-[13px] leading-[1.35]" style={{ color: "rgba(29,29,31,0.65)" }}>
                                    {f.sub}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {CARDS_OVERVIEW.map((card) => (
                            <div
                                key={card.title}
                                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
                            >
                                <h3 className="text-lg font-bold tracking-[-0.02em] m-0" style={{ color: "#1D1D1F" }}>{card.title}</h3>
                                <p className="mt-2.5 text-base leading-[1.55]" style={{ color: "rgba(29,29,31,0.65)" }}>
                                    {card.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 sm:mt-6 rounded-2xl border border-gray-200 bg-gray-100 p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                            <div className="font-black tracking-[-0.02em]" style={{ color: "#1D1D1F" }}>Short boilerplate</div>
                            <button
                                id="copyBoiler"
                                onClick={handleCopyBoilerplate}
                                className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 font-black text-sm cursor-pointer hover:bg-gray-50 transition-colors"
                                style={{ color: "#1D1D1F" }}
                            >
                                Copy
                            </button>
                        </div>
                        <pre
                            id="boilerText"
                            className="mt-3 whitespace-pre-wrap font-mono text-[13px] leading-[1.55] m-0"
                            style={{ color: "rgba(29,29,31,0.65)" }}
                        >
                            {BOILERPLATE}
                        </pre>
                    </div>

                    {/* Press marquee */}
                    <div className="mt-4 sm:mt-5 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 overflow-hidden min-w-0" aria-label="Press outlets">
                        <div className="font-black tracking-[-0.02em]" style={{ color: "#1D1D1F" }}>Press</div>
                        <div className="mt-3.5 flex gap-3 sm:gap-4 items-center w-max animate-press-marquee" aria-hidden>
                            {[...PRESS_LOGOS, ...PRESS_LOGOS].map((logo, i) => (
                                <div
                                    key={`${logo.alt}-${i}`}
                                    className="h-[72px] sm:h-[86px] min-w-[160px] sm:min-w-[200px] px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={165}
                                        height={52}
                                        className="h-8 sm:h-[52px] w-auto max-w-[140px] sm:max-w-[165px] object-contain object-center grayscale contrast-[1.05]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATORS - Dark */}
            <section id="differentiators" className={`${SECTION_PADDING} ${SECTION_PX} bg-[#0f1115]`}>
                <div className="max-w-[1800px] mx-auto">
                    <div>
                        <h2 className="text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] m-0" style={{ color: "#E9ECF8" }}>
                            Key differentiators
                        </h2>
                        <p className="mt-2.5 text-lg leading-[1.55] max-w-[78ch]" style={{ color: "rgba(233,236,248,0.60)" }}>
                            Fast awareness without cameras, wiring, or audio collection.
                        </p>
                    </div>
                    <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {DIFFERENTIATORS.map((d) => (
                            <div
                                key={d.title}
                                className="rounded-2xl border p-5 sm:p-6"
                                style={{ borderColor: "rgba(233,236,248,0.12)" }}
                            >
                                <h3 className="text-lg font-bold tracking-[-0.02em] m-0" style={{ color: "#E9ECF8" }}>{d.title}</h3>
                                <p className="mt-2.5 leading-[1.55]" style={{ color: "rgba(233,236,248,0.65)" }}>
                                    {d.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 sm:mt-5 rounded-2xl border p-5 sm:p-6" style={{ borderColor: "rgba(233,236,248,0.12)" }}>
                        <div className="font-black tracking-[-0.02em]" style={{ color: "#E9ECF8" }}>Product roadmap</div>
                        <p className="mt-2.5 text-[15px] leading-[1.6] max-w-[90ch]" style={{ color: "rgba(233,236,248,0.65)" }}>
                            SplitSec AI plans to begin public beta testing later in 2025, followed by a full consumer launch in early 2026. Each release phase will be staggered by platform, with Android availability first and iOS following within a few weeks.
                        </p>
                    </div>
                </div>
            </section>

            {/* ASSETS - White strip */}
            <section id="assets" className={`${SECTION_PADDING} ${SECTION_PX} bg-white`}>
                <div className="max-w-[1800px] mx-auto">
                    <div>
                        <h2 className="text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] m-0" style={{ color: "#1D1D1F" }}>
                            Media assets
                        </h2>
                        <p className="mt-2.5 text-lg leading-[1.55] max-w-[78ch]" style={{ color: "rgba(29,29,31,0.65)" }}>
                            Use these to build a consistent story, then download originals from the full folder.
                        </p>
                    </div>

                    <div className="mt-5 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 md:p-6 min-w-0">
                            <div className="flex items-center justify-between gap-2 sm:gap-3 flex-wrap">
                                <h3 className="text-base sm:text-lg font-bold tracking-[-0.02em] m-0 min-w-0" style={{ color: "#1D1D1F" }}>
                                    Press materials
                                </h3>
                                <span className="text-[12px] sm:text-[13px] font-extrabold shrink-0" style={{ color: "rgba(29,29,31,0.65)" }}>
                                    Docs and official files
                                </span>
                            </div>
                            <div className="mt-3 space-y-2.5">
                                {PRESS_MATERIALS.map((m) => (
                                    <a
                                        key={m.title}
                                        href={m.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between gap-3 px-3 py-3 rounded-2xl border border-gray-200 bg-gray-50 hover:border-[rgba(0,109,255,0.30)] hover:bg-[rgba(0,109,255,0.05)] transition-colors"
                                    >
                                        <div>
                                            <div className="font-black" style={{ color: "#1D1D1F" }}>{m.title}</div>
                                            <div className="text-[13px]" style={{ color: "rgba(29,29,31,0.65)" }}>{m.subtitle}</div>
                                        </div>
                                        <span className="text-[13px]" style={{ color: "rgba(29,29,31,0.65)" }}>Open</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 md:p-6 min-w-0">
                            <div className="flex items-center justify-between gap-2 sm:gap-3 flex-wrap">
                                <h3 className="text-base sm:text-lg font-bold tracking-[-0.02em] m-0 min-w-0" style={{ color: "#1D1D1F" }}>
                                    Logos and brand
                                </h3>
                                <span className="text-[12px] sm:text-[13px] font-extrabold shrink-0" style={{ color: "rgba(29,29,31,0.65)" }}>
                                    Quick access
                                </span>
                            </div>
                            <div className="mt-3 space-y-2.5">
                                {LOGO_LINKS.map((m) => (
                                    <a
                                        key={m.title}
                                        href={m.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between gap-3 px-3 py-3 rounded-2xl border border-gray-200 bg-gray-50 hover:border-[rgba(0,109,255,0.30)] hover:bg-[rgba(0,109,255,0.05)] transition-colors"
                                    >
                                        <div>
                                            <div className="font-black" style={{ color: "#1D1D1F" }}>{m.title}</div>
                                            <div className="text-[13px]" style={{ color: "rgba(29,29,31,0.65)" }}>{m.subtitle}</div>
                                        </div>
                                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 transition-colors group-hover:border-[rgba(0,109,255,0.4)] group-hover:text-[#006DFF]" style={{ color: "rgba(29,29,31,0.65)" }} aria-hidden>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#006DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </span>
                                    </a>
                                ))}
                                <div
                                    className="flex items-center justify-between gap-3 px-3 py-3 rounded-2xl border border-gray-200 bg-gray-50"
                                    role="note"
                                    aria-label="Name usage guidance"
                                >
                                    <div>
                                        <div className="font-black" style={{ color: "#1D1D1F" }}>Name usage</div>
                                        <div className="text-[13px]" style={{ color: "rgba(29,29,31,0.65)" }}>
                                            Use SplitSec.AI in headlines. Use SplitSec AI in body copy if punctuation is constrained.
                                        </div>
                                    </div>
                                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-gray-200" style={{ color: "rgba(29,29,31,0.65)" }} aria-hidden>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="12" y1="16" x2="12" y2="12" />
                                            <line x1="12" y1="8" x2="12.01" y2="8" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* App screenshots + Photos grid */}
                    <div className="mt-4 sm:mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 md:p-6 min-w-0">
                            <div className="flex items-center justify-between gap-2 sm:gap-3 flex-wrap">
                                <h3 className="text-base sm:text-lg font-bold tracking-[-0.02em] m-0 min-w-0" style={{ color: "#1D1D1F" }}>
                                    App screenshots
                                </h3>
                                <span className="text-[12px] sm:text-[13px] font-extrabold shrink-0" style={{ color: "rgba(29,29,31,0.65)" }}>
                                    Preview
                                </span>
                            </div>
                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                                {APP_SCREENSHOTS.map((item) => (
                                    <a
                                        key={item.alt}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-xl sm:rounded-2xl border border-gray-200 bg-white overflow-hidden aspect-[4/3] relative group min-w-0"
                                        aria-label={item.alt}
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                                        />
                                        <div className="absolute left-1.5 right-1.5 sm:left-2.5 sm:right-2.5 bottom-1.5 sm:bottom-2.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-full bg-black/60 text-white text-[10px] sm:text-xs font-extrabold backdrop-blur-sm truncate">
                                            {item.caption}
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className="mt-3 sm:mt-3.5">
                                <a
                                    href="https://drive.google.com/drive/folders/1suWS7wNyucUpNPoKL3mdQB5AIYBjLf-X"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full font-black border border-gray-200 bg-white transition-all hover:scale-[1.02] text-sm sm:text-base"
                                    style={{ color: "#006dff" }}
                                >
                                    Download all screenshots →
                                </a>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 md:p-6 min-w-0">
                            <div className="flex items-center justify-between gap-2 sm:gap-3 flex-wrap">
                                <h3 className="text-base sm:text-lg font-bold tracking-[-0.02em] m-0 min-w-0" style={{ color: "#1D1D1F" }}>
                                    Photos
                                </h3>
                                <span className="text-[12px] sm:text-[13px] font-extrabold shrink-0" style={{ color: "rgba(29,29,31,0.65)" }}>
                                    Preview
                                </span>
                            </div>
                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                                {TEAM_PHOTOS.map((item) => (
                                    <a
                                        key={item.alt}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-xl sm:rounded-2xl border border-gray-200 bg-white overflow-hidden aspect-[4/3] relative group min-w-0"
                                        aria-label={`${item.alt} photo`}
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                                        />
                                        <div className="absolute left-1.5 right-1.5 sm:left-2.5 sm:right-2.5 bottom-1.5 sm:bottom-2.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-full bg-black/60 text-white text-[10px] sm:text-xs font-extrabold backdrop-blur-sm truncate">
                                            {item.caption}
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className="mt-3 sm:mt-3.5">
                                <a
                                    href="https://drive.google.com/drive/folders/1Bu9RXhWCOxFTaF4xg9_NGZ_C14bhLEzh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full font-black border border-gray-200 bg-white transition-all hover:scale-[1.02] text-sm sm:text-base"
                                    style={{ color: "#006dff" }}
                                >
                                    Download all photos →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BIOS - Dark */}
            <section id="bios" className={`${SECTION_PADDING} ${SECTION_PX} bg-[#0f1115]`}>
                <div className="max-w-[1800px] mx-auto">
                    <div>
                        <h2 className="text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] m-0" style={{ color: "#E9ECF8" }}>
                            Executive bios
                        </h2>
                        <p className="mt-2.5 text-lg leading-[1.55] max-w-[78ch]" style={{ color: "rgba(233,236,248,0.60)" }}>
                            Short bios for fast media use, plus the long form bio document.
                        </p>
                    </div>
                    <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {EXEC_BIOS.map((bio) => (
                            <div
                                key={bio.name}
                                className="rounded-2xl border p-5 sm:p-6 flex flex-col gap-3"
                                style={{ borderColor: "rgba(233,236,248,0.12)" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-[52px] h-[52px] rounded-[18px] flex items-center text-gray-100 justify-center font-black text-lg shrink-0"
                                        style={{
                                            border: "1px solid rgba(243,246,255,0.14)",
                                        }}
                                    >
                                        {bio.initials}
                                    </div>
                                    <div>
                                        <div className="font-black tracking-[-0.02em] text-gray-100">{bio.name}</div>
                                        <div className="text-[13px] font-extrabold" style={{ color: "rgba(233,236,248,0.65)" }}>
                                            {bio.role}
                                        </div>
                                    </div>
                                </div>
                                <p className="m-0 leading-[1.5]" style={{ color: "rgba(243,246,255,0.76)" }}>
                                    {bio.blurb}
                                </p>
                                <div className="mt-auto pt-2">
                                    <a
                                        href={`mailto:pri@splitsec.ai?subject=${bio.emailSubject}`}
                                        className="inline-flex items-center gap-2.5 px-3 py-2.5 rounded-full border border-[rgba(243,246,255,0.16)] text-[rgba(243,246,255,0.9)] font-extrabold text-sm hover:bg-[rgba(255,255,255,0.06)] transition-colors"
                                    >
                                        Request interview
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 sm:mt-5">
                        <a
                            href="https://docs.google.com/document/d/1StPPpOS-ptIQeOnnBgf2Op-qZDlN5SfC/edit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-black border shadow-[0_18px_45px_rgba(0,109,255,0.26)] hover:brightness-105 transition-all"
                            style={{
                                background: "#006dff",
                                borderColor: "rgba(0,109,255,0.30)",
                                color: "#fff",
                            }}
                        >
                            Open executive bios (Google Doc) →
                        </a>
                    </div>
                </div>
            </section>

            {/* VIDEOS - White */}
            <section id="videos" className={`${SECTION_PADDING} ${SECTION_PX} bg-white`}>
                <div className="max-w-[1800px] mx-auto">
                    <div>
                        <h2 className="text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] m-0" style={{ color: "#1D1D1F" }}>
                            Videos
                        </h2>
                        <p className="mt-2.5 text-lg leading-[1.55] max-w-[78ch]" style={{ color: "rgba(29,29,31,0.65)" }}>
                            Founder story and technical walkthrough. Use the folder link to access the latest versions.
                        </p>
                    </div>
                    <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                            <h3 className="text-lg font-bold tracking-[-0.02em] m-0" style={{ color: "#1D1D1F" }}>Sri, why we built SplitSec AI</h3>
                            <p className="mt-2.5 text-[15px]" style={{ color: "rgba(29,29,31,0.65)" }}>
                                Founder story and mission
                            </p>
                            <div className="mt-3">
                                <a
                                    href="https://drive.google.com/drive/folders/1nDlMu48JDWyUdVPL8L9qg1bHAyxcZ7P0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-black border border-gray-200 bg-white transition-all hover:scale-[1.02]"
                                    style={{ color: "#006dff" }}
                                >
                                    Open videos folder →
                                </a>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                            <h3 className="text-lg font-bold tracking-[-0.02em] m-0" style={{ color: "#1D1D1F" }}>Viet, how SplitSec AI works</h3>
                            <p className="mt-2.5 text-[15px]" style={{ color: "rgba(29,29,31,0.65)" }}>
                                Technical overview and demo
                            </p>
                            <div className="mt-3">
                                <a
                                    href="https://drive.google.com/drive/folders/1nDlMu48JDWyUdVPL8L9qg1bHAyxcZ7P0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-black border border-gray-200 bg-white transition-all hover:scale-[1.02]"
                                    style={{ color: "#006dff" }}
                                >
                                    Open videos folder →
                                </a>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                            <h3 className="text-lg font-bold tracking-[-0.02em] m-0" style={{ color: "#1D1D1F" }}>Need a custom clip</h3>
                            <p className="mt-2.5 text-[15px]" style={{ color: "rgba(29,29,31,0.65)" }}>
                                We can provide short b roll, demo capture, or voiceover versions for your format.
                            </p>
                            <div className="mt-3">
                                <a
                                    href="mailto:pri@splitsec.ai?subject=SplitSec%20AI%20video%20request"
                                    className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-black border border-gray-200 bg-white transition-all hover:scale-[1.02]"
                                    style={{ color: "#006dff" }}
                                >
                                    Request video assets →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT - Dark */}
            <section id="contact" className={`${SECTION_PADDING} ${SECTION_PX} bg-[#0f1115]`}>
                <div className="max-w-[1800px] mx-auto">
                    <div>
                        <h2 className="text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] m-0" style={{ color: "#E9ECF8" }}>
                            Media contact
                        </h2>
                        <p className="mt-2.5 text-lg leading-[1.55] max-w-[78ch]" style={{ color: "rgba(233,236,248,0.60)" }}>
                            For interviews, quotes, and asset requests.
                        </p>
                    </div>
                    <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-2xl border p-5 sm:p-6" style={{ borderColor: "rgba(233,236,248,0.12)" }}>
                            <h3 className="text-lg font-bold tracking-[-0.02em] m-0" style={{ color: "#E9ECF8" }}>Email</h3>
                            <p className="mt-2.5 text-lg font-black" style={{ color: "#E9ECF8" }}>
                                pri@splitsec.ai
                            </p>
                            <p className="mt-1.5 text-sm leading-[1.5]" style={{ color: "rgba(233,236,248,0.65)" }}>
                                Response within one business day.
                            </p>
                            <div className="mt-3">
                                <a
                                    href="mailto:pri@splitsec.ai?subject=SplitSec%20AI%20media%20request"
                                    className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-black border shadow-[0_18px_45px_rgba(0,109,255,0.26)] hover:brightness-105 transition-all"
                                    style={{
                                        background: "#006dff",
                                        borderColor: "rgba(0,109,255,0.30)",
                                        color: "#fff",
                                    }}
                                >
                                    Email now →
                                </a>
                            </div>
                        </div>
                        <div className="rounded-2xl border p-5 sm:p-6" style={{ borderColor: "rgba(233,236,248,0.12)" }}>
                            <h3 className="text-lg font-bold tracking-[-0.02em] m-0" style={{ color: "#E9ECF8" }}>Quick guidance</h3>
                            <p className="mt-2.5 text-sm leading-[1.55]" style={{ color: "rgba(233,236,248,0.65)" }}>
                                SplitSec.AI is privacy first. Detection runs on device. Audio is not recorded or sent to the cloud during normal operation.
                            </p>
                            <p className="mt-2 text-sm leading-[1.55]" style={{ color: "rgba(233,236,248,0.65)" }}>
                                For pilots and operations, alerts and external integrations may use connectivity when available.
                            </p>
                        </div>
                        <div className="rounded-2xl border p-5 sm:p-6" style={{ borderColor: "rgba(233,236,248,0.12)" }}>
                            <h3 className="text-lg font-bold tracking-[-0.02em] m-0" style={{ color: "#E9ECF8" }}>Download</h3>
                            <p className="mt-2.5 text-sm leading-[1.55]" style={{ color: "rgba(233,236,248,0.65)" }}>
                                All approved assets live here. Use this for logos, screenshots, and video.
                            </p>
                            <div className="mt-3">
                                <a
                                    href="https://drive.google.com/drive/folders/1y3sKIVRDHYw5jKKEBJOTGygpIVoH1sef"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-black border border-[rgba(243,246,255,0.12)] bg-[rgba(255,255,255,0.06)] text-[rgba(243,246,255,0.92)] shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:brightness-105 transition-all"
                                >
                                    Press kit folder →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
