import './Footer.css';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Footer() {
  const footerRef = useScrollReveal({ threshold: 0.1 });

  return (
    <footer className="footer" id="kontakt" ref={footerRef}>
      <div className="container">
        <div className="footer__top">

          <div className="footer__left fade-in-left">
            <h2 className="footer__title">
              INDIVIDUELLE<br />
              BRANDING-<br />
              KONZEPTE UND<br />
              KOMMUNIKATIONS-<br />
              STRATEGIEN FÜR<br />
              <span style={{ whiteSpace: "nowrap" }}>DEIN UNTERNEHMEN.</span>
            </h2>
          </div>

          <div className="footer__right fade-in-right delay-2">
            <div className="footer__block">
              <p>britta@bb-brandworks.com</p>
              <p>+43 664 5380151</p>
            </div>

            <div className="footer__block">
              <p>Hauptstraße 4 Top 1a</p>
              <p>6719 Bludesch, Austria</p>
            </div>

            <div className="footer__socials">
              <a href="https://www.linkedin.com/company/bb-brandworks/" target="_blank" rel="noreferrer" className="footer__social-link" title="LinkedIn">
                in
              </a>
            </div>

            <div className="footer__links">
              <a href="#impressum">Impressum</a>
              <a href="#datenschutz">Datenschutz</a>
              <a href="#agb">AGB</a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer__bottom-title scale-in">
        bb brandworks
      </div>

      <div className="footer__copy">
        © 2026 bb brandworks
      </div>
    </footer>
  );
}
