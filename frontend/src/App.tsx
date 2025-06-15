import "./App.css";
import NavigationPage from "./components/pages/NavigationPage/NavigationPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import FaqPage from "./components/pages/FaqPage/FaqPage.tsx";
import NewsPage from "./components/pages/NewsPage/NewsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationPage />,
  },
  {
    path: "news",
    element: <NewsPage />,
  },
  {
    path: "faq",
    element: <FaqPage />,
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
