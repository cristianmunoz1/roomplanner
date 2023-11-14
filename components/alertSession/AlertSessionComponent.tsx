import { Container, Typography } from '@material-ui/core';
import * as React from 'react';
import 'tailwindcss/tailwind.css';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

export default function AlertSessionComponent() {

    return (
        <div className='flex flex-col content-center items-center w-full h-full pt-20'>
            <Typography className='text-4xl'>Inicie sesión para continuar...</Typography>
            <GppMaybeIcon className='text-9xl mt-28'></GppMaybeIcon>
        </div>
    )

}