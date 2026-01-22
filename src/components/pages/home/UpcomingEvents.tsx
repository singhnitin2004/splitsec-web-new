"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const events = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop",
        title: "See how SplitSec works in real-world scenarios.",
        date: "Dec 29",
        time: "6 PM CST",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        title: "A closer look at how SplitSec protects what matters.",
        date: "Sept 24",
        time: "6 PM CST",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
        title: "Discover what's next with SplitSec",
        date: "Jan 12",
        time: "7:30 PM CST",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
        title: "Join us for an exclusive product demonstration.",
        date: "Feb 15",
        time: "5 PM CST",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        title: "Learn about advanced security features.",
        date: "Mar 10",
        time: "6:30 PM CST",
    },
];

export default function UpcomingEvents() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3); // lg screens: 3 items
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2); // md screens: 2 items
            } else {
                setItemsPerView(1); // sm screens: 1 item
            }
        };

        // Set initial value
        updateItemsPerView();

        // Update on resize
        window.addEventListener("resize", updateItemsPerView);
        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    // Adjust currentIndex when itemsPerView changes
    useEffect(() => {
        const maxIndex = Math.max(0, events.length - itemsPerView);
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [itemsPerView]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? events.length - itemsPerView : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) =>
            prev >= events.length - itemsPerView ? 0 : prev + 1
        );
    };

    const visibleEvents = events.slice(currentIndex, currentIndex + itemsPerView);

    // If we don't have enough events at the end, wrap around
    if (visibleEvents.length < itemsPerView) {
        const remaining = itemsPerView - visibleEvents.length;
        visibleEvents.push(...events.slice(0, remaining));
    }

    return (
        <section className="w-full bg-gradient-to-b from-white to-gray-50 pb-16 sm:pb-20 lg:pb-24 sm:pt-0 pt-16">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-[32px] font-bold text-gray-900 mb-1">
                        Upcoming Events
                    </h2>
                    <p className="text-md sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Join us for exclusive demonstrations and discover what's next with SplitSec
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Previous Button */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 rounded-full p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:scale-110 group"
                        aria-label="Previous events"
                    >
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-gray-900 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-8 sm:px-12 lg:px-16">
                        {visibleEvents.map((event, index) => (
                            <div
                                key={`${event.id}-${index}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                            >
                                {/* Event Image */}
                                <div className="relative w-full h-56 sm:h-54 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Event Badge Overlay */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="inline-block bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg backdrop-blur-sm">
                                            Event
                                        </span>
                                    </div>
                                </div>

                                {/* Event Content */}
                                <div className="p-0">
                                    {/* Event Title */}
                                    <h3 className="text-lg sm:text-xl px-5 pt-4 font-bold text-gray-900 mb-4 sm:mb-5 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {event.title}
                                    </h3>

                                    {/* Date and Time */}
                                    <div className="flex items-center text-gray-600 text-sm sm:text-base px-5 mb-3 pb-5 border-b border-gray-200">
                                        <svg
                                            className="w-5 h-5 mr-3 text-gray-500 shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <span className="font-medium">
                                            {event.date} · {event.time}
                                        </span>
                                    </div>

                                    {/* Read More Link */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-5 mb-3 text-blue-600 hover:text-blue-700 text-sm sm:text-base font-semibold transition-all duration-300 group/link"
                                    >
                                        <span>Read more</span>
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 rounded-full p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:scale-110 group"
                        aria-label="Next events"
                    >
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-gray-900 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10">
                    {Array.from({ length: Math.ceil(events.length / itemsPerView) }).map((_, dotIndex) => {
                        const maxIndex = Math.max(0, events.length - itemsPerView);
                        const startIndex = Math.min(dotIndex * itemsPerView, maxIndex);
                        const isLastDot = dotIndex === Math.ceil(events.length / itemsPerView) - 1;

                        // For the last dot, check if we're at or past its start index
                        // For other dots, check if we're in their range
                        const isActive = isLastDot
                            ? currentIndex >= startIndex
                            : currentIndex >= startIndex && currentIndex < startIndex + itemsPerView;

                        return (
                            <button
                                key={dotIndex}
                                onClick={() => setCurrentIndex(startIndex)}
                                className={`transition-all duration-300 rounded-full ${isActive
                                    ? "w-8 h-2.5 bg-blue-600"
                                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                                    }`}
                                aria-label={`Go to events page ${dotIndex + 1}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
