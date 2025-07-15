import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";

function TimetablePage() {
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
