import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PriceCalculatorComponent = () => {
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
                            label={'Fecha de salida'} />
                    </LocalizationProvider>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default PriceCalculatorComponent;