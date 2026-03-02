"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Social links with label and icon abbreviation (matching HTML soc-ico design)
const SOCIAL_LINKS = [
    { href: "https://linkedin.com", label: "LinkedIn", icon: "in", ariaLabel: "LinkedIn" },
    { href: "https://instagram.com", label: "Instagram", icon: "ig", ariaLabel: "Instagram" },
    { href: "https://threads.net", label: "Threads", icon: "@", ariaLabel: "Threads" },
    { href: "https://facebook.com", label: "Facebook", icon: "f", ariaLabel: "Facebook" },
    { href: "https://youtube.com", label: "YouTube", icon: "▶", ariaLabel: "YouTube" },
    { href: "https://x.com", label: "X", icon: "x", ariaLabel: "X" },
];

// Quick links matching HTML structure (same behavior as Navbar for How it Works & Solutions)
const QUICK_LINKS = [
    { href: "/", label: "Home" },
    { href: "/#how-it-works", label: "How it Works", scrollId: "how-it-works" },
    { href: "/#solutions", label: "Solutions", scrollId: "solutions" },
    { href: "/xradius-kit", label: "PerimeterPAK" },
    { href: "/xmapper", label: "GridMapper" },
    { href: "/about", label: "About" },
];

export default function Footer() {
    const pathname = usePathname();

    const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, scrollId?: string) => {
        if (pathname === "/" && scrollId) {
            e.preventDefault();
            document.getElementById(scrollId)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer
            className="w-full bg-[#0B0F1A] text-[#F3F6FF] border-t border-[rgba(243,246,255,0.10)] pt-14 pb-8 pl-4 pr-2 sm:pl-6 sm:pr-3"
            id="site-footer"
        >
            <div className="max-w-[1800px] mx-auto pl-4 pr-2 sm:pl-6 sm:pr-3 lg:pl-8 lg:pr-4 xl:pl-16 xl:pr-8 2xl:pl-24 2xl:pr-12">
                {/* Footer Top: Brand | Quick Links | Follow Us */}
                <div className="grid grid-cols-1 gap-7 sm:gap-8 min-[981px]:grid-cols-[1.2fr_0.9fr_0.9fr] min-[981px]:gap-7 items-start">
                    {/* Brand Section */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-2.5">
                            <Image
                                src="/logo.png"
                                alt="SplitSec.AI"
                                width={36}
                                height={36}
                                className="h-9 w-9 object-contain shrink-0"
                            />
                            <span className="text-xl font-bold tracking-[-0.02em] text-[#F3F6FF]">
                                SplitSec.AI
                            </span>
                        </div>
                        <p className="mt-2 mb-2 text-[rgba(243,246,255,0.72)] leading-[1.55] max-w-[44ch]">
                            SplitSec.AI helps teams recognize suspected gunfire fast, with privacy first on device detection.
                        </p>
                        <p className="mb-0 text-[rgba(243,246,255,0.72)] leading-[1.55] max-w-[44ch]">
                            Get involved and be part of the change.
                        </p>
                        <Link
                            href="/get-involved"
                            className="mt-3.5 inline-flex items-center justify-center px-[18px] py-3 rounded-xl bg-[#FF3FA6] text-white font-bold text-[15px] no-underline hover:opacity-90 transition-opacity w-fit"
                        >
                            Get involved
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-2.5 mt-1 text-[15px] font-medium tracking-[-0.01em] text-[rgba(243,246,255,0.86)]">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col gap-0">
                            {QUICK_LINKS.map((link) => (
                                <Link
                                    key={link.href + link.label}
                                    href={link.href}
                                    onClick={(e) => handleQuickLinkClick(e, link.scrollId)}
                                    className="flex items-center gap-2.5 py-1.5 text-[rgba(243,246,255,0.74)] no-underline text-[15px] hover:text-[rgba(0,109,255,0.95)] transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Follow Us / Social */}
                    <div>
                        <h4 className="mb-2.5 mt-1 text-[15px] font-medium tracking-[-0.01em] text-[rgba(243,246,255,0.86)]">
                            Follow Us
                        </h4>
                        <nav className="flex flex-col gap-0">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 py-1.5 text-[rgba(243,246,255,0.74)] no-underline text-[15px] hover:text-[rgba(0,109,255,0.95)] transition-colors"
                                    aria-label={social.ariaLabel}
                                >
                                    <span
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 border border-[rgba(243,246,255,0.16)] text-[rgba(243,246,255,0.70)] bg-[rgba(243,246,255,0.06)]"
                                        aria-hidden
                                    >
                                        {social.icon}
                                    </span>
                                    {social.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 pt-6 border-t border-[rgba(243,246,255,0.10)] text-center">
                    <h4 className="mb-2.5 text-base font-medium text-[rgba(243,246,255,0.86)]">
                        Disclaimer
                    </h4>
                    <p className="max-w-[92ch] mx-auto text-[rgba(243,246,255,0.70)] leading-relaxed text-sm sm:text-base">
                        SplitSec.AI is designed to assist in detecting potential gunshot sounds. It does not contact 911 and does not replace local emergency protocols or law enforcement response. Always follow official guidance in an emergency.
                    </p>
                </div>

                {/* Footer Bottom */}
                <div className="mt-5 pt-5 border-t border-[rgba(243,246,255,0.10)] flex flex-wrap justify-center items-center gap-4 sm:gap-5 text-[rgba(243,246,255,0.60)] text-sm">
                    <Link
                        href="/privacy"
                        className="text-[rgba(243,246,255,0.60)] no-underline hover:text-[rgba(0,109,255,0.9)] transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms"
                        className="text-[rgba(243,246,255,0.60)] no-underline hover:text-[rgba(0,109,255,0.9)] transition-colors"
                    >
                        Terms of Service
                    </Link>
                    <span className="text-[rgba(243,246,255,0.60)]">
                        © {new Date().getFullYear()} SplitSec.AI. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
