"use client";

import Link from "next/link";
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900">
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div className="text-white space-y-8">
          {/* Sale badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Summer Sale — Up to 40% Off
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                Premium
              </span>
              Products
            </h1>
            <p className="text-lg sm:text-xl text-indigo-200 max-w-lg leading-relaxed">
              Curated collections of electronics, fashion, home goods, and more — all at unbeatable prices with fast, free shipping.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-400/40 hover:-translate-y-0.5"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#newsletter"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Deals
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 pt-2">
            <div className="flex -space-x-2">
              {["bg-pink-400", "bg-yellow-400", "bg-green-400", "bg-blue-400"].map((color, i) => (
                <div
                  key={i}
                  className={"w-9 h-9 rounded-full border-2 border-indigo-900 " + color}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-indigo-300 mt-0.5">
                <span className="font-bold text-white">50,000+</span> happy customers
              </p>
            </div>
          </div>
        </div>

        {/* Right: Hero image + floating cards */}
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/modern-ecommerce-lifestyle-products.jpg"
                alt="Featured products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent" />
            </div>

            {/* Floating card: discount */}
            <div className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 w-48">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">
                🏷️
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Today&apos;s Deal</p>
                <p className="text-sm font-bold text-gray-900">40% OFF</p>
              </div>
            </div>

            {/* Floating card: orders */}
            <div className="absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 w-52">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-xl">
                📦
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Orders Today</p>
                <p className="text-sm font-bold text-gray-900">1,284 shipped</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  );
}
