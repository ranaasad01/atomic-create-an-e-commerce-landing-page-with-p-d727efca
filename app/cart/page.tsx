"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingCart, Sparkles } from 'lucide-react';
import { useCartStore } from "@/lib/store";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Footer from "@/components/Footer";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 pt-28 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">Shopping Cart</h1>
              <p className="text-gray-500 mt-1">
                {items.length === 0
                  ? "Your cart is empty"
                  : items.length === 1
                  ? "1 item in your cart"
                  : items.length + " items in your cart"}
              </p>
            </div>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-12 h-12 text-indigo-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
            <p className="text-gray-500 max-w-sm mb-8">
              Looks like you haven&apos;t added anything yet. Browse our collection and find something you love!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
            >
              <Sparkles className="w-5 h-5" />
              Start Shopping
            </Link>

            {/* Featured suggestions */}
            <div className="mt-16 w-full max-w-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Popular Right Now</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: "Electronics", emoji: "🎧", color: "bg-blue-50 text-blue-600" },
                  { label: "Clothing", emoji: "👕", color: "bg-pink-50 text-pink-600" },
                  { label: "Home", emoji: "🏠", color: "bg-amber-50 text-amber-600" },
                  { label: "Sports", emoji: "🏃", color: "bg-green-50 text-green-600" },
                  { label: "Beauty", emoji: "✨", color: "bg-purple-50 text-purple-600" },
                  { label: "Sale", emoji: "🏷️", color: "bg-red-50 text-red-600" },
                ].map(({ label, emoji, color }) => (
                  <Link
                    key={label}
                    href="/#products"
                    className={"flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200 bg-white " + color.split(" ")[0]}
                  >
                    <span className="text-2xl">{emoji}</span>
                    <span className={"text-sm font-semibold " + color.split(" ")[1]}>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Cart with items */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  Items ({items.reduce((sum, i) => sum + i.quantity, 0)})
                </h2>
                <div className="divide-y divide-gray-50">
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Shipping info */}
              <div className="mt-4 bg-indigo-50 rounded-2xl p-5 flex items-start gap-4 border border-indigo-100">
                <span className="text-2xl mt-0.5">🚚</span>
                <div>
                  <p className="text-sm font-bold text-indigo-900">
                    {items.reduce((sum, i) => sum + i.product.price * i.quantity, 0) >= 75
                      ? "You qualify for FREE shipping!"
                      : "You're almost there for free shipping!"}
                  </p>
                  <p className="text-xs text-indigo-600 mt-0.5">
                    Orders over $75 ship free. Estimated delivery: 3–5 business days.
                  </p>
                </div>
              </div>

              {/* Guarantees */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { emoji: "🔒", label: "Secure Checkout" },
                  { emoji: "↩️", label: "30-Day Returns" },
                  { emoji: "⭐", label: "Quality Guarantee" },
                ].map(({ emoji, label }) => (
                  <div
                    key={label}
                    className="bg-white rounded-xl border border-gray-100 p-3 text-center"
                  >
                    <span className="text-xl block mb-1">{emoji}</span>
                    <p className="text-xs font-semibold text-gray-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
