import BackButton from "../../BackButton/BackButton";
import Header from "../../Header/Header";

function PackingsListPage() {
  return (
    <>
      <div className="spacer"></div>
      <Header />
      <main>
        <div className="glass-effect card news">
          <h2>Packing List</h2>
          <div>Nothing here yet</div>
        </div>
        <BackButton />
      </main>
    </>
  );
}

export default PackingsListPage;
