import 'tailwindcss/tailwind.css';
import Header from "../components/header/HeaderComponent";
import { Container, Typography } from '@mui/material';
import BookingComponent from "../components/booking/BookingComponent";
import ViewBookingComponent from '../components/viewer/ViewBookingComponent';
import Footer from '../components/footer/FooterComponent';
import React from 'react';
import router, { useRouter } from 'next/router';
import AlertSessionComponent from '../components/alertSession/AlertSessionComponent';
import NotAdminComponent from '../components/notAdminComponent/NotAdminComponent';



export default function ReservesPage() {

    const router = useRouter();
    const [userData, setUserData] = React.useState(null);

    React.useEffect(() => {
        const user = sessionStorage.getItem('userData')
        if (user) {
            setUserData(JSON.parse(user));
        }

    }, []
    )

    React.useEffect(() => {
        console.log

    }, [userData]
    )



    if (userData === null) {
        return (

            < Container >
                <Header title="ROOMPLANNER"></Header>
                <AlertSessionComponent />
            </Container >
        )

    }

    if (userData.admin === true) {
        return (
            <Container maxWidth='lg'>
                <Header title="ROOMPLANNER" />
                <Typography className='text-2xl mt-4 mb-4'>
                    A continuación el usuario con rol administrador podra visualizar las reservas actuales hasta el momento, dada por la siguiente tabla que contienne la estructura de datos, planetada en el formulario de realizar reserva:
                </Typography>
                <ViewBookingComponent />
                <br />
                <Footer
                    title="Roomplanner"
                    description="Hotel Cinco estrellas, Medellin, Antioquia "
                />
            </Container>

        )
    }

    if (userData.admin != true) {
        return (
            <Container>
                <Header title="ROOMPLANNER"></Header>
                < NotAdminComponent />
            </Container>
        )
    }


}
