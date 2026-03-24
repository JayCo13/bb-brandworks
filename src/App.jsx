import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Cta from './components/Cta';
import ClientLogos from './components/ClientLogos';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Cta />
        <ClientLogos />
      </main>
      <Footer />
    </>
  );
}
