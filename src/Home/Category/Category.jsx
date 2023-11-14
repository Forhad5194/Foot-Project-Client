import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import img5 from "../../assets/home/slide5.jpg"





const Category = () => {
    return (

        <div className='mb-12'>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,

                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide >
                    <img className='rounded-xl' src={img1} alt="" />
                    <p className='text-2xl text-center text-white font-bold -mt-12 uppercase '>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src={img2} alt="" />
                    <p className='text-2xl text-center text-white font-bold -mt-12  uppercase'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src={img3} alt="" />
                    <p className='text-2xl text-center text-white font-bold -mt-12  uppercase'>pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src={img4} alt="" />
                    <p className='text-2xl text-center text-white font-bold -mt-12 uppercase  '>desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src={img5} alt="" />
                    <p className='text-2xl text-center text-white font-bold -mt-12 uppercase '>Salads</p>
                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Category;