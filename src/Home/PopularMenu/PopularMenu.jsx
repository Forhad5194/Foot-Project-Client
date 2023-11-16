import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import useMenu from '../../Hook/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');









    return (
        <section>
            <div>
                <SectionTitle

                    subHeading={"---Check it out---"}
                    heading={"FROM OUR MENU"}
                />

            </div>

            <div className='grid md:grid-cols-2 gap-5'>
                {
                    popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }

            </div>
           <Link>
           <button className="btn btn-outline items-center mt-8" >View Full  Menu</button>
           </Link>
        </section>
    );
};

export default PopularMenu;