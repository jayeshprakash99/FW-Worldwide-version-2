import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/carriers", label: "Carriers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-fw-navy/95 backdrop-blur-md shadow-lg" : "bg-fw-navy"
      }`}
      data-testid="main-navbar"
    >
      <div className="fw-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" data-testid="nav-home-logo">
          <Logo variant="light" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              data-testid={`nav-link-${n.label.toLowerCase()}`}
              className={({ isActive }) =>
                `fw-label text-[0.72rem] transition-colors ${
                  isActive ? "text-fw-yellow" : "text-white/80 hover:text-white"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="fw-btn-primary" data-testid="nav-get-quote">
            Get Quote <ArrowRight size={16} />
          </Link>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-fw-navy-deep border-t border-white/10" data-testid="nav-mobile-menu">
          <div className="fw-container py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `fw-label text-sm ${isActive ? "text-fw-yellow" : "text-white/80"}`
                }
                data-testid={`nav-mobile-link-${n.label.toLowerCase()}`}
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/contact" className="fw-btn-primary justify-center" data-testid="nav-mobile-cta">
              Get Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
