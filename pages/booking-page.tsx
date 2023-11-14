import 'tailwindcss/tailwind.css';
import Header from "../components/header/HeaderComponent";
import { Container } from '@mui/material';
import BookingComponent from "../components/booking/BookingComponent";
import React, { useEffect } from 'react';
import AlertSessionComponent from '../components/alertSession/AlertSessionComponent';





export default function BookingPage() {
    const [userData, setUserData] = React.useState(null);

    React.useEffect(() => {
        const user = sessionStorage.getItem('userData')
        if (user) {
            setUserData(JSON.parse(user));
        }

    }, []
    )

    if (userData === null) {
        return (
            <>
                <Header title='ROOMPLANNER'></Header>
                <AlertSessionComponent></AlertSessionComponent>
            </>
        );
    } else {
        return (
            <Container maxWidth='lg'>
                <Header title="ROOMPLANNER" />
                <BookingComponent />
            </Container>
        );
    }




}


