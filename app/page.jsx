import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBand from '@/components/StatsBand';
import Services from '@/components/Services';
import Realisations from '@/components/Realisations';
import Testimonial from '@/components/Testimonial';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatsBand />
      <Services />
      <Realisations />
      <Testimonial />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
