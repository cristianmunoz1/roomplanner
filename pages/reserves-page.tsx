import 'tailwindcss/tailwind.css';
import Header from "../components/header/HeaderComponent";
import { Container, Typography } from '@mui/material';
import BookingComponent from "../components/booking/BookingComponent";
import ViewBookingComponent from '../components/viewer/ViewBookingComponent';
import Footer from '../components/footer/FooterComponent';



export default function ReservesPage() {

    return (
        <Container maxWidth='lg'>
            <Header title="ROOMPLANNER" />
            <Typography className='text-2xl mt-4 mb-4'>
                A continuación el usuario con rol administrador podra visualizar las reservas actuales hasta el momento, dada por la siguiente tabla que contienne la estructura de datos, planetada en el formulario de realizar reserva:
            </Typography>
            <ViewBookingComponent />
            <br />
            <ViewBookingComponent />
            <Footer
                title="Roomplanner"
                description="Hotel Cinco estrellas, Medellin, Antioquia "
            />
        </Container>

    )
}