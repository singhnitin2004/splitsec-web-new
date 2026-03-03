"use client";

export default function Technology() {
    return (
        <div className="w-full min-h-screen">
            {/* Section 1: Hero - Black (same pattern as Home) */}
            <section
                className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 pt-24 sm:pt-24 lg:pt-28 pb-10 bg-[#0f1115]"
            >
                <div className="w-full max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-4 sm:gap-6 items-stretch">
                        {/* Left: Text Content */}
                        <div className="flex flex-col">
                            <p className="text-xs uppercase tracking-[0.16em] mb-4 font-bold m-0" style={{ color: 'rgba(243,246,255,0.60)' }}>
                                How it works
                            </p>
                            {/* <h1 className="text-[clamp(26px,6.5vw,64px)] sm:text-[clamp(34px,5.2vw,64px)] font-bold leading-[1.1] sm:leading-[1.04] tracking-[-0.04em] m-0 mb-3 sm:mb-3.5 max-w-[20ch]" style={{ color: '#E9ECF8' }}>
                                From first acoustic signature to a confirmed alert in seconds
                            </h1> */}

                            <h1 className="text-[clamp(26px,5.5vw,64px)] sm:text-[clamp(32px,3.7vw,64px)] lg:text-[clamp(40px,3.2vw,64px)] font-bold leading-[1.1] sm:leading-[1.06] tracking-[-0.04em] m-0 mb-5"
                                style={{ color: '#E9ECF8' }}>
                                From acoustic signature to confirmed alerts in seconds
                            </h1>
                            <p className="text-sm sm:text-[17px] text-gray-400 leading-[1.5] sm:leading-[1.45] m-0 mb-6 max-w-[56ch]" >
                                Trained on powerful computers. Deployed on the phone. Detection works without internet.
                            </p>

                            {/* Key Outcomes */}
                            <div className="flex gap-3 sm:gap-4 flex-wrap items-center mt-2 mb-6">
                                <div className="flex items-center gap-2.5 font-extrabold text-[13px]" style={{ color: 'rgba(243,246,255,0.88)', letterSpacing: '0.01em' }}>
                                    <span className="w-[22px] h-[22px] rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#006eff',
                                            boxShadow: '0 14px 28px rgba(0,0,0,0.22)',
                                            border: '1px solid rgba(255,255,255,0.14)'
                                        }}>
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    <span>Evidence-based</span>
                                </div>
                                <div className="flex items-center gap-2.5 font-extrabold text-[13px]" style={{ color: 'rgba(243,246,255,0.88)', letterSpacing: '0.01em' }}>
                                    <span className="w-[22px] h-[22px] rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#ff3dab ',
                                            boxShadow: '0 14px 28px rgba(0,0,0,0.22)',
                                            border: '1px solid rgba(255,255,255,0.14)'
                                        }}>
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </span>
                                    <span>Human-verified</span>
                                </div>
                                <div className="flex items-center gap-2.5 font-extrabold text-[13px]" style={{ color: 'rgba(243,246,255,0.88)', letterSpacing: '0.01em' }}>
                                    <span className="w-[22px] h-[22px] rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#006eff',
                                            boxShadow: '0 14px 28px rgba(0,0,0,0.22)',
                                            border: '1px solid rgba(255,255,255,0.14)'
                                        }}>
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2l8 4v6c0 5-3.5 9.4-8 10-4.5-.6-8-5-8-10V6l8-4z" />
                                            <path d="M9 12l2 2 4-5" />
                                        </svg>
                                    </span>
                                    <span>Privacy-first</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 flex-wrap items-stretch sm:items-center">
                                <a href="/schedule-demo"
                                    className="inline-flex items-center justify-center gap-2.5 px-3.5 py-2.5 rounded-full font-extrabold text-sm transition-all duration-300 hover:brightness-105 w-full sm:w-auto min-h-[44px] sm:min-h-0"
                                    style={{
                                        border: '1px solid rgba(0,109,255,0.30)',
                                        background: '#006DFF',
                                        color: '#fff',
                                        boxShadow: '0 16px 35px rgba(0,109,255,0.20)'
                                    }}>
                                    <span>Book 15 min walkthrough</span>
                                    <span className="opacity-95">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Right: Video Card */}
                        <div className="rounded-[20px] h-full flex flex-col min-h-0">
                            <video
                                className="w-full flex-1 min-h-0 block rounded-[16px] sm:rounded-[24px] object-cover"
                                src="/HowItWorks/viet-video.mp4"
                                title="Viet walkthrough - Model flow and escalation"
                                controls
                                playsInline
                                preload="metadata"
                            >
                                <track kind="captions" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-3 flex-wrap px-1.5 pt-2 pb-0.5 text-xs" style={{ color: 'rgba(243,246,255,0.60)' }}>
                                <span>Viet walkthrough</span>
                                <span>Model flow and escalation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Privacy - paper/white, matches HTML */}
            <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 pt-24 sm:pt-16 lg:pt-10 pb-10" id="privacy-workflow">
                <div className="max-w-[1800px] mx-auto">
                    <p className="text-xs uppercase tracking-[0.16em] mb-2.5 font-bold m-0" style={{ color: "rgba(26,26,26,0.55)" }}>
                        Privacy
                    </p>
                    <h2 className="text-[clamp(26px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.03em] m-0" style={{ color: "#1A1A1A" }}>
                        Audio stays on the phone by default
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {/* Feature Card 1: Privacy promise */}
                        <div className="rounded-[32px] p-6 border border-[rgba(26,26,26,0.10)] shadow-[0_10px_24px_rgba(0,0,0,0.10)]"
                            style={{ background: "#F7F9FF" }}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-[18px] flex items-center justify-center shrink-0 bg-[#006DFF] shadow-[0_14px_28px_rgba(0,109,255,0.18)]">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2l8 4v6c0 5-3.5 9.4-8 10-4.5-.6-8-5-8-10V6l8-4z" />
                                        <path d="M9 12l2 2 4-5" />
                                    </svg>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-lg font-bold m-0 tracking-[-0.01em] leading-tight" style={{ color: "#111" }}>Privacy Promise</h3>
                                </div>
                            </div>
                            <ul className="m-0 pl-0 list-none text-lg space-y-2.5 leading-[1.6]" style={{ color: "rgba(26,26,26,0.75)" }}>
                                <li className="flex gap-2.5">
                                    <span className="text-[#006DFF] mt-0.5 shrink-0">•</span>
                                    <span>No one listens in</span>
                                </li>
                                <li className="flex gap-2.5">
                                    <span className="text-[#006DFF] mt-0.5 shrink-0">•</span>
                                    <span>Detection runs locally on the phone</span>
                                </li>
                                <li className="flex gap-2.5">
                                    <span className="text-[#006DFF] mt-0.5 shrink-0">•</span>
                                    <span>No continuous recording or audio streaming</span>
                                </li>
                                <li className="flex gap-2.5">
                                    <span className="text-[#006DFF] mt-0.5 shrink-0">•</span>
                                    <span>Incident clips saved for audit only when your organization enables it</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature Card 2: On-device detection */}
                        <div className="rounded-[32px] p-6 border border-[rgba(26,26,26,0.10)] shadow-[0_10px_24px_rgba(0,0,0,0.10)]"
                            style={{ background: "#F7F9FF" }}>
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-[18px] flex items-center justify-center shrink-0 bg-[#006DFF] shadow-[0_14px_28px_rgba(0,109,255,0.18)]">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="5" />
                                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                    </svg>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-lg font-bold m-0 tracking-[-0.01em] leading-tight" style={{ color: "#111" }}>On-Device Detection</h3>
                                    <p className="text-sm m-0 mt-0.5 font-medium" style={{ color: "rgba(26,26,26,0.55)" }}>Policy-controlled uploads only</p>
                                </div>
                            </div>
                            <p className="m-0 text-lg leading-[1.6] font-normal" style={{ color: "rgba(26,26,26,0.75)" }}>
                                SplitSec detects gunshots on your phone, not in the cloud. We never continuously record or stream audio. If your organization enables it, incident clips may be uploaded for audit. False-alert clips are anonymized to improve accuracy. We do not sell data or track people.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Behind the Scenes Engineering - bse, matches HTML */}
            <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 pt-20 sm:pt-24 lg:pt-16 pb-16 sm:pb-20" id="smart-escalation"
                style={{ background: "#F2F4F7", color: "#0B0F1A" }}>
                <div className="max-w-[1800px] mx-auto">
                    <div className="mb-8 sm:mb-10">
                        <p className="text-xs uppercase tracking-[0.16em] mb-2 font-bold m-0" style={{ color: "rgba(15,23,42,0.58)" }}>
                            Behind the Scenes Engineering
                        </p>
                        <h2 className="text-[clamp(26px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.03em] m-0" style={{ color: "#0B0F1A" }}>
                            Inspired by how the human brain works
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                        <div className="space-y-5">
                            <p className="m-0 text-lg leading-[1.65] max-w-[38ch]" style={{ color: "rgba(15,23,42,0.68)" }}>
                                SplitSec AI learns sound patterns the way people recognize a familiar song or voice.
                            </p>
                            <p className="m-0 text-lg leading-[1.65] max-w-[38ch]" style={{ color: "rgba(15,23,42,0.68)" }}>
                                We train our models on thousands of real-world examples using high-powered computers, then store a compact version—the brains and memory—directly on your phone. Fast gunshot detection, even offline, with privacy by design.
                            </p>
                        </div>
                        <div>
                            <div className="grid gap-4">
                                <div className="flex gap-4 items-center min-h-[62px] rounded-full px-5 py-4 border border-[rgba(15,23,42,0.12)] shadow-[0_6px_14px_rgba(15,23,42,0.06)] bg-white">
                                    <span className="w-[34px] h-[34px] shrink-0 flex items-center justify-center text-[#3C7BEA]" aria-hidden>
                                        <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9.8 20h4.4" />
                                            <path d="M10.6 17.5h2.8" />
                                            <path d="M8.5 14.8c-1.6-1-2.6-2.8-2.6-4.8A6.1 6.1 0 0 1 12 3.9a6.1 6.1 0 0 1 6.1 6.1c0 2-1 3.8-2.6 4.8-.7.5-1.1 1.2-1.1 2h-4.8c0-.8-.4-1.5-1.1-2z" />
                                        </svg>
                                    </span>
                                    <b className="text-base sm:text-lg tracking-[-0.01em] leading-snug" style={{ color: "#0B0F1A" }}>Inspired by how the human brain works</b>
                                </div>
                                <div className="flex gap-4 items-center min-h-[62px] rounded-full px-5 py-4 border border-[rgba(15,23,42,0.12)] shadow-[0_6px_14px_rgba(15,23,42,0.06)] bg-white">
                                    <span className="w-[34px] h-[34px] shrink-0 flex items-center justify-center text-[#e73a99]" aria-hidden>
                                        <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                                            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                                        </svg>
                                    </span>
                                    <b className="text-base sm:text-lg tracking-[-0.01em] leading-snug" style={{ color: "#0B0F1A" }}>Trained on thousands of sounds</b>
                                </div>
                                <div className="flex gap-4 items-center min-h-[62px] rounded-full px-5 py-4 border border-[rgba(15,23,42,0.12)] shadow-[0_6px_14px_rgba(15,23,42,0.06)] bg-white">
                                    <span className="w-[34px] h-[34px] shrink-0 flex items-center justify-center text-[#3C7BEA]" aria-hidden>
                                        <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="9" />
                                            <path d="M8 12l2.3 2.3L16 8.6" />
                                        </svg>
                                    </span>
                                    <b className="text-base sm:text-lg tracking-[-0.01em] leading-snug" style={{ color: "#0B0F1A" }}>Compact AI runs on your phone</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
