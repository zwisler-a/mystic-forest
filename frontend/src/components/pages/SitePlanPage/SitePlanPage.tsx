import BackButton from "../../BackButton/BackButton";
import './SitePlanPage.css'
import ImageMap from "./ImageMap.tsx";
import Header from "../../Header/Header.tsx";
import {useState} from "react";

function SitePlanPage() {

    const [showLegend, setShowLegend] = useState(false);
    const [language, setLanguage] = useState<'de' | 'en'>("de");

    const legend = [
        {image: "/sitemap/Icon_Mondhain.png", title: {en: "Moon Grove", de: "Mondhain"}, borderColor: '#FAF'},
        {image: "/sitemap/Icon_Wurzelwerk.png", title: {en: "Root Network", de: "Wurzelwerk"}, borderColor: '#6e5102'},
        {image: "/sitemap/Icon_Spielwiese.png", title: {en: "Play Meadow", de: "Spielwiese"}, borderColor: '#F00'},
        {
            image: "/sitemap/Icon_WorkshopOase.png",
            title: {en: "Workshop Oasis", de: "Workshop Oase"},
            borderColor: '#2265ff'
        },
        {image: "/sitemap/Icon_Lagerfeuerplatz.png", title: {en: "Campfire Area", de: "Lagerfeuerplatz"}},
        {image: "/sitemap/Icon_tbd.png", title: {en: "Surprise", de: "Surprise"}},
        {image: "/sitemap/Icon_Bar.png", title: {en: "Bar", de: "Bar"}},
        {image: "/sitemap/Icon_Speisebereich.png", title: {en: "Dining Area", de: "Speisebereich"}},
        {image: "/sitemap/Icon_Wasserbrunnen.png", title: {en: "Water Fountain", de: "Wasserbrunnen"}},
        {image: "/sitemap/Icon_Toilettenwagen.png", title: {en: "Toilet Trailer", de: "Toilettenwagen"}},
        {image: "/sitemap/Icon_Mülltrennung.png", title: {en: "Waste Sorting", de: "Mülltrennung"}},
        {image: "/sitemap/Icon_CamperVan.png", title: {en: "Camper Van", de: "Camper Van"}},
        {image: "/sitemap/Icon_CampingZelt.png", title: {en: "Camping Tent", de: "Camping Zelt"}},
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
