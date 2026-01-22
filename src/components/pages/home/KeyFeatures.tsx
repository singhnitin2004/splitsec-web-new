"use client";

import Image from "next/image";

interface FeatureCard {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    position: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };
}

const features: FeatureCard[] = [
    {
        id: "privacy-first",
        title: "Privacy First",
        description: "All sound analysis happens directly on your phone, No recordings, No uploads",
        icon: (
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        position: {
            top: "4%",
            left: "10%",
        },
    },
    {
        id: "real-time-alerts",
        title: "Real-time Alerts",
        description: "Immediately notifies you and your emergency contacts the moment a gunshot is detected",
        icon: (
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 000 20" strokeDasharray="2 2" />
            </svg>
        ),
        position: {
            top: "4%",
            right: "10%",
        },
    },
    {
        id: "instant-detection",
        title: "Instant Detection",
        description: "Recognizes gunshots in real-time, so alerts you right when it matters most.",
        icon: (
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4M8 12h4" />
            </svg>
        ),
        position: {
            top: "20%",
            left: "1%",
        },
    },
    {
        id: "no-extra-hardware",
        title: "No Extra Hardware",
        description: "Installs quickly on your smartphone - No sensors, installations, or extra equipment required",
        icon: (
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M9 21h6a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v2M12 10v2" />
            </svg>
        ),
        position: {
            top: "20%",
            right: "1%",
        },
    },
];

export default function KeyFeatures() {
    return (
        <section className="w-full bg-white pt-16 sm:pt-20 lg:pt-24 overflow-x-hidden sm:pb-0 pb-8">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-4">
                    {/* Features Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 mb-4">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <circle cx="12" cy="12" r="6" strokeWidth="2" />
                            <circle cx="12" cy="12" r="2" strokeWidth="2" />
                        </svg>
                        <span className="text-sm font-medium text-gray-600">Features</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-2xl sm:text-[32px] font-bold text-gray-900 mb-1">
                        Key Features
                    </h2>

                    {/* Description */}
                    <p className="text-md sm:text-[20px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        SplitSec.AI is packed with features that does that helps a person in a critical moment.
                    </p>
                </div>

                {/* Mobile Layout - Image at top, then cards below */}
                <div className="md:hidden flex flex-col">
                    {/* Mobile Image - At Top */}
                    <div className="relative w-full h-[250px] xs:h-[280px] mb-6">
                        <Image
                            src="/home/Three phones - Key Features.png"
                            alt="SplitSec.AI Key Features - Three Phones"
                            fill
                            className="object-contain"
                            priority
                            sizes="100vw"
                        />
                    </div>

                    {/* Mobile Cards - Stacked Below Image */}
                    <div className="grid grid-cols-1 gap-3 px-2 xs:px-3">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="bg-white rounded-lg shadow-lg p-3 xs:p-3.5 border border-gray-100"
                            >
                                {/* Icon */}
                                <div className="w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 mb-2 xs:mb-2.5">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-sm xs:text-base font-semibold text-gray-900 mb-1.5 xs:mb-2">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[11px] xs:text-xs text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Layout - Background Image with Positioned Cards */}
                <div className="hidden md:block relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[1000px] overflow-visible px-2">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/home/Three phones - Key Features.png"
                            alt="SplitSec.AI Key Features - Three Phones"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 1024px) 90vw, (max-width: 1280px) 85vw, 1400px"
                        />
                    </div>

                    {/* Feature Cards - Positioned Absolutely */}
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="absolute bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg p-2 sm:p-2.5 md:p-3 lg:p-3.5 w-[160px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] 2xl:w-[320px] border border-gray-200 z-10"
                            style={{
                                top: feature.position.top,
                                left: feature.position.left,
                                right: feature.position.right,
                                bottom: feature.position.bottom,
                            }}
                        >
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                {/* Icon */}
                                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 shrink-0">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-600 leading-relaxed mt-1.5 sm:mt-2 md:mt-2.5">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
