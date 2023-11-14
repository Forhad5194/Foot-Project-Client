import React from 'react';

const MenuItems = ({item}) => {


    const { name, recipe,image,price   } = item;






    return (
        <div className='flex space-x-5'>


            <img style={{borderRadius: '0 150px 150px 150px '}} className='w-[100px]' src={image} alt="" />
            <div >
            <h2 className='text-xl font-bold text-black'>{name} ------------------------</h2>
            <p>{recipe}</p>
            </div>
            <p className='text-xl text-yellow-500 font-bold'>{price}</p>







           
        </div>
    );
};

export default MenuItems;