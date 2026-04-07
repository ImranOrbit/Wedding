import { Routes, Route } from 'react-router-dom';
import WeddingVenueInquiry from './component/WeddingVenueInquiry';
import AboutSection from './component/AboutSection';
import Testimonials from './component/testimonials';
import WeddingGallery from './component/WeddingGallery';
import CateringSection from './component/CateringSection';
import InstagramSection from './component/InstagramSection';
import InquiryForm from './component/InquiryForm';
import Footer from './component/Footer';
import WeddingsPage from './component/Navbar/WeddingsPage';
import EventsPage from './component/Navbar/EventsPage';
import SuitesPage from './component/Navbar/SuitesPage';
import CateringPage from './component/Navbar/CateringPage';
import DecorPage from './component/Navbar/DecorPage';
import GalleryPage from './component/Navbar/GalleryPage';
import TestimonialsPage from './component/Navbar/TestimonialsPage';
import BlogPage from './component/Navbar/BlogPage';
import TeamPage from './component/Navbar/TeamPage';
import ContactPage from './component/Navbar/ContactPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <WeddingVenueInquiry />
            <AboutSection />
            <Testimonials />
            <WeddingGallery />
            <CateringSection />
            <InstagramSection />
            <InquiryForm />
          </>
        } />
        <Route path="/weddings" element={<WeddingsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/suites" element={<SuitesPage />} />
        <Route path="/catering" element={<CateringPage />} /> 
        <Route path="/decor" element={<DecorPage />} /> 
        <Route path="/gallery" element={<GalleryPage />} /> 
        <Route path="/testimonials" element={<TestimonialsPage />} /> 
        <Route path="/blog" element={<BlogPage />} /> 
        <Route path="/team" element={<TeamPage />} /> 
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>

      {/* Footer stays visible on all routes */}
      <Footer />
    </>
  );
}

export default App;