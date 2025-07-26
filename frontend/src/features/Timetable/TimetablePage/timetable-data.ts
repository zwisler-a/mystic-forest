export interface Act {
    from: Date;
    to: Date;
    location: string;
    name: string;
    artist?: string;
    description?: {
        en: string;
        de: string;
    };
    comment?: string;
    language?: string;
    bring?: string;
    type?: string;
}

export const actList: Act[] = [
    {
        "from": new Date("2025-08-01 18:00:00"),
        "to": new Date("2025-08-01 20:00:00"),
        "location": "Mondhain",
        "name": "Playlist",
        "type": "music"
    },
    {
        "from": new Date("2025-08-01 20:00:00"),
        "to": new Date("2025-08-01 21:00:00"),
        "location": "Mondhain",
        "name": "Introrede + Kennenlernbingo + Zettel verteilen",
        "artist": "Kiara, Anki, Hannah",
        "type": "entertainment"
    },
    {
        "from": new Date("2025-08-01 21:00:00"),
        "to": new Date("2025-08-01 22:00:00"),
        "location": "Mondhain",
        "name": "Ambient Music by Spatzi",
        "artist": "Spatzi",
        "type": "music"
    },
    {
        "from": new Date("2025-08-01 22:00:00"),
        "to": new Date("2025-08-02 00:00:00"),
        "location": "Mondhain",
        "name": "Open Decks",
        "type": "music"
    },
    {
        "from": new Date("2025-08-01 22:00:00"),
        "to": new Date("2025-08-01 00:00:00"),
        "location": "Wurzelwerk",
        "name": "Playlist",
        "type": "music"
    },
    {
        "from": new Date("2025-08-02 00:00:00"),
        "to": new Date("2025-08-02 02:00:00"),
        "location": "Wurzelwerk",
        "name": "Open Decks",
        "type": "music"
    },
    {
        "from": new Date("2025-08-02 02:00:00"),
        "to": new Date("2025-08-02 03:00:00"),
        "location": "Wurzelwerk",
        "name": "Playlist",
        "type": "music"
    },
    {
        "from": new Date("2025-08-02 00:00:00"),
        "to": new Date("2025-08-02 01:00:00"),
        "location": "Workshop-Oase",
        "name": "Waldkonzert-Konzert mit Akkordeon ",
        "artist": "Michael Hinze",
        "description": {
            "en": "Forest Solitude & Accordion Sounds\nA musical pause in nature: enjoy the warm tones of the accordion surrounded by trees, birdsong, and the quiet togetherness of the forest. A moment of stillness, music, and connection in the middle of the festival buzz.",
            "de": "Waldeinsamkeit trifft Akkordeonklang\nEin musikalischer Moment mitten im Grünen: Genießt die Magie des Akkordeons im Wald, umgeben von Bäumen, Vogelstimmen und gemeinsamer Stille. Musik, Natur und Gemeinschaft – ein kleines Innehalten im Trubel des Festivals."
        },
        "language": "DE/EN",
        "bring": "evtl. eine Decke",
        "type": "music"
    },
    {
        "from": new Date("2025-08-01 18:00:00"),
        "to": new Date("2025-08-01 19:00:00"),
        "location": "Schmaus & Trunk",
        "name": "Aperol Happy Hour",
        "type": "food"
    },
    {
        "from": new Date("2025-08-01 19:00:00"),
        "to": new Date("2025-08-01 22:00:00"),
        "location": "Schmaus & Trunk",
        "name": "Open Buffet",
        "type": "food"
    },
    {
        "from": new Date("2025-08-01 18:00:00"),
        "to": new Date("2025-08-02 03:00:00"),
        "location": "Schmaus & Trunk",
        "name": "Open Bar",
        "type": "food"
    },
    {
        "from": new Date("2025-08-02 13:30:00"),
        "to": new Date("2025-08-02 14:30:00"),
        "location": "Mondhain",
        "name": "Music Production Basics",
        "artist": "Sebastian Strootmann",
        "description": {
            "en": "Discover the magic of music production without a computer and learn how to bring your own tracks to life in a DJ set – complete with live gear, looping tricks, and even a Theremin! From knobs to dancefloor in one session.",
            "de": "Beats ohne Bildschirm – Live & Analog!\nErlebe, wie Musikproduktion ganz ohne Computer funktioniert – und wie du deine eigenen Tracks live ins DJ-Set bringst. Mit dabei: Drum Machines, Looping, jede Menge Knöpfe… und ein Theremin! Von der Idee direkt auf die Tanzfläche."
        },
        "language": "DE/EN",
        "bring": "Eigene Instrumente, falls ihr sie habt",
        "type": "workshop"
    },
    {
        "from": new Date("2025-08-02 14:30:00"),
        "to": new Date("2025-08-02 15:00:00"),
        "location": "Mondhain",
        "name": "Varieté mit den zwei Schoenen vom See",
        "artist": "Karin & Christel Schoenen",
        "description": {
            "en": "Have you met Paula Becker yet?\nThe artificial flower florist from Jülich comes loaded with plenty of juicy gossip – and of course, some stories about the hosts too! She performs together with Stina, who brings some beautiful little songs with her.",
            "de": "Kennt ihr schon Paula Becker? Die Kunstblumenfloristikerin aus Jülich hat jede Menge Klatsch & Tratsch dabei - natürlich auch über die Gastgeberinnen. Sie performt gemeinsam mit Stina - die ein paar tolle Lieder dabei hat."
        },
        "language": "DE",
        "type": "music"
    },
    {
        "from": new Date("2025-08-02 15:00:00"),
        "to": new Date("2025-08-02 16:30:00"),
        "location": "Mondhain",
        "name": "Trash Disco Witch Leo",
        "artist": "Leo real DJ Name",
        "type": "music"
    },
    {
        "from": new Date("2025-08-02 16:30:00"),
        "to": new Date("2025-08-02 18:00:00"),
        "location": "Mondhain",
        "name": "Jack, der Schelm des Schattenpfads",
        "artist": "",
        "type": "music"
    },
    {
        "from": new Date("2025-08-02 18:00:00"),
        "to": new Date("2025-08-02 21:00:00"),
        "location": "Mondhain",
        "name": "Angie, die Walküre der Muse b2b Magic Shroom Melvin",
        "artist": "",
        "type": "music"
    },
    {
        "from": new Date("2025-08-02 21:00:00"),
        "to": new Date("2025-08-02 22:30:00"),
        "location": "Mondhain",
        "name": "Bass-Barde Basti vom Wurzelwerk",
        "artist": "",
        "type": "music"
    },
    {
        "from": new Date("2025-08-02 22:30:00"),
        "to": new Date("2025-08-03 00:00:00"),
        "location": "Mondhain",
        "name": "Bars Nebelhain",
        "artist": "",
        "type": "music"
    },
    {
        "from": new Date("2025-08-03 00:00:00"),
        "to": new Date("2025-08-03 01:30:00"),
        "location": "Mondhain",
        "name": "Schelmischer Laubgeist Spatzi",
        "artist": "",
        "type": "music"
    },
    {
        "from": new Date("2025-08-03 01:30:00"),
        "to": new Date("2025-08-03 03:00:00"),
        "location": "Mondhain",
        "name": "Adrien Dämmerwind",
        "artist": "",
        "type": "music"
    },
    {
        "from": new Date("2025-08-02 22:00:00"),
        "to": new Date("2025-08-03 03:00:00"),
        "location": "Wurzelwerk",
        "name": "Playlist",
        "artist": "",
        "type": "music"
    },
    {
        "from": new Date("2025-08-03 03:00:00"),
        "to": new Date("2025-08-03 06:00:00"),
        "location": "Wurzelwerk",
        "name": "Open Decks (Happy House)",
        "artist": "",
        "type": "music"
    },
    {
        "from": new Date("2025-08-02 10:00:00"),
        "to": new Date("2025-08-02 11:00:00"),
        "location": "Workshop-Oase",
        "name": "Im Kontakt – Begegnung, Austausch & Massage",
        "artist": "Gunnar & Janina",
        "description": {
            "en": "In this workshop, we invite you to connect with others in a playful and mindful way. Through simple connection games like partner sharing, eye gazing, and massage, we create a space for new encounters – one-on-one and in the group. The workshop is open to everyone – all you need is a bit of curiosity, openness, and a willingness to engage in new connections. :)\nWe’re looking forward to seeing you! Janina & Gunnar ",
            "de": "In/m Kontakt – Begegnung, Austausch & Massage\nIn diesem Workshop laden wir dich ein, auf spielerische und achtsame Weise mit anderen in Kontakt zu treten. Durch kleine Verbindungsspiele wie Austausch in Zweier-Settings, Eye Gazing und Massage schaffen wir einen Raum für neue Begegnungen zu zweit und in der Gruppe. Der Workshop ist offen für alle - du brauchst nur etwas Neugier, Offenheit und die Bereitschaft, dich auf neue Begegnungen einzulassen. :) Wir freuen uns! Janina & Gunnar "
        },
        "comment": "Gerne von Anfang an dabei sein, so schaffen wir einen besseren, gehaltereren Raum. Es wäre wahrscheinlich gut, wenn dieser Workshop eher zu Beginn des Wochenendes stattfindet (SA, vormittag?) - ein etwas abgelegener Ort wäre toll. ",
        "language": "DE/EN",
        "bring": "Bequeme Klamotten & Offenheit, gerne Decke oder etwas zum sitzen ",
        "type": "workshop"
    },
    {
        "from": new Date("2025-08-02 11:00:00"),
        "to": new Date("2025-08-02 11:45:00"),
        "location": "Workshop-Oase",
        "name": "Komplimente-Workshop",
        "artist": "Gerwin Intemann ",
        "description": {
            "en": "\"Sick beard.\"\n\"This is a bit corny, but you are a-maize-ing.\"\n\"You are a truly great friend.\"\n\nRemember that big smile your friend had the last time you gave them a compliment? 🤩\n\nYou'll walk out of this workshop with a cute collection of funny, cheesy, deep or meaningful give-away compliments inspired by everyone participating. Share your kindness and make somebody else smile this weekend! 🤭\n\nGerman and English compliments welcome.\n\nMax 25 people",
            "de": "„Starker Bart.“\n„Du bist wirklich eine großartige Freundin / ein großartiger Freund.“\n\nErinnerst du dich an das große Lächeln deiner Freundin oder deines Freundes, als du ihnen das letzte Mal ein Kompliment gemacht hast? 🤩\n\nIn diesem Workshop gehst du mit einer kleinen, liebevoll zusammengestellten Sammlung an lustigen, kitschigen, tiefgründigen oder berührenden Komplimenten nach Hause – inspiriert von allen, die teilnehmen. Teile deine Freundlichkeit und bring dieses Wochenende jemand anderen zum Lächeln! 🤭\n\nKomplimente auf Deutsch und Englisch sind willkommen.\n\nMaximal 25 Teilnehmende."
        },
        "comment": "Ich übersetze auf Deutsch für alle, die Probleme mit dem Englischen haben!",
        "language": "EN (but translated)",
        "bring": "Nichts :) ",
        "type": "workshop"
    },
    {
        "from": new Date("2025-08-02 13:00:00"),
        "to": new Date("2025-08-02 14:00:00"),
        "location": "Workshop-Oase",
        "name": "Capturing light",
        "artist": "Tessy Tubert",
        "description": {
            "en": "Light doesn’t just brighten things – it whispers, hides, reveals, and sets the mood. In this session, Tess, a passionate cinematographer, invites you to explore how light shapes the way we see and feel. Whether you're into photography, film, or just curious about the magic of images – come along! No fancy gear or experience needed – just open eyes, a bit of wonder, and the joy of experimenting with what light can do.",
            "de": "Licht kann viel mehr als nur hell machen – es flüstert, tanzt, versteckt und zeigt. In dieser Session nimmt Tess, Cinematografin aus Leidenschaft, euch mit auf eine kleine Reise durch die Welt von Licht, Schatten und Bildern. Ob du gern fotografierst, filmst oder einfach neugierig bist: Gemeinsam schauen wir, wie aus einem Gefühl ein Bild wird – und aus einem Bild vielleicht eine kleine Geschichte. Keine Vorkenntnisse, keine teure Kamera – nur Lust aufs Gucken, Staunen und Ausprobieren."
        },
        "language": "EN",
        "type": "workshop"
    },
    {
        "from": new Date("2025-08-02 15:00:00"),
        "to": new Date("2025-08-02 16:00:00"),
        "location": "Workshop-Oase",
        "name": "Color Flow – Gemeinsames Malen",
        "artist": "Ieva Laukyte",
        "description": {
            "en": "A playful painting session full of surprises: In this session, we swap canvases every 10 minutes and continue what others have started. The result? A vibrant, collective artwork shaped by many hands – spontaneous, inspiring, and fun.\n",
            "de": "Ein kreatives Spiel mit Pinseln und Perspektiven: In dieser Session tauschen wir alle 10 Minuten die Leinwände und malen auf dem weiter, was andere begonnen haben. So entsteht ein lebendiges Gemeinschaftswerk – spontan, überraschend, verbindend.\n\n"
        },
        "language": "DE/EN",
        "bring": "Drinks :) maybe a sound box?",
        "type": "workshop"
    },
    {
        "from": new Date("2025-08-02 16:00:00"),
        "to": new Date("2025-08-02 17:30:00"),
        "location": "Workshop-Oase",
        "name": "Tattoo & Glitzer-Station",
        "artist": "Angelina Hoppe",
        "description": {
            "en": "✨ Tritt ein ins Glitzer-Portal! ✨\nLass dich von unseren Waldfeen verzieren – mit Glitzer, Glanz und funkelnden Tattoos. 100 % Magie, 0 % Reue. 🧚‍♀️🌲💫",
            "de": "✨ Enter the Sparkle Portal! ✨\nGet glitterfied and tattooed by forest fairies — 100% magic, 0% regrets. 🧚‍♀️🌲💫"
        },
        "language": "DE/EN",
        "bring": "Sekt und gute Laune! ",
        "type": "entertainment"
    },
    {
        "from": new Date("2025-08-02 18:00:00"),
        "to": new Date("2025-08-02 19:00:00"),
        "location": "Workshop-Oase",
        "name": "Jam Session",
        "artist": "René",
        "description": {
            "en": "Bring your instruments and come jam with me!\nWe’ve got a few guitars, shakers, and more – but feel free to bring your own!",
            "de": "Bringt eure Instrumente mit und jamt mit mir! Wir haben ein paar Gitarren, Rasseln etc. da - bring your own!"
        },
        "language": "DE/EN",
        "type": "music"
    },
    {
        "from": new Date("2025-08-02 19:00:00"),
        "to": new Date("2025-08-02 19:30:00"),
        "location": "Workshop-Oase",
        "name": "Hubi Turm bauen",
        "artist": "Biene & Faxe",
        "description": {
            "en": "Dare to take on the Hubi Tower!\nTest your skill, balance, and nerves—who can stack the highest without the whole thing crashing down? Of course, fueled by plenty of Hubertus spirit!",
            "de": "Wagt euch an den Hubi-Turm und testet eure Geschicklichkeit, Balance und Nerven beim Stapeln & Trinken von Hubertustropfen! Wer stapelt am höchsten, ohne dass alles krach macht?"
        },
        "language": "DE/EN",
        "type": "workshop"
    },
    {
        "from": new Date("2025-08-02 12:00:00"),
        "to": new Date("2025-08-02 14:00:00"),
        "location": "Spielwiese",
        "name": "Spieleolympiade",
        "artist": "Clara & Esther Schragmann",
        "description": {
            "en": "Grab your team and dive into wild battles and hilarious challenges at our Games Olympics. Glory, bragging rights, and fantastic prizes await… and maybe a bit of grass in your hair.\n\n\n",
            "de": "Bei unserer Spieleolympiade geht’s rund: Schnappt euch euer Team, stürzt euch in wilde Kämpfe. Ruhm, Ehre und fantastische Preise warten… und vielleicht ein bisschen Gras im Haar."
        },
        "comment": "Bitte pünktlich sein - wir teilen die Teams zu Beginn ein :-)",
        "language": "DE/EN",
        "bring": "Getränke, Spaß, bequeme Klamotten und gute Laune! ",
        "type": "entertainment"
    },
    {
        "from": new Date("2025-08-02 14:00:00"),
        "to": new Date("2025-08-02 16:00:00"),
        "location": "Spielwiese",
        "name": "Wikinger Schach / Cornhole",
        "artist": "Marie Behling",
        "description": {
            "en": "Team Spirit, Tactics & Triumph!\nIt's game time with outdoor classics like Kubb (Viking Chess), Cornhole & more. Precision meets pure fun, and with 8+ players, the vibes are legendary. Gather, toss, conquer!",
            "de": "Bei Wikingerschach, Cornhole & Co. geht’s um Präzision, Spaß und das gewisse Wurf-Gefühl. Ab 8 Leuten wird’s richtig episch – also: sammeln, werfen, siegen!\n"
        },
        "comment": "Flexibel teilnehmen ist möglich!",
        "language": "DE/EN",
        "bring": "Spaß!",
        "type": "entertainment"
    },
    {
        "from": new Date("2025-08-02 16:00:00"),
        "to": new Date("2025-08-02 18:00:00"),
        "location": "Spielwiese",
        "name": "Flunkiball + Ragecage",
        "artist": "Nils Voiges",
        "description": {
            "en": "Thirsty for some action?\nI'm setting up a Flunkyball and Rage Cage field! Everyone's welcome to jump in for spontaneous games – and if there’s enough interest, I’ll host a little Flunkyball tournament. Come by, bring your skills (and your thirst)!",
            "de": "Ich baue ein Flunkyball- und Ragecage-Spielfeld auf! Wer Bock hat, kann jederzeit spontan mitspielen – und wenn genug Interesse da ist, organisiere ich ein kleines Flunkyball-Turnier. Kommt vorbei, bringt eure Skills (und euren Durst) mit!"
        },
        "comment": "Flexibel teilnehmen ist möglich!",
        "language": "Alkohol",
        "bring": "Durst",
        "type": "entertainment"
    },
    {
        "from": new Date("2025-08-02 10:00:00"),
        "to": new Date("2025-08-02 12:00:00"),
        "location": "Schmaus & Trunk",
        "name": "Coffee Special",
        "type": "food"
    },
    {
        "from": new Date("2025-08-02 14:00:00"),
        "to": new Date("2025-08-03 02:00:00"),
        "location": "Schmaus & Trunk",
        "name": "Open Bar",
        "type": "food"
    },
    {
        "from": new Date("2025-08-02 20:00:00"),
        "to": new Date("2025-08-02 21:00:00"),
        "location": "Schmaus & Trunk",
        "name": "Pizza",
        "type": "food"
    },
    {
        "from": new Date("2025-08-03 10:00:00"),
        "to": new Date("2025-08-03 12:00:00"),
        "location": "Schmaus & Trunk",
        "name": "Coffee Special",
        "type": "food"
    },
    {
        "from": new Date("2025-08-03 12:00:00"),
        "to": new Date("2025-08-03 12:15:00"),
        "location": "Mondhain",
        "name": "Outro",
        "artist": "Kiara, Anki, Hannah",
        "type": "entertainment"
    },
    {
        "from": new Date("2025-08-03 12:15:00"),
        "to": new Date("2025-08-03 14:00:00"),
        "location": "Mondhain",
        "name": "Abbau-Party",
        "type": "entertainment"
    }
];

export const groupActsByTime = (acts: Act[], locale: string): Map<string, Act[]> => {
    const map = new Map<string, Act[]>();
    acts.forEach((act) => {
        const shortWeekday = act.from.toLocaleDateString(locale, {weekday: "short"});
        const time = `${shortWeekday} - ${act.from.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        })}`;
        if (!map.has(time)) map.set(time, []);
        map.get(time)!.push(act);
    });
    return map;
};

export const toTime = (time: Date) => {
    return `${time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    })}`
}