import { useEffect } from 'react';
import './LegalPage.css';

const LEGAL_CONTENT = {
  impressum: {
    title: 'IMPRESSUM',
    content: (
      <div className="impressum__blocks">
        <div className="impressum__block">
          <p><strong>bb brandworks</strong></p>
          <p>Agentur für Marketing &amp; Branding</p>
        </div>

        <div className="impressum__block">
          <p>Britta Berger</p>
          <p>Hauptstraße 4 Top 1a</p>
          <p>6719 Bludesch</p>
        </div>

        <div className="impressum__block">
          <p>+43 664 5380151</p>
          <p>britta@bb-brandworks.com</p>
        </div>

        <div className="impressum__block">
          <p>Gewerbeberechtigung: Werbeagentur</p>
          <p>GISA: 80138377518 | BH Bludenz</p>
        </div>

        <div className="impressum__block">
          <p>Verantwortlich für den Inhalt gemäß § 5 Abs. 1 ECG: Britta Berger</p>
        </div>

        <div className="impressum__block">
          <p>
            <strong>Hinweis:</strong> Auf dieser Website sind immer alle Geschlechter gemeint,
            auch wenn gelegentlich nur eine Formulierung verwendet wird.
          </p>
        </div>
      </div>
    ),
  },
  datenschutz: {
    title: 'DATENSCHUTZ',
    content: (
      <div className="datenschutz__blocks">
        <div className="datenschutz__block">
          <p>
            Vielen Dank für dein Interesse an meiner Arbeit. Datenschutz hat einen besonders hohen
            Stellenwert für mich. Eine Nutzung dieser Website ist grundsätzlich ohne die Angabe
            personenbezogener Daten möglich. Ich verarbeite keine personenbezogenen Daten, es sei
            denn, es ist zur Bereitstellung bestimmter Funktionen erforderlich. Diese
            Datenschutzerklärung umfasst alle relevanten Informationen zur Datenerhebung, -nutzung
            und -weitergabe, sowie Maßnahmen zur Datensicherheit. Du hast die Kontrolle über deine
            Daten und es wird dir ermöglicht, deine persönlichen Informationen einzusehen, zu ändern
            und zu aktualisieren. Deine Sicherheit und der Schutz deiner Daten haben für mich
            oberste Priorität.
          </p>
        </div>

        <div className="datenschutz__block">
          <p><strong>Verantwortlich für die Datenverarbeitung:</strong></p>
          <p>Britta Berger</p>
          <p>Hauptstraße 4a, 6719 Bludesch, Österreich</p>
          <p>+43 664 53 80 151</p>
          <p>britta@bb-brandworks.com</p>
        </div>

        <div className="datenschutz__block">
          <p><strong>1. Allgemeine Hinweise zur Datenverarbeitung</strong></p>
          <p>
            Ich verarbeite deine personenbezogenen Daten nur dann, wenn dies zur Bereitstellung
            bestimmter Funktionen notwendig ist sowie zur Buchung von Terminen oder Anmeldung zu
            Kursen und Workshops. Ansonsten findet keine aktive Datenspeicherung statt.
          </p>
        </div>

        <div className="datenschutz__block">
          <p><strong>2. Cookies</strong></p>
          <p>
            Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf deinem
            Endgerät abgelegt werden und die dein Browser speichert. Sie dienen dazu, meine Website
            nutzerfreundlicher zu gestalten. Du kannst das Speichern von Cookies durch eine
            entsprechende Einstellung deines Browsers verhindern. Dies kann jedoch dazu führen, dass
            nicht alle Funktionen einer Website vollumfänglich genutzt werden können.
          </p>
        </div>

        <div className="datenschutz__block">
          <p><strong>3. Verwendung von Google Analytics</strong></p>
          <p className="datenschutz__p_margin">
            Diese Website verwendet Google Analytics, einen Webanalysedienst der Google LLC
            („Google"). Google Analytics verwendet sogenannte „Cookies", also Textdateien, die auf
            deinem Computer gespeichert werden und die eine Analyse der Benutzung der Website
            ermöglichen.
          </p>
          <p className="datenschutz__p_margin">
            Ich verwende Google Analytics mit aktivierter IP-Anonymisierung. Das bedeutet, dass
            deine IP-Adresse innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übertragung
            an Google gekürzt wird. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server
            von Google in den USA übertragen und dort gekürzt. Eine Zusammenführung deiner
            IP-Adresse mit anderen Daten von Google findet nicht statt.
          </p>
          <p className="datenschutz__p_margin">
            Die durch den Cookie erzeugten Informationen über deine Nutzung unserer Website werden
            in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            Google wird diese Informationen in unserem Auftrag verwenden, um deine Nutzung der
            Website auszuwerten, Reports über die Website-Aktivitäten zusammenzustellen und um
            weitere mit der Website-Nutzung und der Internetnutzung verbundene Dienstleistungen zu
            erbringen. Stets anonymisiert.
          </p>
        </div>

        <div className="datenschutz__block">
          <p><strong>4. Deaktivierung von Google Analytics</strong></p>
          <p>
            Du kannst die Erfassung der durch das Cookie erzeugten und auf deine Nutzung der Website
            bezogenen Daten (inkl. deiner IP-Adresse) sowie die Verarbeitung dieser Daten durch
            Google verhindern, indem du das unter folgendem Link verfügbare <br /> Browser-Plugin
            herunterlädst und installierst:{' '}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noreferrer">
              https://tools.google.com/dlpage/gaoptout?hl=de
            </a>.
          </p>
          <p style={{ marginTop: '30px' }}>
            Weitere Informationen zum Datenschutz bei Google findest du unter{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              https://policies.google.com/privacy
            </a>.
          </p>
        </div>

        <div className="datenschutz__block">
          <p><strong>5. Deine Rechte</strong></p>
          <p>Als Nutzer meiner Website hast du folgende Rechte:</p>
          <ol className="datenschutz__list">
            <li>Recht auf Auskunft über die von uns verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung deiner Daten (Art. 17 DSGVO), soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          </ol>
          <p>
            Du hast auch das Recht, eine Beschwerde bei der zuständigen
            Datenschutzaufsichtsbehörde einzureichen, wenn du der Ansicht bist, dass die
            Verarbeitung deiner Daten gegen die DSGVO verstößt.
          </p>
        </div>

        <div className="datenschutz__block">
          <p><strong>6. Änderung der Datenschutzerklärung</strong></p>
          <p>
            Ich behalte mir das Recht vor, diese Datenschutzerklärung bei Änderungen der Website
            oder rechtlichen Anpassungen zu aktualisieren.
          </p>
        </div>

        <div className="datenschutz__block">
          <p>
            <strong>Hinweis:</strong> Auf dieser Website sind immer alle Geschlechter gemeint,
            auch wenn gelegentlich nur eine Formulierung verwendet wird.
          </p>
        </div>
      </div>
    ),
  },
  agb: {
    title: (
      <>
        ALLGEMEINE <br /> GESCHÄFTSBEDINGUNGEN
      </>
    ),
    content: (
      <div className="agb__blocks">
        <div className="agb__block">
          <p><strong>1. Geltungsbereich</strong></p>
          <p>Diese AGB gelten für alle Verträge zwischen bb brandworks (nachfolgend "Agentur") und ihren Auftraggebern, sofern nicht ausdrücklich schriftlich Abweichendes vereinbart wurde.</p>
        </div>

        <div className="agb__block">
          <p><strong>2. Vertragsabschluss</strong></p>
          <p>Ein Vertrag kommt durch schriftliche Bestätigung des Angebots durch den Auftraggeber zustande. Änderungen oder Ergänzungen bedürfen der Schriftform.</p>
        </div>

        <div className="agb__block">
          <p><strong>3. Leistungsumfang</strong></p>
          <p>Der Umfang der zu erbringenden Leistungen ergibt sich aus dem jeweiligen Angebot. Nachträgliche Änderungen des Leistungsinhalts bedürfen der schriftlichen Bestätigung durch die Agentur.</p>
        </div>

        <div className="agb__block">
          <p><strong>4. Mitwirkungspflichten des Auftraggebers</strong></p>
          <p>Der Auftraggeber verpflichtet sich, alle für die Durchführung des Auftrags notwendigen Unterlagen und Informationen rechtzeitig zur Verfügung zu stellen und die Agentur bei der Leistungserbringung zu unterstützen.</p>
        </div>

        <div className="agb__block">
          <p><strong>5. Vergütung und Zahlungsbedingungen</strong></p>
          <p>Die Vergütung richtet sich nach dem im Angebot vereinbarten Honorar. Alle Preise verstehen sich netto wie brutto. Rechnungen sind innerhalb von 10 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen. Zusätzlich behält sich die Agentur das Recht vor, weitere Leistungen bis zur Begleichung offener Forderungen zurückzuhalten.</p>
        </div>

        <div className="agb__block">
          <p><strong>6. Eigentums- und Nutzungsrechte</strong></p>
          <p>Alle von der Agentur erstellten Arbeiten bleiben bis zur vollständigen Bezahlung Eigentum der Agentur. Der Auftraggeber erwirbt mit vollständiger Bezahlung das einfache, nicht übertragbare Nutzungsrecht für den vereinbarten Zweck. Eine Weitergabe oder Veränderung der Arbeiten ist nur mit schriftlicher Zustimmung der Agentur zulässig.</p>
        </div>

        <div className="agb__block">
          <p><strong>7. Haftung</strong></p>
          <p>Die Agentur haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen.</p>
        </div>

        <div className="agb__block">
          <p><strong>8. Geheimhaltung</strong></p>
          <p>Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen geheim zu halten und nicht an Dritte weiterzugeben.</p>
        </div>

        <div className="agb__block">
          <p><strong>9. Vertragslaufzeit und Kündigung</strong></p>
          <p>Sofern nicht anders vereinbart, wird der Vertrag auf unbestimmte Zeit geschlossen und kann von beiden Parteien mit einer Frist von drei Monaten zum Monatsende gekündigt werden. Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt.</p>
        </div>

        <div className="agb__block">
          <p><strong>10. Schlussbestimmungen</strong></p>
          <p>Es gilt österreichisches Recht. Gerichtsstand ist der Sitz der Agentur. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
        </div>
      </div>
    ),
  },
};

export default function LegalPage({ page }) {
  const content = LEGAL_CONTENT[page];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (!content) return null;
  if (!content) return null;
  return (
    <section className={`legal-page ${page}-page`}>
      <div className="container">
        <h1 className={`${page}__title`}>{content.title}</h1>
        <div className={`${page}__body`}>
          {content.content}
        </div>
      </div>
    </section>
  );
}
