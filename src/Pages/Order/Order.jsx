import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hook/useMenu";
import FoodCard from "../../Shared/FoodCard/FoodCard";


const Order = () => {
    // const categorys = [ 'Salad' , 'pizza' , 'soups' , 'Desserts' , 'Drinks' ]

    const [menu] = useMenu();
    const drinks= menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');







    const [indexTabs, setIndexTabs] = useState(0)
    return (
        <div>
            <Helmet>
                <title>Order</title>
            </Helmet>

            <Cover image={coverImg} title={"OUR SHOP"}  ></Cover>

            <div className="text-center  text-xl font-bold mt-32">
                <Tabs defaultIndex={indexTabs} onSelect={(index) => setIndexTabs(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-5 mt-12'>
                            {
                                salad.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-5 mt-12'>
                            {
                                pizza.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-5 mt-12'>
                            {
                                soup.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-5 mt-12'>
                            {
                                dessert.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5 mt-12'>
                            {
                                drinks.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;