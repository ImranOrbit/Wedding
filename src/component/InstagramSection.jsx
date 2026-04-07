import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
];

const InstagramSection = () => {
  return (
    <div className="bg-[#f5f1eb] py-16 px-6 md:px-12 lg:px-20">

      {/* Header */}
      <div className="mb-10">
        <p className="text-[#b89b5e] uppercase tracking-[0.25em] text-sm">
          Follow Us
        </p>
        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mt-2">
          Our Latest Instagrams
        </h2>
      </div>

      {/* Grid */}
      <div className="relative">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden group relative">
              <img
                src={`${img}?auto=format&fit=crop&w=600&q=80`}
                alt="insta"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover 
                group-hover:scale-110 transition duration-500"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300"></div>
            </div>
          ))}
        </div>

        {/* CENTER OVERLAY CARD */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <div className="bg-white shadow-xl px-8 py-6 text-center max-w-md pointer-events-auto">

            <h3 className="font-serif text-xl md:text-2xl text-gray-900">
              YOUR FAVOURITE MOMENTS
            </h3>

            <p className="mt-2 text-gray-600 tracking-wide">
              @MERIDIANGRAND
            </p>

            {/* Social icons */}
            <div className="flex justify-center gap-4 mt-4 text-gray-700">
              <FaFacebookF className="hover:text-[#b89b5e] cursor-pointer" />
              <FaTwitter className="hover:text-[#b89b5e] cursor-pointer" />
              <FaInstagram className="hover:text-[#b89b5e] cursor-pointer" />
              <FaYoutube className="hover:text-[#b89b5e] cursor-pointer" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InstagramSection;