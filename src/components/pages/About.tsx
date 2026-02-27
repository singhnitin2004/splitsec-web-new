"use client";

import Image from "next/image";
import Link from "next/link";

// Design tokens from Home.tsx / reference HTML
const COLORS = {
    blue: "#006DFF",
    pink: "#FF3FA6",
    orange: "#FF9C00",
    darkBg: "#0F1115",
    darkSurface: "#0B0F1A",
    inkLight: "rgba(243,246,255,0.92)",
    muted: "rgba(243,246,255,0.76)",
    muted2: "rgba(243,246,255,0.58)",
    darkText: "rgba(11,15,26,0.94)",
    darkMuted: "rgba(11,15,26,0.70)",
};

// Section layout: same as Home.tsx
const SECTION_PADDING = "px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28";
const SECTION_INNER = "max-w-[1800px] mx-auto";

// Publications for press section (from Home)
const PRESS_LOGOS = [
    { src: "/publications/AP.webp", alt: "Associated Press" },
    { src: "/publications/YF.webp", alt: "Yahoo" },
    { src: "/publications/NBC.svg", alt: "NBC" },
    { src: "/publications/CBS.webp", alt: "CBS" },
    { src: "/publications/FOX.webp", alt: "Fox" },
    { src: "/publications/ABC.webp", alt: "ABC" },
];

// Core team
const CORE_TEAM = [
    { name: "Sri Deivasigamani", role: "Founder and CEO", initials: "SD", linkedin: "https://www.linkedin.com/in/srideivas/", image: "/About/sri.jpeg" },
    { name: "Viet Nguyen", role: "Chief Engineer AI ML Sound", initials: "VN", linkedin: "https://www.linkedin.com/in/quangvietnguyen/", image: "/About/viet.jpeg" },
    { name: "Prithika Deivasigamani", role: "Operations and marketing", initials: "PD", linkedin: "https://www.linkedin.com/in/prithika-deivasigamani/", image: "/About/pri.jpeg" },
    { name: "Rod Harrison", role: "Advisor", initials: "RH", linkedin: "https://www.linkedin.com/in/rod-harrison-4ba7a2144/", image: "/About/rod.jpeg" },
    { name: "Cheng Ning Jong", role: "Patent counsel", initials: "CN", linkedin: "https://www.linkedin.com/in/cheng-ning-jong-p-e-5aa7005/", image: "/About/Cheng.jpeg" },
    { name: "Sivaprasad Akasam", role: "Technical specifications", initials: "SA", linkedin: "https://www.linkedin.com/in/sivaprasad-akasam/", image: "/About/siva.jpeg" },
    { name: "Naresh Bharadwaj", role: "Business Development", initials: "NB", linkedin: "https://www.linkedin.com/in/nareshbharadwaj/", image: "/About/naresh.jpeg" },
];

// Founding story video (local file from public/About/)
const FOUNDING_VIDEO_SRC = "/About/" + encodeURIComponent("Why I Founded SplitSec AI _ Sri Deivasigamani, CEO & Founder.mp4");

// Advisory committee
const ADVISORS = [
    { name: "James Dunleavy", role: "Law enforcement & crisis response", initials: "JD", linkedin: "https://www.linkedin.com/in/james-dunleavy-456505195/", image: "/About/james.jpeg" },
    { name: "Kim Jones", role: "Public safety & justice", initials: "KJ", linkedin: "https://www.linkedin.com/in/kim-jones-security-advisor/", image: "/About/kim.png" },
];

function PersonCard({
    name,
    role,
    initials,
    linkedin,
    image,
}: {
    name: string;
    role: string;
    initials: string;
    linkedin: string;
    image?: string;
}) {
    return (
        <div className="group relative rounded-[22px] p-6 sm:p-7 border border-[rgba(11,15,26,0.10)] bg-[rgba(11,15,26,0.03)] overflow-hidden text-center transition-all duration-180 hover:-translate-y-0.5 hover:border-[rgba(0,109,255,0.22)] hover:shadow-[0_18px_46px_rgba(0,0,0,0.10)]">
            <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 scale-95 transition-all duration-180 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto"
                style={{
                    background: COLORS.blue,
                    boxShadow: "0 10px 22px rgba(0,109,255,0.20)",
                }}
                aria-label={`${name} on LinkedIn`}
            >
                <svg className="w-[18px] h-[18px] fill-white shrink-0" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
            </a>
            <div
                className="w-[132px] h-[132px] mx-auto mb-4 rounded-full border-[6px] border-white/90 overflow-hidden flex items-center justify-center shrink-0"
                style={{ boxShadow: "0 14px 28px rgba(0,0,0,0.10)", background: "rgba(11,15,26,0.06)" }}
            >
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        width={132}
                        height={132}
                        className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[1.03] scale-[1.02]"
                    />
                ) : (
                    <span
                        className="text-[44px] font-black tracking-[-0.02em]"
                        style={{ color: "rgba(11,15,26,0.55)" }}
                    >
                        {initials}
                    </span>
                )}
            </div>
            <h4 className="text-xl sm:text-2xl font-black tracking-[-0.02em] m-0" style={{ color: COLORS.darkText }}>
                {name}
            </h4>
            <p className="mt-2.5 font-semibold text-lg sm:text-xl m-0" style={{ color: "rgba(11,15,26,0.64)" }}>
                {role}
            </p>
        </div>
    );
}

export default function About() {
    return (
        <div className="w-full min-h-screen">
            {/* Section 1: Hero - Dark */}
            <section
                id="about"
                className={`w-full pt-20 sm:pt-24 pb-12 sm:pb-14 ${SECTION_PADDING} bg-[#0f1115] text-[#F3F6FF]`}
                style={{ scrollMarginTop: "86px" }}
            >
                <div className={SECTION_INNER}>
                    <div className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: COLORS.muted2 }}>
                        ABOUT US
                    </div>
                    <h1 className="text-[clamp(38px,5vw,56px)] font-bold leading-[1.06] tracking-[-0.02em] m-0 ">
                        Built by scientists, engineers, and parents
                    </h1>
                    <p className="mt-4 text-lg leading-[1.4] mb-5" style={{ color: COLORS.muted }}>
                        SplitSec.AI turns everyday smartphones into a private gunshot awareness layer for event teams, guard companies, and schools.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                        <Link
                            href="#get-involved"
                            className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-black text-sm sm:text-base transition-all hover:brightness-105"
                            style={{
                                background: COLORS.blue,
                                color: "#fff",
                                border: "1px solid rgba(0,109,255,0.30)",
                                boxShadow: "0 16px 35px rgba(0,109,255,0.20)",
                            }}
                        >
                            Get involved
                        </Link>
                        <Link
                            href="#press"
                            className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-semibold text-sm sm:text-base border transition-all hover:border-white/45"
                            style={{
                                background: "#000",
                                color: COLORS.blue,
                                borderColor: "rgba(243,246,255,0.28)",
                            }}
                        >
                            Press kit <span className="font-black opacity-95">→</span>
                        </Link>
                    </div>

                    {/* Founding Story */}
                    <div className="mt-10">
                        <div className="text-xs font-extrabold uppercase tracking-[0.16em] mb-2.5" style={{ color: COLORS.muted2 }}>
                            FOUNDING STORY
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4 sm:gap-5 items-stretch mt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 sm:gap-4">
                                <div
                                    className="rounded-[22px] p-4 sm:p-5 border border-white/10 bg-white/5"
                                    style={{ boxShadow: "0 18px 46px rgba(0,0,0,0.28)" }}
                                >
                                    <h3 className="text-[15px] font-bold tracking-[-0.01em] m-0 mb-1.5" style={{ color: COLORS.inkLight }}>
                                        Why we exist
                                    </h3>
                                    <p className="text-base leading-[1.55] m-0" style={{ color: "rgba(243,246,255,0.72)" }}>
                                        When a gunshot happens, the first minute is chaos. People hesitate because they are not sure what they heard. We built SplitSec.AI to confirm fast and alert clearly, without adding cameras, wiring, or surveillance risk.
                                    </p>
                                    <div className="inline-flex items-center gap-2 mt-3.5 px-3 py-2 rounded-full border border-white/14 bg-white/5 text-xs font-black" style={{ color: "rgba(243,246,255,0.80)" }}>
                                        <span className="w-2 h-2 rounded-full bg-[#FF3FA6]" />
                                        Privacy first by default, no audio stored or transmitted
                                    </div>
                                </div>
                                <div
                                    className="rounded-[22px] p-4 sm:p-5 border border-white/10 bg-white/5"
                                    style={{ boxShadow: "0 18px 46px rgba(0,0,0,0.28)" }}
                                >
                                    <h3 className="text-[15px] font-bold tracking-[-0.01em] m-0 mb-1.5" style={{ color: COLORS.inkLight }}>
                                        Why I started SplitSec.AI
                                    </h3>
                                    <p className="text-base leading-[1.55] m-0" style={{ color: "rgba(243,246,255,0.72)" }}>
                                        SplitSec.AI started with a simple question: in the first minute, how do we reduce hesitation and help teams act with clarity. This short video shares the origin and the problem we are building to solve.
                                    </p>
                                    <div className="inline-flex items-center gap-2 mt-2.5 px-3 py-2 rounded-full border border-white/14 bg-white/5 text-xs font-black" style={{ color: "rgba(243,246,255,0.80)" }}>
                                        <span className="w-2 h-2 rounded-full" style={{ background: COLORS.blue }} />
                                        Built for event teams and guard operations
                                    </div>
                                </div>
                            </div>
                            <div
                                className="rounded-[22px] p-4 border border-white/10 bg-white/5 overflow-hidden"
                                style={{ boxShadow: "0 18px 46px rgba(0,0,0,0.22)" }}
                            >
                                <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden border border-white/10 bg-black/45">
                                    <video
                                        className="absolute inset-0 w-full h-full object-cover"
                                        src={FOUNDING_VIDEO_SRC}
                                        title="Why I Founded SplitSec AI – Sri Deivasigamani, CEO & Founder"
                                        controls
                                        playsInline
                                        preload="metadata"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Vision & Mission - Light */}
            <section className={`w-full py-12 sm:py-14 md:py-16 ${SECTION_PADDING} bg-white`}>
                <div className={SECTION_INNER}>
                    <div className="text-xs font-extrabold uppercase tracking-[0.16em] mb-4" style={{ color: COLORS.darkMuted }}>
                        VISION AND MISSION
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-2">
                        <div className="rounded-[22px] p-5 sm:p-6 border border-[rgba(11,15,26,0.10)] bg-[rgba(11,15,26,0.03)]" style={{ boxShadow: "0 18px 46px rgba(0,0,0,0.06)" }}>
                            <div className="flex items-center gap-2.5 mb-2.5">
                                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: COLORS.blue, boxShadow: "0 0 0 10px rgba(0,109,255,0.08)" }} />
                                <span className="text-sm font-extrabold uppercase tracking-wide" style={{ color: COLORS.darkText }}>Vision</span>
                            </div>
                            <p className="text-[clamp(22px,2.2vw,30px)] font-black leading-[1.15] tracking-[-0.02em] m-0" style={{ color: COLORS.darkText }}>
                                Save lives through early gunshot awareness.
                            </p>
                            <p className="mt-2.5 text-base leading-[1.55] m-0" style={{ color: COLORS.darkMuted }}>
                                Make rapid awareness practical for real deployments without cameras, wiring, or privacy tradeoffs.
                            </p>
                        </div>
                        <div className="rounded-[22px] p-5 sm:p-6 border border-[rgba(11,15,26,0.10)] bg-[rgba(11,15,26,0.03)]" style={{ boxShadow: "0 18px 46px rgba(0,0,0,0.06)" }}>
                            <div className="flex items-center gap-2.5 mb-2.5">
                                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: COLORS.pink, boxShadow: "0 0 0 10px rgba(255,63,166,0.08)" }} />
                                <span className="text-sm font-extrabold uppercase tracking-wide" style={{ color: COLORS.darkText }}>Mission</span>
                            </div>
                            <p className="text-[clamp(22px,2.2vw,30px)] font-black leading-[1.15] tracking-[-0.02em] m-0" style={{ color: COLORS.darkText }}>
                                Deliver instant, private, pocket sized gunshot detection and alerts.
                            </p>
                            <p className="mt-2.5 text-base leading-[1.55] m-0" style={{ color: COLORS.darkMuted }}>
                                Run detection on everyday smartphones so teams can deploy in minutes and learn fast.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="text-xs font-extrabold uppercase tracking-[0.16em] mb-4" style={{ color: COLORS.darkMuted }}>
                            TARGETS AND DESIGN GOALS
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-3">
                            {[
                                { t: "On device detection", s: "Audio stays private" },
                                { t: "Fast confirmation", s: "Target under 2 seconds" },
                                { t: "Low false alerts", s: "Targets set per environment" },
                                { t: "Low operating burden", s: "No wiring, no new infrastructure" },
                            ].map((item) => (
                                <div key={item.t} className="rounded-[18px] p-3.5 sm:p-4 border border-[rgba(11,15,26,0.10)] bg-[rgba(11,15,26,0.03)]">
                                    <div className="font-black text-[13px] sm:text-sm" style={{ color: COLORS.darkText }}>{item.t}</div>
                                    <div className="mt-1.5 text-[13px] leading-[1.35]" style={{ color: COLORS.darkMuted }}>{item.s}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: What makes us different - Dark */}
            <section className={`w-full py-12 sm:py-14 md:py-16 ${SECTION_PADDING} bg-[#0f1115] text-[#F3F6FF]`}>
                <div className={SECTION_INNER}>
                    <div className="text-xs font-extrabold uppercase tracking-[0.16em] mb-6" style={{ color: COLORS.muted2 }}>
                        WHAT MAKES US DIFFERENT
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mt-4">
                        {[
                            { title: "On device by design", text: "Detection runs locally on the phone.", color: COLORS.blue },
                            { title: "Privacy first", text: "No audio recorded, stored, or transmitted.", color: COLORS.pink },
                            { title: "Deploy in minutes", text: "No cameras, wiring, or special hardware.", color: COLORS.orange },
                            { title: "Built for operations", text: "Clear escalation and simple pilot metrics.", color: "#10B981" },
                            { title: "Works through disruptions", text: "Detection continues even if Wi Fi or cellular is unavailable.", color: "#8B5CF6" },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-[22px] p-4 sm:p-5 border border-white/12 bg-white/5"
                                style={{ boxShadow: "0 18px 46px rgba(0,0,0,0.14)" }}
                            >
                                <div
                                    className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-3 border"
                                    style={{
                                        background: `${item.color}1A`,
                                        borderColor: `${item.color}40`,
                                    }}
                                >
                                    <span className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                                </div>
                                <div className="font-black text-base tracking-[-0.01em]" style={{ color: COLORS.inkLight }}>{item.title}</div>
                                <div className="mt-2 text-[15px] leading-[1.55]" style={{ color: "rgba(243,246,255,0.72)" }}>{item.text}</div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-sm leading-normal max-w-[88ch]" style={{ color: COLORS.muted2 }}>
                        Notifications and external integrations may require connectivity when available.
                    </p>
                </div>
            </section>

            {/* Section 4: Commitments - Light */}
            <section className={`w-full py-12 sm:py-14 md:py-16 ${SECTION_PADDING} bg-white`}>
                <div className={SECTION_INNER}>
                    <div className="text-xs font-extrabold uppercase tracking-[0.16em] mb-6" style={{ color: COLORS.darkMuted }}>
                        OUR COMMITMENTS
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4">
                        {[
                            { title: "Privacy first", text: "No audio recorded, stored, or transmitted. Opt in analytics only.", color: COLORS.blue },
                            { title: "Transparent by design", text: "Clear documentation of what we collect and why. No hidden surveillance.", color: COLORS.pink },
                            { title: "Built for safety", text: "Designed to reduce hesitation and support real world response workflows.", color: COLORS.orange },
                            { title: "Field reliability", text: "Tested for noisy environments, timing jitter, and operational constraints.", color: "rgba(11,15,26,0.55)" },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-[22px] p-4 sm:p-5 border border-[rgba(11,15,26,0.10)] bg-white/70"
                                style={{ boxShadow: "0 18px 46px rgba(0,0,0,0.06)" }}
                            >
                                <div
                                    className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-3 border"
                                    style={{
                                        background: typeof item.color === "string" && item.color.startsWith("rgba") ? "rgba(11,15,26,0.06)" : `${item.color}1A`,
                                        borderColor: typeof item.color === "string" && item.color.startsWith("rgba") ? "rgba(11,15,26,0.14)" : `${item.color}40`,
                                    }}
                                >
                                    <span className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                                </div>
                                <div className="font-black text-base tracking-[-0.01em]" style={{ color: COLORS.darkText }}>{item.title}</div>
                                <div className="mt-2 text-[15px] leading-[1.55]" style={{ color: COLORS.darkMuted }}>{item.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 rounded-[22px] p-4 sm:p-5 border border-[rgba(11,15,26,0.10)] bg-[rgba(11,15,26,0.03)]">
                        <div className="text-xs font-extrabold uppercase tracking-[0.16em] mb-3" style={{ color: COLORS.darkMuted }}>
                            WHAT WE WILL NOT DO
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
                            {["We will not record or stream your audio", "We will not sell personal data", "We will not build surveillance products"].map((text) => (
                                <div key={text} className="rounded-2xl px-3 py-3 border border-[rgba(11,15,26,0.10)] bg-white/70 text-[15px] font-bold" style={{ color: "rgba(11,15,26,0.80)" }}>
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Press - Dark */}
            <section id="press" className={`w-full py-12 sm:py-14 md:py-16 ${SECTION_PADDING} bg-[#0f1115] text-[#F3F6FF]`} style={{ scrollMarginTop: "86px" }}>
                <div className={SECTION_INNER}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-4">
                        <div
                            className="rounded-[22px] p-4 sm:p-5 border border-white/14 bg-white/5"
                            style={{ boxShadow: "0 18px 46px rgba(0,0,0,0.28)" }}
                        >
                            <h3 className="text-[15px] font-bold tracking-[-0.01em] m-0 mb-1.5" style={{ color: COLORS.inkLight }}>
                                Recognition
                            </h3>
                            <p className="text-base leading-[1.55] m-0" style={{ color: "rgba(243,246,255,0.78)" }}>
                                <strong>Chicago Innovation Awards nominee (2025)</strong>
                                <br />
                                A privacy first approach to rapid gunshot awareness using everyday smartphones.
                            </p>
                            <div className="flex flex-wrap gap-2.5 mt-4">
                                {PRESS_LOGOS.map((pub) => (
                                    <div
                                        key={pub.alt}
                                        className="flex items-center justify-center h-[54px] px-4 py-2.5 rounded-full border border-white/14 bg-white/5"
                                    >
                                        <Image src={pub.src} alt={pub.alt} width={100} height={26} className="h-6 w-auto object-contain opacity-90" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            id="get-involved"
                            className="rounded-[22px] p-4 sm:p-5 border border-white/14 bg-white/5"
                            style={{ boxShadow: "0 18px 46px rgba(0,0,0,0.28)", scrollMarginTop: "86px" }}
                        >
                            <h3 className="text-[15px] font-bold tracking-[-0.01em] m-0 mb-1.5" style={{ color: COLORS.inkLight }}>
                                Press kit and contact
                            </h3>
                            <p className="text-base leading-[1.55] m-0" style={{ color: "rgba(243,246,255,0.78)" }}>
                                For press, pilots, and partnerships, reach us through the contact form on the site. Press kit downloads include logos, product overview, and approved language for media.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-4">
                                <Link
                                    href="/get-involved"
                                    className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-black text-sm transition-all hover:brightness-105"
                                    style={{
                                        background: COLORS.blue,
                                        color: "#fff",
                                        border: "1px solid rgba(0,109,255,0.30)",
                                        boxShadow: "0 16px 35px rgba(0,109,255,0.20)",
                                    }}
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="/press-kit"
                                    className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full font-semibold text-sm border transition-all hover:border-white/45"
                                    style={{
                                        background: "#000",
                                        color: COLORS.blue,
                                        borderColor: "rgba(243,246,255,0.28)",
                                    }}
                                >
                                    Press kit <span className="font-black opacity-95">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Team - Light */}
            <section className={`w-full py-12 sm:py-14 md:py-16 ${SECTION_PADDING} bg-white`}>
                <div className={SECTION_INNER}>
                    <div className="text-xs font-extrabold uppercase tracking-[0.16em] mb-4" style={{ color: COLORS.darkMuted }}>
                        TEAM
                    </div>
                    <h3 className="text-2xl sm:text-[26px] font-bold tracking-[-0.02em] m-0 mt-2" style={{ color: COLORS.darkText }}>
                        Core team
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6">
                        {CORE_TEAM.map((p) => (
                            <PersonCard key={p.name} name={p.name} role={p.role} initials={p.initials} linkedin={p.linkedin} image={p.image} />
                        ))}
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl sm:text-[26px] font-bold tracking-[-0.02em] m-0" style={{ color: COLORS.darkText }}>
                            Advisory committee
                        </h3>
                        <p className="mt-2 text-base leading-[1.55] max-w-[90ch] m-0" style={{ color: COLORS.darkMuted }}>
                            Operators and partners helping us design for real deployments.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6">
                            {ADVISORS.map((p) => (
                                <PersonCard key={p.name} name={p.name} role={p.role} initials={p.initials} linkedin={p.linkedin} image={p.image} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
