import React, { useState } from "react";

// ✅ Google/Unsplash Wedding Image
const bgImage =
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070";

const testimonials = [
  {
    text: "Thank you to Shiv and all the staff at Meridian Grand who made our wedding day so special! Everything went smoothly and was well coordinated. The chefs even did bespoke requests and everyone loved the decor and food.",
    name: "Pre Vyas",
  },
  {
    text: "What an absolute dream! If you’re planning an Indian wedding, we can’t recommend Meridian Grand enough. The gorgeous venue, authentic food, and incredible service made our big day unforgettable.",
    name: "Dimple Rana",
  },
  {
    text: "I had my wedding in July 2024. Shiv and Nimra were so kind and helpful. They ensured everything went to plan from booking to the wedding day itself.",
    name: "Aqilah Shakoor",
  },
  {
    text: "Meridian Grand is one of the finest places for events. The staff was very professional and the decor and lighting made everything even more beautiful.",
    name: "Zamir Patang",
  },
  {
    text: "Thank you for going above and beyond to make our wedding day seamless and special. The team handled everything with professionalism and warmth.",
    name: "Aimy & Kajesh",
  },
  {
    text: "We recently celebrated our Traditional Yoruba Nigerian wedding and it was the best decision we made. The elegance and stunning decor created the perfect backdrop.",
    name: "Annette Babyemi",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row">
      
      {/* LEFT SIDE (TEXT) */}
      <div className="lg:w-1/2 w-full bg-black text-white flex items-center px-6 sm:px-10 lg:px-16 py-10">
        <div className="max-w-xl">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
            Testimonials
          </h2>

          <p className="text-sm sm:text-base leading-relaxed mb-6 italic text-gray-200">
            "{testimonials[index].text}"
          </p>

          <p className="text-lg font-semibold mb-6">
            {testimonials[index].name}
          </p>

          <div className="w-full h-[1px] bg-white/40 mb-6"></div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition"
            >
              →
            </button>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE (IMAGE) */}
      <div className="lg:w-1/2 w-full h-[300px] sm:h-[400px] lg:h-auto relative">
        
        <img
          src={bgImage}
          alt="wedding"
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

      </div>

    </section>
  );
};

export default Testimonials;