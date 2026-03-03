import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomActionBar from "@/components/layout/BottomActionBar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pb-[52px]">
      <Navbar />
      {children}
      <Footer />
      <BottomActionBar />
    </div>
  );
}
