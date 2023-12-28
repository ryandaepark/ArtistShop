import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../RyanAssets/Cover.png';



//Container
//.swiper: + .swiper-slide: positions the slide and rounds square cards
//.swiper-button-next + -prev: replaces the given arrows with custom arrows (uneeded)
//      Note: top: 60% makes arrows go lower
//      Note: &:after: removes the old arrows
const Container = styled.div`
height: 60vh;

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
  background-color: white;
  border-radius: 20px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
}

\
}
`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
          delay:2000, 
          disableOnInteraction:false,
        }}
        pagination={{
          type:'fraction',
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[Pagination, Navigation, Autoplay, EffectCards]}
        navigation={true}        
        effect={"cards"}
        grabCursor={true}
        
        className="mySwiper"
      >
        <SwiperSlide> <img src={img1} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="The Weirdos" /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel