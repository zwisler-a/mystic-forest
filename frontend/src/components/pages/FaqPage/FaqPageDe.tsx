import { Link } from "react-router";
import BackButton from "../../BackButton/BackButton";
import Header from "../../Header/Header";
import "./FaqPage.css";

function FaqPageDe() {
  return (
    <>
      <div className="spacer"></div>
      <Header />
      <main>
        <div className="glass-effect card faq">
          <Link className="toggle-button" to={"/faq-en"}>
            <span>en</span>
          </Link>
          <h2>FAQ</h2>

          {/* ——— Allgemeines ——— */}
          <h3 className="faq-heading">Allgemeines</h3>
          <details>
            <summary className="pointer">Wann findet das Event statt?</summary>
            <p>
              01.-03. August 2025 <br />
              Anreise Fr ab 15 Uhr, Start 18 Uhr <br />
              Abreise So bis 14 Uhr
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
            <p>
              Kommt so, wie ihr wollt und euch wohlfühlt! Wer sich als
              mystisches Fabelwesen verkleiden möchte, ist herzlich willkommen.
              Und Glitzer sowieso!{" "}
            </p>
          </details>
          <details>
            <summary className="pointer">
              Ist das Event öffentlich oder nur auf Einladung?
            </summary>
            <p>
              Das Event ist eine private Geburtstagsfeier. Kommt bitte nur, wenn
              ihr eine Einladung habt.
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
            <p>
              Stromanschluss für Camper ist grundsätzlich nicht eingeplant – wir
              gehen davon aus, dass die Wohnwagen auch autark laufen. Falls es
              drigend erforderlich ist, sprecht uns sehr gerne persönlich an und
              wir finden eine Lösung.
            </p>
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
              <strong>🚗 Anreise mit dem Auto</strong>
              <br />
              Wir werden einen Parkplatz einrichten, sodass ihr easy mit dem
              Auto anreisen könnt. Falls ihr in eurem Fahrzeug schlafen
              wollt/könnt, finden wir dafür einen geeigneten Stellplatz.
            </p>
            <p>---</p>
            <p>
              <strong>🚗👍🏼 Mitfahrgelegenheiten</strong>
              <br />
              Nutzt gerne die Gruppen in unserer WhatsApp Community, um Menschen
              aus eurem Ort mitzunehmen und mitgenommen zu werden.
              <ul>
                <li>
                  <a href="https://chat.whatsapp.com/D40KDZCbCeWBqtGNOfPzHR">
                    Carpool Berlin
                  </a>
                </li>
                <li>
                  <a href="https://chat.whatsapp.com/GTc2tjqTmR9Kw4SVuBmKN7">
                    Carpool Leipzig
                  </a>
                </li>
                <li>
                  <a href="https://chat.whatsapp.com/CrpqMg5h5Lc6ENGdaaB9PX">
                    Carpool divers
                  </a>
                </li>
              </ul>
              <p>
                Falls ihr kein WhatsApp nutzt, meldet euch bitte bei uns, damit
                wir euch helfen können.
              </p>
            </p>
            <p>
              <p>---</p>
              <strong>🚅 Anreise mit den Öffis</strong>
              <br />
              Mit den Öffis kommt ihr problemlos bis nach Dollbergen bzw. Celle:
              <ul>
                <li>Leipzig - Dollbergen ca. 3,5 Std</li>
                <li>Berlin - Dollbergen ca. 2 Std</li>
                <li>Hamburg - Celle ca. 1 Std.</li>
              </ul>
              <p>
                Von dort aus wird es am Freitag zwischen 15 und 18 Uhr einen
                Shuttle Service geben, der euch zum Gelände bringt. Versucht
                bitte, innerhalb des Zeitfensters anzukommen. Danach bzw. am
                Samstag können wir eingeschränkt Shuttles auf Anfrage
                organisieren. <br /> Am Sonntag Vormittag bis 14 Uhr wird es
                auch Shuttles wieder zurück geben.
              </p>
              <p>
                Meldet euch bitte in unserer WhatsApp Gruppe via Abstimmung für
                die Shuttles an, damit wir besser planen können: <br />
                <p>
                  <a href="https://chat.whatsapp.com/HtesEdNk0Pw7xsFSJ33AJF">
                    Anmeldung Shuttles
                  </a>
                </p>
              </p>
            </p>
            <p>
              Falls ihr kein WhatsApp nutzt, meldet euch bitte bei uns, damit
              wir euch helfen können.
            </p>
          </details>
          <details>
            <summary className="pointer">Gibt es Parkplätze vor Ort?</summary>
            <p>Ja, sowohl für Autos als auch Camper.</p>
          </details>
          <details>
            <summary className="pointer">Gibt es Mitfahrgelegenheiten?</summary>
            <p>
              Nutzt gerne die Gruppen in unserer WhatsApp Community, um Menschen
              aus eurem Ort mitzunehmen und mitgenommen zu werden: <br />
              <ul>
                <li>
                  <a href="https://chat.whatsapp.com/D40KDZCbCeWBqtGNOfPzHR">
                    Carpool Berlin
                  </a>
                </li>
                <li>
                  <a href="https://chat.whatsapp.com/GTc2tjqTmR9Kw4SVuBmKN7">
                    Carpool Leipzig
                  </a>
                </li>
                <li>
                  <a href="https://chat.whatsapp.com/CrpqMg5h5Lc6ENGdaaB9PX">
                    Carpool divers
                  </a>
                </li>
              </ul>
            </p>
            <p>
              Falls ihr kein WhatsApp nutzt, meldet euch bitte bei uns, damit
              wir euch helfen können.
            </p>
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
            <p>
              Müllsäcke wird's genug geben. Sortiert wird nach Glas, Pfand und
              Restmüll. Wenn ihr Müll auf dem Boden findet, sammlt es gerne mit
              auf 💚
            </p>
          </details>
          <details>
            <summary className="pointer">
              Kann ich mein Handy irgendwo aufladen?
            </summary>
            <p>
              Eine Powerbank werdet ihr an dem Wochenende brauchen, deshalb
              einpacken! Falls euer Akku doch schlapp macht, um euere Abreise zu
              planen oder den Kontakt einer neugewonnen Bekanntschaft
              auszutauschen, finden wir eine Lösung. Sprecht uns gerne an.
            </p>
          </details>
          <details>
            <summary className="pointer">Gibt es Handyempfang?</summary>
            <p>
              Empfang variiert je nach Anbieter – in Teilen des Geländes kann’s
              auch mal weniger Empfang geben.
            </p>
          </details>

          {/* ——— Verpflegung & Getränke ——— */}
          <h3 className="faq-heading">Verpflegung & Getränke</h3>
          <details>
            <summary className="pointer">
              Wird Essen vor Ort angeboten oder soll man selbst etwas
              mitbringen?
            </summary>
            <p>
              Es wird Freitag ein gemeinsames Buffet geben, zu dem jede:r gern
              etwas beisteuern kann. Samstagabend wird das Pizza House® frische
              Pizza zubereiten. Für das Frühstück deckt euch bitte selbst ein.
              Filter-Kaffe werden wir auch organisieren. Ansonsten gilt
              Selbstverpflegung á la Festival. Bringt gerne euer eigenes
              Geschirr, Besteck und Becher mit. 🍴
            </p>
          </details>
          <details>
            <summary className="pointer">Wird es eine Bar geben?</summary>
            <p>
              Na klar! Es wird reichlich Bier, Sekt, Softdrinks und Aperol
              geben. In den Happy Hours gehen die Drinks auf uns. Darüber hinaus
              ist die Bar auf Spendenbasis via PayPal oder in bar. 💕
            </p>
          </details>
          <details>
            <summary className="pointer">
              Gibt es vegane oder vegetarische Optionen?
            </summary>
            <p>
              Ja. Kennzeichnet bitte eure Speisen &amp; Getränke fürs Buffet
              entsprechend. 🌱
            </p>
          </details>
          <details>
            <summary className="pointer">
              Gibt es Trinkwasser auf dem Gelände?
            </summary>
            <p>
              Wir stellen einen Grundstock an Wasserkanistern bereit, würden
              euch aber trotzdem bitten, 1-2 L Wasser selbst mitzunehmen. 🫧
            </p>
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
            <p>
              Den Timetable teilen wir kurz vor dem Festival{" "}
              <a href="/timetable">hier</a>&nbsp;mit euch. Wir spielen einen
              guten Mix aus Disco, House & Techno. Wer eine tolle Playlist am
              Start hat, kann die immer gerne anschmeißen. Also gerne
              mitbringen!
            </p>
          </details>
          <details>
            <summary className="pointer">
              Welche Workshops werden angeboten?
            </summary>
            <p>
              Den Workshop-Timetable teilen wir kurz vor dem Festival{" "}
              <a href="/timetable">hier</a>&nbsp;mit euch. Es gibt ein buntes
              Programm und ihr müsst euch nicht anmelden, also viel Spaß beim
              Ausprobieren!
            </p>
          </details>
          <details>
            <summary className="pointer">
              Kann ich noch einen Workshop anbieten oder Ideen einbringen?
            </summary>
            <p>
              Klar, wenn ihr eine Idee hast, schreibt Hannah privat oder meldet
              euch hier{" "}
              <a href="https://chat.whatsapp.com/DVKIYAwuHlHIPWPpKF7E64">
                Workshop facilitators
              </a>
              . Wir freuen uns außerdem über jede und jeden, die zu unserem Open
              Mic am Samstag beitragen wollen (ca. 3 Minuten pro Person erzählen
              über irgendetwas, das ihr gelernt habt, spannend findet,
              Hintergrundwissen zu eurem Beruf, einen Witz, einen Fun Fact,
              einen Tipp oder Life Hack - es geht einfach darum, ein wenig
              Wissen zu teilen. Und jede:r weiß etwas, das sonst die meisten
              nicht wissen!)
            </p>
            <p>
              Falls ihr kein WhatsApp nutzt, meldet euch bitte bei uns, damit
              wir euch helfen können.
            </p>
          </details>
          <details>
            <summary className="pointer">
              Wann endet die Musik am Abend?
            </summary>
            <p>
              Freitag werden wir draußen bis max. 1 Uhr spielen, Samstag wird um
              3 Uhr die Party nach drinnen verlegt, damit alle ihren Schlaf
              bekommen.
            </p>
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
            <p>
              Es wird einen Paypal-Link geben, tbd. Ansonsten auch gerne in bar
              - wie ihr möchtet. 🐷
            </p>
          </details>

          {/* ——— Sonstiges ——— */}
          <h3 className="faq-heading">Sonstiges</h3>
          <details>
            <summary className="pointer">
              Wie kann ich helfen oder mitorganisieren?
            </summary>
            <p>
              Ihr wollt uns supporten, sei es mit einer Bar-Schit, einem Shuttle
              Ride, Support beim Abbau? Wie schön 💛 meldet euch{" "}
              <a href="https://chat.whatsapp.com/FKm9hbcBWUk1y8hgkWh8ij">
                hier
              </a>
              &nbsp;bei uns und wir koordinieren alles.
            </p>
            <p>
              Falls ihr kein WhatsApp nutzt, meldet euch bitte bei uns, damit
              wir euch helfen können.
            </p>
          </details>
          <details>
            <summary className="pointer">
              Darf ich Fotos oder Videos machen?
            </summary>
            <p>
              Ihr dürft Fotos und Videos machen, aber beachtet natürlich immer,
              ob das Gegenüber damit einverstanden ist.{" "}
            </p>
          </details>
          <details>
            <summary className="pointer">
              Was passiert bei schlechtem Wetter?
            </summary>
            <p>
              Im Fall, dass es in Strömen regnet, haben wir ein Zelt parat und
              verlegen die Party größtenteils nach drinnen. Ein wasserfestes
              Zelt wäre aber zu empfehlen!{" "}
            </p>
          </details>
          <details>
            <summary className="pointer">Sind Haustiere erlaubt?</summary>
            <p>
              Wenn du ein Haustier mitbringen möchtest, melde dich bitte vorher
              bei uns.
            </p>
          </details>
          <details>
            <summary className="pointer">Was soll ich mitbringen? </summary>
            <p>
              Wir teilen vor dem Wochenende <a href="/packing-list">hier</a>
              &nbsp;eine Packliste mit allem nötigen. 🙃 📋
            </p>
          </details>
        </div>
        <BackButton />
      </main>
    </>
  );
}

export default FaqPageDe;
