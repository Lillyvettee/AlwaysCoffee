import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function LogoImage({ className }: { className?: string }) {
  return (
    <img src="/assets/logo.png" className={className} alt="Always Coffee Logo" />
  );
}

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/order", label: "Order Now", special: true },
    { path: "/merch", label: "Merch", special: true },
  ];
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };
  return (
    <header className="bg-gradient-to-r from-[#ffe5e5] via-[#f5d7d7] to-[#ffd1d1] border-b-4 border-[#c84a4a] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:scale-105 transition-transform">
            <LogoImage className="h-16 w-auto" />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg transition-all hover:scale-110 ${
                  link.special
                    ? "bg-[#c84a4a] text-white px-6 py-2 rounded-full hover:bg-[#a83d3d] shadow-md"
                    : isActive(link.path)
                    ? "text-[#c84a4a] font-bold"
                    : "text-[#8b4545] hover:text-[#c84a4a]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#c84a4a] hover:scale-110 transition-transform"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-full transition-colors ${
                  link.special
                    ? "bg-[#c84a4a] text-white hover:bg-[#a83d3d] text-center font-bold"
                    : isActive(link.path)
                    ? "text-[#c84a4a] bg-white font-bold"
                    : "text-[#8b4545] hover:text-[#c84a4a] hover:bg-white/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
