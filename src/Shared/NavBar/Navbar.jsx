import { NavLink } from "react-router-dom";



const Navbar = () => {


    const navItems = <>
     <NavLink   className="mr-10" >Home</NavLink>
     <NavLink   className="mr-10" to={'/Menu'}>Menu</NavLink>
     <NavLink   className="mr-10" to={'/orders'}>orders</NavLink>
    </>













    return (
        <div className="">
            <div className="navbar fixed z-10   text-white">
                <div className="flex justify-between">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex ">
                    <ul className=" ml-10 ">
                      {navItems}
                    </ul>
                </div>


                <button className="btn btn-outline  btn-secondary">Secondary</button>
            </div>
        </div>
    );
};

export default Navbar;