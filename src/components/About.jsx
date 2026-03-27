import './About.css';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const sectionRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__layout">
          
          {/* Left Column: Giant Title */}
          <div className="about__left fade-in-left">
            <h2 className="about__title">
              WER <br className="about__desktop-br" />STECKT<br />DAHINTER?
            </h2>
          </div>

          {/* Right Column: Subtitle, Bio, Image */}
          <div className="about__right fade-in-right delay-2">
            <h3 className="about__subtitle">
              DIE KREATIVE POWER <br className="about__mobile-br" />HINTER BB BRANDWORKS<br />
              BRITTA BERGER
            </h3>
            
            <p className="about__bio">
              Ich brenne für starke Marken und liebe es, ihren Weg zum Erfolg zu begleiten. 
              Seit über 15 Jahren gestalte ich Marken und ihre Storys und mache sie 
              lebendig. Dabei durfte ich viele spannende Projekte realisieren und 
              Unternehmen helfen, ihre Botschaft klar und authentisch zu kommunizieren. 
              Heute setze ich mein Wissen und meine Leidenschaft ein, um kleinen und 
              mittleren Unternehmen zu helfen, ihre Marke zu schärfen, Inhalte auf den 
              Punkt zu bringen und ihre Sichtbarkeit zu steigern – mit einer perfekten 
              Mischung aus Strategie, Kreativität und einer ordentlichen Portion Herzblut.
            </p>

            <div className="about__image-wrapper">
              <img
                src="/assets/images/Britta 1 - Tisch.png"
                alt="Britta Berger"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
