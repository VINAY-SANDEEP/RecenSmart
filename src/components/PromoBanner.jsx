import { Smartphone, MessageCircle, ArrowRight } from "lucide-react";
import logo from "../images/logo.webp";

export default function PromoBanner() {
  return (
    <section className="bg-green-50 py-14 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center shadow-xl">

          {/* Left */}
          <div>

            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              🥬 Fresh Vegetables • Kakinada
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 leading-tight">
              Fresh Vegetables
              <br />
              Delivered to Your Door
            </h2>

            <p className="text-green-100 mt-5 text-lg">
              Order fresh vegetables, fruits and groceries with
              <strong> Recens Mart</strong>.
              Fast delivery, best quality and affordable prices.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="https://play.google.com/store/apps/details?id=com.recensmart&hl=en_IN"
                target="_blank"
                className="flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-100 transition"
              >
                <Smartphone size={20} />
                Download App
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

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
    </section>
  );
}