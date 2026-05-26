"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./button";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#how-it-works" },
  // { label: "Services", href: "#how-it-work" },
  { label: "Featured", href: "#compatibility" },
  { label: "Reviews", href: "#faq" },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      >
        <div className="mx-auto px-5 flex items-center justify-between md:px-14 p-4 md:p-0">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="md:h-20 h-18">
              <img
                src="/hogj logo.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="flex gap-4">
            <nav className="hidden md:flex flex-1 items-center justify-end gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-nunito text-white/80 hover:text-white transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button className="hidden md:block hover:scale-105 hover:bg-[#76492E] active:scale-95 transition-all duration-150 text-[15px] md:px-6 px-4 py-2 rounded-3xl bg-[#76492E] text-white font-medium">
              Contact Us
            </button>
          </div>

          {/* Hamburger */}
          {!menuOpen && (
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-px bg-white" />
              <span className="block w-6 h-px bg-white" />
              <span className="block w-6 h-px bg-white" />
            </button>
          )}
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-60 bg-black/40 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-7 text-white/40 hover:text-white text-2xl transition-colors"
          aria-label="Close menu"
        >
          ✕
        </button>

        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-nunito font-semibold text-white/60 hover:text-white transition-colors text-center"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(-24px)",
              transition: `opacity 0.35s ease ${i * 0.07}s, transform 0.35s ease ${i * 0.07}s, color 0.2s`,
            }}
          >
            {link.label}
          </Link>
        ))}

        <a
          href="#tool"
          onClick={() => setMenuOpen(false)}
          className="text-base font-medium bg-[#76492E] text-white px-8 py-3 rounded-lg text-center"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateX(0)" : "translateX(-24px)",
            transition: `opacity 0.35s ease ${NAV_LINKS.length * 0.07}s, transform 0.35s ease ${NAV_LINKS.length * 0.07}s`,
          }}
        >
          Start extracting
        </a>
      </div>
    </>
  );
}
