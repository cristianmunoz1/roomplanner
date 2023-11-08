import { Container } from '@mui/material';
import * as React from 'react';
import 'tailwindcss/tailwind.css';
import CarouselComponent from '../carousel/CarouselComponent';

export default function RoomDetailsComponent() {
    return (

        <Container className='flex flex-col items-center'>

            <h1 className='font-extrabold mb-6 underline text-4xl'>Habitación sencilla</h1>

            <Container maxWidth="lg" className='flex items-center'>
                <CarouselComponent
                    image1="/images/roomSencilla/roomSencilla.jpg"
                    image2="/images/roomSencilla/roomSencilla1.jpg"
                    image3="/images/roomSencilla/roomSencilla2.jpg"
                    image4="/images/roomSencilla/roomSencilla3.jpg"
                    image5="/images/roomSencilla/roomSencilla4.jpg"

                />


            </Container>
        </Container>
    );

}