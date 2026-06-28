import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ravi Kumar",
    city: "Kakinada",
    review:
      "Fresh vegetables at affordable prices. Delivery was very fast!",
  },
  {
    id: 2,
    name: "Priya",
    city: "Kakinada",
    review:
      "Very happy with the quality. Everything was fresh and neatly packed.",
  },
  {
    id: 3,
    name: "Suresh",
    city: "Kakinada",
    review:
      "Best prices compared to the local market. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-2">
            Trusted by families across Kakinada ❤️
          </p>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-6">

          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              {/* Customer */}
              <div className="mt-6">
                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.city}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}