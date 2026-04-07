import React from "react";

const data = [
 {
    title: "AFRICAN WEDDINGS",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
  },
  {
    title: "TURKISH WEDDINGS",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    title: "JEWISH WEDDINGS",
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
  },
  {
    title: "AFRICAN WEDDINGS",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
  },
];

const WeddingGallery = () => {
  return (
    <div className="bg-[#f5f1eb] min-h-screen px-6 md:px-12 lg:px-20 py-12">
      
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm tracking-widest text-[#b89b5e] uppercase">
          Bespoke Weddings
        </p>
        <h1 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900 mt-2">
          Elegance Tailored to Every Occasion
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-md"
          >
            {/* Image */}
            <img
              src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
              alt={item.title}
              className="w-full h-[450px] object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h2 className="text-lg md:text-xl font-semibold tracking-wide">
                {item.title}
              </h2>

              <div className="flex items-center justify-between mt-3">
                <span className="text-sm tracking-widest">DISCOVER</span>

                <button className="w-9 h-9 flex items-center justify-center bg-[#d4af37] rounded-full text-white hover:scale-110 transition">
                  →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingGallery;