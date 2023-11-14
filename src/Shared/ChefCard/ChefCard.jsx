import React from 'react';

import img1 from "../../assets/home/slide1.jpg"
import SectionTitle from '../SectionTitle/SectionTitle';

const ChefCard = () => {
    return (
        <section>

        <SectionTitle
         
         subHeading={'---Should Try---'}
         heading={"CHEF RECOMMENDS"}
         
        />



            <div className='mt-12 flex '>
                <div className="card cursor-pointer w-[424px] h-[441px] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className='w-[424px] rounded-xl' src={img1} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Add to Card </button>
                        </div>
                    </div>
                </div>
                <div className="card w-[424px] h-[441px] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className='w-[424px] rounded-xl' src={img1} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Add to Card </button>
                        </div>
                    </div>
                </div>
                <div className="card w-[424px] h-[441px] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className='w-[424px] rounded-xl' src={img1} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Add to Card </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefCard;