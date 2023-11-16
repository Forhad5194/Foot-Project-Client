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
import img2 from "../../../assets/menu/pizza-bg.jpg"
import img3 from "../../../assets/menu/salad-bg.jpg"
import img4 from "../../../assets/menu/soup-bg.jpg"


const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');








    return (
        <div>

            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover image={menuImg} title={'OUR MENU'} subTile={'Would you like tye a dIsh'} />

            <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}>

            </SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            <div >
                <Cover image={img1} title={'Dessert'} subTile={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
                <MenuCategory items={dessert} >

                </MenuCategory>
            </div>
            <div>
                <Cover image={img2} title={'Pizza'} subTile={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

                <MenuCategory items={pizza} />
            </div>
            <div>
                <Cover image={img3} title={'Salads'} subTile={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
                <MenuCategory items={salad} />
            </div>
            <div>
                <Cover image={img4} title={'soups'} subTile={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
                <MenuCategory items={soup} />
            </div>
        </div>
    );
};

export default Menu;