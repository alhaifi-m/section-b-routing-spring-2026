"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-900 px-6 flex items-center gap-8 h-[60px] sticky top-0 z-50">
      <span className="text-sky-400 font-extrabold text-xl">DevShop</span>

      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm pb-0.5 border-b-2 ${
              isActive
                ? "text-sky-400 font-bold border-sky-400"
                : "text-slate-400 font-normal border-transparent hover:text-slate-200"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
