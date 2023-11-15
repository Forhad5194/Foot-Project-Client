import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import PopularMenu from "../../../Home/PopularMenu/PopularMenu";
import Boss from "../../../Shared/Boss/Boss";
import useMenu from "../../../Hook/useMenu";
import MenuCategory from "../../../MenuCategory/MenuCategory";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import img1 from "../../../assets/menu/dessert-bg.jpeg"


const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');








    return (
        <div>
            
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover  image={menuImg} title={'OUR MENU'} subTile={'Would you like tye a dIsh'}   />
            
            <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}>

            </SectionTitle>
            
            <MenuCategory items={offered}></MenuCategory>

            
            <MenuCategory items={dessert} title={dessert} image={img1} >
                
            </MenuCategory>
        </div>
    );
};

export default Menu;