import './WhyUs.css';

const REASONS = [
  {
    title: 'DIREKT & PERSÖNLICH',
    desc: 'Keine wechselnden Ansprechpartner, kein Agentur-Chaos. Von der ersten Idee bis zum fertigen Ergebnis bist du direkt mit mir, also nur einer Person im Austausch, die dein Projekt kennt, versteht und konsequent begleitet. So entsteht echte Verbindung und klare Kommunikation – ohne Umwege und Missverständnisse.',
  },
  {
    title: 'ALLES AUS EINER HAND',
    desc: 'Konzept, Planung und Umsetzung greifen nahtlos ineinander. Dabei bleibt immer das Markenbild und die Zielgruppe im Fokus und es entsteht ein stimmiger, konsistenter Auftritt, der genau das bietet, was deine Marke wirklich braucht. Kein Suchen nach Anbietern von Teilaufgaben, sondern durchdachte Komplettlösungen.',
  },
  {
    title: 'FOKUS AUF KLEINE & MITTLERE UNTERNEHMEN',
    desc: 'Bei kleinen und mittleren Unternehmen gibt es keine Lösungen von der Stange. bb brandworks kennt die besonderen Herausforderungen, Budgets und Bedürfnisse von KMUs und entwickelt passgenaue Konzepte, die praktisch umsetzbar sind und langfristig wirken.',
  },
  {
    title: 'ERFOLG STATT SHOW',
    desc: 'bb brandworks setzt auf nachhaltige Markenarbeit statt auf kurzlebige Trends. Strategien und Designs entstehen so, dass sie langfristig überzeugen und authentisch zum Unternehmen passen.',
  }
];

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="why-us__layout">
          <div className="why-us__left">
            <h2 className="why-us__title">
              WARUM BB<br />
              BRANDWORKS?
            </h2>
          </div>
          <div className="why-us__right">
            {REASONS.map((reason, i) => (
              <div className="why-us__item" key={i}>
                <h3 className="why-us__item-title">{reason.title}</h3>
                <p className="why-us__item-desc">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
