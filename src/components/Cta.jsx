import './Cta.css';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Cta() {
  const sectionRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="cta" id="cta" ref={sectionRef}>
      <div className="container">
        <div className="cta__content scale-in">
          <h2 className="cta__text">
            Bei bb brandworks steht das große Ganze im Fokus<br />
            – von der ersten Idee bis zum fertigen Ergebnis.
          </h2>
          <a href="#kontakt" className="btn btn--primary">
            ANFRAGEN
          </a>
        </div>
      </div>
    </section>
  );
}
