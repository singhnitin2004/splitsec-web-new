"use client";

import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Recent featured blog posts
    const recentBlogPosts = [
        {
            id: 1,
            image: "/Blog/ethical-ai.webp",
            author: "Prithika Deivadgamani",
            date: "20 Jun 2022",
            title: "Revealing SplitSec AI — A Privacy-First Gunshot Detection App",
            description: "Gun violence has become one of the most urgent safety challenges of our time. At SplitSec, we're committed to leveraging cutting-edge AI technology to create safer communities while maintaining the highest standards of privacy and ethical AI practices.",
            category: "Technology",
            readTime: "5 min read"
        },
        {
            id: 2,
            image: "/Blog/ethical-ai.webp",
            author: "Sri Deivadgamani",
            date: "19 Jan 2022",
            title: "How to Setup SplitSec.AI",
            description: "Learn how to quickly set up and configure SplitSec.AI for your organization. This comprehensive guide walks you through installation, configuration, and best practices for optimal performance.",
            category: "Guide",
            readTime: "8 min read"
        },
        {
            id: 3,
            image: "/Blog/chicago-innovation-award.webp",
            author: "Prithika Deivadgamani",
            date: "18 Jan 2022",
            title: "Things to Know",
            description: "Essential information about gunshot detection technology, privacy considerations, and how SplitSec.AI is revolutionizing public safety through innovative AI solutions.",
            category: "Insights",
            readTime: "6 min read"
        },
    ];

    // Sample blog posts data with more details
    const allBlogPosts = [
        {
            id: 1,
            image: "/Blog/ethical-ai.webp",
            author: "Alex Whitten",
            date: "17 Jan 2022",
            title: "Bill Walsh leadership lessons",
            description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Discover the leadership principles that shaped one of the greatest coaches in NFL history.",
            category: "Leadership",
            readTime: "7 min read",
            tags: ["Leadership", "Management", "Strategy"]
        },
        {
            id: 2,
            image: "/Blog/chicago-innovation-award.webp",
            author: "Demi Wilkinson",
            date: "16 Jan 2022",
            title: "PM mental models",
            description: "Mental models are simple expressions of complex processes or relationships. Learn how product managers use these frameworks to make better decisions.",
            category: "Product",
            readTime: "6 min read",
            tags: ["Product", "Management", "Strategy"]
        },
        {
            id: 3,
            image: "/Blog/reveat-gunshot-detection.png",
            author: "Candice Wu",
            date: "15 Jan 2022",
            title: "What is Wireframing?",
            description: "Introduction to Wireframing and its Principles. Learn from the best in the industry and master the art of creating effective wireframes.",
            category: "Design",
            readTime: "5 min read",
            tags: ["Design", "UX", "UI"]
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
                                className="w-full h-full"
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
                    <div className="flex items-center justify-between mb-10 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]">
                            Recent blog posts
                        </h2>
                        <div className="hidden sm:flex items-center gap-2 text-[#337CFF] font-medium text-sm hover:gap-3 transition-all duration-300 cursor-pointer">
                            <span>View all</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                        {/* Large Featured Post - Left */}
                        <article className="group cursor-pointer">
                            <div className="space-y-6">
                                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                                    <Image
                                        src={recentBlogPosts[0].image}
                                        alt={recentBlogPosts[0].title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="inline-block bg-[#337CFF] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm">
                                            {recentBlogPosts[0].category}
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-4 px-2">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <p className="text-sm sm:text-base text-[#337CFF] font-semibold tracking-wide">
                                            {recentBlogPosts[0].author}
                                        </p>
                                        <span className="text-gray-400">•</span>
                                        <p className="text-sm sm:text-base text-[#6E6E6E]">
                                            {recentBlogPosts[0].date}
                                        </p>
                                        <span className="text-gray-400">•</span>
                                        <p className="text-sm text-[#6E6E6E]">
                                            {recentBlogPosts[0].readTime}
                                        </p>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-tight group-hover:text-[#337CFF] transition-colors duration-300">
                                        {recentBlogPosts[0].title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-[#6E6E6E] leading-relaxed line-clamp-3">
                                        {recentBlogPosts[0].description}
                                    </p>
                                    <div className="flex items-center gap-2 text-[#337CFF] font-semibold group-hover:gap-3 transition-all duration-300 pt-2">
                                        <span>Read article</span>
                                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Smaller Posts - Right */}
                        <div className="space-y-6 lg:space-y-8">
                            {recentBlogPosts.slice(1).map((post) => (
                                <article key={post.id} className="group cursor-pointer rounded-xl lg:rounded-2xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#337CFF]/30 hover:-translate-y-1">
                                    <div className="flex gap-5 sm:gap-6">
                                        <div className="relative w-40 sm:w-48 lg:w-56 shrink-0 overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                            <div className="relative aspect-[4/3] w-full">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                                                />
                                                {/* Category Badge on Image */}
                                                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span className="inline-block bg-[#337CFF] text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3 flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <p className="text-xs sm:text-sm text-[#337CFF] font-semibold tracking-wide">
                                                    {post.author}
                                                </p>
                                                <span className="text-gray-400 text-xs">•</span>
                                                <p className="text-xs sm:text-sm text-[#6E6E6E]">
                                                    {post.date}
                                                </p>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-[#2D2D2D] leading-tight group-hover:text-[#337CFF] transition-colors duration-300 line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-[#6E6E6E] leading-relaxed line-clamp-2">
                                                {post.description}
                                            </p>
                                            <div className="flex items-center justify-between pt-1">
                                                <p className="text-xs text-[#6E6E6E]">
                                                    {post.readTime}
                                                </p>
                                                <div className="flex items-center gap-1 text-[#337CFF] font-medium text-sm opacity-0 group-hover:opacity-100 group-hover:gap-2 transition-all duration-300">
                                                    <span>Read</span>
                                                    <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Blog Posts Section */}
                <div className="mt-20 sm:mt-24 lg:mt-32 pb-20">
                    {/* Header with Category and Search */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
                        <div className="space-y-2">
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]">
                                All blog posts
                            </h2>
                            <p className="text-base sm:text-lg text-[#6E6E6E]">
                                Explore our latest insights, stories, and updates
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            {/* Category Dropdown */}
                            <div className="relative group">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="appearance-none w-full sm:w-auto px-5 py-3 pr-11 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#337CFF] bg-white text-[#2D2D2D] text-sm font-semibold cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-md"
                                >
                                    <option value="all">All Categories</option>
                                    <option value="leadership">Leadership</option>
                                    <option value="product">Product</option>
                                    <option value="design">Design</option>
                                    <option value="technology">Technology</option>
                                    <option value="community">Community</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                    <svg className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#337CFF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Search Bar */}
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full sm:w-72 px-5 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#337CFF] text-sm text-[#2D2D2D] placeholder:text-[#6E6E6E] transition-all duration-300 hover:border-gray-300 hover:shadow-md"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <svg className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#337CFF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {allBlogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Gradient Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-10 transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="inline-flex items-center bg-[#337CFF] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Read Time Badge */}
                                    <div className="absolute top-4 right-4 z-10 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#2D2D2D] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-6 space-y-4">
                                    {/* Author and Date */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-gradient-to-br from-[#337CFF] to-[#2868db] rounded-full flex items-center justify-center text-white font-semibold text-xs shadow-md">
                                                {post.author.charAt(0)}
                                            </div>
                                            <p className="text-sm font-semibold text-[#2D2D2D]">
                                                {post.author}
                                            </p>
                                        </div>
                                        <span className="text-gray-300">•</span>
                                        <p className="text-sm text-[#6E6E6E]">
                                            {post.date}
                                        </p>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-[#2D2D2D] leading-tight line-clamp-2 group-hover:text-[#337CFF] transition-colors duration-300 min-h-[3.5rem]">
                                        {post.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-[#6E6E6E] leading-relaxed line-clamp-3 min-h-[3.75rem]">
                                        {post.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {post.tags.slice(0, 3).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-block text-xs font-medium text-[#337CFF] bg-[#337CFF]/10 px-2.5 py-1 rounded-md hover:bg-[#337CFF]/20 transition-colors duration-200"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Link */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <div className="flex items-center gap-2 text-[#337CFF] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                            <span>Read article</span>
                                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>

                                        {/* Share Icon */}
                                        <button
                                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Add share functionality here
                                            }}
                                        >
                                            <svg className="w-5 h-5 text-[#6E6E6E] hover:text-[#337CFF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
