import Balls from "../Ball/Balls";

const Header = () => {
  return (
    <>
      <Balls />
      <div className="spacer"></div>
      <header>
        <h1>Mystic Forest</h1>
        <div className="subheading">Hannah, Anki & Kiara await you</div>
      </header>
    </>
  );
};

export default Header;
