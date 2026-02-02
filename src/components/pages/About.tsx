import Image from "next/image";
import Link from "next/link";
import VideoSection from "../common/VideoSection";
import { Eye, Layers, Heart } from "lucide-react";

export default function About() {
    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16">
                {/* Top Section - About Introduction */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content - Left on Desktop */}
                    <div className="space-y-5 lg:space-y-6 order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] uppercase tracking-tight leading-tight">
                            ABOUT US
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg text-[#6E6E6E] leading-relaxed max-w-xl">
                            Built to support institutions and nonprofits with reliable, people-first safety initiatives that scale with impact.
                        </p>

                        {/* Button */}
                        <Link
                            href="/get-involved"
                            className="inline-block w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#337CFF] text-[#337CFF] font-medium rounded-lg hover:bg-[#337CFF] hover:text-white transition-colors duration-200 text-sm sm:text-base text-center"
                        >
                            Join The Movement
                        </Link>
                    </div>

                    {/* Image - Right on Desktop */}
                    <div className="relative w-full order-1 lg:order-2">
                        <div className="relative w-full aspect-4/3 ">
                            <Image
                                src="/About-us/hero.png"
                                alt="SplitSec.AI Team"
                                fill
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* video section */}
            <div className="py-16">
                <VideoSection
                    title="Why was SplitSec AI founded?"
                    description="Get to know the passionate team behind SplitSec.AI and learn about our journey to make communities safer through innovative AI technology."
                    videoUrl="https://www.youtube.com/watch?v=-lODj8cnYXc&t=2s"
                    badge="Why"
                    badgeIcon="question"
                />
            </div>

            {/* Vision, Mission, Why we exist Cards */}
            <div className="w-full bg-white pb-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Vision Card */}
                        <div className="bg-white rounded-2xl p-4 border border-gray-200">
                            <div className="flex items-start space-x-4 mb-10">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200  flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                            <Eye className="w-5 h-5 text-[#337CFF]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-[#2D2D2D] mb-3">
                                Vision
                            </h3>
                            <p className="text-[15px]  text-[#6E6E6E] leading-relaxed ">
                                Transform everyday devices into AI-powered guardians that protect people safely, privately, and in real time.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-[#337CFF] rounded-2xl p-4">
                            <div className="flex items-start space-x-4 mb-10">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-white/20  flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                            <Layers className="w-5 h-5 text-[#337CFF]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                                    Mission
                                </h3>
                                <p className="text-[15px]  text-white/90 leading-relaxed">
                                    Build privacy-first, on-device AI that detects critical threats—starting with gunshots—and alerts people in seconds
                                </p>
                            </div>
                        </div>

                        {/* Why we exist Card */}
                        <div className="bg-white rounded-2xl p-4 border border-gray-200">
                            <div className="flex items-start space-x-4 mb-10">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                            <Heart className="w-5 h-5 text-[#337CFF]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-[#2D2D2D] mb-3">
                                Why we exist
                            </h3>
                            <p className="text-[15px]  text-[#6E6E6E] leading-relaxed">
                                When seconds matter, help should live on the device you already carry. SplitSec AI turns everyday phones into real-time guardians
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* What makes us different */}
            <div className="w-full bg-white py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#2D2D2D] mb-4">
                        What makes us different
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#6E6E6E] leading-relaxed max-w-4xl mx-auto">
                        Our unique approach combines cutting-edge AI with unwavering privacy principles.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
                    <div className="pt- flex justify-center items-center">
                        <Image src="/About-us/what-make-us-different.png" alt="What makes us different" width={1000} height={1000} />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-[#6E6E6E] leading-relaxed max-w-4xl mx-auto text-center">
                        Connectivity may be required to notify contacts or external services.
                    </p>
                </div>

            </div>
        </div>
    );
}
