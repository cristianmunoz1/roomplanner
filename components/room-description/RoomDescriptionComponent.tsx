import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import BedIcon from '@mui/icons-material/Bed';
import TvIcon from '@mui/icons-material/Tv';
import WifiIcon from '@mui/icons-material/Wifi';
import DeskIcon from '@mui/icons-material/Desk';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HotTubIcon from '@mui/icons-material/HotTub';
import { Interface } from 'readline';
import BathroomIcon from '@mui/icons-material/Bathroom';
import SurroundSoundIcon from '@mui/icons-material/SurroundSound';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import LandscapeIcon from '@mui/icons-material/Landscape';

interface roomDescriptionProps {
    tipoHabitacion: string;
}


export default function RoomDescriptionComponent(props: roomDescriptionProps) {

    if (props.tipoHabitacion === "1") {
        return (
            <Grid container xs={12} className='pl-9 pt-5'>
                <Grid container sm={12} className='flex flex-row items-center'>
                    <Grid item sm={12}>
                        <Typography className='font-bold text-lg underline'>Características:</Typography>
                    </Grid>
                    <Grid item sm={5} className='flex flex-row'>
                        <PersonIcon />
                        <Typography className='font-bold'>1 persona</Typography>
                    </Grid>
                    <Grid item sm={5} className='flex flex-row'>
                        <TvIcon />
                        <Typography className='font-bold'> Smart TV</Typography>
                    </Grid>
                    <Grid item sm={5} className='flex flex-row'>
                        <BedIcon />
                        <Typography className='font-bold'> 1 cama sencilla</Typography>
                    </Grid>
                    <Grid item sm={5} className='flex flex-row'>
                        <WifiIcon />
                        <Typography className='font-bold'> Wifi</Typography>
                    </Grid>
                    <Grid item sm={5} className='flex flex-row'>
                        <DeskIcon />
                        <Typography className='font-bold'> 1 escritorio personal</Typography>
                    </Grid>
                    <Grid item sm={5} className='flex flex-row'>
                        <WbSunnyIcon />
                        <Typography className='font-bold'> Iluminación suave</Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    } else if (props.tipoHabitacion === "2") {
        return (
            <Grid container xs={12} className='pl-9 pt-5'>
                <Grid container sm={12} className='flex flex-row items-center'>
                    <Grid item sm={12}>
                        <Typography className='font-bold text-lg underline'>Características:</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <PersonIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold '>2 personas</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <TvIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> Smart TV</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <BedIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> 1 cama doble</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <WifiIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> Wifi</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <DeskIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> 1 escritorio amplio</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <WbSunnyIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> Iluminación led </Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <BathroomIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>1 baño privado</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <SurroundSoundIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>Sistema de sonido</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <BathtubIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>Bañera con hidromasaje</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <LocalPhoneIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>Teléfono</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <EnhancedEncryptionIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold '>Caja fuerte</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <LandscapeIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold '>Vistas cautivantes</Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    } else if (props.tipoHabitacion === "3") {
        return (
            <Grid container xs={12} className='pl-9 pt-5'>
                <Grid container sm={12} className='flex flex-row items-center'>
                    <Grid item sm={12}>
                        <Typography className='font-bold text-lg underline'>Características:</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <PersonIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold '>3 personas</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <TvIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>2 Smart TV</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <BedIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> 2 camas dobles</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <WifiIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> Wifi</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <DeskIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> 2 escritorios amplios</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <WbSunnyIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> Iluminación led </Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <BathroomIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>2 baños privados</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <SurroundSoundIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>Sistema de sonido surround</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <BathtubIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>Bañera con hidromasaje</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <LocalPhoneIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>Teléfono</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <EnhancedEncryptionIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold '>Caja fuerte</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <HotTubIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold '>Jacuzzi</Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    } else if (props.tipoHabitacion === "4") {
        return (
            <Grid container xs={12} className='pl-9 pt-5'>
                <Grid container sm={12} className='flex flex-row items-center'>
                    <Grid item sm={12}>
                        <Typography className='font-bold text-lg underline'>Características:</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <PersonIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold '>5 personas</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <TvIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>4 Smart TV</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <BedIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> 4 camas dobles</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <WifiIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> Wifi</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <DeskIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> 5 escritorios personales</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <WbSunnyIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'> Iluminación led </Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <BathroomIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>3 baños privados</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <SurroundSoundIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>Sistema de sonido</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <BathtubIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>Bañera con hidromasaje</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <LocalPhoneIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold'>Teléfono</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <EnhancedEncryptionIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold '>Caja fuerte</Typography>
                    </Grid>
                    <Grid item sm={4} className='flex flex-row'>
                        <HotTubIcon className='text-sm pt-1 h-full' />
                        <Typography className='font-bold '>Jacuzzi al aire libre</Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    }


}