import React from "react";

const CateringSection = () => {
  return (
    <div className="bg-[#f5f1eb]">

      {/* ===== TOP STATS ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center gap-10">

          {/* Item 1 */}
          <div>
            <h2 className="text-5xl md:text-7xl text-[#b89b5e] font-serif">
              3
            </h2>
            <p className="mt-3 tracking-widest text-gray-700">
              Luxury Ballrooms
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center w-full justify-center gap-6">
              <span className="hidden md:block w-16 h-[1px] bg-[#b89b5e]"></span>

              <h2 className="text-4xl md:text-4xl text-[#b89b5e] font-serif">
                120–800
              </h2>

              <span className="hidden md:block w-16 h-[1px] bg-[#b89b5e]"></span>
            </div>
            <p className="mt-3 tracking-widest text-gray-700">
              Capacity
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h2 className="text-5xl md:text-7xl text-[#b89b5e] font-serif">
              300
            </h2>
            <p className="mt-3 tracking-widest text-gray-700">
              Car Parking Spaces
            </p>
          </div>

        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <p className="text-[#b89b5e] tracking-[0.2em] uppercase text-sm mb-4">
              In-House Catering
            </p>

            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
              Meridian Grand <br /> Catering
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
              Our passion for flavour drives us to deliver exceptional cuisine.
              Our approach is to create delicious dishes using only the freshest
              produce and the highest quality of ingredients – these combined
              ensure a truly memorable dining experience.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
              alt="Catering"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-sm"
            />

            {/* Decorative badge */}
            <div className="absolute top-4 left-4 w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center text-white text-lg shadow-md">
              ✦
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CateringSection;