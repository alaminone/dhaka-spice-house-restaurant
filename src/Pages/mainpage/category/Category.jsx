import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import  "./category.css"
import SectionTitle from '../../../components/sectiontitle/SectionTitle';

const Category = () => {
    return (
       <section>
        <SectionTitle
        subheading={'From 11:00am to 10:00pm'}
        mainheading={'ORDER ONLINE'}
        
        ></SectionTitle>
               <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={'https://i.ibb.co/84gXPxX/slide1.jpg'} alt="" />
            <h4 className='text-base md:text-4xl text-center uppercase -mt-28 text-white text-shadow'>salads</h4>
        </SwiperSlide>
        <SwiperSlide>
            <img src={'https://i.ibb.co/5jFH84m/slide2.jpg'} alt="" />
            <h4 className='text-base md:text-4xl text-center uppercase -mt-28 text-white text-shadow'>pizzza</h4>
        </SwiperSlide>
        <SwiperSlide>
            <img src={'https://i.ibb.co/zPh34JV/slide3.jpg'} alt="" />
            <h4 className='text-base md:text-4xl text-center uppercase -mt-28 text-white text-shadow'>shoups</h4>
        </SwiperSlide>
        <SwiperSlide>
            <img src={'https://i.ibb.co/5j2v220/slide4.jpg'} alt="" />
            <h4 className='text-base md:text-4xl text-center uppercase -mt-28 text-white text-shadow'>desserts</h4>
        </SwiperSlide>
       
      </Swiper>
       </section>
    );
};

export default Category;