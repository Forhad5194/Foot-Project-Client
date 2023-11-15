import { NavLink } from "react-router-dom";



const Navbar = () => {


    const navItems = <>
     <NavLink >Home</NavLink>
     <NavLink  to={'/Menu'}>Menu</NavLink>
    </>













    return (
        <div className="">
            <div className="navbar fixed z-10   text-white">
                <div className="flex justify-between">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                      {navItems}
                    </ul>
                </div>


                <button className="btn btn-outline  btn-secondary">Secondary</button>
            </div>
        </div>
    );
};

export default Navbar;