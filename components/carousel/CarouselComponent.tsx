import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Container from '@mui/material/Container';

interface CarouselProps {
    image: string;
}

export default function CarouselComponent() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className='swiper-conatiner'
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className='slide-item ml-3'>
                <Container maxWidth="lg">
                    <img src='https://source.unsplash.com/random?wallpapers'
                        className='object-contain' />
                </Container>
            </SwiperSlide>
            <SwiperSlide className='slide-item2 ml-3'>
                <Container maxWidth="lg">
                    <img src='https://source.unsplash.com/random?wallpapers'
                        className='object-contain' />
                </Container>
            </SwiperSlide>
            <SwiperSlide className='slide-item3 ml-3'>
                <Container maxWidth="lg">
                    <img src='https://source.unsplash.com/random?wallpapers'
                        className='object-contain' />
                </Container>
            </SwiperSlide>
            <SwiperSlide className='slide-item4 ml-3'>
                <Container maxWidth="lg">
                    <img src='https://source.unsplash.com/random?wallpapers'
                        className='object-contain' />
                </Container>
            </SwiperSlide>
        </Swiper>
    );
};