'use client';

import { Calendar, Shield, Users, Clock, CheckCircle, Video } from "lucide-react";

const ScheduleDemo = () => {
    const features = [
        {
            icon: Video,
            title: "How it works",
            description: "Gunshot detection on standard smartphones, with no additional hardware required.",
            color: "blue"
        },
        {
            icon: Shield,
            title: "Privacy-first by design",
            description: "On-device machine learning with no raw audio recording or cloud upload.",
            color: "pink"
        },
        {
            icon: Clock,
            title: "Real-world pilots",
            description: "What a 60–90 day pilot can look like, if and when it makes sense.",
            color: "blue"
        }
    ];

    const targetAudience = [
        "School and district administrators",
        "College and university leaders",
        "Campus safety and security teams",
        "Security organizations and partners",
        "Public-sector safety teams"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-28 bg-white  border-gray-200">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                        See how <span className="text-blue-600">SplitSec AI</span> works for your environment
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg sm:text-xl text-gray-700">
                            A short, exploratory walkthrough of our privacy-first, smartphone-based gunshot detection system,
                            tailored to your setting and questions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content: Calendly + Target Audience */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2">
                        {/* Right Column - Calendly Booking */}
                        <div className="order-2 lg:order-2">
                            <div className="space-y-6">
                                {/* Calendly Embed */}
                                <div id="schedule" className="overflow-hidden rounded-2xl border-2 border-gray-200 shadow-lg" style={{ height: '700px' }}>
                                    <iframe
                                        title="Schedule a demo"
                                        src="https://calendly.com/demo-splitsecai/30min"
                                        style={{ width: '100%', height: '100%', border: '0' }}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Left Column - Target Audience & Benefits */}
                        <div className="order-1 lg:order-1 space-y-8">
                            {/* Who this is for */}
                            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-gray-200">
                                <div className="bg-gray-50 p-8 border-b border-gray-200">
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <Users className="h-5 w-5 text-blue-600" />
                                        <h2 className="text-2xl font-bold text-gray-900">Who this is for</h2>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Demos are exploratory and focused on mutual fit. We see them as an opportunity to understand
                                        the specific needs of:
                                    </p>
                                </div>
                                <div className="p-8">
                                    <ul className="space-y-4">
                                        {targetAudience.map((audience, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className={`h-5 w-5 mt-0.5 shrink-0 text-blue-500`} />
                                                <span className="text-gray-800 font-medium">{audience}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Additional Info Card */}
                            <div className=" rounded-3xl p-8 shadow-lg border-2 border-gray-200">
                                <h3 className="text-2xl font-bold mb-4">Why schedule a demo?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                                        <span>See our gunshot detection system in action</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                                        <span>Discuss your specific security needs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                                        <span>Learn about pilot program options</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                                        <span>Get answers to your questions</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Cards Section */}
            <section className="py-16 sm:py-20 border-t border-gray-200">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-3">
                        {features.map((feature, index) => {
                            const isBlue = feature.color === 'blue';
                            const bgColor = isBlue ? 'bg-blue-50' : 'bg-pink-50';
                            const iconColor = isBlue ? 'text-blue-600' : 'text-pink-600';
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className={`group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200`}
                                >
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${bgColor} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`h-7 w-7 ${iconColor}`} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
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
