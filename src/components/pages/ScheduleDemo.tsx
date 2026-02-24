'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Shield, Users, Clock, CheckCircle, Video, Calendar, ChevronDown } from "lucide-react";

const ScheduleDemo = () => {
    const features = [
        {
            icon: Video,
            title: "How it works",
            description: "Gunshot detection on standard smartphones, with no additional hardware required.",
            color: "blue" as const
        },
        {
            icon: Shield,
            title: "Privacy-first by design",
            description: "On-device machine learning with no raw audio recording or cloud upload.",
            color: "pink" as const
        },
        {
            icon: Clock,
            title: "Real-world pilots",
            description: "What a 60–90 day pilot can look like, if and when it makes sense.",
            color: "blue" as const
        }
    ];

    const targetAudience = [
        "School and district administrators",
        "College and university leaders",
        "Campus safety and security teams",
        "Security organizations and partners",
        "Public-sector safety teams"
    ];

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes demoCardGlow {
                0%, 100% { box-shadow: 0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08), 0 20px 50px rgba(0,109,255,0.18), 0 0 60px rgba(0,109,255,0.12); }
                50% { box-shadow: 0 28px 70px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1), 0 24px 56px rgba(0,109,255,0.28), 0 0 80px rgba(0,109,255,0.18); }
            }
            @keyframes demoCardEntrance {
                0% { opacity: 0; transform: translateY(20px) scale(0.98); }
                100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes stripPulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.92; }
            }
            .schedule-demo-card-glow {
                animation: demoCardEntrance 0.6s ease-out forwards, demoCardGlow 3.5s ease-in-out 0.7s infinite;
            }
            .schedule-demo-strip {
                animation: stripPulse 4s ease-in-out infinite;
            }
        `;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    return (
        <div className="w-full min-h-screen">
            {/* Section 1: Hero — same layout as Home, demo card is the star */}
            <section className="relative w-full min-h-[calc(100vh-120px)] sm:min-h-[min(100vh,880px)] pt-20 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 flex items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-black overflow-x-hidden">
                <div className="w-full max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start lg:items-center">

                        {/* Left: Hero text — first on small screens, left column on large; clear spacing */}
                        <div className="order-1 lg:order-1 w-full min-w-0 flex flex-col justify-center text-left">
                            <div className="max-w-xl mx-0 lg:mr-auto">
                                {/* Badge */}
                                <div className="flex items-center gap-2.5 mb-6 sm:mb-7">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                        style={{
                                            background: 'linear-gradient(135deg, #006dff 0%, #0052cc 100%)',
                                            boxShadow: '0 12px 32px rgba(0,109,255,0.35)',
                                            border: '1px solid rgba(255,255,255,0.15)'
                                        }}
                                    >
                                        <Calendar className="h-5 w-5 text-white" />
                                    </div>
                                    <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest sm:tracking-[0.18em] m-0" style={{ color: 'rgba(243,246,255,0.62)' }}>
                                        Schedule a demo
                                    </p>
                                </div>
                                {/* Main heading */}
                                <h1 className="text-[clamp(26px,5.5vw,64px)] sm:text-[clamp(32px,5vw,64px)] lg:text-[clamp(40px,4.5vw,64px)] font-bold leading-[1.1] sm:leading-[1.06] tracking-[-0.04em] m-0 mb-5 sm:mb-6 max-w-[18ch]"
                                    style={{ color: '#E9ECF8' }}
                                >
                                    See <span style={{ color: '#006dff' }}>SplitSec AI</span> in action
                                </h1>
                                {/* Description */}
                                <p className="text-sm sm:text-base md:text-lg leading-normal sm:leading-[1.45] m-0 mb-6 sm:mb-8 max-w-[52ch]"
                                    style={{ color: 'rgba(243,246,248,0.80)' }}
                                >
                                    A short, exploratory walkthrough of our privacy-first, smartphone-based gunshot detection—tailored to your setting and questions.
                                </p>
                                {/* Bullet list */}
                                <ul className="space-y-3.5 sm:space-y-4 list-none m-0 p-0 mb-6 sm:mb-8">
                                    {["15–30 min exploratory call", "Live walkthrough of the system", "Answers tailored to your needs"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2.5">
                                            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#006dff', boxShadow: '0 0 8px rgba(0,109,255,0.5)' }} />
                                            <span className="text-sm sm:text-base font-medium" style={{ color: 'rgba(243,246,255,0.88)' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {/* CTA link */}
                                <Link
                                    href="/industries"
                                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:opacity-90 w-fit"
                                    style={{ color: 'rgba(243,246,255,0.72)' }}
                                >
                                    Explore industry playbooks <span className="opacity-80">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right: Book a Demo card — below left text on small screens, right column on large */}
                        <div className="order-2 lg:order-2 w-full min-w-0 flex items-center justify-center lg:justify-end">
                            <div
                                id="schedule"
                                className="schedule-demo-card-glow rounded-2xl sm:rounded-[24px] overflow-hidden border scroll-mt-28 w-full max-w-[640px] lg:max-w-none"
                                style={{
                                    background: 'rgba(255,255,255,0.98)',
                                    borderColor: 'rgba(0,109,255,0.35)',
                                    boxShadow: '0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08), 0 20px 50px rgba(0,109,255,0.2), 0 0 60px rgba(0,109,255,0.12)',
                                    minHeight: '520px'
                                }}
                            >
                                <div className="rounded-2xl sm:rounded-[24px] overflow-hidden border border-transparent transition-all duration-300 hover:border-[rgba(0,109,255,0.25)]" style={{ minHeight: '520px' }}>
                                    <div
                                        className="px-4 sm:px-5 py-4 sm:py-5 border-b"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(0,109,255,0.12) 0%, rgba(252,69,166,0.05) 100%)',
                                            borderColor: 'rgba(0,109,255,0.2)'
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                style={{
                                                    background: 'linear-gradient(135deg, #006dff 0%, #0052cc 100%)',
                                                    boxShadow: '0 8px 24px rgba(0,109,255,0.4)'
                                                }}
                                            >
                                                <Calendar className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl sm:text-2xl font-bold m-0 leading-tight" style={{ color: '#1D1D1F' }}>
                                                    Pick your time
                                                </h2>
                                                <p className="text-sm m-0 mt-0.5" style={{ color: 'rgba(29,29,31,0.65)' }}>
                                                    15–30 min • Exploratory call
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="w-full overflow-hidden"
                                        style={{ height: '580px', minHeight: '420px' }}
                                    >
                                        <iframe
                                            title="Schedule a demo with SplitSec AI"
                                            src="https://calendly.com/demo-splitsecai/30min"
                                            style={{ width: '100%', height: '100%', border: '0', display: 'block' }}
                                            loading="eager"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/4 -right-20 w-[350px] h-[350px] rounded-full pointer-events-none -z-1 opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(0,109,255,0.5) 0%, transparent 70%)', filter: 'blur(80px)' }}
                    aria-hidden
                />
                <div className="absolute bottom-1/4 -left-16 w-[280px] h-[280px] rounded-full pointer-events-none -z-1 opacity-18"
                    style={{ background: 'radial-gradient(circle, rgba(252,69,166,0.45) 0%, transparent 70%)', filter: 'blur(70px)' }}
                    aria-hidden
                />
            </section>

            {/* Section 2: Who this is for + Why schedule - White */}
            <section className="w-full py-10 sm:py-12 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Who this is for */}
                        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white"
                            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                            <div className="p-5 sm:p-6 border-b border-gray-100"
                                style={{ background: 'rgba(0,109,255,0.04)' }}>
                                <div className="flex items-center gap-2.5 mb-3">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                        style={{ background: '#006dff' }}>
                                        <Users className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold m-0" style={{ color: '#1D1D1F' }}>Who this is for</h3>
                                </div>
                                <p className="text-sm sm:text-base leading-relaxed m-0"
                                    style={{ color: 'rgba(29,29,31,0.65)' }}>
                                    Demos are exploratory and focused on mutual fit. We see them as an opportunity to understand the specific needs of:
                                </p>
                            </div>
                            <div className="p-5 sm:p-6">
                                <ul className="space-y-3">
                                    {targetAudience.map((audience, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#006dff' }} />
                                            <span className="text-[15px] sm:text-base font-medium" style={{ color: '#1D1D1F' }}>{audience}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Why schedule a demo */}
                        <div className="rounded-2xl p-5 sm:p-6 border border-gray-200 bg-white"
                            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                            <h3 className="text-lg font-bold mb-4 m-0" style={{ color: '#1D1D1F' }}>Why schedule a demo?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ background: '#006dff' }} />
                                    <span className="text-[15px]" style={{ color: 'rgba(29,29,31,0.75)' }}>See our gunshot detection system in action</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ background: '#006dff' }} />
                                    <span className="text-[15px]" style={{ color: 'rgba(29,29,31,0.75)' }}>Discuss your specific security needs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ background: '#006dff' }} />
                                    <span className="text-[15px]" style={{ color: 'rgba(29,29,31,0.75)' }}>Learn about pilot program options</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ background: '#006dff' }} />
                                    <span className="text-[15px]" style={{ color: 'rgba(29,29,31,0.75)' }}>Get answers to your questions</span>
                                </li>
                            </ul>
                            <a
                                href="#schedule"
                                className="inline-flex items-center justify-center gap-2 mt-6 min-h-[44px] px-5 py-3 rounded-full font-black text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_22px_54px_rgba(0,109,255,0.32)] active:scale-[0.98]"
                                style={{
                                    background: '#006dff',
                                    color: '#fff',
                                    border: '1px solid rgba(0,109,255,0.30)',
                                    boxShadow: '0 16px 35px rgba(0,109,255,0.20)'
                                }}
                            >
                                Pick a time <span className="ml-1">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Feature Cards - Black (Industries pattern) */}
            <section className="w-full py-10 sm:py-12 px-4 sm:px-6 lg:px-8 xl:px-12 bg-black">
                <div className="max-w-[1800px] mx-auto">
                    <div className="mb-6 sm:mb-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight m-0"
                            style={{ color: '#E9ECF8' }}>
                            What to expect
                        </h2>
                        <p className="text-sm sm:text-base m-0"
                            style={{ color: 'rgba(233,236,248,0.65)' }}>
                            A focused overview of our system, tailored to your environment and questions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {features.map((feature, index) => {
                            const isBlue = feature.color === 'blue';
                            const accentColor = isBlue ? '#006dff' : '#FC45A6';
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className="rounded-2xl p-6 border transition-all duration-300 hover:border-opacity-60"
                                    style={{
                                        background: 'rgba(11,16,32,0.85)',
                                        borderColor: isBlue ? 'rgba(0,109,255,0.25)' : 'rgba(252,69,166,0.25)',
                                        boxShadow: isBlue ? '0 12px 40px rgba(0,109,255,0.08)' : '0 12px 40px rgba(252,69,166,0.08)'
                                    }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                        style={{ background: accentColor }}
                                    >
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 m-0" style={{ color: '#E9ECF8' }}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(233,236,248,0.65)' }}>
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScheduleDemo;
