import categories from "../data/categories";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex justify-between items-center mb-12">

          <div>

            <h2 className="text-4xl font-bold text-gray-800">
              Shop By Category
            </h2>

            <p className="text-gray-500 mt-2">
              Fresh vegetables directly from local farms.
            </p>

          </div>

          <button className="hidden md:flex items-center gap-2 text-green-600 font-semibold">
            View All
            <ArrowRight size={18} />
          </button>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (

            <div
              key={category.id}
              className={`${category.color} rounded-3xl p-6 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300 cursor-pointer`}
            >

              <img
                src={category.image}
                alt={category.name}
                className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
              />

              <h3 className="font-bold mt-5 text-lg">
                {category.name}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                {category.items}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}