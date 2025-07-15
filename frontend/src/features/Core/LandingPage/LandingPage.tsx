import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import "./LandingPage.css";
import {report} from "../../../shared/Analytics/analytics.ts";

const LandingPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fadeOut, setFadeOut] = useState(false); // State to trigger fade-out animation
  const navigate = useNavigate();

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault(); // Prevent default form submission
    if (
      password.trim().toLowerCase() === "anki" ||
      password.trim().toLowerCase() === "hannah" ||
      password.trim().toLowerCase() === "kiara"
    ) {
      setFadeOut(true); // Start fade-out effect
      setError(""); // Clear any previous error
      localStorage.setItem('isAuthenticated', 'true');
      report("login");
      // Wait for fade-out animation to complete before navigating
      setTimeout(() => {
        navigate("/home");
      }, 1000); // Duration matches CSS animation duration
    } else {
      setError("Wrong password!");
    }
  };

  return (
    <>
      <div className="landing-spacer"></div>
      {/* Add fade-out class conditionally */}
      <main className={`landing-page ${fadeOut ? "fade-out" : ""}`}>
        <form onSubmit={handleSubmit} className="login-container">
          <label htmlFor="password" className="password-label">Nenne eines der drei Geburtstagskinder</label>
          <div className="password-label">(Name one of the three celebrants)</div>
          <input
            type="password"
            placeholder="Enter name"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
            disabled={fadeOut} // Disable input during fade-out
          />
          <button
            className="glass-effect login-button"
            disabled={fadeOut} // Disable button during fade-out
          >
            To the Woods
          </button>
          {/* Show error message if there is one */}
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </main>
    </>
  );
};

export default LandingPage;
