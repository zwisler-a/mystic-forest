import "./App.css";
import "./styles/index.tsx"
import './shared/I18n/I18n.tsx';
import NavigationPage from "./features/Core/NavigationPage/NavigationPage.tsx";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router";
import NewsPage from "./features/News/NewsPage/NewsPage.tsx";
import TimetablePage from "./features/Timetable/TimetablePage/TimetablePage.tsx";
import PackingListPage from "./features/Packinglist/PackingListPage/PackingListPage.tsx";
import SitePlanPage from "./features/SitePlan/SitePlanPage/SitePlanPage.tsx";
import DrinksCounterPage from "./features/DrinksCounter/DrinksCounterPage/DrinksCounter.tsx";
import LandingPage from "./features/Core/LandingPage/LandingPage.tsx";
import FairyBalls from "./shared/FairyBalls/FairyBalls.tsx";
import {Outlet} from "react-router-dom";
import {ReactElement} from "react";
import RouteChangeTracker from "./shared/Analytics/RouteChangeTracker.tsx";
import {AccessibilityMenu} from "./shared/A11Y/AccessibilityMenu.tsx";
import {FaqPage} from "./features/Faq/FaqPage/FaqPage.tsx";
import FeatureFlag from "./shared/UnderConstructions/FeatureFlag.tsx";
import InstallIOSPage from "./shared/InstallPWA/InstallIOSPage.tsx";

const RequireAuth = ({children}: { children: ReactElement }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return isAuthenticated ? children : <Navigate to="/" replace/>;
};
const JumpAuth = ({children}: { children: ReactElement }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return !isAuthenticated ? children : <Navigate to="/home" replace/>;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <JumpAuth><LandingPage/></JumpAuth>,
    },
    {
        element: <RequireAuth><><Outlet/> <RouteChangeTracker/><AccessibilityMenu/></>
        </RequireAuth>,
        children: [
            {path: "home", element: <NavigationPage/>},
            {path: "news", element: <NewsPage/>},
            {path: "faq", element: <FaqPage/>},
            {path: "timetable", element: <FeatureFlag feature={"TIMETABLE"}><TimetablePage/></FeatureFlag>},
            {path: "drinks-counter", element: <FeatureFlag feature={"DRINKS"}><DrinksCounterPage/></FeatureFlag>},
            {path: "packing-list", element: <FeatureFlag feature={"PACKING"}><PackingListPage/></FeatureFlag>},
            {path: "siteplan", element: <SitePlanPage/>},
            {path: "pwa-ios", element: <InstallIOSPage/>},
        ],
    },
]);

function App() {
    return (
        <div>
            <div className="background"></div>
            <FairyBalls/>
            <RouterProvider router={router}/>
        </ div>
    );
}

export default App;
