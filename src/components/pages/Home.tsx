"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// App screen sequence for right-side carousel: home → gunshot detected → alertcrew
const APP_SCREENS = [
    { src: "/home/drill.png", alt: "SplitSec app home screen", duration: 5000 },
    { src: "/home/GS Detected screen.png", alt: "Gunshot detected screen", duration: 5000 },
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

/** Wrapper that adds scroll-reveal--inview when the section enters the viewport so animations run on scroll */
function ScrollReveal({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return (
        <div
            ref={ref}
            className={`scroll-reveal ${inView ? "scroll-reveal--inview" : ""} ${className}`.trim()}
        >
            {children}
        </div>
    );
}

export default function HomePage() {
    // Scroll to section when navigating from another page with hash (e.g. /#how-it-works)
    useEffect(() => {
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        if (hash) {
            const id = hash.slice(1);
            const el = document.getElementById(id);
            el?.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    // Featured In carousel refs (container + second set position for perfect loop)
    const scrollRef = useRef<HTMLDivElement>(null);
    const secondSetRef = useRef<HTMLDivElement>(null);

    // Wave animates on every load/reload
    const [isWaveAnimated] = useState(true);

    // Beacon wave - outer card ref; CSS vars set directly on DOM (no state → no re-render → no restart)
    const heroVisualRef = useRef<HTMLDivElement>(null);

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

            /* Outgoing bubble: smooth fade out */
            @keyframes bubbleLeave {
                0%   { opacity: 1; }
                100% { opacity: 0; }
            }
            /* Incoming bubble: smooth fade in */
            @keyframes bubbleEnter {
                0%   { opacity: 0; }
                100% { opacity: 1; }
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

            @keyframes beaconWave {
                0%   { width: 24px; height: 24px; opacity: 0; }
                3%   { opacity: 1; }
                88%  { width: var(--wave-max, 980px); height: var(--wave-max, 980px); opacity: 1; }
                96%  { width: var(--wave-max, 980px); height: var(--wave-max, 980px); opacity: 0; }
                100% { width: var(--wave-max, 980px); height: var(--wave-max, 980px); opacity: 0; }
            }

            /* Matches HTML exactly: position + size + animation all in the class */
            .bw-ring {
                position: absolute;
                left: 50%;
                top: calc(100% - 73px);
                transform: translate(-50%, -50%);
                width: 24px;
                height: 24px;
                border-radius: 999px;
                background: transparent;
                border: 1px solid rgba(255, 63, 166, 0.58);
                opacity: 0;
                animation: beaconWave var(--wave-dur, 4.40s) linear infinite;
                will-change: width, height, opacity;
            }

            /* Two clip-path halves — each promotes the ring to its own compositor layer */
            .beacon-waves-left {
                position: absolute;
                inset: 0;
                clip-path: inset(0 50% 0 0);
            }
            .beacon-waves-right {
                position: absolute;
                inset: 0;
                clip-path: inset(0 0 0 50%);
            }

            /* Beacon dot */
            .beacon-dot {
                position: absolute;
                left: 50%;
                top: calc(100% - 73px);
                width: 20px;
                height: 20px;
                border-radius: 999px;
                background: #fc3fa6;
                transform: translate(-50%, -50%);
                z-index: 3;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // Dynamically compute --wave-max and --wave-dur; set directly on DOM (mirrors HTML JS exactly)
    useEffect(() => {
        const ORIGIN_FROM_BOTTOM = 73;
        const BASE_DUR = 7.2;
        const BASE_MAX = 1800;
        const START = 24;

        function update() {
            const el = heroVisualRef.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            if (!r.width || !r.height) return;
            const cx = r.width / 2;
            const cy = r.height - ORIGIN_FROM_BOTTOM;
            const corners: [number, number][] = [[0, 0], [r.width, 0], [0, r.height], [r.width, r.height]];
            let maxDist = 0;
            for (const [x, y] of corners) {
                const d = Math.hypot(x - cx, y - cy);
                if (d > maxDist) maxDist = d;
            }
            const newMax = Math.ceil(maxDist * 2 + 2);
            const dur = Math.round(BASE_DUR * ((newMax - START) / (BASE_MAX - START)) * 100) / 100;
            // Set directly on DOM — no React state → no re-render → animation never restarts
            el.style.setProperty('--wave-max', newMax + 'px');
            el.style.setProperty('--wave-dur', dur + 's');
        }

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // Right-side app screen carousel: home → gunshot detected → alertcrew
    const [screenIndex, setScreenIndex] = useState(0);
    const screenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Video modal state
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Single question bubble: one at a time; positions chosen so middle/left/right don't run back-to-back (avoids overlap in narrow column)
    const QUESTION_BUBBLES: { text: string; position: 'left' | 'right' | 'top' | 'bottom' | 'middle'; }[] = [
        { text: "Can't happen here", position: 'left' },
        { text: 'Fireworks?', position: 'right' },
        { text: 'Car backfire', position: 'top' },
        { text: 'Door slam?', position: 'bottom' },
        { text: 'Jackhammer?', position: 'middle' },
        { text: "What was that?", position: 'top' },   // was left — avoid overlap with middle/right
        { text: "That's probably nothing", position: 'bottom' }, // was right — avoid overlap with middle/left
    ];
    const [bubbleIndex, setBubbleIndex] = useState(0);
    const [previousBubbleIndex, setPreviousBubbleIndex] = useState(0);
    const bubbleTransitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const bubbleIndexRef = useRef(0);
    bubbleIndexRef.current = bubbleIndex;
    // At ~1130px (and similar mid widths) the left column is narrow; use larger insets so bubble doesn't overlap the divider or edges
    const [bubbleInsetPct, setBubbleInsetPct] = useState(4);
    const [bubbleVerticalInset, setBubbleVerticalInset] = useState(12);
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            const isMidViewport = w >= 900 && w <= 1300;
            setBubbleInsetPct(isMidViewport ? 14 : 4);
            setBubbleVerticalInset(isMidViewport ? 20 : 12);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    useEffect(() => {
        const t = setInterval(() => {
            const current = bubbleIndexRef.current;
            const next = (current + 1) % QUESTION_BUBBLES.length;
            setPreviousBubbleIndex(current);
            setBubbleIndex(next);
            if (bubbleTransitionRef.current) clearTimeout(bubbleTransitionRef.current);
            bubbleTransitionRef.current = setTimeout(() => setPreviousBubbleIndex(next), 500);
        }, 4000);
        return () => {
            clearInterval(t);
            if (bubbleTransitionRef.current) clearTimeout(bubbleTransitionRef.current);
        };
    }, []);

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
            <section className="w-full min-h-[min(100vh,270px)] md:min-h-[calc(100vh-530px)] pt-20 sm:pt-24 pb-10 flex items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 bg-[#0f1115] overflow-x-hidden">
                <div className="w-full max-w-[1800px] mx-auto">
                    {/* Hero Grid: Text (left) + Visual (right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-5 items-center lg:items-stretch">

                        {/* Left: Hero Text - left-aligned on all screens */}
                        <div className="flex flex-col justify-center gap-2 sm:gap-3  order-1 text-left">
                            <h1 className="text-[clamp(26px,5.5vw,64px)] sm:text-[clamp(32px,4vw,64px)] lg:text-[clamp(40px,4vw,64px)] font-bold leading-[1.1] sm:leading-[1.06] tracking-[-0.04em] m-0 max-w-[20ch]"
                                style={{ color: '#E9ECF8' }}>
                                Gunshot awareness in seconds
                            </h1>

                            <div className="text-[12px] font-bold uppercase tracking-[0.10em] sm:tracking-[0.18em] mt-0  leading-snug text-gray-500">
                                DETECT. CONFIRM. NOTIFY.
                            </div>

                            <p className="text-sm sm:text-[17px] leading-[1.5] sm:leading-[1.45] text-gray-400"
                            >
                                On everyday smartphones for outdoor events, guard teams, ERs, and schools. Privacy first. On device detection. No audio stored or transmitted.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 mt-2 sm:mt-[18px] justify-start">
                                <button
                                    className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] px-4 sm:px-5 py-3 sm:py-3.5 rounded-[999px] font-black text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_22px_54px_rgba(0,109,255,0.32)] active:scale-[0.98]"
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

                        {/* Right: Visual Split Panel - min-h ensures proper fill at 1024px */}
                        <div ref={heroVisualRef} className="relative overflow-hidden min-h-[280px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[330px] xl:min-h-[420px] max-h-[85vh] lg:max-h-none order-2 w-full"
                            style={{
                                borderRadius: '28px',
                                border: '1px solid rgba(243,246,255,0.10)',
                                background: 'rgba(20,24,36,0.92)',
                                boxShadow: '0 24px 70px rgba(0,0,0,0.55)',
                                // Default values match HTML CSS so animation works before JS runs
                                ['--wave-max' as string]: '980px',
                                ['--wave-dur' as string]: '4.40s',
                            }}>

                            {/* Gradient Overlay - responsive size */}
                            <div className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'radial-gradient( clamp(400px, 80vw, 900px) clamp(300px, 50vh, 520px) at 22% 22%, rgba(0,109,255,0.06), transparent 58%)',
                                    opacity: 0.9
                                }} />

                            {/* Beacon layer — z-1, matches HTML exactly */}
                            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} aria-hidden>
                                <div className="beacon-waves-left">
                                    <div className={isWaveAnimated ? 'bw-ring' : undefined} />
                                </div>
                                <div className="beacon-waves-right">
                                    <div className={isWaveAnimated ? 'bw-ring' : undefined} />
                                </div>
                                <div className="beacon-dot" />
                            </div>

                            {/* Inner Container — z-2 above beacon layer, matches HTML .hv-inner */}
                            <div className="relative z-[2] h-full min-h-[400px] md:min-h-[420px] p-3 sm:p-4 md:p-5 lg:p-6 grid grid-cols-1 md:grid-cols-2 grid-rows-[minmax(220px,1fr)_minmax(220px,1fr)] md:grid-rows-1 gap-3 sm:gap-4 md:gap-5">

                                {/* Vertical divider - spans both sections, more visible on tablet/desktop */}
                                <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-[5] pointer-events-none hidden md:block"
                                    style={{ background: 'rgba(243,246,255,0.22)' }}
                                    aria-hidden
                                />

                                {/* LEFT COLUMN: Today - equal height with With SplitSec on mobile */}
                                <div className="relative p-3 sm:p-3.5 min-h-0 flex flex-col flex-1 min-w-0">

                                    {/* Label */}
                                    <div className="flex items-center gap-2 sm:gap-2.5 text-[10px] sm:text-xs uppercase tracking-[0.12em] mb-2 sm:mb-3 z-[6] relative"
                                        style={{ color: 'rgba(243,246,255,0.58)' }}>
                                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0"
                                            style={{
                                                background: '#006dff',
                                                boxShadow: '0 0 0 10px rgba(0,109,255,0.10)'
                                            }} />
                                        Today
                                    </div>

                                    {/* Question bubble: smooth crossfade — one leaving, one entering; inset increases at ~1130px to avoid overlapping divider */}
                                    <div className="absolute top-[54px] left-0 right-0 h-[132px] pointer-events-none z-[4]">
                                        {(() => {
                                            const inset = `${bubbleInsetPct}%`;
                                            const vInset = `${bubbleVerticalInset}px`;
                                            const getPositionStyle = (pos: 'left' | 'right' | 'top' | 'bottom' | 'middle'): React.CSSProperties =>
                                                pos === 'left' ? { left: inset, top: '50%', transform: 'translateY(-50%)' } :
                                                    pos === 'right' ? { right: inset, left: 'auto', top: '50%', transform: 'translateY(-50%)' } :
                                                        pos === 'top' ? { left: '50%', top: vInset, transform: 'translateX(-50%)' } :
                                                            pos === 'bottom' ? { left: '50%', bottom: vInset, top: 'auto', transform: 'translateX(-50%)' } :
                                                                { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' };
                                            const baseStyle: React.CSSProperties = {
                                                background: 'rgba(0,0,0,0.28)',
                                                border: '1px solid rgba(243,246,255,0.12)',
                                                color: 'rgba(243,246,255,0.78)',
                                                fontWeight: 400,
                                            };
                                            const isTransitioning = previousBubbleIndex !== bubbleIndex;
                                            const currentB = QUESTION_BUBBLES[bubbleIndex];
                                            const previousB = QUESTION_BUBBLES[previousBubbleIndex];
                                            return (
                                                <>
                                                    {isTransitioning && (
                                                        <div
                                                            key={`leave-${previousBubbleIndex}`}
                                                            className="absolute text-[10px] sm:text-[12px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-full whitespace-nowrap"
                                                            style={{
                                                                ...baseStyle,
                                                                ...getPositionStyle(previousB.position),
                                                                animation: 'bubbleLeave 0.5s ease-out forwards',
                                                            }}
                                                        >
                                                            {previousB.text}
                                                        </div>
                                                    )}
                                                    <div
                                                        key={`enter-${bubbleIndex}`}
                                                        className="absolute text-[10px] sm:text-[12px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-full whitespace-nowrap"
                                                        style={{
                                                            ...baseStyle,
                                                            ...getPositionStyle(currentB.position),
                                                            animation: isTransitioning ? 'bubbleEnter 0.5s ease-out forwards' : undefined,
                                                            opacity: isTransitioning ? 0 : 1,
                                                        }}
                                                    >
                                                        {currentB.text}
                                                    </div>
                                                </>
                                            );
                                        })()}
                                    </div>
                                </div>

                                {/* RIGHT COLUMN: With SplitSec - equal height with Today on mobile; border-top = divider when stacked; top padding for spacing */}
                                <div className="relative overflow-hidden p-3 sm:p-3.5 pr-5 sm:pr-6 pt-5 sm:pt-4 md:pt-3.5 min-h-0 flex-1 min-w-0 border-t border-[rgba(243,246,255,0.15)] md:border-t-0">

                                    {/* Label - z-[20] above phone, padding to prevent clipping */}
                                    <div className="flex items-center gap-2 sm:gap-2.5 text-[10px] sm:text-xs uppercase tracking-[0.12em] mb-2 sm:mb-3 pr-4 py-0.5 z-[20] relative shrink-0 min-h-[1.5em] overflow-visible"
                                        style={{ color: 'rgba(243,246,255,0.58)' }}>
                                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0"
                                            style={{
                                                background: '#006dff',
                                                boxShadow: '0 0 0 10px rgba(0,109,255,0.10)'
                                            }} />
                                        <span className="sm:hidden">SplitSec</span>
                                        <span className="hidden sm:inline whitespace-nowrap">With SplitSec.AI</span>
                                    </div>

                                    {/* Phone - reduced size so label has breathing room above it */}
                                    <div
                                        className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 min-w-[110px] w-[min(145px,68vw)] md:w-[min(110px,85%)] max-h-[calc(81%-1rem)] pointer-events-none z-[10]"
                                        style={{ aspectRatio: '9/19.2' }}
                                    >
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
            <section id="how-it-works" className="w-full py-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 bg-white scroll-mt-20">
                <ScrollReveal>
                    <div className="max-w-[1800px] mx-auto">
                        <div className="  bg-white">
                            {/* Header - fade in up */}
                            <div className="mb-3 reveal-up" style={{ animationDelay: '0.1s' }}>
                                <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight m-0"
                                    style={{ color: '#1D1D1F' }}>
                                    How it works
                                </h2>
                                <p className="text-sm sm:text-base m-0"
                                    style={{ color: 'rgba(29,29,31,0.65)' }}>
                                    Detect on device. Confirm quickly. Notify the right people

                                </p>
                            </div>

                            {/* Listen Confirm Notify workflow infographic - constrained to match card width, balanced size */}
                            <div
                                className="relative w-full max-w-3xl rounded-xl overflow-hidden"
                                style={{ aspectRatio: '2.2/1', minHeight: 160, maxHeight: 256 }}
                            >
                                <Image
                                    src="/home/Infographic DCN.png"
                                    alt="Listen Confirm Notify workflow infographic"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 896px"
                                    priority
                                />
                            </div>

                            {/* Robust escalation card - matches screenshot design */}
                            <div
                                className="relative rounded-2xl overflow-hidden bg-[#f3f5f9] p-4 sm:p-4 reveal-up shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                                style={{
                                    border: '1px solid #E5E5E7',
                                    animationDelay: '0.2s',
                                }}
                            >
                                <h2 className="text-xl sm:text-3xl font-extrabold leading-tight m-0 mb-2" style={{ color: '#1D1D1F' }}>
                                    Robust escalation
                                </h2>
                                <p className="text-md sm:text-xl font-extrabold m-0 mb-2" style={{ color: '#006dff' }}>
                                    AI + human verified
                                </p>
                                <p className="text-sm sm:text-base leading-relaxed m-0 mb-1" style={{ color: 'rgba(29,29,31,0.65)' }}>
                                    Escalate confidence from AI detection to a confirmed alert, without slowing response.
                                </p>
                                <div className="flex flex-col lg:flex-row items-stretch gap-4 w-full">
                                    {/* Two cards group - stacked on small, side-by-side on md+ */}
                                    <div className="flex flex-col md:flex-row gap-4 flex-1 min-w-0 w-full">
                                        {/* Level 1/2 - Human verified */}
                                        <div
                                            className="rounded-xl p-3 sm:p-5 border bg-[#eceef2] flex gap-4 sm:gap-6 flex-1 min-w-0 w-full md:w-auto"
                                            style={{ borderColor: '#0b0f1a1f' }}
                                        >
                                            <div className="sm:shrink-0">
                                                <span className="inline-block px-2 sm:px-4 py-2 rounded-full text-xs sm:text-md font-bold mb-3" style={{ background: '#d9dbe0', color: 'rgba(29,29,31,0.65)' }}>
                                                    Level 1/2
                                                </span>
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-base font-bold leading-tight m-0 mb-2" style={{ color: '#1D1D1F' }}>
                                                    Human verified
                                                </h4>
                                                <p className="text-sm leading-relaxed" style={{ color: 'rgba(29,29,31,0.65)' }}>
                                                    AI flags and prompts a quick check. A tap confirms and escalates.
                                                </p>
                                            </div>
                                        </div>
                                        {/* Level 3 - Multi phone corroborated */}
                                        <div
                                            className="rounded-xl p-3 sm:p-5 border bg-[#eceef2] flex gap-4 sm:gap-6 flex-1 min-w-0 w-full md:w-auto"
                                            style={{ borderColor: '#0b0f1a1f' }}
                                        >
                                            <div className="shrink-0">
                                                <span className="inline-block px-2 sm:px-4 py-2 rounded-full text-xs sm:text-md font-bold mb-3" style={{ background: '#d9dbe0', color: 'rgba(29,29,31,0.65)' }}>
                                                    Level 3
                                                </span>
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-base font-bold leading-tight m-0 mb-2" style={{ color: '#1D1D1F' }}>
                                                    Multi phone corroborated
                                                </h4>
                                                <p className="text-sm leading-relaxed" style={{ color: 'rgba(29,29,31,0.65)' }}>
                                                    2+ phones corroborate and escalate automatically.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-auto lg:flex lg:justify-center">
                                        {/* More details - centered below on small, same row on lg+ */}
                                        <Link
                                            href="/technology"
                                            className="inline-flex items-center justify-center gap-2 px-5 py-3 lg:py-7 rounded-full font-semibold text-sm border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shrink-0 sm:self-center  sm:w-auto lg:mx-0"
                                            style={{ borderColor: '#006dff', color: '#006dff' }}
                                        >
                                            More details
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Section 3: Industries - Black */}
            <section id="solutions" className="w-full py-10 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 bg-[#0f1115] scroll-mt-20">
                <ScrollReveal>
                    <div className="max-w-[1800px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center">
                            {/* Left: Heading and Description - fade in up */}
                            <div className="flex flex-col justify-center md:px-6 xl:px-10 reveal-up" style={{ animationDelay: '0.1s' }}>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight m-0 mb-4"
                                    style={{ color: '#E9ECF8' }}>
                                    Solutions
                                </h2>
                                <p className="text-base sm:text-lg leading-relaxed m-0 mb-8"
                                    style={{ color: 'rgba(233,236,248,0.60)' }}>
                                    Built for mobile footprints where fixed infrastructure is hard, slow, or expensive. Open a solution guide to see recommended setups, roles, and rollout metrics.
                                </p>

                                <div className="flex flex-wrap gap-3 items-start">
                                    <Link
                                        href="/industries"
                                        className="rounded-full px-6 py-3 font-semibold text-sm transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,109,255,0.3)] hover:scale-105 whitespace-nowrap flex items-center gap-2"
                                        style={{
                                            background: '#006dff',
                                            color: '#FFFFFF',
                                        }}
                                    >
                                        View solutions →
                                    </Link>
                                    <Link
                                        href="/schedule-demo"
                                        className="rounded-full px-6 py-3 font-semibold text-sm transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,109,255,0.3)] hover:scale-105 whitespace-nowrap flex items-center gap-2 border"
                                        style={{
                                            background: 'transparent',
                                            color: '#006dff',
                                            borderColor: 'rgba(233,236,248,0.20)',
                                        }}
                                    >
                                        Book 15 min walkthrough →
                                    </Link>
                                </div>
                            </div>

                            {/* Right: 2x2 Grid of Cards - fade in up with stagger */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                {/* Card 1 - Outdoor events */}
                                <Link
                                    href="/industries#outdoor"
                                    className="rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(0,109,255,0.4)] hover:shadow-[0_12px_40px_rgba(0,109,255,0.15)] cursor-pointer block reveal-up"
                                    style={{
                                        background: 'rgba(11,16,32,0.85)',
                                        borderColor: 'rgba(233,236,248,0.12)',
                                        animationDelay: '0.2s',
                                    }}
                                >
                                    {/* Icon */}
                                    <div className="mb-4">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                                            style={{ background: '#006dff' }}
                                        >
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="white" />
                                                <path d="M12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9C9.5 10.38 10.62 11.5 12 11.5Z" fill="#006dff" />
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
                                </Link>

                                {/* Card 2 - Guard companies */}
                                <Link
                                    href="/industries#guards"
                                    className="rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(252,69,166,0.4)] hover:shadow-[0_12px_40px_rgba(252,69,166,0.15)] cursor-pointer block reveal-up"
                                    style={{
                                        background: 'rgba(11,16,32,0.85)',
                                        borderColor: 'rgba(233,236,248,0.12)',
                                        animationDelay: '0.3s',
                                    }}
                                >
                                    {/* Icon */}
                                    <div className="mb-4">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                                            style={{ background: '#FC45A6' }}
                                        >
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                <polyline points="9 12 11 14 15 10"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-2 m-0" style={{ color: '#E9ECF8' }}>
                                        Guard companies
                                    </h3>
                                    {/* Description */}
                                    <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(233,236,248,0.65)' }}>
                                        Portable coverage for patrol routes, lots, and temporary posts.
                                    </p>
                                </Link>

                                {/* Card 3 - Health care */}
                                <Link
                                    href="/industries#health"
                                    className="rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(252,69,166,0.4)] hover:shadow-[0_12px_40px_rgba(252,69,166,0.15)] cursor-pointer block reveal-up"
                                    style={{
                                        background: 'rgba(11,16,32,0.85)',
                                        borderColor: 'rgba(233,236,248,0.12)',
                                        animationDelay: '0.4s',
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
                                        Health care
                                    </h3>
                                    {/* Description */}
                                    <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(233,236,248,0.65)' }}>
                                        Faster recognition and escalation for staff and on site security.
                                    </p>
                                </Link>

                                {/* Card 4 - Schools and colleges */}
                                <Link
                                    href="/industries#schools"
                                    className="rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(0,109,255,0.4)] hover:shadow-[0_12px_40px_rgba(0,109,255,0.15)] cursor-pointer block reveal-up"
                                    style={{
                                        background: 'rgba(11,16,32,0.85)',
                                        borderColor: 'rgba(233,236,248,0.12)',
                                        animationDelay: '0.5s',
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
                                        Schools and colleges
                                    </h3>
                                    {/* Description */}
                                    <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(233,236,248,0.65)' }}>
                                        A simple awareness layer for staff, responders, and administrators.
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Section 4: splitPAK - White */}
            <section className="w-full py-8 sm:py-10 lg:py-10 xl:py-12 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-16 2xl:px-28 bg-white">
                <ScrollReveal>
                    <div className="max-w-[1800px] mx-auto  bg-white">
                        {/* Header with Title - matches splitsec_home_page.html #radix .perimeterpak-intro */}
                        <div className="reveal-up mb-2 perimeterpak-intro" style={{ animationDelay: '0.1s' }}>
                            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight m-0 mb-6"
                                style={{ color: '#1F2937' }}>
                                Pilot same day with{' '}
                                <img
                                    src="/home/PerimeterPAK blue-pink.png"
                                    alt="PerimeterPAK"
                                    className="perimeterpak-wordmark inline-block w-auto"
                                    style={{
                                        height: '0.74em',
                                        marginLeft: '0.12ch',
                                        verticalAlign: '-0.02em',
                                    }}
                                />
                            </h2>
                        </div>

                        {/* Main Content Grid - equal-height columns on lg; stacked on small with constrained image */}
                        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] gap-10 lg:gap-5 xl:gap-10 items-stretch">
                            {/* Left: Image - constrained on small screens, full column height on lg */}
                            <div className="flex justify-center lg:justify-start w-full lg:min-h-full reveal-up" style={{ animationDelay: '0.25s' }}>
                                <div className="relative w-full lg:h-full min-h-0 rounded-[20px] overflow-hidden mx-auto lg:mx-0">
                                    <img
                                        src="/xRadius/Pelican case pink foam (1).png"
                                        alt="splitPAK with phone showing SplitSec app"
                                        className="w-full h-full object-center"
                                    />
                                </div>
                            </div>

                            {/* Right: Content - same height as image column on lg, vertically centered */}
                            <div className="flex flex-col justify-center space-y-6 lg:pt-2 lg:min-h-full reveal-down" style={{ animationDelay: '0.3s' }}>
                                <p className="text-base  sm:text-lg leading-relaxed m-0 mb-5 "
                                    style={{ color: '#4B5563' }}>
                                    Preconfigured phones in a rugged case for portable gunshot awareness. Hand out devices, power on, and get coverage in minutes.
                                </p>

                                {/* What's included */}
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 m-0"
                                        style={{ color: '#1F2937' }}>
                                        What&apos;s included
                                    </h3>
                                    <p className="text-[15px] sm:text-base leading-relaxed m-0"
                                        style={{ color: '#4B5563' }}>
                                        Ten ready phones, protective case, labels, quick start guide, and a placement plan.
                                    </p>
                                </div>

                                {/* Deploy anywhere */}
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 m-0"
                                        style={{ color: '#1F2937' }}>
                                        Deploy anywhere
                                    </h3>
                                    <p className="text-[15px] sm:text-base leading-relaxed m-0"
                                        style={{ color: '#4B5563' }}>
                                        No cameras. No wiring. No permanent installs. Built for events, patrol routes, and temporary footprints.
                                    </p>
                                </div>

                                {/* Three outline buttons */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full px-4 py-2 text-sm font-semibold border border-gray-300 bg-transparent transition-colors hover:border-gray-400"
                                        style={{ color: '#374151' }}>
                                        Setup in minutes.
                                    </span>
                                    <span className="rounded-full px-4 py-2 text-sm font-semibold border border-gray-300 bg-transparent transition-colors hover:border-gray-400"
                                        style={{ color: '#374151' }}>
                                        Move coverage.
                                    </span>
                                    <span className="rounded-full px-4 py-2 text-sm font-semibold border border-gray-300 bg-transparent transition-colors hover:border-gray-400"
                                        style={{ color: '#374151' }}>
                                        Measure results.
                                    </span>
                                </div>

                                {/* Primary CTA - shifted below the three buttons */}
                                <div>
                                    <Link
                                        href="/split-pak#request-split-pak"
                                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-base transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,109,255,0.3)] hover:scale-105"
                                        style={{
                                            background: '#006dff',
                                            color: '#FFFFFF',
                                        }}
                                    >
                                        Pilot PerimeterPAK →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Section 5: xMapper - Black */}
            <section className="w-full py-8 sm:py-10 lg:py-10 xl:py-12 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-16 2xl:px-28 bg-[#0f1115]">
                <ScrollReveal>
                    <div className="max-w-[1800px] mx-auto">
                        {/* Main Content Grid - tighter at 1024 to fit 1024x866 */}
                        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 items-center">
                            {/* Left: Text Content - fade in up */}
                            <div className="space-y-4 lg:space-y-4 xl:space-y-6 reveal-up" style={{ animationDelay: '0.1s' }}>
                                {/* Title */}
                                <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight m-0 mb-2 lg:mb-3 xl:mb-4">
                                    <span style={{ color: '#FFFFFF' }}>SplitSec Grid<span style={{ color: '#2563eb' }}>Mapper</span></span>

                                </h2>

                                {/* Main Description */}
                                <p className="text-base sm:text-lg lg:text-base xl:text-lg leading-relaxed m-0"
                                    style={{ color: '#FFFFFF' }}>
                                    Plan gunshot detection coverage for your site in seconds. Draw a monitoring perimeter, get a recommended phone count and zone spacing, then pilot with PerimeterPAK.
                                </p>

                                {/* Feature Points */}
                                <div className="space-y-2.5 lg:space-y-2.5 xl:space-y-3 pt-2 lg:pt-3 xl:pt-4">
                                    {/* Draw your monitoring perimeter */}
                                    <div className="flex items-start gap-3">
                                        <span className="w-3 h-3 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: '#2563eb' }} aria-hidden />
                                        <div className="text-[15px] sm:text-base m-0 leading-relaxed"
                                            style={{ color: '#FFFFFF' }}>
                                            <span className="font-bold" style={{ color: '#FFFFFF' }}>Draw your monitoring perimeter</span>
                                            <p className="text-md text-gray-400 m-0 mt-1">Inside the perimeter, phones listen for gunshot like audio patterns</p>
                                        </div>
                                    </div>

                                    {/* Get phone count and zone spacing */}
                                    <div className="flex items-start gap-3">
                                        <span className="w-3 h-3 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: '#2563eb' }} aria-hidden />
                                        <div className="text-[15px] sm:text-base m-0 leading-relaxed"
                                            style={{ color: '#FFFFFF' }}>
                                            <span className="font-bold" style={{ color: '#FFFFFF' }}>Get phone count and zone spacing</span>
                                            <p className="text-md text-gray-400 m-0 mt-1">Recommended device count and zone spacing based on footprint and terrain</p>
                                        </div>
                                    </div>

                                    {/* Pilot fast with PerimeterPAK */}
                                    <div className="flex items-start gap-3">
                                        <span className="w-3 h-3 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: '#2563eb' }} aria-hidden />
                                        <div className="text-[15px] sm:text-base m-0 leading-relaxed"
                                            style={{ color: '#FFFFFF' }}>
                                            <span className="font-bold" style={{ color: '#FFFFFF' }}>Pilot fast with PerimeterPAK</span>
                                            <p className="text-md text-gray-400 m-0 mt-1">Buy, pilot, or rent PerimeterPAKs (10, 20, etc.) to roll out coverage quickly</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="pt-0 lg:pt-1 xl:pt-2">
                                    <Link
                                        href="/xmapper"
                                        className="rounded-full px-4 lg:px-4 xl:px-5 bg-transparent border py-2 lg:py-2.5 font-extrabold text-base lg:text-base xl:text-lg transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:scale-105 whitespace-nowrap inline-flex items-center gap-2"
                                        style={{ color: '#006dff', borderColor: '#f3f6ff47' }}
                                    >
                                        Launch GridMapper →
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Map Visualization - fade in down; smaller at 1024 to fit 1024x866 */}
                            <div className="flex justify-center w-full reveal-down" style={{ animationDelay: '0.2s' }}>
                                <div className="relative w-full   md:max-w-full min-h-[340px]  md:h-[540px] lg:rounded-[28px] xl:rounded-[32px] p-2 overflow-hidden rounded-3xl lg:max-w-[450px] lg:min-h-[434px] lg:h-[380px] xl:max-w-[480px] xl:w-[480px] xl:h-[480px] 2xl:max-w-[540px] 2xl:w-[540px]"
                                >
                                    <Image
                                        src="/xMapper/download (3).webp"
                                        alt="Mapper coverage map with phone placement visualization"
                                        fill
                                        className="object-cover"
                                        style={{ filter: 'invert(1) hue-rotate(180deg) contrast(1) brightness(1)' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Section 6: Featured In - White */}
            <section className="w-full py-10 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 bg-white">
                <ScrollReveal>
                    <div className="max-w-[1800px] mx-auto ">
                        {/* Outer wrapper: soft pink/purple gradient background */}
                        <div
                            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 min-h-[200px]  "
                            style={{
                                background: 'white',
                            }}
                        >
                            {/* Header - fade in up */}
                            <div className="items-baseline justify-between gap-4 mb-4 sm:mb-5 flex-wrap reveal-up" style={{ animationDelay: '0.1s' }}>
                                <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight m-0"
                                >
                                    Featured
                                </h2>
                                <p className="text-md ">
                                    As seen on major news outlets
                                </p>
                            </div>

                            {/* Carousel - fade in up */}
                            <div className="relative overflow-hidden py-1 reveal-up" style={{ animationDelay: '0.2s' }}>
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
                </ScrollReveal>
            </section >
        </div >
    );
}
