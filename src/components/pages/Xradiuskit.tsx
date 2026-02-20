"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

const PILOT_LOCATION_OPTIONS = [
    { value: "", label: "Select one" },
    { value: "outdoor-event", label: "Outdoor event" },
    { value: "guard-company", label: "Guard company" },
    { value: "health-care", label: "Health care" },
    { value: "school-college", label: "School / college" },
    { value: "other", label: "Other" },
];

type Step1Data = {
    name: string;
    email: string;
    organization: string;
    phone: string;
    pilotLocationType: string;
    pilotStartWindow: string;
};

type Step2Data = {
    kitSize: "" | "kit10" | "kit20";
    purchaseType: "" | "rent" | "buy";
};

type Step3Data = {
    usersAndRoles: string;
    phoneNumbersForEnrollment: string;
    zonesOrSiteName: string;
    emergencyContacts: string;
    shippingAddress: string;
    constraints: string;
};

const initialStep1: Step1Data = {
    name: "",
    email: "",
    organization: "",
    phone: "",
    pilotLocationType: "",
    pilotStartWindow: "",
};

const initialStep2: Step2Data = {
    kitSize: "",
    purchaseType: "",
};

const initialStep3: Step3Data = {
    usersAndRoles: "",
    phoneNumbersForEnrollment: "",
    zonesOrSiteName: "",
    emergencyContacts: "",
    shippingAddress: "",
    constraints: "",
};

function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validateStep1(data: Step1Data): { valid: boolean; errors: Partial<Record<keyof Step1Data, string>>; } {
    const errors: Partial<Record<keyof Step1Data, string>> = {};
    if (!data.name.trim()) errors.name = "Name is required";
    if (!data.email.trim()) errors.email = "Email is required";
    else if (!validateEmail(data.email)) errors.email = "Please enter a valid email";
    if (!data.organization.trim()) errors.organization = "Organization is required";
    if (!data.phone.trim()) errors.phone = "Phone is required";
    if (!data.pilotLocationType) errors.pilotLocationType = "Please select a location type";
    if (!data.pilotStartWindow.trim()) errors.pilotStartWindow = "Pilot start window is required";
    return {
        valid: Object.keys(errors).length === 0,
        errors,
    };
}

function validateStep2(data: Step2Data): { valid: boolean; errors: Partial<Record<keyof Step2Data, string>>; } {
    const errors: Partial<Record<keyof Step2Data, string>> = {};
    if (!data.kitSize) errors.kitSize = "Please select a kit size";
    if (!data.purchaseType) errors.purchaseType = "Please select a purchase option";
    return {
        valid: Object.keys(errors).length === 0,
        errors,
    };
}

function validateStep3(data: Step3Data): { valid: boolean; errors: Partial<Record<keyof Step3Data, string>>; } {
    const errors: Partial<Record<keyof Step3Data, string>> = {};
    if (!data.usersAndRoles.trim()) errors.usersAndRoles = "Users and roles are required";
    if (!data.phoneNumbersForEnrollment.trim()) errors.phoneNumbersForEnrollment = "Phone numbers for enrollment are required";
    if (!data.zonesOrSiteName.trim()) errors.zonesOrSiteName = "Zones or site name is required";
    if (!data.emergencyContacts.trim()) errors.emergencyContacts = "Emergency contacts are required";
    if (!data.shippingAddress.trim()) errors.shippingAddress = "Shipping address is required";
    return {
        valid: Object.keys(errors).length === 0,
        errors,
    };
}

export default function Xradiuskit() {
    const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
    const [step1Data, setStep1Data] = useState<Step1Data>(initialStep1);
    const [step2Data, setStep2Data] = useState<Step2Data>(initialStep2);
    const [step3Data, setStep3Data] = useState<Step3Data>(initialStep3);
    const [step1Errors, setStep1Errors] = useState<Partial<Record<keyof Step1Data, string>>>({});
    const [step2Errors, setStep2Errors] = useState<Partial<Record<keyof Step2Data, string>>>({});
    const [step3Errors, setStep3Errors] = useState<Partial<Record<keyof Step3Data, string>>>({});
    const [step1Complete, setStep1Complete] = useState(false);
    const [step2Complete, setStep2Complete] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleStep1Continue = useCallback(() => {
        const { valid, errors } = validateStep1(step1Data);
        setStep1Errors(errors);
        if (valid) {
            setStep1Complete(true);
            setCurrentStep(2);
        }
    }, [step1Data]);

    const handleStep2Continue = useCallback(() => {
        const { valid, errors } = validateStep2(step2Data);
        setStep2Errors(errors);
        if (valid) {
            setStep2Complete(true);
            setCurrentStep(3);
        }
    }, [step2Data]);

    const handleStep3Submit = useCallback(() => {
        const { valid, errors } = validateStep3(step3Data);
        setStep3Errors(errors);
        if (valid) {
            setSubmitted(true);
        }
    }, [step3Data]);

    const scrollToRequest = useCallback(() => {
        document.getElementById("request-xradius-kit")?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div className="w-full min-h-screen">
            {/* Section 1: Hero - Light grey (Portable Pilot Deployment) */}
            <section
                className="w-full pt-20 sm:pt-28 pb-10 sm:pb-12 flex items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 overflow-x-hidden"

            >
                <div className="w-full max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
                        {/* Left: Text + CTA + Feature cards - same visual weight as right */}
                        <div className="flex flex-col justify-center gap-1 sm:gap-1.5 md:gap-2 order-1 text-left lg:min-w-0">
                            <p
                                className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest sm:tracking-[0.18em] m-0 leading-snug"
                                style={{ color: "#6b7280" }}
                            >
                                Portable pilot deployment
                            </p>

                            <h1 className="text-[clamp(28px,5.5vw,56px)] sm:text-[clamp(34px,4.6vw,56px)] font-bold leading-[1.08] sm:leading-[1.05] tracking-[-0.04em] m-0">
                                xRadius Kit
                            </h1>
                            <p
                                className="text-sm sm:text-base leading-normal sm:leading-[1.45] m-0 mb-0.5 sm:mb-1 max-w-[56ch]"
                                style={{ color: "#374151" }}
                            >
                                A rugged, grab-and-go kit that turns included, preconfigured phones into a portable gunshot awareness layer. Distribute phones, power on, and begin coverage in minutes.
                            </p>
                            <p
                                className="text-sm sm:text-base font-semibold m-0 mb-1 sm:mb-2 max-w-[52ch]"
                                style={{ color: "#1f2937" }}
                            >
                                Rent it for a pilot or event, or buy it for ongoing coverage.
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
                                    Request xRadius Kit
                                    <span className="inline-flex items-center justify-center w-4 h-4" aria-hidden>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="-rotate-45">
                                            <path d="M6 1L11 6L6 11L1 6L6 1Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            {/* Feature cards - two side by side */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2 sm:mt-3">
                                <div
                                    className="rounded-xl p-4 sm:p-5 w-full"
                                    style={{
                                        background: "#ffffff",
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                                        border: "1px solid rgba(0,0,0,0.06)",
                                    }}
                                >
                                    <h3 className="text-base sm:text-lg font-bold m-0 mb-2" style={{ color: "#1f2937" }}>
                                        Deploy anywhere
                                    </h3>
                                    <p className="text-sm sm:text-[15px] leading-normal m-0" style={{ color: "#4b5563" }}>
                                        No wiring. No cameras. No permanent installs. Ideal for events, patrol routes, and temporary footprints.
                                    </p>
                                </div>
                                <div
                                    className="rounded-xl p-4 sm:p-5 w-full"
                                    style={{
                                        background: "#ffffff",
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                                        border: "1px solid rgba(0,0,0,0.06)",
                                    }}
                                >
                                    <h3 className="text-base sm:text-lg font-bold m-0 mb-2" style={{ color: "#1f2937" }}>
                                        Pilot-ready kit
                                    </h3>
                                    <p className="text-sm sm:text-[15px] leading-normal m-0" style={{ color: "#4b5563" }}>
                                        Preconfigured phones, labels, quick-start guide, and placement recommendations so your team can validate fast.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Image - card background, even gapping on all sides including bottom */}
                        <div className="order-2 w-full flex flex-col justify-center items-center min-w-0">
                            <div className="w-full flex justify-center items-center p-3 sm:p-4 md:p-5 lg:p-6">
                                <div
                                    className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl aspect-4/3 sm:aspect-5/4 lg:aspect-4/3 min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] max-h-[320px] sm:max-h-[380px] lg:max-h-[480px] overflow-hidden rounded-2xl sm:rounded-3xl"
                                >
                                    <Image
                                        src="/xRadius/xradius.png"
                                        alt="xRadius kit with preconfigured phones"
                                        fill
                                        className="object-contain object-center"
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: From Intake to Live Pilot - Dark theme (same width as hero) */}
            <section className="w-full py-10 sm:py-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#0a0a0b]">
                <div className="w-full max-w-[1800px] mx-auto ">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.04em] m-0 mb-2 sm:mb-3" style={{ color: "#ffffff" }}>
                        From Intake to Live Pilot
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed m-0 mb-6 sm:mb-8 mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
                        Share core details once, then launch with a role-based workflow designed for fast activation and measurable results.
                    </p>

                    <div className="text-left space-y-6 sm:space-y-7">
                        {/* INTAKE Section */}
                        <div>
                            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] m-0 mb-3 sm:mb-4" style={{ color: "#006DFF" }}>
                                INTAKE
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                <div
                                    className="rounded-2xl p-4 sm:p-5 w-full"
                                    style={{
                                        background: "#1a1a1d",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <h4 className="text-base sm:text-lg font-bold m-0 mb-2" style={{ color: "#ffffff" }}>
                                        Share Contacts
                                    </h4>
                                    <p className="text-sm sm:text-[15px] leading-normal m-0" style={{ color: "rgba(255,255,255,0.75)" }}>
                                        Provide names, phone numbers, and one primary admin contact.
                                    </p>
                                </div>
                                <div
                                    className="rounded-2xl p-4 sm:p-5 w-full"
                                    style={{
                                        background: "#1a1a1d",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <h4 className="text-base sm:text-lg font-bold m-0 mb-2" style={{ color: "#ffffff" }}>
                                        Assign Key Roles
                                    </h4>
                                    <p className="text-sm sm:text-[15px] leading-normal m-0" style={{ color: "rgba(255,255,255,0.75)" }}>
                                        Tag leadership roles like Admin, SRO, Principal, or Wing Leader. Most users remain Staff.
                                    </p>
                                </div>
                                <div
                                    className="rounded-2xl p-4 sm:p-5 w-full"
                                    style={{
                                        background: "#1a1a1d",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <h4 className="text-base sm:text-lg font-bold m-0 mb-2" style={{ color: "#ffffff" }}>
                                        Confirm Site Basics
                                    </h4>
                                    <p className="text-sm sm:text-[15px] leading-normal m-0" style={{ color: "rgba(255,255,255,0.75)" }}>
                                        Share location details, pilot window, and any perimeter or schedule constraints.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* PILOT Section */}
                        <div>
                            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] m-0 mb-3 sm:mb-4" style={{ color: "#006DFF" }}>
                                PILOT
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                <div
                                    className="rounded-2xl p-4 sm:p-5 w-full"
                                    style={{
                                        background: "#1a1a1d",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <h4 className="text-base sm:text-lg font-bold m-0 mb-2" style={{ color: "#ffffff" }}>
                                        Kickoff and Scope Lock
                                    </h4>
                                    <p className="text-sm sm:text-[15px] leading-normal m-0" style={{ color: "rgba(255,255,255,0.75)" }}>
                                        We validate users, coverage zone, and success criteria in one focused call.
                                    </p>
                                </div>
                                <div
                                    className="rounded-2xl p-4 sm:p-5 w-full"
                                    style={{
                                        background: "#1a1a1d",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <h4 className="text-base sm:text-lg font-bold m-0 mb-2" style={{ color: "#ffffff" }}>
                                        Deploy and Authenticate
                                    </h4>
                                    <p className="text-sm sm:text-[15px] leading-normal m-0" style={{ color: "rgba(255,255,255,0.75)" }}>
                                        Preconfigured phones arrive, are distributed, and users sign in with organization code and phone verification.
                                    </p>
                                </div>
                                <div
                                    className="rounded-2xl p-4 sm:p-5 w-full"
                                    style={{
                                        background: "#1a1a1d",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <h4 className="text-base sm:text-lg font-bold m-0 mb-2" style={{ color: "#ffffff" }}>
                                        Run, Measure, and Decide
                                    </h4>
                                    <p className="text-sm sm:text-[15px] leading-normal m-0" style={{ color: "rgba(255,255,255,0.75)" }}>
                                        You run the pilot, review outcomes, and choose next-step rollout with clear data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Request xRadius Kit - 3-step form with sequential unlock */}
            <section
                id="request-xradius-kit"
                className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
            >
                <div className="w-full max-w-[1800px] mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.04em] m-0 mb-2" style={{ color: "#1f2937" }}>
                        Request xRadius Kit
                    </h2>
                    <p className="text-sm sm:text-base m-0 mb-8" style={{ color: "#6b7280" }}>
                        Complete this short intake flow. We will recommend kit sizing, purchase option, and deployment setup.
                    </p>

                    {/* Stepper */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                        <button
                            type="button"
                            onClick={() => step1Complete && setCurrentStep(1)}
                            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 outline-none ${currentStep === 1
                                ? "text-white"
                                : step1Complete
                                    ? "cursor-pointer hover:opacity-90"
                                    : "cursor-default opacity-70"
                                }`}
                            style={{
                                background: currentStep === 1 ? "#006dff" : step1Complete ? "rgba(0,109,255,0.15)" : "#e5e7eb",
                                color: currentStep === 1 ? "#fff" : step1Complete ? "#006dff" : "#9ca3af",
                                border: currentStep === 1 ? "none" : step1Complete ? "1px solid transparent" : "1px solid #d1d5db",
                            }}
                        >
                            <span className="text-xs" aria-hidden>◆</span>
                            Step 1 Contact + pilot basics
                        </button>
                        <button
                            type="button"
                            onClick={() => step1Complete && setCurrentStep(2)}
                            disabled={!step1Complete}
                            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 outline-none ${currentStep === 2 ? "text-white" : step1Complete ? "cursor-pointer" : "cursor-not-allowed"
                                }`}
                            style={{
                                background:
                                    currentStep === 2
                                        ? "#006dff"
                                        : step2Complete
                                            ? "rgba(0,109,255,0.15)"
                                            : step1Complete
                                                ? "#e5e7eb"
                                                : "#f3f4f6",
                                color:
                                    currentStep === 2
                                        ? "#fff"
                                        : step2Complete
                                            ? "#006dff"
                                            : step1Complete
                                                ? "#374151"
                                                : "#9ca3af",
                                border: currentStep === 2 ? "none" : "1px solid #d1d5db",
                            }}
                        >
                            <span className="text-xs" aria-hidden>◆</span>
                            Step 2 Kit + purchase option
                        </button>
                        <button
                            type="button"
                            onClick={() => step2Complete && setCurrentStep(3)}
                            disabled={!step2Complete}
                            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 outline-none ${currentStep === 3 ? "text-white" : step2Complete ? "cursor-pointer" : "cursor-not-allowed"
                                }`}
                            style={{
                                background:
                                    currentStep === 3
                                        ? "#006dff"
                                        : step2Complete
                                            ? "#e5e7eb"
                                            : "#f3f4f6",
                                color:
                                    currentStep === 3
                                        ? "#fff"
                                        : step2Complete
                                            ? "#374151"
                                            : "#9ca3af",
                                border: currentStep === 3 ? "none" : step2Complete ? "1px solid #d1d5db" : "1px solid #d1d5db",
                            }}
                        >
                            <span className="text-xs" aria-hidden>◆</span>
                            Step 3 Configuration details
                        </button>
                    </div>

                    {/* Step Content Card */}
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
                                <p className="text-lg font-semibold m-0 mb-2" style={{ color: "#1f2937" }}>
                                    Thank you for your request!
                                </p>
                                <p className="text-sm m-0" style={{ color: "#6b7280" }}>
                                    We will contact you shortly with kit sizing and deployment recommendations.
                                </p>
                            </div>
                        ) : currentStep === 1 ? (
                            <>
                                <h3 className="text-lg font-bold m-0 mb-1" style={{ color: "#1f2937" }}>
                                    Fast contact and pilot basics (30 seconds)
                                </h3>
                                <p className="text-sm m-0 mb-6" style={{ color: "#6b7280" }}>
                                    Share core details so we can scope your pilot quickly.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            value={step1Data.name}
                                            onChange={(e) => setStep1Data((s) => ({ ...s, name: e.target.value }))}
                                            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${step1Errors.name ? "border-red-500" : "border-gray-200"
                                                }`}
                                            placeholder="Your name"
                                        />
                                        {step1Errors.name && (
                                            <p className="text-xs text-red-500 mt-1">{step1Errors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={step1Data.email}
                                            onChange={(e) => setStep1Data((s) => ({ ...s, email: e.target.value }))}
                                            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${step1Errors.email ? "border-red-500" : "border-gray-200"
                                                }`}
                                            placeholder="your@email.com"
                                        />
                                        {step1Errors.email && (
                                            <p className="text-xs text-red-500 mt-1">{step1Errors.email}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                            Organization
                                        </label>
                                        <input
                                            type="text"
                                            value={step1Data.organization}
                                            onChange={(e) => setStep1Data((s) => ({ ...s, organization: e.target.value }))}
                                            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${step1Errors.organization ? "border-red-500" : "border-gray-200"
                                                }`}
                                            placeholder="Organization name"
                                        />
                                        {step1Errors.organization && (
                                            <p className="text-xs text-red-500 mt-1">{step1Errors.organization}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            value={step1Data.phone}
                                            onChange={(e) => setStep1Data((s) => ({ ...s, phone: e.target.value }))}
                                            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${step1Errors.phone ? "border-red-500" : "border-gray-200"
                                                }`}
                                            placeholder="Phone number"
                                        />
                                        {step1Errors.phone && (
                                            <p className="text-xs text-red-500 mt-1">{step1Errors.phone}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                            Pilot Location Type
                                        </label>
                                        <select
                                            value={step1Data.pilotLocationType}
                                            onChange={(e) => setStep1Data((s) => ({ ...s, pilotLocationType: e.target.value }))}
                                            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors appearance-none bg-white ${step1Errors.pilotLocationType ? "border-red-500" : "border-gray-200"
                                                }`}
                                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: "no-repeat", backgroundPosition: "right 0.75rem center", backgroundSize: "1.25rem", paddingRight: "2.5rem" }}
                                        >
                                            {PILOT_LOCATION_OPTIONS.map((opt) => (
                                                <option key={opt.value || "empty"} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </select>
                                        {step1Errors.pilotLocationType && (
                                            <p className="text-xs text-red-500 mt-1">{step1Errors.pilotLocationType}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                            Pilot Start Window
                                        </label>
                                        <input
                                            type="text"
                                            value={step1Data.pilotStartWindow}
                                            onChange={(e) => setStep1Data((s) => ({ ...s, pilotStartWindow: e.target.value }))}
                                            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${step1Errors.pilotStartWindow ? "border-red-500" : "border-gray-200"
                                                }`}
                                            placeholder="e.g., Next 2 weeks"
                                        />
                                        {step1Errors.pilotStartWindow && (
                                            <p className="text-xs text-red-500 mt-1">{step1Errors.pilotStartWindow}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-end mt-6">
                                    <button
                                        type="button"
                                        onClick={handleStep1Continue}
                                        className="px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90"
                                        style={{ background: "#006dff" }}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </>
                        ) : currentStep === 2 ? (
                            <>
                                <h3 className="text-lg font-bold m-0 mb-1" style={{ color: "#1f2937" }}>
                                    Purchase options
                                </h3>
                                <p className="text-sm m-0 mb-6" style={{ color: "#6b7280" }}>
                                    Select kit size and whether you want to rent for a pilot/event or buy for ongoing coverage.
                                </p>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-semibold tracking-wider mb-3" style={{ color: "#374151" }}>
                                            Kit Size
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <label
                                                className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${step2Data.kitSize === "kit10"
                                                    ? "border-[#006dff] bg-[#006dff]/5"
                                                    : "border-gray-200 hover:border-gray-300"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="kitSize"
                                                    checked={step2Data.kitSize === "kit10"}
                                                    onChange={() => setStep2Data((s) => ({ ...s, kitSize: "kit10" }))}
                                                    className="mt-1 w-4 h-4 accent-[#006dff]"
                                                />
                                                <div>
                                                    <span className="font-semibold block" style={{ color: "#1f2937" }}>
                                                        Kit 10
                                                    </span>
                                                    <span className="text-sm" style={{ color: "#6b7280" }}>
                                                        10 phones. Best for smaller pilot zones.
                                                    </span>
                                                </div>
                                            </label>
                                            <label
                                                className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${step2Data.kitSize === "kit20"
                                                    ? "border-[#006dff] bg-[#006dff]/5"
                                                    : "border-gray-200 hover:border-gray-300"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="kitSize"
                                                    checked={step2Data.kitSize === "kit20"}
                                                    onChange={() => setStep2Data((s) => ({ ...s, kitSize: "kit20" }))}
                                                    className="mt-1 w-4 h-4 accent-[#006dff]"
                                                />
                                                <div>
                                                    <span className="font-semibold block" style={{ color: "#1f2937" }}>
                                                        Kit 20
                                                    </span>
                                                    <span className="text-sm" style={{ color: "#6b7280" }}>
                                                        20 phones. Best for larger or segmented areas.
                                                    </span>
                                                </div>
                                            </label>
                                        </div>
                                        {step2Errors.kitSize && (
                                            <p className="text-xs text-red-500 mt-2">{step2Errors.kitSize}</p>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wider mb-3" style={{ color: "#374151" }}>
                                            Purchase Type
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <label
                                                className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${step2Data.purchaseType === "rent"
                                                    ? "border-[#006dff] bg-[#006dff]/5"
                                                    : "border-gray-200 hover:border-gray-300"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="purchaseType"
                                                    checked={step2Data.purchaseType === "rent"}
                                                    onChange={() => setStep2Data((s) => ({ ...s, purchaseType: "rent" }))}
                                                    className="mt-1 w-4 h-4 accent-[#006dff]"
                                                />
                                                <div>
                                                    <span className="font-semibold block" style={{ color: "#1f2937" }}>
                                                        Rent for pilot or event
                                                    </span>
                                                    <span className="text-sm" style={{ color: "#6b7280" }}>
                                                        Short-term deployment with minimal commitment.
                                                    </span>
                                                </div>
                                            </label>
                                            <label
                                                className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${step2Data.purchaseType === "buy"
                                                    ? "border-[#006dff] bg-[#006dff]/5"
                                                    : "border-gray-200 hover:border-gray-300"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="purchaseType"
                                                    checked={step2Data.purchaseType === "buy"}
                                                    onChange={() => setStep2Data((s) => ({ ...s, purchaseType: "buy" }))}
                                                    className="mt-1 w-4 h-4 accent-[#006dff]"
                                                />
                                                <div>
                                                    <span className="font-semibold block" style={{ color: "#1f2937" }}>
                                                        Buy for ongoing coverage
                                                    </span>
                                                    <span className="text-sm" style={{ color: "#6b7280" }}>
                                                        Permanent readiness and repeatable operations.
                                                    </span>
                                                </div>
                                            </label>
                                        </div>
                                        {step2Errors.purchaseType && (
                                            <p className="text-xs text-red-500 mt-2">{step2Errors.purchaseType}</p>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm mt-4 mb-6" style={{ color: "#6b7280" }}>
                                    Optional 15 min walkthrough:{" "}
                                    <a href="#" className="underline font-medium" style={{ color: "#006dff" }}>
                                        Book a demo
                                    </a>
                                </p>
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(1)}
                                        className="px-6 py-3 rounded-lg font-semibold text-sm border transition-all hover:bg-gray-50"
                                        style={{ background: "#fff", borderColor: "#d1d5db", color: "#1f2937" }}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleStep2Continue}
                                        className="px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90"
                                        style={{ background: "#006dff" }}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className="text-lg font-bold m-0 mb-1" style={{ color: "#1f2937" }}>
                                    Configuration details
                                </h3>
                                <p className="text-sm m-0 mb-6" style={{ color: "#6b7280" }}>
                                    Provide deployment specifics for enrollment and shipping.
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                            Users and roles (Admin, SRO, Staff)
                                        </label>
                                        <textarea
                                            value={step3Data.usersAndRoles}
                                            onChange={(e) => setStep3Data((s) => ({ ...s, usersAndRoles: e.target.value }))}
                                            rows={3}
                                            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-y ${step3Errors.usersAndRoles ? "border-red-500" : "border-gray-200"
                                                }`}
                                            placeholder="List people and roles."
                                        />
                                        {step3Errors.usersAndRoles && (
                                            <p className="text-xs text-red-500 mt-1">{step3Errors.usersAndRoles}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                            Phone numbers for enrollment
                                        </label>
                                        <textarea
                                            value={step3Data.phoneNumbersForEnrollment}
                                            onChange={(e) => setStep3Data((s) => ({ ...s, phoneNumbersForEnrollment: e.target.value }))}
                                            rows={3}
                                            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-y ${step3Errors.phoneNumbersForEnrollment ? "border-red-500" : "border-gray-200"
                                                }`}
                                            placeholder="One per line or comma-separated"
                                        />
                                        {step3Errors.phoneNumbersForEnrollment && (
                                            <p className="text-xs text-red-500 mt-1">{step3Errors.phoneNumbersForEnrollment}</p>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                                Zones or site name
                                            </label>
                                            <input
                                                type="text"
                                                value={step3Data.zonesOrSiteName}
                                                onChange={(e) => setStep3Data((s) => ({ ...s, zonesOrSiteName: e.target.value }))}
                                                className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${step3Errors.zonesOrSiteName ? "border-red-500" : "border-gray-200"
                                                    }`}
                                                placeholder="Zone or site name"
                                            />
                                            {step3Errors.zonesOrSiteName && (
                                                <p className="text-xs text-red-500 mt-1">{step3Errors.zonesOrSiteName}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                                Emergency contacts
                                            </label>
                                            <input
                                                type="text"
                                                value={step3Data.emergencyContacts}
                                                onChange={(e) => setStep3Data((s) => ({ ...s, emergencyContacts: e.target.value }))}
                                                className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${step3Errors.emergencyContacts ? "border-red-500" : "border-gray-200"
                                                    }`}
                                                placeholder="Emergency contact info"
                                            />
                                            {step3Errors.emergencyContacts && (
                                                <p className="text-xs text-red-500 mt-1">{step3Errors.emergencyContacts}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                            Shipping address
                                        </label>
                                        <textarea
                                            value={step3Data.shippingAddress}
                                            onChange={(e) => setStep3Data((s) => ({ ...s, shippingAddress: e.target.value }))}
                                            rows={3}
                                            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-y ${step3Errors.shippingAddress ? "border-red-500" : "border-gray-200"
                                                }`}
                                            placeholder="Full shipping address"
                                        />
                                        {step3Errors.shippingAddress && (
                                            <p className="text-xs text-red-500 mt-1">{step3Errors.shippingAddress}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider mb-1.5" style={{ color: "#374151" }}>
                                            Constraints (indoor only, outdoor perimeter, hours)
                                        </label>
                                        <textarea
                                            value={step3Data.constraints}
                                            onChange={(e) => setStep3Data((s) => ({ ...s, constraints: e.target.value }))}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none transition-colors resize-y"
                                            placeholder="Any constraints or special requirements"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(2)}
                                        className="px-6 py-3 rounded-lg font-semibold text-sm border transition-all hover:bg-gray-50"
                                        style={{ background: "#fff", borderColor: "#d1d5db", color: "#1f2937" }}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleStep3Submit}
                                        className="px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90"
                                        style={{ background: "#006dff" }}
                                    >
                                        Send request
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

        </div>
    );
}
