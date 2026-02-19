"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// App screen sequence for right-side carousel: home → gunshot detected → alertcrew
const APP_SCREENS = [
    { src: "/home/App home screen.png", alt: "SplitSec app home screen", duration: 5000 },
    { src: "/home/GS Detected screen.png", alt: "Gunshot detected screen", duration: 5000 },
    { src: "/home/GS Detected AlertCrew screen (1).png", alt: "AlertCrew notification screen", duration: 5000 },
];

// Publications for Featured section (logos from public/publications)
const publications = [
    { src: "/publications/ABC.webp", alt: "NBC" },
    { src: "/publications/AP.webp", alt: "BH" },
    { src: "/publications/CBS.webp", alt: "Fox" },
    { src: "/publications/FOX.webp", alt: "NYT" },
    { src: "/publications/YF.webp", alt: "WSJ" },
    { src: "/publications/NBC.svg", alt: "Bloomberg" },
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
    // Featured In carousel refs (container + second set position for perfect loop)
    const scrollRef = useRef<HTMLDivElement>(null);
    const secondSetRef = useRef<HTMLDivElement>(null);

    // Wave animates on every load/reload
    const [isWaveAnimated] = useState(true);

    // Add CSS animations to the document
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes cwDotPulse {
                0% {
                    transform: scale(0.45);
                    opacity: 0;
                }
                18% {
                    opacity: 0.55;
                }
                100% {
                    transform: scale(2.25);
                    opacity: 0;
                }
            }

            @keyframes pop {
                0%, 18% {
                    opacity: 0;
                    transform: translateY(8px) scale(0.96);
                }
                26%, 56% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                64%, 100% {
                    opacity: 0;
                    transform: translateY(-8px) scale(0.97);
                }
            }

            @keyframes phCycle {
                0%, 30% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                34% {
                    opacity: 0;
                    transform: translateY(-4px) scale(0.995);
                }
                34.01%, 94% {
                    opacity: 0;
                }
                98%, 100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

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

    // Featured In - Smooth infinite carousel (resets when second set reaches start position)
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const secondSetEl = secondSetRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 0.5; // Smooth, not too fast
        let animationFrameId: number | null = null;
        let resetPoint = 0;
        let isRunning = true;

        const scroll = () => {
            animationFrameId = requestAnimationFrame(scroll);
            if (!scrollContainer || !isRunning) return;

            // Measure where second set starts (accounts for gap + first set width)
            if (resetPoint === 0 && secondSetEl?.offsetLeft) {
                resetPoint = secondSetEl.offsetLeft;
            }
            if (resetPoint === 0) return;

            scrollAmount += scrollSpeed;
            // Reset when we've scrolled to where set 2 starts (showing set 2 = showing set 1)
            if (scrollAmount >= resetPoint) {
                scrollAmount -= resetPoint;
            }
            scrollContainer.scrollLeft = scrollAmount;
        };

        const startScroll = () => {
            if (secondSetEl?.offsetLeft) {
                resetPoint = secondSetEl.offsetLeft;
                isRunning = true;
                animationFrameId = requestAnimationFrame(scroll);
            } else {
                setTimeout(startScroll, 100);
            }
        };

        const initTimeout = setTimeout(startScroll, 500);

        return () => {
            isRunning = false;
            if (animationFrameId != null) cancelAnimationFrame(animationFrameId);
            clearTimeout(initTimeout);
        };
    }, []);

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
        <div className="w-full min-h-screen">
            {/* Section 1: Hero - Black */}
            <section className="w-full min-h-screen sm:min-h-[calc(100vh-280px)] pt-15 flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 bg-black">
                <div className="w-full max-w-[1800px] mx-auto">
                    {/* Hero Grid: Text (left) + Visual (right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-6 sm:gap-[18px] items-stretch">

                        {/* Left: Hero Text */}
                        <div className="flex flex-col justify-center gap-2.5 sm:gap-4">
                            <h1 className="text-[clamp(28px,6.5vw,64px)] sm:text-[clamp(34px,5.2vw,64px)] font-bold leading-[1.08] sm:leading-[1.04] tracking-[-0.04em] m-0 max-w-[20ch]"
                                style={{ color: '#E9ECF8' }}>
                                Gunshot awareness in seconds
                            </h1>

                            <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.10em] sm:tracking-[0.18em] mt-2.5 sm:mt-3.5 mb-2 sm:mb-3.5 leading-snug"
                                style={{ color: 'rgba(243,246,255,0.62)' }}>
                                DETECT. CONFIRM. NOTIFY. RESPOND.
                            </div>

                            <p className="text-base sm:text-lg leading-[1.5] sm:leading-[1.45] m-0 mb-4 sm:mb-5 max-w-[56ch]"
                                style={{ color: 'rgba(243,246,248,0.80)' }}>
                                Built on everyday smartphones for outdoor events, guard teams, ERs, and schools. Privacy first by design with on device detection and zero audio storage or transmission.
                            </p>

                            <div className="flex gap-3 mt-3 sm:mt-[18px]">
                                <button
                                    className="w-full sm:w-auto min-h-[48px] sm:min-h-0 px-5 py-3.5 sm:py-3 rounded-[999px] font-black text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_22px_54px_rgba(0,109,255,0.32)] active:scale-[0.98]"
                                    style={{
                                        background: '#006dff',
                                        color: '#fff',
                                        border: '1px solid rgba(0,109,255,0.30)',
                                        boxShadow: '0 16px 35px rgba(0,109,255,0.20)'
                                    }}
                                >
                                    Book 15 min walkthrough <span className="ml-1.5">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Right: Visual Split Panel */}
                        <div className="relative overflow-hidden min-h-[300px] sm:min-h-[520px]"
                            style={{
                                borderRadius: '18px',
                                border: '1px solid rgba(243,246,255,0.10)',
                                background: 'rgba(20,24,36,0.92)',
                                boxShadow: '0 24px 70px rgba(0,0,0,0.55)'
                            }}>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(900px 520px at 22% 22%, rgba(0,109,255,0.06), transparent 58%)',
                                    opacity: 0.9
                                }} />

                            {/* Inner Container with Grid */}
                            <div className="relative h-full p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">

                                {/* Single centered wave at bottom that spans both sections - z-10 so it shows on top of panels */}
                                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden>
                                    {/* Center dot at bottom - pink gradient */}
                                    <div
                                        className="absolute left-1/2 bottom-2 sm:bottom-4 w-4 h-4 rounded-full -translate-x-1/2 translate-y-1/2"
                                        style={{
                                            background: 'radial-gradient(circle at 30% 30%, rgba(255,120,180,0.9), rgba(252,69,166,0.95) 60%)',
                                            boxShadow: '0 0 26px rgba(252,69,166,0.40)',
                                            opacity: 1,
                                            zIndex: 3
                                        }}
                                    />
                                    {/* Animated wave rings expanding from bottom center - pink - conditionally animated */}
                                    {[0, 1.3, 2.6, 3.9].map((delay, i) => (
                                        <div
                                            key={i}
                                            className="absolute left-1/2 bottom-0 rounded-full will-change-[width,height,transform,opacity]"
                                            style={{
                                                width: 24,
                                                height: 24,
                                                transform: 'translate(-50%, 50%)',
                                                border: '3px solid rgba(252,69,166,0.45)',
                                                animation: isWaveAnimated ? `cwRing 5.2s ease-out ${delay}s infinite` : 'none',
                                                opacity: isWaveAnimated ? 1 : 0.3
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* LEFT COLUMN: Today */}
                                <div className="relative rounded-[18px] border overflow-hidden p-3.5 min-h-[300px] sm:min-h-0"
                                    style={{
                                        border: '1px solid rgba(243,246,255,0.10)',
                                        background: 'rgba(255,255,255,0.03)'
                                    }}>

                                    {/* Label */}
                                    <div className="flex items-center gap-2.5 text-[10px] sm:text-xs uppercase tracking-[0.12em] mb-3 z-[6] relative"
                                        style={{ color: 'rgba(243,246,255,0.58)' }}>
                                        <div className="w-2.5 h-2.5 rounded-full shrink-0"
                                            style={{
                                                background: '#006dff',
                                                boxShadow: '0 0 0 10px rgba(0,109,255,0.10)'
                                            }} />
                                        Today
                                    </div>

                                    {/* Question Bubbles */}
                                    <div className="absolute top-[54px] left-0 right-0 h-[132px] pointer-events-none z-[4]">
                                        {[
                                            { text: 'Fireworks?', left: '22%', top: '24px', delay: 0 },
                                            { text: 'Car backfire?', left: '50%', top: '62px', transform: 'translateX(-50%)', delay: 2 },
                                            { text: 'Door slam?', right: '14px', left: 'auto', top: '92px', delay: 4 },
                                            { text: 'Jackhammer?', left: '36%', top: '54px', delay: 6 }
                                        ].map((bubble, i) => (
                                            <div
                                                key={i}
                                                className="absolute text-[11px] sm:text-[13px] px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-full whitespace-nowrap opacity-0"
                                                style={{
                                                    left: bubble.left,
                                                    right: bubble.right,
                                                    top: bubble.top,
                                                    transform: bubble.transform,
                                                    background: 'rgba(0,0,0,0.28)',
                                                    border: '1px solid rgba(243,246,255,0.12)',
                                                    color: 'rgba(243,246,255,0.78)',
                                                    fontWeight: 400,
                                                    animation: 'pop 8s ease-in-out infinite',
                                                    animationDelay: `${bubble.delay}s`
                                                }}
                                            >
                                                {bubble.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT COLUMN: With SplitSec */}
                                <div className="relative rounded-[18px] border overflow-hidden p-3.5 min-h-[300px] sm:min-h-0"
                                    style={{
                                        border: '1px solid rgba(0,109,255,0.26)',
                                        background: 'rgba(20,24,36,0.96)'
                                    }}>

                                    {/* Label */}
                                    <div className="flex items-center gap-2.5 text-[10px] sm:text-xs uppercase tracking-[0.12em] mb-3 z-[6] relative"
                                        style={{ color: 'rgba(243,246,255,0.58)' }}>
                                        <div className="w-2.5 h-2.5 rounded-full shrink-0"
                                            style={{
                                                background: '#006dff',
                                                boxShadow: '0 0 0 10px rgba(0,109,255,0.10)'
                                            }} />
                                        With SplitSec.AI
                                    </div>

                                    {/* Phone centered in column - carousel: preload all, smooth opacity transition, no conflicting animation */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(240px,64%)] h-[min(460px,78%)] pointer-events-none z-[10]">
                                        {APP_SCREENS.map((screen, i) => (
                                            <div
                                                key={screen.src}
                                                className="absolute inset-0 w-full h-full"
                                                style={{
                                                    opacity: i === screenIndex ? 1 : 0,
                                                    zIndex: i === screenIndex ? 2 : 0,
                                                    transition: 'opacity 0.4s ease',
                                                    filter: 'drop-shadow(0 18px 44px rgba(0,0,0,0.55))',
                                                    pointerEvents: i === screenIndex ? 'auto' : 'none'
                                                }}
                                            >
                                                <Image
                                                    src={screen.src}
                                                    alt={screen.alt}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 240px, 240px"
                                                    priority
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: How it works - Full white */}
            <section className="w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
                <div className="max-w-[1800px] mx-auto">
                    <div className=" p-6 sm:p-8 bg-white">
                        {/* Header */}
                        <div className="mb-3">
                            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight m-0"
                                style={{ color: '#1D1D1F' }}>
                                How it works
                            </h2>
                            <p className="text-sm sm:text-base m-0"
                                style={{ color: 'rgba(29,29,31,0.65)' }}>
                                Privacy first on device detection that escalates from suspected to confirmed in seconds.
                            </p>
                        </div>

                        {/* Main Grid: 4 cards on left, "See the model flow" box on right */}
                        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 sm:gap-5 mt-6">
                            {/* Left: 2x2 Grid of 4 cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Card 1 - Detect */}
                                <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 bg-white border  border-gray-200">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4"
                                        style={{
                                            background: 'rgba(0,122,255,0.12)',
                                        }}>
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                        </svg>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold leading-tight m-0 mb-2"
                                        style={{ color: '#1D1D1F' }}>
                                        Detect
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed m-0"
                                        style={{ color: 'rgba(29,29,31,0.65)' }}>
                                        On-device AI flags suspected gunshots in seconds with no audio stored.
                                    </p>
                                </div>

                                {/* Card 2 - Confirm */}
                                <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 bg-white border border-gray-200">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4"
                                        style={{
                                            background: 'rgba(0,122,255,0.12)',
                                        }}>
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold leading-tight m-0 mb-2"
                                        style={{ color: '#1D1D1F' }}>
                                        Confirm
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed m-0"
                                        style={{ color: 'rgba(29,29,31,0.65)' }}>
                                        Escalates fast when a person confirms or two phones detect at once.
                                    </p>
                                </div>

                                {/* Card 3 - Notify */}
                                <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 bg-white border border-gray-200">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4"
                                        style={{
                                            background: 'rgba(0,122,255,0.12)',
                                        }}>
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold leading-tight m-0 mb-2"
                                        style={{ color: '#1D1D1F' }}>
                                        Notify
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed m-0"
                                        style={{ color: 'rgba(29,29,31,0.65)' }}>
                                        Alerts reach responders and admins with time and location context.
                                    </p>
                                </div>

                                {/* Card 4 - Respond */}
                                <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 bg-white border border-gray-200">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4"
                                        style={{
                                            background: 'rgba(0,122,255,0.12)',
                                        }}>
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="3"></circle>
                                            <path d="M12 1v6m0 6v6m7.07-17.07l-4.24 4.24m0 8.49l4.24 4.24M1 12h6m6 0h6M5.93 5.93l4.24 4.24m0 8.49l-4.24 4.24"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold leading-tight m-0 mb-2"
                                        style={{ color: '#1D1D1F' }}>
                                        Respond
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed m-0"
                                        style={{ color: 'rgba(29,29,31,0.65)' }}>
                                        Clear, immediate prompts help teams act fast and cut confusion.
                                    </p>
                                </div>
                            </div>

                            {/* Right: "See the model flow" box */}
                            <div className="relative rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
                                style={{
                                    background: 'white',
                                    border: '1px solid #E0E0E0',
                                    minHeight: '280px'
                                }}>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold leading-tight m-0 mb-3"
                                        style={{ color: '#1D1D1F' }}>
                                        See the model flow
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed m-0"
                                        style={{ color: 'rgba(29,29,31,0.65)' }}>
                                        See the on device pipeline in real time. L1 quick screen, L2 verify, L3 confirm and alert. See exactly what users see at each step.
                                    </p>
                                </div>
                                <button
                                    className="w-full sm:w-auto mt-6 px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                                    style={{
                                        background: '#007AFF',
                                        color: 'white',
                                        boxShadow: '0 4px 12px rgba(0,122,255,0.25)'
                                    }}
                                >
                                    Open How it Works
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Industries - Black */}
            <section className="w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-black">
                <div className="max-w-[1800px] mx-auto p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center">
                        {/* Left: Heading and Description */}
                        <div className="flex flex-col justify-center md:px-6 xl:px-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight m-0 mb-4"
                                style={{ color: '#E9ECF8' }}>
                                Industries
                            </h2>
                            <p className="text-base sm:text-lg leading-relaxed m-0 mb-8"
                                style={{ color: 'rgba(233,236,248,0.60)' }}>
                                Built for mobile footprints where fixed infrastructure is hard, slow, or expensive. Open a playbook to see recommended setups, roles, and pilot metrics.
                            </p>

                            <div className="flex flex-col gap-3 items-start">
                                <button
                                    className="rounded-full px-6 py-3 font-semibold text-sm transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,109,255,0.3)] hover:scale-105 whitespace-nowrap flex items-center gap-2"
                                    style={{
                                        background: '#006dff',
                                        color: '#FFFFFF',
                                    }}
                                >
                                    Open industry playbooks →
                                </button>
                                <button
                                    className="rounded-full px-6 py-3 font-semibold text-sm transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,109,255,0.3)] hover:scale-105 whitespace-nowrap flex items-center gap-2 border"
                                    style={{
                                        background: 'transparent',
                                        color: '#006dff',
                                        borderColor: 'rgba(233,236,248,0.20)',
                                    }}
                                >
                                    Book 15 min walkthrough →
                                </button>
                            </div>
                        </div>

                        {/* Right: 2x2 Grid of Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            {/* Card 1 - Outdoor events */}
                            <div
                                className="rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(0,109,255,0.4)] hover:shadow-[0_12px_40px_rgba(0,109,255,0.15)]"
                                style={{
                                    background: 'rgba(11,16,32,0.85)',
                                    borderColor: 'rgba(233,236,248,0.12)',
                                }}
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: '#006dff' }}
                                    >
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2Z" fill="white" />
                                            <path d="M9 12L11 14L15 10" stroke="#006dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 m-0" style={{ color: '#E9ECF8' }}>
                                    Outdoor events
                                </h3>
                                {/* Description */}
                                <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(233,236,248,0.65)' }}>
                                    Gunshot awareness across flexible perimeters, no wiring and no cameras.
                                </p>
                            </div>

                            {/* Card 2 - Security patrols */}
                            <div
                                className="rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(252,69,166,0.4)] hover:shadow-[0_12px_40px_rgba(252,69,166,0.15)]"
                                style={{
                                    background: 'rgba(11,16,32,0.85)',
                                    borderColor: 'rgba(233,236,248,0.12)',
                                }}
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: '#FC45A6' }}
                                    >
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 m-0" style={{ color: '#E9ECF8' }}>
                                    Security patrols
                                </h3>
                                {/* Description */}
                                <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(233,236,248,0.65)' }}>
                                    Portable coverage for patrol routes, lots, and temporary posts.
                                </p>
                            </div>

                            {/* Card 3 - Hospitals and ER */}
                            <div
                                className="rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(252,69,166,0.4)] hover:shadow-[0_12px_40px_rgba(252,69,166,0.15)]"
                                style={{
                                    background: 'rgba(11,16,32,0.85)',
                                    borderColor: 'rgba(233,236,248,0.12)',
                                }}
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: '#FC45A6' }}
                                    >
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 2H11V11H2V13H11V22H13V13H22V11H13V2Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 m-0" style={{ color: '#E9ECF8' }}>
                                    Hospitals and ER
                                </h3>
                                {/* Description */}
                                <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(233,236,248,0.65)' }}>
                                    Faster recognition and escalation for staff and on-site security.
                                </p>
                            </div>

                            {/* Card 4 - Schools and campuses */}
                            <div
                                className="rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(0,109,255,0.4)] hover:shadow-[0_12px_40px_rgba(0,109,255,0.15)]"
                                style={{
                                    background: 'rgba(11,16,32,0.85)',
                                    borderColor: 'rgba(233,236,248,0.12)',
                                }}
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: '#006dff' }}
                                    >
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="white" />
                                            <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 m-0" style={{ color: '#E9ECF8' }}>
                                    Schools and campuses
                                </h3>
                                {/* Description */}
                                <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(233,236,248,0.65)' }}>
                                    A simple awareness layer for staff, responders, and administrators.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: xRadius Kit - White */}
            <section className="w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
                <div className="max-w-[1800px] mx-auto  px-8 sm:px-10 lg:px-12 bg-white">
                    {/* Header with Title and Button */}
                    <div className="flex items-start justify-between mb-3 gap-4 flex-wrap">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight m-0 mb-4"
                                style={{ color: '#1F2937' }}>
                                xRadius Kit
                            </h2>
                        </div>
                        <button
                            className="rounded-full px-5 py-2.5 font-medium text-md transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,109,255,0.3)] hover:scale-105 whitespace-nowrap flex items-center gap-2"
                            style={{
                                background: '#006dff',
                                color: '#FFFFFF',
                            }}
                        >
                            Request xRadius Kit →
                        </button>
                    </div>

                    {/* First description line */}
                    <p className="text-base sm:text-lg leading-relaxed m-0 mb-1"
                    >
                        A rugged grab and go pilot kit that turns phones into a portable gunshot awareness layer.
                    </p>

                    {/* Second description line */}
                    <p className="text-sm sm:text-[16px] leading-relaxed m-0 mb-10"
                    >
                        We provide the phones with the app preloaded and configured. Your setup is simple: distribute the phones, power them on, and get coverage in minutes.
                    </p>

                    {/* Main Content Grid - narrow image column + small gap so image sits close to text */}
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] gap-8 lg:gap-5 items-center">
                        {/* Left: Image */}
                        <div className="flex justify-center lg:justify-start w-full">
                            <div className="relative w-full aspect-square rounded-[32px] overflow-hidden lg:max-w-[420px] lg:max-h-[500px] lg:w-full"
                                style={{
                                    background: '#000000',
                                }}>
                                <Image
                                    src="/xRadius/xradius.png"
                                    alt="RadiX Kit with phone showing SplitSec app"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 500px"
                                />
                            </div>
                        </div>

                        {/* Right: Features */}
                        <div className="space-y-8 lg:pt-2">
                            {/* Deploy anywhere */}
                            <div>
                                <h3 className="text-xl sm:text-[24px] font-bold mb-2.5 m-0"
                                    style={{ color: '#1F2937' }}>
                                    Deploy anywhere
                                </h3>
                                <p className="text-[16px] sm:text-md leading-relaxed m-0"
                                    style={{ color: '#4B5563' }}>
                                    No wiring. No cameras. No permanent installs. Ideal for events, patrols, and temporary footprints.
                                </p>
                            </div>

                            {/* Pilot ready package */}
                            <div>
                                <h3 className="text-xl sm:text-[22px] font-bold mb-2.5 m-0"
                                    style={{ color: '#1F2937' }}>
                                    Pilot ready package
                                </h3>
                                <p className="text-[15px] sm:text-base leading-relaxed m-0 mb-5"
                                    style={{ color: '#4B5563' }}>
                                    Preconfigured Android phones, labels, quick start steps, and a simple placement plan so you can test fast and learn.
                                </p>

                                {/* Bullet Points */}
                                <div className="space-y-3.5">
                                    <div className="flex items-start gap-3">
                                        <div className="shrink-0 w-2 h-2 rounded-full mt-2"
                                            style={{ background: '#006dff' }}>
                                        </div>
                                        <p className="text-[15px] sm:text-base m-0 leading-relaxed"
                                            style={{ color: '#1F2937' }}>
                                            <span className="font-semibold">Fast setup</span> in minutes with a simple checklist.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="shrink-0 w-2 h-2 rounded-full mt-2"
                                            style={{ background: '#006dff' }}>
                                        </div>
                                        <p className="text-[15px] sm:text-base m-0 leading-relaxed"
                                            style={{ color: '#1F2937' }}>
                                            <span className="font-semibold">Move coverage</span> as your perimeter changes.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="shrink-0 w-2 h-2 rounded-full mt-2"
                                            style={{ background: '#006dff' }}>
                                        </div>
                                        <p className="text-[15px] sm:text-base m-0 leading-relaxed"
                                            style={{ color: '#1F2937' }}>
                                            <span className="font-semibold">Measure results</span> with clean pilot metrics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: xMapper - Black */}
            <section className="w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-black">
                <div className="max-w-[1800px] mx-auto px-8 sm:px-10 lg:px-12">
                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-center">
                        {/* Left: Text Content */}
                        <div className="space-y-6">
                            {/* Title */}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight m-0 mb-4"
                                style={{ color: '#FFFFFF' }}>
                                xMapper
                            </h2>

                            {/* Main Description */}
                            <p className="text-base sm:text-lg leading-relaxed m-0"
                                style={{ color: 'rgba(255,255,255,0.75)' }}>
                                Design coverage for your footprint in seconds. Map a perimeter, get a recommended phone count and spacing, and export a placement and quick test plan.
                            </p>

                            {/* Feature Points */}
                            <div className="space-y-3 pt-4">
                                {/* Map your footprint */}
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: '#006dff' }} aria-hidden />
                                    <p className="text-[15px] sm:text-base m-0 leading-relaxed"
                                        style={{ color: 'rgba(255,255,255,0.75)' }}>
                                        <span className="font-bold" style={{ color: '#FFFFFF' }}>Map your footprint</span> by dropping a perimeter directly on a map.
                                    </p>
                                </div>

                                {/* Get a recommended phone count */}
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: '#006dff' }} aria-hidden />
                                    <p className="text-[15px] sm:text-base m-0 leading-relaxed"
                                        style={{ color: 'rgba(255,255,255,0.75)' }}>
                                        <span className="font-bold" style={{ color: '#FFFFFF' }}>Get a recommended phone count</span> with suggested spacing based on your footprint and environment, including trees and buildings.
                                    </p>
                                </div>

                                {/* Generate a placement and test plan */}
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: '#006dff' }} aria-hidden />
                                    <p className="text-[15px] sm:text-base m-0 leading-relaxed"
                                        style={{ color: 'rgba(255,255,255,0.75)' }}>
                                        <span className="font-bold" style={{ color: '#FFFFFF' }}>Generate a placement and test plan</span> and export a quick checklist to validate coverage and document results.
                                    </p>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="pt-2">
                                <button
                                    className="rounded-full px-5 bg-transparent text-[#006dff] border border-white py-2.5 font-medium text-lg transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,109,255,0.4)] hover:scale-105 whitespace-nowrap flex items-center gap-2"
                                >
                                    Launch xMapper utility →
                                </button>
                            </div>
                        </div>

                        {/* Right: Map Visualization */}
                        <div className="flex justify-center lg:justify-end w-full">
                            <div className="relative w-full aspect-[4/3] min-h-[280px] rounded-[32px] p-2 overflow-hidden bg-black lg:max-w-[600px] lg:h-[540px] lg:aspect-auto"
                            >
                                <Image
                                    src="/xMapper/xmapper.png"
                                    alt="xMapper coverage map with phone placement visualization"
                                    fill
                                    className="object-cover bg-black"
                                    sizes="(max-width: 1024px) 100vw, 600px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Featured In - White */}
            <section className="w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
                <div className="max-w-[1800px] mx-auto ">
                    {/* Outer wrapper: soft pink/purple gradient background */}
                    <div
                        className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 min-h-[200px]  "
                        style={{
                            background: 'white',
                        }}
                    >
                        <div className="items-baseline justify-between gap-4 mb-4 sm:mb-5 flex-wrap">
                            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight m-0"
                            >
                                Featured
                            </h2>
                            <p className="text-md ">
                                Early momentum from partners and pilots. More coming soon.
                            </p>
                        </div>

                        <div className="relative overflow-hidden py-1">
                            <div
                                ref={scrollRef}
                                className="flex gap-5 overflow-x-scroll py-4 px-2 rounded-2xl bg-neutral-100 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                                style={{
                                    scrollBehavior: 'auto',
                                    pointerEvents: 'auto',
                                    willChange: 'scroll-position',
                                    overflowX: 'scroll',
                                    overflowY: 'hidden'
                                }}
                            >
                                {/* First set */}
                                <div className="flex gap-5 shrink-0">
                                    {publications.map((pub) => (
                                        <div
                                            key={`a-${pub.src}`}
                                            className="flex items-center justify-center px-8 sm:px-20 py-4 sm:py-5 rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.99] select-none h-[72px] sm:h-[88px] min-w-[180px] sm:min-w-[210px]"
                                        >
                                            <Image
                                                src={pub.src}
                                                alt={pub.alt}
                                                width={120}
                                                height={40}
                                                className="object-contain w-auto sm:w-20 h-8 sm:h-20"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* Second set - identical (reset to 0 when this reaches viewport start) */}
                                <div ref={secondSetRef} className="flex gap-5 shrink-0">
                                    {publications.map((pub) => (
                                        <div
                                            key={`b-${pub.src}`}
                                            className="flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.99] select-none h-[72px] sm:h-[88px] min-w-[180px] sm:min-w-[210px]"
                                        >
                                            <Image
                                                src={pub.src}
                                                alt={pub.alt}
                                                width={120}
                                                height={40}
                                                className="object-contain w-auto sm:w-20 h-8 sm:h-20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
