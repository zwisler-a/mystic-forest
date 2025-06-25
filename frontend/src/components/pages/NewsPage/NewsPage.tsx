import BackButton from "../../BackButton/BackButton";
import Header from "../../Header/Header";
import "./NewsPage.css";

function NewsPage() {
  return (
    <>
      <div className="spacer"></div>
      <Header />
      <main>
        <div className="glass-effect card news">
          <h2>News</h2>
          <section>
            <div className="entry-heading">25. Jun</div>
            <span className="lang">--- de ---</span>
            <p>
              Ihr Lieben 💚
              <br />
              Um alles etwas besser organisieren zu können, haben wir eine
              WhatsApp Community erstellt. Für diejenigen von euch, die das
              Konzept nicht kennen: Eine WhatsApp-Community ist eine Funktion,
              mit der mehrere Gruppen zu einem übergeordneten Thema verbunden
              werden können. In unserer Mystic Forest Community findet ihr
              Gruppen zu Carpools, Shuttles, Workshops und mehr sowie unsere
              bereits bestehende Gruppe. Nachdem ihr der Community beigetreten
              seid, seht ihr die Ankündigungs-Gruppe und könnt selbst
              entscheiden, welchen Gruppen ihr zusätzlich beitreten möchtet.
              Schaut euch um und sucht raus, was für euch relevant bzw.
              interessant ist. Ihr könnt jederzeit Gruppen verlassen und
              weiteren beitreten. Direkten Zugang zur Community findet ihr in
              der unteren Navigationsleiste in WhatsApp. ❣️
              <br />
              <br />
              Außerdem sind wir dabei, nützliche Infos für vor und während des
              Festivals hier <a href="mystic-forest.de">
                mystic-forest.de
              </a>{" "}
              zusammenzutragen. In den FAQs findet ihr alles wichtige auf einen
              Blick. Zu einem späteren Zeitpunkt gibt's auch Geländeübersicht
              und Timetable für DJs und Workshops. 🎶
              <br />
              <br />
              Viel Spaß beim stöbern und stay tuned! 🧚🧚‍♀️🧚‍♂️
            </p>
            <span className="lang">--- en ---</span>
            <p>
              Dear ones 💚
              <br />
              To help organize everything a little better, we’ve created a
              WhatsApp Community. For those of you who are unfamiliar with the
              concept: A WhatsApp Community is a feature that allows multiple
              groups to be connected under one overarching theme. In our Mystic
              Forest Community, you’ll find groups for carpools, shuttles,
              workshops, and more, as well as our already existing group. Once
              you’ve joined the community, you’ll see the announcements group
              and can decide for yourself which other groups you’d like to join.
              Have a look around and choose what’s relevant or interesting to
              you. You can leave or join groups at any time. You’ll find direct
              access to the community in the bottom navigation bar in WhatsApp.
              ❣️
              <br />
              <br />
              We’re also gathering useful information for before and during the
              festival here:
              <a href="mystic-forest.de">mystic-forest.de</a>. In the FAQs,
              you’ll find all the important stuff at a glance. Later on, there
              will also be a site map and a timetable for DJs and workshops. 🎶
              <br />
              <br />
              Have fun exploring and stay tuned! 🧚🧚‍♀️🧚‍♂️
            </p>
          </section>
          <hr style={{ width: "100%" }} />
          <section>
            <div className="entry-heading">01. Jun</div>
            <p>
              🪩ONLY 2 MONTH LEFT🪩 <br /> In zwei Monaten ist es soweit. Hannah,
              Anki und Kiara entführen euch in den <b>Mystic Forest</b> voller
              Überraschungen und Begegnungen. Die Drei Witches schmieden fleißig
              Pläne und können es kaum erwarten mit euch ums Feuer zu tanzen.
              Neue Infos folgen. We keep you posted. ✨✨✨
            </p>
          </section>
          <hr style={{ width: "100%" }} />
          <section>
            <div className="entry-heading">28. Apr</div>
            <span className="lang">--- de ---</span>
            <p>
              Die Waldlichtung steht bereits in voller Blüte und kann es kaum
              erwarten, euch diesen Sommer zu empfangen und euch in ihren Bann
              zu ziehen 🌪️🌱
              <br />
              <br />
              1. Erst einmal vielen Dank an alle, die die Umfrage ausgefüllt
              haben! Falls ihr das noch nicht gemacht habt, hier nochmal der{" "}
              <a href="https://forms.gle/xnjcj3WVekGefouc7">Link</a>
              <br />
              <br />
              2. Wir sichten jetzt eure Einsendungen und draften ein kleines
              Programm - wir melden uns separat bei denjenigen, die sich für
              Workshops oder Schichten eingetragen haben. Danke im Voraus ❤️
              <br />
              <br />
              3. Falls einige von euch mit dem Auto anreisen und daheim noch
              Solar-Lichterketten / Lampions / Diskokugeln oder sonstige coole
              Beleuchtungselemente/alte Teppiche rumfliegen haben, die ihr für
              das Wochenende mitbringen könntet, meldet euch gerne bei uns!
              <br />
              <br />
              Wir sind fleißig am Planen und freuen uns enorm - eure 3 Waldfeen
              hehe 🧚🏻‍♀️
            </p>
            <span className="lang">--- en ---</span>
            <p>
              The forest is already in full bloom and can't wait to welcome you
              this summer! 🌪️🌱
              <br />
              <br />
              1. Thanks to everyone who filled out the survey! If you haven't
              yet, here's the{" "}
              <a href="https://forms.gle/xnjcj3WVekGefouc7">link</a>
              <br />
              <br />
              2. We're now reviewing your responses and drafting a program.
              We'll reach out to those who signed up for workshops or shifts
              separately – thanks in advance! ❤️
              <br />
              <br />
              3. If you're coming by car and have solar lights, lanterns, disco
              balls, or old rugs lying around, we'd love for you to bring them!
              <br />
              <br />
              We're deep in planning mode and so excited – your 3 forest fairies
              🧚🏻‍♀️
            </p>
          </section>
          <hr style={{ width: "100%" }} />
          <section>
            <div className="entry-heading">22. Mar</div>
            <span className="lang">--- de ---</span>
            <p>
              Hey ihr Lieben, es gibt News aus dem Magic Forest 🤗🪄 Damit wir
              besser planen können, bitten wir euch folgenden Fragebogen{" "}
              <a href="https://forms.gle/xnjcj3WVekGefouc7">Link</a> bis zum 06.
              April auszufüllen. Bitte auch, wenn ihr nicht kommen könnt. Uns
              geht es in erster Linie um die grobe Planung. Änderungen oder
              Ergänzungen zu Anreise, +1, Workshop-Ideen etc. könnt ihr
              natürlich jederzeit noch machen. Meldet euch in diesen Fällen oder
              wenn ihr sonstige Schwierigkeiten mit dem Ausfüllen habt einfach
              direkt bei uns. ♥️😊
            </p>
            <span className="lang">--- en ---</span>
            <p>
              Hey dear ones, there’s news from the Magic Forest 🤗🪄 To help us
              plan better, we kindly ask you to fill out the following
              questionnaire{" "}
              <a href="https://forms.gle/xnjcj3WVekGefouc7">link</a> by April
              6th. Please do so even if you can't attend. Our main focus is on a
              rough planning overview. You can always make changes or additions
              regarding travel arrangements, +1s, workshop ideas, etc. If that's
              the case or if you have any trouble filling it out, just reach out
              to us directly. ♥️😊
            </p>
          </section>
          <hr style={{ width: "100%" }} />
          <section>
            <div className="entry-heading">11. Jan</div>
            <span className="lang">--- de ---</span>
            <p>
              Hellohello, Wir - Hannah, Anki & Kiara - haben etwas ganz
              Besonderes mit euch diesen Sommer vor und dafür entführen wir euch
              in ein kleines Waldstück zwischen dem Rheinland und Berlin. Es
              soll getobt, geschmaust, Geschichten erzählt, Sternschnuppen
              gezählt, mit (noch) Unbekannten angestoßen, getanzt, Stockbrot
              flammbiert und gezeltet werden. 🏕️ 🎶 📅 01.-03. August 2025 📍{" "}
              <a href="https://maps.app.goo.gl/yaYpY29ZEfe7dt9A7">Maps</a>{" "}
              Markiert euch gerne das Wochenende im Kalender für ein paar
              Sommernächte unter freiem Himmel mit guten Freunden & Musik.
              Vorfreude ist riesengroß! & Mehr Infos folgen.
            </p>
            <span className="lang">--- en ---</span>
            <p>
              This summer, we – Hannah, Anki, and Kiara – have something truly
              special planned for you. We're inviting you to spend a weekend in
              a peaceful little forest between the Rhineland and Berlin. Get
              ready for fun, delicious food, captivating stories, stargazing,
              dancing, roasting marshmallows, and camping. 📆 August 1st-3rd,
              2025 📍{" "}
              <a href="https://maps.app.goo.gl/yaYpY29ZEfe7dt9A7">Maps</a> Mark
              the weekend in your calendar – it’s going to be a memorable few
              summer nights under the open sky with great friends and music.
              More details to come soon!
            </p>
          </section>
        </div>
        <BackButton />
      </main>
    </>
  );
}

export default NewsPage;
