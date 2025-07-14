import BackButton from "../../BackButton/BackButton";
import './SitePlanPage.css'
import ImageMap from "./ImageMap.tsx";
import Header from "../../Header/Header.tsx";
import {useState} from "react";

function SitePlanPage() {

    const [showLegend, setShowLegend] = useState(false);
    const [language, setLanguage] = useState<'de' | 'en'>("de");

    const legend = [
        {image: "/sitemap/Icon_Mondhain.png", title: {en: "Mondhain", de: "Mondhain"}, borderColor: '#FAF'},
        {image: "/sitemap/Icon_Wurzelwerk.png", title: {en: "Wurzelwerk", de: "Wurzelwerk"}, borderColor: '#6e5102'},
        {image: "/sitemap/Icon_Spielwiese.png", title: {en: "Spielwiese", de: "Spielwiese"}, borderColor: '#F00'},
        {
            image: "/sitemap/Icon_WorkshopOase.png",
            title: {en: "Workshop Oasis", de: "Workshop Oase"},
            borderColor: '#2265ff'
        },
        {image: "/sitemap/Icon_Lagerfeuerplatz.png", title: {en: "Campfire Area", de: "Lagerfeuerplatz"}},
        {image: "/sitemap/Icon_tbd.png", title: {en: "Surprise", de: "Surprise"}},
        {image: "/sitemap/Icon_Bar.png", title: {en: "Bar", de: "Bar"}},
        {image: "/sitemap/Icon_Speisebereich.png", title: {en: "Food Court", de: "Food Court"}},
        {image: "/sitemap/Icon_Wasserbrunnen.png", title: {en: "Water Fountain", de: "Wasserbrunnen"}},
        {image: "/sitemap/Icon_Toilettenwagen.png", title: {en: "Toilet", de: "Toiletten"}},
        {image: "/sitemap/Icon_Mülltrennung.png", title: {en: "Waste Station", de: "Müllstation"}},
        {image: "/sitemap/Icon_CamperVan.png", title: {en: "Car Camping", de: "Auto-Camping"}},
        {image: "/sitemap/Icon_CampingZelt.png", title: {en: "Tent Camping", de: "Zelt-Camping"}},
        {image: "/sitemap/Icon_Parkplatz_PKWohneSchlafenOnly.png", title: {en: "Parking", de: "Parkplatz"}},
    ];

    return (
        <>
            <BackButton/>
            <div className="spacer"></div>
            <Header/>


            <main className={"site-plan-page"}>
                <ImageMap/>

                <div className={"legend"}>
                    <div className={'glass-effect container ' + (showLegend ? 'visible' : 'hidden')}>
                        {legend.map((item) => <div key={item.image}>
                            <img style={{borderColor: item.borderColor, borderWidth: item.borderColor ? '2px' : '1px'}}
                                 src={item.image} alt={item.title[language]}/>
                            {item.title[language]}
                        </div>)}
                        <span className={"language-toggle"} onClick={() => setLanguage(language == 'en' ? 'de' : 'en')}>
                           {language == 'en' ? 'Zurück zu Deutsch' : 'Switch to English'}
                        </span>
                    </div>

                    <button onClick={() => setShowLegend(prev => !prev)} className={"glass-effect"}>
                        {language == 'en' ? 'Legend' : 'Legende'}
                    </button>
                </div>

            </main>
        </>
    );
}

export default SitePlanPage;
