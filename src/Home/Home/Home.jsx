import Boss from "../../Shared/Boss/Boss";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <Boss/>
           <PopularMenu/>
        </div>
    );
};

export default Home;