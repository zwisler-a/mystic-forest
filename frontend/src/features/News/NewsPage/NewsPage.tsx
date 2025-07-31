import { Link } from "react-router";
import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";
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
            <div className="entry-heading">29. Jul</div>
            <img src="/posts/ashtray.jpg" alt="ashtray" />
            <span className="lang">--- de ---</span>
            <p>
              🌿 Drei Tage noch, wir sind soo aufgeregt!! Und wir haben sogar
              etwas Merch für euch parat mit unseren Taschenaschenbechern – die
              außerdem ein kleines Statement gegen Kippen auf dem Boden sein
              sollen. 🫶✨
            </p>
            <p>
              👉 Für alle, die rauchen: Bitte keine Kippe ins Gras!
              <br />
              👉 Für alle, die nicht rauchen: Passt auch perfekt als
              Notfall-Shotglas – haben wir für euch getestet. ✅😄
            </p>
            <p>
              🔥 Waldbrandgefahr ist dieses Jahr zum Glück keine – aber: Unsere
              Böden sagen trotzdem Danke, wenn sie sauber bleiben.
            </p>
            <p>⚠️ Limitierte Auflage</p>

            <span className="lang">--- en ---</span>
            <p>
              🌿 Just 3 days to go – we’re sooo excited!! And guess what? We’ve
              even got a little piece of merch for you: our very own pocket
              ashtrays – making a tiny statement against cigarette butts on the
              ground. 🫶✨
            </p>
            <p>
              👉 For all the smokers: Please keep your butts off the grass!
              <br />
              👉 For the non-smokers: Doubles perfectly as an emergency shot
              glass – tested & confirmed ✅😄
            </p>
            <p>
              🔥 Luckily, there’s no wildfire risk this year – but still: our
              grounds say thank you for keeping things clean.
            </p>
            <p>⚠️ Limited edition</p>
          </section>
          <hr style={{ width: "100%" }} />
          <section>
            <div className="entry-heading">24. Jul</div>
            <span className="lang">--- de ---</span>
            <p>
              🌲 Hilfe gesucht! ✨<br /> <br />
              Damit unser Mystic Forest Festival richtig zauberhaft wird,
              brauchen wir noch ein paar helfende Hände 🧚‍♀️🌿 Tragt euch gerne in
              unser Schicht-Excel ein – am liebsten für zwei Schichten, damit
              alles gut abgedeckt ist. Aber auch mit einer Schicht helft ihr uns
              schon sehr! 💚🙏
            </p>
            <p>
              💫{" "}
              <a href="https://docs.google.com/spreadsheets/d/1v90NncY47LH_hGD5mNz2ZxWzreJiGfKpZ9MdhBGzIIM/edit?gid=0#gid=0">
                Hier geht’s zum Sheet
              </a>
              <br />
              Einfach das x durch euren Namen ersetzen (first come, first
              served).
            </p>
            <p>
              Und: Falls ihr mit den Öffis kommt 🚍, tragt euch bitte bis Ende
              der Woche in die{" "}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScnQCd78Yr_Yas_gBh58FH1coLm5qlk7o7ME_dYnSwONUPQCw/viewform">
                Shuttle-Liste
              </a>{" "}
              ein, damit wir alles gut organisieren können.
            </p>
            <p>
              Wir freuen uns riesig auf euch und auf ein magisches Miteinander
              im Wald! 🌙🌲💫
            </p>
            <span className="lang">--- en ---</span>
            <p>
              🌲✨ Help needed! ✨🌲
              <br />
              <br />
              To make our Mystic Forest Festival truly magical, we’re still
              looking for a few helping hands 🧚‍♀️🌿 Please sign up in our shift
              Excel sheet – ideally for two shifts, so everything is well
              covered. But even one shift helps us a lot! 💚🙏
            </p>
            <p>
              💫{" "}
              <a href="https://docs.google.com/spreadsheets/d/1v90NncY47LH_hGD5mNz2ZxWzreJiGfKpZ9MdhBGzIIM/edit?gid=0#gid=0">
                Shift sheet
              </a>
              <br />
              Just replace the x with your name (first come, first served).
            </p>
            <p>
              And: If you're coming by public transport 🚍, please make sure to
              sign up for the{" "}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScnQCd78Yr_Yas_gBh58FH1coLm5qlk7o7ME_dYnSwONUPQCw/viewform">
                shuttle list
              </a>{" "}
              by the end of the week so we can plan accordingly.
            </p>
            <p>
              We’re so excited to see you and co-create a magical time in the
              forest together! 🌙🌲💫
            </p>
          </section>
          <hr style={{ width: "100%" }} />
          <section>
            <div className="entry-heading">14. Jul</div>
            <img src="/posts/packing_list.jpeg" alt="new-site-map" />
            <span className="lang">--- de ---</span>
            <p>
              Hallo ihr Lieben, es gibt News 😊 <br /> <br />
              Damit ihr nichts vergesst, haben wir die exklusive Mystic Forest
              Packing List zum Abhaken für euch. Check out{" "}
              <Link to={"/packing-list"}>
                packing list @ mystic-forest.de
              </Link>. <br /> <br />
            </p>
            <span className="lang">--- en ---</span>
            <p>
              Hello lovely people, we’ve got news 😊 <br /> <br />
              To make sure you don’t forget anything, we’ve prepared the
              exclusive Mystic Forest Packing List for you to check off. Check
              out{" "}
              <Link to={"/packing-list"}>
                packing list @ mystic-forest.de
              </Link>. <br /> <br />
            </p>
          </section>
          <hr style={{ width: "100%" }} />
          <section>
            <div className="entry-heading">14. Jul</div>
            <img src="/posts/new_site_map.jpeg" alt="new-site-map" />
            <span className="lang">--- de ---</span>
            <p>
              🎉 <strong>Neuer Geländeplan (Site Plan) online!</strong> Wir
              haben fleißig gebastelt.
              <br />
              Ab sofort könnt ihr ihn auf unserer Webseite anschauen. Schaut
              vorbei und checkt unsere Floors! 🗺️✨
            </p>

            <p>
              Und nicht vergessen: Meldet euch bis Ende dieser Woche für unsere
              Shuttles an, wenn ihr plant, mit dem ÖPNV zu kommen.
              <br />
              Du kannst mit dem Zug bis <em>Dollbergen</em> fahren – von dort
              aus geht es nur mit Shuttle oder Taxi weiter.
            </p>

            <a href="https://forms.gle/FSQKEvtN6ynCvqy88">
              Hier für den Shuttle anmelden
            </a>

            <p>
              Weitere Infos zur Anreise und mehr findest du in unserem{" "}
              <Link to="/faq">FAQ</Link>.
            </p>
            <span className="lang">--- en ---</span>
            <p>
              🎉 <strong>New Site Plan online!</strong> We've been busy crafting
              it just for you.
              <br />
              You can now check it out on our website – take a look and explore
              our floors! 🗺️✨
            </p>

            <p>
              And don’t forget: Sign up for our shuttles by the end of this week
              if you're planning to arrive via public transport.
              <br />
              You can take the train to <em>Dollbergen</em> – from there, it’s
              shuttle or taxi only.
            </p>

            <a href="https://forms.gle/FSQKEvtN6ynCvqy88">
              Shuttle sign-up here
            </a>
            <p>
              More info about getting here and more can be found in our{" "}
              <Link to="/faq">FAQ</Link>.
            </p>
          </section>
          <hr style={{ width: "100%" }} />
          <section>
            <div className="entry-heading">07. Jul</div>
            <img src="/posts/kiara-deko-1.jpg" alt="kiara-deko" />
            <span className="lang">--- de ---</span>
            <p>
              Happy Monday zusammen 🌞
              <br />
              Wir waren diese Woche wieder auf mystischer Mission im Wald und
              haben einen kleinen Deko-Check gemacht. Spürt ihr auch schon das
              Kribbeln im Bauch? Es sind einfach nur noch 25 Tage bis wir
              gemeinsam tanzen, feiern und anstoßen werden. 💖💖💖
              <br />
              Wir können es kaum erwarten!
            </p>
            <p>Kleiner Reminder:</p>
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
              <li>
                <a href="https://forms.gle/FSQKEvtN6ynCvqy88">
                  Anmeldung Shuttles
                </a>
              </li>
            </ul>
            <span className="lang">--- en ---</span>
            <p>
              Happy Monday everyone 🌞
              <br />
              We were on a mystical mission in the forest again this week and
              did a little decorating check. Can you feel the butterflies in
              your stomach yet? There are only 25 days left until we dance,
              celebrate, and toast together. 💖💖💖
              <br />
              We can hardly wait!
            </p>
            <p>Little Reminder:</p>
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
              <li>
                <a href="https://forms.gle/FSQKEvtN6ynCvqy88">
                  Sign-up Shuttles
                </a>
              </li>
            </ul>
          </section>
          <hr style={{ width: "100%" }} />
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
              werden können.
              <br />
              <br />
              In unserer Mystic Forest Community findet ihr die Gruppe, in der
              ihr bereits seid und Gruppen zu Carpools, Shuttles, Workshops und
              mehr. Ihr seht als die allgemeine Mystic Forest Gruppe und die
              Ankündigungs-Gruppe und könnt selbst entscheiden, welchen Gruppen
              ihr zusätzlich beitreten möchtet.
              <br />
              <br />
              Schaut euch um und sucht raus, was für euch relevant bzw.
              interessant ist. Ihr könnt jederzeit Gruppen verlassen und
              weiteren beitreten. Direkten Zugang zur Community findet ihr in
              der unteren Navigationsleiste in WhatsApp. ❣️
              <br />
              <br />
              Außerdem sind wir dabei, nützliche Infos für vor und während des
              Festivals hier ➡️{" "}
              <a href="https://mystic-forest.de">mystic-forest.de</a>{" "}
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
              To help organize everything a bit better, we’ve created a WhatsApp
              Community. For those of you who aren’t familiar with the concept:
              A WhatsApp Community is a feature that allows multiple groups to
              be connected under one main topic.
              <br />
              <br />
              In our Mystic Forest Community, you’ll find the group you’re
              already part of, along with other groups for carpools, shuttles,
              workshops, and more. You’ll see the general Mystic Forest group
              and the announcements group, and then you can choose for yourself
              which additional groups you’d like to join.
              <br />
              <br />
              Take a look around and join the ones that are relevant or
              interesting to you — and feel free to leave or join groups at any
              time. You can access the community directly via the bottom
              navigation bar in WhatsApp. ❣️
              <br />
              <br />
              We’re also collecting useful information for before and during the
              festival here ➡️{" "}
              <a href="https://mystic-forest.de">mystic-forest.de</a> In the
              FAQs, you’ll find all the important details at a glance. Later on,
              there will also be a map of the festival grounds and a timetable
              for DJs and workshops. 🎶
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
