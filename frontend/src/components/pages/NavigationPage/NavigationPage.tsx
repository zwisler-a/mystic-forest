import "./NavigationPage.css";
import ExploreIcon from "@mui/icons-material/Explore";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SupportIcon from "@mui/icons-material/Support";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Link } from "react-router";
import Header from "../../Header/Header";
import { useEffect } from "react";


let firstOpen = true;

function NavigationPage() {
  useEffect(()=> {
    firstOpen = false;
  },[]);

  const linkClasses = "glass-effect" + (firstOpen ? " fade-in-after-animated-header" : "");
  
  return (
    <>
      <Header fadeIn={firstOpen} />
      <main className="main-grid">
        <Link
          className={linkClasses}
          to={"/news"}
        >
          <AnnouncementIcon />
          <span>News</span>
        </Link>

        <Link
          className={linkClasses}
          to={"/faq"}
        >
          <QuestionMarkIcon />
          <span>FAQ</span>
        </Link>

        <Link
          className={linkClasses + " soon"}
          to={"/faq"}
        >
          <MusicNoteIcon />
          <span>Timetables</span>
        </Link>

        <Link
          className={linkClasses  + " soon"}
          to={"/"}
        >
          <SupportIcon />
          <span>Helpers</span>
        </Link>

        <Link
          className={linkClasses  + " soon"}
          to={"/"}
        >
          <LuggageIcon />
          <span>Packliste</span>
        </Link>

        <Link
          className={linkClasses + " soon"}
          to={"/"}
        >
          <ExploreIcon />
          <span>Map</span>
        </Link>
      </main>
    </>
  );
}

export default NavigationPage;
