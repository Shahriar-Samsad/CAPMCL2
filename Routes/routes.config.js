import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import About from "../Pages/About/About"
import { Blogs } from "../Pages/Blogs/Blogs"
import { Contact } from "../Pages/Contact/Contact"
import { CorporateProfile } from "../Pages/Corporate profile/CorporateProfile"
import ErrorPage from "../Pages/ErrorPage"
import { Home } from "../Pages/Home"
import { MVV } from "../Pages/Mission Vision Value/MVV"
import { Products } from "../Pages/Products/Products"
import { ServiceSector } from "../Pages/Service Sectors/ServiceSector"
import Login from "../Pages/login/Login"
import Signup from "../Pages/signup/Signup"
import ChatbotComponent from "../components/Chatbot/ChatbotComponent"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/blogs',
                element: <Blogs />,
            },
            {
                path: '/corporate-profile',
                element: <CorporateProfile />,
            },

            {
                path: '/mission-vision-value',
                element: <MVV />,
            },
            {
                path: '/services',
                element: <ServiceSector />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/chat',
                element: <ChatbotComponent />,
            },

        ],

    },
    {
        path: '/dashboard',
        // element: <><DashboardLayout></DashboardLayout></>,
        children: [
            // {
            //     path: '',
            //     element: <Welcome />,

            // },
            // {
            //     path: 'my-bookings',
            //     element: <PrivateRoute><MyBookings /></PrivateRoute>,

            // },

        ]
    },
])

export default router