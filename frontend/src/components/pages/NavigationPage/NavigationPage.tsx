import './NavigationPage.css'
import ExploreIcon from '@mui/icons-material/Explore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SupportIcon from '@mui/icons-material/Support';
import LuggageIcon from '@mui/icons-material/Luggage';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router";

function NavigationPage() {

    return (
        <>
            <div className="background"></div>
            <header>
                <h1>Mystical Forest</h1>
            </header>
            <main>
                <Link to={'/faq'}>
                    <ExploreIcon/>
                    <span>Map</span>
                </Link>
                <a>
                    <QuestionMarkIcon/>
                    <span>FAQ</span>
                </a>
                <a>
                    <AnnouncementIcon/>
                    <span>News</span>
                </a>
                <a>
                    <MusicNoteIcon/>
                    <span>Timetables</span>
                </a>
                <a>
                    <LuggageIcon/>
                    <span>Packliste</span>
                </a>
                <a>
                    <SupportIcon/>
                    <span>Helpers</span>
                </a>
                <a>
                    <PersonIcon/>
                    <span>About Me</span>
                </a>
                <a>
                    <EmojiNatureIcon/>
                    <span>Quiz</span>
                </a>

            </main>
        </>
    )
}

export default NavigationPage
