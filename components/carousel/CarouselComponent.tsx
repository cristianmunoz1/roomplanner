import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Container from '@mui/material/Container';

export default function CarouselComponent(CarouselProps) {

    const { image1, image2, image3, image4, image5 } = CarouselProps;

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className='swiper-conatiner'
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className='slide-item ml-0.5'>
                <Container maxWidth="lg" className='object-contain flex items-center' >
                    <img src={image1}
                    />
                </Container>
            </SwiperSlide>
            <SwiperSlide className='slide-item2'>
                <Container maxWidth="lg">
                    <img src={image2}
                    />
                </Container>
            </SwiperSlide>
            <SwiperSlide className='slide-item3 '>
                <Container maxWidth="lg">
                    <img src={image3}
                    />
                </Container>
            </SwiperSlide>
            <SwiperSlide className='slide-item4 '>
                <Container maxWidth="lg">
                    <img src={image4}
                        className='object-contain' />
                </Container>
            </SwiperSlide>
            <SwiperSlide className='slide-item5 '>
                <Container maxWidth="lg">
                    <img src={image5}
                        className='object-contain' />
                </Container>
            </SwiperSlide>
        </Swiper>
    );
};