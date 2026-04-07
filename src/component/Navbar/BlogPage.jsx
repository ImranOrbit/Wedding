import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const blogPosts = [
    { id: 1, title: 'Top 10 Wedding Trends for 2025', date: 'Jan 15, 2025', author: 'Sarah Mitchell', category: 'Wedding', excerpt: 'Discover the latest trends in wedding décor, fashion, and entertainment...', image: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg' },
    { id: 2, title: 'How to Plan the Perfect Corporate Event', date: 'Jan 10, 2025', author: 'John Davis', category: 'Events', excerpt: 'Tips and tricks for organizing a successful corporate gathering...', image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg' },
    { id: 3, title: 'The Art of Wedding Catering', date: 'Jan 5, 2025', author: 'Chef Anthony', category: 'Catering', excerpt: 'Creating memorable dining experiences for your special day...', image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg' },
    { id: 4, title: 'Luxury Suite Amenities Guide', date: 'Dec 28, 2024', author: 'Emma Wilson', category: 'Suites', excerpt: 'Explore the premium amenities offered in our luxury suites...', image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg' },
    { id: 5, title: 'Destination Wedding Planning', date: 'Dec 20, 2024', author: 'Priya Sharma', category: 'Wedding', excerpt: 'Everything you need to know about planning a destination wedding...', image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg' },
    { id: 6, title: 'Seasonal Décor Inspiration', date: 'Dec 15, 2024', author: 'Lisa Chen', category: 'Décor', excerpt: 'Beautiful decoration ideas for every season and occasion...', image: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg' },
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
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/testimonials'); setMenuOpen(false); }}>Testimonials</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition text-[#b89b5e] font-medium" onClick={() => { navigate('/blog'); setMenuOpen(false); }}>Blog</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/team'); setMenuOpen(false); }}>Team MG</p>
          <p className="hover:text-[#b89b5e] cursor-pointer transition" onClick={() => { navigate('/contact'); setMenuOpen(false); }}>Contact Us</p>
        </div>
      </div>

      {menuOpen && <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/40 z-40"></div>}

      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gray-900 mt-16">
        <img src="https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Blog Hero" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4">Our Blog</h1>
          <p className="text-lg md:text-xl max-w-2xl">Insights, tips, and stories from Meridian Grand</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-3">Latest Articles</h2>
          <div className="w-20 h-1 bg-[#b89b5e] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Stay updated with the latest news and inspiration</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden"><img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2"><span className="bg-gray-100 px-2 py-1 rounded">{post.category}</span><span>•</span><span>{post.date}</span></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#b89b5e] transition">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                <p className="text-xs text-gray-400">By {post.author}</p>
                <button className="mt-4 text-[#b89b5e] font-medium hover:underline">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;