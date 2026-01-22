"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const banners = [
    "/home/Banner 1.png",
    "/home/Banner 2.png",
    "/home/Banner 3.png"
];

export default function BannerCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);
    const touchEndY = useRef<number | null>(null);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    // Touch handlers for swipe functionality
    const handleTouchStart = (e: React.TouchEvent) => {
        // Don't interfere with clicks on links/buttons
        const target = e.target as HTMLElement;
        if (target.closest('a, button')) {
            return;
        }

        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        touchEndX.current = null;
        touchEndY.current = null;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        touchEndX.current = e.touches[0].clientX;
        touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current || !touchStartY.current || !touchEndY.current) {
            // Reset if incomplete
            touchStartX.current = null;
            touchStartY.current = null;
            touchEndX.current = null;
            touchEndY.current = null;
            return;
        }

        const deltaX = touchStartX.current - touchEndX.current;
        const deltaY = Math.abs(touchStartY.current - touchEndY.current);
        const minSwipeDistance = 50; // Minimum distance for a swipe

        // Only trigger carousel navigation if horizontal swipe is greater than vertical movement
        // This allows vertical scrolling to work normally
        if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > minSwipeDistance) {
                // Swipe left - go to next
                goToNext();
            } else if (deltaX < -minSwipeDistance) {
                // Swipe right - go to previous
                goToPrevious();
            }
        }

        // Reset
        touchStartX.current = null;
        touchStartY.current = null;
        touchEndX.current = null;
        touchEndY.current = null;
    };

    return (
        <section
            className="relative overflow-hidden pt-14 sm:pt-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Carousel Container */}
            <div className="relative w-full h-auto">
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`${index === currentIndex ? "relative" : "absolute inset-0"} transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                    >
                        <div className="relative w-full h-auto md:h-[85vh]">
                            <Image
                                src={banner}
                                alt={`Banner ${index + 1}`}
                                width={1920}
                                height={1080}
                                priority={index === 0}
                                quality={85}
                                className="w-auto md:w-full h-full object-cover md:object-fill"
                                placeholder="blur"
                                blurDataURL={banner + '?blur=200'}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Text Overlay - Slide 1 (Gunshot Detection) */}
            {currentIndex === 0 && (
                <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-6 lg:px-8 pointer-events-none">
                    <div className="w-full max-w-7xl ml-2 sm:ml-8 lg:ml-24 sm:mt-0 mt-8">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                            <div className="flex flex-col justify-center">
                                <h1 className="font-bold mb-2 sm:mb-6 leading-tight pointer-events-none">
                                    <div className="text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black">INSTANT GUNSHOT</div>
                                    <div className="text-[1.66rem] sm:text-[2.5rem] md:text-[3.1rem] lg:text-6xl xl:text-[5rem] text-black">DETECTION</div>
                                </h1>
                                <p className="text-xs sm:text-xl md:text-2xl lg:text-3xl text-black mb-2 sm:mb-8 leading-relaxed max-w-2xl pointer-events-none">WHEN EVERY SECOND COUNTS</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start w-34 sm:w-auto pointer-events-auto">
                                    <a
                                        className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-xs sm:text-lg font-semibold transition-all duration-300 px-1 sm:px-8 py-2 sm:py-3 h-8 sm:h-11 flex items-center justify-center"
                                        href="/get-involved/beta-access/"
                                    >
                                        Request Beta Access
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Text Overlay - Slide 2 (Launch Event) */}
            {currentIndex === 1 && (
                <>
                    <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-6 lg:px-8 pointer-events-none">
                        <div className="w-full max-w-7xl ml-2 sm:ml-8 lg:ml-24 mt-8 sm:mt-0">
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                                <div className="flex flex-col justify-center">
                                    <h1 className="font-bold mb-2 sm:mb-6 leading-tight pointer-events-none">
                                        <div className="text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white uppercase">JOIN US LIVE</div>
                                    </h1>
                                    <p className="text-xs sm:text-xl md:text-2xl lg:text-3xl text-white mb-2 sm:mb-8 leading-relaxed max-w-2xl pointer-events-none">Discover what's next with SplitSec.</p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-start w-34 sm:w-auto pointer-events-auto">
                                        <a
                                            className="border border-white/80 text-white/80 hover:bg-white/80 hover:text-black rounded-lg text-sm sm:text-lg font-semibold transition-all duration-300 px-1 sm:px-8 py-2 sm:py-3 h-9 sm:h-11 flex items-center justify-center"
                                            href="/get-involved/beta-access/"
                                        >
                                            Save Your Spot
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Event Details at Bottom */}
                    <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-10 sm:right-12 md:right-16 lg:right-20 xl:right-24 z-20 flex flex-wrap items-center gap-4 sm:gap-6 text-white pointer-events-auto">
                        <div className="text-xs sm:text-lg md:text-xl font-semibold">Launch Event</div>
                        <div className="flex items-center gap-1 text-xs sm:text-base md:text-lg">
                            <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>Chicago</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs sm:text-base md:text-lg">
                            <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Sept 24.</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs sm:text-base md:text-lg">
                            <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>6 PM CST</span>
                        </div>
                    </div>
                </>
            )}

            {/* Text Overlay - Slide 3 (Safety Explained) */}
            {currentIndex === 2 && (
                <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-6 lg:px-8 pointer-events-none">
                    <div className="w-full max-w-7xl ml-2 sm:ml-8 lg:ml-24 mt-8 sm:mt-0">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                            <div className="flex flex-col justify-center">
                                <h1 className="font-bold mb-2 sm:mb-6 leading-tight pointer-events-none">
                                    <div className="text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black">SAFETY.</div>
                                    <div className="text-[1.5rem] sm:text-[2.5rem] md:text-[3.1rem] lg:text-6xl xl:text-[4rem] text-black">EXPLAINED LIVE.</div>
                                </h1>
                                <p className="text-xs sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-2 sm:mb-8 leading-relaxed max-w-50 sm:max-w-2xl pointer-events-none">See how SplitSec works in real-world scenarios.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start w-40 sm:w-auto pointer-events-auto">
                                    <a
                                        className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-sm sm:text-lg font-semibold transition-all duration-300 px-1 sm:px-8 py-2 sm:py-3 h-9 sm:h-11 flex items-center justify-center"
                                        href="/get-involved/beta-access/"
                                    >
                                        Register for the Event
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Navigation Arrows - Hidden on mobile screens */}
            <button
                onClick={goToPrevious}
                className="hidden md:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 transition-all duration-200 shadow-lg pointer-events-auto items-center justify-center"
                aria-label="Previous slide"
            >
                <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                onClick={goToNext}
                className="hidden md:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 transition-all duration-200 shadow-lg pointer-events-auto items-center justify-center"
                aria-label="Next slide"
            >
                <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 pointer-events-auto">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                            ? "w-8 h-2 bg-gray-600"
                            : "w-2 h-2 bg-gray-600 hover:bg-black"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
