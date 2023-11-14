import Boss from "../../Shared/Boss/Boss";
import ChefCard from "../../Shared/ChefCard/ChefCard";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <Boss/>
           <PopularMenu/>
           <CallUs/>
           <ChefCard/>
        </div>
    );
};

export default Home;