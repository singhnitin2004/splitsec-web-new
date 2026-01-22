"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { MessageCircle, Users, Shield, Building, AlertTriangle } from "lucide-react";

interface FAQQuestion {
    id: string;
    question: string;
    answer: string;
}

interface FAQCategory {
    id: string;
    icon: string;
    title: string;
    questions: FAQQuestion[];
}

export default function FAQPage() {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const faqCategories: FAQCategory[] = [
        {
            "id": "core-faq",
            "icon": "MessageCircle",
            "title": "Core FAQ (for everyone)",
            "questions": [
                {
                    "id": "what-does-app-do",
                    "question": "What does the SplitSec app do?",
                    "answer": "The SplitSec app is a privacy-first personal safety app that analyzes sounds around you to detect potential gunshots and alert you instantly. All sound analysis happens entirely on your device, and no audio is sent to the cloud. The app does not require Wi-Fi or cellular connectivity to detect gunshots."
                },
                {
                    "id": "detection-range",
                    "question": "How far away can it detect a gunshot?",
                    "answer": "Detection range varies significantly based on the environment, building materials, device hardware, and surrounding noise. Indoors, the app may detect a gunshot a few rooms away in some situations. Outdoors, detection may extend from tens to hundreds of feet under favorable conditions. Actual performance varies and is continuously evaluated during beta testing."
                },
                {
                    "id": "accuracy",
                    "question": "How accurate is the SplitSec app?",
                    "answer": "SplitSec is trained to recognize the unique time–frequency signature of gunshots rather than reacting to loud noises alone. In testing, the system distinguishes many non-gunshot impulse sounds. False alerts and missed detections are possible, particularly during beta testing, and ongoing testing is focused on improving accuracy."
                },
                {
                    "id": "call-911",
                    "question": "Does the SplitSec app call 911 automatically?",
                    "answer": "No. SplitSec does not automatically contact emergency services. The app provides a one-touch option to dial 911 so users can act quickly if they choose to do so. SplitSec does not replace official emergency or safety protocols."
                },
                {
                    "id": "audio-privacy",
                    "question": "Does the SplitSec app record or upload audio?",
                    "answer": "No. The SplitSec app does not record or upload audio. All audio analysis is performed locally on your device and discarded immediately after processing. Any analytics or telemetry are optional, anonymized, and used only to improve system performance."
                },
                {
                    "id": "indoor-noisy",
                    "question": "Will the app work indoors or in noisy environments?",
                    "answer": "Yes. SplitSec is designed to operate in both indoor and noisy environments. During beta testing, the system typically triggers when a gunshot-like impulse is significantly louder than background noise, although sensitivity varies by device and environment."
                },
                {
                    "id": "offline",
                    "question": "Does SplitSec work without Wi-Fi or cellular service?",
                    "answer": "Yes. Gunshot detection runs entirely on-device and does not require connectivity. However, features such as sending alerts to trusted contacts do require Wi-Fi or cellular service."
                },
                {
                    "id": "supported-phones",
                    "question": "Which phones are supported?",
                    "answer": "SplitSec currently supports newer Android devices, with iOS support planned. A list of tested and validated devices will be published during the beta phase."
                },
                {
                    "id": "availability",
                    "question": "When is SplitSec available?",
                    "answer": "SplitSec AI is currently operating in limited public beta. Android availability comes first, with iOS following in a later phase. Broader availability will be informed by beta testing and validation results."
                },
                {
                    "id": "technical-support",
                    "question": "How do I get help or report a technical issue?",
                    "answer": "For technical support or app-related issues, please contact support@splitsec.ai."
                }
            ]
        },
        {
            "id": "alertcrew-faq",
            "icon": "Users",
            "title": "AlertCrew™ FAQ",
            "questions": [
                {
                    "id": "what-is-alertcrew",
                    "question": "What is an AlertCrew™?",
                    "answer": "An AlertCrew™ is your personal circle of trusted contacts—such as parents, close friends, partners, or teammates—who can be notified if your phone detects a possible gunshot nearby."
                },
                {
                    "id": "alertcrew-lead",
                    "question": "What is an AlertCrew™ Lead?",
                    "answer": "Your AlertCrew™ Lead is your primary safety contact. They receive app notifications and may also receive SMS alerts when a gunshot-like event is detected, depending on your settings."
                },
                {
                    "id": "how-alertcrew-works",
                    "question": "How does AlertCrew™ work?",
                    "answer": "If SplitSec detects a gunshot-like sound, the app can automatically send alerts that include a brief notification, your approximate location, and options to contact you. Alerts are sent only if you have opted in and only to the people you personally select."
                },
                {
                    "id": "alertcrew-communication",
                    "question": "Can my AlertCrew™ members communicate with me?",
                    "answer": "Yes. AlertCrew™ members can indicate that they are taking action, and you can mark yourself as safe once you are out of danger. These actions help close the loop during an incident."
                },
                {
                    "id": "who-can-add",
                    "question": "Who can I add to my AlertCrew™?",
                    "answer": "You can add anyone from your phone contacts, including parents, partners, close friends, roommates, neighbors, or a designated school safety contact. You always retain full control over who is included."
                },
                {
                    "id": "alertcrew-need-app",
                    "question": "Does my AlertCrew™ need the SplitSec app?",
                    "answer": "Installing the SplitSec app is recommended for full functionality and richer notifications. Your AlertCrew™ Lead may also receive SMS alerts depending on configuration."
                },
                {
                    "id": "use-without-alertcrew",
                    "question": "Can I use SplitSec without an AlertCrew™?",
                    "answer": "No. SplitSec requires at least one trusted contact to be added so alerts have a clear destination if an event occurs."
                },
                {
                    "id": "no-signal",
                    "question": "What if I have no signal during an incident?",
                    "answer": "Gunshot detection still occurs on-device. Alerts to your AlertCrew™ will send once connectivity is available. If the connection is restored shortly after detection, alerts may still be delivered."
                },
                {
                    "id": "third-party-access",
                    "question": "Can schools or third parties see my alerts?",
                    "answer": "No. Alerts are shared only with the trusted contacts you personally select. Schools, employers, and other third parties cannot view your alerts."
                },
                {
                    "id": "location-accuracy",
                    "question": "How accurate is the location that is shared?",
                    "answer": "Location accuracy varies based on device capabilities, signal quality, and whether the event occurs indoors or outdoors. SplitSec provides approximate location information rather than continuous tracking."
                }
            ]
        },
        {
            "id": "permissions-faq",
            "icon": "Shield",
            "title": "Permissions FAQ",
            "questions": [
                {
                    "id": "why-permissions",
                    "question": "Why does SplitSec request specific permissions?",
                    "answer": "SplitSec only requests permissions that are essential for safety alerts to function as designed."
                },
                {
                    "id": "microphone-access",
                    "question": "Why does SplitSec need microphone access?",
                    "answer": "Microphone access is required to listen for potential gunshot sounds. Audio is processed locally and is never recorded or uploaded."
                },
                {
                    "id": "location-access",
                    "question": "Why does SplitSec need location access?",
                    "answer": "Location is used only to share approximate position with your AlertCrew™ if you enable alerts. It is not used for continuous tracking."
                },
                {
                    "id": "contacts-permission",
                    "question": "Why does SplitSec request contacts permission?",
                    "answer": "Contacts access allows you to select trusted people for your AlertCrew™. Contact lists are not uploaded or stored."
                },
                {
                    "id": "battery-optimization",
                    "question": "Why does SplitSec ask to disable battery optimization?",
                    "answer": "Some devices aggressively restrict background apps. Disabling battery optimization helps ensure SplitSec can run continuously and deliver alerts reliably."
                },
                {
                    "id": "display-over-apps",
                    "question": "Why does SplitSec request \"display over other apps\"?",
                    "answer": "This permission allows critical full-screen alerts to appear even when your phone is locked or another app is in use."
                }
            ]
        },
        {
            "id": "parents-students",
            "icon": "Users",
            "title": "For Parents & Students",
            "questions": [
                {
                    "id": "always-listening",
                    "question": "Is the app listening all day?",
                    "answer": "Yes. Continuous listening is required because gunshots can occur at any time. The app analyzes brief audio segments locally and does not store recordings."
                },
                {
                    "id": "gunshot-detected",
                    "question": "What happens if a gunshot is detected?",
                    "answer": "You receive a high-priority, full-screen alert with sound and haptics. If enabled, alerts are also sent to your trusted contacts along with approximate location information."
                },
                {
                    "id": "what-to-do",
                    "question": "What should I do if I receive a gunshot alert?",
                    "answer": "You should always follow official safety protocols and instructions from trusted authorities. SplitSec is an awareness tool and should not be relied upon as the sole source of safety information."
                },
                {
                    "id": "school-events",
                    "question": "Will it work at school events or large indoor spaces?",
                    "answer": "Yes. These environments are a focus of beta testing, though results may vary by space and device."
                },
                {
                    "id": "pause",
                    "question": "Can monitoring be paused?",
                    "answer": "Yes. Users can pause detection at any time through a toggle in Settings and re-enable it when needed. Reminder notifications help prevent accidental long-term disabling."
                },
                {
                    "id": "silent-phone",
                    "question": "What if my phone is locked or on silent?",
                    "answer": "SplitSec uses high-priority notifications designed to override silent mode and display alerts even when the phone is locked."
                },
                {
                    "id": "battery-storage",
                    "question": "Does SplitSec use much battery or storage?",
                    "answer": "SplitSec is designed to be lightweight and energy-efficient. Some Android devices may require battery optimization settings to be adjusted."
                }
            ]
        },
        {
            "id": "press-government",
            "icon": "Building",
            "title": "Press & Government",
            "questions": [
                {
                    "id": "vs-microphone-grids",
                    "question": "How is SplitSec different from city-wide microphone systems?",
                    "answer": "SplitSec runs entirely on personal smartphones and does not require fixed microphones, cameras, or centralized infrastructure."
                },
                {
                    "id": "law-enforcement",
                    "question": "Is SplitSec intended for law enforcement or surveillance?",
                    "answer": "No. SplitSec is designed for personal awareness and trusted-contact notification, not for policing, surveillance, or enforcement."
                },
                {
                    "id": "data-collection",
                    "question": "What data does SplitSec collect?",
                    "answer": "By default, SplitSec collects no data beyond what the operating system requires. Any telemetry is optional, minimal, and anonymized."
                },
                {
                    "id": "independent-validation",
                    "question": "Do you have independent validation?",
                    "answer": "We plan to publish testing methodologies, lab notes, and reproducible evaluation protocols during alpha and beta phases."
                },
                {
                    "id": "media-assets",
                    "question": "Where can media find assets or inquire further?",
                    "answer": "Media inquiries should be directed to pri@splitsec.ai. Press materials are available at www.splitsec.ai/press."
                }
            ]
        },
        {
            "id": "schools-campuses",
            "icon": "Building",
            "title": "Schools, Campuses & Institutions",
            "questions": [
                {
                    "id": "replacement-systems",
                    "question": "Is SplitSec a replacement for existing safety systems?",
                    "answer": "No. SplitSec is designed as a supplementary personal awareness tool and does not replace institutional security systems."
                },
                {
                    "id": "pilot-data",
                    "question": "What data is shared during a pilot?",
                    "answer": "Only minimal, anonymized telemetry is shared, and only if participants opt in."
                },
                {
                    "id": "pilot-structure",
                    "question": "What does a pilot typically involve?",
                    "answer": "Pilots generally include a small participant group, defined test periods, and regular feedback sessions."
                },
                {
                    "id": "liability-reliance",
                    "question": "Does SplitSec create liability if relied upon alone?",
                    "answer": "No. SplitSec includes clear disclaimers stating that it should not replace official safety procedures or emergency response systems."
                },
                {
                    "id": "how-to-engage",
                    "question": "How can institutions engage with SplitSec?",
                    "answer": "For pilots, partnerships, or institutional inquiries, please contact Prithika Deivasigamani, Director of Strategy & Planning, at pri@splitsec.ai."
                }
            ]
        },
        {
            "id": "safety-limitations",
            "icon": "AlertTriangle",
            "title": "Safety & Limitations",
            "questions": [
                {
                    "id": "substitute-security",
                    "question": "Is SplitSec a substitute for school or workplace security?",
                    "answer": "No. SplitSec is an additional awareness layer and should not replace existing safety measures."
                },
                {
                    "id": "missed-false-alerts",
                    "question": "Can the app miss a gunshot or generate false alerts?",
                    "answer": "Yes. No detection system is perfect. Both missed detections and false alerts are possible, particularly during beta testing."
                },
                {
                    "id": "prevent-violence",
                    "question": "Does SplitSec prevent violence?",
                    "answer": "No. SplitSec does not prevent violent events. It is designed to help users become aware of potential danger sooner so they can respond appropriately."
                },
                {
                    "id": "what-to-do-alert",
                    "question": "What should I do if I receive an alert?",
                    "answer": "You should follow official safety instructions and contact emergency services if appropriate."
                }
            ]
        }
    ];

    const iconMap: Record<string, React.ComponentType<{ className?: string; }>> = {
        MessageCircle,
        Users,
        Shield,
        Building,
        AlertTriangle,
    };

    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) {
            return faqCategories;
        }

        const query = searchQuery.toLowerCase();
        return faqCategories
            .map(category => {
                const filteredQuestions = category.questions.filter(
                    q =>
                        q.question.toLowerCase().includes(query) ||
                        q.answer.toLowerCase().includes(query)
                );
                return filteredQuestions.length > 0
                    ? { ...category, questions: filteredQuestions }
                    : null;
            })
            .filter((cat): cat is FAQCategory => cat !== null);
    }, [searchQuery]);

    const toggleQuestion = (questionId: string) => {
        setOpenQuestion(openQuestion === questionId ? null : questionId);
    };

    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
                {/* Top Section - FAQ Introduction */}
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-16 lg:mb-20">
                    {/* Text Content - Left on Desktop */}
                    <div className="space-y-5 lg:space-y-6 order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] uppercase tracking-tight leading-tight">
                            FAQ
                        </h1>

                        {/* Paragraph */}
                        <p className="text-sm sm:text-base md:text-lg text-[#6E6E6E] leading-relaxed max-w-xl">
                            Quick answers to common questions about our product, policies, and how everything works.
                        </p>

                        {/* Button */}
                        <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#337CFF] text-[#337CFF] font-medium rounded-lg hover:bg-[#337CFF] hover:text-white transition-colors duration-200 text-sm sm:text-base">
                            Join The Movement
                        </button>
                    </div>

                    {/* Image - Right on Desktop */}
                    <div className="relative w-full order-1 lg:order-2">
                        <div className="relative w-full aspect-4/3 rounded-lg p-2">
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                                <Image
                                    src="/faq/faq.png"
                                    alt="SplitSec.AI Protection Active"
                                    fill
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section - Search and Heading */}
                <div className="text-center mb-8 lg:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-6">
                        We're Here to Answer all your Questions.
                    </h2>

                    {/* Search Bar */}
                    <div className="max-w-sm mx-auto relative">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-[#9E9E9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search Questions"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-2 bg-gray-50/20 border border-[#E0E0E0] rounded-lg text-[#9E9E9E] placeholder-[#9E9E9E] outline-none focus:border-[#337CFF] transition-colors"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section - FAQ Categories */}
                <div className="max-w-7xl mx-auto space-y-8">
                    {filteredCategories.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-[#6E6E6E] text-lg">No FAQs found matching your search.</p>
                        </div>
                    ) : (
                        filteredCategories.map((category) => {
                            const IconComponent = iconMap[category.icon] || MessageCircle;

                            return (
                                <div key={category.id} className="space-y-4">
                                    {/* Category Header - Non-collapsible */}
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#337CFF]/10 flex items-center justify-center">
                                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#337CFF]" />
                                        </div>
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#2D2D2D]">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Category Questions */}
                                    <div className="space-y-3">
                                        {category.questions.map((question) => {
                                            const isQuestionOpen = openQuestion === question.id;
                                            return (
                                                <div
                                                    key={question.id}
                                                    className="bg-white rounded-lg  overflow-hidden transition-all duration-200 border border-[#E0E0E0]"
                                                >
                                                    <button
                                                        onClick={() => toggleQuestion(question.id)}
                                                        className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center cursor-pointer justify-between text-left transition-colors duration-200 hover:bg-gray-50/50"
                                                    >
                                                        <span className="text-sm sm:text-base font-semibold text-[#2D2D2D] pr-4 flex-1">
                                                            {question.question}
                                                        </span>
                                                        <div className="shrink-0">
                                                            {isQuestionOpen ? (
                                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#337CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                                    </svg>
                                                                </div>
                                                            ) : (
                                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#337CFF] flex items-center justify-center">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4" fill="white"><rect fill="none" height="24" width="24" /><path d="M19,9h-2v6.59L5.41,4L4,5.41L15.59,17H9v2h10V9z" /></svg>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </button>
                                                    {isQuestionOpen && question.answer && (
                                                        <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                                                            <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
                                                                {question.answer}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
