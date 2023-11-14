import 'tailwindcss/tailwind.css';
import Header from "../components/header/HeaderComponent";
import { Container } from '@mui/material';
import BookingComponent from "../components/booking/BookingComponent";
import ViewBookingComponent from '../components/viewer/ViewBookingComponent';



export default function bookingPage() {

    return (
        <Container maxWidth='lg'>
            <Header title="ROOMPLANNER" />
            <ViewBookingComponent />
        </Container>

    )
}