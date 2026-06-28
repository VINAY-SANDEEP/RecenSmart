import { ShoppingCart, Heart } from "lucide-react";
import products from "../data/products";

export default function Deals() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Today's Deals
            </h2>
            <p className="text-gray-500 text-sm">
              Fresh vegetables at the best prices
            </p>
          </div>

          <button className="text-green-600 font-semibold text-sm">
            View All
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />

                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </span>

                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                  <Heart size={16} />
                </button>
              </div>

              {/* Details */}
              <div className="p-4">

                <h3 className="font-semibold">{item.name}</h3>

                <p className="text-sm text-gray-500">{item.unit}</p>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-green-600">
                    ₹{item.price}
                  </span>

                  <span className="text-sm line-through text-gray-400">
                    ₹{item.oldPrice}
                  </span>
                </div>

                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Add
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}