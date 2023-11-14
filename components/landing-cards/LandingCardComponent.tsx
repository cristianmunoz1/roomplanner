import { Container, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Image from 'next/image';

interface landingCardProps {
    image: string;
    title: string;
    description: string;
    /* true para tarjeta con imágen a derecha o false para tarjeta con imágen a izquierda */
    direction: boolean;
}

export default function LandingCardComponent(props: landingCardProps) {

    const { image, title, description, direction } = props;

    if (direction === false) {
        return (
            <Container>
                <Grid container spacing={5} xs={12} className='flex flex-row items-center content-center pb-12 mb-10'>
                    <Grid item xs={12} sm={4}>
                        <Image src={image} alt='Tarjeta con foto a izquierda' width={400} height={500} />
                    </Grid>
                    <Grid item xs={12} sm={8} className='flex content-center items-center flex-col'>
                        <Typography variant='h4' className='pb-5 font-serif' >{title}</Typography>
                        <Divider />
                        <Typography variant='body1' className='font-serif'>{description}</Typography>
                    </Grid>
                </Grid >
            </Container >
        );
    } else {
        return (
            <Container>
                <Grid container spacing={5} xs={12} className='flex flex-row items-center content-center pb-9 mb-10'>
                    <Grid item xs={12} sm={8} className='flex content-center items-center flex-col'>
                        <Typography variant='h4' className='pb-5 font-serif'>{title}</Typography>
                        <Divider />
                        <Typography variant='body1' className='font-serif'>{description}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Image src={image} alt='Tarjeta con foto a derecha' width={400} height={500}></Image>
                    </Grid>
                </Grid >
            </Container>
        );
    }


}