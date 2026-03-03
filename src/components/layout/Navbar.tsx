"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDeployDropdownOpen, setIsDeployDropdownOpen] = useState(false);
    const [isMobileDeployOpen, setIsMobileDeployOpen] = useState(false);
    const deployDropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMobileDeployOpen(false);
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
            setIsMobileDeployOpen(false);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileDeployOpen(false);
    };

    const toggleMobileDeploy = () => {
        setIsMobileDeployOpen(!isMobileDeployOpen);
    };

    const toggleDeployDropdown = () => {
        setIsDeployDropdownOpen((prev) => !prev);
    };

    // Close deploy dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (deployDropdownRef.current && !deployDropdownRef.current.contains(event.target as Node)) {
                setIsDeployDropdownOpen(false);
            }
        };
        if (isDeployDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDeployDropdownOpen]);

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
                background: '#141824',
                borderColor: 'rgba(233,236,248,0.08)'
            }}>
                <div className="max-w-[1920px] mx-auto px-3 sm:px-6 lg:px-26">
                    <div className="flex items-center justify-between h-14 sm:h-16 w-full">
                        {/* Left: Brand Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 sm:gap-2.5 hover:opacity-90 transition-opacity shrink-0"
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
                        <div className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-5">
                            <Link
                                href="/#how-it-works"
                                onClick={(e) => {
                                    if (pathname === "/") {
                                        e.preventDefault();
                                        document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                style={{ color: 'rgba(233,236,248,0.78)' }}
                                className="text-sm font-bold transition-colors hover:opacity-80"
                            >
                                How it works
                            </Link>
                            <Link
                                href="/#solutions"
                                onClick={(e) => {
                                    if (pathname === "/") {
                                        e.preventDefault();
                                        document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                style={{ color: 'rgba(233,236,248,0.78)' }}
                                className="text-sm font-bold transition-colors hover:opacity-80"
                            >
                                Solutions
                            </Link>
                            <div
                                ref={deployDropdownRef}
                                className="relative flex flex-col items-center"
                            >
                                <button
                                    type="button"
                                    onClick={toggleDeployDropdown}
                                    className="flex items-center gap-1 text-sm cursor-pointer font-bold transition-colors hover:opacity-80"
                                    style={{ color: (pathname === "/split-pak" || pathname === "/xmapper") ? 'rgba(80,140,255,0.92)' : 'rgba(233,236,248,0.78)' }}
                                >
                                    Deploy

                                </button>
                                {isDeployDropdownOpen && (
                                    <>
                                        {/* Connecting line from Deploy to submenu */}
                                        <div
                                            className="absolute top-full left-1/2 -translate-x-1/2 w-px h-2 z-50"
                                            style={{ background: 'rgba(233,236,248,0.25)' }}
                                        />
                                        <div
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex items-center gap-1 py-2 px-2 rounded-full shadow-2xl z-50"
                                            style={{
                                                background: 'rgba(25,32,48,0.98)',
                                                border: '1px solid rgba(233,236,248,0.12)'
                                            }}
                                        >
                                            <Link
                                                href="/split-pak"
                                                onClick={() => setIsDeployDropdownOpen(false)}
                                                className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap ${pathname === "/split-pak"
                                                    ? "bg-slate-700/60"
                                                    : "hover:bg-slate-700/50"
                                                    }`}
                                                style={{ color: 'rgba(233,236,248,0.9)' }}
                                            >
                                                PerimeterPAK
                                            </Link>
                                            <Link
                                                href="/xmapper"
                                                onClick={() => setIsDeployDropdownOpen(false)}
                                                className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap ${pathname === "/xmapper"
                                                    ? "bg-slate-700/60"
                                                    : "hover:bg-slate-700/50"
                                                    }`}
                                                style={{ color: 'rgba(233,236,248,0.9)' }}
                                            >
                                                GridMapper
                                            </Link>
                                            <Link
                                                href="/schedule-demo"
                                                onClick={() => setIsDeployDropdownOpen(false)}
                                                className="px-5 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap hover:bg-slate-700/50"
                                                style={{ color: 'rgba(233,236,248,0.9)' }}
                                            >
                                                Try Android App
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                            <Link
                                href="/pricing"
                                style={{ color: pathname === "/schedule-demo" ? 'rgba(80,140,255,0.92)' : 'rgba(233,236,248,0.78)' }}
                                className="text-sm font-bold transition-colors hover:opacity-80"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/about"
                                style={{ color: pathname === "/about" ? 'rgba(80,140,255,0.92)' : 'rgba(233,236,248,0.78)' }}
                                className="text-sm font-bold transition-colors hover:opacity-80"
                            >
                                About
                            </Link>
                        </div>

                        {/* Right: Book a demo - Desktop */}
                        <div className="hidden md:flex items-center shrink-0">
                            <Link
                                href="/schedule-demo"
                                className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 border"
                                style={{
                                    borderColor: 'rgba(80,140,255,0.92)',
                                    background: 'rgba(0,0,0,0.4)',
                                    color: 'rgba(80,140,255,0.92)'
                                }}
                            >
                                Book a demo
                                <ArrowRight size={16} style={{ color: 'rgba(80,140,255,0.92)' }} />
                            </Link>
                        </div>

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
                                href="/#how-it-works"
                                onClick={(e) => {
                                    if (pathname === "/") {
                                        e.preventDefault();
                                        document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                                    }
                                    closeMobileMenu();
                                }}
                                className="block text-sm font-bold transition-colors py-3 px-2 rounded-lg active:bg-slate-800/50 touch-manipulation text-slate-300 active:bg-slate-800/30"
                            >
                                How it works
                            </Link>

                            <Link
                                href="/#solutions"
                                onClick={(e) => {
                                    if (pathname === "/") {
                                        e.preventDefault();
                                        document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
                                    }
                                    closeMobileMenu();
                                }}
                                className="block text-sm font-bold transition-colors py-3 px-2 rounded-lg active:bg-slate-800/50 touch-manipulation text-slate-300 active:bg-slate-800/30"
                            >
                                Solutions
                            </Link>

                            <div>
                                <button
                                    type="button"
                                    onClick={toggleMobileDeploy}
                                    className={`w-full flex items-center justify-between text-sm font-bold transition-colors py-3 px-2 rounded-lg active:bg-slate-800/30 touch-manipulation ${pathname === "/split-pak" || pathname === "/xmapper"
                                        ? "text-blue-400"
                                        : "text-slate-300"
                                        }`}
                                >
                                    <span>Deploy</span>
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform duration-200 ${isMobileDeployOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileDeployOpen
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="pl-4 pt-1 pb-2 space-y-1">
                                        <Link
                                            href="/split-pak"
                                            onClick={closeMobileMenu}
                                            className={`block text-sm font-semibold transition-colors py-2.5 px-2 rounded-lg active:bg-slate-800/30 touch-manipulation ${pathname === "/split-pak"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-400 active:bg-slate-800/30"
                                                }`}
                                        >
                                            PerimeterPAK
                                        </Link>
                                        <Link
                                            href="/xmapper"
                                            onClick={closeMobileMenu}
                                            className={`block text-sm font-semibold transition-colors py-2.5 px-2 rounded-lg active:bg-slate-800/30 touch-manipulation ${pathname === "/xmapper"
                                                ? "text-blue-400 bg-slate-800/50"
                                                : "text-slate-400 active:bg-slate-800/30"
                                                }`}
                                        >
                                            GridMapper
                                        </Link>
                                        <Link
                                            href="/schedule-demo"
                                            onClick={closeMobileMenu}
                                            className="block text-sm font-semibold transition-colors py-2.5 px-2 rounded-lg text-slate-400 active:bg-slate-800/30 touch-manipulation"
                                        >
                                            Try Android App
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/pricing"
                                onClick={closeMobileMenu}
                                className={`block text-sm font-bold transition-colors py-3 px-2 rounded-lg active:bg-slate-800/30 touch-manipulation ${pathname === "/schedule-demo"
                                    ? "text-blue-400 bg-slate-800/50"
                                    : "text-slate-300 active:bg-slate-800/30"
                                    }`}
                            >
                                Pricing
                            </Link>

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
                                className="flex items-center justify-center gap-2 text-sm font-bold transition-colors py-3 px-4 rounded-full mt-4 border touch-manipulation"
                                style={{
                                    borderColor: 'rgba(80,140,255,0.92)',
                                    background: 'rgba(0,0,0,0.4)',
                                    color: 'rgba(80,140,255,0.92)'
                                }}
                            >
                                Book a demo
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
