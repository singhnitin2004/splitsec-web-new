"use client";

import { useState } from "react";

export default function HowItWorksPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [playingVideo, setPlayingVideo] = useState<'viet' | 'alexa' | null>(null);

    const faqs = [
        {
            question: "Does it work without WiFi or cellular?",
            answer: "Yes for detection. Alerts and routing require a network connection, but the AI analysis can run on device."
        },
        {
            question: "Do you record audio?",
            answer: "No audio is stored by default. The goal is privacy first situational awareness."
        },
        {
            question: "How do you reduce false positives?",
            answer: "On device AI analysis plus confirmation logic across devices helps separate look alike sounds from likely gunshots."
        }
    ];

    return (
        <div className="w-full min-h-screen" style={{
            background: 'radial-gradient(1200px 600px at 70% 15%, rgba(80,140,255,0.14), transparent 60%), radial-gradient(900px 550px at 20% 80%, rgba(255,80,170,0.10), transparent 60%), #0B1020'
        }}>
            {/* Hero Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pt-16 sm:pt-28 pb-8 sm:pb-12">
                <div className="w-full max-w-[1800px] mx-auto">
                    <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.12em] px-3 py-1.5 sm:py-2 rounded-full border backdrop-blur-[10px] font-medium"
                        style={{
                            borderColor: 'rgba(233,236,248,0.14)',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'rgba(233,236,248,0.78)'
                        }}>
                        How it works
                    </span>
                    <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-[760] mt-3.5 mb-2.5" style={{ letterSpacing: '-0.015em', color: '#E9ECF8' }}>
                        Fast clarity when seconds matter
                    </h1>
                    <p className="text-base sm:text-lg leading-[1.55] max-w-[68ch] m-0" style={{ color: 'rgba(233,236,248,0.72)' }}>
                        SplitSec listens for gunshot like impulses, runs AI analysis on device with no WiFi or cellular needed, then confirms and routes alerts with clear context.
                    </p>
                </div>
            </section>

            {/* Main Content Panel */}
            <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24  pb-8 sm:pb-12">
                <div className="w-full max-w-[1800px] mx-auto">
                    <div className="rounded-2xl overflow-hidden border shadow-[0_22px_70px_rgba(7,10,18,0.18)]"
                        style={{
                            background: `
                                radial-gradient(900px 420px at 70% 20%, rgba(0,109,255,0.18), transparent 60%),
                                radial-gradient(820px 420px at 25% 85%, rgba(255,63,166,0.14), transparent 62%),
                                linear-gradient(135deg, rgba(18,18,20,0.96), rgba(10,14,26,0.96))
                            `,
                            borderColor: 'rgba(245,248,255,0.10)'
                        }}>
                        <div className="p-2 sm:p-5">
                            {/* Steps */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                                {/* Step 1 */}
                                <div className="relative rounded-2xl border overflow-hidden p-3.5 sm:p-4"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        borderColor: 'rgba(255,255,255,0.12)'
                                    }}>
                                    <div className="absolute inset-[-60%] pointer-events-none"
                                        style={{
                                            background: `
                                                radial-gradient(circle at 32% 22%, rgba(0,109,255,0.16), transparent 58%),
                                                radial-gradient(circle at 78% 70%, rgba(0,109,255,0.10), transparent 60%)
                                            `,
                                            transform: 'rotate(6deg)'
                                        }} />
                                    <div className="relative z-10">
                                        <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center font-bold text-white mb-2.5 shadow-[0_10px_22px_rgba(0,0,0,0.22)]"
                                            style={{ background: 'rgba(0,109,255,0.95)' }}>
                                            1
                                        </div>
                                        <h3 className="text-base sm:text-lg font-[760] mb-1.5 m-0" style={{ color: 'rgba(245,248,255,0.96)', letterSpacing: '-0.01em' }}>
                                            Listen
                                        </h3>
                                        <p className="text-[13px] sm:text-sm leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                            Phones monitor continuously in the background for sharp, gunshot like acoustic signatures.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative rounded-2xl border overflow-hidden p-3.5 sm:p-4"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        borderColor: 'rgba(255,255,255,0.12)'
                                    }}>
                                    <div className="absolute inset-[-60%] pointer-events-none"
                                        style={{
                                            background: `
                                                radial-gradient(circle at 32% 22%, rgba(0,109,255,0.16), transparent 58%),
                                                radial-gradient(circle at 78% 70%, rgba(0,109,255,0.10), transparent 60%)
                                            `,
                                            transform: 'rotate(6deg)'
                                        }} />
                                    <div className="relative z-10">
                                        <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center font-bold text-white mb-2.5 shadow-[0_10px_22px_rgba(0,0,0,0.22)]"
                                            style={{ background: 'rgba(0,109,255,0.95)' }}>
                                            2
                                        </div>
                                        <h3 className="text-base sm:text-lg font-[760] mb-1.5 m-0" style={{ color: 'rgba(245,248,255,0.96)', letterSpacing: '-0.01em' }}>
                                            Analyze on device
                                        </h3>
                                        <p className="text-[13px] sm:text-sm leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                            AI quickly analyzes the sound on device. No WiFi or cellular needed.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative rounded-2xl border overflow-hidden p-3.5 sm:p-4 sm:col-span-2 lg:col-span-1"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        borderColor: 'rgba(255,255,255,0.12)'
                                    }}>
                                    <div className="absolute inset-[-60%] pointer-events-none"
                                        style={{
                                            background: `
                                                radial-gradient(circle at 32% 22%, rgba(0,109,255,0.16), transparent 58%),
                                                radial-gradient(circle at 78% 70%, rgba(0,109,255,0.10), transparent 60%)
                                            `,
                                            transform: 'rotate(6deg)'
                                        }} />
                                    <div className="relative z-10">
                                        <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center font-bold text-white mb-2.5 shadow-[0_10px_22px_rgba(0,0,0,0.22)]"
                                            style={{ background: 'rgba(0,109,255,0.95)' }}>
                                            3
                                        </div>
                                        <h3 className="text-base sm:text-lg font-[760] mb-1.5 m-0" style={{ color: 'rgba(245,248,255,0.96)', letterSpacing: '-0.01em' }}>
                                            Confirm and notify
                                        </h3>
                                        <p className="text-[13px] sm:text-sm leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                            Confirm across nearby devices, then route alerts to the right people with clear context.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Two Column Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 mt-4 sm:mt-5">
                                {/* Key Design Principles */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    <div className="rounded-2xl border p-4"
                                        style={{
                                            background: 'rgba(255,255,255,0.06)',
                                            borderColor: 'rgba(255,255,255,0.12)'
                                        }}>
                                        <h3 className="text-[15px] font-[760] mb-1.5 m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            Privacy first
                                        </h3>
                                        <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                            No audio stored or shared by default. Detection runs on device.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border p-4"
                                        style={{
                                            background: 'rgba(255,255,255,0.06)',
                                            borderColor: 'rgba(255,255,255,0.12)'
                                        }}>
                                        <h3 className="text-[15px] font-[760] mb-1.5 m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            Low friction
                                        </h3>
                                        <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                            Simple setup. Silent background monitoring. Clear actions when it matters.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border p-4 sm:col-span-2 lg:col-span-1"
                                        style={{
                                            background: 'rgba(255,255,255,0.06)',
                                            borderColor: 'rgba(255,255,255,0.12)'
                                        }}>
                                        <h3 className="text-[15px] font-[760] mb-1.5 m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            Fast routing
                                        </h3>
                                        <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                            Send alerts to staff, security, and responders with minimal delay.
                                        </p>
                                    </div>
                                </div>

                                {/* What You Can Show */}
                                <div className="rounded-2xl border p-4"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        borderColor: 'rgba(255,255,255,0.12)'
                                    }}>
                                    <h3 className="text-[15px] font-[760] mb-1.5 m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                        What you can show here
                                    </h3>
                                    <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                        Timeline of detection to alert, device confirmation indicator, and an example alert screen. This page can also link to a short technical explainer for evaluators.
                                    </p>
                                </div>
                            </div>

                            {/* Video Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3.5 sm:mt-4">
                                {/* Video 1 - Viet (YouTube) */}
                                <div className="rounded-2xl border p-3.5"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        borderColor: 'rgba(255,255,255,0.12)'
                                    }}>
                                    <div
                                        className="rounded-xl sm:rounded-2xl w-full border mb-2.5 relative overflow-hidden group bg-black"
                                        style={{
                                            borderColor: 'rgba(29,29,31,0.10)',
                                            aspectRatio: '16/9',
                                            minHeight: '200px'
                                        }}
                                    >
                                        {playingVideo === 'viet' ? (
                                            <iframe
                                                className="absolute inset-0 w-full h-full"
                                                src="https://www.youtube.com/embed/FnESLsYEtys?autoplay=1&start=11"
                                                title="Viet explains the model"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => setPlayingVideo('viet')}
                                                className="absolute inset-0 w-full h-full cursor-pointer p-0 border-0 bg-transparent"
                                            >
                                                <span className="absolute inset-0 block">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src="https://i.ytimg.com/vi/FnESLsYEtys/hqdefault.jpg"
                                                        alt="Viet explains the model - The Technology Behind SplitSec AI"
                                                        className="block w-full h-full object-cover"
                                                        loading="eager"
                                                        onError={(e) => {
                                                            const el = e.currentTarget;
                                                            if (el.src.includes('hqdefault')) {
                                                                el.src = 'https://img.youtube.com/vi/FnESLsYEtys/sddefault.jpg';
                                                            } else if (el.src.includes('sddefault')) {
                                                                el.src = 'https://img.youtube.com/vi/FnESLsYEtys/mqdefault.jpg';
                                                            }
                                                        }}
                                                    />
                                                </span>
                                                <span className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
                                                <span className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                                    <span
                                                        className="w-[52px] sm:w-[62px] h-[52px] sm:h-[62px] rounded-full flex items-center justify-center border shadow-[0_16px_42px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300"
                                                        style={{
                                                            background: 'rgba(255,255,255,0.92)',
                                                            borderColor: 'rgba(29,29,31,0.12)'
                                                        }}
                                                    >
                                                        <svg className="w-5 sm:w-[22px] h-5 sm:h-[22px] translate-x-px" viewBox="0 0 24 24" fill="rgba(0,109,255,0.95)">
                                                            <path d="M9 7l10 5-10 5V7z" />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </button>
                                        )}
                                    </div>
                                    <h3 className="text-[15px] font-[760] mb-1 m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                        Viet explains the model
                                    </h3>
                                    <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                        Short, technical walk through for evaluators. Best placed here after the 3 steps.
                                    </p>
                                </div>

                                {/* Video 2 - Alexa (Local Video) */}
                                <div className="rounded-2xl border p-3.5"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        borderColor: 'rgba(255,255,255,0.12)'
                                    }}>
                                    <div
                                        className="rounded-xl sm:rounded-2xl w-full border mb-2.5 relative overflow-hidden group bg-black"
                                        style={{
                                            borderColor: 'rgba(29,29,31,0.10)',
                                            aspectRatio: '16/9',
                                            minHeight: '200px'
                                        }}
                                    >
                                        {playingVideo === 'alexa' ? (
                                            <video
                                                className="absolute inset-0 w-full h-full object-cover"
                                                controls
                                                autoPlay
                                                playsInline
                                            >
                                                <source src="/home/Untitled design (1).mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => setPlayingVideo('alexa')}
                                                className="absolute inset-0 w-full h-full cursor-pointer p-0 border-0 bg-transparent"
                                            >
                                                <span className="absolute inset-0 block">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src="/home/alex-story-thumbnail.png"
                                                        alt="Alexa's story thumbnail"
                                                        className="block w-full h-full object-cover"
                                                        loading="eager"
                                                    />
                                                </span>
                                                <span className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
                                                <span className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                                    <span
                                                        className="w-[52px] sm:w-[62px] h-[52px] sm:h-[62px] rounded-full flex items-center justify-center border shadow-[0_16px_42px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300"
                                                        style={{
                                                            background: 'rgba(255,255,255,0.92)',
                                                            borderColor: 'rgba(29,29,31,0.12)'
                                                        }}
                                                    >
                                                        <svg className="w-5 sm:w-[22px] h-5 sm:h-[22px] translate-x-px" viewBox="0 0 24 24" fill="rgba(0,109,255,0.95)">
                                                            <path d="M9 7l10 5-10 5V7z" />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </button>
                                        )}
                                    </div>
                                    <h3 className="text-[15px] font-[760] mb-1 m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                        Alexa&apos;s story
                                    </h3>
                                    <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                        Human impact and urgency. Works well here or on the home page as social proof.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Row */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 sm:mt-5 pt-3.5 border-t"
                                style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                                <p className="text-sm m-0 text-center sm:text-left" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                    Want a tailored walkthrough for your site, event, or campus?
                                </p>
                                <a href="/schedule-demo" className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border font-[650] text-sm whitespace-nowrap shadow-[0_14px_34px_rgba(0,109,255,0.16)] hover:opacity-90 transition-opacity"
                                    style={{
                                        borderColor: 'rgba(0,109,255,0.85)',
                                        background: 'rgba(0,109,255,0.12)',
                                        color: 'rgba(245,248,255,0.96)'
                                    }}>
                                    Book a demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pb-8 sm:pb-12">
                <div className="w-full max-w-[1800px] mx-auto">
                    <div className="rounded-2xl overflow-hidden border shadow-[0_22px_70px_rgba(7,10,18,0.18)]"
                        style={{
                            background: `
                                radial-gradient(900px 420px at 70% 20%, rgba(0,109,255,0.18), transparent 60%),
                                radial-gradient(820px 420px at 25% 85%, rgba(255,63,166,0.14), transparent 62%),
                                linear-gradient(135deg, rgba(18,18,20,0.96), rgba(10,14,26,0.96))
                            `,
                            borderColor: 'rgba(245,248,255,0.10)'
                        }}>
                        <div className="p-5">
                            <h2 className="text-xl sm:text-2xl font-[760] mb-3 m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                FAQ
                            </h2>

                            <div className="space-y-2.5">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                setOpenFaq(openFaq === index ? null : index);
                                            }
                                        }}
                                        className="rounded-2xl border p-3.5 sm:p-4 cursor-pointer"
                                        style={{
                                            background: 'rgba(255,255,255,0.06)',
                                            borderColor: 'rgba(255,255,255,0.12)'
                                        }}
                                    >
                                        <div className="w-full text-left flex items-center justify-between gap-3">
                                            <span className="font-[650] text-sm sm:text-base" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                                {faq.question}
                                            </span>
                                            <svg
                                                className={`w-5 h-5 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                                                style={{ color: 'rgba(245,248,255,0.74)' }}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                        {openFaq === index && (
                                            <p className="mt-2.5 text-[13px] sm:text-[13.5px] leading-[1.55] m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                                {faq.answer}
                                            </p>
                                        )}
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
