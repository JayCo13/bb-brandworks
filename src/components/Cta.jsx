import './Cta.css';

export default function Cta() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta__content">
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
