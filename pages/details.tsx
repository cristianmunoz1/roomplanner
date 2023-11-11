"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import 'tailwindcss/tailwind.css';
import Header from '../components/header/HeaderComponent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Footer from '../components/footer/FooterComponent';

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
        <>
            <Header title="ROOMPLANNER" />
            <Container maxWidth='lg'>

                <CssBaseline />

                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg" className='flex flex-col items-center'>

                    <Typography variant="h2" component="h1" gutterBottom>
                        Sticky footer
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {'Pin a footer to the bottom of the viewport.'}
                        {'The footer will move as the main element of the page grows.'}
                    </Typography>
                    <Typography variant="body1">Sticky footer placeholder.</Typography>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1017.7349307985677!2d-75.56713550100021!3d6.268067657924447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sco!4v1699630950943!5m2!1ses-419!2sco" width="600" height="450" loading="lazy" className='border-2 rounded-lg border-stone-950'></iframe>

                </Container>
                <Footer
                    title="Roomplanner"
                    description="Hotel Cinco estrellas, Medellin, Antioquia "
                />
            </Container >

        </>

    );
}