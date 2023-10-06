import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/NewsPage/News";
import Resister from "../Pages/Resister";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json'),
            },
            {
                path: 'news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/resister',
                element: <Resister></Resister>
            }
        ]
    }
]);

export default router;