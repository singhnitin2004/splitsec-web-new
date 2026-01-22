"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const publications = [
    {
        name: "ABC News",
        logo: "/publications/ABC.webp",
        fallback: "/publications/ABC.png",
    },
    {
        name: "Fox News",
        logo: "/publications/FOX.webp",
        fallback: "/publications/FOX.webp",
    },
    {
        name: "CBS",
        logo: "/publications/CBS.webp",
        fallback: "/publications/CBS.png",
    },
    {
        name: "NBC News",
        logo: "/publications/NBC.svg",
        fallback: "/publications/NBC.svg",
    },
    {
        name: "Yahoo Finance",
        logo: "/publications/YF.webp",
        fallback: "/publications/YF.png",
    },
    {
        name: "AP",
        logo: "/publications/AP.webp",
        fallback: "/publications/AP.jpg",
    },
    {
        name: "Boston Herald",
        logo: "/publications/BH.svg",
        fallback: "/publications/BH.svg",
    },
];

export default function FeaturedIn() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 1; // pixels per frame
        const scrollInterval = 16; // ~60fps

        const scroll = () => {
            if (scrollContainer) {
                scrollAmount += scrollSpeed;
                scrollContainer.scrollLeft = scrollAmount;

                // Reset scroll position when reaching the end (seamless loop)
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
        };

        const intervalId = setInterval(scroll, scrollInterval);

        return () => clearInterval(intervalId);
    }, []);

    // Duplicate publications for seamless infinite scroll
    const duplicatedPublications = [...publications, ...publications];

    return (
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-[32px]  font-bold text-gray-900 mb-1">
                        Featured In
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-hidden">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 sm:gap-6 overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {duplicatedPublications.map((pub, index) => (
                            <div
                                key={`${pub.name}-${index}`}
                                className="shrink-0 w-36 sm:w-44 h-28 sm:h-32 bg-white rounded-lg border border-gray-200 shadow-sm p-5 flex items-center justify-center hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="relative w-full h-full max-h-12 sm:max-h-16 group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src={pub.logo}
                                        alt={pub.name}
                                        fill
                                        className="object-contain grayscale-100 group-hover:grayscale-0 transition-all duration-300"
                                        sizes="(max-width: 640px) 144px, 176px"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
