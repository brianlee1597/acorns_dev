// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import "swiper/components/effect-fade/effect-fade.scss"
import './InfoCarousel.scss'

import karina from '../images/AespaKarina.jpg'
import bts from '../images/bts.jpg'
import exo from '../images/exo.jpg'
import lisa from '../images/lisa.jpg'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

const InfoCarousel = () => {
    return (
        <div id="infocarousel-container">
            <div id="ic-description-container">
                <h1>This Week's Updates</h1>
            </div>
            <Swiper
                spaceBetween={100}
                slidesPerView={1}
                loop={true}
                speed={2000}
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                }}
                navigation
                pagination={{ clickable: true }}
                effect={'fade'}
                className="info-carousel"
            >
                <SwiperSlide><img src={exo} alt="karina"/></SwiperSlide>
                <SwiperSlide><img src={lisa} alt="karina"/></SwiperSlide>
                <SwiperSlide><img src={karina} alt="karina"/></SwiperSlide>
                <SwiperSlide><img src={bts} alt="karina"/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default InfoCarousel