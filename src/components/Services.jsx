import './Services.css';
import useScrollReveal from '../hooks/useScrollReveal';

const SERVICES = [
  {
    title: 'MARKE & STRATEGIE',
    desc: 'Eine starke Marke entsteht nicht zufällig. Gemeinsam erarbeiten wir ein klares Fundament für deinen Markenauftritt – strategisch durchdacht, individuell auf dein Unternehmen zugeschnitten und mit einem Blick auf das große Ganze.',
    tagline: 'Für Marken, die wirken.',
  },
  {
    title: 'CONTENT & REDAKTION',
    desc: 'Gute Inhalte erzählen deine Geschichte – klar, relevant und auf den Punkt gebracht. Ich unterstütze dich dabei, die richtigen Worte zu finden, Themen zu strukturieren und Inhalte zu entwickeln, die deine Zielgruppe in den relevanten Kanälen wirklich erreichen.',
    tagline: 'Für Worte, die bewegen.',
  },
  {
    title: 'WEBSITE & USABILITY',
    desc: 'Deine Website ist oft der erste Eindruck – und der zählt. Gemeinsam entwickeln wir einen Auftritt, der nicht nur gut aussieht, sondern klar strukturiert ist, zuverlässig funktioniert und so optimiert ist, dass du bei Google, ChatGPT & Co. sichtbar bist.',
    tagline: 'Für Auftritte, die überzeugen.',
  },
];

export default function Services() {
  const sectionRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">SERVICES</h2>
        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <div className={`service-card fade-in delay-${index + 1}`} key={index}>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <p className="service-card__tagline">{service.tagline}</p>
              <div className="service-card__cta-container">
                <a href="#kontakt" className="btn btn--primary">
                  ANFRAGEN
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
