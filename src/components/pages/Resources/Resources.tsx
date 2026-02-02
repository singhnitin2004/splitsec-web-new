"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GraduationCap, MapPin, Shield, Lightbulb, Heart, Activity, Building, Church, Music, Check, BookOpen, HelpCircle } from "lucide-react";

export default function ResourcesPage() {
    const [formData, setFormData] = useState({
        organizationName: "",
        contactFirstName: "",
        contactLastName: "",
        email: "",
        organizationType: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const organizationTypes = [
        { value: "school", label: "School/University" },
        { value: "event", label: "Event/Parks" },
        { value: "security", label: "Security Firm" },
        { value: "law-enforcement", label: "Law Enforcement" },
        { value: "nonprofit", label: "Non-profit" },
        { value: "healthcare", label: "Healthcare" },
        { value: "government", label: "Local Government" },
        { value: "worship", label: "House of Worship" },
        { value: "entertainment", label: "Entertainment/Nightlife" },
        { value: "other", label: "Other" }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // TODO: Implement form submission logic
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Form submitted successfully!");
            setFormData({
                organizationName: "",
                contactFirstName: "",
                contactLastName: "",
                email: "",
                organizationType: "",
                message: ""
            });
        }, 1000);
    };

    const handleBookDemo = () => {
        window.location.href = "/schedule-demo";
    };

    const industryCards = [
        {
            id: 1,
            title: "Schools & Universities",
            description: "Enable faster awareness and more consistent staff communication during critical incidents without adding new hardware or compromising privacy.",
            link: "/resources/school-leaders-guide",
            buttonText: "School Leaders Guide",
            icon: GraduationCap
        },
        {
            id: 2,
            title: "Outdoor Events & Parks",
            description: "Built for open, uncontrolled environments where traditional systems fall short and rapid detection can reduce confusion and response time.",
            link: "/resources/events-parks-guide",
            buttonText: "Events & Parks Leaders Guide",
            icon: MapPin
        },
        {
            id: 3,
            title: "Security Firms",
            description: "Strengthen response speed, improve reporting, and differentiate your services with a privacy-first, mobile-based detection layer.",
            link: "/resources/security-firms-guide",
            buttonText: "Security Firms Guide",
            icon: Shield
        },
        {
            id: 4,
            title: "Law Enforcement",
            description: "Provides situational awareness and coordination support for active incidents, complementing existing tools.",
            link: "/schedule-demo",
            buttonText: "Schedule a Demo",
            icon: Lightbulb
        },
        {
            id: 5,
            title: "Non-profits",
            description: "Support staff and volunteer safety across programs and events while keeping events privacy-first, mobile that is easy to pilot.",
            link: "/schedule-demo",
            buttonText: "Schedule a Demo",
            icon: Heart
        },
        {
            id: 6,
            title: "Healthcare",
            description: "Designed for hospitals, ERs, urgent care, and behavioral health where rapid awareness supports safer staff coordination.",
            link: "/schedule-demo",
            buttonText: "Schedule a Demo",
            icon: Activity
        },
        {
            id: 7,
            title: "Local Government & Public Facilities",
            description: "Support safety teams across civic buildings and public services with a mobile-first detection layer that is easy to pilot.",
            link: "/schedule-demo",
            buttonText: "Schedule a Demo",
            icon: Building
        },
        {
            id: 8,
            title: "Houses of Worship",
            description: "For churches, temples, mosques, gurdwaras, and synagogues supporting safety teams with privacy-first alerts and faster awareness.",
            link: "/schedule-demo",
            buttonText: "Schedule a Demo",
            icon: Church
        },
        {
            id: 9,
            title: "Entertainment & Nightlife Venues",
            description: "Support faster staff coordination in crowded, high-noise environments such as music venues, clubs, and live event spaces using privacy-first, on-device detection.",
            link: "/schedule-demo",
            buttonText: "Schedule a Demo",
            icon: Music
        },
        {
            id: 10,
            title: "Blog",
            description: "Stay informed with the latest insights, news, and updates about safety technology, industry best practices, and SplitSec AI developments.",
            link: "/blog",
            buttonText: "Read Blog Posts",
            icon: BookOpen
        },
        {
            id: 11,
            title: "FAQ",
            description: "Find answers to frequently asked questions about SplitSec AI, our technology, implementation process, and how we can help keep your community safer.",
            link: "/faq",
            buttonText: "View FAQs",
            icon: HelpCircle
        }
    ];

    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12  sm:pt-16 md:t-20 lg:pt-24">
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-8 sm:mb-10 md:mb-12">
                    {/* Text Content - Left on Desktop */}
                    <div className="space-y-5 lg:space-y-6 order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] uppercase tracking-tight leading-tight">
                            Industry Resources
                        </h1>

                        {/* Paragraph */}
                        <p className="text-sm sm:text-base md:text-lg text-[#6E6E6E] leading-relaxed max-w-xl">
                            Industry-specific safety resources for your environment
                        </p>

                        {/* Button */}
                        <button className="w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 border-2 border-[#337CFF] text-[#337CFF] font-medium rounded-lg hover:bg-[#337CFF] hover:text-white transition-colors duration-200 text-base sm:text-lg">
                            Join The Movement
                        </button>
                    </div>

                    {/* Image - Right on Desktop */}
                    <div className="relative w-full order-1 lg:order-2">
                        <div className="relative w-full aspect-3/2 sm:aspect-4/3 lg:aspect-4/3">
                            <Image
                                src="/resources/hero.png"
                                alt="Industry Resources"
                                fill
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Resources by Industry Section */}
            <section className=" sm:py-12  max-w-7xl mx-auto ">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <div className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D]">Resources by Industry & Topic</h2>
                        <p className="text-sm sm:text-base text-[#6E6E6E] mt-2">Explore guides, articles, and answers tailored to your needs</p>
                    </div>

                    {/* Industry Cards Grid - 3 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
                        {industryCards.map((card) => {
                            const IconComponent = card.icon;
                            return (
                                <div key={card.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                                    <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#337CFF]/10 flex items-center justify-center mb-3 sm:mb-4">
                                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#337CFF]" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">{card.title}</h3>
                                        <p className="text-xs sm:text-sm text-[#6E6E6E] mb-4 sm:mb-6 grow leading-relaxed">
                                            {card.description}
                                        </p>
                                        <Link
                                            href={card.link}
                                            className="w-full mt-auto rounded-lg bg-[#337CFF]/10 hover:bg-[#337CFF]/20 text-xs sm:text-sm font-semibold border border-[#337CFF]/20 px-4 py-2 text-center transition-colors duration-200"
                                        >
                                            {card.buttonText}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="shadow-md border border-gray-200 rounded-lg bg-white">
                        <div className="p-0!">
                            {/* Form Header */}
                            <div className="mb-0">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-3 border-b border-gray-200 py-3 sm:py-4 px-4 sm:px-6  from-[#337CFF]/5 via-[#ec4899]/5 to-[#337CFF]/5">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#337CFF]/10 flex items-center justify-center shrink-0">
                                        <Building className="w-5 h-5 sm:w-6 sm:h-6 text-[#337CFF]" />
                                    </div>
                                    <div>
                                        <h3 className="text-base sm:text-lg md:text-xl font-bold">For Institutions & Organizations</h3>
                                        <p className="text-xs sm:text-sm text-[#6E6E6E]">Learn how SplitSec AI can help make your facilities safer</p>
                                    </div>
                                </div>
                                <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                                        Start a conversation about personalized, collaborative safety initiatives.
                                    </h2>
                                    <p className="text-sm sm:text-base text-[#6E6E6E] mb-3 sm:mb-4">
                                        Share a little about your environment and goals. We partner with organizations to align detection and alerting to industry-specific, operating and communication protocols, and the people who need to know, when every second counts.
                                    </p>

                                    {/* Benefits with Check Icons */}
                                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                        <div className="flex items-center space-x-2 sm:space-x-3">
                                            <div className="w-5 h-5 rounded-full bg-[#337CFF] flex items-center justify-center shrink-0">
                                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-xs sm:text-sm text-[#6E6E6E]">
                                                Custom deployment solutions
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2 sm:space-x-3">
                                            <div className="w-5 h-5 rounded-full bg-[#337CFF] flex items-center justify-center shrink-0">
                                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-xs sm:text-sm text-[#6E6E6E]">
                                                Pilot program opportunities
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2 sm:space-x-3">
                                            <div className="w-5 h-5 rounded-full bg-[#337CFF] flex items-center justify-center shrink-0">
                                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-xs sm:text-sm text-[#6E6E6E]">
                                                Dedicated support team
                                            </span>
                                        </div>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                        {/* Organization Name */}
                                        <div>
                                            <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 block">
                                                Organization name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Organization name"
                                                required
                                                value={formData.organizationName}
                                                onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-[#337CFF] outline-none transition-all"
                                            />
                                        </div>

                                        {/* Contact Names */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            <div>
                                                <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 block">
                                                    Contact first name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Contact first name"
                                                    required
                                                    value={formData.contactFirstName}
                                                    onChange={(e) => setFormData({ ...formData, contactFirstName: e.target.value })}
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-[#337CFF] outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 block">
                                                    Contact last name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Contact last name"
                                                    required
                                                    value={formData.contactLastName}
                                                    onChange={(e) => setFormData({ ...formData, contactLastName: e.target.value })}
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-[#337CFF] outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Email and Organization Type */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            <div>
                                                <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 block">
                                                    Email address <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Email address"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-[#337CFF] outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 block">
                                                    Organization type
                                                </label>
                                                <select
                                                    value={formData.organizationType}
                                                    onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-[#337CFF] outline-none transition-all bg-white"
                                                >
                                                    <option value="">Select</option>
                                                    {organizationTypes.map((type) => (
                                                        <option key={type.value} value={type.value}>
                                                            {type.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 block">
                                                Tell us about your organization and how you would like to collaborate
                                            </label>
                                            <textarea
                                                placeholder="A few sentences is perfect..."
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-[#337CFF] outline-none transition-all resize-none"
                                            />
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                                            <button
                                                type="submit"
                                                className="w-full sm:w-auto bg-[#337CFF] text-white py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                                            </button>
                                            <button
                                                type="button"
                                                className="w-full sm:w-auto py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-semibold border border-[#337CFF]/20 hover:bg-[#337CFF]/10 rounded-lg transition-colors duration-200"
                                                onClick={handleBookDemo}
                                            >
                                                Schedule a demo
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
