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

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f",
    element: <NavigationPage />,
  },
  {
    path: "news/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f",
    element: <NewsPage />,
  },
  {
    path: "faq-de/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f",
    element: <FaqPageDe />,
  },
  {
    path: "faq-en/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f",
    element: <FaqPageEn />,
  },
  {
    path: "timetable/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f",
    element: <TimetablePage />,
  },
  {
    path: "drinks-counter/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f",
    element: <DrinksCounterPage />,
  },
  {
    path: "packinglist/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f",
    element: <PackingListPage />,
  },
  {
    path: "siteplan/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f",
    element: <SitePlanPage />,
  },
]);

function App() {
  return (
    <>
      <div className="background"></div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
