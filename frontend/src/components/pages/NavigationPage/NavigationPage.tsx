import "./NavigationPage.css";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import LocalBarRoundedIcon from '@mui/icons-material/LocalBarRounded';
import LuggageRoundedIcon from "@mui/icons-material/LuggageRounded";
import { Link } from "react-router";
import Header from "../../Header/Header";
import { useEffect } from "react";

let firstOpen = true;

function NavigationPage() {
  useEffect(() => {
    firstOpen = false;
  }, []);

  const linkClasses =
    "glass-effect" + (firstOpen ? " fade-in-after-animated-header" : "");

  return (
    <>
      <Header fadeIn={firstOpen} />
      <main className="main-grid">
        <Link className={linkClasses} to={"/news"}>
          <FeedRoundedIcon />
          <span>News</span>
        </Link>

        <Link className={linkClasses} to={"/faq-de"}>
          <QuizRoundedIcon />
          <span>FAQ</span>
        </Link>

        <Link className={linkClasses + " soon"} to={"/timetable"}>
          <MusicNoteRoundedIcon />
          <span>Timetable</span>
        </Link>

        <Link className={linkClasses} to={"/siteplan"}>
          <MapRoundedIcon />
          <span>Site Plan</span>
        </Link>

        <Link className={linkClasses + " soon"} to={"/drinks-counter"}>
          <LocalBarRoundedIcon />
          <span>My Drinks</span>
        </Link>

        <Link className={linkClasses + " soon"} to={"/packing-list"}>
          <LuggageRoundedIcon />
          <span>Packing List</span>
        </Link>
      </main>
    </>
  );
}

export default NavigationPage;
