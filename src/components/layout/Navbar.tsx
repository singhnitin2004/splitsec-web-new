"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 fixed sm:top-2 top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-xl border border-gray-200 sm:rounded-2xl rounded-b-xl">
            <div className="max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex items-center h-13">
                    {/* Left: Brand Logo */}
                    <div className="flex-1">
                        <Link
                            href="/"
                            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity w-fit"
                            onClick={closeMobileMenu}
                        >
                            <Image
                                src="/logo.png"
                                alt="SplitSec.AI"
                                width={36}
                                height={36}
                                className="h-9 w-9 object-contain"
                                priority
                            />
                            <span className="text-lg font-bold tracking-tight">
                                <span className="text-blue-600">SplitSec</span>
                                <span className="text-pink-500">.AI</span>
                            </span>
                        </Link>
                    </div>

                    {/* Center: Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/how-it-works"
                            className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            How It Works
                        </Link>
                        {/* <Link
                            href="/contact"
                            className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Contact
                        </Link> */}
                        <Link
                            href="/blog"
                            className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/faq"
                            className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            FAQ
                        </Link>
                        <Link
                            href="/get-involved"
                            className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Get Involved
                        </Link>
                    </div>

                    {/* Right: Mobile Menu Button */}
                    <div className="flex-1 flex justify-end md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Right: Empty space for balance - Desktop */}
                    <div className="hidden md:block flex-1"></div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="py-4 space-y-3 border-t border-gray-200 mt-2">
                        <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className="block text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors py-2"
                        >
                            Home
                        </Link>
                        <Link
                            href="/how-it-works"
                            onClick={closeMobileMenu}
                            className="block text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors py-2"
                        >
                            How It Works
                        </Link>

                        <Link
                            href="/blog"
                            onClick={closeMobileMenu}
                            className="block text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors py-2"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/get-involved"
                            onClick={closeMobileMenu}
                            className="block text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors py-2"
                        >
                            Get Involved
                        </Link>

                        <Link
                            href="/faq"
                            onClick={closeMobileMenu}
                            className="block text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors py-2"
                        >
                            FAQ
                        </Link>

                        <Link
                            href="/about"
                            onClick={closeMobileMenu}
                            className="block text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors py-2"
                        >
                            About
                        </Link>

                        {/* <Link
                            href="/contact"
                            onClick={closeMobileMenu}
                            className="block text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors py-2"
                        >
                            Contact
                        </Link> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
