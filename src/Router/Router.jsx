import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut/MainLayOut";
import Home from "../Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";


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
            },
            {
                path: 'Orders',
                element: <Order/>
            }
        ]
      
    }
    ,
    {
        path:'/Login',
        element: <Login />,
    }
])
export default Router;