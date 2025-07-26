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
}

export const actList: Act[] = [
  {
    from: new Date("2025-08-01 18:00:00"),
    to: new Date("2025-08-01 20:00:00"),
    location: "Mondhain",
    name: {
      en: "Playlist",
      de: "Playlist",
    },
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
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
  },
  {
    from: new Date("2025-08-01 21:00:00"),
    to: new Date("2025-08-01 22:00:00"),
    location: "Mondhain",
    name: {
      en: "Ambient Music by Spatzi",
      de: "Ambient Music by Spatzi",
    },
    artist: "Spatzi",
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-01 22:00:00"),
    to: new Date("2025-08-02 00:00:00"),
    location: "Mondhain",
    name: {
      en: "Open Decks",
      de: "Open Decks",
    },
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-01 22:00:00"),
    to: new Date("2025-08-01 00:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Playlist",
      de: "Playlist",
    },
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-02 00:00:00"),
    to: new Date("2025-08-02 02:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Open Decks",
      de: "Open Decks",
    },
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-02 02:00:00"),
    to: new Date("2025-08-02 03:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Playlist",
      de: "Playlist",
    },
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-02 00:00:00"),
    to: new Date("2025-08-02 01:00:00"),
    location: "Workshop-Oase",
    name: {
      en: "Forest Concert with Accordion",
      de: "Waldkonzert mit Akkordeon",
    },
    artist: "Michael Hinze",
    description: {
      en: "Forest Solitude & Accordion Sounds\nA musical pause in nature: enjoy the warm tones of the accordion surrounded by trees, birdsong, and the quiet togetherness of the forest. A moment of stillness, music, and connection in the middle of the festival buzz.",
      de: "Waldeinsamkeit trifft Akkordeonklang\nEin musikalischer Moment mitten im Grünen: Genießt die Magie des Akkordeons im Wald, umgeben von Bäumen, Vogelstimmen und gemeinsamer Stille. Musik, Natur und Gemeinschaft – ein kleines Innehalten im Trubel des Festivals.",
    },
    language: "DE/EN",
    bring: {
      en: "possibly a blanket",
      de: "evtl. eine Decke",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-01 18:00:00"),
    to: new Date("2025-08-01 19:00:00"),
    location: "Schmaus & Trunk",
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
  },
  {
    from: new Date("2025-08-01 19:00:00"),
    to: new Date("2025-08-01 22:00:00"),
    location: "Schmaus & Trunk",
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
  },
  {
    from: new Date("2025-08-01 18:00:00"),
    to: new Date("2025-08-02 03:00:00"),
    location: "Schmaus & Trunk",
    name: {
      en: "Open Bar",
      de: "Open Bar",
    },
    description: {
      en: "Our forest bar runs on donations—featuring cool soft drinks, refreshing white wine spritz and Aperol, plus beer and, for the brave, the occasional shot—all mixed and served by the enchanting Sip Squat.",
      de: "Unsere Waldbar läuft auf Spendenbasis – euch erwarten kühle Softdrinks, erfrischende Weißweinschorle und Aperol, dazu Bier und für die Mutigen auch der ein oder andere Shot – gemixt und gereicht vom zauberhaften Sip Squat.",
    },
    bring: {
      en: "Your own cup or glass 🍹 and a smile for the bar people :)",
      de: "Deinen eigenen Becher oder Glas 🍹 und ein Lächeln für die Bar-Menschen :)",
    },
    type: "food",
  },
  {
    from: new Date("2025-08-02 13:30:00"),
    to: new Date("2025-08-02 14:30:00"),
    location: "Mondhain",
    name: {
      en: "Music Production Basics",
      de: "Musikproduktions Grundlagen",
    },
    artist: "Sebastian Strootmann",
    description: {
      en: "Discover the magic of music production without a computer and learn how to bring your own tracks to life in a DJ set – complete with live gear, looping tricks, and even a Theremin! From knobs to dancefloor in one session.",
      de: "Beats ohne Bildschirm – Live & Analog!\nErlebe, wie Musikproduktion ganz ohne Computer funktioniert – und wie du deine eigenen Tracks live ins DJ-Set bringst. Mit dabei: Drum Machines, Looping, jede Menge Knöpfe… und ein Theremin! Von der Idee direkt auf die Tanzfläche.",
    },
    language: "DE/EN",
    bring: {
      en: "Own instruments, if you have them",
      de: "Eigene Instrumente, falls ihr sie habt",
    },
    type: "workshop",
  },
  {
    from: new Date("2025-08-02 14:30:00"),
    to: new Date("2025-08-02 15:00:00"),
    location: "Mondhain",
    name: {
      en: "Variety with the Two Shoes from the Lake",
      de: "Varieté mit den zwei Schoenen vom See",
    },
    artist: "Karin & Christel Schoenen",
    description: {
      en: "Have you met Paula Becker yet?\nThe artificial flower florist from Jülich comes loaded with plenty of juicy gossip – and of course, some stories about the hosts too! She performs together with Stina, who brings some beautiful little songs with her.",
      de: "Kennt ihr schon Paula Becker? Die Kunstblumenfloristikerin aus Jülich hat jede Menge Klatsch & Tratsch dabei - natürlich auch über die Gastgeberinnen. Sie performt gemeinsam mit Stina - die ein paar tolle Lieder dabei hat.",
    },
    language: "DE",
    type: "music",
  },
  {
    from: new Date("2025-08-02 15:00:00"),
    to: new Date("2025-08-02 16:30:00"),
    location: "Mondhain",
    name: {
      en: "Trash Disco Witch Leo",
      de: "Trash Disco Hexe Leo",
    },
    artist: "TBD",
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-02 16:30:00"),
    to: new Date("2025-08-02 18:00:00"),
    location: "Mondhain",
    name: {
      en: "Jack, the Rogue of the Shadow Path",
      de: "Jack, der Schelm des Schattenpfads",
    },
    artist: "TBD",
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-02 18:00:00"),
    to: new Date("2025-08-02 19:00:00"),
    location: "Schmaus & Trunk",
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
  },
  {
    from: new Date("2025-08-02 18:00:00"),
    to: new Date("2025-08-02 21:00:00"),
    location: "Mondhain",
    name: {
      en: "Angie, the Valkyrie of the Muse b2b Magic Shroom Melvin",
      de: "Angie, die Walküre der Muse b2b Magic Shroom Melvin",
    },
    artist: "TBD",
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
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
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-02 22:30:00"),
    to: new Date("2025-08-03 00:00:00"),
    location: "Mondhain",
    name: {
      en: "Bars Nebelhain",
      de: "Bars Nebelhain",
    },
    artist: "TBD",
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-03 00:00:00"),
    to: new Date("2025-08-03 01:30:00"),
    location: "Mondhain",
    name: {
      en: "Schelmischer Laubgeist Spatzi",
      de: "Schelmischer Laubgeist Spatzi",
    },
    artist: "TBD",
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-03 01:30:00"),
    to: new Date("2025-08-03 03:00:00"),
    location: "Mondhain",
    name: {
      en: "Adrien Dämmerwind",
      de: "Adrien Dämmerwind",
    },
    artist: "TBD",
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-02 22:00:00"),
    to: new Date("2025-08-03 03:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Playlist",
      de: "Playlist",
    },
    artist: "TBD",
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
  },
  {
    from: new Date("2025-08-03 03:00:00"),
    to: new Date("2025-08-03 06:00:00"),
    location: "Wurzelwerk",
    name: {
      en: "Open Decks (Happy House)",
      de: "Open Decks (Happy House)",
    },
    artist: "TBD",
    description: {
      en: "TBD",
      de: "TBD",
    },
    type: "music",
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
      en: "In this workshop, we invite you to connect with others in a playful and mindful way. Through simple connection games like partner sharing, eye gazing, and massage, we create a space for new encounters – one-on-one and in the group. The workshop is open to everyone – all you need is a bit of curiosity, openness, and a willingness to engage in new connections. :)\nWe’re looking forward to seeing you! Janina & Gunnar ",
      de: "In/m Kontakt – Begegnung, Austausch & Massage\nIn diesem Workshop laden wir dich ein, auf spielerische und achtsame Weise mit anderen in Kontakt zu treten. Durch kleine Verbindungsspiele wie Austausch in Zweier-Settings, Eye Gazing und Massage schaffen wir einen Raum für neue Begegnungen zu zweit und in der Gruppe. Der Workshop ist offen für alle - du brauchst nur etwas Neugier, Offenheit und die Bereitschaft, dich auf neue Begegnungen einzulassen. :) Wir freuen uns! Janina & Gunnar ",
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
  },
  {
    from: new Date("2025-08-02 11:00:00"),
    to: new Date("2025-08-02 11:45:00"),
    location: "Workshop-Oase",
    name: {
      en: "Compliment Workshop",
      de: "Komplimente-Workshop",
    },
    artist: "Gerwin Intemann ",
    description: {
      en: '"Sick beard."\n"This is a bit corny, but you are a-maize-ing."\n"You are a truly great friend."\n\nRemember that big smile your friend had the last time you gave them a compliment? 🤩\n\nYou\'ll walk out of this workshop with a cute collection of funny, cheesy, deep or meaningful give-away compliments inspired by everyone participating. Share your kindness and make somebody else smile this weekend! 🤭\n\nGerman and English compliments welcome.\n\nMax 25 people',
      de: "„Starker Bart.“\n„Du bist wirklich eine großartige Freundin / ein großartiger Freund.“\n\nErinnerst du dich an das große Lächeln deiner Freundin oder deines Freundes, als du ihnen das letzte Mal ein Kompliment gemacht hast? 🤩\n\nIn diesem Workshop gehst du mit einer kleinen, liebevoll zusammengestellten Sammlung an lustigen, kitschigen, tiefgründigen oder berührenden Komplimenten nach Hause – inspiriert von allen, die teilnehmen. Teile deine Freundlichkeit und bring dieses Wochenende jemand anderen zum Lächeln! 🤭\n\nKomplimente auf Deutsch und Englisch sind willkommen.\n\nMaximal 25 Teilnehmende.",
    },
    comment: {
      en: "I will translate into German for everyone who has problems with English!",
      de: "Ich übersetze auf Deutsch für alle, die Probleme mit dem Englischen haben!",
    },
    language: "EN (but translated)",
    bring: {
      en: "Nothing :) ",
      de: "Nichts :) ",
    },
    type: "workshop",
  },
  {
    from: new Date("2025-08-02 13:00:00"),
    to: new Date("2025-08-02 14:00:00"),
    location: "Workshop-Oase",
    name: {
      en: "Capturing light",
      de: "Licht einfangen",
    },
    artist: "Tessy Tubert",
    description: {
      en: "Light doesn’t just brighten things – it whispers, hides, reveals, and sets the mood. In this session, Tess, a passionate cinematographer, invites you to explore how light shapes the way we see and feel. Whether you're into photography, film, or just curious about the magic of images – come along! No fancy gear or experience needed – just open eyes, a bit of wonder, and the joy of experimenting with what light can do.",
      de: "Licht kann viel mehr als nur hell machen – es flüstert, tanzt, versteckt und zeigt. In dieser Session nimmt Tess, Cinematografin aus Leidenschaft, euch mit auf eine kleine Reise durch die Welt von Licht, Schatten und Bildern. Ob du gern fotografierst, filmst oder einfach neugierig bist: Gemeinsam schauen wir, wie aus einem Gefühl ein Bild wird – und aus einem Bild vielleicht eine kleine Geschichte. Keine Vorkenntnisse, keine teure Kamera – nur Lust aufs Gucken, Staunen und Ausprobieren.",
    },
    language: "EN",
    type: "workshop",
  },
  {
    from: new Date("2025-08-02 15:00:00"),
    to: new Date("2025-08-02 16:00:00"),
    location: "Workshop-Oase",
    name: {
      en: "Color Flow – Collaborative Painting",
      de: "Color Flow – Gemeinsames Malen",
    },
    artist: "Ieva Laukyte",
    description: {
      en: "A playful painting session full of surprises: In this session, we swap canvases every 10 minutes and continue what others have started. The result? A vibrant, collective artwork shaped by many hands – spontaneous, inspiring, and fun.\n",
      de: "Ein kreatives Spiel mit Pinseln und Perspektiven: In dieser Session tauschen wir alle 10 Minuten die Leinwände und malen auf dem weiter, was andere begonnen haben. So entsteht ein lebendiges Gemeinschaftswerk – spontan, überraschend, verbindend.\n\n",
    },
    language: "DE/EN",
    bring: {
      en: "Drinks :) maybe a sound box?",
      de: "Drinks :) maybe a sound box?",
    },
    type: "workshop",
  },
  {
    from: new Date("2025-08-02 16:00:00"),
    to: new Date("2025-08-02 17:30:00"),
    location: "Workshop-Oase",
    name: {
      en: "Tattoo & Glitter Station",
      de: "Tattoo & Glitzer-Station",
    },
    artist: "Angelina Hoppe",
    description: {
      en: "✨ Tritt ein ins Glitzer-Portal! ✨\nLass dich von unseren Waldfeen verzieren – mit Glitzer, Glanz und funkelnden Tattoos. 100 % Magie, 0 % Reue. 🧚‍♀️🌲💫",
      de: "✨ Enter the Sparkle Portal! ✨\nGet glitterfied and tattooed by forest fairies — 100% magic, 0% regrets. 🧚‍♀️🌲💫",
    },
    language: "DE/EN",
    bring: {
      en: "Sparkling wine and good mood!",
      de: "Sekt und gute Laune! ",
    },
    type: "entertainment",
  },
  {
    from: new Date("2025-08-02 18:00:00"),
    to: new Date("2025-08-02 19:00:00"),
    location: "Workshop-Oase",
    name: {
      en: "Jam Session",
      de: "Jam Session",
    },
    artist: "René",
    description: {
      en: "Bring your instruments and come jam with me!\nWe’ve got a few guitars, shakers, and more – but feel free to bring your own!",
      de: "Bringt eure Instrumente mit und jamt mit mir! Wir haben ein paar Gitarren, Rasseln etc. da - bring your own!",
    },
    language: "DE/EN",
    type: "music",
  },
  {
    from: new Date("2025-08-02 19:00:00"),
    to: new Date("2025-08-02 19:30:00"),
    location: "Workshop-Oase",
    name: {
      en: "Build the Hubi Tower",
      de: "Hubi Turm bauen",
    },
    artist: "Biene & Faxe",
    description: {
      en: "Dare to take on the Hubi Tower!\nTest your skill, balance, and nerves—who can stack the highest without the whole thing crashing down? Of course, fueled by plenty of Hubertus spirit!",
      de: "Wagt euch an den Hubi-Turm und testet eure Geschicklichkeit, Balance und Nerven beim Stapeln & Trinken von Hubertustropfen! Wer stapelt am höchsten, ohne dass alles krach macht?",
    },
    language: "DE/EN",
    type: "workshop",
  },
  {
    from: new Date("2025-08-02 12:00:00"),
    to: new Date("2025-08-02 14:00:00"),
    location: "Spielwiese",
    name: {
      en: "Games Olympics",
      de: "Spieleolympiade",
    },
    artist: "Clara & Esther Schragmann",
    description: {
      en: "Grab your team and dive into wild battles and hilarious challenges at our Games Olympics. Glory, bragging rights, and fantastic prizes await… and maybe a bit of grass in your hair.\n\n\n",
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
  },
  {
    from: new Date("2025-08-02 14:00:00"),
    to: new Date("2025-08-02 16:00:00"),
    location: "Spielwiese",
    name: {
      en: "Viking Chess / Cornhole",
      de: "Wikinger Schach / Cornhole",
    },
    artist: "Marie Behling",
    description: {
      en: "Team Spirit, Tactics & Triumph!\nIt's game time with outdoor classics like Kubb (Viking Chess), Cornhole & more. Precision meets pure fun, and with 8+ players, the vibes are legendary. Gather, toss, conquer!",
      de: "Bei Wikingerschach, Cornhole & Co. geht’s um Präzision, Spaß und das gewisse Wurf-Gefühl. Ab 8 Leuten wird’s richtig episch – also: sammeln, werfen, siegen!\n",
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
  },
  {
    from: new Date("2025-08-02 16:00:00"),
    to: new Date("2025-08-02 18:00:00"),
    location: "Spielwiese",
    name: {
      en: "Flunkiball + Ragecage",
      de: "Flunkiball + Ragecage",
    },
    artist: "Nils Voiges",
    description: {
      en: "Thirsty for some action?\nI'm setting up a Flunkyball and Rage Cage field! Everyone's welcome to jump in for spontaneous games – and if there’s enough interest, I’ll host a little Flunkyball tournament. Come by, bring your skills (and your thirst)!",
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
  },
  {
    from: new Date("2025-08-02 10:00:00"),
    to: new Date("2025-08-02 12:00:00"),
    location: "Schmaus & Trunk",
    name: {
      en: "Coffee Special",
      de: "Coffee Special",
    },
    description: {
      en: "Coffee is served by our lovely Sip Squat – freshly brewed, forest-warm, and just the right magic to start your day.",
      de: "Kaffee gibt’s von unserem lieben Sip Squat – frisch gebrüht, waldwarm und genau der richtige Zauber für den Start in den Tag.",
    },
    type: "food",
  },
  {
    from: new Date("2025-08-02 14:00:00"),
    to: new Date("2025-08-03 02:00:00"),
    location: "Schmaus & Trunk",
    name: {
      en: "Open Bar",
      de: "Open Bar",
    },
    description: {
      en: "Our forest bar runs on donations—featuring cool soft drinks, refreshing white wine spritz and Aperol, plus beer and, for the brave, the occasional shot—all mixed and served by the enchanting Sip Squat.",
      de: "Unsere Waldbar läuft auf Spendenbasis – euch erwarten kühle Softdrinks, erfrischende Weißweinschorle und Aperol, dazu Bier und für die Mutigen auch der ein oder andere Shot – gemixt und gereicht vom zauberhaften Sip Squat.",
    },
    bring: {
      en: "A smile for the bar people :)",
      de: "Ein Lächeln für die Bar-Menschen :)",
    },
    type: "food",
  },
  {
    from: new Date("2025-08-02 20:00:00"),
    to: new Date("2025-08-02 21:00:00"),
    location: "Schmaus & Trunk",
    name: {
      en: "Pizza",
      de: "Pizza",
    },
    description: {
      en: "A cozy pizza truck rolls into the forest and serves up warm, wood-fired goodness to fuel the evening magic.",
      de: "Ein gemütlicher Pizza-Wagen versorgt uns mit knuspriger, ofenfrischer Waldnahrung – perfekt für den Abend voller Zauber.",
    },
    type: "food",
  },
  {
    from: new Date("2025-08-03 10:00:00"),
    to: new Date("2025-08-03 12:00:00"),
    location: "Schmaus & Trunk",
    name: {
      en: "Coffee Special",
      de: "Coffee Special",
    },
    description: {
      en: "Coffee is served by our lovely Sip Squat – freshly brewed, forest-warm, and just the right magic to start your day.",
      de: "Kaffee gibt’s von unserem lieben Sip Squat – frisch gebrüht, waldwarm und genau der richtige Zauber für den Start in den Tag.",
    },
    type: "food",
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
  },
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
