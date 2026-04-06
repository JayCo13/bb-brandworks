import './Hero.css';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Hero() {
  const heroRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__center-logo scale-in">
        <img
          src="/assets/logos/bb brandworks - logo - weiss.png"
          alt="bb brandworks"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      <div className="hero__bottom">
        <div className="hero__bottom-text fade-in-left delay-2">
          <p className="hero__subtitle">
            bb brandworks begleitet kleine und mittlere Unternehmen, die ohne eigene
            Marketingabteilung auskommen – aber nicht ohne klares Marketing. Als externe
            Partnerin bringt bb brandworks Struktur in Markenstrategien und Prozesse,
            entwickelt relevante Inhalte und sorgt für die nötige Sichtbarkeit.
          </p>
          <a href="#kontakt" className="btn btn--white">
            ANFRAGEN
          </a>
        </div>
        <div className="hero__bottom-image fade-in-right delay-3">
          <img src="/assets/images/silhouette-people-city.webp" alt="City Silhouette" loading="eager" fetchpriority="high" />
          <div className="hero__image-blur" />
          <div className="hero__image-fade" />
        </div>
      </div>
    </section>
  );
}
