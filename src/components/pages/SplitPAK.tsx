"use client";

import { useState, useCallback, useEffect } from "react";

const SITE_TYPE_OPTIONS = [
    { value: "", label: "Select one" },
    { value: "outdoor-event", label: "Outdoor event" },
    { value: "guard-company", label: "Guard company" },
    { value: "health-care", label: "Health care" },
    { value: "school-college", label: "School / college" },
    { value: "other", label: "Other" },
];

type FormData = {
    name: string;
    workEmail: string;
    siteType: string;
    cityAndState: string;
    notes: string;
};

const initialFormData: FormData = {
    name: "",
    workEmail: "",
    siteType: "",
    cityAndState: "",
    notes: "",
};

function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validateForm(data: FormData): { valid: boolean; errors: Partial<Record<keyof FormData, string>>; } {
    const errors: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) errors.name = "Name is required";
    if (!data.workEmail.trim()) errors.workEmail = "Work email is required";
    else if (!validateEmail(data.workEmail)) errors.workEmail = "Please enter a valid email";
    return {
        valid: Object.keys(errors).length === 0,
        errors,
    };
}

export default function SplitPAK() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = useCallback(() => {
        const { valid, errors } = validateForm(formData);
        setFormErrors(errors);
        if (valid) {
            setSubmitted(true);
        }
    }, [formData]);

    const scrollToRequest = useCallback(() => {
        document.getElementById("request-split-pak")?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash === "#request-split-pak") {
            const el = document.getElementById("request-split-pak");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div className="w-full min-h-screen">
            {/* Section 1: Hero - Light grey (Portable Pilot Deployment) */}
            <section
                className="w-full pt-20 sm:pt-28 pb-10 sm:pb-12 flex items-center px-4 sm:px-6 md:px-8  xl:px-28 overflow-x-hidden bg-[#0f1115]"
            >
                <div className="w-full max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-stretch">
                        {/* Left: Text + CTA + Feature cards - same height as right image */}
                        <div className="flex flex-col justify-center gap-1 sm:gap-1.5 md:gap-2 order-1 text-left lg:min-w-0 lg:h-full">

                            <h1 className="text-[clamp(28px,5.5vw,56px)] sm:text-[clamp(34px,4.6vw,56px)] font-bold leading-[1.08] sm:leading-[1.05] tracking-[-0.04em] m-0 text-white">
                                Pilot same day with{" "}
                                <img
                                    src="/xRadius/logoOfPak.png"
                                    alt="PerimeterPAK"
                                    className="perimeterpak-wordmark inline-block w-auto"
                                    style={{
                                        height: "0.74em",
                                        marginLeft: "0.12ch",
                                        verticalAlign: "-0.02em",
                                    }}
                                />
                            </h1>
                            <p
                                className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] m-0 mb-1 sm:mb-1.5  text-gray-400"

                            >
                                NO CAMERAS. NO WIRING. NO PERMANENT INSTALLS.
                            </p>
                            <p
                                className="text-sm sm:text-xl leading-normal sm:leading-[1.45] m-0 mb-0.5 sm:mb-1 "
                                style={{ color: "#d1d5db" }}
                            >
                                Preconfigured phones in a rugged case for portable gunshot awareness. Power on and get coverage in minutes.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 mt-0.5 sm:mt-1 justify-start">
                                <button
                                    onClick={scrollToRequest}
                                    className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] px-4 sm:px-5 py-3 sm:py-3.5 rounded-[999px] font-black text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_22px_54px_rgba(0,109,255,0.32)] active:scale-[0.98] inline-flex items-center justify-center gap-2"
                                    style={{
                                        background: "#006dff",
                                        color: "#fff",
                                        border: "1px solid rgba(0,109,255,0.30)",
                                        boxShadow: "0 16px 35px rgba(0,109,255,0.20)",
                                    }}
                                >
                                    Request a pilot call  →
                                </button>
                            </div>
                        </div>

                        {/* Right: Image - same height as left content on lg; stacks below text on mobile */}
                        <div className="order-2 w-full flex justify-center lg:justify-end lg:min-h-full">
                            <div className="relative w-full lg:h-full min-h-0 rounded-[20px] overflow-hidden mx-auto lg:mx-0">
                                <img
                                    src="/xRadius/Pelican case pink foam (1).png"
                                    alt="splitPAK with preconfigured phones"
                                    className="w-full h-full object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: From Intake to Live Pilot - White background */}
            <section className="w-full pt-10 pb-10 sm:pb-12 flex items-center px-4 sm:px-6 md:px-8  xl:px-28 bg-white">
                <div className="w-full max-w-[1800px] mx-auto ">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.04em] m-0 mb-2 sm:mb-3" style={{ color: "#1f2937" }}>
                        What you get
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed m-0 mb-6 sm:mb-8 mx-auto" style={{ color: "#4b5563" }}>
                        Pilot SplitSec without infrastructure. Deploy coverage where it matters, then move it as your perimeter changes.
                    </p>

                    <div className="text-left grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch">
                        {/* Left column: Image - same as hero, matches right column height */}
                        <div className="flex flex-col h-full min-h-0">
                            <div className="relative w-full flex-1 min-h-0 rounded-[20px] overflow-hidden">
                                <img
                                    src="/xRadius/PerimeterPAK guards (2).png"
                                    alt="splitPAK with preconfigured phones"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Right column: Cards + pills + CTAs */}
                        <div className="flex flex-col gap-2 xl:gap-6">
                            <div className="space-y-2 xl:space-y-4">
                                <div
                                    className="rounded-2xl p-3 w-full"
                                    style={{
                                        background: "#f9fafb",
                                        border: "1px solid rgba(0,0,0,0.06)",
                                    }}
                                >
                                    <h4 className="text-base sm:text-lg font-bold m-0 mb-2" style={{ color: "#1f2937" }}>
                                        What&apos;s included
                                    </h4>
                                    <p className="text-sm sm:text-[15px] leading-normal m-0" style={{ color: "#4b5563" }}>
                                        Configured app, rugged case, labels, quick start guide, and a placement plan.
                                    </p>
                                </div>
                                <div
                                    className="rounded-2xl p-3 w-full"
                                    style={{
                                        background: "#f9fafb",
                                        border: "1px solid rgba(0,0,0,0.06)",
                                    }}
                                >
                                    <h4 className="text-base sm:text-lg font-bold m-0 mb-2" style={{ color: "#1f2937" }}>
                                        Deploy anywhere
                                    </h4>
                                    <p className="text-sm sm:text-[15px] leading-normal m-0" style={{ color: "#4b5563" }}>
                                        No cameras. No wiring. Built for events, patrol routes, and temporary footprints.
                                    </p>
                                </div>
                                <div
                                    className="rounded-2xl p-3 w-full"
                                    style={{
                                        background: "#f9fafb",
                                        border: "1px solid rgba(0,0,0,0.06)",
                                    }}
                                >
                                    <h4 className="text-base sm:text-lg font-bold m-0 mb-2" style={{ color: "#1f2937" }}>
                                        Pilot outcomes
                                    </h4>
                                    <p className="text-sm sm:text-[15px] leading-normal m-0" style={{ color: "#4b5563" }}>
                                        Validate setup time, coverage placement, and escalation flow with clear pilot metrics.
                                    </p>
                                </div>
                            </div>

                            {/* Pill-shaped labels */}
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                <span className="inline-block xl:px-4 px-2 py-2 rounded-[999px] text-sm font-bold bg-gray-50 text-gray-800 border border-black/6">
                                    Setup in minutes.
                                </span>
                                <span className="inline-block xl:px-4 px-2 py-2 rounded-[999px] text-sm font-bold bg-gray-50 text-gray-800 border border-black/6">
                                    Move coverage.
                                </span>
                                <span className="inline-block xl:px-4 px-2 py-2 rounded-[999px] text-sm font-bold bg-gray-50 text-gray-800 border border-black/6">
                                    Measure results.
                                </span>
                            </div>

                            {/* CTA buttons */}
                            <div className="xl:flex grid flex-col sm:flex-row xl:gap-3 gap-2">
                                <button
                                    onClick={scrollToRequest}
                                    className="w-full  min-w-[150px] lg:min-h-[44px] px-3 xl:px-5 py-3 rounded-[999px] font-semibold text-sm lg:text-base text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98] inline-flex items-center justify-center gap-2"
                                    style={{
                                        background: "#006dff",
                                        border: "1px solid rgba(0,109,255,0.30)",
                                        boxShadow: "0 4px 14px rgba(0,109,255,0.25)",
                                    }}
                                >
                                    Request a pilot call →
                                </button>
                                <a
                                    href="/xmapper"
                                    className="w-full  lg:min-h-[44px] px-3 xl:px-5 py-3 rounded-[999px] font-semibold text-sm lg:text-base transition-all duration-300 hover:opacity-90 active:scale-[0.98] inline-flex items-center justify-center gap-2"
                                    style={{
                                        background: "#b6d5fd",
                                        color: "#000000",
                                        border: "1px solid #006dff",
                                    }}
                                >
                                    Plan coverage with GridMapper →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: How a PerimeterPAK pilot works - Dark background */}
            <section
                className="w-full pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 xl:px-28 bg-[#0f1115]"
            >
                <div className="w-full max-w-[1800px] mx-auto">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.04em] m-0 mb-3 sm:mb-4 text-white">
                        How a PerimeterPAK pilot works
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed m-0 mb-6 " style={{ color: "#cbd5e1" }}>
                        Keep it simple. One short call, a clear placement plan, then a pilot you can run the same day.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 ">
                        {/* Card 1 */}
                        <div
                            className="rounded-xl p-5 sm:p-6 flex flex-col"
                            style={{
                                border: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4 shrink-0"
                                style={{ background: "#006dff" }}
                            >
                                1
                            </div>
                            <h3 className="text-base sm:text-lg font-bold m-0 mb-2 text-white">
                                Fifteen minute walkthrough
                            </h3>
                            <p className="text-sm sm:text-[15px] leading-relaxed m-0" style={{ color: "#cbd5e1" }}>
                                You tell us the footprint and who needs alerts. We recommend a basic setup and placement.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="rounded-xl p-5 sm:p-6 flex flex-col"
                            style={{
                                border: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4 shrink-0"
                                style={{ background: "#006dff" }}
                            >
                                2
                            </div>
                            <h3 className="text-base sm:text-lg font-bold m-0 mb-2 text-white">
                                Deploy the kit
                            </h3>
                            <p className="text-sm sm:text-[15px] leading-relaxed m-0" style={{ color: "#cbd5e1" }}>
                                Hand out phones, power on, and start monitoring. No infrastructure work and no wiring.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="rounded-xl p-5 sm:p-6 flex flex-col"
                            style={{
                                border: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4 shrink-0"
                                style={{ background: "#006dff" }}
                            >
                                3
                            </div>
                            <h3 className="text-base sm:text-lg font-bold m-0 mb-2 text-white">
                                Validate and measure
                            </h3>
                            <p className="text-sm sm:text-[15px] leading-relaxed m-0" style={{ color: "#cbd5e1" }}>
                                Run a table top scenario or live drill. Review confirmation flow and simple pilot metrics.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={scrollToRequest}
                        className="min-h-[44px] sm:min-h-[48px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_22px_54px_rgba(59,130,246,0.32)] active:scale-[0.98] inline-flex items-center justify-center gap-2"
                        style={{
                            background: "#006dff",
                            border: "1px solid rgba(59,130,246,0.30)",
                            boxShadow: "0 4px 14px rgba(59,130,246,0.25)",
                        }}
                    >
                        Request a pilot call →
                    </button>
                </div>
            </section>

            {/* Section 4: Request splitPAK - Single form */}
            <section
                id="request-split-pak"
                className="w-full py-12 sm:py-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 bg-white"
            >
                <div className="w-full max-w-[1800px] mx-auto">
                    <div
                        className="rounded-2xl p-6 sm:p-8 w-full"
                        style={{
                            background: "#ffffff",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                            border: "1px solid rgba(0,0,0,0.06)",
                        }}
                    >
                        {submitted ? (
                            <div className="text-center py-12">
                                <p className="text-xl font-semibold m-0 mb-2" style={{ color: "#1f2937" }}>
                                    Thank you for your request!
                                </p>
                                <p className="text-base m-0" style={{ color: "#6b7280" }}>
                                    We will contact you shortly to scope your pilot.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.04em] m-0 mb-2" style={{ color: "#1f2937" }}>
                                    Request a PerimeterPAK discussion
                                </h2>
                                <p className="text-base m-0 mb-6" style={{ color: "#6b7280" }}>
                                    Share the minimum needed so we can call you back and scope a pilot.
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold tracking-wide mb-1.5" style={{ color: "#374151" }}>
                                            Name <span className="text-red-500" aria-hidden>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData((s) => ({ ...s, name: e.target.value }))}
                                            className={`w-full px-4 py-3 rounded-lg border text-base outline-none transition-colors ${formErrors.name ? "border-red-500" : "border-gray-200"
                                                }`}
                                            placeholder="Your name"
                                        />
                                        {formErrors.name && (
                                            <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold tracking-wide mb-1.5" style={{ color: "#374151" }}>
                                            Work email <span className="text-red-500" aria-hidden>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.workEmail}
                                            onChange={(e) => setFormData((s) => ({ ...s, workEmail: e.target.value }))}
                                            className={`w-full px-4 py-3 rounded-lg border text-base outline-none transition-colors ${formErrors.workEmail ? "border-red-500" : "border-gray-200"
                                                }`}
                                            placeholder="Your work email"
                                        />
                                        {formErrors.workEmail && (
                                            <p className="text-sm text-red-500 mt-1">{formErrors.workEmail}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold tracking-wide mb-1.5" style={{ color: "#374151" }}>
                                            Site type
                                        </label>
                                        <select
                                            value={formData.siteType}
                                            onChange={(e) => setFormData((s) => ({ ...s, siteType: e.target.value }))}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base outline-none transition-colors appearance-none bg-white"
                                            style={{
                                                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "right 0.75rem center",
                                                backgroundSize: "1.25rem",
                                                paddingRight: "2.5rem",
                                            }}
                                        >
                                            {SITE_TYPE_OPTIONS.map((opt) => (
                                                <option key={opt.value || "empty"} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold tracking-wide mb-1.5" style={{ color: "#374151" }}>
                                            City and state
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.cityAndState}
                                            onChange={(e) => setFormData((s) => ({ ...s, cityAndState: e.target.value }))}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base outline-none transition-colors"
                                            placeholder="Example: Naperville, Illinois"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold tracking-wide mb-1.5" style={{ color: "#374151" }}>
                                            Notes
                                        </label>
                                        <textarea
                                            value={formData.notes}
                                            onChange={(e) => setFormData((s) => ({ ...s, notes: e.target.value }))}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base outline-none transition-colors resize-y"
                                            placeholder="Footprint, timeline, or any relevant information"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row  sm:justify-between gap-4 mt-6">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="px-6 py-3 rounded-lg font-semibold text-base text-white transition-all hover:opacity-90 inline-flex items-center justify-center gap-2"
                                        style={{ background: "#006dff" }}
                                    >
                                        Request call back
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    <p className="text-sm text-center m-0" style={{ color: "#6b7280" }}>
                                        We only use this to contact you about a pilot. No marketing lists.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

        </div>
    );
}
