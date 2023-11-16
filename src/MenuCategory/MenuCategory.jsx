import { Link } from "react-router-dom";
import MenuItems from "../Shared/MenuItems/MenuItems";


const MenuCategory = ({ items }) => {
    return (
        <div>

            <div className='grid md:grid-cols-2 gap-5 mt-5 mb-10'>
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }

                <Link to={"/Orders"}>
                    <button className="btn btn-outline items-center mt-8" >View Full  Menu</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;