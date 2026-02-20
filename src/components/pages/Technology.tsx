"use client";

export default function Technology() {
    return (
        <div className="w-full min-h-screen">
            {/* Section 1: Hero - Black (same pattern as Home) */}
            <section
                className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 sm:pt-24 lg:pt-28 pb-10 bg-black"
            >
                <div className="w-full max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-4 sm:gap-6 items-start">
                        {/* Left: Text Content */}
                        <div>
                            <p className="text-xs uppercase tracking-[0.16em] mb-3 font-bold m-0" style={{ color: 'rgba(243,246,255,0.60)' }}>
                                How it works
                            </p>
                            {/* <h1 className="text-[clamp(26px,6.5vw,64px)] sm:text-[clamp(34px,5.2vw,64px)] font-bold leading-[1.1] sm:leading-[1.04] tracking-[-0.04em] m-0 mb-3 sm:mb-3.5 max-w-[20ch]" style={{ color: '#E9ECF8' }}>
                                From first acoustic signature to a confirmed alert in seconds
                            </h1> */}

                            <h1 className="text-[clamp(26px,5.5vw,64px)] sm:text-[clamp(32px,5vw,64px)] lg:text-[clamp(40px,4.5vw,64px)] font-bold leading-[1.1] sm:leading-[1.06] tracking-[-0.04em] m-0 max-w-[20ch]"
                                style={{ color: '#E9ECF8' }}>
                                From first acoustic signature to a confirmed alert in seconds
                            </h1>
                            <p className="text-[15px] sm:text-base lg:text-lg leading-[1.5] sm:leading-[1.45] m-0 mb-4 sm:mb-5 max-w-[56ch]" style={{ color: 'rgba(243,246,248,0.80)' }}>
                                SplitSec runs on everyday phones. It listens locally, scores the sound, and escalates only when evidence stacks. Corroboration and multi phone confirmation reduce false alerts. No raw audio is stored or uploaded.
                            </p>

                            {/* Key Outcomes */}
                            <div className="flex gap-3 sm:gap-4 flex-wrap items-center mt-3 sm:mt-4 mb-3">
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
                                    <span>Fewer false alerts</span>
                                </div>
                                <div className="flex items-center gap-2.5 font-extrabold text-[13px]" style={{ color: 'rgba(243,246,255,0.88)', letterSpacing: '0.01em' }}>
                                    <span className="w-[22px] h-[22px] rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#006eff',
                                            boxShadow: '0 14px 28px rgba(0,0,0,0.22)',
                                            border: '1px solid rgba(255,255,255,0.14)'
                                        }}>
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M13 2L3 14h7l-1 8 12-14h-7l1-6z" />
                                        </svg>
                                    </span>
                                    <span>Faster escalation</span>
                                </div>
                                <div className="flex items-center gap-2.5 font-extrabold text-[13px]" style={{ color: 'rgba(243,246,255,0.88)', letterSpacing: '0.01em' }}>
                                    <span className="w-[22px] h-[22px] rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#ff3dab',
                                            boxShadow: '0 14px 28px rgba(0,0,0,0.22)',
                                            border: '1px solid rgba(255,255,255,0.14)'
                                        }}>
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2l8 4v6c0 5-3.5 9.4-8 10-4.5-.6-8-5-8-10V6l8-4z" />
                                            <path d="M9 12l2 2 4-5" />
                                        </svg>
                                    </span>
                                    <span>Privacy first</span>
                                </div>
                            </div>

                            <p className="text-xs font-extrabold mt-2.5 mb-4" style={{ color: 'rgba(243,246,255,0.60)' }}>
                                Pilot readiness, pricing, and setup in one call.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 flex-wrap items-stretch sm:items-center">
                                <a href="/#about"
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
                                <a href="#privacy-workflow"
                                    className="font-extrabold text-sm"
                                    style={{ color: 'rgba(243,246,255,0.72)' }}>
                                    Jump to privacy
                                </a>
                            </div>
                        </div>

                        {/* Right: Video Card */}
                        <div className="rounded-[20px] "
                        >
                            <video
                                className="w-full block rounded-[16px] sm:rounded-[24px] bg-black"
                                style={{ aspectRatio: '16/9', objectFit: 'contain' }}
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

            {/* Section 2: Privacy and Workflow - White (same pattern as Home) */}
            <section className="w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white" id="privacy-workflow">
                <div className="w-full max-w-[1800px] mx-auto">
                    <div
                        style={{ background: '#ffffff', borderColor: 'rgba(26,26,26,0.10)' }}>
                        <p className="text-xs uppercase tracking-[0.16em] mb-2.5 font-bold m-0" style={{ color: 'rgba(26,26,26,0.55)' }}>
                            Privacy and workflow
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight m-0 mb-3 sm:mb-4" style={{ color: '#1F2937' }}>
                            High on privacy, clear on what happens
                        </h2>
                        <p className="text-[15px] sm:text-base lg:text-lg leading-relaxed m-0 mb-4 sm:mb-6" style={{ color: 'rgba(29,29,31,0.65)' }}>
                            SplitSec is designed to make decisions on the phone. By default, audio is not stored or uploaded.
                            If you opt in to help improve the model, sharing is limited to a short, anonymized clip.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                            {/* Privacy Promise Panel */}
                            <div className="bg-white border rounded-2xl sm:rounded-[32px] p-4 sm:p-4.5 flex flex-col"
                                style={{
                                    borderColor: 'rgba(26,26,26,0.12)',
                                    boxShadow: '0 10px 24px rgba(0,0,0,0.10)'
                                }}>
                                <h3 className="text-base font-extrabold mb-2.5 m-0" style={{ letterSpacing: '-0.01em', color: '#111' }}>
                                    Privacy promise
                                </h3>
                                <p className="text-sm leading-[1.55] m-0 mb-3.5" style={{ color: 'rgba(26,26,26,0.70)' }}>
                                    No one listens in, SplitSec does not have access to your conversations during normal operation.
                                </p>

                                <div className="grid gap-2.5">
                                    <div className="flex gap-3 items-start p-3 rounded-2xl border"
                                        style={{
                                            background: 'rgba(26,26,26,0.03)',
                                            borderColor: 'rgba(26,26,26,0.08)'
                                        }}>
                                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                            style={{
                                                background: '#006eff',
                                                boxShadow: '0 10px 22px rgba(0,0,0,0.14)',
                                                border: '1px solid rgba(255,255,255,0.22)',
                                                color: '#fff'
                                            }}>
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <b className="block text-sm mb-0.5" style={{ color: '#111' }}>No one listens in</b>
                                            <span className="text-sm leading-[1.45]" style={{ color: 'rgba(26,26,26,0.70)' }}>
                                                SplitSec does not receive or store your conversations during normal operation.
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-start p-3 rounded-2xl border"
                                        style={{
                                            background: 'rgba(26,26,26,0.03)',
                                            borderColor: 'rgba(26,26,26,0.08)'
                                        }}>
                                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                            style={{
                                                background: '#ff3dab',
                                                boxShadow: '0 10px 22px rgba(0,0,0,0.14)',
                                                border: '1px solid rgba(255,255,255,0.22)',
                                                color: '#fff'
                                            }}>
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <b className="block text-sm mb-0.5" style={{ color: '#111' }}>Rolling four second buffer</b>
                                            <span className="text-sm leading-[1.45]" style={{ color: 'rgba(26,26,26,0.70)' }}>
                                                Audio is processed in a rolling four second window and overwritten continuously on device.
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-start p-3 rounded-2xl border"
                                        style={{
                                            background: 'rgba(26,26,26,0.03)',
                                            borderColor: 'rgba(26,26,26,0.08)'
                                        }}>
                                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                            style={{
                                                background: '#ff3dab',
                                                boxShadow: '0 10px 22px rgba(0,0,0,0.14)',
                                                border: '1px solid rgba(255,255,255,0.22)',
                                                color: '#fff'
                                            }}>
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <b className="block text-sm mb-0.5" style={{ color: '#111' }}>Optional model improvement</b>
                                            <span className="text-sm leading-[1.45]" style={{ color: 'rgba(26,26,26,0.70)' }}>
                                                If you opt in, only that short, anonymized four second clip can be shared for improvement.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm font-extrabold leading-[1.5] mt-3.5" style={{ color: 'rgba(26,26,26,0.62)' }}>
                                    By default, SplitSec uses sound only to make a decision locally. Any sharing is optional and user initiated.
                                </p>
                            </div>

                            {/* Workflow Panel */}
                            <div className="bg-white border rounded-2xl sm:rounded-[32px] p-4 sm:p-4.5 flex flex-col"
                                style={{
                                    borderColor: 'rgba(26,26,26,0.12)',
                                    boxShadow: '0 10px 24px rgba(0,0,0,0.10)'
                                }}>
                                <h3 className="text-base font-extrabold mb-2.5 m-0" style={{ letterSpacing: '-0.01em', color: '#111' }}>
                                    What happens in the background
                                </h3>
                                <p className="text-sm leading-[1.55] m-0 mb-3.5" style={{ color: 'rgba(26,26,26,0.70)' }}>
                                    Four stages keep the workflow simple and consistent for teams and events.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                                    {/* Listen locally */}
                                    <div className="rounded-[18px] p-3 sm:p-3.5 border flex gap-3 items-start min-h-[100px] sm:min-h-[110px]" style={{ background: 'rgba(26,26,26,0.03)', borderColor: 'rgba(26,26,26,0.08)' }}>
                                        <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-[14px] sm:rounded-[18px] flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: '#006eff',
                                                boxShadow: '0 14px 28px rgba(0,109,255,0.18)'
                                            }}>
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
                                                style={{ filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.18))' }}>
                                                <path d="M12 14a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z" />
                                                <path d="M19 11a7 7 0 0 1-14 0" />
                                                <path d="M12 18v3" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-extrabold m-0 mb-1 text-sm" style={{ color: '#111' }}>Listen locally</p>
                                            <p className="text-sm leading-[1.45] m-0" style={{ color: 'rgba(26,26,26,0.70)' }}>
                                                Capture and overwrite audio in a rolling buffer. Nothing is uploaded by default.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Recognize */}
                                    <div className="rounded-[18px] p-3 sm:p-3.5 border flex gap-3 items-start min-h-[100px] sm:min-h-[110px]" style={{ background: 'rgba(26,26,26,0.03)', borderColor: 'rgba(26,26,26,0.08)' }}>
                                        <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-[14px] sm:rounded-[18px] flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: '#ff3dab',
                                                boxShadow: '0 14px 28px rgba(255,63,166,0.16)'
                                            }}>
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
                                                style={{ filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.18))' }}>
                                                <path d="M8 6h8" />
                                                <path d="M8 10h8" />
                                                <path d="M8 14h5" />
                                                <path d="M6 4h12v16H6z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-extrabold m-0 mb-1 text-sm" style={{ color: '#111' }}>Recognize</p>
                                            <p className="text-sm leading-[1.45] m-0" style={{ color: 'rgba(26,26,26,0.70)' }}>
                                                On device AI scores the acoustic signature in seconds and filters common loud noises.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Build confidence */}
                                    <div className="rounded-[18px] p-3 sm:p-3.5 border flex gap-3 items-start min-h-[100px] sm:min-h-[110px]" style={{ background: 'rgba(26,26,26,0.03)', borderColor: 'rgba(26,26,26,0.08)' }}>
                                        <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-[14px] sm:rounded-[18px] flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: '#006eff',
                                                boxShadow: '0 14px 28px rgba(0,0,0,0.14)'
                                            }}>
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
                                                style={{ filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.18))' }}>
                                                <path d="M12 3v10" />
                                                <path d="M7 8l5-5 5 5" />
                                                <path d="M6 21h12" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-extrabold m-0 mb-1 text-sm" style={{ color: '#111' }}>Build confidence</p>
                                            <p className="text-sm leading-[1.45] m-0" style={{ color: 'rgba(26,26,26,0.70)' }}>
                                                Escalate only when evidence stacks, user corroboration or multi phone detection.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Alert the right people */}
                                    <div className="rounded-[18px] p-3 sm:p-3.5 border flex gap-3 items-start min-h-[100px] sm:min-h-[110px]" style={{ background: 'rgba(26,26,26,0.03)', borderColor: 'rgba(26,26,26,0.08)' }}>
                                        <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-[14px] sm:rounded-[18px] flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: '#ff3dab',
                                                boxShadow: '0 14px 28px rgba(255,63,166,0.16)'
                                            }}>
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
                                                style={{ filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.18))' }}>
                                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
                                                <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-extrabold m-0 mb-1 text-sm" style={{ color: '#111' }}>Alert the right people</p>
                                            <p className="text-sm leading-[1.45] m-0" style={{ color: 'rgba(26,26,26,0.70)' }}>
                                                When criteria are met, responders receive real time alerts with helpful context.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Smart Escalation - Black (same pattern as Home) */}
            <section className="w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-black" id="smart-escalation">
                <div className="w-full max-w-[1800px] mx-auto">
                    <div
                    >
                        <p className="text-xs uppercase tracking-[0.16em] mb-2.5 font-bold m-0" style={{ color: 'rgba(243,246,255,0.60)' }}>
                            Smart escalation
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight m-0 mb-3 sm:mb-4" style={{ color: '#E9ECF8' }}>
                            L1, L2, L3 escalation that reduces false positives
                        </h2>
                        <p className="text-[15px] sm:text-base lg:text-lg leading-relaxed m-0 mb-4 sm:mb-6" style={{ color: 'rgba(233,236,248,0.88)' }}>
                            The goal is simple, move fast without noisy alerts. SplitSec starts conservative, then escalates as evidence stacks.
                        </p>

                        {/* L1, L2, L3 Cards - dark theme */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-4 sm:mt-6">
                            {/* L1 Detected */}
                            <div className="rounded-2xl sm:rounded-[28px] p-4 sm:p-4.5 border"
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    borderColor: 'rgba(255,255,255,0.12)',
                                    boxShadow: '0 18px 46px rgba(0,0,0,0.18)'
                                }}>
                                <div className="flex gap-3 items-start mb-3">
                                    <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-[14px] sm:rounded-[18px] flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#006eff',
                                            boxShadow: '0 16px 34px rgba(0,109,255,0.18)'
                                        }}>
                                        <svg className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px]" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round"
                                            style={{ filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.18))' }}>
                                            <path d="M3 12c2.2 0 2.2-6 4.4-6S9.6 18 11.8 18 14 6 16.2 6 18.4 12 20.6 12H21" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-extrabold m-0" style={{ letterSpacing: '-0.01em', color: '#E9ECF8' }}>L1 Detected</h3>
                                        <div className="text-xs font-extrabold mt-0.5" style={{ color: 'rgba(243,246,255,0.62)' }}>Single phone, not corroborated</div>
                                    </div>
                                </div>
                                <ul className="m-0 mt-3 pl-4.5" style={{ color: 'rgba(233,236,248,0.88)', lineHeight: '1.55' }}>
                                    <li className="my-1.5">One phone flags a gunshot candidate event</li>
                                    <li className="my-1.5">User can corroborate or dismiss with one tap</li>
                                    <li className="my-1.5">No outbound alert by default</li>
                                </ul>
                            </div>

                            {/* L2 Corroborated */}
                            <div className="rounded-2xl sm:rounded-[28px] p-4 sm:p-4.5 border"
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    borderColor: 'rgba(255,255,255,0.12)',
                                    boxShadow: '0 18px 46px rgba(0,0,0,0.18)'
                                }}>
                                <div className="flex gap-3 items-start mb-3">
                                    <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-[14px] sm:rounded-[18px] flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#ff3dab',
                                            boxShadow: '0 16px 34px rgba(255,63,166,0.16)'
                                        }}>
                                        <svg className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px]" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round"
                                            style={{ filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.18))' }}>
                                            <path d="M20 6L9 17l-5-5" />
                                            <path d="M21 12a9 9 0 1 1-6.2-8.6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-extrabold m-0" style={{ letterSpacing: '-0.01em', color: '#E9ECF8' }}>L2 Corroborated</h3>
                                        <div className="text-xs font-extrabold mt-0.5" style={{ color: 'rgba(243,246,255,0.62)' }}>User confirms they heard it</div>
                                    </div>
                                </div>
                                <ul className="m-0 mt-3 pl-4.5" style={{ color: 'rgba(233,236,248,0.88)', lineHeight: '1.55' }}>
                                    <li className="my-1.5">User corroboration increases confidence</li>
                                    <li className="my-1.5">System prepares notifications and context</li>
                                    <li className="my-1.5">Admins see time, approximate location, device status</li>
                                </ul>
                            </div>

                            {/* L3 Confirmed */}
                            <div className="rounded-2xl sm:rounded-[28px] p-4 sm:p-4.5 border"
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    borderColor: 'rgba(255,255,255,0.12)',
                                    boxShadow: '0 18px 46px rgba(0,0,0,0.18)'
                                }}>
                                <div className="flex gap-3 items-start mb-3">
                                    <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-[14px] sm:rounded-[18px] flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#006eff',
                                            boxShadow: '0 16px 34px rgba(0,0,0,0.14)'
                                        }}>
                                        <svg className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px]" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.96)" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round"
                                            style={{ filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.18))' }}>
                                            <path d="M12 4l8 4-8 4-8-4 8-4z" />
                                            <path d="M4 12l8 4 8-4" />
                                            <path d="M4 16l8 4 8-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-extrabold m-0" style={{ letterSpacing: '-0.01em', color: '#E9ECF8' }}>L3 Confirmed</h3>
                                        <div className="text-xs font-extrabold mt-0.5" style={{ color: 'rgba(243,246,255,0.62)' }}>Two phones report in a tight window</div>
                                    </div>
                                </div>
                                <ul className="m-0 mt-3 pl-4.5" style={{ color: 'rgba(233,236,248,0.88)', lineHeight: '1.55' }}>
                                    <li className="my-1.5">Multi phone confirmation triggers a confirmed alert</li>
                                    <li className="my-1.5">Alerts go to configured recipients and roles</li>
                                    <li className="my-1.5">Clear prompts help teams coordinate in the first minutes</li>
                                </ul>
                            </div>
                        </div>

                        {/* Pilot Card - dark theme */}
                        <div className="rounded-[32px] p-4.5 mt-5.5 border"
                            style={{
                                background: 'rgba(255,255,255,0.06)',
                                borderColor: 'rgba(255,255,255,0.12)',
                                boxShadow: '0 18px 46px rgba(0,0,0,0.18)'
                            }}>
                            <div className="flex justify-between gap-4 flex-wrap items-start mb-3.5">
                                <div>
                                    <div className="text-xs uppercase tracking-[0.16em] font-extrabold mb-1.5" style={{ color: 'rgba(243,246,255,0.60)' }}>Pilot in 14 days</div>
                                    <div className="text-lg font-black mb-1.5" style={{ letterSpacing: '-0.01em', color: '#E9ECF8' }}>Low effort, measurable results</div>
                                    <div className="text-[13px] font-extrabold max-w-[62ch]" style={{ color: 'rgba(233,236,248,0.88)' }}>Deploy, measure, and decide with clean pilot metrics.</div>
                                </div>
                                <div className="flex gap-3 flex-wrap items-center">
                                    <a href="/#about"
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

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3.5">
                                <div className="flex gap-3 items-start p-3 rounded-[18px] border min-h-[70px]"
                                    style={{
                                        background: 'rgba(0,0,0,0.16)',
                                        borderColor: 'rgba(255,255,255,0.10)'
                                    }}>
                                    <div className="w-[34px] h-[34px] rounded-[14px] flex items-center justify-center font-black text-white flex-shrink-0"
                                        style={{
                                            background: '#006eff',
                                            boxShadow: '0 14px 28px rgba(0,0,0,0.10)'
                                        }}>1</div>
                                    <div>
                                        <b className="block text-sm" style={{ letterSpacing: '-0.01em', color: '#E9ECF8' }}>Deploy</b>
                                        <span className="text-[13px] leading-[1.35] block mt-0.5" style={{ color: 'rgba(233,236,248,0.88)' }}>Phones or preconfigured kit</span>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start p-3 rounded-[18px] border min-h-[70px]"
                                    style={{
                                        background: 'rgba(0,0,0,0.16)',
                                        borderColor: 'rgba(255,255,255,0.10)'
                                    }}>
                                    <div className="w-[34px] h-[34px] rounded-[14px] flex items-center justify-center font-black text-white flex-shrink-0"
                                        style={{
                                            background: '#ff3dab',
                                            boxShadow: '0 14px 28px rgba(0,0,0,0.10)'
                                        }}>2</div>
                                    <div>
                                        <b className="block text-sm" style={{ letterSpacing: '-0.01em', color: '#E9ECF8' }}>Measure</b>
                                        <span className="text-[13px] leading-[1.35] block mt-0.5" style={{ color: 'rgba(233,236,248,0.88)' }}>Detection, false alerts, uptime</span>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start p-3 rounded-[18px] border min-h-[70px]"
                                    style={{
                                        background: 'rgba(0,0,0,0.16)',
                                        borderColor: 'rgba(255,255,255,0.10)'
                                    }}>
                                    <div className="w-[34px] h-[34px] rounded-[14px] flex items-center justify-center font-black text-white flex-shrink-0"
                                        style={{
                                            background: '#006eff',
                                            boxShadow: '0 14px 28px rgba(0,0,0,0.10)'
                                        }}>3</div>
                                    <div>
                                        <b className="block text-sm" style={{ letterSpacing: '-0.01em', color: '#E9ECF8' }}>Decide</b>
                                        <span className="text-[13px] leading-[1.35] block mt-0.5" style={{ color: 'rgba(233,236,248,0.88)' }}>Report and next steps</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xs font-extrabold mt-3" style={{ color: 'rgba(243,246,255,0.62)' }}>
                                No spam. We respond within 1 business day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Behind the Scenes - White (same pattern as Home) */}
            <section className="w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white" id="behind-the-scenes">
                <div className="w-full max-w-[1800px] mx-auto">
                    <div
                    >
                        <p className="text-xs uppercase tracking-[0.16em] mb-2.5 font-bold m-0" style={{ color: 'rgba(26,26,26,0.55)' }}>
                            Behind the scenes
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight m-0 mb-3 sm:mb-4" style={{ color: '#1F2937' }}>
                            Compact intelligence, designed for fast decisions
                        </h2>
                        <p className="text-[15px] sm:text-base lg:text-lg leading-relaxed m-0 mb-4 sm:mb-6" style={{ color: 'rgba(29,29,31,0.65)' }}>
                            Training happens offline. A compact model runs on the phone in real time, even when connectivity is limited.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                            {/* What you get - light theme */}
                            <div className="bg-white border rounded-2xl sm:rounded-[28px] p-4 sm:p-5 lg:p-6.5 flex flex-col h-full"
                                style={{
                                    borderColor: 'rgba(26,26,26,0.12)',
                                    boxShadow: '0 10px 24px rgba(0,0,0,0.10)'
                                }}>
                                <h3 className="text-xl font-extrabold m-0 mb-3.5" style={{ letterSpacing: '-0.01em', color: '#111' }}>What you get</h3>

                                <div className="flex gap-3.5 p-4 rounded-[18px] border mb-3"
                                    style={{
                                        background: 'rgba(26,26,26,0.03)',
                                        borderColor: 'rgba(26,26,26,0.08)'
                                    }}>
                                    <div className="w-[40px] h-[40px] rounded-[14px] flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#006eff',
                                            boxShadow: '0 16px 34px rgba(0,109,255,0.18)',
                                            border: '1px solid rgba(255,255,255,0.22)',
                                            color: '#fff'
                                        }}>
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M13 2L3 14h7l-1 8 12-14h-7l1-6z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-extrabold m-0 mb-1 text-sm sm:text-base" style={{ color: '#111' }}>Fast, quiet detection</div>
                                        <div className="text-sm sm:text-base leading-[1.45]" style={{ color: 'rgba(26,26,26,0.70)' }}>Runs in the background and surfaces only high signal events.</div>
                                    </div>
                                </div>

                                <div className="flex gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-[16px] sm:rounded-[18px] border mb-2.5 sm:mb-3"
                                    style={{
                                        background: 'rgba(26,26,26,0.03)',
                                        borderColor: 'rgba(26,26,26,0.08)'
                                    }}>
                                    <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-[12px] sm:rounded-[14px] flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#ff3dab',
                                            boxShadow: '0 16px 34px rgba(255,63,166,0.16)',
                                            border: '1px solid rgba(255,255,255,0.22)',
                                            color: '#fff'
                                        }}>
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 6h16" />
                                            <path d="M7 12h10" />
                                            <path d="M10 18h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-extrabold m-0 mb-1" style={{ color: '#111' }}>Lower false alerts</div>
                                        <div className="leading-[1.45]" style={{ color: 'rgba(26,26,26,0.70)' }}>Escalates based on evidence, corroboration, and multi phone confirmation.</div>
                                    </div>
                                </div>

                                <div className="flex gap-3.5 p-4 rounded-[18px] border mb-3"
                                    style={{
                                        background: 'rgba(26,26,26,0.03)',
                                        borderColor: 'rgba(26,26,26,0.08)'
                                    }}>
                                    <div className="w-[40px] h-[40px] rounded-[14px] flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#006eff',
                                            boxShadow: '0 16px 34px rgba(0,0,0,0.14)',
                                            border: '1px solid rgba(255,255,255,0.22)',
                                            color: '#fff'
                                        }}>
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                            <path d="M19.4 15a7.6 7.6 0 0 0 0-6l2-1-2-3-2.1.9a8 8 0 0 0-1.6-1L16 2h-4l-.7 2.9a8 8 0 0 0-1.6 1L7.6 5 6 8l2 1a7.6 7.6 0 0 0 0 6l-2 1 1.6 3 2.1-.9a8 8 0 0 0 1.6 1L12 22h4l.7-2.9a8 8 0 0 0 1.6-1l2.1.9 2-3-2-1z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-extrabold m-0 mb-1 text-sm sm:text-base" style={{ color: '#111' }}>Operational coverage</div>
                                        <div className="text-sm sm:text-base leading-[1.45]" style={{ color: 'rgba(26,26,26,0.70)' }}>Health signals like battery, connectivity, and armed status help maintain coverage.</div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 flex-wrap items-stretch sm:items-center mt-4 sm:mt-4.5">
                                    <a href="/#about"
                                        className="inline-flex items-center justify-center gap-2.5 px-3.5 py-2.5 rounded-full font-extrabold text-sm transition-all duration-300 hover:brightness-105 w-full sm:w-auto"
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

                            {/* What makes it work - light theme */}
                            <div className="bg-white border rounded-2xl sm:rounded-[28px] p-4 sm:p-5 lg:p-6.5 flex flex-col h-full"
                                style={{
                                    borderColor: 'rgba(26,26,26,0.12)',
                                    boxShadow: '0 10px 24px rgba(0,0,0,0.10)'
                                }}>
                                <h3 className="text-lg sm:text-xl font-extrabold m-0 mb-3 sm:mb-3.5" style={{ letterSpacing: '-0.01em', color: '#111' }}>What makes it work</h3>

                                <div className="flex gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-[16px] sm:rounded-[18px] border mb-2.5 sm:mb-3"
                                    style={{
                                        background: 'rgba(26,26,26,0.03)',
                                        borderColor: 'rgba(26,26,26,0.08)'
                                    }}>
                                    <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-[12px] sm:rounded-[14px] flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#006eff',
                                            boxShadow: '0 16px 34px rgba(0,109,255,0.18)',
                                            border: '1px solid rgba(255,255,255,0.22)',
                                            color: '#fff'
                                        }}>
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2l8 4v6c0 5-3.5 9.4-8 10-4.5-.6-8-5-8-10V6l8-4z" />
                                            <path d="M9 12l2 2 4-5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-extrabold m-0 mb-1 text-sm sm:text-base" style={{ color: '#111' }}>Privacy first architecture</div>
                                        <div className="text-sm sm:text-base leading-[1.45]" style={{ color: 'rgba(26,26,26,0.70)' }}>On device decisions with minimal data movement and explicit opt in controls.</div>
                                    </div>
                                </div>

                                <div className="flex gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-[16px] sm:rounded-[18px] border mb-2.5 sm:mb-3"
                                    style={{
                                        background: 'rgba(26,26,26,0.03)',
                                        borderColor: 'rgba(26,26,26,0.08)'
                                    }}>
                                    <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-[12px] sm:rounded-[14px] flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#ff3dab',
                                            boxShadow: '0 16px 34px rgba(255,63,166,0.16)',
                                            border: '1px solid rgba(255,255,255,0.22)',
                                            color: '#fff'
                                        }}>
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 4l8 4-8 4-8-4 8-4z" />
                                            <path d="M4 12l8 4 8-4" />
                                            <path d="M4 16l8 4 8-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-extrabold m-0 mb-1 text-sm sm:text-base" style={{ color: '#111' }}>Escalation by evidence</div>
                                        <div className="text-sm sm:text-base leading-[1.45]" style={{ color: 'rgba(26,26,26,0.70)' }}>Confidence rises through corroboration, and multi phone confirmation triggers a confirmed alert.</div>
                                    </div>
                                </div>

                                <div className="flex gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-[16px] sm:rounded-[18px] border mb-2.5 sm:mb-3"
                                    style={{
                                        background: 'rgba(26,26,26,0.03)',
                                        borderColor: 'rgba(26,26,26,0.08)'
                                    }}>
                                    <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-[12px] sm:rounded-[14px] flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: '#006eff',
                                            boxShadow: '0 16px 34px rgba(0,0,0,0.14)',
                                            border: '1px solid rgba(255,255,255,0.22)',
                                            color: '#fff'
                                        }}>
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 9h6v6H9z" />
                                            <path d="M4 9h2" />
                                            <path d="M4 12h2" />
                                            <path d="M4 15h2" />
                                            <path d="M18 9h2" />
                                            <path d="M18 12h2" />
                                            <path d="M18 15h2" />
                                            <path d="M9 4v2" />
                                            <path d="M12 4v2" />
                                            <path d="M15 4v2" />
                                            <path d="M9 18v2" />
                                            <path d="M12 18v2" />
                                            <path d="M15 18v2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-extrabold m-0 mb-1 text-sm sm:text-base" style={{ color: '#111' }}>Compact model on the phone</div>
                                        <div className="text-sm sm:text-base leading-[1.45]" style={{ color: 'rgba(26,26,26,0.70)' }}>Efficient runtime keeps detection latency low and supports continuous coverage.</div>
                                    </div>
                                </div>

                                <div className="text-xs sm:text-[13px] leading-[1.5] mt-2.5" style={{ color: 'rgba(26,26,26,0.70)' }}>
                                    For deployments, you can use individual staff phones or preconfigured kits. Teams can tune sensitivity for the environment and role.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
