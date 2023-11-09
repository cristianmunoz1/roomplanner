import * as React from 'react';
import Header from '../components/header/HeaderComponent';
import { Button, Container } from '@mui/material';
import 'tailwindcss/tailwind.css';
import RoomDetailsComponent from '../components/room-details/RoomDetailsComponent';
import RoomCardComponent from '../components/room-cards/RoomCardComponent';
import contenidoTarjetas from '../const/cardsRoomContent';
import Footer from '../components/footer/FooterComponent';
import { Router, useRouter } from 'next/router';

export default function roomPremiumPage() {
    const card = contenidoTarjetas[3];
    const router = useRouter();
    const handleReserve = () => {
        router.push('/booking-page')
    }
    return (
        <> <Header title='ROOMPLANNER'></Header>
            <Container maxWidth="lg" className='flex-col flex items-center'>

                <RoomDetailsComponent
                    title='Habitación Suite Presidencial'
                    image1='/images/roomPresidencial/presidencial1.jpg'
                    image2='/images/roomPresidencial/presidencial2.jpg'
                    image3='/images/roomPresidencial/presidencial3.jpg'
                    image4='/images/roomPresidencial/presidencial4.jpg'
                    image5='/images/roomPresidencial/presidencial5.jpg'
                />
                <RoomCardComponent title={card.title} description={card.description} image={card.image}
                    price={card.price} type='4' />
                <Button className='w-48 center mt-10 bg-blue-500 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={handleReserve}>Reserve ahora!</Button>
                <Footer
                    title="Roomplanner"
                    description="Hotel Cinco estrellas, Medellin, Antioquia "
                />
            </Container>
        </>

    );
}