import { Box, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { differenceInCalendarDays } from 'date-fns';



const PriceCalculatorComponent = () => {

    //Constantes
    const tipoDeHabitaciones = {
        'Sencilla': 50000,
        'Premium': 70000,
        'Super Premium': 80000,
        'Presidencial:': 90000
    }


    //Hooks
    const [fechaIngreso, setFechaIngreso] = useState(new Date);
    const [fechaSalida, setFechaSalida] = useState(new Date);
    const [diasSeleccionados, setDiasSeleccionados] = useState(0);
    const [cantidadPersonas, setCantidadPersonas] = useState('');
    const [tipoDeHabitacion, setTipoDeHabitacion] = useState('');

    // Funciones handle

    //Función para detectar cambios en la fecha de ingreso
    const handleFechaIngreso = (date: Date) => {
        setFechaIngreso(date);
    }

    //Función para detectar cambios en el input de cantidad de personas
    const handleChangeCantidadPersonas = (event: SelectChangeEvent) => {

        setCantidadPersonas(event.target.value);
    }

    //Función para detectar cambios en el input de tipo de habitación
    const handleChangeTipoHabitacion = (event: SelectChangeEvent) => {
        setTipoDeHabitacion(event.target.value);
    }


    return (
        <Paper elevation={10} sx={{

        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} textAlign={'center'}>
                    <h2>¡Calcula el precio de tu próxima reserva!</h2>
                </Grid>
                <Grid item xs={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            format="DD/MM/YYYY"
                            sx={{
                                margin: 2,
                            }}
                            label={'Fecha de ingreso'} />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            format="DD/MM/YYYY"
                            sx={{
                                margin: 2,
                            }}
                            label={'Fecha de salida'}
                            onChange={handleFechaIngreso}
                        />

                    </LocalizationProvider>
                </Grid>

                <Grid item xs={3}>
                    <InputLabel id="label-cantidad-personas" sx={{ marginLeft: 2 }}>Cantidad de personas</InputLabel>
                    <Select
                        labelId='label-cantidad-personas'
                        id='input-cantidad-personas'
                        value={cantidadPersonas}
                        label="Cantidad de personas"
                        onChange={handleChangeCantidadPersonas}
                        fullWidth
                        sx={{
                            margin: 2
                        }}
                    >
                        <MenuItem value={1}> 1 </MenuItem>
                        <MenuItem value={2}> 2 </MenuItem>
                        <MenuItem value={3}> 3 </MenuItem>

                    </Select>
                    <h1>{cantidadPersonas}</h1>
                </Grid>
                <Grid item xs={3}>
                    <InputLabel id="label-tipo-habitacion" sx={{ marginLeft: 2 }}>Tipo de habitación</InputLabel>
                    <Select
                        labelId='label-tipo-habitacion'
                        id='input-tipo-habitacion'
                        value={tipoDeHabitacion}
                        label="Tipo de Habitación"
                        onChange={handleChangeTipoHabitacion}
                        fullWidth
                        sx={{
                            margin: 2
                        }}
                    >
                        {Object.keys(tipoDeHabitaciones).map((tipoHabitacion, index) => (
                            <MenuItem key={index} value={tipoHabitacion}>
                                {tipoHabitacion}
                            </MenuItem>
                        ))}

                    </Select>
                </Grid>
            </Grid>
            <h1>{ }</h1>
        </Paper >
    );
};

export default PriceCalculatorComponent;