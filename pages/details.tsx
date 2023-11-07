"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import 'tailwindcss/tailwind.css';
import Header from '../components/header/HeaderComponent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Footer from '../components/footer/FooterComponent';
import CarouselComponent from '../components/carousel/CarouselComponent';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function StickyFooter() {
    return (
        <Container maxWidth='lg'>
            <CarouselComponent
                image1='/images/roomSencilla/roomSencilla.jpg'
                image2='/images/roomSencilla/roomSencilla1.jpg'
                image3='/images/roomSencilla/roomSencilla2.jpg'
                image4='/images/roomSencilla/roomSencilla3.jpg'
                image5='/images/roomSencilla/roomSencilla4.jpg'
            >

            </CarouselComponent>
            <CssBaseline />
            <Header title="ROOMPLANNER" />
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">

                <Typography variant="h2" component="h1" gutterBottom>
                    Sticky footer
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'Pin a footer to the bottom of the viewport.'}
                    {'The footer will move as the main element of the page grows.'}
                </Typography>
                <Typography variant="body1">Sticky footer placeholder.</Typography>
            </Container>
            <Footer
                title="Roomplanner"
                description="Hotel Cinco estrellas, Medellin, Antioquia "
            />
        </Container>
    );
}