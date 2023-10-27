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


const sections = [
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
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    id: 'Featured post',
    label: 'Featured post',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    id: 'Featured post',
    label: 'Featured post',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];





export default function Blog() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="ROOMPLANNER" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />

          </Grid>
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
        description="Something here to give the footer a purpose!"
      />
    </>
  );
}