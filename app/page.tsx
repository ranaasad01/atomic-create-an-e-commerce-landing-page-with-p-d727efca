export const dynamic = "force-dynamic";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Star, Truck, RotateCcw, Shield, Headphones } from 'lucide-react';

const trustBadges = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On all orders over $75",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "30-day hassle-free returns",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    desc: "256-bit SSL encryption",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Always here to help you",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Verified Buyer",
    avatar: "SM",
    rating: 5,
    text: "Absolutely love the quality of everything I've ordered. Fast shipping and the packaging was beautiful. Will definitely be a repeat customer!",
    product: "Wireless Headphones",
  },
  {
    name: "James T.",
    role: "Verified Buyer",
    avatar: "JT",
    rating: 5,
    text: "The leather watch exceeded my expectations. Looks even better in person. Great value for the price — I've already recommended it to three friends.",
    product: "Minimalist Leather Watch",
  },
  {
    name: "Priya K.",
    role: "Verified Buyer",
    avatar: "PK",
    rating: 5,
    text: "Customer service was incredibly responsive when I had a question about sizing. The hoodie arrived in two days and fits perfectly. 10/10!",
    product: "Organic Cotton Hoodie",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Trust badges */}
      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid />

      {/* Testimonials */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-indigo-600 text-sm font-bold uppercase tracking-widest mb-3">
              Customer Reviews
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Don&apos;t just take our word for it — hear from thousands of happy shoppers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }, (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">
                      {t.role} &bull; {t.product}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  );
}
