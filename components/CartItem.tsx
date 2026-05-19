"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from "@/lib/store";
import type { CartItem as CartItemType } from "@/lib/store";

type Props = { item: CartItemType };

export default function CartItem({ item }: Props) {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeFromCart = useCartStore((s) => s.removeFromCart);

  return (
    <div className="flex gap-4 py-5 border-b border-gray-100 last:border-0">
      {/* Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-0.5">
            {item.product.category}
          </p>
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2 leading-snug">
            {item.product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Quantity controls */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-indigo-600"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-sm font-bold text-gray-900">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-indigo-600"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Price + remove */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-base font-bold text-gray-900">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
              {item.quantity > 1 && (
                <p className="text-xs text-gray-400">
                  ${item.product.price.toFixed(2)} each
                </p>
              )}
            </div>
            <button
              onClick={() => removeFromCart(item.product.id)}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
              aria-label="Remove item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
