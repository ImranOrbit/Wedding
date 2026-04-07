import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CateringPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cuisines = [
    { name: 'Indian Cuisine', icon: '🍛', specialties: 'Biryani, Butter Chicken, Dal Makhani' },
    { name: 'Chinese Cuisine', icon: '🥡', specialties: 'Dimsum, Noodles, Manchurian' },
    { name: 'Italian Cuisine', icon: '🍝', specialties: 'Pizza, Pasta, Risotto' },
    { name: 'Continental', icon: '🍽️', specialties: 'Grills, Steaks, Seafood' },
    { name: 'Mediterranean', icon: '🥙', specialties: 'Hummus, Falafel, Greek Salad' },
    { name: 'Asian Fusion', icon: '🥢', specialties: 'Sushi, Thai Curry, Pho' },
    { name: 'Desserts', icon: '🍰', specialties: 'Cakes, Pastries, Ice Cream' },
    { name: 'Beverages', icon: '🍷', specialties: 'Mocktails, Cocktails, Juices' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <button onClick={() => setMenuOpen(true)} className="z-50">
              <div className="space-y-1">
                <span className="block w-5 h-[2px] bg-gray-800"></span>
                <span className="block w-5 h-[2px] bg-gray-800"></span>
                <span className="block w-5 h-[2px] bg-gray-800"></span>
              </div>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2">
              <h1 className="text-sm md:text-xl tracking-[0.2em] md:tracking-[0.3em] font-semibold text-gray-800">MERIDIAN GRAND</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="hidden md:block bg-[#b89b5e] hover:bg-[#a0884e] px-4 py-2 text-sm rounded text-white transition">00 768 456 1234</button>
              <button className="bg-[#b89b5e] hover:bg-[#a0884e] px-3 md:px-4 py-2 text-xs md:text-sm rounded text-white transition">ENQUIRE</button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-2xl transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-500 z-50`}>
        <button className="absolute top-5 right-5 text-2xl text-gray-600 hover:text-[#b89b5e]" onClick={() => setMenuOpen(false)}>✕</button>
        <div className="h-48 w-full overflow-hidden">
          <img src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Meridian Grand" className="w-full h-full object-cover" />
        </div>
        <div className="p-6 space-y-4 text-gray-800">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Menu</h2>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/'); setMenuOpen(false); }}>Home</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/weddings'); setMenuOpen(false); }}>Weddings</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/events'); setMenuOpen(false); }}>Events</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/suites'); setMenuOpen(false); }}>Suites</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition text-[#b89b5e] font-medium" onClick={() => { navigate('/catering'); setMenuOpen(false); }}>In-House Catering</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/decor'); setMenuOpen(false); }}>Décor</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/gallery'); setMenuOpen(false); }}>Gallery</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/testimonials'); setMenuOpen(false); }}>Testimonials</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/blog'); setMenuOpen(false); }}>Blog</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/team'); setMenuOpen(false); }}>Team MG</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/contact'); setMenuOpen(false); }}>Contact Us</p>
        </div>
      </div>

      {menuOpen && <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/40 z-40"></div>}

      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gray-900 mt-16">
        <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Catering Hero" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4">In-House Catering</h1>
          <p className="text-lg md:text-xl max-w-2xl">Exquisite culinary experiences crafted by master chefs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-3">Our Cuisines</h2>
          <div className="w-20 h-1 bg-[#b89b5e] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Authentic flavors from around the world, prepared fresh daily</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cuisines.map((cuisine, index) => (
            <div key={index} className="group bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{cuisine.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#b89b5e] transition">{cuisine.name}</h3>
              <div className="w-12 h-0.5 bg-[#b89b5e]/50 mx-auto mt-3 mb-2"></div>
              <p className="text-xs text-gray-500">{cuisine.specialties}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Chef" className="rounded-2xl shadow-lg w-full object-cover h-80" />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif text-gray-800">Customized Menus For Every Occasion</h2>
              <div className="w-16 h-1 bg-[#b89b5e]"></div>
              <p className="text-gray-600 leading-relaxed">Our award-winning culinary team works with you to create a bespoke menu that delights your guests and complements your event perfectly.</p>
              <button className="mt-4 bg-[#b89b5e] hover:bg-[#a0884e] text-white px-6 py-2 rounded transition">Request a Tasting</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateringPage;