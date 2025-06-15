import BackButton from "../../BackButton/BackButton";
import Header from "../../Header/Header";
import "./FaqPage.css";

function FaqPage() {
  return (
    <>
      <div className="spacer"></div>
      <Header />
      <main>
        <div className="glass-effect card faq">
          <h2>FAQ</h2>

          {/* ——— Allgemeines ——— */}
          <h3 className="faq-heading">Allgemeines</h3>
          <details>
            <summary className="pointer">Wann findet das Event statt?</summary>
            <p>
              01.–03. August 2025 <br />
              Anreise Fr ab 16 Uhr <br />
              Abreise So bis 15 Uhr
            </p>
          </details>
          <details>
            <summary className="pointer">
              Wo genau ist der Veranstaltungsort?
            </summary>
            <p>
              Ein süßes kleines Wäldchen im Umland von Bröckel, ca. 1 Stunde von
              Hannover:{" "}
              <a href="https://maps.app.goo.gl/yaYpY29ZEfe7dt9A7">
                Google Maps
              </a>
            </p>
          </details>
          <details>
            <summary className="pointer">
              Gibt es ein Motto oder einen Dresscode?
            </summary>
            <p>TBD</p>
          </details>
          <details>
            <summary className="pointer">
              Ist das Event öffentlich oder nur auf Einladung?
            </summary>
            <p>
              Das Event ist eine private Geburtstagsfeier. Komm bitte nur, wenn
              du eine Einladung hast.
            </p>
          </details>

          {/* ——— Schlafen & Unterkunft ——— */}
          <h3 className="faq-heading">Schlafen & Unterkunft</h3>
          <details>
            <summary className="pointer">
              Kann man auf dem Gelände übernachten?
            </summary>
            <p>Ihr könnt zelten oder im Auto schlafen à la Festival ⛺</p>
          </details>
          <details>
            <summary className="pointer">
              Gibt es Stromanschlüsse für Camper oder Vans?
            </summary>
            <p>TBD</p>
          </details>
          <details>
            <summary className="pointer">Gibt es Hotels in der Nähe?</summary>
            <p>
              Hotel Viva Bröckel (3 km entfernt, 85 € Einzel / 140 €
              Doppelzimmer)
            </p>
          </details>

          {/* ——— Anreise & Parken ——— */}
          <h3 className="faq-heading">Anreise & Parken</h3>
          <details>
            <summary className="pointer">
              Wie komme ich am besten zum Gelände?
            </summary>
            <p>
              <strong>Anreise mit dem Auto 🚗</strong>
              <br />
              Wir richten einen Parkplatz ein; falls du im Fahrzeug schlafen
              möchtest, findet sich ein geeigneter Stellplatz.
              <br />
              <br />
              <strong>Anreise mit den Öffis 🚅</strong>
              <br />
              Freitag 15–18 Uhr Shuttle ab Bahnhof Dollbergen (bitte Ankunft in
              diesem Zeitfenster planen).
              <br />
              Alternativ: Hannover → Celle (S7) → Bröckel (Bus 600) – von dort 5
              Min zum Gelände (Abholung möglich).
              <br />
              Weitere Infos zum Shuttle Service folgen.
            </p>
          </details>
          <details>
            <summary className="pointer">Gibt es Parkplätze vor Ort?</summary>
            <p>Ja, sowohl für Autos als auch Camper.</p>
          </details>
          <details>
            <summary className="pointer">Gibt es Mitfahrgelegenheiten?</summary>
            <p>TBD (WhatsApp-Links folgen)</p>
          </details>

          {/* ——— Infrastruktur ——— */}
          <h3 className="faq-heading">Infrastruktur</h3>
          <details>
            <summary className="pointer">
              Gibt es Toiletten und Duschen?
            </summary>
            <p>
              Toiletten und fließend Wasser sind vorhanden.
              <br />
              Es gibt <strong>keine</strong> Duschen → Katzenwäsche 🐈
            </p>
          </details>
          <details>
            <summary className="pointer">Gibt es fließendes Wasser?</summary>
            <p>Ja (kein Trinkwasser!)</p>
          </details>
          <details>
            <summary className="pointer">
              Wie sieht es mit Müllentsorgung aus?
            </summary>
            <p>TBD</p>
          </details>
          <details>
            <summary className="pointer">
              Kann ich mein Handy irgendwo aufladen?
            </summary>
            <p>TBD</p>
          </details>

          {/* ——— Verpflegung & Getränke ——— */}
          <h3 className="faq-heading">Verpflegung & Getränke</h3>
          <details>
            <summary className="pointer">
              Wird Essen vor Ort angeboten oder soll man selbst etwas
              mitbringen?
            </summary>
            <p>
              Freitag gemeinsames Buffet (jeder steuert etwas bei).
              <br />
              Samstagabend Pizza-Lieferung.
              <br />
              Ansonsten Selbstverpflegung á la Festival.
              <br />
              Bitte eigenes Geschirr, Besteck &amp; Becher mitbringen.
            </p>
          </details>
          <details>
            <summary className="pointer">Wird es eine Bar geben?</summary>
            <p>Ja, auf Spendenbasis.</p>
          </details>
          <details>
            <summary className="pointer">
              Gibt es vegane oder vegetarische Optionen?
            </summary>
            <p>
              Ja. Kennzeichnet bitte eure Speisen &amp; Getränke fürs Buffet
              entsprechend 😊
            </p>
          </details>
          <details>
            <summary className="pointer">
              Gibt es Trinkwasser auf dem Gelände?
            </summary>
            <p>TBD</p>
          </details>
          <details>
            <summary className="pointer">
              Gibt es einen Supermarkt in der Nähe?
            </summary>
            <p>
              Nahkauf, Hauptstraße 39, 29356 Bröckel
              <br />
              3 km vom Gelände entfernt
              <br />
              geöffnet 07:00–19:00
            </p>
          </details>

          {/* ——— Musik & Programm ——— */}
          <h3 className="faq-heading">Musik & Programm</h3>
          <details>
            <summary className="pointer">
              Wie sieht das Musikprogramm aus?
            </summary>
            <p>TBD</p>
          </details>
          <details>
            <summary className="pointer">
              Welche Workshops werden angeboten?
            </summary>
            <p>
              Workshop-Links folgen TBD.
              <br />
              Wenn du selbst einen Workshop anbieten möchtest, melde dich gern
              bei uns.
            </p>
          </details>
          <details>
            <summary className="pointer">
              Wann endet die Musik am Abend?
            </summary>
            <p>TBD</p>
          </details>

          {/* ——— Unterstützung & Geschenke ——— */}
          <h3 className="faq-heading">Unterstützung & Geschenke</h3>
          <details>
            <summary className="pointer">Geschenke?</summary>
            <p>
              Euer Kommen ist für uns das größte Geschenk. Möchtet ihr uns
              dennoch unterstützen, freuen wir uns über eine Spende – ganz nach
              eurem Gefühl. ♥️
            </p>
          </details>
          <details>
            <summary className="pointer">Kostet die Teilnahme etwas?</summary>
            <p>Nein, wir würden uns jedoch über eine Spende freuen.</p>
          </details>
          <details>
            <summary className="pointer">Wie kann ich spenden?</summary>
            <p>Bar oder via PayPal-Link TBD</p>
          </details>

          {/* ——— Sonstiges ——— */}
          <h3 className="faq-heading">Sonstiges</h3>
          <details>
            <summary className="pointer">
              Wie kann ich helfen oder mitorganisieren?
            </summary>
            <p>Link folgt TBD</p>
          </details>
          <details>
            <summary className="pointer">
              Darf ich Fotos oder Videos machen?
            </summary>
            <p>TBD</p>
          </details>
          <details>
            <summary className="pointer">
              Was passiert bei schlechtem Wetter?
            </summary>
            <p>TBD</p>
          </details>
          <details>
            <summary className="pointer">Sind Haustiere erlaubt?</summary>
            <p>
              Wenn du ein Haustier mitbringen möchtest, melde dich bitte vorher
              bei uns.
            </p>
          </details>
        </div>
        <BackButton />
      </main>
    </>
  );
}

export default FaqPage;
