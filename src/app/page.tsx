import Link from "next/link";
import BannerCarousel from "@/components/pages/home/BannerCarousel";
import VideoSection from "@/components/common/VideoSection";
import HowItWorks from "@/components/pages/home/HowItWorks";
import KeyFeatures from "@/components/pages/home/KeyFeatures";
import ProtectionBuiltFor from "@/components/pages/home/ProtectionBuiltFor";
import UpcomingEvents from "@/components/pages/home/UpcomingEvents";
import FeaturedIn from "@/components/pages/home/FeaturedIn";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Banner Carousel */}
      <section className="w-full">
        <BannerCarousel />
      </section>

      {/* Protection Built for Every Environment Section */}
      <section className="w-full">
        <ProtectionBuiltFor />
      </section>


      {/* Video Section */}
      <section className="w-full ">
        <VideoSection
          title="Why did we build the SplitSec.AI gunshot detection app?"
          description="To give people and communities immediate alerts without requiring extra hardware."
          videoUrl="bMFdCSSqJDA"
          badge="Why?"
          badgeIcon="question"
        />
      </section>

      {/* How It Works Section */}
      <section className="w-full">
        <HowItWorks />
      </section>

      {/* Key Features Section */}
      <section className="w-full">
        <KeyFeatures />
      </section>


      {/* Upcoming Events Section */}
      <section className="w-full">
        <UpcomingEvents />
      </section>

      {/* Featured In Section */}
      <section className="w-full">
        <FeaturedIn />
      </section>

    </div>
  );
}
