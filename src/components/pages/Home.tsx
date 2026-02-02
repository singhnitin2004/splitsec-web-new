"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// App screen sequence for right-side carousel: home → gunshot detected → alertcrew
const APP_SCREENS = [
    { src: "/home/App home screen.png", alt: "SplitSec app home screen", duration: 5000 },
    { src: "/home/GS Detected screen.png", alt: "Gunshot detected screen", duration: 5000 },
    { src: "/home/GS Detected AlertCrew screen (1).png", alt: "AlertCrew notification screen", duration: 5000 },
];

// Publications data
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

// Protection Built For data
interface EnvironmentCard {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    iconColor: string;
}

const environments: EnvironmentCard[] = [
    {
        id: "security-events",
        title: "Security & Events",
        description: "Instant coverage for guards and events.",
        iconColor: "#006eff",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="currentColor" />
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        ),
    },
    {
        id: "schools",
        title: "Schools & Campuses",
        description: "Faster alerts when shots happen.",
        iconColor: "#FC45A6",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="currentColor" />
                <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: "property-management",
        title: "Property Management",
        description: "Protect lobbies, garages, patrols.",
        iconColor: "#006eff",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill="currentColor" />
                <rect x="9" y="12" width="6" height="10" fill="rgba(255,255,255,0.3)" />
            </svg>
        ),
    },
    {
        id: "cities-venues",
        title: "Cities & Venues",
        description: "Awareness for parks and venues.",
        iconColor: "#FC45A6",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: "healthcare",
        title: "Healthcare",
        description: "Secure ER and parking areas.",
        iconColor: "#006eff",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13H11V21H13V13H21V11H13V3H11V11H3V13Z" fill="currentColor" />
                <path d="M2 2H22V22H2V2Z" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
        ),
    },
    {
        id: "worship",
        title: "Worship",
        description: "Simple protection for services.",
        iconColor: "#FC45A6",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2V8H6L12 14V22L18 16V8H14V2H10Z" fill="currentColor" />
                <path d="M2 22H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
];

export default function HomePage() {
    // Featured In scroll ref
    const scrollRef = useRef<HTMLDivElement>(null);

    // Right-side app screen carousel: home → gunshot detected → alertcrew
    const [screenIndex, setScreenIndex] = useState(0);
    const screenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Video modal state
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (screenTimeoutRef.current) clearTimeout(screenTimeoutRef.current);
        const duration = APP_SCREENS[screenIndex].duration;
        screenTimeoutRef.current = setTimeout(() => {
            setScreenIndex((i) => (i + 1) % APP_SCREENS.length);
        }, duration);
        return () => {
            if (screenTimeoutRef.current) clearTimeout(screenTimeoutRef.current);
        };
    }, [screenIndex]);

    // Featured In - Auto scroll
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 0.5;
        let animationFrameId: number | null = null;
        let singleSetWidth = 0;
        let isRunning = true;
        let lastScrollTime = Date.now();

        const scroll = () => {
            // Always continue the loop - schedule next frame first
            animationFrameId = requestAnimationFrame(scroll);

            if (!scrollContainer || !isRunning) {
                return;
            }

            // Calculate single set width only once when content is loaded
            if (singleSetWidth === 0 && scrollContainer.scrollWidth > 0) {
                singleSetWidth = scrollContainer.scrollWidth / 3;
            }

            if (singleSetWidth > 0) {
                // Smooth continuous scroll - always continue regardless of hover or interaction
                scrollAmount += scrollSpeed;

                // Reset seamlessly when we complete one full set
                // The reset is invisible because the duplicated content is identical
                if (scrollAmount >= singleSetWidth) {
                    scrollAmount = scrollAmount - singleSetWidth;
                }

                // Force scroll update - use direct assignment to ensure it always updates
                // This will continue even when hovering
                scrollContainer.scrollLeft = scrollAmount;
                lastScrollTime = Date.now();
            }
        };

        // Start scrolling after a brief delay to ensure content is rendered
        const startScroll = () => {
            if (scrollContainer.scrollWidth > 0) {
                singleSetWidth = scrollContainer.scrollWidth / 3;
                isRunning = true;
                // Start the animation loop immediately
                animationFrameId = requestAnimationFrame(scroll);
            } else {
                // Retry after a short delay if content isn't ready
                setTimeout(startScroll, 50);
            }
        };

        // Start after images are likely loaded
        const initTimeout = setTimeout(startScroll, 300);

        return () => {
            isRunning = false;
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
            clearTimeout(initTimeout);
        };
    }, []);

    // Duplicate publications multiple times for seamless infinite scroll
    const duplicatedPublications = [...publications, ...publications, ...publications];

    // Handle video modal
    useEffect(() => {
        if (!isVideoOpen && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isVideoOpen]);

    // Handle ESC key to close video
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isVideoOpen) {
                setIsVideoOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isVideoOpen]);

    // Prevent body scroll when video modal is open
    useEffect(() => {
        if (isVideoOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVideoOpen]);

    return (
        <div className="w-full min-h-screen" style={{
            background: 'radial-gradient(1200px 600px at 70% 15%, rgba(80,140,255,0.14), transparent 60%), radial-gradient(900px 550px at 20% 80%, rgba(255,80,170,0.10), transparent 60%), #0B1020'
        }}>
            {/* Hero Section - Split Panel */}
            <section className="w-full min-h-screen sm:min-h-[calc(100vh-64px)] flex items-center pt-24 sm:pt-30 ">
                <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ">
                    {/* Main Panel */}
                    <div className="rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.45)] border border-[rgba(233,236,248,0.1)]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))' }}>
                        {/* Split Container */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[657px] sm:min-h-[710px]  lg:min-h-[580px]">
                            {/* Problem Side */}
                            <div className="relative p-4 sm:p-6 lg:p-7 flex flex-col justify-end gap-2 sm:gap-3 overflow-hidden border-b lg:border-b-0 lg:border-r border-[rgba(233,236,248,0.08)]"
                                style={{
                                    background: `
                                        radial-gradient(900px 360px at 30% 20%, rgba(218,37,41,0.10), transparent 60%),
                                        radial-gradient(700px 340px at 80% 80%, rgba(0,109,255,0.10), transparent 60%),
                                        linear-gradient(180deg, rgba(11,16,32,0.96), rgba(7,10,18,0.96))
                                    `
                                }}>
                                {/* Label */}
                                <div className="absolute left-3 sm:left-5 top-3 sm:top-4 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-[rgba(233,236,248,0.14)] text-[10px] sm:text-xs uppercase tracking-[0.12em] backdrop-blur-[10px]"
                                    style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(233,236,248,0.78)' }}>
                                    Today
                                </div>

                                {/* Wave Stage */}
                                <div className="absolute left-0 right-0 top-0 bottom-24 sm:bottom-32 lg:bottom-40 flex items-center justify-center pointer-events-none">
                                    <div className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-80 lg:h-80 opacity-95">
                                        {/* Rings */}
                                        {[0, 1.3, 2.6, 3.9].map((delay, i) => (
                                            <div key={i} className="absolute left-1/2 top-1/2 w-6 h-6 rounded-full border-2 opacity-0 -translate-x-1/2 -translate-y-1/2 animate-[ring_5.2s_ease-out_infinite]"
                                                style={{
                                                    borderColor: 'rgba(0,109,255,0.26)',
                                                    animationDelay: `${delay}s`
                                                }} />
                                        ))}
                                        {/* Center Dot */}
                                        <div className="absolute left-1/2 top-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                                            style={{
                                                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.60), rgba(128,182,255,0.92) 34%, rgba(0,109,255,1) 78%)',
                                                boxShadow: '0 0 18px rgba(0,109,255,0.28)'
                                            }} />

                                        {/* Bubbles */}
                                        {[
                                            { text: 'fireworks?', left: '18%', top: '14%', delay: 0 },
                                            { text: 'backfire?', left: '58%', top: '18%', delay: 2.4 },
                                            { text: 'door slam?', left: '16%', top: '58%', delay: 4.8 },
                                            { text: 'what was that?', left: '54%', top: '62%', delay: 7.2 },
                                            { text: 'probably nothing', left: '26%', top: '38%', delay: 9.6 }
                                        ].map((bubble, i) => (
                                            <div key={i} className="absolute px-2 sm:px-3 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl border text-[10px] sm:text-xs backdrop-blur-[10px] opacity-0 animate-[pop_12s_ease-in-out_infinite] whitespace-nowrap"
                                                style={{
                                                    left: bubble.left,
                                                    top: bubble.top,
                                                    background: 'rgba(255,255,255,0.05)',
                                                    borderColor: 'rgba(233,236,248,0.12)',
                                                    color: 'rgba(233,236,248,0.80)',
                                                    boxShadow: '0 10px 40px rgba(0,0,0,0.22)',
                                                    animationDelay: `${bubble.delay}s`
                                                }}>
                                                {bubble.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight m-0 relative z-10" style={{ color: '#E9ECF8', letterSpacing: '-0.02em' }}>
                                    Unclear. Assume. Delay.
                                </h2>
                                <p className="text-xs sm:text-base leading-relaxed m-0 max-w-[46ch] relative z-10" style={{ color: 'rgba(233,236,248,0.72)' }}>
                                    Ambiguity creates hesitation and uneven response.
                                </p>
                            </div>

                            {/* Solution Side */}
                            <div className="relative p-4 sm:p-6 lg:p-7 flex flex-col justify-end gap-2 sm:gap-3 overflow-hidden"
                                style={{
                                    background: `
                                        radial-gradient(900px 380px at 70% 15%, rgba(0,109,255,0.18), transparent 60%),
                                        radial-gradient(700px 360px at 20% 85%, rgba(255,63,166,0.12), transparent 60%),
                                        linear-gradient(180deg, rgba(11,16,32,0.96), rgba(7,10,18,0.96))
                                    `
                                }}>
                                {/* Label */}
                                <div className="absolute left-3 sm:left-5 top-3 sm:top-4 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-[rgba(233,236,248,0.14)] text-[10px] sm:text-xs uppercase tracking-[0.12em] backdrop-blur-[10px]"
                                    style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(233,236,248,0.78)' }}>
                                    With SplitSec
                                </div>

                                {/* Confirm Badge - responsive positioning */}
                                <div className="absolute left-2 sm:left-4 top-[46px] sm:top-14 lg:top-[68px] px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-2xl border flex items-center gap-1.5 sm:gap-2.5 backdrop-blur-[10px] z-10 text-[10px] sm:text-[13px]"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        borderColor: 'rgba(233,236,248,0.12)',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.22)',
                                        color: 'rgba(233,236,248,0.90)',
                                        fontWeight: 680
                                    }}>
                                    <span className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full animate-pulse"
                                        style={{
                                            background: 'rgba(0,109,255,0.95)',
                                            boxShadow: '0 0 18px rgba(0,109,255,0.38)'
                                        }} />
                                    <span className="hidden sm:inline">Confirmed. Alerts routed.</span>
                                    <span className="inline sm:hidden">Confirmed</span>
                                </div>

                                {/* Wave (left) + Phone (right) - responsive layout */}
                                <div className="absolute inset-0 flex items-center justify-center gap-1 sm:gap-4 px-2 sm:px-4 lg:px-6 pt-14 sm:pt-20 pb-24 sm:pb-36 lg:pb-44 pointer-events-none">
                                    {/* Left: blue dot + rings (confirmed state) */}
                                    <div className="flex items-center justify-center shrink-0 w-[35%] sm:w-[42%] max-w-[120px] sm:max-w-[280px] lg:max-w-[320px]">
                                        <div className="relative w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-95">
                                            {[0, 1.3, 2.6, 3.9].map((delay, i) => (
                                                <div key={i} className="absolute left-1/2 top-1/2 w-3 sm:w-6 h-3 sm:h-6 rounded-full border-2 opacity-0 -translate-x-1/2 -translate-y-1/2 animate-[ring_5.2s_ease-out_infinite]"
                                                    style={{
                                                        borderColor: 'rgba(0,109,255,0.48)',
                                                        animationDelay: `${delay}s`
                                                    }} />
                                            ))}
                                            <div className="absolute left-1/2 top-1/2 w-2 sm:w-3 h-2 sm:h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                                                style={{
                                                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.60), rgba(128,182,255,0.92) 34%, rgba(0,109,255,1) 78%)',
                                                    boxShadow: '0 0 26px rgba(0,109,255,0.55)'
                                                }} />
                                        </div>
                                    </div>
                                    {/* Right: phone frame with carousel */}
                                    <div className="flex items-center justify-center shrink-0 w-[60%] sm:w-[55%] max-w-[180px] sm:max-w-[260px] lg:max-w-[300px] sm:ml-0 ml-10">
                                        <div className="relative w-[130px] h-[280px] sm:w-[160px] sm:h-[320px] md:w-[180px] md:h-[330px] lg:w-[220px] lg:h-[440px] overflow-hidden mt-4 sm:mt-14"
                                        >
                                            <div className="absolute inset-[3px] sm:inset-[6px] rounded-[15px] sm:rounded-[1.4rem] overflow-hidden bg-white">
                                                {APP_SCREENS.map((screen, i) => (
                                                    <div
                                                        key={screen.src}
                                                        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                                                        style={{
                                                            opacity: i === screenIndex ? 1 : 0,
                                                            pointerEvents: i === screenIndex ? 'auto' : 'none',
                                                        }}
                                                    >
                                                        <Image
                                                            src={screen.src}
                                                            alt={screen.alt}
                                                            fill
                                                            className=" object-top"
                                                            sizes="(max-width: 640px) 110px, (max-width: 768px) 160px, (max-width: 1024px) 180px, 220px"
                                                            priority={i === 0}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight m-0 relative z-10" style={{ color: '#E9ECF8', letterSpacing: '-0.02em' }}>
                                    Detect. Notify. Act.
                                </h2>
                                <p className="text-xs sm:text-base leading-relaxed m-0 max-w-[46ch] relative z-10" style={{ color: 'rgba(233,236,248,0.72)' }}>
                                    Confirm across devices, then notify the right team fast.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* How it works Section */}
                    <div className="mt-10 sm:mt-16">
                        <div className="rounded-2xl border shadow-[0_12px_30px_rgba(0,0,0,0.06)] p-4 sm:p-[18px]"
                            style={{
                                background: 'radial-gradient(1200px 600px at 70% 15%, rgba(80,140,255,0.14), transparent 60%), radial-gradient(900px 550px at 20% 80%, rgba(255,80,170,0.10), transparent 60%), #0B1020',
                            }}>
                            {/* Header */}
                            <div className="flex items-baseline justify-between gap-4 mb-3 sm:mb-[14px] flex-wrap">
                                <h2 className="text-lg sm:text-xl font-bold leading-tight tracking-tight m-0 text-gray-100">
                                    How it works
                                </h2>


                                <p className="text-xs sm:text-[13px] m-0 text-gray-100">
                                    Privacy first. No audio stored.
                                </p>
                            </div>

                            {/* Steps Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-[14px]">
                                {/* Step 1 - Monitor */}
                                <div className="relative rounded-[10px] border overflow-hidden p-3 sm:p-[14px] bg-gray-100">
                                    <div className="absolute inset-[-60%] pointer-events-none"
                                    />
                                    <div className="relative z-[1]">
                                        <div className="w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-[9px] flex items-center justify-center mb-2 sm:mb-[10px] shadow-[0_10px_22px_rgba(0,109,255,0.20)]"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(0,109,255,0.98), rgba(0,109,255,0.72))'
                                            }}>
                                            <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"></path>
                                                <path d="M5 11a7 7 0 0 0 14 0"></path>
                                                <path d="M12 18v3"></path>
                                            </svg>
                                        </div>
                                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.12em] m-0 mb-1 sm:mb-[6px]"
                                            style={{ color: 'rgba(29,29,31,0.55)' }}>
                                            Step 1
                                        </p>
                                        <h3 className="text-sm sm:text-base font-bold leading-tight m-0 mb-1 sm:mb-[6px]"
                                            style={{
                                                color: '#1D1D1F',
                                                letterSpacing: '-0.01em'
                                            }}>
                                            Monitor
                                        </h3>
                                        <p className="text-xs sm:text-[13px] leading-relaxed m-0"
                                            style={{ color: 'rgba(26,26,26,0.70)' }}>
                                            Phones listen for gunshot like impulses on device.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 - Confirm */}
                                <div className="relative rounded-[10px] border overflow-hidden p-3 sm:p-[14px] bg-gray-100">
                                    <div className="absolute inset-[-60%] pointer-events-none" />
                                    <div className="relative z-[1]">
                                        <div className="w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-[9px] flex items-center justify-center mb-2 sm:mb-[10px] shadow-[0_10px_22px_rgba(0,109,255,0.20)]"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(0,109,255,0.98), rgba(0,109,255,0.72))'
                                            }}>
                                            <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 6.5-7 11-7 11Z"></path>
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                        </div>
                                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.12em] m-0 mb-1 sm:mb-[6px]"
                                            style={{ color: 'rgba(29,29,31,0.55)' }}>
                                            Step 2
                                        </p>
                                        <h3 className="text-sm sm:text-base font-bold leading-tight m-0 mb-1 sm:mb-[6px]"
                                            style={{
                                                color: '#1D1D1F',
                                                letterSpacing: '-0.01em'
                                            }}>
                                            Confirm
                                        </h3>
                                        <p className="text-xs sm:text-[13px] leading-relaxed m-0"
                                            style={{ color: 'rgba(26,26,26,0.70)' }}>
                                            AI quickly analyzes the sound on device. No WiFi or cellular needed.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 - Notify */}
                                <div className="relative rounded-[10px] border overflow-hidden p-3 sm:p-[14px] bg-gray-100">
                                    <div className="absolute inset-[-60%] pointer-events-none"
                                    />
                                    <div className="relative z-[1]">
                                        <div className="w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-[9px] flex items-center justify-center mb-2 sm:mb-[10px] shadow-[0_10px_22px_rgba(0,109,255,0.20)]"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(0,109,255,0.98), rgba(0,109,255,0.72))'
                                            }}>
                                            <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 2 11 13"></path>
                                                <path d="M22 2 15 22l-4-9-9-4 20-7Z"></path>
                                            </svg>
                                        </div>
                                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.12em] m-0 mb-1 sm:mb-[6px]"
                                            style={{ color: 'rgba(29,29,31,0.55)' }}>
                                            Step 3
                                        </p>
                                        <h3 className="text-sm sm:text-base font-bold leading-tight m-0 mb-1 sm:mb-[6px]"
                                            style={{
                                                color: '#1D1D1F',
                                                letterSpacing: '-0.01em'
                                            }}>
                                            Notify
                                        </h3>
                                        <p className="text-xs sm:text-[13px] leading-relaxed m-0"
                                            style={{ color: 'rgba(26,26,26,0.70)' }}>
                                            Route alerts to the right people fast with clear context.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who SplitSec AI Is For Section */}
            <section className="w-full py-12 pt-10 sm:pt-16  ">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="border rounded-2xl p-6" style={{

                    }}>
                        <div className="flex items-baseline justify-between gap-4 mb-3 sm:mb-[14px] flex-wrap">
                            <h2 className="text-lg sm:text-xl font-bold leading-tight tracking-tight m-0 text-gray-100 ">
                                Who SplitSec AI Is For
                            </h2>
                        </div>

                        {/* Grid Layout - responsive columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 ">
                            {environments.map((env) => (
                                <div
                                    key={env.id}
                                    className="backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.45)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.6)] transition-all duration-300 border hover:border-[rgba(233,236,248,0.2)] flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1"
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(11,16,32,0.96), rgba(7,10,18,0.96))',
                                        borderColor: 'rgba(233,236,248,0.08)',
                                        minHeight: '200px'
                                    }}
                                >
                                    {/* Icon */}
                                    <div className="mb-4 sm:mb-5 lg:mb-6 opacity-90 group-hover:opacity-100 transition-all duration-300">
                                        <div
                                            className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex items-center justify-center rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                            style={{ backgroundColor: env.iconColor }}
                                        >
                                            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white">
                                                {env.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300" style={{ color: '#E9ECF8' }}>
                                        {env.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'rgba(233,236,248,0.65)' }}>
                                        {env.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured In Section */}
            <section className="w-full pb-10 sm:pb-16">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    {/* Outer wrapper: soft pink/purple gradient background */}
                    <div
                        className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 min-h-[200px] border "
                        style={{
                            background: 'radial-gradient(1200px 600px at 70% 15%, rgba(80,140,255,0.14), transparent 60%), radial-gradient(900px 550px at 20% 80%, rgba(255,80,170,0.10), transparent 60%), #0B1020',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)'
                        }}
                    >
                        <div className="flex items-baseline justify-between gap-4 mb-4 sm:mb-5 flex-wrap">
                            <h2 className="text-lg sm:text-xl font-bold leading-tight tracking-tight m-0 text-gray-100">
                                Featured in
                            </h2>
                        </div>

                        <div className="relative overflow-hidden">
                            <div
                                ref={scrollRef}
                                className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                                style={{
                                    scrollBehavior: 'auto',
                                    pointerEvents: 'auto',
                                    willChange: 'scroll-position',
                                    overflowX: 'scroll',
                                    overflowY: 'hidden'
                                }}
                            >
                                {duplicatedPublications.map((pub, index) => (
                                    <div
                                        key={`${pub.name}-${index}`}
                                        className="shrink-0 w-40 sm:w-44 md:w-64 h-14 sm:h-16 md:h-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gray-100 border border-gray-100 p-3 sm:p-4 flex items-center justify-center cursor-pointer group transition-all duration-300 hover:shadow-lg hover:border-gray-200"
                                        style={{
                                            boxShadow: '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)'
                                        }}
                                    >
                                        <div className="relative w-full h-full max-h-8 sm:max-h-9 md:max-h-10 group-hover:scale-105 transition-transform duration-300">
                                            <Image
                                                src={pub.logo}
                                                alt={pub.name}
                                                fill
                                                className="object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                                                sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, (max-width: 1024px) 192px, 208px"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
