import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WeddingVenueInquiry = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const images = [
    "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <img
        src={images[currentImage]}
        alt=""
        className="absolute w-full h-full object-cover transition duration-1000"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      {/* TOP NAV */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 md:px-6 py-4 text-white z-20">
        {/* Hamburger */}
        <button onClick={() => setMenuOpen(true)}>
          <div className="space-y-1">
            <span className="block w-5 h-[2px] bg-white"></span>
            <span className="block w-5 h-[2px] bg-white"></span>
            <span className="block w-5 h-[2px] bg-white"></span>
          </div>
        </button>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 text-sm md:text-xl tracking-[0.2em] md:tracking-[0.3em] font-semibold">
          MERIDIAN GRAND
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-2">
          {/* Hide on mobile */}
          <button className="hidden md:block bg-[#b89b5e] px-4 py-2 text-sm rounded text-white">
            00 768 456 1234
          </button>

          <button className="bg-[#b89b5e] px-3 md:px-4 py-2 text-xs md:text-sm rounded text-white">
            ENQUIRE
          </button>
        </div>
      </div>

      {/* CENTER TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-serif">
          Welcome To A Luxury Wedding <br />
          Venue Like No Other
        </h1>
      </div>

      {/* SIDEBAR MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-2xl transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-500 z-50`}
      >
        {/* Close */}
        <button
          className="absolute top-5 right-5 text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        {/* Image */}
        <div className="h-48 w-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Menu */}
         <div className="p-6 space-y-4 text-gray-800">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Menu</h2>
          <p
            className="hover:text-[#b89b5e] cursor-pointer transition"
            onClick={() => { navigate('/'); setMenuOpen(false); }}
          >
            Home
          </p>
          <p
            className="hover:text-[#b89b5e] cursor-pointer transition text-[#b89b5e] font-medium"
            onClick={() => { navigate('/weddings'); setMenuOpen(false); }}
          >
            Weddings
          </p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition"
          onClick={() => { navigate('/events'); setMenuOpen(false); }}
          >Events</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/suites'); setMenuOpen(false); }}>Suites</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/catering'); setMenuOpen(false); }}>In-House Catering</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/decor'); setMenuOpen(false); }}>Décor</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/gallery'); setMenuOpen(false); }}>Gallery</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/testimonials'); setMenuOpen(false); }}>Testimonials</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/blog'); setMenuOpen(false); }}>Blog</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/team'); setMenuOpen(false); }}>Team MG</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/contact'); setMenuOpen(false); }}>Contact Us</p>
        </div>
      </div>

      {/* Overlay when menu open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* BOTTOM FORM */}
      <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur-md p-4 md:px-10 z-20">
        <form className="grid grid-cols-2 md:grid-cols-6 gap-3">
          <input type="date" className="border px-3 py-2 rounded" />
          <select className="border px-3 py-2 rounded">
            <option>Guests</option>
          </select>
          <input
            type="text"
            placeholder="First Name"
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded"
          />
          <button className="bg-[#b89b5e] text-white rounded">Next</button>
        </form>
      </div>
    </div>
  );
};

export default WeddingVenueInquiry;
