import './Cta.css';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Cta() {
  const sectionRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="cta" id="cta" ref={sectionRef}>
      <div className="container">
        <div className="cta__content scale-in">
          <h2 className="cta__text">
            <span style={{ whiteSpace: "nowrap" }}>Bei bb brandworks steht</span> <br className="mobile-br" />
            <span style={{ whiteSpace: "nowrap" }}>das große Ganze im Fokus</span><br className="desktop-br" />
            <span className="mobile-br"></span>
            <span style={{ whiteSpace: "nowrap" }}>– von der ersten Idee bis</span> <br className="mobile-br" />
            <span style={{ whiteSpace: "nowrap" }}>zum fertigen Ergebnis.</span>
          </h2>
          <a href="#kontakt" className="btn btn--primary">
            ANFRAGEN
          </a>
        </div>
      </div>
    </section>
  );
}
