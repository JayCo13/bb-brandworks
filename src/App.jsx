import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Cta from './components/Cta';
import ClientLogos from './components/ClientLogos';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

export default function App() {
  const [legalPage, setLegalPage] = useState(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['impressum', 'datenschutz', 'agb'].includes(hash)) {
        setLegalPage(hash);
      } else {
        setLegalPage(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (legalPage === null) {
      const hash = window.location.hash;
      if (hash && hash !== '#') {
        // give the DOM a tiny tick to paint the main layout before scrolling
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [legalPage]);

  const isLegalPage = legalPage !== null;

  return (
    <>
      <Navbar />
      {isLegalPage ? (
        <LegalPage page={legalPage} />
      ) : (
        <main>
          <Hero />
          <Services />
          <About />
          <WhyUs />
          <Cta />
          <ClientLogos />
        </main>
      )}
      <Footer />
      <ScrollToTop />
      <CookieBanner />
    </>
  );
}
