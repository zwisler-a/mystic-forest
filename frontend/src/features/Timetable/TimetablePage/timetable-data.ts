export interface Act {
    from: Date;
    to: Date;
    location: string;
    name: string;
    description?: string;
}

export const acts: Act[] = [
    {
        from: new Date("2025-07-16T15:00:00"),
        to: new Date("2025-07-16T16:00:00"),
        description: 'High-energy electro-swing with live dancers',
        location: 'Wurzelhain',
        name: 'The Electric Gatsbys'
    },
    {
        from: new Date("2025-07-16T16:00:00"),
        to: new Date("2025-07-16T17:00:00"),
        description: 'Interactive percussion jam session for all ages',
        location: 'Drum Circle Arena',
        name: 'Rhythm Roots'
    },
    {
        from: new Date("2025-07-16T18:00:00"),
        to: new Date("2025-07-16T20:00:00"),
        description: 'Psychedelic rock infused with didgeridoo and visuals',
        location: 'Mushroom Stage',
        name: 'Echoes of Gaia'
    },
    {
        from: new Date("2025-07-16T18:00:00"),
        to: new Date("2025-07-16T20:00:00"),
        description: 'Aerial acrobatics with live ambient harp music',
        location: 'Sky Meadow',
        name: 'Cirque Astralis'
    },
    {
        from: new Date("2025-07-16T18:00:00"),
        to: new Date("2025-07-16T20:00:00"),
        description: 'Fire dance troupe with tribal techno beats',
        location: 'Inferno Ring',
        name: 'Flame Pulse'
    },
    {
        from: new Date("2025-07-16T18:00:00"),
        to: new Date("2025-07-16T20:00:00"),
        description: 'Experimental jazz fusion with holographic visuals',
        location: 'Nebula Dome',
        name: 'Sonic Prism'
    },
    {
        from: new Date("2025-07-16T18:00:00"),
        to: new Date("2025-07-16T20:00:00"),
        description: 'Indie folk storytelling with puppetry performance',
        location: 'Whispering Pines',
        name: 'Maple & Thread'
    },
    {
        from: new Date("2025-07-16T18:00:00"),
        to: new Date("2025-07-16T20:00:00"),
        description: 'Dark synthwave paired with cyberpunk projection art',
        location: 'Voltage Hall',
        name: 'Neon Basilica'
    },
    {
        from: new Date("2025-07-16T18:00:00"),
        to: new Date("2025-07-16T20:00:00"),
        description: 'Live painting battle with improvised funk soundtrack',
        location: 'Canvas Plaza',
        name: 'Color Clash'
    },
    {
        from: new Date("2025-07-16T18:00:00"),
        to: new Date("2025-07-16T20:00:00"),
        description: 'Acid house revival with retro arcade ambiance',
        location: 'Pixel Tunnel',
        name: '909 Knights'
    },
    {
        from: new Date("2025-07-16T18:00:00"),
        to: new Date("2025-07-16T20:00:00"),
        description: 'Ambient drone set with guided meditative visuals',
        location: 'Zen Circle',
        name: 'Stillwater Transmission'
    },
    {
        from: new Date("2025-07-16T20:00:00"),
        to: new Date("2025-07-16T21:00:00"),
        description: 'Futuristic opera with AI-generated vocal harmonies',
        location: 'Starlight Theater',
        name: 'Operabotica'
    },
    {
        from: new Date("2025-07-16T20:00:00"),
        to: new Date("2025-07-16T21:00:00"),
        description: 'Spoken word poetry clash with beatbox accompaniment',
        location: 'Verse Vault',
        name: 'Word Forge'
    },
    {
        from: new Date("2025-07-16T20:00:00"),
        to: new Date("2025-07-16T21:00:00"),
        description: 'Glow-in-the-dark techno yoga experience',
        location: 'Lumina Lawn',
        name: 'Flex & Frequencies'
    },
]


export const groupActsByTime = (): Map<string, Act[]> => {
    const map = new Map<string, Act[]>();
    acts.forEach((act) => {
        const time = `${act.from.toLocaleTimeString([], {
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