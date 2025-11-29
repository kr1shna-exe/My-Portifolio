"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
  href: string;
};

const BASE_ITEMS: NavItem[] = [
  { id: "about", label: "about", href: "#about" },
  { id: "work", label: "work", href: "#work" },
  { id: "projects", label: "projects", href: "#projects" },
];

const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/KrishXCodes" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaya-krishna-09859a227",
  },
  { label: "GitHub", href: "https://github.com/kr1shna-exe/" },
];

const SECTION_OFFSET = 140;

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeRef = useRef(activeSection);
  useEffect(() => {
    activeRef.current = activeSection;
  }, [activeSection]);
  const handleNavPress = (sectionId: string, closeMenu?: boolean) => {
    if (typeof window !== "undefined") {
      const section = document.getElementById(sectionId);
      if (section) {
        const target =
          section.getBoundingClientRect().top + window.scrollY - SECTION_OFFSET;
        window.scrollTo({ top: target, behavior: "smooth" });
      }
    }
    setActiveSection(sectionId);
    if (closeMenu) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-section]")
    );
    if (!sections.length) return;

    let ticking = false;

    const updateCurrentSection = () => {
      ticking = false;
      let closestId = sections[0]?.id ?? "about";
      let minDistance = Number.POSITIVE_INFINITY;
      sections.forEach((section) => {
        const distance = Math.abs(
          section.getBoundingClientRect().top - SECTION_OFFSET
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestId = section.id;
        }
      });
      if (closestId && closestId !== activeRef.current) {
        activeRef.current = closestId;
        setActiveSection(closestId);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateCurrentSection);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  const navItems = useMemo(() => BASE_ITEMS, []);

  return (
    <>
      <div className="hidden md:block">
        <div
          className="animate-navReveal fixed inset-x-4 top-4 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-3 py-2 text-sm text-slate-200 shadow-lg shadow-black/40 backdrop-blur-[2px] backdrop-filter"
          aria-label="Site navigation"
        >
          <nav className="flex items-center gap-1" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  target="_self"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavPress(item.id);
                  }}
                  className={cn(
                    "relative flex h-9 items-center rounded-full px-4 font-medium capitalize text-slate-400 transition-colors duration-300",
                    isActive && "text-white"
                  )}
                >
                  <span className="mr-1 text-slate-400">/</span>
                  {item.label}
                  {isActive && (
                    <motion.span
                      aria-hidden
                      layoutId="navHighlight"
                      className="absolute inset-0 -z-10 hidden rounded-full bg-white/10 sm:block"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {social.label}
                <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed inset-x-4 top-20 z-50 rounded-3xl border border-white/10 bg-black/70 p-4 shadow-2xl backdrop-blur-3xl md:hidden",
          "transition-all duration-300",
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="flex items-center justify-between pb-3">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Navigate
          </p>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>
        <ul className="flex flex-col divide-y divide-white/5 text-sm font-medium">
          {navItems.map((item) => (
            <li key={`mobile-${item.id}`}>
              <Link
                href={item.href}
                className="flex items-center justify-between py-3 text-slate-400 transition-colors hover:text-white"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavPress(item.id, true);
                }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-slate-400">/</span>
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <span className="text-xs uppercase tracking-widest text-white">
                    active
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={`mobile-${social.label}`}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-1 items-center justify-between rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:text-white"
            >
              {social.label}
              <ArrowUpRight className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
