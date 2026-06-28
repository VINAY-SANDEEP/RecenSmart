import {
  Wallet,
  Truck,
  Leaf,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Lowest Prices",
    desc: "Best prices every day.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Leaf,
    title: "Farm Fresh",
    desc: "Direct from local farmers.",
    color: "bg-lime-100 text-lime-600",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Delivered within 30–45 mins.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: ShieldCheck,
    title: "Quality Checked",
    desc: "Fresh and hygienically packed.",
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose
            <span className="text-green-600"> Recens Smart?</span>
          </h2>

          <p className="text-gray-500 mt-3">
            Fresh vegetables with affordable prices and fast delivery.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div
                  className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="font-bold text-xl mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}