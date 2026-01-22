"use client";

interface VideoSectionProps {
    title: string;
    description: string;
    videoUrl: string; // YouTube video ID or full URL
    badge?: string;
    badgeIcon?: "kickstarter" | "question" | "custom";
    className?: string;
}

export default function VideoSection({
    title,
    description,
    videoUrl,
    badge,
    badgeIcon = "question",
    className = "",
}: VideoSectionProps) {
    // Extract YouTube ID from URL if full URL is provided
    const getYouTubeId = (url: string): string => {
        // If it's already just an ID, return it
        if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
            return url;
        }
        
        // Extract ID from various YouTube URL formats
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
            /youtube\.com\/.*[?&]v=([^&\n?#]+)/,
        ];
        
        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) {
                return match[1];
            }
        }
        
        return url; // Fallback to original if no match
    };

    const youtubeId = getYouTubeId(videoUrl);

    return (
        <div className={`relative w-full pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-white ${className}`}>
            <div className="sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    {/* Badge - Optional */}
                    {badge && (
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-gray-100 text-xs font-medium text-black border border-gray-200">
                                {badgeIcon === "kickstarter" ? (
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                    </svg>
                                ) : (
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                )}
                                {badge}
                            </span>
                        </div>
                    )}

                    {/* Title */}
                    <h2 className="text-2xl sm:text-[32px] font-bold text-black leading-tight md:mb-6 mb-2">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-md sm:text-[20px] text-gray-600 leading-relaxed mb-10 max-w-xl">
                        {description}
                    </p>

                    {/* Video Section */}
                    <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
                        {youtubeId ? (
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&rel=0`}
                                title={title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                frameBorder="0"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <div className="text-center space-y-4 p-8">
                                    <svg className="w-20 h-20 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                    </svg>
                                    <p className="text-gray-500 font-medium text-lg">Video Placeholder</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
