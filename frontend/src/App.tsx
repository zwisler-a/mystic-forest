import './App.css'
import NavigationPage from "./components/pages/NavigationPage/NavigationPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import FaqPage from "./components/pages/FaqPage/FaqPage.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <NavigationPage/>,
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
