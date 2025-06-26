import { FC } from "react";
import "./Header.css";
import Countdown from "../Countdown/Countdown";

interface HeaderProps {
  fadeIn?: boolean;
}

const Header: FC<HeaderProps> = ({ fadeIn = false }) => {
  return (
    <>
      <div className="spacer"></div>
      <header className={fadeIn ? "animated-header" : ""}>
        <h1>Mystic Forest</h1>
        <div className="subheading">
          Hannah, Anki & Kiara await you
        </div>
        <div className="countdown">
          <Countdown
            targetDate={new Date("2025-08-01T18:00:00Z")}
            format={"DD Days HH Hours"}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
