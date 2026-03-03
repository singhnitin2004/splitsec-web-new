import GetInvolvedPage from "@/components/pages/GetInvolved";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get Involved - Join SplitSec AI Community Safety Movement",
    description: "Join SplitSec AI to make communities safer. Become a Campus Ambassador, join our Advisory Council, or subscribe for updates. Shape the future of AI-powered community safety.",
    keywords: [
        "SplitSec AI",
        "get involved",
        "campus ambassador",
        "advisory council",
        "community safety",
        "volunteer opportunities",
        "student ambassador program",
        "safety advocacy",
        "AI safety",
        "gunshot detection",
        "campus safety",
        "community protection",
        "safety leadership",
        "join movement"
    ],
    openGraph: {
        title: "Get Involved with SplitSec AI - Make Communities Safer",
        description: "Join our community safety movement. Become a Campus Ambassador, join the Advisory Council, or stay updated with SplitSec AI's mission to protect communities.",
        type: "website",
        url: "https://splitsec.ai/get-involved",
        images: [
            {
                url: "/GetInvolved/getinvolved.png",
                width: 1200,
                height: 630,
                alt: "Get Involved with SplitSec AI"
            }
        ],
        siteName: "SplitSec AI"
    },
    twitter: {
        card: "summary_large_image",
        title: "Get Involved with SplitSec AI - Make Communities Safer",
        description: "Join our community safety movement. Become a Campus Ambassador, join the Advisory Council, or subscribe for updates.",
        images: ["/GetInvolved/getinvolved.png"],
        creator: "@SplitSecAI"
    },
    alternates: {
        canonical: "https://splitsec.ai/get-involved"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    }
};

export default function GetInvolvedRoute() {
    return <GetInvolvedPage />;
}
