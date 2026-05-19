"use client";

import Link from "next/link";
import { Sparkles, MessageCircle as Twitter, Code2 as Github, Globe as Facebook, Camera as Instagram } from 'lucide-react';

const footerLinks = {
  Shop: ["Electronics", "Clothing", "Home & Garden", "Sports", "Beauty", "Sale Items"],
  Company: ["About Us", "Careers", "Press", "Blog", "Sustainability"],
  Support: ["Help Center", "Track Order", "Returns & Exchanges", "Shipping Info", "Contact Us"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Lumina<span className="text-indigo-400">Shop</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your destination for premium products at unbeatable prices. Trusted by over 50,000 customers worldwide.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Github, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
              ))}
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-indigo-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LuminaShop. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span>We accept:</span>
            {["Visa", "MC", "PayPal", "Apple Pay"].map((method) => (
              <span
                key={method}
                className="bg-gray-800 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
