import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickQuoteButton from "@/components/QuickQuoteButton";
import { Toaster } from "sonner";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-fw-off">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <QuickQuoteButton />
      <Toaster position="top-right" richColors />
    </div>
  );
}
