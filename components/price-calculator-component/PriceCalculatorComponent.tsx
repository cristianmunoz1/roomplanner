import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, Select, MenuItem, Button } from '@mui/material';
import { differenceInCalendarDays, format } from 'date-fns';

const PriceCalculatorComponent = () => {


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

    const handleInputFechaIngreso = (event) => {
        const fechaIngreso = new Date(event.target.value);
        setFechaIngreso(fechaIngreso);
        updateDiasSeleccionados(fechaIngreso, fechaSalida);
    };

    const handleInputFechaSalida = (event) => {
        const newEndDate = new Date(event.target.value);
        setFechaSalida(newEndDate);
        updateDiasSeleccionados(fechaIngreso, newEndDate);
    };

    const updateDiasSeleccionados = (start, end) => {
        const days = differenceInCalendarDays(end, start);
        if (days < 0) {
            setDiasSeleccionados(0);
        } else {
            setDiasSeleccionados(days);
        }

    };

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
                ¡Cotice su reserva ahora!
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
                </Grid>
                <Grid item xs={12}>
                    <Button className='text-white bg-sky-600 hover:bg-sky-700' onClick={calculatePrice}>
                        Calcular Precio
                    </Button>
                </Grid>
                <h1>{precioActual}</h1>
            </Grid>
        </Paper >
    );
};

export default PriceCalculatorComponent;
