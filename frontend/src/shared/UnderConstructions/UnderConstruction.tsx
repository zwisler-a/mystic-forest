import Header from "../Header/Header.tsx";
import BackButton from "../BackButton/BackButton.tsx";

function UnderConstruction() {
    return (
        <>
            <div className="spacer"></div>
            <Header/>
            <main>
                <div className="glass-effect card">
                    <div>Nothing here yet</div>
                </div>
                <BackButton/>
            </main>
        </>
    );
}

export default UnderConstruction;
