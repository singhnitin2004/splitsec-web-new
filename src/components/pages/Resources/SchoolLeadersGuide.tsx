"use client";

import { useState } from "react";
import { CheckCircle, X } from "lucide-react";

export default function SchoolLeadersGuide() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        title: "",
        orgName: "",
        email: "",
        phone: ""
    });

    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        title: false,
        orgName: false,
        email: false,
        phone: false
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        title: "",
        orgName: "",
        email: "",
        phone: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        validateField(name, formData[name as keyof typeof formData]);
    };

    const validateField = (name: string, value: string) => {
        let error = "";

        switch (name) {
            case "firstName":
            case "lastName":
            case "title":
            case "orgName":
                if (!value.trim()) {
                    error = "This field is required";
                }
                break;
            case "email":
                if (!value.trim()) {
                    error = "Email is required";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Please enter a valid email";
                }
                break;
            case "phone":
                if (!value.trim()) {
                    error = "Phone is required";
                } else if (!/^[\d\s\-\(\)]+$/.test(value) || value.replace(/\D/g, "").length < 10) {
                    error = "Please enter a valid phone number";
                }
                break;
        }

        setErrors(prev => ({ ...prev, [name]: error }));
        return !error;
    };

    const isFieldValid = (name: string, value: string) => {
        switch (name) {
            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            case "phone":
                return /^[\d\s\-\(\)]+$/.test(value) && value.replace(/\D/g, "").length >= 10;
            default:
                return value.trim().length > 0;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Mark all fields as touched
        Object.keys(formData).forEach(key => {
            setTouched(prev => ({ ...prev, [key]: true }));
            validateField(key, formData[key as keyof typeof formData]);
        });

        // Check if form is valid
        const isValid = Object.keys(formData).every(key =>
            validateField(key, formData[key as keyof typeof formData])
        );

        if (isValid) {
            // TODO: Implement form submission
            console.log("Form submitted:", formData);
            alert("Thank you! Your download link will be sent to your email.");
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* HERO / VALUE PROP */}
            <section className="relative overflow-hidden">
                <div className="mx-auto max-w-6xl px-4 pt-24 md:pt-32 pb-10">
                    <div className="text-center">
                        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl text-gray-800">
                            The School Leader&apos;s Guide to
                        </h1>
                        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-gray-800">
                            <span>Faster, Privacy‑First Gunshot Detection</span>
                        </h1>

                        <p className="mt-6 text-lg mx-auto max-w-3xl text-slate-700 leading-relaxed">
                            Practical guidance for school and college leaders evaluating gunshot detection - including what to ask vendors, how to think about privacy, and what a pilot can look like.
                        </p>
                    </div>
                </div>
            </section>

            {/* LEAD CAPTURE + FORM */}
            <section id="leadFormSection" className="mx-auto max-w-6xl px-4 pb-16">
                <div className="grid gap-10 md:grid-cols-12">
                    {/* LEFT COLUMN - Who This Guide Is For + What's Inside */}
                    <div className="md:col-span-5 space-y-6 order-2 md:order-1">
                        {/* WHO THIS GUIDE IS FOR */}
                        <div className="rounded-3xl border-2 border-blue-200 bg-white shadow-lg">
                            <div className="border-b-2 border-gray-200 p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">Who This Guide Is For</h3>
                                        <p className="mt-0.5 text-xs text-slate-600">A practical resource for decision-makers and safety teams.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start gap-3 group">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-white shrink-0 text-xs">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-slate-700 pt-0.5">Superintendents, principals, and district leaders</p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-white shrink-0 text-xs">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-slate-700 pt-0.5">School safety directors and emergency managers</p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-white shrink-0 text-xs">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-slate-700 pt-0.5">Campus operations and IT leadership</p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-white shrink-0 text-xs">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-slate-700 pt-0.5">Security partners supporting schools</p>
                                </div>
                            </div>
                        </div>

                        {/* WHAT'S INSIDE */}
                        <div className="rounded-3xl border-2 border-blue-200 bg-white shadow-lg">
                            <div className="border-b-2 border-gray-200 p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">What&apos;s Inside</h3>
                                </div>
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-0.5 shrink-0">▶</span>
                                    <span className="text-sm text-slate-700">What delays response in the first minutes after a gunshot</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-0.5 shrink-0">▶</span>
                                    <span className="text-sm text-slate-700">Questions to ask about false positives, reliability, and coverage</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-0.5 shrink-0">▶</span>
                                    <span className="text-sm text-slate-700">Privacy and data handling: what &quot;privacy-first&quot; should mean</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-0.5 shrink-0">▶</span>
                                    <span className="text-sm text-slate-700">A simple pilot structure and how to define success</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Get the Guide Form + Whitepaper Excerpt */}
                    <div className="md:col-span-7 order-1 md:order-2 space-y-6">
                        {/* GET THE GUIDE FORM */}
                        <div className="rounded-3xl border-2 border-blue-200 bg-white shadow-lg">
                            <div className="border-b-2 border-gray-200 p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900">Get the Guide</h2>
                                        <p className="mt-0.5 text-sm text-slate-600">
                                            Please share a few details so we can send the download link.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <form id="leadForm" className="p-6 space-y-5" onSubmit={handleSubmit}>
                                {/* Row 1: First / Last */}
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="grid gap-2">
                                        <label className="text-sm font-semibold text-slate-700">First name <span className="text-pink-500">*</span></label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`h-12 w-full rounded-2xl border-2 px-4 text-sm outline-none transition-all ${touched.firstName && errors.firstName
                                                ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                                                : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                                                }`}
                                            placeholder="Sarah"
                                        />
                                        <div className="min-h-[20px]">
                                            {touched.firstName && errors.firstName && (
                                                <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-semibold text-slate-700">Last name <span className="text-pink-500">*</span></label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`h-12 w-full rounded-2xl border-2 px-4 text-sm outline-none transition-all ${touched.lastName && errors.lastName
                                                ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                                                : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                                                }`}
                                            placeholder="Johnson"
                                        />
                                        <div className="min-h-[20px]">
                                            {touched.lastName && errors.lastName && (
                                                <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: Title / School */}
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="grid gap-2">
                                        <label className="text-sm font-semibold text-slate-700">Title <span className="text-pink-500">*</span></label>
                                        <input
                                            id="title"
                                            name="title"
                                            type="text"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`h-12 w-full rounded-2xl border-2 px-4 text-sm outline-none transition-all ${touched.title && errors.title
                                                ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                                                : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                                                }`}
                                            placeholder="Principal / Safety Director"
                                        />
                                        <div className="min-h-[20px]">
                                            {touched.title && errors.title && (
                                                <p className="text-xs text-red-500 mt-1">{errors.title}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-semibold text-slate-700">School / Organization <span className="text-pink-500">*</span></label>
                                        <input
                                            id="orgName"
                                            name="orgName"
                                            type="text"
                                            value={formData.orgName}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`h-12 w-full rounded-2xl border-2 px-4 text-sm outline-none transition-all ${touched.orgName && errors.orgName
                                                ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                                                : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                                                }`}
                                            placeholder="Lincoln High School"
                                        />
                                        <div className="min-h-[20px]">
                                            {touched.orgName && errors.orgName && (
                                                <p className="text-xs text-red-500 mt-1">{errors.orgName}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3: Email / Phone */}
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="grid gap-2">
                                        <label className="text-sm font-semibold text-slate-700">Email <span className="text-pink-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`h-12 w-full rounded-2xl border-2 pl-4 pr-10 text-sm outline-none transition-all ${touched.email && formData.email
                                                    ? isFieldValid('email', formData.email)
                                                        ? 'border-green-500 focus:border-green-500 focus:ring-4 focus:ring-green-100'
                                                        : 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                                                    : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                                                    }`}
                                                placeholder="name@school.org"
                                            />
                                            {touched.email && formData.email && (
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    {isFieldValid('email', formData.email) ? (
                                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                                    ) : (
                                                        <X className="h-4 w-4 text-red-500" />
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <div className="min-h-[20px]">
                                            {touched.email && errors.email && (
                                                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-semibold text-slate-700">Phone <span className="text-pink-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`h-12 w-full rounded-2xl border-2 pl-4 pr-10 text-sm outline-none transition-all ${touched.phone && formData.phone
                                                    ? isFieldValid('phone', formData.phone)
                                                        ? 'border-green-500 focus:border-green-500 focus:ring-4 focus:ring-green-100'
                                                        : 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                                                    : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                                                    }`}
                                                placeholder="(555) 555-5555"
                                            />
                                            {touched.phone && formData.phone && (
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    {isFieldValid('phone', formData.phone) ? (
                                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                                    ) : (
                                                        <X className="h-4 w-4 text-red-500" />
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <div className="min-h-[20px]">
                                            {touched.phone && errors.phone && (
                                                <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    id="submitBtn"
                                    type="submit"
                                    className="group relative w-full rounded-2xl bg-blue-600 px-4 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Submit to get the download
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </button>

                                <div className="flex items-start gap-2 rounded-xl bg-slate-50 p-3">
                                    <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-xs text-slate-600">
                                        We&apos;ll email your download link. We do not sell your information.
                                    </p>
                                </div>
                            </form>
                        </div>

                        {/* WHITEPAPER EXCERPT */}
                        <div id="excerpt" className="rounded-3xl border border-blue-200 bg-white shadow-md">
                            <div className="border-b border-gray-200  p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                                            <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900">Whitepaper Excerpt</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-slate-700 italic leading-relaxed">
                                    &quot;The most avoidable delays happen before anyone recognizes what&apos;s happening. Technology can&apos;t replace training, but it can reduce uncertainty & speed the first actions that matter.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
