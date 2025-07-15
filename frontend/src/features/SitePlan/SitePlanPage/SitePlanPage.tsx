import BackButton from "../../../shared/BackButton/BackButton.tsx";
import './SitePlanPage.css'
import MapLibreWrapper from "../MapLibreWrapper/MapLibreWrapper.tsx";
import Header from "../../../shared/Header/Header.tsx";
import {MapLegend} from "../MapLegend/MapLegend.tsx";
import {useEffect} from "react";
import {report} from "../../../shared/Analytics/analytics.ts";

function SitePlanPage() {
    useEffect(() => {
        report("page_open:siteplan");
    }, []);
    return (
        <>
            <BackButton/>
            <div className="spacer"></div>
            <Header/>


            <main className={"site-plan-page"}>
                <MapLibreWrapper/>

                <MapLegend></MapLegend>

            </main>
        </>
    );
}

export default SitePlanPage;
