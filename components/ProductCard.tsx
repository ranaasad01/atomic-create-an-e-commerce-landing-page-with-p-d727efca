"use client";

import { useState } from "react";
import { Star, ShoppingCart, Check, Heart } from 'lucide-react';
import { useCartStore } from "@/lib/store";
import type { Product } from "@/lib/data";

type Props = { product: Product };

const badgeConfig = {
  sale: { label: "Sale", className: "bg-orange-500 text-white" },
  featured: { label: "Featured", className: "bg-indigo-600 text-white" },
  new: { label: "New", className: "bg-emerald-500 text-white" },
};

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((s) => s.addToCart);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.floor(rating);
      const partial = !filled && i < rating;
      return (
        <span key={i} className="relative inline-block">
          <Star className="w-3.5 h-3.5 text-gray-200 fill-gray-200" />
          {(filled || partial) && (
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: filled ? "100%" : ((rating % 1) * 100).toString() + "%" }}
            >
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            </span>
          )}
        </span>
      );
    });
  };

  const badgeClass = product.badge ? badgeConfig[product.badge].className : "";
  const badgeLabel = product.badge ? badgeConfig[product.badge].label : "";

  const cartBtnClass = added
    ? "bg-emerald-500 text-white"
    : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-lg hover:shadow-indigo-200";

  const wishlistBtnClass = wishlisted
    ? "bg-red-500 text-white"
    : "bg-white text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100";

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col">
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {product.badge && (
          <span className={"absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full " + badgeClass}>
            {badgeLabel}
          </span>
        )}

        {discount && (
          <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}

        <button
          onClick={() => setWishlisted(!wishlisted)}
          aria-label="Add to wishlist"
          className={"absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-md " + wishlistBtnClass}
        >
          <Heart className={"w-4 h-4 " + (wishlisted ? "fill-white" : "")} />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 flex-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">{renderStars(product.rating)}</div>
          <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewCount.toLocaleString()})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={"mt-1 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 " + cartBtnClass}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
