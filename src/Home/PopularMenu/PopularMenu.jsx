import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';

const PopularMenu = () => {

const [menu , setMenu ] =  useState([])

useEffect(()=> {
    fetch("menu.json")
    .then(res => res.json())
    .then(data => {
        const popularItems = data.filter(item => item.category ==='popular');
        setMenu(popularItems)
    })
} ,[])



    return (
        <section>
            <SectionTitle
            
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}                                    
            />


            <div className='grid md:grid-cols-2 gap-5'>
                {
                    menu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
                 
            </div>
            <button className="btn btn-outline items-center mt-8" >View Full  Menu</button>
        </section>
    );
};

export default PopularMenu;