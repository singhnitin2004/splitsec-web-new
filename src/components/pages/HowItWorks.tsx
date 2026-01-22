"use client";

import Image from "next/image";
import VideoSection from "@/components/common/VideoSection";

export default function HowItWorksPage() {
    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    {/* Image - First on Mobile, Right on Desktop */}
                    <div className="relative w-full order-1 lg:order-2">
                        <div className="relative w-full aspect-4/3">
                            <Image
                                src="/HowItWorks/top-image.png"
                                alt="SplitSec.AI Protection Active"
                                fill
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Text Content - Second on Mobile, Left on Desktop */}
                    <div className="space-y-5 lg:space-y-6 order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] uppercase tracking-tight leading-tight">
                            HOW IT WORKS
                        </h1>

                        {/* Paragraph */}
                        <p className="text-sm sm:text-base md:text-lg text-[#6E6E6E] leading-relaxed max-w-xl">
                            SplitSec's GS Detection engine continuously scans every layer of your digital environment devices, networks, applications, and user behavior to instantly identify suspicious activity.
                        </p>

                        {/* Button */}
                        <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#337CFF] text-[#337CFF] font-medium rounded-lg hover:bg-[#337CFF] hover:text-white transition-colors duration-200 text-sm sm:text-base">
                            Join Early Access list
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <VideoSection
                title="Watch How It Works"
                description="See the technology behind SplitSec.AI's instant gunshot detection."
                videoUrl="https://www.youtube.com/watch?v=FnESLsYEtys"
                badge="How?"
                badgeIcon="question"
            />

            {/* Behind the Scenes Section */}
            <div className="w-full bg-white py-12 pb-16 sm:pb-20 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="flex flex-col items-center text-center">
                        {/* Title */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#2D2D2D] mb-4 sm:mb-5 md:mb-6 leading-tight">
                            Behind the Scenes
                        </h2>

                        {/* Description Paragraph */}
                        <p className="text-sm sm:text-base md:text-lg text-[#6E6E6E] leading-relaxed max-w-4xl mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-2">
                            Our AI learns sounds the way people recognize familiar songs or voices. Trained on thousands of real-world examples using powerful computers, a compact version — the 'brains and memory' — is then stored directly on your phone. This lets SplitSec AI detect gunshots quickly and offline, keeping your data private while protecting you around the clock.
                        </p>

                        {/* Feature Blocks */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 w-full max-w-5xl">
                            {/* Feature 1: Brain */}
                            <div className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-xl border border-gray-100 hover:border-[#337CFF]/30 hover:shadow-lg transition-all duration-300 bg-white">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#337CFF] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        <circle cx="17" cy="5" r="1" fill="currentColor" />
                                        <circle cx="19" cy="4" r="0.7" fill="currentColor" />
                                        <circle cx="15.5" cy="4" r="0.7" fill="currentColor" />
                                        <circle cx="17.5" cy="2.5" r="0.5" fill="currentColor" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-[#2D2D2D] mb-2">
                                    Neural Learning
                                </h3>
                                <p className="text-sm text-[#6E6E6E] leading-relaxed">
                                    Inspired by how the human brain works
                                </p>
                            </div>

                            {/* Feature 2: Sound Waves */}
                            <div className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-xl border border-gray-100 hover:border-[#337CFF]/30 hover:shadow-lg transition-all duration-300 bg-white">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#337CFF] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="7" y="14" width="2.5" height="6" rx="1.25" />
                                        <rect x="11" y="6" width="2.5" height="14" rx="1.25" />
                                        <rect x="15" y="14" width="2.5" height="6" rx="1.25" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-[#2D2D2D] mb-2">
                                    Advanced Training
                                </h3>
                                <p className="text-sm text-[#6E6E6E] leading-relaxed">
                                    Trained on thousands of sounds
                                </p>
                            </div>

                            {/* Feature 3: Smartphone */}
                            <div className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-xl border border-gray-100 hover:border-[#337CFF]/30 hover:shadow-lg transition-all duration-300 bg-white sm:col-span-2 md:col-span-1">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#337CFF] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                        <line x1="9" y1="18" x2="15" y2="18" />
                                        <circle cx="12" cy="16" r="1" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-[#2D2D2D] mb-2">
                                    On-Device AI
                                </h3>
                                <p className="text-sm text-[#6E6E6E] leading-relaxed">
                                    Compact AI runs on your phone
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
