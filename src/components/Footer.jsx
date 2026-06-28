import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-lime-300">
            Recens Smart
          </h2>
          <p className="mt-4 text-green-100 leading-7">
            Fresh vegetables and fruits delivered directly from farms to your
            doorstep. Quality, freshness, and affordable prices every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-green-100">
            <li><a href="/" className="hover:text-lime-300">Home</a></li>
            <li><a href="/shop" className="hover:text-lime-300">Shop</a></li>
            <li><a href="/about" className="hover:text-lime-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-lime-300">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Support</h3>

          <div className="space-y-4 text-green-100">
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>support@recenssmart.com</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <span>Kakinada, Andhra Pradesh</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <p className="text-green-100 mb-5">
            Stay connected for daily fresh offers and discounts.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center hover:bg-lime-300 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center hover:bg-lime-300 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center hover:bg-lime-300 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-green-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-green-200 text-sm">
          <p>
            © {new Date().getFullYear()} <strong>Recens Smart</strong>. All
            Rights Reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Fresh • Healthy • Fast Delivery • Kakinada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;