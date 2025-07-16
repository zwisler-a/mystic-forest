import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                language: {
                    switch: "Zurück zu Deutsch",
                },
                a11y: {
                    highContrast: "Higher Contrast",
                    biggerText: "Bigger Text",
                },
                pwa: {
                    "install-request": "Do you want to make this available offline?",
                    accept: "Install App",
                    decline: "No, thank you",
                    install: "Install App",
                    install_ios_title: "Install App on iOS",
                    install_ios_step1: "Open this website in Safari.",
                    install_ios_step2: "Tap the settings button at the bottom of the screen.",
                    install_ios_step3: "Select 'Add to Home Screen' from the options.",
                },
                packing: {
                    title: "Packing list",
                    toothbrush: "Toothbrush",
                },
                map: {
                    legend: {
                        button: "Legend",
                        mondhain: "Mondhain",
                        wurzelwerk: "Wurzelwerk",
                        spielwiese: "Spielwiese",
                        workshopoase: "Workshop Oasis",
                        lagerfeuerplatz: "Campfire Area",
                        surprise: "Surprise",
                        bar: "Bar",
                        speisebereich: "Dining Area",
                        wasserbrunnen: "Water Fountain",
                        toilettenwagen: "Toilet Trailer",
                        muelltrennung: "Waste Sorting",
                        campervan: "Camper Van",
                        campingzelt: "Camping Tent",
                        parkplatz: "Parking"
                    }
                }
            }
        },
        de: {
            translation: {
                language: {
                    switch: "Switch to English",
                },
                a11y: {
                    highContrast: "Höherer Kontrast",
                    biggerText: "Größerer Text",
                },
                pwa: {
                    "install-request": "Willst du diese Seite auch ohne Internet benutzen?",
                    accept: "Installieren",
                    decline: "Nein, danke",
                    install: "App herunterladen",
                    install_ios_title: "App auf iOS installieren",
                    install_ios_step1: "Öffne diese Website in dem Browser deiner Wahl.",
                    install_ios_step2: "Tippe auf das Einstellungssymbol unten im Bildschirm.",
                    install_ios_step3: "Wähle 'Zum Home-Bildschirm' aus den Optionen.",
                },
                packing: {
                    title: "Packliste",
                    toothbrush: "Zahnbürste",
                },
                map: {
                    legend: {
                        button: "Legende",
                        mondhain: "Mondhain",
                        wurzelwerk: "Wurzelwerk",
                        spielwiese: "Spielwiese",
                        workshopoase: "Workshop Oase",
                        lagerfeuerplatz: "Lagerfeuerplatz",
                        surprise: "Surprise",
                        bar: "Bar",
                        speisebereich: "Speisebereich",
                        wasserbrunnen: "Wasserbrunnen",
                        toilettenwagen: "Toilettenwagen",
                        muelltrennung: "Mülltrennung",
                        campervan: "Camper Van",
                        campingzelt: "Camping Zelt",
                        parkplatz: "Parkplatz"
                    }
                }
            }
        }
    },
    lng: localStorage.getItem("language") || "de",
    fallbackLng: 'en',
    interpolation: {escapeValue: false},
});

export default i18n;
