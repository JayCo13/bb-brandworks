import './Cta.css';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Cta() {
  const sectionRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="cta" id="cta" ref={sectionRef}>
      <div className="container">
        <div className="cta__content scale-in">
          <h2 className="cta__text">
            Bei bb brandworks steht <br className="mobile-br" />
            das große Ganze im Fokus<br className="desktop-br" />
            <span className="mobile-br"></span>
            – von der ersten Idee bis <br className="mobile-br" />
            zum fertigen Ergebnis.
          </h2>
          <a href="#kontakt" className="btn btn--primary">
            ANFRAGEN
          </a>
        </div>
      </div>
    </section>
  );
}
