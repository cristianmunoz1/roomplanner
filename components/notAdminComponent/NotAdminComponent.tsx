import { Typography } from '@material-ui/core';
import * as React from 'react';
import 'tailwindcss/tailwind.css';
import DoNotDisturbOffIcon from '@mui/icons-material/DoNotDisturbOff';

export default function NotAdminComponent() {
    return (
        <div className='flex flex-col content-center items-center w-full h-full pt-20'>
            <Typography className='text-4xl'>Funcionalidad ADMINISTRATIVA</Typography>
            <Typography className='text-4xl font-bold mt-10 text-red-600 -left-1'>ACCESO DENEGADO</Typography>
            <DoNotDisturbOffIcon className='text-9xl mt-28 text-red-600' />
        </div>
    )
}