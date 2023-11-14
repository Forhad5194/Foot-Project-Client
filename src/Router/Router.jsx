import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut/MainLayOut";
import Home from "../Home/Home/Home";


const Router =  createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut/>,
        children: [
            {
                path:'/',
                element: <Home/>,
            }
        ]
    }
])
export default Router;