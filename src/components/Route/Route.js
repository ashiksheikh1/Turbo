import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../pages/About";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home";
import Services from "../../pages/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Services',
                element: <Services></Services>
            },
            {
                path: '/Blog',
                element: <Blog></Blog>
            },
            {
                path: '/About',
                element: <About></About>
            },
            {
                path: '/new',
                element: <About></About>
            },
            // {
            //     path: '/Contact',
            //     element: <Contact></Contact>
            // },
        ]
    }
])
export default router;