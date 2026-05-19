"use client";

import { useCartStore } from "@/lib/store";
import { ArrowRight, Tag } from 'lucide-react';
import { useState } from "react";

export default function OrderSummary() {
  const totalPrice = useCartStore((s) => s.totalPrice);
  const totalItems = useCartStore((s) => s.totalItems);
  const clearCart = useCartStore((s) => s.clearCart);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  const subtotal = totalPrice();
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;

  const handleCoupon = () => {
    if (coupon.toUpperCase() === "SAVE10") {
      setCouponApplied(true);
    }
  };

  const handleCheckout = () => {
    setCheckedOut(true);
    clearCart();
  };

  if (checkedOut) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <span className="text-3xl">🎉</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Order Placed!</h3>
        <p className="text-gray-500 text-sm">
          Thank you for your purchase. You will receive a confirmation email shortly.
        </p>
        <a
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 sticky top-28">
      <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({totalItems()} items)</span>
          <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        {couponApplied && (
          <div className="flex justify-between text-emerald-600">
            <span>Coupon (SAVE10)</span>
            <span className="font-medium">-${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-medium text-gray-900">
            {shipping === 0 ? (
              <span className="text-emerald-600 font-semibold">Free</span>
            ) : (
              "$" + shipping.toFixed(2)
            )}
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Estimated Tax</span>
          <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
        </div>
      </div>

      {shipping > 0 && (
        <div className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-2 rounded-lg">
          Add ${(75 - subtotal).toFixed(2)} more for free shipping!
        </div>
      )}

      {/* Coupon */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
          <Tag className="w-3.5 h-3.5" />
          Promo Code
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="e.g. SAVE10"
            disabled={couponApplied}
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:bg-gray-50 disabled:text-gray-400"
          />
          <button
            onClick={handleCoupon}
            disabled={couponApplied}
            className="bg-gray-900 hover:bg-gray-700 disabled:bg-gray-300 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Apply
          </button>
        </div>
        {couponApplied && (
          <p className="text-xs text-emerald-600 font-medium">Coupon applied! 10% off.</p>
        )}
      </div>

      <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
        <span className="font-bold text-gray-900">Total</span>
        <span className="text-2xl font-extrabold text-gray-900">${total.toFixed(2)}</span>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5"
      >
        Proceed to Checkout
        <ArrowRight className="w-5 h-5" />
      </button>

      <p className="text-center text-xs text-gray-400">
        Secure checkout powered by SSL encryption
      </p>
    </div>
  );
}
