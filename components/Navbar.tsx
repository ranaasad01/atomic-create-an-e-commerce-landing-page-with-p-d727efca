"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X, Sparkles } from 'lucide-react';
import { useCartStore } from "@/lib/store";
import { useState, useEffect } from "react";

export default function Navbar() {
  const items = useCartStore((s) => s.items);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
        (scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm")
      }
    >
      <div className="bg-indigo-600 text-white text-center text-xs py-2 px-4 font-medium tracking-wide">
        Free shipping on orders over $75 — Use code{" "}
        <span className="font-bold underline">FREESHIP</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Lumina<span className="text-indigo-600">Shop</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/#products" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Products
            </Link>
            <Link href="/#categories" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Categories
            </Link>
            <Link href="/#newsletter" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Deals
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Search"
              className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="relative flex w-9 h-9 items-center justify-center rounded-full text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {["Home", "Products", "Categories", "Deals"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : ("/#" + item.toLowerCase())}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
