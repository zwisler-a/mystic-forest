import { Link } from "react-router";
import Header from "../../Header/Header";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="logo-container">
        <div className="animated-logo">
          <Header />
        </div>
      </div>
      <main className="landing-page">
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
