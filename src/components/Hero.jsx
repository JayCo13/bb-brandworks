import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__center-logo">
        <img
          src="/assets/logos/bb brandworks - logo - weiss.png"
          alt="bb brandworks"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      <div className="hero__bottom">
        <div className="hero__bottom-text">
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
        <div className="hero__bottom-image">
          <img src="/assets/images/silhouette-people-city.jpg" alt="City Silhouette" loading="eager" fetchpriority="high" />
          <div className="hero__image-blur" />
          <div className="hero__image-fade" />
        </div>
      </div>
    </section>
  );
}
