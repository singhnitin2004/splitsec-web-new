"use client";

import Link from "next/link";

declare global {
    interface Window {
        chatbase?: any;
    }
}

export default function BottomActionBar() {
    const handleAskQuestion = () => {
        // Try to open the Chatbase chatbot
        if (typeof window !== "undefined" && window.chatbase) {
            try {
                // Try modern API method first (window.chatbase.open())
                if (typeof window.chatbase.open === "function") {
                    window.chatbase.open();
                } else if (typeof window.chatbase === "function") {
                    // Fallback to function call pattern (window.chatbase("open"))
                    window.chatbase("open");
                } else {
                    // Fallback: redirect to contact page if chatbot fails
                    window.location.href = "/contact";
                }
            } catch (error) {
                console.error("Error opening Chatbase:", error);
                // Fallback: redirect to contact page if chatbot fails
                window.location.href = "/contact";
            }
        } else {
            // If Chatbase is not loaded yet, wait a bit and try again
            setTimeout(() => {
                if (window.chatbase) {
                    try {
                        if (typeof window.chatbase.open === "function") {
                            window.chatbase.open();
                        } else if (typeof window.chatbase === "function") {
                            window.chatbase("open");
                        } else {
                            window.location.href = "/contact";
                        }
                    } catch (error) {
                        console.error("Error opening Chatbase:", error);
                        window.location.href = "/contact";
                    }
                } else {
                    // Fallback: redirect to contact page
                    window.location.href = "/contact";
                }
            }, 500);
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md border-t shadow-2xl" style={{
            background: 'rgba(7,10,18,0.58)',
            borderColor: 'rgba(233,236,248,0.08)'
        }}>
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-1">
                <div className="flex items-center justify-center gap-3">
                    {/* Ask a Question Button */}
                    <button
                        onClick={handleAskQuestion}
                        className="flex items-center gap-2 px-5 py-1 backdrop-blur-sm border rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                        style={{
                            background: 'linear-gradient(180deg, rgba(11,16,32,0.96), rgba(7,10,18,0.96))',
                            borderColor: 'rgba(233,236,248,0.08)'
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                            style={{ color: 'rgba(233,236,248,0.78)' }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                            />
                        </svg>
                        <span className="text-xs font-medium" style={{ color: 'rgba(233,236,248,0.78)' }}>
                            Ask a Question
                        </span>
                    </button>

                    {/* Schedule a Demo Button */}
                    <Link
                        href="/schedule-demo"
                        className="flex items-center gap-2 px-5 py-1 backdrop-blur-sm border rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
                        style={{
                            background: 'linear-gradient(135deg, rgba(80,140,255,0.28), rgba(255,255,255,0.06))',
                            borderColor: 'rgba(80,140,255,0.45)'
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                            style={{ color: 'rgba(80,140,255,0.92)' }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                            />
                        </svg>
                        <span className="text-xs font-medium" style={{ color: 'rgba(233,236,248,0.92)' }}>
                            Schedule a Demo
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
