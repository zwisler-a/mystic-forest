import { Link } from "react-router";

const LandingPage = () => {
  return (
    <>
      <div className="background"></div>
      <div className="spacer"></div>
      <header>
        <h1>Mystic Forest</h1>
        <div className="subheading">Hannah, Anki & Kiara await you</div>
      </header>
      <main>
        <Link className="glass-effect" to="/registration">
          Registration
        </Link>
        <Link className="glass-effect" to="/LoginPage">
          Login
        </Link>
      </main>
    </>
  );
};

export default LandingPage;