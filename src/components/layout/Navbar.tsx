"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
    const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
    const [resourcesHoverTimeout, setResourcesHoverTimeout] = useState<NodeJS.Timeout | null>(null);
    const pathname = usePathname();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMobileResourcesOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            setIsMobileResourcesOpen(false);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileResourcesOpen(false);
    };

    const toggleMobileResources = () => {
        setIsMobileResourcesOpen(!isMobileResourcesOpen);
    };

    const handleResourcesMouseEnter = () => {
        if (resourcesHoverTimeout) {
            clearTimeout(resourcesHoverTimeout);
            setResourcesHoverTimeout(null);
        }
        setIsResourcesDropdownOpen(true);
    };

    const handleResourcesMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsResourcesDropdownOpen(false);
        }, 150); // 150ms delay
        setResourcesHoverTimeout(timeout);
    };

    return (
        <>
            {/* Backdrop overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />
            )}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-xl border-b" style={{
                background: 'rgba(7,10,18,0.58)',
                borderColor: 'rgba(233,236,248,0.08)'
            }}>
                <div className="max-w-[1920px] mx-auto px-3 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
                    <div className="flex items-center sm:justify-evenly justify-between h-14 sm:h-16">
                        {/* Left: Brand Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 sm:gap-2.5 hover:opacity-90 transition-opacity"
                            onClick={closeMobileMenu}
                        >
                            <Image
                                src="/logo.png"
                                alt="SplitSec.AI"
                                width={36}
                                height={36}
                                className="h-8 w-8 sm:h-9 sm:w-9 object-contain shrink-0"
                                priority
                            />
                            <span className="text-base sm:text-lg font-bold tracking-tight whitespace-nowrap">
                                <span style={{ color: 'rgba(80,140,255,0.92)' }}>SplitSec</span>
                                <span style={{ color: 'rgba(255,80,170,0.86)' }}>.AI</span>
                            </span>
                        </Link>

                        {/* Center: Navigation Links - Desktop */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link
                                href="/how-it-works"
                                style={{ color: pathname === "/how-it-works" ? 'rgba(80,140,255,0.92)' : 'rgba(233,236,248,0.78)' }}
                                className="text-sm font-bold transition-colors hover:opacity-80"
                            >
                                How It Works
                            </Link>
                            <Link
                                href="/industries"
                                style={{ color: pathname === "/industries" ? 'rgba(80,140,255,0.92)' : 'rgba(233,236,248,0.78)' }}
                                className="text-sm font-bold transition-colors hover:opacity-80"
                            >
                                Industries
                            </Link>
                            <Link
                                href="/get-involved"
                                style={{ color: pathname === "/get-involved" ? 'rgba(80,140,255,0.92)' : 'rgba(233,236,248,0.78)' }}
                                className="text-sm font-bold transition-colors hover:opacity-80"
                            >
                                Get Involved
                            </Link>
                            <div
                                className="relative"
                                onMouseEnter={handleResourcesMouseEnter}
                                onMouseLeave={handleResourcesMouseLeave}
                            >
                                <div className="flex items-center space-x-1">
                                    <Link
                                        href="/resources"
                                        style={{ color: (pathname === "/resources" || pathname?.startsWith("/resources/")) ? 'rgba(80,140,255,0.92)' : 'rgba(233,236,248,0.78)' }}
                                        className="text-sm font-bold transition-colors hover:opacity-80"
                                    >
                                        Resources
                                    </Link>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform ${isResourcesDropdownOpen ? 'rotate-180' : ''}`}
                                        style={{ color: 'rgba(233,236,248,0.78)' }}
                                    />
                                </div>
                                {isResourcesDropdownOpen && (
                                    <div
                                        className="absolute top-full left-0 mt-2 w-64 border rounded-lg shadow-2xl py-2 z-50 backdrop-blur-md"
                                        style={{
                                            background: 'linear-gradient(180deg, rgba(11,16,32,0.96), rgba(7,10,18,0.96))',
                                            borderColor: 'rgba(233,236,248,0.08)'
                                        }}
                                        onMouseEnter={handleResourcesMouseEnter}
                                        onMouseLeave={handleResourcesMouseLeave}
                                    >
                                        <Link
                                            href="/resources/school-leaders-guide"
                                            onClick={() => setIsResourcesDropdownOpen(false)}
                                            className={`block px-4 py-2 text-sm font-semibold transition-colors ${pathname === "/resources/school-leaders-guide"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/30"
                                                }`}
                                        >
                                            School Leaders Guide
                                        </Link>
                                        <Link
                                            href="/resources/events-parks-guide"
                                            onClick={() => setIsResourcesDropdownOpen(false)}
                                            className={`block px-4 py-2 text-sm font-semibold transition-colors ${pathname === "/resources/events-parks-guide"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/30"
                                                }`}
                                        >
                                            Events & Parks Guide
                                        </Link>
                                        <Link
                                            href="/resources/security-firms-guide"
                                            onClick={() => setIsResourcesDropdownOpen(false)}
                                            className={`block px-4 py-2 text-sm font-semibold transition-colors ${pathname === "/resources/security-firms-guide"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/30"
                                                }`}
                                        >
                                            Security Firms Guide
                                        </Link>
                                        <Link
                                            href="/blog"
                                            onClick={() => setIsResourcesDropdownOpen(false)}
                                            className={`block px-4 py-2 text-sm font-semibold transition-colors ${pathname === "/blog"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/30"
                                                }`}
                                        >
                                            Blog
                                        </Link>
                                        <Link
                                            href="/faq"
                                            onClick={() => setIsResourcesDropdownOpen(false)}
                                            className={`block px-4 py-2 text-sm font-semibold transition-colors ${pathname === "/faq"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/30"
                                                }`}
                                        >
                                            FAQ
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link
                                href="/about"
                                style={{ color: pathname === "/about" ? 'rgba(80,140,255,0.92)' : 'rgba(233,236,248,0.78)' }}
                                className="text-sm font-bold transition-colors hover:opacity-80"
                            >
                                About
                            </Link>
                        </div>

                        {/* Right: Schedule Demo Button - Desktop */}
                        <Link
                            href="/schedule-demo"
                            className="hidden md:block px-5 py-2.5 text-sm font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            style={{
                                borderColor: 'rgba(80,140,255,0.45)',
                                background: 'linear-gradient(135deg, rgba(80,140,255,0.28), rgba(255,255,255,0.06))',
                                color: 'rgba(233,236,248,0.92)'
                            }}
                        >
                            Schedule A Demo
                        </Link>

                        {/* Right: Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 -mr-2 rounded-lg text-slate-300 hover:bg-slate-800/50 active:bg-slate-800 transition-colors touch-manipulation"
                                aria-label="Toggle mobile menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                {isMobileMenuOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.5}
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
                                        strokeWidth={2.5}
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
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                            ? "max-h-[800px] opacity-100"
                            : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="py-4 space-y-1 border-t border-slate-800/50 mt-2">
                            <Link
                                href="/how-it-works"
                                onClick={closeMobileMenu}
                                className={`block text-sm font-bold transition-colors py-3 px-2 rounded-lg active:bg-slate-800/50 touch-manipulation ${pathname === "/how-it-works"
                                    ? "text-blue-400 bg-slate-800/50"
                                    : "text-slate-300 active:bg-slate-800/30"
                                    }`}
                            >
                                How It Works
                            </Link>

                            <Link
                                href="/industries"
                                onClick={closeMobileMenu}
                                className={`block text-sm font-bold transition-colors py-3 px-2 rounded-lg active:bg-slate-800/50 touch-manipulation ${pathname === "/industries"
                                    ? "text-blue-400 bg-slate-800/50"
                                    : "text-slate-300 active:bg-slate-800/30"
                                    }`}
                            >
                                Industries
                            </Link>

                            <Link
                                href="/get-involved"
                                onClick={closeMobileMenu}
                                className={`block text-sm font-bold transition-colors py-3 px-2 rounded-lg active:bg-slate-800/50 touch-manipulation ${pathname === "/get-involved"
                                    ? "text-blue-400 bg-slate-800/50"
                                    : "text-slate-300 active:bg-slate-800/30"
                                    }`}
                            >
                                Get Involved
                            </Link>

                            <div>
                                <button
                                    onClick={toggleMobileResources}
                                    className={`w-full flex items-center justify-between text-sm font-bold transition-colors py-3 px-2 rounded-lg active:bg-slate-800/30 touch-manipulation ${pathname === "/resources" || pathname?.startsWith("/resources/")
                                        ? "text-blue-400"
                                        : "text-slate-300"
                                        }`}
                                >
                                    <span>Resources</span>
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform duration-200 ${isMobileResourcesOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileResourcesOpen
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="pl-4 pt-1 pb-2 space-y-1">
                                        <Link
                                            href="/resources/school-leaders-guide"
                                            onClick={closeMobileMenu}
                                            className={`block text-sm font-semibold transition-colors py-2.5 px-2 rounded-lg active:bg-slate-800/30 touch-manipulation ${pathname === "/resources/school-leaders-guide"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-400 active:bg-slate-800/30"
                                                }`}
                                        >
                                            School Leaders Guide
                                        </Link>
                                        <Link
                                            href="/resources/events-parks-guide"
                                            onClick={closeMobileMenu}
                                            className={`block text-sm font-semibold transition-colors py-2.5 px-2 rounded-lg active:bg-slate-800/30 touch-manipulation ${pathname === "/resources/events-parks-guide"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-400 active:bg-slate-800/30"
                                                }`}
                                        >
                                            Events & Parks Guide
                                        </Link>
                                        <Link
                                            href="/resources/security-firms-guide"
                                            onClick={closeMobileMenu}
                                            className={`block text-sm font-semibold transition-colors py-2.5 px-2 rounded-lg active:bg-slate-800/30 touch-manipulation ${pathname === "/resources/security-firms-guide"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-400 active:bg-slate-800/30"
                                                }`}
                                        >
                                            Security Firms Guide
                                        </Link>
                                        <Link
                                            href="/blog"
                                            onClick={closeMobileMenu}
                                            className={`block text-sm font-semibold transition-colors py-2.5 px-2 rounded-lg active:bg-slate-800/30 touch-manipulation ${pathname === "/blog"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-400 active:bg-slate-800/30"
                                                }`}
                                        >
                                            Blog
                                        </Link>
                                        <Link
                                            href="/faq"
                                            onClick={closeMobileMenu}
                                            className={`block text-sm font-semibold transition-colors py-2.5 px-2 rounded-lg active:bg-slate-800/30 touch-manipulation ${pathname === "/faq"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-400 active:bg-slate-800/30"
                                                }`}
                                        >
                                            FAQ
                                        </Link>
                                    </div>
                                </div>
                            </div>



                            <Link
                                href="/about"
                                onClick={closeMobileMenu}
                                className={`block text-sm font-bold transition-colors py-3 px-2 rounded-lg active:bg-slate-800/30 touch-manipulation ${pathname === "/about"
                                    ? "text-blue-400 bg-slate-800/50"
                                    : "text-slate-300 active:bg-slate-800/30"
                                    }`}
                            >
                                About
                            </Link>

                            <Link
                                href="/schedule-demo"
                                onClick={closeMobileMenu}
                                className="block text-sm font-bold transition-colors py-3 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 touch-manipulation text-center mt-4 shadow-lg"
                            >
                                Schedule Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
