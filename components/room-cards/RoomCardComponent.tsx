import { Container, Divider, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import Image from 'next/image';

interface landingCardProps {
    image: string;
    title: string;
    description: string;
    price: string;
}

export default function LandingCardComponent(props: landingCardProps) {

    const { image, title, description, price } = props;

   {
        return (
            <Paper className='mt-32' elevation={10}>
                <Grid container  xs={12} className='flex flex-row items-center content-center '>
                    <Grid item xs={12} sm={4}>
                        <Image src={image} alt='Tarjeta con foto a izquierda' width={400} height={500}  
                        className='rounded-l-lg object-contain h-102 w-102' />
                    </Grid>
                    <Grid item xs={12} sm={8} className='flex content-center items-center flex-col'>
                        <Typography variant='h4' className=' font-serif' >{title}</Typography>
                        <Typography variant='h5' className=' font-serif text-orange-500'>{price}</Typography>
                        <Typography variant='body1' className='font-serif mx-8'>{description}</Typography>
                    </Grid>
                </Grid >
            </Paper >
        );
    } 

}