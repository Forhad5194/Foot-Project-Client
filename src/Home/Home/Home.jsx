import Boss from "../../Shared/Boss/Boss";
import ChefCard from "../../Shared/ChefCard/ChefCard";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <Boss/>
           <PopularMenu/>
           <CallUs/>
           <ChefCard/>
           <Featured/>
           <Testimonials/>
        </div>
    );
};

export default Home;