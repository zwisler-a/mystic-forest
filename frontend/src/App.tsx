import './App.css'
import NavigationPage from "./components/pages/NavigationPage/NavigationPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import LandingPage from './components/pages/LandingPage/LandingPage.tsx';
import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage.tsx';
import LoginPage from './components/pages/LoginPage/LoginPage.tsx';
import FaqPage from "./components/pages/FaqPage/FaqPage.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <NavigationPage/>,
    },
    {
        path: "/LandingPage",
        element: <LandingPage/>,
    },
    {
        path: "/registration",
        element: <RegistrationPage/>,
    },
    {
        path: "/LoginPage",
        element: <LoginPage/>,
    },
    {
        path: "faq",
        element: <FaqPage/>,
    }
]);


function App() {

    return (
        <RouterProvider router={router}/>
    )
}

export default App
