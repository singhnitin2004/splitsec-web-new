'use client';

import { useState, useCallback, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import ConfirmationModal from '@/components/common/ConfirmationModal';
import { submitGetInvolvedForm } from "@/lib/api/get-involved";
import { useToast } from "@/hooks/use-toast";

// Email validation function
const validateEmail = (email: string) => {
    // Comprehensive email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        return false;
    }

    // Additional check: domain must have at least one dot and valid TLD
    const parts = email.split('@');
    if (parts.length !== 2) return false;

    const domain = parts[1];
    const domainParts = domain.split('.');

    // Must have at least 2 parts (e.g., "example.com")
    if (domainParts.length < 2) return false;

    // TLD must be at least 2 characters
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2) return false;

    // Domain parts cannot be empty
    for (const part of domainParts) {
        if (part.length === 0) return false;
    }

    return true;
};

// Phone number formatting function
const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    let phoneNumber = value.replace(/\D/g, '');

    // Limit to 10 digits maximum
    if (phoneNumber.length > 10) {
        phoneNumber = phoneNumber.slice(0, 10);
    }

    // Format as (XXX) XXX-XXXX
    const match = phoneNumber.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
        const formatted = [match[1], match[2], match[3]].filter(Boolean).join('');
        if (formatted.length <= 3) return formatted;
        if (formatted.length <= 6) return `(${formatted.slice(0, 3)}) ${formatted.slice(3)}`;
        return `(${formatted.slice(0, 3)}) ${formatted.slice(3, 6)}-${formatted.slice(6)}`;
    }

    return phoneNumber;
};

// Phone number validation function
const validatePhoneNumber = (phone: string) => {
    // Remove all non-numeric characters
    const cleaned = phone.replace(/\D/g, '');

    // Must be exactly 10 digits
    if (cleaned.length !== 10) return false;

    // US format: 10 digits, area code cannot start with 0 or 1, exchange code cannot start with 0 or 1
    const usPhoneRegex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;

    return usPhoneRegex.test(cleaned);
};

export default function SecurityFirmsGuide() {
    const { toast } = useToast();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        title: '',
        company: '',
        email: '',
        phone: ''
    });

    // Validation state
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        title: '',
        company: '',
        email: '',
        phone: ''
    });

    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        title: false,
        company: false,
        email: false,
        phone: false
    });

    // Check if field is valid
    const isFieldValid = (name: string, value: string) => {
        if (!value.trim()) return null; // Not validated yet
        return validateField(name, value) === '';
    };

    // Validate individual field
    const validateField = (name: string, value: string) => {
        let error = '';

        switch (name) {
            case 'firstName':
                if (!value.trim()) {
                    error = 'First name is required';
                } else if (value.trim().length < 2) {
                    error = 'First name must be at least 2 characters';
                }
                break;
            case 'lastName':
                if (!value.trim()) {
                    error = 'Last name is required';
                } else if (value.trim().length < 2) {
                    error = 'Last name must be at least 2 characters';
                }
                break;
            case 'title':
                if (!value.trim()) {
                    error = 'Title is required';
                } else if (value.trim().length < 2) {
                    error = 'Title must be at least 2 characters';
                }
                break;
            case 'company':
                if (!value.trim()) {
                    error = 'Company name is required';
                } else if (value.trim().length < 2) {
                    error = 'Company name must be at least 2 characters';
                }
                break;
            case 'email':
                if (!value.trim()) {
                    error = 'Email is required';
                } else if (!validateEmail(value.trim())) {
                    error = 'Please enter a valid email address';
                }
                break;
            case 'phone':
                if (!value.trim()) {
                    error = 'Phone number is required';
                } else if (!validatePhoneNumber(value)) {
                    error = 'Please enter a valid phone number';
                }
                break;
        }

        return error;
    };

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        let processedValue = value;

        // Format phone number as user types
        if (name === 'phone') {
            processedValue = formatPhoneNumber(value);
        }

        setFormData(prev => ({ ...prev, [name]: processedValue }));

        // Validate if field has been touched
        if (touched[name as keyof typeof touched]) {
            const error = validateField(name, processedValue);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    // Handle blur event
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setTouched(prev => ({ ...prev, [name]: true }));

        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    // Check if form is valid
    const isFormValid = (validationErrors?: typeof errors) => {
        const currentErrors = validationErrors || errors;
        return (
            formData.firstName.trim() &&
            formData.lastName.trim() &&
            formData.title.trim() &&
            formData.company.trim() &&
            formData.email.trim() &&
            formData.phone.trim() &&
            validateEmail(formData.email.trim()) &&
            validatePhoneNumber(formData.phone) &&
            !Object.values(currentErrors).some(error => error !== '')
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Store form reference BEFORE async operation
        const form = e.currentTarget;

        // Mark all fields as touched
        const allTouched = {
            firstName: true,
            lastName: true,
            title: true,
            company: true,
            email: true,
            phone: true
        };
        setTouched(allTouched);

        // Validate all fields
        const newErrors = {
            firstName: validateField('firstName', formData.firstName),
            lastName: validateField('lastName', formData.lastName),
            title: validateField('title', formData.title),
            company: validateField('company', formData.company),
            email: validateField('email', formData.email),
            phone: validateField('phone', formData.phone)
        };
        setErrors(newErrors);

        // Check if form is valid
        if (!isFormValid(newErrors)) {
            // Scroll to first error
            const firstErrorField = Object.keys(newErrors).find(key => newErrors[key as keyof typeof newErrors] !== '');
            if (firstErrorField) {
                const errorElement = document.getElementById(firstErrorField);
                errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                errorElement?.focus();
            }
            return;
        }

        // Submit to API
        const result = await submitGetInvolvedForm({
            form_type: 'security_firms',
            first_name: formData.firstName,
            last_name: formData.lastName,
            title: formData.title,
            org_name: formData.company,
            email: formData.email,
            phone: formData.phone,
            interest: null,
        });

        if (result.success) {
            // Disable form fields using the stored reference
            if (form) {
                const inputs = form.querySelectorAll('input, button');
                inputs.forEach((el) => {
                    el.setAttribute('disabled', 'disabled');
                    el.classList.add('opacity-60');
                });
            }

            // Show success modal
            setShowSuccessModal(true);
        } else {
            // Handle error
            toast({
                title: "Submission Failed",
                description: result.error || "Please try again.",
                variant: "destructive",
            });
        }
    };

    const handleCloseModal = useCallback(() => {
        setShowSuccessModal(false);
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* HERO / VALUE PROP */}
            <section className="relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 pt-24 md:pt-32 pb-10">
                    <div className="text-center">
                        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl text-gray-800">
                            The Security Firm&apos;s Guide to
                        </h1>
                        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-gray-800">
                            <span>Faster, Safer Gunfire Response</span>
                        </h1>
                        <p className="mt-6 text-lg mx-auto max-w-6xl text-slate-700 leading-relaxed">
                            Practical guidance for contract security companies navigating gunfire risk, officer safety, client expectations, and liability.
                            Learn how privacy-first, smartphone-based gunshot detection can support both armed and unarmed security operations, without new hardware.
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
                                    <p className="text-sm text-slate-700 pt-0.5">Contract security company leadership</p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-white shrink-0 text-xs">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-slate-700 pt-0.5">Operations and regional managers</p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-white shrink-0 text-xs">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-slate-700 pt-0.5">Armed and unarmed security service providers</p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-white shrink-0 text-xs">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-slate-700 pt-0.5">Security firms supporting schools, venues, campuses, and workplaces</p>
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
                                    <span className="text-sm text-slate-700">How security firms are evaluated after gunfire incidents</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-0.5 shrink-0">▶</span>
                                    <span className="text-sm text-slate-700">Supporting both unarmed and armed security officers in high-uncertainty moments</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-0.5 shrink-0">▶</span>
                                    <span className="text-sm text-slate-700">Reducing response delays without installing new hardware</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-0.5 shrink-0">▶</span>
                                    <span className="text-sm text-slate-700">Differentiating services in competitive bids and renewals</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-0.5 shrink-0">▶</span>
                                    <span className="text-sm text-slate-700">What a low-friction pilot looks like across client sites and posts</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Get the Guide Form + Whitepaper Excerpt */}
                    <div className="md:col-span-7 space-y-6 order-1 md:order-2">
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

                                {/* Row 2: Title / Company */}
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
                                            placeholder="VP Operations / Regional Manager"
                                        />
                                        <div className="min-h-[20px]">
                                            {touched.title && errors.title && (
                                                <p className="text-xs text-red-500 mt-1">{errors.title}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-semibold text-slate-700">Company name <span className="text-pink-500">*</span></label>
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`h-12 w-full rounded-2xl border-2 px-4 text-sm outline-none transition-all ${touched.company && errors.company
                                                ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                                                : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                                                }`}
                                            placeholder="Acme Security Services"
                                        />
                                        <div className="min-h-[20px]">
                                            {touched.company && errors.company && (
                                                <p className="text-xs text-red-500 mt-1">{errors.company}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3: Email / Phone */}
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="grid gap-2">
                                        <label className="text-sm font-semibold text-slate-700">Work email <span className="text-pink-500">*</span></label>
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
                                                placeholder="name@company.com"
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
                            <div className="border-b border-gray-200 p-4">
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
                                    &quot;Security companies are often judged not just on outcomes, but on how quickly and clearly threats were recognized in the first moments.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUCCESS MODAL */}
            <ConfirmationModal
                isOpen={showSuccessModal}
                onClose={handleCloseModal}
                title="Thank you! Your Security Firm's Guide is on its way."
                subtitle="Please check your email in a few minutes for the download link."
                featureCards={[
                    {
                        icon: '⚡',
                        title: 'Faster awareness',
                        description: 'Helps security officers recognize potential gunfire sooner, reducing hesitation in the first critical moments.',
                        color: 'blue'
                    },
                    {
                        icon: '🛡️',
                        title: 'Officer safety & liability',
                        description: 'Supports safer decision-making for both armed and unarmed officers during uncertain situations.',
                        color: 'pink'
                    },
                    {
                        icon: '📱',
                        title: 'No hardware',
                        description: 'Works on standard smartphones, with no additional infrastructure required at the client site.',
                        color: 'blue'
                    }
                ]}
                nextSteps={[
                    {
                        number: 1,
                        text: "You'll receive the Security Firm's Guide by email."
                    },
                    {
                        number: 2,
                        text: 'If helpful, you can reply to explore a pilot or schedule a short demo.'
                    },
                    {
                        number: 3,
                        text: "We'll only follow up with information relevant to your role and services."
                    }
                ]}
            />
        </div>
    );
}
