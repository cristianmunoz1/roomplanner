import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, TextField, Select, MenuItem, Button, Container } from '@mui/material';
import { differenceInCalendarDays, format, addDays } from 'date-fns';
import Axios from 'axios';
import emailjs from '@emailjs/browser'
import Footer from '../footer/FooterComponent';

export default function BookingComponent() {


    const preciosHabitaciones = {
        'Estandar': 60000,
        'Premium': 90000,
        'Super Premium': 120000,
        'Suite Presidencial': 200000
    }

    const [fechaIngreso, setFechaIngreso] = useState(new Date());
    const [fechaSalida, setFechaSalida] = useState(new Date());
    const [tipoHabitacion, setTipoHabitacion] = useState('Estandar');
    const [diasSeleccionados, setDiasSeleccionados] = useState(1);
    const [precioActual, setPrecioActual] = useState('');

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
    });

    const handleReserva = async () => {
        try {
            //calculatePrice();
            /* const response = await Axios.post('api', {
                 fechaIngreso,
                 fechaSalida,
                 tipoHabitacion,
             });*/

            if (200 === 200) {
                try {
                    let templateParams = {
                        //En vez de que quemar el correo, tomariamos el de la sesión en el momento
                        // Falta hacer el calculo para el envio del precio
                        to_name: 
                        email: 'hotelroomplanner@gmail.com',
                        date_entry: fechaIngreso,
                        date_exit: fechaSalida,
                        type_room: tipoHabitacion,
                        precio: precioActual,
                    }

                    emailjs.send('service_4erds6r', 'template_mub21rj', templateParams, 'u9tf-R5IZ4kBQ_Ylf')
                        .then(function (response) {
                            alert('Reserva realizada con Exito')
                        }, function (error) {
                            alert('Algo ha fallado')
                        })
                } catch (error) {
                    console.log("~file: index.js:12 ~ onSubmit ~error:", error)
                }
                console.log('Reserva exitosa');
            } else {
                console.log('Error al realizar la reserva')
            }
        } catch (error) {
            console.log("Este es el error ", error);
        }
    }

    const handleInputFechaIngreso = (event) => {
        const fechaIngreso = new Date(event.target.value);
        setFechaIngreso(addDays(fechaIngreso, 1));
        updateDiasSeleccionados(fechaIngreso, fechaSalida);
    };

    const handleInputFechaSalida = (event) => {
        const fechaSalida = new Date(event.target.value);
        setFechaSalida(addDays(fechaSalida, 1));
        updateDiasSeleccionados(fechaIngreso, fechaSalida);
    };

    const updateDiasSeleccionados = (start, end) => {
        const days = differenceInCalendarDays(end, start);
        if (days < 0) {
            setDiasSeleccionados(0);
        } else {
            setDiasSeleccionados(days + 1);
        }

    };

    useEffect(() => {
        calculatePrice(),
            [fechaIngreso, fechaSalida, tipoHabitacion]
    });

    const handletipoHabitacionChange = (event) => {

        setTipoHabitacion(event.target.value);
    };

    const calculatePrice = () => {
        const precio = formatter.format(preciosHabitaciones[tipoHabitacion] * diasSeleccionados);
        setPrecioActual(precio);

    };

    return (
        <Paper elevation={3} style={{ padding: '16px', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom className='mb-10'>
                ¡Realice su reserva ahora!
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={6}>

                    <TextField
                        label="Fecha Inicial"
                        type="date"
                        value={format(fechaIngreso, 'yyyy-MM-dd')}
                        onChange={handleInputFechaIngreso}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className='ml-4 w-5/6'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Fecha Final"
                        type="date"
                        value={format(fechaSalida, 'yyyy-MM-dd')}
                        onChange={handleInputFechaSalida}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className='w-5/6'
                    />
                </Grid>

                <Grid item xs={12}
                    sx={{
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                    <p className='text-lg border-b-4 border-1.5 text-lime-700 font-bold p-4'>Número de días reservados: {diasSeleccionados}</p>
                </Grid>
                <Grid item xs={12}>
                    <h2 className='text-bold text-black text-xl'>Seleccione el tipo de habitación</h2>
                    <Select
                        label="Tipo de Habitación"
                        value={tipoHabitacion}
                        onChange={handletipoHabitacionChange}
                        className='w-60'
                    >
                        {Object.keys(preciosHabitaciones).map((tipoHabitacion, index) => (<MenuItem key='{index}' value={tipoHabitacion}>{tipoHabitacion}</MenuItem>))}
                    </Select>
                    <Grid item xs={12}>
                        <h1 className='my-7 text-lime-700 text-bold text-2xl'>Precio: {precioActual}</h1>
                    </Grid>
                </Grid>
                <Container className='content-center w-max flex '>
                    <Grid item xs={6}>
                        <Button className='text-white bg-sky-600 hover:bg-sky-700 w-max' onClick={calculatePrice}>
                            Calcular Precio
                        </Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Button className='text-white bg-sky-600 hover:bg-sky-700 w-max' onClick={handleReserva}>
                            Realizar reserva
                        </Button>
                    </Grid>
                </Container>

            </Grid>
            <Footer
                title="Roomplanner"
                description="Hotel Cinco estrellas, Medellin, Antioquia "
            />
        </Paper >
    );
};

