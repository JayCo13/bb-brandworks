import './ClientLogos.css';

const LOGOS = [
  'Britta Berger - Referenz - AREA47.png',
  'Britta Berger - Referenz - Blank.png',
  'Britta Berger - Referenz - Buffalo.png',
  'Britta Berger - Referenz - Courtboost.png',
  'Britta Berger - Referenz - HFT.png',
  'Britta Berger - Referenz - Montanmuseum.png',
  'Britta Berger - Referenz - OID.png',
  'Britta Berger - Referenz - Oelefanten.png',
  'Britta Berger - Referenz - Prolicht.png',
  'Britta Berger - Referenz - SCA.png',
  'Britta Berger - Referenz - Skinfit.png',
  'Britta Berger - Referenz - Soelktaeler.png',
  'Britta Berger - Referenz - Zeitpolster.png',
  'Britta Berger - Referenz - lws.png',
];

export default function ClientLogos() {
  return (
    <section className="client-logos" id="referenzen">
      <div className="container">
        <h2 className="client-logos__title">GEMEINSAM ERFOLGREICH</h2>
      </div>

      <div className="client-logos__slider-container">
        <div className="client-logos__track">
          <div className="client-logos__group">
            {LOGOS.map((logo, index) => (
              <div className="client-logos__slide" key={index}>
                <img src={`/assets/referenzen/${logo}`} alt="Client Logo" />
              </div>
            ))}
          </div>
          <div className="client-logos__group">
            {LOGOS.map((logo, index) => (
              <div className="client-logos__slide" key={index + LOGOS.length}>
                <img src={`/assets/referenzen/${logo}`} alt="Client Logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
