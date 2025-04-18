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
            <div className='spacer'></div>
            <header>
                <h1>Mystic Forest</h1>
                <div className='subheading'>Hannah, Anki & Kiara await you</div>
            </header>
            <main className='main-grid'>
                <Link className='glass-effect' to={'/faq'}>
                    <ExploreIcon/>
                    <span>Map</span>
                </Link>
                <Link className='glass-effect' to={'/faq'}>
                    <QuestionMarkIcon/>
                    <span>FAQ</span>
                </Link>
                <Link className='glass-effect' to={'/faq'}>
                    <AnnouncementIcon/>
                    <span>News</span>
                </Link>
                <Link className='glass-effect' to={'/faq'}>
                    <MusicNoteIcon/>
                    <span>Timetables</span>
                </Link>
                <Link className='glass-effect' to={'/faq'}>
                    <LuggageIcon/>
                    <span>Packliste</span>
                </Link>
                <Link className='glass-effect' to={'/faq'}>
                    <SupportIcon/>
                    <span>Helpers</span>
                </Link>
                <Link className='glass-effect' to={'/faq'}>
                    <PersonIcon/>
                    <span>About Me</span>
                </Link>
                <Link className='glass-effect' to={'/faq'}>
                    <EmojiNatureIcon/>
                    <span>Quiz</span>
                </Link>

            </main>
        </>
    )
}

export default NavigationPage
