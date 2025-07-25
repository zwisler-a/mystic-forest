export interface Act {
    from: Date;
    to: Date;
    location: string;
    name: string;
    artist?:string;
    description?: {
        en: string;
        de: string;
    };
    comment?: string;
    language?: string;
    bring?:string;
}

export const acts: Act[] = [
    {
        from: new Date('2025-07-25T18:00:00'),
        to: new Date('2025-07-25T19:00:00'),
        location: 'Mondhain',
        name: `Playlist`,
    },
    {
        from: new Date('2025-07-25T20:00:00'),
        to: new Date('2025-07-25T21:00:00'),
        location: 'Mondhain',
        name: `Introrede + Kennenlernbingo + Zettel verteilen`,
    },
    {
        from: new Date('2025-07-25T21:00:00'),
        to: new Date('2025-07-25T22:00:00'),
        location: 'Mondhain',
        name: `Ambient Music by Spatzi`,
    },
    {
        from: new Date('2025-07-25T22:00:00'),
        to: new Date('2025-07-26T00:00:00'),
        location: 'Mondhain',
        name: `Open Decks`,
    },
    {
        from: new Date('2025-07-26T09:00:00') ,
        to: new Date('2025-07-26T10:00:00'),
        location: 'Mondhain',
        name: `Background musik`,
    },
    {
        from: new Date('2025-07-26T13:30:00'),
        to: new Date('2025-07-26T14:00:00'),
        location: 'Mondhain',
        name: `Music Production Basics mit Strootmann`,
        artist: `Sebastian Strootmann`,
        description: {
            en: `Discover the magic of music production without a computer and learn how to bring your own tracks to life in a DJ set – complete with live gear, looping tricks, and even a Theremin! From knobs to dancefloor in one session.`,
            de: `Beats ohne Bildschirm – Live & Analog!
Erlebe, wie Musikproduktion ganz ohne Computer funktioniert – und wie du deine eigenen Tracks live ins DJ-Set bringst. Mit dabei: Drum Machines, Looping, jede Menge Knöpfe… und ein Theremin! Von der Idee direkt auf die Tanzfläche.`
        },
        language: `DE/EN`,
        bring: `Eigene Instrumente, falls ihr sie habt`,
    },
    {
        from: new Date('2025-07-26T14:30:00'),
        to: new Date('2025-07-26T15:00:00'),
        location: 'Mondhain',
        name: `Die zwei Schoenen vom See`,
        artist: `Karin & Christel Schoenen`,
        description: {
            en: `Have you met Paula Becker yet?
The artificial flower florist from Jülich comes loaded with plenty of juicy gossip – and of course, some stories about the hosts too! She performs together with Stina, who brings some beautiful little songs with her.`,
            de: `Kennt ihr schon Paula Becker? Die Kunstblumenfloristikerin aus Jülich hat jede Menge Klatsch & Tratsch dabei - natürlich auch über die Gastgeberinnen. Sie performt gemeinsam mit Stina - die ein paar tolle Lieder dabei hat.`
        },
        language: `DE`,
    },
    {
        from: new Date('2025-07-26T15:00:00'),
        to: new Date('2025-07-26T15:30:00'),
        location: 'Mondhain',
        name: `Trash Disco Witch Leo`,
    },
    {
        from: new Date('2025-07-26T16:30:00'),
        to: new Date('2025-07-26T17:00:00'),
        location: 'Mondhain',
        name: `Jack, der schelm des Schattenpfads`,
    },
    {
        from: new Date('2025-07-26T18:00:00'),
        to: new Date('2025-07-26T18:30:00'),
        location: 'Mondhain',
        name: `Angie, die Walküre der Muse b2b Magic Shroom Melvin`,
        artist: `Karin & Christel Schoenen`,
        description: {
            en: `Have you met Paula Becker yet? The artificial flower florist from Jülich comes loaded with plenty of juicy gossip – and of course, some stories about the hosts too! She performs together with Stina, who brings some beautiful little songs with her.`,
            de: `Kennt ihr schon Paula Becker? Die Kunstblumenfloristikerin aus Jülich hat jede Menge Klatsch & Tratsch dabei - natürlich auch über die Gastgeberinnen. Sie performt gemeinsam mit Stina - die ein paar tolle Lieder dabei hat.`
        },
        language: `DE`,
    },
    {
        from: new Date('2025-07-26T21:00:00'),
        to: new Date('2025-07-26T21:30:00'),
        location: 'Mondhain',
        name: `Bass-Barde Basti vom Wurzelwerk`,
    },
    {
        from: new Date('2025-07-26T22:30:00'),
        to: new Date('2025-07-26T23:00:00'),
        location: 'Mondhain',
        name: `Bars Nebelhain`,
    },
    {
        from: new Date('2025-07-26T23:30:00'),
        to: new Date('2025-07-27T00:00:00'),
        location: 'Mondhain',
        name: `Bars Nebelhain`,
    },
    {
        from: new Date('2025-07-27T00:00:00'),
        to: new Date('2025-07-27T00:30:00'),
        location: 'Mondhain',
        name: `Schelmische Laubgeist Spatzi`,
    },
    {
        from: new Date('2025-07-27T01:30:00'),
        to: new Date('2025-07-27T02:00:00'),
        location: 'Mondhain',
        name: `Adrien Dämmerwind`,
    },
    {
        from: new Date('2025-07-27T12:00:00'),
        to: new Date('2025-07-27T13:00:00'),
        location: 'Mondhain',
        name: `Outro-Rede`,
    },
    {
        from: new Date('2025-07-27T12:00:00'),
        to: new Date('2025-07-27T12:00:00'),
        location: 'Mondhain',
        name: `Workshops`,
        artist: `Gerwin Intemann `,
        description: {
            en: `"Sick beard."
"This is a bit corny, but you are a-maize-ing."
"You are a truly great friend."

Remember that big smile your friend had the last time you gave them a compliment? 🤩

You'll walk out of this workshop with a cute collection of funny, cheesy, deep or meaningful give-away compliments inspired by everyone participating. Share your kindness and make somebody else smile this weekend! 🤭

German and English compliments welcome.

Max 25 people`,
            de: `„Starker Bart.“
„Du bist wirklich eine großartige Freundin / ein großartiger Freund.“

Erinnerst du dich an das große Lächeln deiner Freundin oder deines Freundes, als du ihnen das letzte Mal ein Kompliment gemacht hast? 🤩

In diesem Workshop gehst du mit einer kleinen, liebevoll zusammengestellten Sammlung an lustigen, kitschigen, tiefgründigen oder berührenden Komplimenten nach Hause – inspiriert von allen, die teilnehmen. Teile deine Freundlichkeit und bring dieses Wochenende jemand anderen zum Lächeln! 🤭

Komplimente auf Deutsch und Englisch sind willkommen.

Maximal 25 Teilnehmende.`
        },
        comment: `Ich übersetze auf Deutsch für alle, die Probleme mit dem Englischen haben!`,
        language: `EN (but translated)`,
        bring: `Nichts :) `,
    },
    {
        from: new Date('2025-07-20T12:00:00'),
        to: new Date('2025-07-20T12:00:00'),
        location: 'Mondhain',
        name: `Unterhaltung & mehr`,
        artist: `Tessy Tubert`,
        description: {
            en: `Light doesn’t just brighten things – it whispers, hides, reveals, and sets the mood. In this session, Tess, a passionate cinematographer, invites you to explore how light shapes the way we see and feel. Whether you're into photography, film, or just curious about the magic of images – come along! No fancy gear or experience needed – just open eyes, a bit of wonder, and the joy of experimenting with what light can do.`,
            de: `Licht kann viel mehr als nur hell machen – es flüstert, tanzt, versteckt und zeigt. In dieser Session nimmt Tess, Cinematografin aus Leidenschaft, euch mit auf eine kleine Reise durch die Welt von Licht, Schatten und Bildern. Ob du gern fotografierst, filmst oder einfach neugierig bist: Gemeinsam schauen wir, wie aus einem Gefühl ein Bild wird – und aus einem Bild vielleicht eine kleine Geschichte. Keine Vorkenntnisse, keine teure Kamera – nur Lust aufs Gucken, Staunen und Ausprobieren.`
        },
        language: `EN`,
    },
    {        from: new Date('2025-07-20T12:00:00'),
        to: new Date('2025-07-20T12:00:00'),
        location: 'Mondhain',
        name: `Verpflegung`,
    },
    {
        from: new Date('2025-07-25T22:00:00'),
        to: new Date('2025-07-25T23:00:00'),
        location: 'Wurzelwerk',
        name: `Playlist`,
    },
    {
        from: new Date('2025-07-26T00:00:00'),
        to: new Date('2025-07-26T02:00:00'),
        location: 'Wurzelwerk',
        name: `Open Decks`,
    },
    {
        from: new Date('2025-07-26T02:00:00'),
        to: new Date('2025-07-26T02:00:00'),
        location: 'Wurzelwerk',
        name: `Playlist`,
    },
    {
        from: new Date('2025-07-26T10:00:00'),
        to: new Date('2025-07-26T10:00:00'),
        location: 'Wurzelwerk',
        name: `Bars Heinrich`,
        artist: `Tessy Tubert`,
        description: {
            en: `Light doesn’t just brighten things – it whispers, hides, reveals, and sets the mood. In this session, Tess, a passionate cinematographer, invites you to explore how light shapes the way we see and feel. Whether you're into photography, film, or just curious about the magic of images – come along! No fancy gear or experience needed – just open eyes, a bit of wonder, and the joy of experimenting with what light can do.`,
            de: `Licht kann viel mehr als nur hell machen – es flüstert, tanzt, versteckt und zeigt. In dieser Session nimmt Tess, Cinematografin aus Leidenschaft, euch mit auf eine kleine Reise durch die Welt von Licht, Schatten und Bildern. Ob du gern fotografierst, filmst oder einfach neugierig bist: Gemeinsam schauen wir, wie aus einem Gefühl ein Bild wird – und aus einem Bild vielleicht eine kleine Geschichte. Keine Vorkenntnisse, keine teure Kamera – nur Lust aufs Gucken, Staunen und Ausprobieren.`
        },
        language: `EN`,
    },
    {
        from: new Date('2025-07-26T22:00:00'),
        to: new Date('2025-07-26T22:30:00'),
        location: 'Wurzelwerk',
        name: `Playlist`,
    },
    {
        from: new Date('2025-07-26T23:30:00'),
        to: new Date('2025-07-27T00:00:00'),
        location: 'Wurzelwerk',
        name: `Playlist`,
    },
    {
        to: new Date('2025-07-27T03:00:00'),
        from: new Date('2025-07-27T03:00:00'),
        location: 'Wurzelwerk',
        name: `Open Decks (Happy House)`,
    },
    {
        from: new Date('2025-07-26T00:00:00'),
        to: new Date('2025-07-26T01:00:00'),
        location: 'Workshop-Oase',
        name: `Akkordeon-Konzert (im Chillspace)`,
    },
    {
        from: new Date('2025-07-26T10:00:00'),
        to: new Date('2025-07-26T11:00:00'),
        location: 'Workshop-Oase',
        name: `Yoga/Movement/Sound mit Janina & Gunnar`,
    },
    {
        from: new Date('2025-07-26T11:00:00'),
        to: new Date('2025-07-26T12:00:00'),
        location: 'Workshop-Oase',
        name: `Komplimente-Workshop mit Gerwin`,
        artist: `Gerwin Intemann `,
        description: {
            en: `"Sick beard."
"This is a bit corny, but you are a-maize-ing."
"You are a truly great friend."

Remember that big smile your friend had the last time you gave them a compliment? 🤩

You'll walk out of this workshop with a cute collection of funny, cheesy, deep or meaningful give-away compliments inspired by everyone participating. Share your kindness and make somebody else smile this weekend! 🤭

German and English compliments welcome.

Max 25 people`,
            de: `„Starker Bart.“
„Du bist wirklich eine großartige Freundin / ein großartiger Freund.“

Erinnerst du dich an das große Lächeln deiner Freundin oder deines Freundes, als du ihnen das letzte Mal ein Kompliment gemacht hast? 🤩

In diesem Workshop gehst du mit einer kleinen, liebevoll zusammengestellten Sammlung an lustigen, kitschigen, tiefgründigen oder berührenden Komplimenten nach Hause – inspiriert von allen, die teilnehmen. Teile deine Freundlichkeit und bring dieses Wochenende jemand anderen zum Lächeln! 🤭

Komplimente auf Deutsch und Englisch sind willkommen.

Maximal 25 Teilnehmende.`
        },
        comment: `Ich übersetze auf Deutsch für alle, die Probleme mit dem Englischen haben!`,
        language: `EN (but translated)`,
        bring: `Nichts :) `,
    },
    {
        from: new Date('2025-07-26T13:00:00'),
        to: new Date('2025-07-26T13:30:00'),
        location: 'Workshop-Oase',
        name: `Fotografie & Licht mit Tess`,
    },
    {
        from: new Date('2025-07-26T15:00:00'),
        to: new Date('2025-07-26T15:30:00'),
        location: 'Workshop-Oase',
        name: `Kunstworkshop mit Ieva`,
        artist: `Gerwin Intemann `,
        description: {
            en: `"Sick beard."
"This is a bit corny, but you are a-maize-ing."
"You are a truly great friend."

Remember that big smile your friend had the last time you gave them a compliment? 🤩

You'll walk out of this workshop with a cute collection of funny, cheesy, deep or meaningful give-away compliments inspired by everyone participating. Share your kindness and make somebody else smile this weekend! 🤭

German and English compliments welcome.

Max 25 people`,
            de: `„Starker Bart.“
„Du bist wirklich eine großartige Freundin / ein großartiger Freund.“

Erinnerst du dich an das große Lächeln deiner Freundin oder deines Freundes, als du ihnen das letzte Mal ein Kompliment gemacht hast? 🤩

In diesem Workshop gehst du mit einer kleinen, liebevoll zusammengestellten Sammlung an lustigen, kitschigen, tiefgründigen oder berührenden Komplimenten nach Hause – inspiriert von allen, die teilnehmen. Teile deine Freundlichkeit und bring dieses Wochenende jemand anderen zum Lächeln! 🤭

Komplimente auf Deutsch und Englisch sind willkommen.

Maximal 25 Teilnehmende.`
        },
        comment: `Ich übersetze auf Deutsch für alle, die Probleme mit dem Englischen haben!`,
        language: `EN (but translated)`,
        bring: `Nichts :) `,
    },
    {
        from: new Date('2025-07-26T16:00:00'),
        to: new Date('2025-07-26T16:30:00'),
        location: 'Workshop-Oase',
        name: `Tattoos kleben mit Jenny & Angie`,
        artist: `Gunnar & Janina`,
        description: {
            en: `In this workshop, we invite you to connect with others in a playful and mindful way. Through simple connection games like partner sharing, eye gazing, and massage, we create a space for new encounters – one-on-one and in the group. The workshop is open to everyone – all you need is a bit of curiosity, openness, and a willingness to engage in new connections. :)
We’re looking forward to seeing you! Janina & Gunnar `,
            de: `In/m Kontakt – Begegnung, Austausch & Massage
In diesem Workshop laden wir dich ein, auf spielerische und achtsame Weise mit anderen in Kontakt zu treten. Durch kleine Verbindungsspiele wie Austausch in Zweier-Settings, Eye Gazing und Massage schaffen wir einen Raum für neue Begegnungen zu zweit und in der Gruppe. Der Workshop ist offen für alle - du brauchst nur etwas Neugier, Offenheit und die Bereitschaft, dich auf neue Begegnungen einzulassen. :) Wir freuen uns! Janina & Gunnar `
        },
        comment: `Gerne von Anfang an dabei sein, so schaffen wir einen besseren, gehaltereren Raum. Es wäre wahrscheinlich gut, wenn dieser Workshop eher zu Beginn des Wochenendes stattfindet (SA, vormittag?) - ein etwas abgelegener Ort wäre toll. `,
        language: `DE/EN`,
        bring: `Bequeme Klamotten & Offenheit, gerne Decke oder etwas zum sitzen `,
    },
    {
        from: new Date('2025-07-26T18:00:00'),
        to: new Date('2025-07-26T18:30:00'),
        location: 'Workshop-Oase',
        name: `Jam-Session Rene (im Chillspace)`,
        artist: `Rene`,
        description: {
            en: `Bring your instruments and come jam with me!
We’ve got a few guitars, shakers, and more – but feel free to bring your own!`,
            de: `Bringt eure Instrumente mit und jamt mit mir! Wir haben ein paar Gitarren, Rasseln etc. da - bring your own!`
        },
        language: `DE/EN`,
    },
    {
        from: new Date('2025-07-26T19:00:00'),
        to: new Date('2025-07-26T19:30:00'),
        location: 'Workshop-Oase',
        name: `Hubi-Turm bauen mit Biene & Faxe`,
        artist: `Biene Wolters`,
        description: {
            en: `Dare to take on the Hubi Tower!
Test your skill, balance, and nerves—who can stack the highest without the whole thing crashing down? Of course, fueled by plenty of Hubertus spirit!`,
            de: `Wagt euch an den Hubi-Turm und testet eure Geschicklichkeit, Balance und Nerven beim Stapeln & Trinken von Hubertustropfen! Wer stapelt am höchsten, ohne dass alles krach macht?`
        },
        language: `DE/EN`,
    },
    {
        from: new Date('2025-07-26T12:00:00'),
        to: new Date('2025-07-26T13:00:00'),
        location: 'Spielwiese',
        name: `Spiele-Olympiade mit Esther & Clara`,
        artist: `Clara & Esther Schragmann`,
        description: {
            en: `Grab your team and dive into wild battles and hilarious challenges at our Games Olympics. Glory, bragging rights, and fantastic prizes await… and maybe a bit of grass in your hair.
`,
            de: `Bei unserer Spieleolympiade geht’s rund: Schnappt euch euer Team, stürzt euch in wilde Kämpfe. Ruhm, Ehre und fantastische Preise warten… und vielleicht ein bisschen Gras im Haar.`
        },
        comment: `Bitte pünktlich sein - wir teilen die Teams zu Beginn ein :-)`,
        language: `DE/EN`,
        bring: `Getränke, Spaß, bequeme Klamotten und gute Laune! `,
    },
    {
        from: new Date('2025-07-26T14:00:00'),
        to: new Date('2025-07-26T14:30:00'),
        location: 'Spielwiese',
        name: `Wikingerschach / Cornhole & Co.`,
        artist: `Marie Behling`,
        description: {
            en: `Team Spirit, Tactics & Triumph!
It's game time with outdoor classics like Kubb (Viking Chess), Cornhole & more. Precision meets pure fun, and with 8+ players, the vibes are legendary. Gather, toss, conquer!`,
            de: `Bei Wikingerschach, Cornhole & Co. geht’s um Präzision, Spaß und das gewisse Wurf-Gefühl. Ab 8 Leuten wird’s richtig episch – also: sammeln, werfen, siegen!`
        },
        comment: `Flexibel teilnehmen ist möglich!`,
        language: `DE/EN`,
        bring: `Spaß!`,
    },
    {
        from: new Date('2025-07-26T15:00:00'),
        to: new Date('2025-07-26T16:00:00'),
        location: 'Spielwiese',
        name: `Wikingerschach / Cornhole & Co.`,
        artist: `Marie Behling`,
        description: {
            en: `Team Spirit, Tactics & Triumph!
It's game time with outdoor classics like Kubb (Viking Chess), Cornhole & more. Precision meets pure fun, and with 8+ players, the vibes are legendary. Gather, toss, conquer!`,
            de: `Bei Wikingerschach, Cornhole & Co. geht’s um Präzision, Spaß und das gewisse Wurf-Gefühl. Ab 8 Leuten wird’s richtig episch – also: sammeln, werfen, siegen!`
        },
        comment: `Flexibel teilnehmen ist möglich!`,
        language: `DE/EN`,
        bring: `Spaß!`,
    },
    {
        from: new Date('2025-07-26T16:00:00'),
        to: new Date('2025-07-26T18:00:00'),
        location: 'Spielwiese',
        name: `Flunkyball + Ragecage Turnier`,
        artist: `Nils Voiges`,
        description: {
            en: `Thirsty for some action?
I'm setting up a Flunkyball and Rage Cage field! Everyone's welcome to jump in for spontaneous games – and if there’s enough interest, I’ll host a little Flunkyball tournament. Come by, bring your skills (and your thirst)!`,
            de: `Ich baue ein Flunkyball- und Ragecage-Spielfeld auf! Wer Bock hat, kann jederzeit spontan mitspielen – und wenn genug Interesse da ist, organisiere ich ein kleines Flunkyball-Turnier. Kommt vorbei, bringt eure Skills (und euren Durst) mit!`
        },
        comment: `Flexibel teilnehmen ist möglich!`,
        language: `Alkohol`,
        bring: `Durst`,
    },
    {
        from: new Date('2025-07-25T19:00:00'),
        to: new Date('2025-07-25T20:00:00'),
        location: 'Foodcourt1',
        name: `Open Buffet`,
    },
    {
        from: new Date('2025-07-26T20:00:00'),
        to: new Date('2025-07-26T20:30:00'),
        location: 'Foodcourt1',
        name: `Pizzapizza`,
        artist: `Clara & Esther Schragmann`,
        description: {
            en: `Grab your team and dive into wild battles and hilarious challenges at our Games Olympics. Glory, bragging rights, and fantastic prizes await… and maybe a bit of grass in your hair.`,
            de: `Bei unserer Spieleolympiade geht’s rund: Schnappt euch euer Team, stürzt euch in wilde Kämpfe. Ruhm, Ehre und fantastische Preise warten… und vielleicht ein bisschen Gras im Haar.`
        },
        comment: `Bitte pünktlich sein - wir teilen die Teams zu Beginn ein :-)`,
        language: `DE/EN`,
        bring: `Getränke, Spaß, bequeme Klamotten und gute Laune! `,
    },
    {
        from: new Date('2025-07-27T10:00:00'),
        to: new Date('2025-07-27T13:00:00'),
        location: 'Foodcourt1',
        name: `Coffee Special`,
    },
];

export const groupActsByTime = (): Map<string, Act[]> => {
    const map = new Map<string, Act[]>();
    acts.forEach((act) => {
        const shortWeekday = act.from.toLocaleDateString("en-US", { weekday: "short" });
        const time = `${shortWeekday} ${act.from.toLocaleTimeString([], {
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