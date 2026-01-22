"use client";

import Image from "next/image";
import { useState } from "react";

export default function GetInvolvedPage() {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    const betaFaqData = [
        {
            "id": "1",
            "question": "What is the SplitSec AI beta program?",
            "answer": "The SplitSec AI beta gives selected users early access to help test and shape our real-time, privacy-first safety technology before public launch."
        },
        {
            "id": "2",
            "question": "When does the beta start?",
            "answer": "The Android beta is starting now with limited spots. An iPhone (iOS) beta will follow soon."
        },
        {
            "id": "3",
            "question": "Which devices are supported?",
            "answer": "The current beta focuses on Android devices. iPhone users can join the waitlist and will be notified when the iOS beta becomes available."
        },
        {
            "id": "4",
            "question": "Who can participate in the beta?",
            "answer": "This is a limited beta for users willing to actively test the app and provide feedback. Depending on response volume, we'll accept as many applicants as possible."
        },
        {
            "id": "5",
            "question": "What does participation involve?",
            "answer": "Beta participants receive early access to the SplitSec AI app and are asked to: Use the app in real-world environments, help test performance and reliability, and share structured feedback. We may suggest typical scenarios, but there are no scripted tests."
        },
        {
            "id": "6",
            "question": "How much time is required?",
            "answer": "There is no maximum time commitment. We estimate about 1–2 hours over a couple of weeks, using the app normally and sharing feedback."
        },
        {
            "id": "7",
            "question": "Is my data private?",
            "answer": "Yes. Privacy is core to SplitSec AI. No audio is recorded or stored, and nothing is uploaded to the cloud. All detection happens securely on your device."
        },
        {
            "id": "8",
            "question": "Will the beta app be free?",
            "answer": "Yes. Beta access is free for accepted participants during the testing period."
        },
        {
            "id": "9",
            "question": "What happens after I apply?",
            "answer": "If selected, you'll receive an email with next steps. If not selected right away, you may be considered for future beta waves or notified when the app launches publicly."
        }
    ];
    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-8 sm:mt-0">
                    {/* Image - First on Mobile, Right on Desktop */}
                    <div className="relative w-full order-1 lg:order-2">
                        <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] lg:aspect-[4/3]">
                            <Image
                                src="/GetInvolved/getinvolved.png"
                                alt="Get Involved with SplitSec.AI"
                                fill
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Text Content - Second on Mobile, Left on Desktop */}
                    <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] uppercase tracking-tight leading-tight">
                            GET INVOLVED
                        </h1>

                        {/* Paragraph */}
                        <p className="text-base sm:text-lg md:text-xl text-[#6E6E6E] leading-relaxed">
                            To make our communities safer. Whether you are an individual, family or organization, there is a way for you to be part of it.
                        </p>

                        {/* Button */}
                        <button className="w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 border-2 border-[#337CFF] text-[#337CFF] font-medium rounded-lg hover:bg-[#337CFF] hover:text-white transition-colors duration-200 text-base sm:text-lg">
                            Join The Movement
                        </button>
                    </div>
                </div>

                {/* Advisory Council Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16 lg:mt-28">
                    {/* Left Side - Advisory Council Info */}
                    <div className="space-y-4 sm:space-y-5 order-2 lg:order-1">
                        <div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D2D2D] mb-2 sm:mb-3">
                                Join an Advisory Council
                            </h2>
                            <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
                                Leaders, educators, safety experts, and community advocates can shape the future of community safety.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative w-full aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden">
                            <Image
                                src="/GetInvolved/advisory-council.jpg"
                                alt="Advisory Council"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-2.5 sm:space-y-3">
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2D2D2D]">
                                Why Join Our Advisory Council?
                            </h3>

                            <div className="space-y-2 sm:space-y-2.5">
                                <div className="flex items-start gap-2.5 sm:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#337CFF] flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm sm:text-base text-[#2D2D2D] leading-relaxed">
                                        Influence AI safety policies and features
                                    </p>
                                </div>

                                <div className="flex items-start gap-2.5 sm:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#337CFF] flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm sm:text-base text-[#2D2D2D] leading-relaxed">
                                        Connect with thought leaders and experts
                                    </p>
                                </div>

                                <div className="flex items-start gap-2.5 sm:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#337CFF] flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm sm:text-base text-[#2D2D2D] leading-relaxed">
                                        Shape the future of community safety
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="order-2 lg:sticky lg:top-8 h-fit">
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 overflow-hidden">
                            {/* Form Header with Gradient */}
                            <div className="bg-gradient-to-r from-[#337CFF] via-[#8B5CF6] to-[#EC4899] p-1">
                            </div>

                            {/* Form Content */}
                            <form className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 lg:space-y-6">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                            First name: <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder="e.g., Maya"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                            Last name: <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            placeholder="e.g., Johnson"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                        Email: <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="e.g., maya@example.com"
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                        required
                                    />
                                </div>

                                {/* LinkedIn */}
                                <div>
                                    <label htmlFor="linkedin" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                        LinkedIn Profile:
                                    </label>
                                    <input
                                        type="url"
                                        id="linkedin"
                                        placeholder="https://www.linkedin.com/in/yourname"
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                    />
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                        Optional: Help us learn more about your background
                                    </p>
                                </div>

                                {/* Motivation */}
                                <div>
                                    <label htmlFor="motivation" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                        What motivated you to want to advise with SplitSec AI?
                                    </label>
                                    <textarea
                                        id="motivation"
                                        rows={3}
                                        placeholder="Tell us about your passion for community safety..."
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all resize-none text-[#2D2D2D] placeholder:text-gray-400"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-1 sm:pt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#337CFF] text-white px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#2868d6] active:bg-[#1e5ac9] transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base group"
                                    >
                                        Submit
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Campus Ambassador Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16 lg:mt-28">
                    {/* Left Side - Campus Ambassador Info */}
                    <div className="space-y-4 sm:space-y-5 order-2 lg:order-1">
                        <div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D2D2D] mb-2 sm:mb-3">
                                Become a Campus Ambassador
                            </h2>
                            <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
                                Are you passionate about making your campus safer? Join our Campus Ambassador Program and lead the charge in promoting safety awareness and community building at your college or university.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative w-full aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden">
                            <Image
                                src="/GetInvolved/campus-ambassador.webp"
                                alt="Campus Ambassador"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-2.5 sm:space-y-3">
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2D2D2D]">
                                Why Become a Campus Ambassador?
                            </h3>

                            <div className="space-y-2 sm:space-y-2.5">
                                <div className="flex items-start gap-2.5 sm:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#337CFF] flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm sm:text-base text-[#2D2D2D] leading-relaxed">
                                        Lead safety initiatives on your campus
                                    </p>
                                </div>

                                <div className="flex items-start gap-2.5 sm:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#337CFF] flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm sm:text-base text-[#2D2D2D] leading-relaxed">
                                        Gain leadership and networking experience
                                    </p>
                                </div>

                                <div className="flex items-start gap-2.5 sm:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#337CFF] flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm sm:text-base text-[#2D2D2D] leading-relaxed">
                                        Access exclusive resources and training
                                    </p>
                                </div>

                                <div className="flex items-start gap-2.5 sm:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#337CFF] flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm sm:text-base text-[#2D2D2D] leading-relaxed">
                                        Make a real impact in your community
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="order-2 lg:sticky lg:top-8 h-fit">
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 overflow-hidden">
                            {/* Form Header with Gradient */}
                            <div className="bg-gradient-to-r from-[#337CFF] via-[#8B5CF6] to-[#EC4899] p-1">
                            </div>

                            {/* Form Content */}
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#2D2D2D] mb-1 sm:mb-2">
                                        Become a Campus Ambassador
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#6E6E6E]">
                                        Fill out the form below to get started
                                    </p>
                                </div>

                                <form className="space-y-4 sm:space-y-5 lg:space-y-6">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div>
                                            <label htmlFor="campusFirstName" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                                First name: <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="campusFirstName"
                                                placeholder="e.g., Maya"
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="campusLastName" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                                Last name: <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="campusLastName"
                                                placeholder="e.g., Johnson"
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="campusEmail" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                            Email: <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="campusEmail"
                                            placeholder="e.g., maya@example.com"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                            required
                                        />
                                    </div>

                                    {/* College/School Name */}
                                    <div>
                                        <label htmlFor="collegeName" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                            College/School Name:
                                        </label>
                                        <input
                                            type="text"
                                            id="collegeName"
                                            placeholder="e.g., University of Illinois"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                        />
                                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                            Your current educational institution
                                        </p>
                                    </div>

                                    {/* Motivation */}
                                    <div>
                                        <label htmlFor="campusMotivation" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                            What motivated you to become a campus ambassador?
                                        </label>
                                        <textarea
                                            id="campusMotivation"
                                            rows={3}
                                            placeholder="Share your vision for making your campus safer..."
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all resize-none text-[#2D2D2D] placeholder:text-gray-400"
                                        />
                                    </div>

                                    {/* Submit and Reset Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-2">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-[#337CFF] text-white px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#2868d6] active:bg-[#1e5ac9] transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base group"
                                        >
                                            Submit
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Beta Tester Section*/}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16 lg:mt-28">
                    {/* Left Side - Beta FAQ */}
                    <div className="space-y-4 sm:space-y-5 order-2 lg:order-1">
                        <div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D2D2D] mb-2 sm:mb-3">
                                Beta Access FAQ
                            </h2>
                            <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
                                Everything you need to know about the SplitSec AI beta program.
                            </p>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="space-y-3">
                            {betaFaqData.map((faq) => (
                                <div
                                    key={faq.id}
                                    className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <button
                                        onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                                        className="w-full px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-sm sm:text-base font-semibold text-[#2D2D2D] pr-4">
                                            {faq.question}
                                        </span>
                                        <svg
                                            className={`w-5 h-5 text-[#337CFF] flex-shrink-0 transition-transform duration-200 ${openQuestion === faq.id ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openQuestion === faq.id && (
                                        <div className="px-4 sm:px-5 pb-3 sm:pb-4 pt-1">
                                            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Beta Access Form */}
                    <div className="order-2 lg:sticky lg:top-8 h-fit">
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 overflow-hidden">
                            {/* Form Header with Gradient */}
                            <div className="bg-gradient-to-r from-[#337CFF] via-[#8B5CF6] to-[#EC4899] p-1">
                            </div>

                            {/* Form Content */}
                            <div className="p-4 sm:p-5 lg:p-6">
                                <div className="mb-3 sm:mb-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#2D2D2D] mb-1 sm:mb-1.5">
                                        Request Beta Access
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#6E6E6E]">
                                        Fill out the form below to get started
                                    </p>
                                </div>

                                <form className="space-y-3 sm:space-y-3.5 lg:space-y-4">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                                        <div>
                                            <label htmlFor="betaFirstName" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1 sm:mb-1.5">
                                                First name: <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="betaFirstName"
                                                placeholder="e.g., Maya"
                                                className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="betaLastName" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1 sm:mb-1.5">
                                                Last name: <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="betaLastName"
                                                placeholder="e.g., Johnson"
                                                className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="betaEmail" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1 sm:mb-1.5">
                                            Email: <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="betaEmail"
                                            placeholder="e.g., maya@example.com"
                                            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                            required
                                        />
                                    </div>

                                    {/* State and Role */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                                        <div>
                                            <label htmlFor="betaState" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1 sm:mb-1.5">
                                                I live in the state of: <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="betaState"
                                                className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] bg-white"
                                                required
                                            >
                                                <option value="">Select your state</option>
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="betaRole" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1 sm:mb-1.5">
                                                I am: <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="betaRole"
                                                className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] bg-white"
                                                required
                                            >
                                                <option value="">Select your role</option>
                                                <option value="student">Student</option>
                                                <option value="parent">Parent</option>
                                                <option value="teacher">Teacher/Educator</option>
                                                <option value="administrator">School Administrator</option>
                                                <option value="security">Security Professional</option>
                                                <option value="community">Community Leader</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Device Selection */}
                                    <div>
                                        <label className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                            My device: <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            <div className="border border-gray-300 rounded-lg p-2.5 sm:p-3 hover:border-[#337CFF] transition-colors cursor-pointer">
                                                <label className="flex items-start gap-2.5 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="device"
                                                        value="android"
                                                        className="w-4 h-4 text-[#337CFF] border-gray-300 rounded focus:ring-[#337CFF] mt-0.5"
                                                    />
                                                    <div className="flex-1">
                                                        <p className="text-sm sm:text-base font-semibold text-[#2D2D2D]">
                                                            I have an Android phone
                                                        </p>
                                                        <p className="text-xs text-[#6E6E6E] mt-0.5">
                                                            (Required for this beta testing round)
                                                        </p>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="border border-gray-300 rounded-lg p-2.5 sm:p-3 hover:border-[#337CFF] transition-colors cursor-pointer">
                                                <label className="flex items-start gap-2.5 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="device"
                                                        value="iphone"
                                                        className="w-4 h-4 text-[#337CFF] border-gray-300 rounded focus:ring-[#337CFF] mt-0.5"
                                                    />
                                                    <div className="flex-1">
                                                        <p className="text-sm sm:text-base font-semibold text-[#2D2D2D]">
                                                            I have an iPhone
                                                        </p>
                                                        <p className="text-xs text-[#6E6E6E] mt-0.5">
                                                            (Add me to the iPhone beta waitlist)
                                                        </p>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Motivation */}
                                    <div>
                                        <label htmlFor="betaMotivation" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1 sm:mb-1.5">
                                            What prompted you to request Beta access? <span className="text-red-500">*</span>
                                        </label>
                                        <p className="text-xs text-[#6E6E6E] mb-1.5">
                                            We'd love to understand what's resonating with our community.
                                        </p>
                                        <textarea
                                            id="betaMotivation"
                                            rows={3}
                                            placeholder="In your own words, what motivated you to sign up? One or two sentences is perfect."
                                            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all resize-none text-[#2D2D2D] placeholder:text-gray-400"
                                            required
                                        />
                                    </div>

                                    {/* Submit and Reset Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-2.5 pt-0.5 sm:pt-1">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-[#337CFF] text-white px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#2868d6] active:bg-[#1e5ac9] transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base group"
                                        >
                                            Submit
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Subscriber section*/}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16 lg:mt-28">
                    {/* Left Side - Subscribe Image */}
                    <div className="space-y-4 sm:space-y-5 order-2 lg:order-1">
                        <div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D2D2D] mb-2 sm:mb-3">
                                Subscribe for Updates
                            </h2>
                            <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
                                Stay updated with the latest news and updates from SplitSec.AI.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative w-full aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden">
                            <Image
                                src="/GetInvolved/subscribe.png"
                                alt="Advisory Council"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-2.5 sm:space-y-3">
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2D2D2D]">
                                Why Subscribe for Updates?
                            </h3>

                            <div className="space-y-2 sm:space-y-2.5">
                                <div className="flex items-start gap-2.5 sm:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#337CFF] flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm sm:text-base text-[#2D2D2D] leading-relaxed">
                                        Get the latest news and updates
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Subscribe Form */}
                    <div className="order-2 lg:sticky lg:top-8 h-fit">
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 overflow-hidden">
                            {/* Form Header with Gradient */}
                            <div className="bg-gradient-to-r from-[#337CFF] via-[#8B5CF6] to-[#EC4899] p-1">
                            </div>

                            {/* Form Content */}
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#2D2D2D] mb-1 sm:mb-2">
                                        Subscribe for Updates
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#6E6E6E]">
                                        Fill out the form below to get started
                                    </p>
                                </div>

                                <form className="space-y-4 sm:space-y-5 lg:space-y-6">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div>
                                            <label htmlFor="subscribeFirstName" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                                First name: <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="subscribeFirstName"
                                                placeholder="e.g., Maya"
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subscribeLastName" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                                Last name: <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="subscribeLastName"
                                                placeholder="e.g., Johnson"
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="subscribeEmail" className="block text-xs sm:text-sm font-semibold text-[#2D2D2D] mb-1.5 sm:mb-2">
                                            Email: <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="subscribeEmail"
                                            placeholder="e.g., maya@example.com"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#337CFF] focus:border-transparent outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                                            required
                                        />
                                    </div>

                                    {/* Info Text */}
                                    <div className="rounded-lg p-1 sm:p-1">
                                        <p className="text-[9px] sm:text-sm  text-[#6E6E6E] leading-relaxed">
                                            You're all set! We just need your basic information to keep you in the loop about SplitSec AI updates and news.
                                        </p>
                                    </div>

                                    {/* Submit and Reset Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-2">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-[#337CFF] text-white px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#2868d6] active:bg-[#1e5ac9] transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base group"
                                        >
                                            Submit
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
