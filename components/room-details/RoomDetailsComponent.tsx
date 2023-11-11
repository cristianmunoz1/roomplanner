import { Container } from '@mui/material';
import * as React from 'react';
import 'tailwindcss/tailwind.css';
import CarouselComponent from '../carousel/CarouselComponent';

interface roomDetailsProps {
    title: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
}

export default function RoomDetailsComponent(props: roomDetailsProps) {
    return (

        <Container className='flex flex-col items-center'>

            <h1 className='font-extrabold mb-20 underline text-4xl'>{props.title}</h1>

            <Container maxWidth="lg" className='flex items-center'>
                <CarouselComponent
                    image1={props.image1}
                    image2={props.image2}
                    image3={props.image3}
                    image4={props.image4}
                    image5={props.image5}
                />

            </Container>
        </Container>
    );

}