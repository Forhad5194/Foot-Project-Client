import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import img2 from '../../assets/home/quote-left 1.png'


const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])








    return (
        <section className="my-10" >
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}



            />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>


                        <div className="flex flex-col items-center mx-24 my-16 ">
                            <Rating 
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img className="mt-5" src={img2} alt="" />

                            <p className="py-8">{review.details}</p>
                            <h3 className="text-3xl text-orange-500">{review.name}</h3>
                        </div>



                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;