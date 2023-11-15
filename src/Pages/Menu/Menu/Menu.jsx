import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import PopularMenu from "../../../Home/PopularMenu/PopularMenu";
import Boss from "../../../Shared/Boss/Boss";


const Menu = () => {
    return (
        <div>
            
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover  image={menuImg} title={'OUR MENU'} subTile={'Would you like tye a dIsh'}   />
            <PopularMenu/>
            <Boss/>
            <PopularMenu/>
            <Boss/>
            <PopularMenu/>
            <Boss/>
            <PopularMenu/>
        </div>
    );
};

export default Menu;