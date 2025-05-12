import { Facebook, Instagram, Music, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white text-sm pt-16 pb-6 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div>
          <h4 className="uppercase font-semibold mb-4">General Info</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>All Products</li>
            <li>Store Location</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="uppercase font-semibold mb-4">Customer Care</h4>
          <ul className="space-y-2">
            <li>Warranty, Return & Refund Policy</li>
            <li>Warranty Registration</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="uppercase font-semibold mb-4">Newsletter Sign Up</h4>
          <p className="mb-4">
            Receive our latest updates about our products and promotions.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 rounded-l-full bg-orange-700 text-white w-full placeholder-white text-sm focus:outline-none"
            />
            <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-r-full text-sm">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-orange-500 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto text-sm">
        {/* Social */}
        <div className="flex gap-4 items-center mb-4 md:mb-0">
          <span className="uppercase font-semibold">Follow Us</span>
          <Facebook className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
          <Music className="w-5 h-5" /> {/* TikTok icon placeholder */}
        </div>

        {/* Copyright */}
        <p className="text-center">
          This website only for testing purpose. All rights reserved &copy; 2023{" Dwiky "}
          Design.
        </p>
      </div>
    </footer>
  );
}
