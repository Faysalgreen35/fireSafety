import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 

import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; 
import slide1 from '../../assets/one.png';
import slide2 from '../../assets/two.png';
import slide3 from '../../assets/three.png';
import slide4 from '../../assets/four.png';
import slide5 from '../../assets/five.png';
import slide6 from '../../assets/sixv2.png';

const Slider = () => {
     

    return (
        <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,  // Slide will change every 3 seconds
          disableOnInteraction: false,
        }}
        grabCursor={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper  w-[80%]"
      >
        <SwiperSlide >
            <img className='w-[400px]' src={slide1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-[400px]' src={slide2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-[400px]' src={slide3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide6} alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide6} alt="Slide 6" />
        </SwiperSlide>
      </Swiper>
        
    </>
    );
};

export default Slider;
