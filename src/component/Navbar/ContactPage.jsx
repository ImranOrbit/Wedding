import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Thank you for contacting us! We will get back to you soon.'); setFormData({ name: '', email: '', phone: '', message: '' }); };

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
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/testimonials'); setMenuOpen(false); }}>Testimonials</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/blog'); setMenuOpen(false); }}>Blog</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/team'); setMenuOpen(false); }}>Team MG</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition text-[#b89b5e] font-medium" onClick={() => { navigate('/contact'); setMenuOpen(false); }}>Contact Us</p>
        </div>
      </div>

      {menuOpen && <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/40 z-40"></div>}

      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gray-900 mt-16">
        <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Contact Hero" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl">We'd love to hear from you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4"><span className="text-2xl">📍</span><div><h3 className="font-semibold">Address</h3><p className="text-gray-600">123 Luxury Avenue, Downtown, City - 400001</p></div></div>
              <div className="flex items-start gap-4"><span className="text-2xl">📞</span><div><h3 className="font-semibold">Phone</h3><p className="text-gray-600">+00 768 456 1234<br />+00 768 456 5678</p></div></div>
              <div className="flex items-start gap-4"><span className="text-2xl">✉️</span><div><h3 className="font-semibold">Email</h3><p className="text-gray-600">info@meridiangrand.com<br />events@meridiangrand.com</p></div></div>
              <div className="flex items-start gap-4"><span className="text-2xl">⏰</span><div><h3 className="font-semibold">Hours</h3><p className="text-gray-600">Monday - Sunday: 9:00 AM - 9:00 PM</p></div></div>
            </div>
            <div className="mt-8"><h3 className="font-semibold mb-3">Follow Us</h3><div className="flex gap-4 text-2xl"><span className="cursor-pointer hover:text-[#b89b5e]">📷</span><span className="cursor-pointer hover:text-[#b89b5e]">📘</span><span className="cursor-pointer hover:text-[#b89b5e]">🐦</span><span className="cursor-pointer hover:text-[#b89b5e]">📌</span></div></div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl font-serif text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b89b5e]" required /></div>
              <div><input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b89b5e]" required /></div>
              <div><input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b89b5e]" /></div>
              <div><textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b89b5e]" required></textarea></div>
              <button type="submit" className="w-full bg-[#b89b5e] hover:bg-[#a0884e] text-white py-3 rounded-lg transition font-semibold">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[300px] bg-gray-200">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986513723757!3d40.69714941705765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default ContactPage;