"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from '../components/header/HeaderComponent';
import MainFeaturedPost from '../components/main-featured-post/MainFeaturedPostComponent';
import FeaturedPost from '../components/featured-post/FeaturedPostComponent';
import Footer from '../components/footer/FooterComponent';
import PriceCalculatorComponent from '../components/price-calculator-component/PriceCalculatorComponent';
import { Box, Typography } from '@mui/material';
import contenidoTarjetas from '../const/cardsContent';
import LandingCardComponent from '../components/landing-cards/LandingCardComponent';
import { TRUE } from 'sass';
import { Griffy } from 'next/font/google';


/* const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
]; */

const mainFeaturedPost = {
  title: 'Abre la puerta a un mundo nuevo.',
  description:
    "Todos queremos estar como en casa, así que cuidar de su alegría y hacer que las vacaciones sean increíbles es lo que buscamos en Hotel RP",
  image: '/images/main.jpg',
  imageText: 'main image description',
  linkText: 'Descubre mas...',
};

const featuredPosts = [
  {
    id: 'Estandar',
    label: 'Habitación individual',
    description:
      'Es una habitación sencilla con capacidad para 1 persona, adecuada para viajeros en solitario o viajes de negocio'
      + ', dicha habitación cuenta con las comodidades esenciales para cualquier persona.',
    ruta:
      '../../room-sencilla-page',
  },
  {
    id: 'Premium',
    label: 'Habitación Premium',
    description:
      'Esta es una habitación de hotel, que cuenta con zona de dormitorio, zona de estar, y cocina americana, perfectas para huespedes que desean mas espacio y comodidades que las de una habitacion estandar. ',
    ruta:
      '../../signup-page',
  },
  {
    id: 'Super Premium',
    label: 'Suite Clase A',
    description:
      'Es una habitación mas grande que la Habitación Premium, ofreciendo mas espacio y lujos para el huesped, esta categoria cuenta con servicios personalizados, para brindar mas exclusividad al cliente.',
    ruta:
      '',
  },
  {
    id: 'Suite presidencial',
    label: 'Suite Deluxe',
    description:
      'Esta es la habitación mas exclusiva que ofrece el hotel, brindando lujos en su maximo esplendor, servicios privados, independientes a las demas habitaciones del hotel, y atencion personalizada en todo momento .',
    ruta:
      '',
  },
];





export default function Blog() {
  return (
    <>
      <Header title="ROOMPLANNER" />
      <CssBaseline />
      <Container className='h-full' >

        <main>

          <MainFeaturedPost post={mainFeaturedPost} />

          <Grid container className='flex flex-col items-center pb-8 underline '>
            <Typography variant='h4' className='font-serif'>¡Descubre todos los tipos de habitación que tenemos para tí!</Typography>
          </Grid>
          <Grid container spacing={4} className=''>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </Grid>
          <Grid container spacing={0} className='pt-20'>
            {contenidoTarjetas.map((card) => (
              <LandingCardComponent key={card.id} title={card.title} description={card.description} image={card.image} direction={card.direction} />
            ))}
          </Grid>
          {/*<Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />

          </Grid>*/}

          <Box sx={{
            position: 'relative',
            mt: 10,
          }}>
            <PriceCalculatorComponent></PriceCalculatorComponent>
          </Box>

        </main>
      </Container >
      <Footer
        title="Roomplanner"
        description="Hotel Cinco estrellas, Medellin, Antioquia "
      />
    </>
  );
}