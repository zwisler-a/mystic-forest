import {Link} from "react-router";
import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";
import "./FaqPage.css";

function FaqPageEn() {

    return (
        <>
            <Header/>
            <main>
                <div className="glass-effect card faq">
                    <Link className="toggle-button" to={"/faq-de"}>
                        <span>Zurück zu Deutsch</span>
                    </Link>
                    <h2>FAQ</h2>

                    {/* ——— General ——— */}
                    <h3 className="faq-heading">General</h3>
                    <details>
                        <summary className="pointer">
                            When does the event take place?
                        </summary>
                        <p>
                            August 1st–3rd, 2025 <br/>
                            Arrival Friday from 3pm, start at 6pm <br/>
                            Departure Sunday until 2pm
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">
                            Where exactly is the event location?
                        </summary>
                        <p>
                            A cute little forest near Bröckel, about 1 hour from Hanover:{" "}
                            <a href="https://maps.app.goo.gl/yaYpY29ZEfe7dt9A7">
                                Google Maps
                            </a>
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">
                            Is there a theme or dress code?
                        </summary>
                        <p>
                            Come as you like and feel comfortable! If you want to dress up as
                            a mystical creature, you are very welcome. And glitter is always a
                            good idea!
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">
                            Is the event public or by invitation only?
                        </summary>
                        <p>
                            The event is a private birthday party. Please only come if you
                            have an invitation.
                        </p>
                    </details>

                    {/* ——— Sleeping & Accommodation ——— */}
                    <h3 className="faq-heading">Sleeping & Accommodation</h3>
                    <details>
                        <summary className="pointer">
                            Can you stay overnight at the site?
                        </summary>
                        <p>You can camp or sleep in your car, festival style ⛺</p>
                    </details>
                    <details>
                        <summary className="pointer">
                            Are there power connections for campers or vans?
                        </summary>
                        <p>
                            Power connections for campers are generally not planned – we
                            assume the caravans are self-sufficient. If it is urgently needed,
                            please talk to us personally and we will find a solution.
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">Are there hotels nearby?</summary>
                        <p>Hotel Viva Bröckel (3 km away, €85 single / €140 double room)</p>
                    </details>

                    {/* ——— Arrival & Parking ——— */}
                    <h3 className="faq-heading">Arrival & Parking</h3>
                    <details>
                        <summary className="pointer">
                            What is the best way to get to the site?
                        </summary>
                        <p>
                            <strong>🚗 Arrival by car</strong>
                            <br/>
                            We will set up a parking lot so you can easily arrive by car. If
                            you want/need to sleep in your vehicle, we will find a suitable
                            spot for you.
                        </p>
                        <p>---</p>
                        <p>
                            <strong>🚗👍🏼 Carpooling</strong>
                            <br/>
                            Feel free to use the groups in our WhatsApp community to offer or
                            find rides with people from your area.
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
                                        Carpool others
                                    </a>
                                </li>
                            </ul>
                            <p>
                                If you don't use WhatsApp, please contact us so we can help you.
                            </p>
                        </p>
                        <p>
                            <p>---</p>
                            <strong>🚅 Arrival by public transport</strong>
                            <br/>
                            You can easily get to Dollbergen or Celle by train:
                            <ul>
                                <li>Leipzig - Dollbergen approx. 3.5 hrs</li>
                                <li>Berlin - Dollbergen approx. 2 hrs</li>
                                <li>Hamburg - Celle approx. 1 hr</li>
                            </ul>
                            <p>
                                There will be a shuttle service from there on Friday between 3pm
                                and 6pm to bring you to the site. Please try to arrive within
                                this time window. After that or on Saturday, we can organize
                                shuttles on request. <br/> On Sunday morning until 2pm there
                                will also be shuttles back.
                            </p>
                            <p>
                                Please register for the respective shuttles so we can plan
                                better:
                                <p>
                                    <a href="https://forms.gle/FSQKEvtN6ynCvqy88">
                                        Shuttle registration
                                    </a>
                                </p>
                                <p>
                                    <a href="https://chat.whatsapp.com/HtesEdNk0Pw7xsFSJ33AJF">
                                        WhatsApp Group Shuttles for Coordination & Communication
                                    </a>
                                </p>
                            </p>
                        </p>
                        <p>
                            If you don't use WhatsApp, please contact us so we can help you.
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">Is there parking on site?</summary>
                        <p>Yes, for both cars and campers.</p>
                    </details>
                    <details>
                        <summary className="pointer">Are there carpools?</summary>
                        <p>
                            Feel free to use the groups in our WhatsApp community to offer or
                            find rides with people from your area: <br/>
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
                                        Carpool others
                                    </a>
                                </li>
                            </ul>
                        </p>
                        <p>
                            If you don't use WhatsApp, please contact us so we can help you.
                        </p>
                    </details>

                    {/* ——— Infrastructure ——— */}
                    <h3 className="faq-heading">Infrastructure</h3>
                    <details>
                        <summary className="pointer">
                            Are there toilets and showers?
                        </summary>
                        <p>
                            Toilets and running water are available.
                            <br/>
                            There are <strong>no</strong> showers → cat wash 🐈
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">Is there running water?</summary>
                        <p>Yes (not drinking water!)</p>
                    </details>
                    <details>
                        <summary className="pointer">What about waste disposal?</summary>
                        <p>
                            There will be enough garbage bags. Please separate glass, deposit
                            bottles, and residual waste. If you find trash on the ground,
                            please help pick it up 💚
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">
                            Can I charge my phone somewhere?
                        </summary>
                        <p>
                            You will need a power bank for the weekend, so bring one! If your
                            battery runs out and you need to plan your departure or exchange
                            contact info, we will find a solution. Just talk to us.
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">Is there mobile reception?</summary>
                        <p>
                            Reception varies depending on the provider – in some parts of the
                            site, it may be weak.
                        </p>
                    </details>

                    {/* ——— Food & Drinks ——— */}
                    <h3 className="faq-heading">Food & Drinks</h3>
                    <details>
                        <summary className="pointer">
                            Will food be provided or should I bring my own?
                        </summary>
                        <p>
                            There will be a shared buffet on Friday to which everyone is
                            welcome to contribute. On Saturday evening, Pizza House® will
                            prepare fresh pizza. For breakfast, please bring your own food. We
                            will also organize filter coffee. Otherwise, self-catering
                            festival style. Please bring your own dishes, cutlery, and cups.
                            🍴
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">Will there be a bar?</summary>
                        <p>
                            Of course! There will be plenty of beer, sparkling wine, soft
                            drinks, and Aperol. During happy hours, drinks are on us.
                            Otherwise, the bar is donation-based via PayPal or cash. 💕
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">
                            Are there vegan or vegetarian options?
                        </summary>
                        <p>
                            Yes. Please label your food & drinks for the buffet accordingly.
                            🌱
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">
                            Is there drinking water on site?
                        </summary>
                        <p>
                            We will provide a basic supply of water canisters, but please also
                            bring 1-2L of water yourself. 🫧
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">
                            Is there a supermarket nearby?
                        </summary>
                        <p>
                            Nahkauf, Hauptstraße 39, 29356 Bröckel
                            <br/>
                            3 km from the site
                            <br/>
                            open 07:00–19:00
                        </p>
                    </details>

                    {/* ——— Music & Program ——— */}
                    <h3 className="faq-heading">Music & Program</h3>
                    <details>
                        <summary className="pointer">What is the music program?</summary>
                        <p>
                            We will share the timetable shortly before the festival{" "}
                            <a href="/timetable">here</a>. We play a good mix of disco, house
                            & techno. If you have a great playlist, feel free to play it. So
                            bring it along!
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">
                            What workshops will be offered?
                        </summary>
                        <p>
                            We will share the workshop timetable shortly before the festival{" "}
                            <a href="/timetable">here</a>. There is a colorful program and you
                            don't need to register, so have fun trying things out!
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">
                            Can I offer a workshop or contribute ideas?
                        </summary>
                        <p>
                            Sure, if you have an idea, write to Hannah privately or contact us{" "}
                            <a href="https://chat.whatsapp.com/DVKIYAwuHlHIPWPpKF7E64">
                                here
                            </a>
                            . We also welcome anyone who wants to contribute to our Open Mic
                            on Saturday (about 3 minutes per person to talk about something
                            you learned, find exciting, background knowledge from your job, a
                            joke, a fun fact, a tip or life hack – it's all about sharing a
                            little knowledge. And everyone knows something that most others
                            don't!)
                            <br/>
                            If you don't use WhatsApp, please contact us so we can help you.
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">
                            When does the music end in the evening?
                        </summary>
                        <p>
                            On Friday, we will play music outside until 1am at the latest, on
                            Saturday the party will move indoors at 3am so everyone can get
                            some sleep.
                        </p>
                    </details>

                    {/* ——— Support & Gifts ——— */}
                    <h3 className="faq-heading">Support & Gifts</h3>
                    <details>
                        <summary className="pointer">Gifts?</summary>
                        <p>
                            Your presence is the greatest gift for us. If you still want to
                            support us, we are happy about a donation – as you feel. ♥️
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">
                            Does participation cost anything?
                        </summary>
                        <p>No, but we would appreciate a donation.</p>
                    </details>
                    <details>
                        <summary className="pointer">How can I donate?</summary>
                        <p>
                            There will be a PayPal link, tbd. Otherwise, cash is also welcome
                            – as you like. 🐷
                        </p>
                    </details>

                    {/* ——— Other ——— */}
                    <h3 className="faq-heading">Other</h3>
                    <details>
                        <summary className="pointer">
                            How can I help or co-organize?
                        </summary>
                        <p>
                            You want to support us, be it with a bar shift, a shuttle ride, or
                            helping with dismantling? How nice 💛 contact us{" "}
                            <a href="https://chat.whatsapp.com/FKm9hbcBWUk1y8hgkWh8ij">
                                here
                            </a>{" "}
                            and we will coordinate everything.
                            <br/>
                            If you don't use WhatsApp, please contact us so we can help you.
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">Can I take photos or videos?</summary>
                        <p>
                            You may take photos and videos, but always make sure the people
                            involved are okay with it.
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">What happens in bad weather?</summary>
                        <p>
                            If it rains heavily, we have a tent ready and will move the party
                            mostly indoors. A waterproof tent is recommended!
                        </p>
                    </details>
                    <details>
                        <summary className="pointer">Are pets allowed?</summary>
                        <p>If you want to bring a pet, please contact us in advance.</p>
                    </details>
                    <details>
                        <summary className="pointer">What should I bring?</summary>
                        <p>
                            We will share a packing list with everything you need{" "}
                            <a href="/packing-list">here</a> before the weekend. 🙃 📋
                        </p>
                    </details>
                </div>
                <BackButton/>
            </main>
        </>
    );
}

export default FaqPageEn;
