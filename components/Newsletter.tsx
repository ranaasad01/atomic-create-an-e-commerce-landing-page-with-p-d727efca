"use client";

import { useState } from "react";
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="bg-indigo-600 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-600/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-6">
          <Mail className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Get Exclusive Deals First
        </h2>
        <p className="text-indigo-200 text-lg mb-8 max-w-md mx-auto">
          Join 50,000+ subscribers and be the first to know about flash sales, new arrivals, and members-only discounts.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-white/20 text-white font-semibold px-8 py-4 rounded-xl max-w-sm mx-auto">
            <Check className="w-5 h-5" />
            You&apos;re subscribed! Welcome aboard.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm font-medium"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3.5 rounded-xl transition-colors duration-200 whitespace-nowrap shadow-lg shadow-orange-500/30"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-indigo-300 text-xs mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
