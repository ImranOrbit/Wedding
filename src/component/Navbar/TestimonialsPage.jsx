import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TestimonialsPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const testimonials = [
    { id: 1, name: 'Priya & Rajesh', event: 'Wedding', rating: 5, text: 'Meridian Grand made our dream wedding a reality! The staff was incredible and the venue was breathtaking.', date: 'Dec 2024' },
    { id: 2, name: 'Michael Chen', event: 'Corporate Event', rating: 5, text: 'Best venue for corporate events. Professional staff and excellent catering service.', date: 'Nov 2024' },
    { id: 3, name: 'Sarah Johnson', event: 'Birthday Party', rating: 5, text: 'Amazing experience! The decor was perfect and everyone had a wonderful time.', date: 'Oct 2024' },
    { id: 4, name: 'Amit & Neha', event: 'Anniversary', rating: 5, text: 'Celebrated our 25th anniversary here. Truly a magical experience!', date: 'Sep 2024' },
    { id: 5, name: 'Fatima Khan', event: 'Wedding', rating: 5, text: 'The team understood our cultural needs perfectly. Highly recommended!', date: 'Aug 2024' },
    { id: 6, name: 'David Williams', event: 'Conference', rating: 4, text: 'Great facilities and excellent audio-visual setup. Will book again.', date: 'Jul 2024' },
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
              <div className="space-y-1"><span className="block w-5 h-[2px] bg-gray-800"></span><span className="block w-5 h-[2px] bg-gray-800"></span><span className="block w-5 h-[2px] bg-gray-800"></span></div>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2"><h1 className="text-sm md:text-xl tracking-[0.2em] md:tracking-[0.3em] font-semibold text-gray-800">MERIDIAN GRAND</h1></div>
            <div className="flex items-center gap-2">
              <button className="hidden md:block bg-[#b89b5e] hover:bg-[#a0884e] px-4 py-2 text-sm rounded text-white transition">00 768 456 1234</button>
              <button className="bg-[#b89b5e] hover:bg-[#a0884e] px-3 md:px-4 py-2 text-xs md:text-sm rounded text-white transition">ENQUIRE</button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-2xl transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-500 z-50`}>
        <button className="absolute top-5 right-5 text-2xl text-gray-600 hover:text-[#b89b5e]" onClick={() => setMenuOpen(false)}>✕</button>
        <div className="h-48 w-full overflow-hidden"><img src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Meridian Grand" className="w-full h-full object-cover" /></div>
        <div className="p-6 space-y-4 text-gray-800">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Menu</h2>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/'); setMenuOpen(false); }}>Home</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/weddings'); setMenuOpen(false); }}>Weddings</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/events'); setMenuOpen(false); }}>Events</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/suites'); setMenuOpen(false); }}>Suites</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/catering'); setMenuOpen(false); }}>In-House Catering</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/decor'); setMenuOpen(false); }}>Décor</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/gallery'); setMenuOpen(false); }}>Gallery</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition text-[#b89b5e] font-medium" onClick={() => { navigate('/testimonials'); setMenuOpen(false); }}>Testimonials</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/blog'); setMenuOpen(false); }}>Blog</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/team'); setMenuOpen(false); }}>Team MG</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/contact'); setMenuOpen(false); }}>Contact Us</p>
        </div>
      </div>

      {menuOpen && <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/40 z-40"></div>}

      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gray-900 mt-16">
        <img src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Testimonials Hero" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4">What Our Clients Say</h1>
          <p className="text-lg md:text-xl max-w-2xl">Real stories from real celebrations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-3">Client Testimonials</h2>
          <div className="w-20 h-1 bg-[#b89b5e] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Don't just take our word for it - hear from our happy clients</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (<span key={i} className="text-yellow-400">★</span>))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div className="border-t pt-3">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.event} • {testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-serif text-gray-800 mb-3">Share Your Experience</h2>
          <p className="text-gray-600 mb-6">We'd love to hear about your special day at Meridian Grand</p>
          <button className="bg-[#b89b5e] hover:bg-[#a0884e] text-white px-8 py-3 rounded-lg transition">Write a Review</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;