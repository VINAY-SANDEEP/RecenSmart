import {
  Search,
  ShoppingCart,
  Menu,
  User,
  MapPin,
} from "lucide-react";

import logo from "../images/logo.webp";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Recens Smart Logo"
            className="w-14 h-14 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Recens Smart
            </h1>

            <p className="text-xs text-gray-500">
              Fresh Vegetables • Kakinada
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 py-3 w-[420px]">
          <Search className="text-gray-500" size={20} />

          <input
            type="text"
            placeholder="Search vegetables, fruits..."
            className="bg-transparent outline-none ml-3 w-full"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-3 hover:bg-green-50 transition">
            <MapPin className="text-green-600" size={18} />
            <span>Kakinada</span>
          </button>

          <button className="relative">
            <ShoppingCart className="text-green-700" size={28} />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              3
            </span>
          </button>

          <button>
            <User className="text-green-700" size={28} />
          </button>

          <button className="md:hidden">
            <Menu className="text-green-700" size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}