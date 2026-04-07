import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WeddingsPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Wedding categories as shown in the screenshot
  const weddingTypes = [
    { name: 'Hindu Weddings', icon: '🕉️' },
    { name: 'Sikh Weddings', icon: '🪔' },
    { name: 'Bengali Weddings', icon: '🎭' },
    { name: 'Muslim Weddings', icon: '☪️' },
    { name: 'African Weddings', icon: '🌍' },
    { name: 'Turkish Weddings', icon: '🇹🇷' },
    { name: 'Jewish Weddings', icon: '✡️' },
    { name: 'Asian Weddings', icon: '🎎' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Same as home page style */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu */}
            <button onClick={() => setMenuOpen(true)} className="z-50">
              <div className="space-y-1">
                <span className={`block w-5 h-[2px] ${scrolled ? 'bg-gray-800' : 'bg-gray-800'} transition-all`}></span>
                <span className={`block w-5 h-[2px] ${scrolled ? 'bg-gray-800' : 'bg-gray-800'} transition-all`}></span>
                <span className={`block w-5 h-[2px] ${scrolled ? 'bg-gray-800' : 'bg-gray-800'} transition-all`}></span>
              </div>
            </button>

            {/* Center Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <h1 className="text-sm md:text-xl tracking-[0.2em] md:tracking-[0.3em] font-semibold text-gray-800">
                MERIDIAN GRAND
              </h1>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-2">
              <button className="hidden md:block bg-[#b89b5e] hover:bg-[#a0884e] px-4 py-2 text-sm rounded text-white transition">
                00 768 456 1234
              </button>
              <button className="bg-[#b89b5e] hover:bg-[#a0884e] px-3 md:px-4 py-2 text-xs md:text-sm rounded text-white transition">
                ENQUIRE
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu - Same as home page */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-2xl transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition duration-500 z-50`}
      >
        <button
          className="absolute top-5 right-5 text-2xl text-gray-600 hover:text-[#b89b5e]"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <div className="h-48 w-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Meridian Grand"
            className="w-full h-full object-cover"
          />
        </div>

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

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gray-900 mt-16">
        <img
          src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Wedding Hero"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4">Weddings at Meridian Grand</h1>
          <p className="text-lg md:text-xl max-w-2xl">Creating unforgettable moments for every culture and tradition</p>
        </div>
      </div>

      {/* Wedding Types Grid - Exactly as shown in screenshot */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-3">Our Wedding Services</h2>
          <div className="w-20 h-1 bg-[#b89b5e] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We specialize in weddings from diverse cultures, ensuring every detail reflects your traditions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weddingTypes.map((wedding, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {wedding.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#b89b5e] transition">
                {wedding.name}
              </h3>
              <div className="w-12 h-0.5 bg-[#b89b5e]/50 mx-auto mt-3 group-hover:w-16 transition-all"></div>
              <p className="text-sm text-gray-500 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Content - Description Section */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury Wedding"
                className="rounded-2xl shadow-lg w-full object-cover h-80"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif text-gray-800">A Venue Like No Other</h2>
              <div className="w-16 h-1 bg-[#b89b5e]"></div>
              <p className="text-gray-600 leading-relaxed">
                Meridian Grand offers the perfect blend of luxury and tradition. Our dedicated team ensures 
                that every wedding, whether Hindu, Sikh, Muslim, Christian, or any other faith, is executed 
                with precision and cultural sensitivity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From elaborate Indian weddings to intimate Jewish ceremonies, we've hosted over 500 weddings 
                across 20+ different cultures. Let us help you create memories that last a lifetime.
              </p>
              <button className="mt-4 bg-[#b89b5e] hover:bg-[#a0884e] text-white px-6 py-2 rounded transition">
                Plan Your Wedding
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="bg-[#b89b5e] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-3">Ready to Start Your Journey?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Contact our wedding specialists to schedule a tour and consultation
          </p>
          <button className="bg-white text-[#b89b5e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md">
            Request a Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeddingsPage;