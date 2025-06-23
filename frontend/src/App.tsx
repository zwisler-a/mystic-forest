import "./App.css";
import NavigationPage from "./components/pages/NavigationPage/NavigationPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import FaqPageDe from "./components/pages/FaqPage/FaqPageDe.tsx";
import FaqPageEn from "./components/pages/FaqPage/FaqPageEn.tsx";
import NewsPage from "./components/pages/NewsPage/NewsPage.tsx";
import TimetablePage from "./components/pages/TimetablePage/TimetablePage.tsx";
import PackingListPage from "./components/pages/PackingListPage/PackingListPage.tsx";
import SitePlanPage from "./components/pages/SitePlanPage/SitePlanPage.tsx";
import DrinksCounterPage from "./components/pages/DrinksCounterPage/DrinksCounter.tsx";
import LandingPage from "./components/pages/LandingPage/LandingPage.tsx";
import FairyBalls from "./components/FairyBalls/FairyBalls.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <NavigationPage />,
  },
  {
    path: "news",
    element: <NewsPage />,
  },
  {
    path: "faq-de",
    element: <FaqPageDe />,
  },
  {
    path: "faq-en",
    element: <FaqPageEn />,
  },
  {
    path: "timetable",
    element: <TimetablePage />,
  },
  {
    path: "drinks-counter",
    element: <DrinksCounterPage />,
  },
  {
    path: "packinglist",
    element: <PackingListPage />,
  },
  {
    path: "siteplan",
    element: <SitePlanPage />,
  },
]);

function App() {
  return (
    <>
      <div className="background"></div>
      <FairyBalls />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
