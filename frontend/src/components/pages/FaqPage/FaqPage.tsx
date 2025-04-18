import BackButton from "../../BackButton/BackButton";
import Header from "../../Header/Header";
import "./FaqPage.css";

function FaqPage() {
  return (
    <>
    <div className="spacer"></div>
      <Header />
      <main>
        <div className="glass-effect card faq">
          <h2>FAQ</h2>
          <details>
            <summary>Where will Mystic Forest take place?</summary>
            <p>
              Here:{" "}
              <a href="https://maps.app.goo.gl/yaYpY29ZEfe7dt9A7">GoogleMaps</a>
            </p>
          </details>
          <details>
            <summary>When will Mystic Forest take place?</summary>
            <p>01.-03. August 2025</p>
          </details>
          <details>
            <summary>What should I bring?</summary>
            <p>Lots of love</p>
          </details>
        </div>
        <BackButton />
      </main>
    </>
  );
}

export default FaqPage;
