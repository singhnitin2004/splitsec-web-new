"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full relative overflow-hidden border-t border-gray-200/50 ">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
                {/* Main Footer Content */}
                <div className="pt-12 pb-8 sm:pt-16 sm:pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-1 space-y-5">
                            <Link
                                href="/"
                                className="flex items-center gap-2.5 hover:opacity-90 transition-all duration-300 w-fit group"
                            >
                                <div className="relative">
                                    <Image
                                        src="/logo.png"
                                        alt="SplitSec.AI"
                                        width={40}
                                        height={40}
                                        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                                        priority
                                    />
                                </div>
                                <span className="text-xl font-bold tracking-tight">
                                    <span className="text-blue-600">SplitSec</span>
                                    <span className="text-pink-500">.AI</span>
                                </span>
                            </Link>
                            <p className="text-gray-600 text-base leading-relaxed max-w-md">
                                SplitSec AI isn't just an app—it's a movement for safer schools, neighborhoods, and public spaces. Together, we can build communities where everybody feels safe.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-1">
                            <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-5">
                                Quick Links
                            </h3>
                            <nav className="flex flex-col gap-3.5">
                                <Link
                                    href="/"
                                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium w-fit group"
                                >
                                    <span className="relative">
                                        Home
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                                    </span>
                                </Link>
                                <Link
                                    href="/how-it-works"
                                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium w-fit group"
                                >
                                    <span className="relative">
                                        How it works
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                                    </span>
                                </Link>
                                <Link
                                    href="/get-involved"
                                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium w-fit group"
                                >
                                    <span className="relative">
                                        Get involved
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </nav>
                        </div>

                        {/* Company Links */}
                        <div className="lg:col-span-1">
                            <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-5">
                                Company
                            </h3>
                            <nav className="flex flex-col gap-3.5">
                                <Link
                                    href="/about"
                                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium w-fit group"
                                >
                                    <span className="relative">
                                        About us
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                                    </span>
                                </Link>
                                <Link
                                    href="/faq"
                                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium w-fit group"
                                >
                                    <span className="relative">
                                        FAQ
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                                    </span>
                                </Link>
                                <Link
                                    href="/blog"
                                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium w-fit group"
                                >
                                    <span className="relative">
                                        Blog
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                                    </span>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium w-fit group"
                                >
                                    <span className="relative">
                                        Contact
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </nav>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-8"></div>

                    {/* Social Media & Copyright Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Social Media Links */}
                        <div className="flex items-center gap-1">
                            <div className="flex items-center gap-2">
                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-200 group"
                                    aria-label="LinkedIn"
                                >
                                    <svg
                                        className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white transition-all duration-200 group"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                {/* X (Twitter) */}
                                <a
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-all duration-200 group"
                                    aria-label="X (Twitter)"
                                >
                                    <svg
                                        className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>

                                {/* YouTube */}
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-200 group"
                                    aria-label="YouTube"
                                >
                                    <svg
                                        className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-200 group"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                {/* Threads */}
                                <a
                                    href="https://threads.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-all duration-200 group"
                                    aria-label="Threads"
                                >
                                    <svg
                                        className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.186 8.302c1.161 0 2.191.49 2.93 1.27.738.78 1.184 1.82 1.184 2.93 0 1.11-.446 2.15-1.184 2.93-.739.78-1.769 1.27-2.93 1.27-1.161 0-2.191-.49-2.93-1.27-.738-.78-1.184-1.82-1.184-2.93 0-1.11.446-2.15 1.184-2.93.739-.78 1.769-1.27 2.93-1.27zm0-1.302c-1.5 0-2.9.63-3.9 1.73-1 1.1-1.6 2.6-1.6 4.27 0 1.67.6 3.17 1.6 4.27 1 1.1 2.4 1.73 3.9 1.73s2.9-.63 3.9-1.73c1-1.1 1.6-2.6 1.6-4.27 0-1.67-.6-3.17-1.6-4.27-1-1.1-2.4-1.73-3.9-1.73z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-right">
                            <p className="text-gray-600 text-sm">
                                © {new Date().getFullYear()} SplitSec.AI. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
