import { useState } from "react";
import {
  Search,
  ShoppingCart,
  MapPin,
  User,
  Menu,
  X,
} from "lucide-react";

import logo from "../images/logo.webp";

const CATEGORIES = [
  { emoji: "🛒", label: "All" },
  { emoji: "🥬", label: "Leafy Greens" },
  { emoji: "🍅", label: "Tomatoes" },
  { emoji: "🥕", label: "Root Vegetables" },
  { emoji: "🌶️", label: "Peppers" },
  { emoji: "🧅", label: "Onions" },
  { emoji: "🫘", label: "Beans" },
  { emoji: "🍎", label: "Fruits" },
  { emoji: "🔥", label: "Today's Deals" },
];

export default function Navbar({ cartCount = 3 }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b border-gray-100">
      {/* Top Offer Bar */}
      <div className="bg-green-700 text-white text-center py-2 text-sm font-medium">
        🌿 Fresh Vegetables Delivered in Kakinada | Free Delivery Above ₹299
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
       {/* Logo */}
<div className="flex items-center gap-2 cursor-pointer flex-shrink-0">

  <img
    src={logo}
    alt="Recens Mart"
    className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl object-contain shadow border border-green-100 bg-white p-1"
  />

  <div className="flex flex-col leading-tight">
    <h1 className="text-base sm:text-2xl font-extrabold text-green-700 whitespace-nowrap">
      Recens <span className="text-lime-600">Mart</span>
    </h1>

    <p className="text-[9px] sm:text-xs text-gray-500">
      Fresh Vegetables • Grocery
    </p>
  </div>

</div>
        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-5 py-3 w-full max-w-lg mx-8">
          <Search className="text-gray-500" size={18} />

          <input
            type="text"
            placeholder="Search vegetables, fruits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none ml-3 flex-1"
          />

          {searchQuery && (
            <button onClick={() => setSearchQuery("")}>
              <X size={18} className="text-gray-400" />
            </button>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Location */}
          <button className="hidden lg:flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full hover:bg-green-100 transition">
            <MapPin size={18} className="text-green-700" />
            <span className="text-sm font-medium">Kakinada</span>
          </button>

          {/* Cart */}
          <button className="relative p-2 rounded-full hover:bg-green-100 transition">
            <ShoppingCart size={26} className="text-green-700" />

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white h-5 w-5 rounded-full flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Login */}
          <button className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full transition">
            <User size={18} />
            Login
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-green-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-green-700" />
            ) : (
              <Menu size={24} className="text-green-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search vegetables..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none ml-3 flex-1"
          />

          {searchQuery && (
            <button onClick={() => setSearchQuery("")}>
              <X size={18} className="text-gray-400" />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
 

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <button className="w-full flex items-center gap-2 bg-green-50 px-4 py-3 rounded-xl">
            <MapPin size={18} className="text-green-700" />
            Kakinada
          </button>

          <button className="w-full flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700">
            <User size={18} />
            Login / Signup
          </button>
        </div>
      )}
    </header>
  );
}