import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Zap, ArrowRight } from "lucide-react";

export default function QuickQuoteButton() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <Link
      to="/contact"
      data-testid="quick-quote-fab"
      className={`group fixed z-40 left-4 bottom-6 md:left-6 md:bottom-8 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 bg-fw-red text-fw-navy pl-3 pr-5 py-3 shadow-xl hover:bg-fw-red-dark transition-colors">
        <div className="h-9 w-9 bg-fw-navy/15 flex items-center justify-center shrink-0">
          <Zap size={16} className="text-fw-navy" strokeWidth={2.5} />
        </div>
        <span className="fw-heading text-base tracking-wide">Get a Quote</span>
        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
