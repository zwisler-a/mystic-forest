import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";
import {ENABLED_FEATURES} from "../../../features.ts";
import UnderConstruction from "../../../shared/UnderConstructions/UnderConstruction.tsx";

function TimetablePage() {

    if(!ENABLED_FEATURES["TIMETABLE"]) return <UnderConstruction />;
    return (
        <>
            <div className="spacer"></div>
            <Header/>
            <main>
                <div className="glass-effect card news">
                    <h2>Timetable</h2>
                    <div>Nothing here yet</div>
                </div>
                <BackButton/>
            </main>
        </>
    );
}

export default TimetablePage;
