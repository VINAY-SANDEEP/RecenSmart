import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-green-600 to-lime-500 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">

          {/* Left */}
          <div className="text-white">

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              🥬 Fresh Every Day
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-5">
              Save Up To
              <br />
              50% OFF
            </h2>

            <p className="mt-4 text-green-100 max-w-md">
              Fresh vegetables directly from local farmers at affordable prices.
            </p>

            <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-green-100">
              Shop Now
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Right */}
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80"
            alt="Vegetables"
            className="w-72 md:w-96 mt-8 md:mt-0 rounded-2xl"
          />

        </div>

      </div>
    </section>
  );
}