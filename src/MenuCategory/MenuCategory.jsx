import MenuItems from "../Shared/MenuItems/MenuItems";


const MenuCategory = ({items}) => {
    return ( 
        <div>
            {/* { title && <Cover  image={menuImg} title={'OUR MENU'} subTile={'Would you like tye a dIsh'}   />} */}
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }

            </div>
        </div>
    );
};

export default MenuCategory;