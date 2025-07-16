import BackButton from "../../../shared/BackButton/BackButton.tsx";
import './SitePlanPage.css'
import MapLibreWrapper from "../MapLibreWrapper/MapLibreWrapper.tsx";
import Header from "../../../shared/Header/Header.tsx";
import {MapLegend} from "../MapLegend/MapLegend.tsx";

function SitePlanPage() {
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
