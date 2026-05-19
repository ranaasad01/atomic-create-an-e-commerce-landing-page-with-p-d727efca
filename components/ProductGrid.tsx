"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block text-indigo-600 text-sm font-bold uppercase tracking-widest mb-3">
            Our Collection
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Shop Our Best Sellers
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Hand-picked products loved by thousands of customers. New arrivals added every week.
          </p>
        </div>

        {/* Category filter */}
        <div id="categories" className="mb-8">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-medium">No products found in this category.</p>
          </div>
        )}

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
