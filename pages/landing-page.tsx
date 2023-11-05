"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from '../components/header/HeaderComponent';
import MainFeaturedPost from '../components/main-featured-post/MainFeaturedPostComponent';
import FeaturedPost from '../components/featured-post/FeaturedPostComponent';
import Main from '../components/main/MainComponent';
import Footer from '../components/footer/FooterComponent';
import { posts } from '../const';
import PriceCalculatorComponent from '../components/price-calculator-component/PriceCalculatorComponent';
import { Box } from '@mui/material';


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
  image: 'https://source.unsplash.com/random?wallpapers',
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
      '../../signin-page',
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
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="ROOMPLANNER" sections={[]} />
        <main>

          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
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