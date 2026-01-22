"use client";

interface EnvironmentCard {
    id: string;
    title: string;
    icon: React.ReactNode;
    iconColor: string;
}

const environments: EnvironmentCard[] = [
    {
        id: "schools",
        title: "Schools & Universities",
        iconColor: "#8a2be2",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="currentColor" />
                <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: "outdoor-events",
        title: "Outdoor Events & Parks",
        iconColor: "#ffa500",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="10" width="16" height="10" rx="1" fill="currentColor" />
                <path d="M5 10V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V10" fill="currentColor" />
                <rect x="6" y="6" width="12" height="2" rx="0.5" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: "security-firms",
        title: "Security Firms",
        iconColor: "#4169e1",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="currentColor" />
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        ),
    },
    {
        id: "law-enforcement",
        title: "Law Enforcement",
        iconColor: "#4682b4",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="currentColor" />
                <circle cx="12" cy="9" r="2.5" fill="#FFD700" />
            </svg>
        ),
    },
    {
        id: "non-profits",
        title: "Non-profits",
        iconColor: "#20b2aa",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
        ),
    },
    {
        id: "healthcare",
        title: "Healthcare",
        iconColor: "#ff69b4",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor" />
                <path d="M12 8V16M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "local-government",
        title: "Local Government & Public Facilities",
        iconColor: "#32cd32",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <rect x="4" y="12" width="16" height="8" rx="1" fill="currentColor" />
                <rect x="6" y="14" width="4" height="2" fill="white" />
                <rect x="14" y="14" width="4" height="2" fill="white" />
            </svg>
        ),
    },
    {
        id: "houses-worship",
        title: "Houses of Worship",
        iconColor: "#9370db",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="14" r="2" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: "entertainment",
        title: "Entertainment & Nightlife Venues",
        iconColor: "#ff6347",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="currentColor" />
                <path d="M8 8L16 16M16 8L8 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "individuals-families",
        title: "Individuals & Families",
        iconColor: "#008080",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="2.5" fill="currentColor" />
                <path d="M7 11C5.34 11 4 12.34 4 14V18H10V14C10 12.34 8.66 11 7 11Z" fill="currentColor" />
                <circle cx="17" cy="7" r="2.5" fill="currentColor" />
                <path d="M17 11C15.34 11 14 12.34 14 14V18H20V14C20 12.34 18.66 11 17 11Z" fill="currentColor" />
                <circle cx="12" cy="5.5" r="2" fill="currentColor" />
                <path d="M12 9C10.9 9 10 9.9 10 11V15H14V11C14 9.9 13.1 9 12 9Z" fill="currentColor" />
            </svg>
        ),
    },
];

export default function ProtectionBuiltFor() {
    return (
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-14 lg:mb-16">
                    <h2 className="text-2xl sm:text-[32px] font-bold text-gray-900 mb-4 sm:mb-5">
                        Who SplitSec AI Is For
                    </h2>
                    <p className="text-md sm:text-[20px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Industry-specific resources and personal safety support designed to help you respond faster and stay safer.
                    </p>
                </div>

                {/* Categories Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12 lg:mb-16">
                    {environments.map((env) => (
                        <div
                            key={env.id}
                            className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 flex flex-col items-center text-center group cursor-pointer"
                        >
                            {/* Icon Container */}
                            <div className="mb-4 sm:mb-5">
                                <div
                                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: env.iconColor }}
                                >
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 text-white">
                                        {env.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug group-hover:text-gray-700 transition-colors duration-300">
                                {env.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Call-to-Action Button */}
                <div className="flex justify-center mt-4">
                    <button className="bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold py-3.5 sm:py-4 px-10 sm:px-14 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-100">
                        See How It Works for You
                    </button>
                </div>
            </div>
        </section>
    );
}
