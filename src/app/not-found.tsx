import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        {/* SVG - responsive sizing */}
        <div className="w-full max-w-[min(90vw,560px)] aspect-[860/571] relative mb-6 sm:mb-8">
          <Image
            src="/404/undraw_page-not-found_6wni%20(1).svg"
            alt="Page not found illustration"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 90vw, 560px"
            priority
          />
        </div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2 text-center">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 mb-8 sm:mb-10 text-center max-w-xl">
          The page you&apos;re looking for is currently under development and will be available soon.
        </p>

        {/* Home button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#006dff] text-white font-medium hover:bg-[#0056cc] transition-colors shadow-sm"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
