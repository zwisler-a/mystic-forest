import { useState } from "react";
import { useNavigate } from "react-router";
import "./LandingPage.css";
import FairyBalls from "../../FairyBalls/FairyBalls";

const LandingPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fadeOut, setFadeOut] = useState(false); // State to trigger fade-out animation
  const navigate = useNavigate();

  const handleClick = () => {
    if (password === "123") {
      setFadeOut(true); // Start fade-out effect
      setError(""); // Clear any previous error

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
        <div className="login-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
            disabled={fadeOut} // Disable input during fade-out
          />
          <button
            className="glass-effect login-button"
            onClick={handleClick}
            disabled={fadeOut} // Disable button during fade-out
          >
            To the Woods
          </button>
          {/* Show error message if there is one */}
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
      </main>
    </>
  );
};

export default LandingPage;