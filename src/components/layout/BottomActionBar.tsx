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
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#f6f8fc] border-t border-gray-200 overflow-visible">
            <div className="max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-1.5">
                <div className="flex items-center justify-center gap-2">
                    {/* Ask a question Button */}
                    <button
                        onClick={handleAskQuestion}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-gray-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                            />
                        </svg>
                        <span className="text-sm font-medium text-gray-600">
                            Ask a question
                        </span>
                    </button>

                    {/* Book 30 minutes Button */}
                    <Link
                        href="/schedule-demo"
                        className="flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        <span className="text-sm font-medium text-gray-600">
                            Book 30 minutes
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
