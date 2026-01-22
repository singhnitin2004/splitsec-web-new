"use client";

import { useState } from "react";
import Image from "next/image";

interface Feature {
    id: string;
    icon: React.ReactNode;
    title: string;
    description?: string;
    defaultExpanded: boolean;
}

const features: Feature[] = [
    {
        id: "audio-capture",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        ),
        title: "Audio Capture",
        description: "Your phone's microphone listens securely in the background - with no recording or uploading.",
        defaultExpanded: false
    },
    {
        id: "ai-recognition",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "AI Sound Recognition",
        description: "Advanced AI instantly identifies gunshot sounds and distinguishes them from similar noises like fireworks.",
        defaultExpanded: false
    },
    {
        id: "insights",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: "Actionable Insights",
        description: "Get real-time data including location, time stamps, and threat levels to make quick, informed decisions.",
        defaultExpanded: false
    },
    {
        id: "alerts",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        ),
        title: "Immediate Alerts",
        description: "Instant notifications sent to your AlertCrew via push notifications, SMS, and in-app alerts.",
        defaultExpanded: false
    }
];

export default function HowItWorks() {
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
        features.reduce((acc, feature) => ({
            ...acc,
            [feature.id]: feature.defaultExpanded
        }), {})
    );

    const toggleExpand = (id: string) => {
        setExpandedItems(prev => {
            // If the clicked item is already open, close it
            if (prev[id]) {
                return Object.keys(prev).reduce((acc, key) => ({
                    ...acc,
                    [key]: false
                }), {});
            }
            // Otherwise, close all items and open only the clicked one
            return Object.keys(prev).reduce((acc, key) => ({
                ...acc,
                [key]: key === id
            }), {});
        });
    };

    return (
        <section className="w-full bg-gray-50 pt-16 sm:pt-20">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Title */}
                <div className="text-center mb-14">
                    <h2 className="text-2xl sm:text-[32px] font-bold text-gray-900 mb-1">
                        How SplitSec.AI Works
                    </h2>
                    <p className="text-md sm:text-[20px] text-[#576682]  mx-auto leading-relaxed max-w-xl">
                        We've helped clients streamline taxes, plan exits, and grow their portfolios all with clarity and confidence.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-1 items-start border border-gray-100 rounded-lg px-4 pt-4">
                    {/* Left Side - Features List */}
                    <div className="space-y-6">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="shrink-0 w-10 h-10 flex items-center justify-center text-gray-900">
                                        {feature.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <button
                                            onClick={() => toggleExpand(feature.id)}
                                            className="w-full flex items-start justify-between gap-3 text-left cursor-pointer"
                                            aria-label={expandedItems[feature.id] ? "Collapse" : "Expand"}
                                        >
                                            <h3 className="text-lg font-bold text-gray-900">
                                                {feature.title}
                                            </h3>
                                            <div className="shrink-0 w-6 h-6 flex items-center justify-center text-gray-400 mt-0.5">
                                                {expandedItems[feature.id] ? (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                )}
                                            </div>
                                        </button>
                                        {expandedItems[feature.id] && feature.description && (
                                            <p className="mt-3 text-sm text-gray-600 leading-relaxed pr-8">
                                                {feature.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Phone Image */}
                    <div className="flex items-start justify-center lg:justify-end">
                        <div className="relative w-full max-w-[320px] lg:max-w-[380px]">
                            <div className="relative aspect-[19/19.5] w-full">
                                <Image
                                    src="/Group 2085663219.png"
                                    alt="SplitSec.AI Mobile App - Gunshot Detection Alert"
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="(max-width: 1024px) 320px, 380px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
