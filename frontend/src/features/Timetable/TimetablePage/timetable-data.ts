export interface Act {
  from: Date;
  to: Date;
  location: string;
  name: {
    en: string;
    de: string;
  };
  artist?: string;
  description?: {
    en: string;
    de: string;
  };
  comment?: {
    en: string;
    de: string;
  };
  language?: string;
  bring?: {
    en: string;
    de: string;
  };
  type?: string;
  day: "Friday" | "Saturday" | "Sunday";
}

export const actList: Act[] = [
  {
    from: new Date("2025-08-01 18:00:00"),
    to: new Date("2025-08-01 19:00:00"),
    location: "Mondhain",
    name: {
      en: "Bienvenida",
      de: "Bienvenida",
    },
    artist: "LaVrads",
    description: {
      en: "",
      de: "",
    },
    type: "music",
    day: "Friday",
  },
  {
    from: new Date("2025-08-01 19:00:00"),
    to: new Date("2025-08-01 21:00:00"),
    location: "Mondhain",
    name: {
      en: "Rooted Welcome Sounds",
      de: "Wurzlige Willkommensklänge",
    },
    artist: "Gönndir, dem Zauberer vom Mystic Forest",
    description: {
      en: "",
      de: "",
    },
    type: "music",
    day: "Friday",
  },
  {
    from: new Date("2025-08-01 20:00:00"),
    to: new Date("2025-08-01 21:00:00"),
    location: "Mondhain",
    name: {
      en: "Welcome! Arrive & Bloom 🌿✨",
      de: "Willkommen! Ankommen & Aufblühen 🌿✨",
    },
    artist: "Kiara, Anki, Hannah",
    description: {
      en: "Hellohello and welcome! We’re beyond excited to kick off Mystic Forest with you in this little enchanted woodland—before we dance, play, count shooting stars, roast bread, and meet new favorite people, we’ll start with a heartfelt welcome ritual including get-to-know-you bingo, small surprises, and raise a glass to a bit of birthday magic.",
      de: "Hellohello & hereinspaziert! Zum Auftakt des Mystic Forest heißen wir euch alle mit offenen Armen willkommen! Wir freuen uns riesig, dass ihr mit uns in diesen kleinen Zauberwald eingezogen seid. Bevor wir wie versprochen gemeinsam tanzen, toben, Sternschnuppen zählen, Stockbrot drehen und neue Lieblingsmenschen treffen, starten wir unser Wochenende mit einem liebevollen Willkommensritual. Freut euch auf ein lockeres Kennenlern-Bingo, kleine Überraschungen und die ersten Sonnenstrahlen auf der Tanzfläche. Lasst uns gemeinsam ankommen, verwurzeln, loslassen – und auf ein bisschen Geburtstagszauber anstoßen.",
    },
    comment: {
      en: "Let’s start soft and sparkly.",
      de: "Wir starten weich und glitzernd.",
    },
    bring: {
      en: "A curious heart, comfy shoes, and something that clinks.",
      de: "Ein offenes Herz, bequeme Schuhe und etwas zum Anstoßen.",
    },
    type: "entertainment",
    day: "Friday",
  },
  {
    from: new Date("2025-08-01 21:00:00"),
    to: new Date("2025-08-02 00:00:00"),
    location: "Mondhain",
    name: {
      en: "Open Decks",
      de: "Open Decks",
    },
    description: {
      en: "A slot full of magic: Here, the gates open for spontaneous sound sorcerers. Those who dare step out of the mist and enchant the forest with their beats.",
      de: "Ein Slot voller Magie: Hier öffnen sich die Tore für spontane Klangzauber:innen. Wer den Mut hat, tritt aus dem Nebel hervor und verzaubert den Wald mit Beats",
    },
    type: "music",
    day: "Friday",
  },
  {
    from: new Date("2025-08-01 22:00:00"),
    to: new Date("2025-08-02 00:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Available Playlist Slots 🎶",
      de: "Freie Playlist Slots 🎶",
    },
    artist: "",
    description: {
      en: "You have a playlist you’d like to play? Then get in touch with us!",
      de: "Du hast eine Playlist, die du gerne spielen möchtest? Dann melde dich bei uns!",
    },
    type: "music",
    day: "Friday",
  },
  {
    from: new Date("2025-08-02 00:00:00"),
    to: new Date("2025-08-02 01:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Deep & Technoid - Drum & Bass",
      de: "Deep & Technoid - Drum & Bass",
    },
    artist: "Noxal Equity [Fat Bemme / Distillery Leipzig]",
    description: {
      en: "I take the crowd on a journey into Liquid Drum & Bass. I belong to the Leipzig Fat Bemme crew. Until the Distillery was demolished, we had an event series there.",
      de: "Ich nehme die Crowd mit auf eine Reise in den Liquid Drum & Bass. Ich gehöre zur Leipziger Fat Bemme-Crew. Bis zum Abriss der Distillery hatten wir dort eine Veranstaltungsreihe.",
    },
    type: "music",
    day: "Friday",
  },
  {
    from: new Date("2025-08-02 01:00:00"),
    to: new Date("2025-08-02 02:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Elb vom Eichenrat",
      de: "Elb vom Eichenrat",
    },
    artist: "DJ Gilette",
    description: {
      en: "When the beeches bounce, the spruces flip, and the firs dance, DJ Gilette shreds the enchanted forest with trash and trance..",
      de: "Wenn die Buchen bouncen, die Fichten flippen und die Tannen tanzen, dann rasiert DJ Gilette mit Trash und Trance im Zauberwald..",
    },
    type: "music",
    day: "Friday",
  },
  {
    from: new Date("2025-08-02 02:00:00"),
    to: new Date("2025-08-02 03:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Open Decks",
      de: "Open Decks",
    },
    description: {
      en: "A slot full of magic: Here, the gates open for spontaneous sound sorcerers. Those who dare step out of the mist and enchant the forest with their beats.",
      de: "Ein Slot voller Magie: Hier öffnen sich die Tore für spontane Klangzauber:innen. Wer den Mut hat, tritt aus dem Nebel hervor und verzaubert den Wald mit Beats",
    },
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-01 18:00:00"),
    to: new Date("2025-08-01 20:00:00"),
    location: "SchMaus & Trunk",
    name: {
      en: "Aperol Happy Hour 🍊",
      de: "Aperol Happy Hour 🍊",
    },
    description: {
      en: "As the sun casts its golden light over the grove, we invite you for a sparkling magic elixir—come by for a cool Aperol on the house, a fizzy moment between dance, forest, and enchantment—only for a short time, let yourself be charmed!",
      de: "Wenn die Sonne sich golden über den Hain legt, laden wir euch zum spritzigen Zaubertrunk ein. Kommt vorbei und genießt kühle Aperol auf's Haus – ein prickelnder Moment zwischen Tanz, Wald und Magie. Nur für kurze Zeit – lasst euch verzaubern!",
    },
    bring: {
      en: "Your own cup or glass 🍹",
      de: "Deinen eigenen Becher oder Glas 🍹",
    },
    type: "food",
    day: "Friday",
  },
  {
    from: new Date("2025-08-01 19:00:00"),
    to: new Date("2025-08-01 22:00:00"),
    location: "SchMaus & Trunk",
    name: {
      en: "Open Buffet",
      de: "Open Buffet",
    },
    description: {
      en: "For our mystical forest gathering, we’ll set the table together—feel free to bring a treat, a favorite snack, or something homemade, sweet, savory, wild, or wondrous; from hummus to braided bread, salad to magic cookies—everything is welcome, so we can all be nourished and happy together.",
      de: "Für unser mystisches Waldfest bereiten wir gemeinsam ein Buffet vor – bringt gerne etwas mit, was euch schmeckt, was ihr gern esst oder selbst gemacht habt. Ob Hummus, Hefezopf, Salat oder Kekse – alles ist willkommen. So orgen wir gemeinsam dafür, dass alle satt und glücklich sind.",
    },
    bring: {
      en: "Your own dishes and cutlery 🍽",
      de: "Dein eigenes Geschirr und Besteck 🍽",
    },
    type: "food",
    day: "Friday",
  },
  {
    from: new Date("2025-08-01 18:00:00"),
    to: new Date("2025-08-02 00:00:00"),
    location: "SchMaus & Trunk",
    name: {
      en: "Open Bar",
      de: "Open Bar",
    },
    description: {
      en: "Our forest bar runs on donations—featuring cool soft drinks, refreshing white wine spritz and Aperol, plus beer and, for the brave, the occasional shot—all mixed and served by the enchanting Sip Squat.",
      de: "Unsere Waldbar läuft auf Spendenbasis – euch erwarten kühle Softdrinks, erfrischende Weißweinschorle und Aperol, dazu Bier und für die Mutigen auch der ein oder andere Shot – gemixt und gereicht vom zauberhaften Sip Squat.",
    },
    bring: {
      en: "Your own cup or glass 🍹 and a smile for the bar people ☺️",
      de: "Deinen eigenen Becher oder Glas 🍹 und ein Lächeln für die Bar-Menschen ☺️",
    },
    type: "food",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 00:00:00"),
    to: new Date("2025-08-02 03:00:00"),
    location: "SchMaus & Trunk",
    name: {
      en: "Open Bar",
      de: "Open Bar",
    },
    description: {
      en: "Our forest bar runs on donations—featuring cool soft drinks, refreshing white wine spritz and Aperol, plus beer and, for the brave, the occasional shot—all mixed and served by the enchanting Sip Squat.",
      de: "Unsere Waldbar läuft auf Spendenbasis – euch erwarten kühle Softdrinks, erfrischende Weißweinschorle und Aperol, dazu Bier und für die Mutigen auch der ein oder andere Shot – gemixt und gereicht vom zauberhaften Sip Squat.",
    },
    bring: {
      en: "Your own cup or glass 🍹 and a smile for the bar people ☺️",
      de: "Deinen eigenen Becher oder Glas 🍹 und ein Lächeln für die Bar-Menschen ☺️",
    },
    type: "food",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 11:00:00"),
    to: new Date("2025-08-02 12:00:00"),
    location: "Mondhain",
    name: {
      en: "Forest  & Sounds",
      de: "Wald & Klang",
    },
    artist: "Michael Hinze",
    description: {
      en: "Listen to a musical pause in nature. A moment of stillness, music, and connection in the middle of the weekend buzz.",
      de: "Lauscht einem musikalischer Moment mitten im Grünen. Musik, Natur und Gemeinschaft – ein kleines Innehalten im Trubel des Wochenendes.",
    },
    language: "DE/EN",
    bring: {
      en: "possibly a blanket",
      de: "evtl. eine Decke",
    },
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 13:00:00"),
    to: new Date("2025-08-02 14:00:00"),
    location: "Mondhain",
    name: {
      en: "Music Production Basics",
      de: "Musikproduktions Grundlagen",
    },
    artist: "Sebastian Strootmann",
    description: {
      en: "Discover the magic of music production without a computer and learn how to bring your own tracks to life in a DJ set – complete with live gear, looping tricks, and even a Theremin! From knobs to dancefloor in one session.",
      de: "Beats ohne Bildschirm – Live & Analog! Erlebe, wie Musikproduktion ganz ohne Computer funktioniert – und wie du deine eigenen Tracks live ins DJ-Set bringst. Mit dabei: Drum Machines, Looping, jede Menge Knöpfe… und ein Theremin! Von der Idee direkt auf die Tanzfläche.",
    },
    language: "DE/EN",
    bring: {
      en: "Own instruments, if you have them",
      de: "Eigene Instrumente, falls ihr sie habt",
    },
    type: "workshop",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 14:15:00"),
    to: new Date("2025-08-02 15:00:00"),
    location: "Mondhain",
    name: {
      en: "Varieté mit den zwei Schoenen vom See",
      de: "Varieté mit den zwei Schoenen vom See",
    },
    artist: "Karin & Christel Schoenen",
    description: {
      en: "Have you met Paula Becker yet? The artificial flower florist from Jülich comes loaded with plenty of juicy gossip – and of course, some stories about the hosts too! She performs together with Stina, who brings some beautiful little songs with her.",
      de: "Kennt ihr schon Paula Becker? Die Kunstblumenfloristikerin aus Jülich hat jede Menge Klatsch & Tratsch dabei - natürlich auch über die Gastgeberinnen. Sie performt gemeinsam mit Stina - die ein paar tolle Lieder dabei hat.",
    },
    language: "DE",
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 15:00:00"),
    to: new Date("2025-08-02 16:30:00"),
    location: "Mondhain",
    name: {
      en: "Trash Disco Witch Leo",
      de: "Trash Disco Witch Leo",
    },
    artist: "Leo Schick",
    description: {
      en: "Get ready for some feel-good-mystic-forest vibes with Trash Disco Witch Leo.",
      de: "Trash Disco Witch Leo nimmt euch mit auf eine gute Laune Tour durch den Feel-Good-Forest.",
    },
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 16:30:00"),
    to: new Date("2025-08-02 18:00:00"),
    location: "Mondhain",
    name: {
      en: "Jack, the Rogue of the Shadow Path",
      de: "Jack, der Schelm des Schattenpfads",
    },
    artist: "Cordouroy",
    description: {
      en: "Half forest spirit, half DJ – always has a sparkle in his eye.",
      de: "Halb Waldgeist, halb DJ – hat immer ein Funkeln im Auge.",
    },
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 18:00:00"),
    to: new Date("2025-08-02 19:00:00"),
    location: "SchMaus & Trunk",
    name: {
      en: "Aperol Happy Hour 🍊",
      de: "Aperol Happy Hour 🍊",
    },
    description: {
      en: "As the sun casts its golden light over the grove, we invite you for a sparkling magic elixir—come by for a cool Aperol on the house, a fizzy moment between dance, forest, and enchantment—only for a short time, let yourself be charmed!",
      de: "Wenn die Sonne sich golden über den Hain legt, laden wir euch zum spritzigen Zaubertrunk ein. Kommt vorbei und genießt kühle Aperol auf's Haus – ein prickelnder Moment zwischen Tanz, Wald und Magie. Nur für kurze Zeit – lasst euch verzaubern!",
    },
    bring: {
      en: "Your own cup or glass 🍹",
      de: "Deinen eigenen Becher oder Glas 🍹",
    },
    type: "food",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 18:00:00"),
    to: new Date("2025-08-02 18:45:00"),
    location: "Mondhain",
    name: {
      en: "Surprise",
      de: "Überraschung",
    },
    artist: "",
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 18:45:00"),
    to: new Date("2025-08-02 21:00:00"),
    location: "Mondhain",
    name: {
      en: "Angie, the Valkyrie of the Muse b2b Magic Shroom Melvin",
      de: "Angie, die Walküre der Muse b2b Magic Shroom Melvin",
    },
    artist: "grey.ish b2b vinsk.",
    description: {
      en: "All in on Minimal, all out on groove. Vienna-based Melvin aka vinsk. is part of unframed and has been making music all his life – from bands to dancefloors, now fully rooted in house. Crispy hi-hats, punchy snares and rolling basslines shape his sound.",
      de: "All in on minimal, all out on groove. Melvin aka vinsk. ist Teil des Wiener Kollektivs unframed und macht Musik, seit er denken kann – früher in Bands, heute hinter den Decks mit einer Liebe für House in allen Formen und Farben. Sein Sound ist geprägt von schiebenden Basslines kombiniert mit crispy Hi-Hats und punchy Snares.",
    },
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 21:00:00"),
    to: new Date("2025-08-02 22:30:00"),
    location: "Mondhain",
    name: {
      en: "Bass-Bard Basti from Wurzelwerk",
      de: "Bass-Barde Basti vom Wurzelwerk",
    },
    artist: "Sebastian Strootmann",
    description: {
      en: "Sebastian Strootmann moves fluidly between Minimal House, Deep Tech, and the moody textures of Dark Disco and Melodic Techno. His sound thrives in the spaces between genres — built on hypnotic basslines, subtle transitions, and groovy low-end anthems.",
      de: "Sebastian Strootmann bewegt sich fließend zwischen Minimal House, Deep Tech und den düsteren Texturen von Dark Disco und Melodic Techno. Sein Sound lebt von den Zwischenräumen der Genres – gebaut auf hypnotischen Basslines, subtilen Übergängen und groovigen Low-End-Hymnen.",
    },
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 22:30:00"),
    to: new Date("2025-08-03 00:00:00"),
    location: "Mondhain",
    name: {
      en: "Baars vom Nebelhain",
      de: "Baars vom Nebelhain",
    },
    artist: '"lerschn" aka "Baarsheinrich"',
    description: {
      en: "Fog meets moonlight – follow the call of the forest through a soundscape of driving basses and hypnotic melodies. A sound for those who want to dance in the fog and feel the heartbeat of the forest.",
      de: "Nebel trifft Mond - folgt dem Ruf des Waldes durch die Klanglandschaft von tragend-treibenden Bässen und hypnotischen Melodien. Ein Sound für jene, die im Nebel tanzen und den Herzschlag des Waldes spüren wollen.",
    },
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-03 00:00:00"),
    to: new Date("2025-08-03 01:30:00"),
    location: "Mondhain",
    name: {
      en: "Gönndir, the Wizard of the Mystic Forest",
      de: "Gönndir, der Zauberer vom Mystic Forest",
    },
    artist: "",
    description: {
      en: "What started as a personal discovery during the pandemic isolation quickly turned into a true passion. Influenced by various electronic styles – from techno to psytrance to house – Sebastian's sets are all about crossing boundaries and creating sonic journeys.",
      de: "Was während der Isolation der Pandemie als persönliche Entdeckung begann, entwickelte sich schnell zu einer echten Leidenschaft. Beeinflusst von verschiedensten elektronischen Stilrichtungen – von Techno über Psytrance bis hin zu House – geht es in Sebastians Sets vor allem darum, Grenzen zu überschreiten und klangliche Reisen zu gestalten.",
    },
    type: "music",
    day: "Sunday",
  },
  {
    from: new Date("2025-08-03 01:30:00"),
    to: new Date("2025-08-03 03:00:00"),
    location: "Mondhain",
    name: {
      en: "Adrien Dämmerwind",
      de: "Adrien Dämmerwind",
    },
    artist: "Taïken",
    description: {
      en: "He wanders through the rootwork, telling stories — but was he ever real, or just a whim of nature? (90s/progressive/tribal/ethereal house)",
      de: "Zieht durch das Wurzelwerk, erzählt Geschichten – aber war er je real oder doch nur eine Laune der Natur? (90s/progressive/tribal/ethereal house)",
    },
    type: "music",
    day: "Sunday",
  },
  {
    from: new Date("2025-08-02 21:00:00"),
    to: new Date("2025-08-02 22:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Cabin Quiz",
      de: "Hüttenquiz",
    },
    artist: "Cornelius",
    description: {
      en: "Put your general knowledge to the test with Cornelius, the Quizmaster! Grab a drink and join us in the cabin for an hour of fun and challenge.",
      de: "Testet euer Allgemeinwissen mit Cornelius, dem Quizmaster! Schnappt euch ein Getränk und kommt für eine Stunde in die Hütte, um euer Wissen unter Beweis zu stellen!",
    },
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 22:00:00"),
    to: new Date("2025-08-02 23:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Bring it back",
      de: "Bring it back",
    },
    artist: "Tincho",
    description: {
      en: "Dancing through the last decades.",
      de: "Tanzend durch die letzten Jahrzente.",
    },
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 23:00:00"),
    to: new Date("2025-08-03 00:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Available Playlist Slots 🎶",
      de: "Freie Playlist Slots 🎶",
    },
    artist: "",
    description: {
      en: "You have a playlist you’d like to play? Then get in touch with us!",
      de: "Du hast eine Playlist, die du gerne spielen möchtest? Dann melde dich bei uns!",
    },
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-03 00:00:00"),
    to: new Date("2025-08-03 03:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Available Playlist Slots 🎶",
      de: "Freie Playlist Slots 🎶",
    },
    artist: "",
    description: {
      en: "You have a playlist you’d like to play? Then get in touch with us!",
      de: "Du hast eine Playlist, die du gerne spielen möchtest? Dann melde dich bei uns!",
    },
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-03 03:00:00"),
    to: new Date("2025-08-03 06:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Open Decks (Happy House)",
      de: "Open Decks (Happy House)",
    },
    description: {
      en: "A slot full of magic: Here, the gates open for spontaneous sound sorcerers. Those who dare step out of the mist and enchant the forest with their beats.",
      de: "Ein Slot voller Magie: Hier öffnen sich die Tore für spontane Klangzauber:innen. Wer den Mut hat, tritt aus dem Nebel hervor und verzaubert den Wald mit Beats",
    },
    type: "music",
    day: "Sunday",
  },
  {
    from: new Date("2025-08-02 10:00:00"),
    to: new Date("2025-08-02 11:00:00"),
    location: "Workshop-Oase",
    name: {
      en: "In Contact – Encounter, Exchange & Massage",
      de: "Im Kontakt – Begegnung, Austausch & Massage",
    },
    artist: "Gunnar & Janina",
    description: {
      en: "In this workshop, we invite you to connect with others in a playful and mindful way. Through simple connection games like partner sharing, eye gazing, and massage, we create a space for new encounters – one-on-one and in the group. The workshop is open to everyone – all you need is a bit of curiosity, openness, and a willingness to engage in new connections. :) We’re looking forward to seeing you! Janina & Gunnar ",
      de: "In/m Kontakt – Begegnung, Austausch & Massage In diesem Workshop laden wir dich ein, auf spielerische und achtsame Weise mit anderen in Kontakt zu treten. Durch kleine Verbindungsspiele wie Austausch in Zweier-Settings, Eye Gazing und Massage schaffen wir einen Raum für neue Begegnungen zu zweit und in der Gruppe. Der Workshop ist offen für alle - du brauchst nur etwas Neugier, Offenheit und die Bereitschaft, dich auf neue Begegnungen einzulassen. :) Wir freuen uns! Janina & Gunnar ",
    },
    comment: {
      en: "Please try to be there from the beginning, this way we create a better, more connected space. It would probably be good if this workshop takes place rather at the beginning of the weekend (Saturday morning?) - a slightly secluded place would be great.",
      de: "Gerne von Anfang an dabei sein, so schaffen wir einen besseren, gehaltereren Raum. Es wäre wahrscheinlich gut, wenn dieser Workshop eher zu Beginn des Wochenendes stattfindet (SA, vormittag?) - ein etwas abgelegener Ort wäre toll. ",
    },
    language: "DE/EN",
    bring: {
      en: "Comfortable clothes & openness, maybe a blanket or something to sit on",
      de: "Bequeme Klamotten & Offenheit, gerne Decke oder etwas zum sitzen ",
    },
    type: "workshop",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 11:00:00"),
    to: new Date("2025-08-02 11:45:00"),
    location: "Workshop-Oase",
    name: {
      en: "Compliment Workshop",
      de: "Komplimente-Workshop",
    },
    artist: "Gerwin",
    description: {
      en: '"Sick beard." "This is a bit corny, but you are a-maize-ing." "You are a truly great friend."  Remember that big smile your friend had the last time you gave them a compliment? 🤩  You\'ll walk out of this workshop with a cute collection of funny, cheesy, deep or meaningful give-away compliments inspired by everyone participating. Share your kindness and make somebody else smile this weekend! 🤭  German and English compliments welcome.  Max 25 people',
      de: '"Starker Bart!" "Sind deine Eltern Diebe? ..." „Deine Freundschaft ist ein Geschenk.“ Erinnerst du dich an das breite Grinsen deiner Freund:innen, als du ihnen das letzte Mal ein Kompliment gemacht hast? 🤩 In diesem Workshop erstellen wir gemeinsam eine kleine, liebevolle Sammlung an give-away Komplimenten – lustig, cheesy, tiefgründig oder richtig herzerwärmend. Du gehst mit einem kleinen Stapel davon ins weitere Wochenende und kannst superleicht jemandem ein Lächeln ins Gesicht zaubern. 🤭 Maximal 25 Teilnehmende.',
    },
    comment: {
      en: "I will translate into German for everyone who has problems with English! Max. 25 participants.",
      de: "Ich übersetze auf Deutsch für alle, die Probleme mit dem Englischen haben! Max. 25 Teilnehmende.",
    },
    language: "DE/EN",
    bring: {
      en: "Nothing :) ",
      de: "Nichts :) ",
    },
    type: "workshop",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 13:00:00"),
    to: new Date("2025-08-02 14:00:00"),
    location: "Workshop-Oase",
    name: {
      en: "Capturing light",
      de: "Licht einfangen",
    },
    artist: "Tess",
    description: {
      en: "Light doesn’t just brighten things – it whispers, hides, reveals, and sets the mood. In this session, Tess, a passionate cinematographer, invites you to explore how light shapes the way we see and feel. Whether you're into photography, film, or just curious about the magic of images – come along! No fancy gear or experience needed – just open eyes, a bit of wonder, and the joy of experimenting with what light can do.",
      de: "Licht kann viel mehr als nur hell machen – es flüstert, tanzt, versteckt und zeigt. In dieser Session nimmt Tess, Cinematografin aus Leidenschaft, euch mit auf eine kleine Reise durch die Welt von Licht, Schatten und Bildern. Ob du gern fotografierst, filmst oder einfach neugierig bist: Gemeinsam schauen wir, wie aus einem Gefühl ein Bild wird – und aus einem Bild vielleicht eine kleine Geschichte. Keine Vorkenntnisse, keine teure Kamera – nur Lust aufs Gucken, Staunen und Ausprobieren.",
    },
    language: "EN",
    type: "workshop",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 15:00:00"),
    to: new Date("2025-08-02 16:00:00"),
    location: "Workshop-Oase",
    name: {
      en: "Color Flow – Collaborative Painting",
      de: "Color Flow – Gemeinsames Malen",
    },
    artist: "Ieva",
    description: {
      en: "A playful painting session full of surprises: In this session, we swap canvases every 10 minutes and continue what others have started. The result? A vibrant, collective artwork shaped by many hands – spontaneous, inspiring, and fun. ",
      de: "Ein kreatives Spiel mit Pinseln und Perspektiven: In dieser Session tauschen wir alle 10 Minuten die Leinwände und malen auf dem weiter, was andere begonnen haben. So entsteht ein lebendiges Gemeinschaftswerk – spontan, überraschend, verbindend.  ",
    },
    language: "DE/EN",
    bring: {
      en: "Drinks :) maybe a sound box?",
      de: "Drinks :) maybe a sound box?",
    },
    type: "workshop",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 16:00:00"),
    to: new Date("2025-08-02 17:30:00"),
    location: "Workshop-Oase",
    name: {
      en: "Tattoo & Glitter Station",
      de: "Tattoo & Glitzer-Station",
    },
    artist: "Angie & Leo",
    description: {
      en: "✨ Tritt ein ins Glitzer-Portal! ✨ Lass dich von unseren Waldfeen verzieren – mit Glitzer, Glanz und funkelnden Tattoos. 100 % Magie, 0 % Reue. 🧚‍♀️🌲💫",
      de: "✨ Enter the Sparkle Portal! ✨ Get glitterfied and tattooed by forest fairies — 100% magic, 0% regrets. 🧚‍♀️🌲💫",
    },
    language: "DE/EN",
    bring: {
      en: "Sparkling wine and good mood!",
      de: "Sekt und gute Laune! ",
    },
    type: "entertainment",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 18:00:00"),
    to: new Date("2025-08-02 20:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Jam Session",
      de: "Jam Session",
    },
    artist: "René",
    description: {
      en: "Bring your instruments and come jam with me! We’ve got a few guitars, shakers, and more – but feel free to bring your own!",
      de: "Bringt eure Instrumente mit und jamt mit mir! Wir haben ein paar Gitarren, Rasseln etc. da - bring your own!",
    },
    language: "DE/EN",
    type: "music",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 19:00:00"),
    to: new Date("2025-08-02 19:30:00"),
    location: "Spielwiese",
    name: {
      en: "Build the Hubi Tower",
      de: "Hubi Turm bauen",
    },
    artist: "Biene & Faxe",
    description: {
      en: "Dare to take on the Hubi Tower! Test your skill, balance, and nerves—who can stack the highest without the whole thing crashing down? Of course, fueled by plenty of Hubertus spirit!",
      de: "Wagt euch an den Hubi-Turm und testet eure Geschicklichkeit, Balance und Nerven beim Stapeln & Trinken von Hubertustropfen! Wer stapelt am höchsten, ohne dass alles krach macht?",
    },
    language: "DE/EN",
    type: "entertainment",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 12:00:00"),
    to: new Date("2025-08-02 14:00:00"),
    location: "Spielwiese",
    name: {
      en: "Games Olympics",
      de: "Spieleolympiade",
    },
    artist: "Clara & Sarah",
    description: {
      en: "Grab your team and dive into wild battles and hilarious challenges at our Games Olympics. Glory, bragging rights, and fantastic prizes await… and maybe a bit of grass in your hair.   ",
      de: "Bei unserer Spieleolympiade geht’s rund: Schnappt euch euer Team, stürzt euch in wilde Kämpfe. Ruhm, Ehre und fantastische Preise warten… und vielleicht ein bisschen Gras im Haar.",
    },
    comment: {
      en: "Please be on time - we will assign teams at the beginning :)",
      de: "Bitte pünktlich sein - wir teilen die Teams zu Beginn ein :-)",
    },
    language: "DE/EN",
    bring: {
      en: "Drinks, fun, comfortable clothes and good mood! ",
      de: "Getränke, Spaß, bequeme Klamotten und gute Laune! ",
    },
    type: "entertainment",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 14:00:00"),
    to: new Date("2025-08-02 16:00:00"),
    location: "Spielwiese",
    name: {
      en: "Viking Chess / Cornhole",
      de: "Wikinger Schach / Cornhole",
    },
    artist: "Marie",
    description: {
      en: "Team Spirit, Tactics & Triumph! It's game time with outdoor classics like Kubb (Viking Chess), Cornhole & more. Precision meets pure fun, and with 8+ players, the vibes are legendary. Gather, toss, conquer!",
      de: "Bei Wikingerschach, Cornhole & Co. geht’s um Präzision, Spaß und das gewisse Wurf-Gefühl. Ab 8 Leuten wird’s richtig episch – also: sammeln, werfen, siegen! ",
    },
    comment: {
      en: "Flexible participation is possible!",
      de: "Flexibel teilnehmen ist möglich!",
    },
    language: "DE/EN",
    bring: {
      en: "Fun!",
      de: "Spaß!",
    },
    type: "entertainment",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 16:00:00"),
    to: new Date("2025-08-02 18:00:00"),
    location: "Spielwiese",
    name: {
      en: "Flunkiball + Ragecage",
      de: "Flunkiball + Ragecage",
    },
    artist: "Nils",
    description: {
      en: "Thirsty for some action? I'm setting up a Flunkyball and Rage Cage field! Everyone's welcome to jump in for spontaneous games – and if there’s enough interest, I’ll host a little Flunkyball tournament. Come by, bring your skills (and your thirst)!",
      de: "Ich baue ein Flunkyball- und Ragecage-Spielfeld auf! Wer Bock hat, kann jederzeit spontan mitspielen – und wenn genug Interesse da ist, organisiere ich ein kleines Flunkyball-Turnier. Kommt vorbei, bringt eure Skills (und euren Durst) mit!",
    },
    comment: {
      en: "Flexible participation is possible!",
      de: "Flexibel teilnehmen ist möglich!",
    },
    language: "Alkohol",
    bring: {
      en: "Thirst",
      de: "Durst",
    },
    type: "entertainment",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 10:00:00"),
    to: new Date("2025-08-02 12:00:00"),
    location: "SchMaus & Trunk",
    name: {
      en: "Coffee Special ☕️",
      de: "Coffee Special ☕️",
    },
    description: {
      en: "Coffee is served by our lovely Sip Squat – freshly brewed, forest-warm, and just the right magic to start your day.",
      de: "Kaffee gibt’s von unserem lieben Sip Squat – frisch gebrüht, waldwarm und genau der richtige Zauber für den Start in den Tag.",
    },
    type: "food",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 14:00:00"),
    to: new Date("2025-08-03 02:00:00"),
    location: "SchMaus & Trunk",
    name: {
      en: "Open Bar",
      de: "Open Bar",
    },
    description: {
      en: "Our forest bar runs on donations—featuring cool soft drinks, refreshing white wine spritz and Aperol, plus beer and, for the brave, the occasional shot—all mixed and served by the enchanting Sip Squat.",
      de: "Unsere Waldbar läuft auf Spendenbasis – euch erwarten kühle Softdrinks, erfrischende Weißweinschorle und Aperol, dazu Bier und für die Mutigen auch der ein oder andere Shot – gemixt und gereicht vom zauberhaften Sip Squat.",
    },
    bring: {
      en: "Your own cup or glass 🍹 and a smile for the bar people ☺️",
      de: "Deinen eigenen Becher oder Glas 🍹 und ein Lächeln für die Bar-Menschen ☺️",
    },
    type: "food",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-02 20:00:00"),
    to: new Date("2025-08-02 22:00:00"),
    location: "SchMaus & Trunk",
    name: {
      en: "Pizza 🍕",
      de: "Pizza 🍕",
    },
    description: {
      en: "A cozy 🍕 Pizza truck rolls into the forest and serves up warm, wood-fired goodness to fuel the evening magic.",
      de: "Ein gemütlicher 🍕 Pizza-Wagen versorgt uns mit knuspriger, ofenfrischer Waldnahrung – perfekt für den Abend voller Zauber.",
    },
    type: "food",
    day: "Saturday",
  },
  {
    from: new Date("2025-08-03 10:00:00"),
    to: new Date("2025-08-03 12:00:00"),
    location: "SchMaus & Trunk",
    name: {
      en: "Coffee Special ☕️",
      de: "Coffee Special ☕️",
    },
    description: {
      en: "Coffee is served by our lovely Sip Squat – freshly brewed, forest-warm, and just the right magic to start your day.",
      de: "Kaffee gibt’s von unserem lieben Sip Squat – frisch gebrüht, waldwarm und genau der richtige Zauber für den Start in den Tag.",
    },
    type: "food",
    day: "Sunday",
  },
  {
    from: new Date("2025-08-03 12:00:00"),
    to: new Date("2025-08-03 12:15:00"),
    location: "Mondhain",
    name: {
      en: "Forest Fade-Out",
      de: "Forest Fade-Out",
    },
    artist: "Kiara, Anki, Hannah",
    description: {
      en: "Before we dive into dismantling mode, we’ll gather one last time with Kiara, Anki & Hannah to say a few words, share some laughs, and close the weekend together.",
      de: "Bevor’s ans Abbauen geht, kommen wir ein letztes Mal mit Kiara, Anki & Hannah zusammen – für ein paar Worte, ein paar Lacher und einen gemeinsamen Abschluss dieses wunderbaren Wochenendes.",
    },
    type: "entertainment",
    day: "Sunday",
  },
  {
    from: new Date("2025-08-03 12:15:00"),
    to: new Date("2025-08-03 14:00:00"),
    location: "Mondhain",
    name: {
      en: "Dismantling Party",
      de: "Abbau-Party",
    },
    description: {
      en: "The Glitter Goblins are low on stamina and need your heroic help to turn the forest back into, well... a forest. Join the Dismantling Party – because taking down tents together is the new afterparty.",
      de: "Die Glitter Goblins sind erschöpft und brauchen heldenhafte Hilfe, um den Zauberwald wieder in seinen Ursprungszustand zu bringen. Kommt zur Abbau-Party – gemeinsam abbauen ist das neue Rave-Cooldown.",
    },
    type: "entertainment",
    day: "Sunday",
  },
];

export const LOCATIONS = [
  "Mondhain",
  "SchMaus & Trunk",
  "Workshop-Oase",
  "Wurzelwerk",
  "Spielwiese",
];

export const groupActsByTime = (
  acts: Act[],
  locale: string
): Map<string, Act[]> => {
  const map = new Map<string, Act[]>();
  acts.forEach((act) => {
    const shortWeekday = act.from.toLocaleDateString(locale, {
      weekday: "short",
    });
    const time = `${shortWeekday} - ${act.from.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    if (!map.has(time)) map.set(time, []);
    map.get(time)!.push(act);
  });
  return map;
};

export const toTime = (time: Date) => {
  return `${time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};
