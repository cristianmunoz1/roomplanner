import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, Select, MenuItem, Button } from '@mui/material';
import { differenceInCalendarDays, format } from 'date-fns';

const PriceCalculatorComponent = () => {
    const [fechaIngreso, setFechaIngreso] = useState(new Date());
    const [fechaSalida, setFechaSalida] = useState(new Date());
    const [tipoHabitacion, setTipoHabitacion] = useState('Estandar');
    const [diasSeleccionados, setDiasSeleccionados] = useState(1);

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

    };

    return (
        <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h5" gutterBottom>
                Calculadora de Precios de Reservas
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Fecha Inicial"
                        type="date"
                        value={format(fechaIngreso, 'yyyy-MM-dd')}
                        onChange={handleInputFechaIngreso}
                        InputLabelProps={{
                            shrink: true,
                        }}
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
                    />
                </Grid>
                <Grid item xs={12}>
                    <Select
                        label="Tipo de Habitación"
                        value={tipoHabitacion}
                        onChange={handletipoHabitacionChange}
                    >
                        <MenuItem value="standard">Estándar</MenuItem>
                        <MenuItem value="deluxe">Deluxe</MenuItem>
                        <MenuItem value="suite">Suite</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Número de Días"
                        value={diasSeleccionados}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={calculatePrice}>
                        Calcular Precio
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default PriceCalculatorComponent;
