import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/NavBar/Navbar";


const MainLayOut = () => {
    return (
        <div>
            <Navbar/>
          
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayOut;