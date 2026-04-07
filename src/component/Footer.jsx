import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e9e6e1] text-gray-800 px-6 md:px-16 py-12">
      
      {/* Newsletter */}
      <div className="grid md:grid-cols-3 gap-6 items-center border-b border-gray-300 pb-8">
        
        <div>
          <h3 className="uppercase tracking-widest text-sm mb-3">
            Join Our Guest List
          </h3>
          <p className="text-gray-600 max-w-sm">
            Be the first to hear about new events, venue showcases, and seasonal inspiration.
          </p>
        </div>

        <div className="md:col-span-1 w-full">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none"
          />
        </div>

        <div className="flex md:justify-end">
          <button className="bg-[#a68a4c] text-white px-6 py-3 uppercase tracking-widest hover:bg-[#8c743e] transition">
            Subscribe →
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="grid md:grid-cols-4 gap-10 py-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl tracking-widest mb-4 flex items-center gap-2">
            MERIDIAN GRAND
            <span className="w-6 h-6 bg-[#a68a4c] rounded-full inline-block"></span>
          </h2>
          <p className="text-gray-600 mb-2">
            Advent Way, London N18 3AF
          </p>
          <p className="text-gray-600">📞 020 4600 0124</p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="mb-4 font-semibold">Explore</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Weddings</li>
            <li>Events</li>
            <li>Gallery</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-4 font-semibold">Links</h4>
          <ul className="space-y-2 text-gray-600">
            <li>In-House Catering</li>
            <li>Virtual Tour</li>
            <li>Privacy Policy</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Suites */}
        <div>
          <h4 className="mb-4 font-semibold">Suites</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Meridian Grand Ballroom</li>
            <li>Grand Ballroom</li>
            <li>The Infinity Suite</li>
            <li>VIP Suites</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 pt-6 text-sm text-gray-600">
        © 2026 MERIDIAN GRAND. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;