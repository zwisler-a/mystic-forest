import FairyBalls from "../FairyBalls/FairyBalls";

const Header = () => {
  return (
    <>
      <FairyBalls />
      <div className="spacer"></div>
      <header>
        <h1>Mystic Forest</h1>
        <div className="subheading">Hannah, Anki & Kiara await you</div>
      </header>
    </>
  );
};

export default Header;
