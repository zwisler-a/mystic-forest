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
        <Link className={linkClasses} to={"/news/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f"}>
          <FeedRoundedIcon />
          <span>News</span>
        </Link>

        <Link className={linkClasses} to={"/faq-de/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f"}>
          <QuizRoundedIcon />
          <span>FAQ</span>
        </Link>

        <Link className={linkClasses + " soon"} to={"/timetable/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f"}>
          <MusicNoteRoundedIcon />
          <span>Timetable</span>
        </Link>

        <Link className={linkClasses + " soon"} to={"/siteplan/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f"}>
          <MapRoundedIcon />
          <span>Site Plan</span>
        </Link>

        <Link className={linkClasses + " soon"} to={"/drinks-counter/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f"}>
          <LocalBarRoundedIcon />
          <span>My Drinks</span>
        </Link>

        <Link className={linkClasses + " soon"} to={"/packinglist/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f"}>
          <LuggageRoundedIcon />
          <span>Packing List</span>
        </Link>
      </main>
    </>
  );
}

export default NavigationPage;
