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
        <Link className="glass-effect fade-in" to="/registration">
          Registration
        </Link>
        <Link className="glass-effect fade-in" to="/LoginPage">
          Login
        </Link>
      </main>
    </>
  );
};

export default LandingPage;
