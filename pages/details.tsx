"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import 'tailwindcss/tailwind.css';
import Header from '../components/header/HeaderComponent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Footer from '../components/footer/FooterComponent';
import { Paper, Grid } from '@mui/material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import contenidoTarjetasDetails from '../const/cardsDetails';
import LandingCardComponent from '../components/landing-cards/LandingCardComponent';




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

                    <Typography variant="h3" component="h1" gutterBottom>
                        Acerca del hotel
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {'Somos un hotel con una unica sede ubicada en la ciudad de Medellin,Antioquia, nos encontramos cerca de la Universidad de Antioquia, con ubicaciones a puntos de interes muy bien distribuidos, y con facil accesibilidad.'}<br />
                        {'La ubicación esta dada en el cuadro de Google Maps, podra ver centrada la ubicación para brindar de manera mas precisa, donde podra encontrarnos.'}
                    </Typography>

                    <Typography variant="body1">Mapa </Typography>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1017.7349307985677!2d-75.56713550100021!3d6.268067657924447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sco!4v1699630950943!5m2!1ses-419!2sco" width="600" height="450" loading="lazy" className='border-2 rounded-lg border-stone-950'></iframe>

                    <Paper className='mt-32' elevation={10}>
                        <Grid container xs={12} className='flex flex-row items-center content-center '>
                            <Grid item xs={12} sm={4}>
                                <Image src="/images/details/logoUbicacion.jpg" alt='Imagen logo ubicacion' width={400} height={500}
                                    className='rounded-l-lg' />
                            </Grid>
                            <Grid item xs={12} sm={8} className='flex content-center items-center flex-col'>
                                <Typography variant='h4' className=' font-serif' >¿Como puede contactarnos?</Typography>
                                <Typography variant='h5' className=' '>Contamos con las siguientes redes sociales:</Typography>

                                <Grid item sm={6} className='flex flex-row'>
                                    <FacebookIcon className='text-blue-800'/>
                                    <Typography className='font-bold hover:text-blue-800 text-xl' ><a target="_blank" href='https://www.facebook.com/universidaddeantioquia'> Facebook
                                    </a>
                                    </Typography>
                                </Grid>
                                <Grid item sm={6} className='flex flex-row'>
                                    <InstagramIcon className='text-pink-500'/>
                                    <Typography className='font-bold hover:text-pink-500 text-xl' > <a target='_blank' href='https://www.instagram.com/udea/'>Instagram</a></Typography>
                                </Grid>
                                <Grid item sm={6} className='flex flex-row'>
                                    <WhatsAppIcon className='text-green-600'/>
                                    <Typography className='font-bold hover:text-green-600 text-xl' ><a target='_blank' href='https://api.whatsapp.com/send?phone=573116304184'>WhatsApp</a></Typography>
                                </Grid>
                            </Grid>
                        </Grid >
                    </Paper >
                    <Grid container spacing={0} className='pt-20 '>
                        {contenidoTarjetasDetails.map((card) => (
                            <LandingCardComponent key={card.id} title={card.title} description={card.description} image={card.image} direction={card.direction} />
                        ))}
                    </Grid>
                </Container>
                <Footer
                    title="Roomplanner"
                    description="Hotel Cinco estrellas, Medellin, Antioquia "
                />
            </Container >

        </>

    );
}