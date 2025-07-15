import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import { faqI18nEn } from '../../features/Faq/FaqPage/faq-en';

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
                faq: faqI18nEn,
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
                faq: {
                    test: <h1>asd</h1>
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
