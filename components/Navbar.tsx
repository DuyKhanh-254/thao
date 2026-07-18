"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/assignments", label: "Bài tập" },
  { href: "/summary", label: "Tổng kết" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
      <Link href="/" className="site-mark" aria-label={`Trang chủ của ${profile.fullName}`}>
        <span className="site-mark__disc">{profile.initials}</span>
        <span className="site-mark__name">Diệu Thảo</span>
      </Link>
      <button className="nav-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Đóng menu" : "Mở menu"}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav id="main-nav" className={`nav-links${open ? " nav-links--open" : ""}`} aria-label="Điều hướng chính">
        {links.map((link) => {
          const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link key={link.href} href={link.href} className={active ? "is-active" : ""} aria-current={active ? "page" : undefined}>
              {link.label}
              <span className="nav-wave" aria-hidden="true" />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
