import './MapLegend.css'
import {useState} from "react";
import {useTranslation} from "react-i18next";

export const MapLegend = () => {

    const [showLegend, setShowLegend] = useState(false);

    const {t} = useTranslation();

    const legend = [
        {image: "/sitemap/Icon_Mondhain.png", title: "map.legend.mondhain", borderColor: '#FAF'},
        {image: "/sitemap/Icon_Wurzelwerk.png", title: "map.legend.wurzelwerk", borderColor: '#6e5102'},
        {image: "/sitemap/Icon_Spielwiese.png", title: "map.legend.spielwiese", borderColor: '#F00'},
        {image: "/sitemap/Icon_WorkshopOase.png", title: "map.legend.workshopoase", borderColor: '#2265ff'},
        {image: "/sitemap/Icon_Lagerfeuerplatz.png", title: "map.legend.lagerfeuerplatz"},
        {image: "/sitemap/Icon_tbd.png", title: "map.legend.surprise"},
        {image: "/sitemap/Icon_Bar.png", title: "map.legend.bar"},
        {image: "/sitemap/Icon_Speisebereich.png", title: "map.legend.speisebereich"},
        {image: "/sitemap/Icon_Wasserbrunnen.png", title: "map.legend.wasserbrunnen"},
        {image: "/sitemap/Icon_Toilettenwagen.png", title: "map.legend.toilettenwagen"},
        {image: "/sitemap/Icon_Mülltrennung.png", title: "map.legend.muelltrennung"},
        {image: "/sitemap/Icon_CamperVan.png", title: "map.legend.campervan"},
        {image: "/sitemap/Icon_CampingZelt.png", title: "map.legend.campingzelt"},
        {image: "/sitemap/Icon_Parkplatz_PKWohneSchlafenOnly.png", title: "map.legend.parkplatz"},
    ];

    return <div className={"legend"}>
        <div className={'glass-effect container ' + (showLegend ? 'visible' : 'hidden')}>
            {legend.map((item) => <div key={item.image}>
                <img style={{borderColor: item.borderColor, borderWidth: item.borderColor ? '2px' : '1px'}}
                     src={item.image} alt={t(item.title)}/>
                {t(item.title)}
            </div>)}

        </div>

        <button onClick={() => setShowLegend(prev => !prev)}>
            {t("map.legend.button")}
        </button>
    </div>
}