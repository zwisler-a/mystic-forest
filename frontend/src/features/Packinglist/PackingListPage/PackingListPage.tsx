import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";

function PackingsListPage() {
    return (
        <>
            <Header/>
            <main>
                <div className="glass-effect card news">
                    <h2>Packing List</h2>
                    <div>Nothing here yet</div>
                </div>
                <BackButton/>
            </main>
        </>
    );
}

export default PackingsListPage;
