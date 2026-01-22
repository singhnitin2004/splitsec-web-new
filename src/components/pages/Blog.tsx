"use client";

import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Sample blog posts data
    const allBlogPosts = [
        {
            id: 1,
            image: "/Blog/ethical-ai.webp",
            author: "Alex Whitten",
            date: "17 Jan 2022",
            title: "Bill Walsh leadership lessons",
            description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
        },
        {
            id: 2,
            image: "/Blog/chicago-innovation-award.webp",
            author: "Demi Wilkinson",
            date: "16 Jan 2022",
            title: "PM mental models",
            description: "Mental models are simple expressions of complex processes or relationships."
        },
        {
            id: 3,
            image: "/Blog/reveat-gunshot-detection.png",
            author: "Candice Wu",
            date: "15 Jan 2022",
            title: "What is Wireframing?",
            description: "Introduction to Wireframing and its Principles. Learn from the best in the industry."
        },
    ];

    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-8 sm:mt-0">
                    {/* Image - First on Mobile, Right on Desktop */}
                    <div className="relative w-full order-1 lg:order-2">
                        <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] lg:aspect-[4/3]">
                            <Image
                                src="/Blog/hero.png"
                                alt="SplitSec.AI Blog"
                                fill
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content - Second on Mobile, Left on Desktop */}
                    <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] uppercase tracking-tight leading-tight">
                            BLOGS
                        </h1>

                        {/* Paragraph */}
                        <p className="text-base sm:text-lg md:text-xl text-[#6E6E6E] leading-relaxed">
                            Subscribe to learn about new product features, the latest in technology, solutions, and updates.
                        </p>

                        {/* Newsletter Subscription */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 sm:px-5 sm:py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#337CFF] text-base sm:text-lg"
                            />
                            <button className="w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 bg-[#337CFF] text-white font-medium rounded-lg hover:bg-[#2868db] transition-colors duration-200 text-base sm:text-lg">
                                Subscribe
                            </button>
                        </div>

                        {/* Privacy Policy Text */}
                        <p className="text-sm text-[#6E6E6E]">
                            We care about your data in our{" "}
                            <a href="#" className="text-[#337CFF] hover:underline">
                                privacy policy
                            </a>
                        </p>
                    </div>
                </div>

                {/* Recent Blog Posts Section */}
                <div className="mt-20 sm:mt-24 lg:mt-32">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-10 sm:mb-12">
                        Recent blog posts
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                        {/* Large Featured Post - Left */}
                        <div className="group cursor-pointer">
                            <div className="space-y-6">
                                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-4xl shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <Image
                                        src="/Blog/ethical-ai.webp"
                                        alt="Revealing SplitSec AI"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="space-y-4 px-2">
                                    <p className="text-sm sm:text-base text-[#337CFF] font-semibold tracking-wide">
                                        Prithika Deivadgamani • 20 Jun 2022
                                    </p>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-tight group-hover:text-[#337CFF] transition-colors duration-300">
                                        Revealing SplitSec AI — A Privacy-First Gunshot Detection App
                                    </h3>
                                    <p className="text-base sm:text-lg text-[#6E6E6E] leading-relaxed">
                                        Gun violence has become of the most urgent safety challenges of our time. At S...
                                    </p>
                                    <div className="flex items-center gap-2 text-[#337CFF] font-medium group-hover:gap-3 transition-all duration-300">
                                        <span>Read more</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Smaller Posts - Right */}
                        <div className="space-y-6 lg:space-y-8">
                            {/* Post 1 */}
                            <div className="group cursor-pointer  rounded-xl p-4 sm:p-6 hover:shadow-4xl transition-all duration-300 border border-gray-100 hover:border-[#337CFF]/30">
                                <div className="flex gap-5 sm:gap-6">
                                    <div className="relative w-48 sm:w-56 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
                                        <div className="relative aspect-[4/3] w-full">
                                            <Image
                                                src="/Blog/ethical-ai.webp"
                                                alt="How to Setup SplitSec.AI"
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3 flex-1 min-w-0">
                                        <p className="text-xs sm:text-sm text-[#337CFF] font-semibold tracking-wide">
                                            Sri Deivadgamani • 19 Jan 2022
                                        </p>
                                        <h3 className="text-lg sm:text-xl font-bold text-[#2D2D2D] leading-tight group-hover:text-[#337CFF] transition-colors duration-300">
                                            How to Setup SplitSec.AI
                                        </h3>
                                        <p className="text-sm text-[#6E6E6E] leading-relaxed line-clamp-2">
                                            Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Post 2 */}
                            <div className="group cursor-pointer rounded-4xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#337CFF]/30">
                                <div className="flex gap-5 sm:gap-6">
                                    <div className="relative w-48 sm:w-56 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
                                        <div className="relative aspect-[4/3] w-full">
                                            <Image
                                                src="/Blog/chicago-innovation-award.webp"
                                                alt="Things to Know"
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3 flex-1 min-w-0">
                                        <p className="text-xs sm:text-sm text-[#337CFF] font-semibold tracking-wide">
                                            Prithika Deivadgamani • 18 Jan 2022
                                        </p>
                                        <h3 className="text-lg sm:text-xl font-bold text-[#2D2D2D] leading-tight group-hover:text-[#337CFF] transition-colors duration-300">
                                            Things to Know
                                        </h3>
                                        <p className="text-sm text-[#6E6E6E] leading-relaxed line-clamp-2">
                                            The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Blog Posts Section */}
                <div className="mt-20 sm:mt-24 lg:mt-32 pb-20">
                    {/* Header with Category and Search */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
                            All blog posts
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-3">
                            {/* Category Dropdown */}
                            <div className="relative">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="appearance-none w-full sm:w-auto px-4 py-2.5 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 bg-white text-gray-700 text-sm font-medium cursor-pointer transition-colors"
                                >
                                    <option value="all">Select Category</option>
                                    <option value="leadership">Leadership</option>
                                    <option value="product">Product Management</option>
                                    <option value="design">Design</option>
                                    <option value="technology">Technology</option>
                                    <option value="community">Community</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Search Bar */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search Articles"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full sm:w-64 px-4 py-2.5 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 text-sm text-gray-700 placeholder:text-gray-500 transition-colors"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allBlogPosts.map((post) => (
                            <article key={post.id} className="group cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                {/* Image */}
                                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-3">
                                    <p className="text-sm font-medium text-purple-600">
                                        {post.author} • {post.date}
                                    </p>
                                    <h3 className="text-xl font-semibold text-gray-900 leading-tight line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                                        {post.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
