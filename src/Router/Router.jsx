import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut/MainLayOut";
import Home from "../Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";


const Router =  createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut/>,
        children: [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'menu',
                element: <Menu/>,
            }
        ]
    }
])
export default Router;