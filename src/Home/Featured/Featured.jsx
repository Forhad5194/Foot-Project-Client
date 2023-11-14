import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featured from "../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        <div className="featured-items bg-fixed text-white">
            <SectionTitle 
             subHeading={"---Check it out---"}
             heading={"FROM OUR MENU"}
             
            />
            <div className="md:flex justify-center  items-center py-8 px-8">
                <div>
                    <img  className="rounded-xl" src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                        <h3 className="mb-5">March 20, 2023</h3>
                        <p className="uppercase mb-5 text-xl ">
                        WHERE CAN I GET SOME?
                        </p>
                        <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="btn btn-outline btn-primary border-0 border-b-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;