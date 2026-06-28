import { ArrowRight, Download, MessageCircle } from "lucide-react";
import logo from "../images/logo.webp";

export default function PromoBanner() {
  return (
    <section className="py-14 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 rounded-3xl overflow-hidden shadow-xl">

          <div className="grid md:grid-cols-2 items-center gap-10 p-8 md:p-12">

            {/* Left Content */}
            <div className="text-white">

              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🥬 Fresh Vegetables Delivered to Your Door
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
                Download
                <br />
                Recens Smart App
              </h2>

              <p className="mt-5 text-green-100 text-lg leading-8">
                Buy fresh vegetables, fruits, groceries and daily essentials
                directly from your mobile. Fast delivery across Kakinada.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                {/* Play Store */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.recensmart&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-100 transition"
                >
                  <Download size={20} />
                  Download App
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-900 px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
                >
                  <MessageCircle size={20} />
                  Order on WhatsApp
                </a>

              </div>

              <div className="mt-6 text-sm text-green-100">
                📍 Serving Kakinada with fresh vegetables every day.
              </div>

            </div>

            {/* Right */}
            <div className="flex justify-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">

                <img
                  src={logo}
                  alt="Recens Smart"
                  className="w-52 h-52 object-contain mx-auto"
                />

                <h3 className="mt-5 text-2xl font-bold text-green-700">
                  Recens Smart
                </h3>

                <p className="text-gray-600 mt-2">
                  Fresh • Healthy • Affordable
                </p>

                <a
                  href="https://play.google.com/store/apps/details?id=com.recensmart&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition"
                >
                  Get the App
                  <ArrowRight size={18} />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}