"use client";

import { useState } from "react";

export default function GetInvolvedPage() {
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    const faqData = [
        {
            id: "advisor-time",
            question: "How much time does an advisor commit?",
            answer: "Typically a short monthly check in plus feedback on a few key decisions each quarter."
        },
        {
            id: "ambassador-role",
            question: "What does a campus ambassador do?",
            answer: "Coordinate a small pilot group, collect structured feedback, and help connect with campus stakeholders."
        },
        {
            id: "pilots",
            question: "How do pilots work?",
            answer: "We align on the site layout, coverage goals, and success metrics, then run a short evaluation period with clear reporting."
        }
    ];

    return (
        <div className="w-full min-h-screen" style={{
            background: 'radial-gradient(1200px 600px at 70% 15%, rgba(80,140,255,0.14), transparent 60%), radial-gradient(900px 550px at 20% 80%, rgba(255,80,170,0.10), transparent 60%), #0B1020'
        }}>
            {/* Page Hero */}
            <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pt-16 sm:pt-28 pb-6">
                <div className="w-full max-w-[1800px] mx-auto">
                    <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.12em] px-3 py-1.5 sm:py-2 rounded-full border backdrop-blur-[10px] font-medium"
                        style={{
                            borderColor: 'rgba(233,236,248,0.14)',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'rgba(233,236,248,0.78)'
                        }}>
                        Get involved
                    </span>
                    <h1 className="text-[34px] sm:text-[44px] leading-[1.08] font-[760] mt-3.5 mb-2.5" style={{ letterSpacing: '-0.015em', color: '#E9ECF8' }}>
                        Help shape the product and the mission
                    </h1>
                    <p className="text-[15px] sm:text-base lg:text-lg leading-[1.55] max-w-[68ch] m-0" style={{ color: 'rgba(233,236,248,0.72)' }}>
                        If you run safety programs, support campuses, organize events, or want to help validate the system, there are a few clear ways to engage. Pick one that fits your role and time.
                    </p>
                </div>
            </section>

            {/* Main Content Panel */}
            <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pb-6 sm:pb-14">
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
                        <div className="p-4 sm:p-6 lg:p-7">
                            {/* Involve Grid - 3 Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4">
                                {/* Advisory Council Card */}
                                <div className="relative rounded-2xl border overflow-hidden p-4 sm:p-5 flex flex-col gap-2.5"
                                    style={{
                                        background: `
                                            radial-gradient(520px 240px at 18% 18%, rgba(0,109,255,0.14), transparent 55%),
                                            radial-gradient(520px 240px at 86% 92%, rgba(255,63,166,0.12), transparent 55%),
                                            linear-gradient(135deg, rgba(26,26,26,0.96), rgba(10,14,26,0.96))
                                        `,
                                        borderColor: 'rgba(255,255,255,0.14)'
                                    }}>
                                    <div className="absolute inset-0 pointer-events-none opacity-85"
                                        style={{
                                            background: `
                                                radial-gradient(520px 240px at 20% 15%, rgba(0,109,255,0.12), transparent 55%),
                                                radial-gradient(520px 240px at 85% 90%, rgba(255,63,166,0.08), transparent 55%)
                                            `
                                        }} />
                                    <div className="relative z-10 flex flex-col gap-2.5 flex-1">
                                        <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full w-fit"
                                            style={{
                                                color: 'rgba(245,248,255,0.70)',
                                                background: 'rgba(255,255,255,0.08)',
                                                border: '1px solid rgba(255,255,255,0.16)'
                                            }}>
                                            Advisory council
                                        </span>
                                        <h3 className="text-base sm:text-lg font-[760] m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            Community Safety Advisory Council
                                        </h3>
                                        <p className="text-[13px] sm:text-[13.5px] leading-normal m-0 flex-1" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                            Share real world needs and feedback. Help keep the product grounded and responsible.
                                        </p>
                                        <a href="#advisory" className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border font-[650] text-sm mt-2 shadow-[0_14px_34px_rgba(0,109,255,0.16)] hover:opacity-90 transition-opacity"
                                            style={{
                                                borderColor: 'rgba(0,109,255,0.85)',
                                                color: 'rgba(245,248,255,0.96)',
                                                background: 'rgba(0,109,255,0.12)'
                                            }}>
                                            Apply
                                        </a>
                                    </div>
                                </div>

                                {/* Campus Ambassador Card */}
                                <div className="relative rounded-2xl border overflow-hidden p-4 sm:p-5 flex flex-col gap-2.5"
                                    style={{
                                        background: `
                                            radial-gradient(520px 240px at 18% 18%, rgba(0,109,255,0.14), transparent 55%),
                                            radial-gradient(520px 240px at 86% 92%, rgba(255,63,166,0.12), transparent 55%),
                                            linear-gradient(135deg, rgba(26,26,26,0.96), rgba(10,14,26,0.96))
                                        `,
                                        borderColor: 'rgba(255,255,255,0.14)'
                                    }}>
                                    <div className="absolute inset-0 pointer-events-none opacity-85"
                                        style={{
                                            background: `
                                                radial-gradient(520px 240px at 20% 15%, rgba(0,109,255,0.12), transparent 55%),
                                                radial-gradient(520px 240px at 85% 90%, rgba(255,63,166,0.08), transparent 55%)
                                            `
                                        }} />
                                    <div className="relative z-10 flex flex-col gap-2.5 flex-1">
                                        <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full w-fit"
                                            style={{
                                                color: 'rgba(245,248,255,0.70)',
                                                background: 'rgba(255,255,255,0.08)',
                                                border: '1px solid rgba(255,255,255,0.16)'
                                            }}>
                                            Campus program
                                        </span>
                                        <h3 className="text-base sm:text-lg font-[760] m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            Campus ambassador
                                        </h3>
                                        <p className="text-[13px] sm:text-[13.5px] leading-normal m-0 flex-1" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                            Help pilot awareness and adoption on campus. Great for student leaders.
                                        </p>
                                        <a href="#ambassador" className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border font-[650] text-sm mt-2 shadow-[0_14px_34px_rgba(0,109,255,0.16)] hover:opacity-90 transition-opacity"
                                            style={{
                                                borderColor: 'rgba(0,109,255,0.85)',
                                                color: 'rgba(245,248,255,0.96)',
                                                background: 'rgba(0,109,255,0.12)'
                                            }}>
                                            Join
                                        </a>
                                    </div>
                                </div>

                                {/* Stay in Touch Card */}
                                <div className="relative rounded-2xl border overflow-hidden p-4 sm:p-5 flex flex-col gap-2.5 md:col-span-2 lg:col-span-1"
                                    style={{
                                        background: `
                                            radial-gradient(520px 240px at 18% 18%, rgba(0,109,255,0.14), transparent 55%),
                                            radial-gradient(520px 240px at 86% 92%, rgba(255,63,166,0.12), transparent 55%),
                                            linear-gradient(135deg, rgba(26,26,26,0.96), rgba(10,14,26,0.96))
                                        `,
                                        borderColor: 'rgba(255,255,255,0.14)'
                                    }}>
                                    <div className="absolute inset-0 pointer-events-none opacity-85"
                                        style={{
                                            background: `
                                                radial-gradient(520px 240px at 20% 15%, rgba(0,109,255,0.12), transparent 55%),
                                                radial-gradient(520px 240px at 85% 90%, rgba(255,63,166,0.08), transparent 55%)
                                            `
                                        }} />
                                    <div className="relative z-10 flex flex-col gap-2.5 flex-1">
                                        <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full w-fit"
                                            style={{
                                                color: 'rgba(245,248,255,0.70)',
                                                background: 'rgba(255,255,255,0.08)',
                                                border: '1px solid rgba(255,255,255,0.16)'
                                            }}>
                                            Updates
                                        </span>
                                        <h3 className="text-base sm:text-lg font-[760] m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            Stay in touch
                                        </h3>
                                        <p className="text-[13px] sm:text-[13.5px] leading-normal m-0 flex-1" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                            Get product updates, pilot openings, and early access announcements.
                                        </p>
                                        <a href="#stay" className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border font-[650] text-sm mt-2 shadow-[0_14px_34px_rgba(0,109,255,0.16)] hover:opacity-90 transition-opacity"
                                            style={{
                                                borderColor: 'rgba(0,109,255,0.85)',
                                                color: 'rgba(245,248,255,0.96)',
                                                background: 'rgba(0,109,255,0.12)'
                                            }}>
                                            Sign up
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Info Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4 mt-4 sm:mt-5">
                                {/* Pilot Partner Card */}
                                <div className="rounded-2xl border p-4"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        borderColor: 'rgba(255,255,255,0.12)'
                                    }}>
                                    <h3 className="text-[15px] font-[760] mb-1.5 m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                        Pilot partner
                                    </h3>
                                    <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                        Schools, security firms, venues, and healthcare groups can request a structured pilot and evaluation plan.
                                    </p>
                                </div>

                                {/* Research Card */}
                                <div className="rounded-2xl border p-4"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        borderColor: 'rgba(255,255,255,0.12)'
                                    }}>
                                    <h3 className="text-[15px] font-[760] mb-1.5 m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                        Research and validation
                                    </h3>
                                    <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                        Help evaluate detection performance in controlled drills and real environments.
                                    </p>
                                </div>

                                {/* Press Card */}
                                <div className="rounded-2xl border p-4 md:col-span-3 lg:col-span-1"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        borderColor: 'rgba(255,255,255,0.12)'
                                    }}>
                                    <h3 className="text-[15px] font-[760] mb-1.5 m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                        Press and partnerships
                                    </h3>
                                    <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                        For media inquiries or collaboration proposals, start with a demo request and add context.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Row */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t"
                                style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                                <p className="text-sm sm:text-[14px] m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                    Prefer a direct conversation?
                                </p>
                                <a href="/schedule-demo" className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border font-[650] text-sm whitespace-nowrap shadow-[0_14px_34px_rgba(0,109,255,0.16)] hover:opacity-90 transition-opacity"
                                    style={{
                                        borderColor: 'rgba(0,109,255,0.85)',
                                        color: 'rgba(245,248,255,0.96)',
                                        background: 'rgba(0,109,255,0.12)'
                                    }}>
                                    Book a demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advisory Council: 2 Cards Side by Side */}
            <section id="advisory" className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pb-6 sm:pb-14 scroll-mt-24">
                <div className="w-full max-w-[1800px] mx-auto">
                    <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[760] m-0 mb-2" style={{ color: 'rgba(245,248,255,0.96)', letterSpacing: '-0.01em' }}>
                        Advisory council
                    </h2>
                    <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.55] m-0 mb-2 " style={{ color: 'rgba(245,248,255,0.72)' }}>
                        A small group that provides feedback on safety workflows, messaging, and deployment realities.
                    </p>

                    {/* 2 Cards: Process (left) + Form (right) */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
                        {/* LEFT CARD: How it works */}
                        <div className="flex-1 relative rounded-2xl border overflow-hidden p-5 sm:p-6"
                            style={{
                                background: `
                                    radial-gradient(520px 240px at 18% 18%, rgba(0,109,255,0.14), transparent 55%),
                                    radial-gradient(520px 240px at 86% 92%, rgba(255,63,166,0.12), transparent 55%),
                                    linear-gradient(135deg, rgba(26,26,26,0.96), rgba(10,14,26,0.96))
                                `,
                                borderColor: 'rgba(255,255,255,0.14)'
                            }}>
                            <div className="absolute inset-0 pointer-events-none opacity-85"
                                style={{
                                    background: `
                                        radial-gradient(520px 240px at 20% 15%, rgba(0,109,255,0.12), transparent 55%),
                                        radial-gradient(520px 240px at 85% 90%, rgba(255,63,166,0.08), transparent 55%)
                                    `
                                }} />
                            <div className="relative z-10">
                                <h3 className="text-lg sm:text-xl font-[760] m-0 mb-4" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                    How it works
                                </h3>
                                <ol className="space-y-4 list-none m-0 p-0 mb-5">
                                    <li className="flex gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-[700]" style={{ background: 'rgba(0,109,255,0.2)', color: 'rgba(245,248,255,0.96)' }}>1</span>
                                        <div>
                                            <span className="font-[650] text-sm sm:text-base" style={{ color: 'rgba(245,248,255,0.96)' }}>Fill the form</span>
                                            <p className="text-[13px] sm:text-[14px] leading-[1.5] m-0 mt-0.5" style={{ color: 'rgba(245,248,255,0.72)' }}>Share your name, email, LinkedIn, and a short note on why you want to advise.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-[700]" style={{ background: 'rgba(0,109,255,0.2)', color: 'rgba(245,248,255,0.96)' }}>2</span>
                                        <div>
                                            <span className="font-[650] text-sm sm:text-base" style={{ color: 'rgba(245,248,255,0.96)' }}>We review your application</span>
                                            <p className="text-[13px] sm:text-[14px] leading-[1.5] m-0 mt-0.5" style={{ color: 'rgba(245,248,255,0.72)' }}>Our team reviews each application for fit with safety programs and community impact.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-[700]" style={{ background: 'rgba(0,109,255,0.2)', color: 'rgba(245,248,255,0.96)' }}>3</span>
                                        <div>
                                            <span className="font-[650] text-sm sm:text-base" style={{ color: 'rgba(245,248,255,0.96)' }}>We reach out</span>
                                            <p className="text-[13px] sm:text-[14px] leading-[1.5] m-0 mt-0.5" style={{ color: 'rgba(245,248,255,0.72)' }}>You’ll hear from us within a few business days with next steps or a short intro call.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-[700]" style={{ background: 'rgba(0,109,255,0.2)', color: 'rgba(245,248,255,0.96)' }}>4</span>
                                        <div>
                                            <span className="font-[650] text-sm sm:text-base" style={{ color: 'rgba(245,248,255,0.96)' }}>Join the council</span>
                                            <p className="text-[13px] sm:text-[14px] leading-[1.5] m-0 mt-0.5" style={{ color: 'rgba(245,248,255,0.72)' }}>Accepted advisors join a small group and contribute via monthly check-ins and quarterly feedback.</p>
                                        </div>
                                    </li>
                                </ol>
                                <div className="rounded-xl border p-4" style={{ borderColor: 'rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.05)' }}>
                                    <h4 className="text-[15px] font-[760] m-0 mb-2.5" style={{ color: 'rgba(245,248,255,0.96)' }}>What you get</h4>
                                    <ul className="text-[13px] sm:text-[13.5px] leading-[1.55] m-0 pl-4 space-y-1.5" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                        <li>Short monthly check-ins with the team</li>
                                        <li>Influence product and policy decisions with real-world feedback</li>
                                        <li>Early access to features and pilot opportunities</li>
                                        <li>Recognition as a Community Safety Advisory Council member</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CARD: Form */}
                        <div className="flex-1 relative rounded-2xl border overflow-hidden p-5 sm:p-6"
                            style={{
                                background: `
                                    radial-gradient(520px 240px at 18% 18%, rgba(0,109,255,0.14), transparent 55%),
                                    radial-gradient(520px 240px at 86% 92%, rgba(255,63,166,0.12), transparent 55%),
                                    linear-gradient(135deg, rgba(26,26,26,0.96), rgba(10,14,26,0.96))
                                `,
                                borderColor: 'rgba(255,255,255,0.14)'
                            }}>
                            <div className="absolute inset-0 pointer-events-none opacity-85"
                                style={{
                                    background: `
                                        radial-gradient(520px 240px at 20% 15%, rgba(0,109,255,0.12), transparent 55%),
                                        radial-gradient(520px 240px at 85% 90%, rgba(255,63,166,0.08), transparent 55%)
                                    `
                                }} />
                            <div className="relative z-10">
                                <form className="space-y-4 sm:space-y-5 lg:space-y-6">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                                style={{ color: 'rgba(245,248,255,0.96)' }}>
                                                First name: <span style={{ color: 'rgba(218,37,41,0.95)' }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                placeholder="e.g., Maya"
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all"
                                                style={{
                                                    border: '1px solid rgba(245,248,255,0.20)',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    color: 'rgba(245,248,255,0.96)'
                                                }}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                                style={{ color: 'rgba(245,248,255,0.96)' }}>
                                                Last name: <span style={{ color: 'rgba(218,37,41,0.95)' }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                placeholder="e.g., Johnson"
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all"
                                                style={{
                                                    border: '1px solid rgba(245,248,255,0.20)',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    color: 'rgba(245,248,255,0.96)'
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                            style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            Email: <span style={{ color: 'rgba(218,37,41,0.95)' }}>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="e.g., maya@example.com"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all"
                                            style={{
                                                border: '1px solid rgba(245,248,255,0.20)',
                                                background: 'rgba(255,255,255,0.05)',
                                                color: 'rgba(245,248,255,0.96)'
                                            }}
                                            required
                                        />
                                    </div>

                                    {/* LinkedIn */}
                                    <div>
                                        <label htmlFor="linkedin" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                            style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            LinkedIn Profile:
                                        </label>
                                        <input
                                            type="url"
                                            id="linkedin"
                                            placeholder="https://www.linkedin.com/in/yourname"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all"
                                            style={{
                                                border: '1px solid rgba(245,248,255,0.20)',
                                                background: 'rgba(255,255,255,0.05)',
                                                color: 'rgba(245,248,255,0.96)'
                                            }}
                                        />
                                        <p className="text-xs sm:text-sm mt-1" style={{ color: 'rgba(245,248,255,0.55)' }}>
                                            Optional: Help us learn more about your background
                                        </p>
                                    </div>

                                    {/* Motivation */}
                                    <div>
                                        <label htmlFor="motivation" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                            style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            What motivated you to want to advise with SplitSec AI?
                                        </label>
                                        <textarea
                                            id="motivation"
                                            rows={3}
                                            placeholder="Tell us about your passion for community safety..."
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all resize-none"
                                            style={{
                                                border: '1px solid rgba(245,248,255,0.20)',
                                                background: 'rgba(255,255,255,0.05)',
                                                color: 'rgba(245,248,255,0.96)'
                                            }}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-1 sm:pt-2">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border font-[650] text-sm shadow-[0_14px_34px_rgba(0,109,255,0.16)] hover:opacity-90 transition-opacity"
                                            style={{
                                                borderColor: 'rgba(0,109,255,0.85)',
                                                color: 'rgba(245,248,255,0.96)',
                                                background: 'rgba(0,109,255,0.12)'
                                            }}>
                                            Submit
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Ambassador: 2 Cards Side by Side */}
            <section id="ambassador" className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pb-6 sm:pb-14 scroll-mt-24">
                <div className="w-full max-w-[1800px] mx-auto">
                    <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[760] m-0 mb-2" style={{ color: 'rgba(245,248,255,0.96)', letterSpacing: '-0.01em' }}>
                        Campus ambassador
                    </h2>
                    <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.55] m-0 mb-2" style={{ color: 'rgba(245,248,255,0.72)' }}>
                        Students help coordinate outreach and structured feedback during pilots.
                    </p>

                    {/* 2 Cards: Process (left) + Form (right) */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
                        {/* LEFT CARD: How it works */}
                        <div className="flex-1 relative rounded-2xl border overflow-hidden p-5 sm:p-6"
                            style={{
                                background: `
                                    radial-gradient(520px 240px at 18% 18%, rgba(0,109,255,0.14), transparent 55%),
                                    radial-gradient(520px 240px at 86% 92%, rgba(255,63,166,0.12), transparent 55%),
                                    linear-gradient(135deg, rgba(26,26,26,0.96), rgba(10,14,26,0.96))
                                `,
                                borderColor: 'rgba(255,255,255,0.14)'
                            }}>
                            <div className="absolute inset-0 pointer-events-none opacity-85"
                                style={{
                                    background: `
                                        radial-gradient(520px 240px at 20% 15%, rgba(0,109,255,0.12), transparent 55%),
                                        radial-gradient(520px 240px at 85% 90%, rgba(255,63,166,0.08), transparent 55%)
                                    `
                                }} />
                            <div className="relative z-10">
                                <h3 className="text-lg sm:text-xl font-[760] m-0 mb-4" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                    How it works
                                </h3>
                                <ol className="space-y-4 list-none m-0 p-0 mb-5">
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(0,109,255,0.2)', color: 'rgba(245,248,255,0.96)' }}>1</span>
                                        <div>
                                            <span className="font-[650] text-sm sm:text-base block mb-0.5" style={{ color: 'rgba(245,248,255,0.96)' }}>Apply to join</span>
                                            <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.72)' }}>Share your details, college/school name, and why you want to be an ambassador.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(0,109,255,0.2)', color: 'rgba(245,248,255,0.96)' }}>2</span>
                                        <div>
                                            <span className="font-[650] text-sm sm:text-base block mb-0.5" style={{ color: 'rgba(245,248,255,0.96)' }}>We review and connect</span>
                                            <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.72)' }}>We'll reach out to discuss your campus and pilot opportunities.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(0,109,255,0.2)', color: 'rgba(245,248,255,0.96)' }}>3</span>
                                        <div>
                                            <span className="font-[650] text-sm sm:text-base block mb-0.5" style={{ color: 'rgba(245,248,255,0.96)' }}>Coordinate pilot</span>
                                            <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.72)' }}>Help organize a small pilot group and collect structured feedback from participants.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(0,109,255,0.2)', color: 'rgba(245,248,255,0.96)' }}>4</span>
                                        <div>
                                            <span className="font-[650] text-sm sm:text-base block mb-0.5" style={{ color: 'rgba(245,248,255,0.96)' }}>Build awareness</span>
                                            <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.72)' }}>Connect with campus stakeholders and help spread awareness about SplitSec AI.</p>
                                        </div>
                                    </li>
                                </ol>
                                <div className="rounded-xl border p-4" style={{ borderColor: 'rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.05)' }}>
                                    <h4 className="text-[15px] font-[760] m-0 mb-2.5" style={{ color: 'rgba(245,248,255,0.96)' }}>What you get</h4>
                                    <ul className="text-[13px] sm:text-[13.5px] leading-[1.55] m-0 pl-4 space-y-1.5" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                        <li>Direct impact on campus safety initiatives</li>
                                        <li>Leadership experience and mentorship from our team</li>
                                        <li>Early access to the platform and new features</li>
                                        <li>Recognition and letter of recommendation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CARD: Form */}
                        <div className="flex-1 relative rounded-2xl border overflow-hidden p-5 sm:p-6"
                            style={{
                                background: `
                                    radial-gradient(520px 240px at 18% 18%, rgba(0,109,255,0.14), transparent 55%),
                                    radial-gradient(520px 240px at 86% 92%, rgba(255,63,166,0.12), transparent 55%),
                                    linear-gradient(135deg, rgba(26,26,26,0.96), rgba(10,14,26,0.96))
                                `,
                                borderColor: 'rgba(255,255,255,0.14)'
                            }}>
                            <div className="absolute inset-0 pointer-events-none opacity-85"
                                style={{
                                    background: `
                                        radial-gradient(520px 240px at 20% 15%, rgba(0,109,255,0.12), transparent 55%),
                                        radial-gradient(520px 240px at 85% 90%, rgba(255,63,166,0.08), transparent 55%)
                                    `
                                }} />
                            <div className="relative z-10">
                                <form className="space-y-4 sm:space-y-5">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div>
                                            <label htmlFor="campusFirstName" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                                style={{ color: 'rgba(245,248,255,0.96)' }}>
                                                First name: <span style={{ color: 'rgba(218,37,41,0.95)' }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="campusFirstName"
                                                placeholder="e.g., Maya"
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all"
                                                style={{
                                                    border: '1px solid rgba(245,248,255,0.20)',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    color: 'rgba(245,248,255,0.96)'
                                                }}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="campusLastName" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                                style={{ color: 'rgba(245,248,255,0.96)' }}>
                                                Last name: <span style={{ color: 'rgba(218,37,41,0.95)' }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="campusLastName"
                                                placeholder="e.g., Johnson"
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all"
                                                style={{
                                                    border: '1px solid rgba(245,248,255,0.20)',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    color: 'rgba(245,248,255,0.96)'
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="campusEmail" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                            style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            Email: <span style={{ color: 'rgba(218,37,41,0.95)' }}>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="campusEmail"
                                            placeholder="e.g., maya@example.com"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all"
                                            style={{
                                                border: '1px solid rgba(245,248,255,0.20)',
                                                background: 'rgba(255,255,255,0.05)',
                                                color: 'rgba(245,248,255,0.96)'
                                            }}
                                            required
                                        />
                                    </div>

                                    {/* College/School Name */}
                                    <div>
                                        <label htmlFor="collegeName" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                            style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            College/School Name:
                                        </label>
                                        <input
                                            type="text"
                                            id="collegeName"
                                            placeholder="e.g., University of Illinois"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all"
                                            style={{
                                                border: '1px solid rgba(245,248,255,0.20)',
                                                background: 'rgba(255,255,255,0.05)',
                                                color: 'rgba(245,248,255,0.96)'
                                            }}
                                        />
                                        <p className="text-xs sm:text-sm mt-1" style={{ color: 'rgba(245,248,255,0.55)' }}>
                                            Your current educational institution
                                        </p>
                                    </div>

                                    {/* Motivation */}
                                    <div>
                                        <label htmlFor="campusMotivation" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                            style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            What motivated you to become a campus ambassador?
                                        </label>
                                        <textarea
                                            id="campusMotivation"
                                            rows={3}
                                            placeholder="Share your vision for making your campus safer..."
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all resize-none"
                                            style={{
                                                border: '1px solid rgba(245,248,255,0.20)',
                                                background: 'rgba(255,255,255,0.05)',
                                                color: 'rgba(245,248,255,0.96)'
                                            }}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-1 sm:pt-2">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border font-[650] text-sm shadow-[0_14px_34px_rgba(0,109,255,0.16)] hover:opacity-90 transition-opacity"
                                            style={{
                                                borderColor: 'rgba(0,109,255,0.85)',
                                                color: 'rgba(245,248,255,0.96)',
                                                background: 'rgba(0,109,255,0.12)'
                                            }}>
                                            Submit
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stay in Touch: 2 Cards Side by Side */}
            <section id="stay" className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pb-6 sm:pb-14 scroll-mt-24">
                <div className="w-full max-w-[1800px] mx-auto">
                    <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[760] m-0 mb-2" style={{ color: 'rgba(245,248,255,0.96)', letterSpacing: '-0.01em' }}>
                        Stay in touch
                    </h2>
                    <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.55] m-0 mb-2" style={{ color: 'rgba(245,248,255,0.72)' }}>
                        A simple signup for updates and early access announcements.
                    </p>

                    {/* 2 Cards: Process (left) + Form (right) */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
                        {/* LEFT CARD: How it works */}
                        <div className="flex-1 relative rounded-2xl border overflow-hidden p-5 sm:p-6"
                            style={{
                                background: `
                                    radial-gradient(520px 240px at 18% 18%, rgba(0,109,255,0.14), transparent 55%),
                                    radial-gradient(520px 240px at 86% 92%, rgba(255,63,166,0.12), transparent 55%),
                                    linear-gradient(135deg, rgba(26,26,26,0.96), rgba(10,14,26,0.96))
                                `,
                                borderColor: 'rgba(255,255,255,0.14)'
                            }}>
                            <div className="absolute inset-0 pointer-events-none opacity-85"
                                style={{
                                    background: `
                                        radial-gradient(520px 240px at 20% 15%, rgba(0,109,255,0.12), transparent 55%),
                                        radial-gradient(520px 240px at 85% 90%, rgba(255,63,166,0.08), transparent 55%)
                                    `
                                }} />
                            <div className="relative z-10">
                                <h3 className="text-lg sm:text-xl font-[760] m-0 mb-4" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                    How it works
                                </h3>
                                <ol className="space-y-4 list-none m-0 p-0 mb-5">
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(0,109,255,0.2)', color: 'rgba(245,248,255,0.96)' }}>1</span>
                                        <div>
                                            <span className="font-[650] text-sm sm:text-base block mb-0.5" style={{ color: 'rgba(245,248,255,0.96)' }}>Enter your details</span>
                                            <p className="text-[13px] sm:text-[13.5px] leading-normal m-0" style={{ color: 'rgba(245,248,255,0.72)' }}>Fill in your name and email—no application or approval needed.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(0,109,255,0.2)', color: 'rgba(245,248,255,0.96)' }}>2</span>
                                        <div>
                                            <span className="font-[650] text-sm sm:text-base block mb-0.5" style={{ color: 'rgba(245,248,255,0.96)' }}>Confirm your email</span>
                                            <p className="text-[13px] sm:text-[14px] leading-[1.5] m-0 mt-0.5" style={{ color: 'rgba(245,248,255,0.72)' }}>We may send a quick confirmation so you’re on the list.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-[700]" style={{ background: 'rgba(0,109,255,0.2)', color: 'rgba(245,248,255,0.96)' }}>3</span>
                                        <div>
                                            <span className="font-[650] text-sm sm:text-base" style={{ color: 'rgba(245,248,255,0.96)' }}>Get updates</span>
                                            <p className="text-[13px] sm:text-[14px] leading-[1.5] m-0 mt-0.5" style={{ color: 'rgba(245,248,255,0.72)' }}>Receive product news, pilot openings, and early access when we launch.</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <div className="rounded-xl border p-4" style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}>
                                <h4 className="text-[15px] font-[760] m-0 mb-2" style={{ color: 'rgba(245,248,255,0.96)' }}>What you get</h4>
                                <ul className="text-[13px] sm:text-[14px] leading-[1.55] m-0 pl-4 space-y-1" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                    <li>Product updates and feature announcements</li>
                                    <li>Pilot and early access opportunities</li>
                                    <li>News about campus and community safety initiatives</li>
                                    <li>No spam—only relevant, low-frequency emails</li>
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT CARD: Form */}
                        <div className="flex-1 relative rounded-2xl border overflow-hidden p-5 sm:p-6"
                            style={{
                                background: `
                                    radial-gradient(520px 240px at 18% 18%, rgba(0,109,255,0.14), transparent 55%),
                                    radial-gradient(520px 240px at 86% 92%, rgba(255,63,166,0.12), transparent 55%),
                                    linear-gradient(135deg, rgba(26,26,26,0.96), rgba(10,14,26,0.96))
                                `,
                                borderColor: 'rgba(255,255,255,0.14)'
                            }}>
                            <div className="absolute inset-0 pointer-events-none opacity-85"
                                style={{
                                    background: `
                                        radial-gradient(520px 240px at 20% 15%, rgba(0,109,255,0.12), transparent 55%),
                                        radial-gradient(520px 240px at 85% 90%, rgba(255,63,166,0.08), transparent 55%)
                                    `
                                }} />
                            <div className="relative z-10">
                                <form className="space-y-4 sm:space-y-5">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div>
                                            <label htmlFor="subscribeFirstName" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                                style={{ color: 'rgba(245,248,255,0.96)' }}>
                                                First name: <span style={{ color: 'rgba(218,37,41,0.95)' }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="subscribeFirstName"
                                                placeholder="e.g., Maya"
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all"
                                                style={{
                                                    border: '1px solid rgba(245,248,255,0.20)',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    color: 'rgba(245,248,255,0.96)'
                                                }}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subscribeLastName" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                                style={{ color: 'rgba(245,248,255,0.96)' }}>
                                                Last name: <span style={{ color: 'rgba(218,37,41,0.95)' }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="subscribeLastName"
                                                placeholder="e.g., Johnson"
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all"
                                                style={{
                                                    border: '1px solid rgba(245,248,255,0.20)',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    color: 'rgba(245,248,255,0.96)'
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="subscribeEmail" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2"
                                            style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            Email: <span style={{ color: 'rgba(218,37,41,0.95)' }}>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="subscribeEmail"
                                            placeholder="e.g., maya@example.com"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg outline-none transition-all"
                                            style={{
                                                border: '1px solid rgba(245,248,255,0.20)',
                                                background: 'rgba(255,255,255,0.05)',
                                                color: 'rgba(245,248,255,0.96)'
                                            }}
                                            required
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-1 sm:pt-2">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border font-[650] text-sm shadow-[0_14px_34px_rgba(0,109,255,0.16)] hover:opacity-90 transition-opacity"
                                            style={{
                                                borderColor: 'rgba(0,109,255,0.85)',
                                                color: 'rgba(245,248,255,0.96)',
                                                background: 'rgba(0,109,255,0.12)'
                                            }}>
                                            Submit
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
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
                        <div className="p-5 ">
                            <h2 className="text-xl sm:text-2xl font-[760] mb-3 m-0" style={{ color: 'rgba(245,248,255,0.96)' }}>
                                FAQ
                            </h2>

                            {/* FAQ Items */}
                            <div className="space-y-2.5 ">
                                {faqData.map((faq) => (
                                    <details
                                        key={faq.id}
                                        className="rounded-2xl border overflow-hidden"
                                        style={{
                                            background: 'rgba(255,255,255,0.06)',
                                            borderColor: 'rgba(255,255,255,0.12)'
                                        }}
                                        open={openFaq === faq.id}
                                        onToggle={(e) => {
                                            const target = e.target as HTMLDetailsElement;
                                            setOpenFaq(target.open ? faq.id : null);
                                        }}>
                                        <summary className="cursor-pointer px-4 sm:px-5 py-3.5 sm:py-4 font-[650] text-sm sm:text-base list-none"
                                            style={{ color: 'rgba(245,248,255,0.96)' }}>
                                            {faq.question}
                                        </summary>
                                        <div className="px-4 sm:px-5 pb-3.5 sm:pb-4">
                                            <p className="text-[13px] sm:text-[13.5px] leading-[1.55] m-0" style={{ color: 'rgba(245,248,255,0.74)' }}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
