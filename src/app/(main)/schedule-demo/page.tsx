import ScheduleDemo from "@/components/pages/ScheduleDemo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Schedule a Demo | SplitSec AI",
    description: "Schedule a personalized demo of our privacy-first, smartphone-based gunshot detection system. See how SplitSec AI works for your environment.",
};

export default function ScheduleDemoPage() {
    return <ScheduleDemo />;
}
