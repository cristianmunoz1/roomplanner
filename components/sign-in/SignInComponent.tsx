import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import HotelIcon from '@mui/icons-material/Hotel';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../header/HeaderComponent';
import 'tailwindcss/tailwind.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, Container, Snackbar } from '@mui/material';
import { useRouter } from 'next/navigation';

const defaultTheme = createTheme();

interface User {
    nombres: string;
    apellidos: string;
    tipoDocumento: number;
    numeroDocumento: string;
    correo: string;
    telefono: string;
    admin: boolean
}


function SignInComponent() {
    const router = useRouter();
    const [error, setError] = React.useState(false);

    const handleClick = () => {
        setError(true)
    }

    const handleSubmit = async () => {
        try {
            const response = await Axios.get(`http://localhost:8090/roomplanner/api/customer/checkcredentials/${usuario}/${password}`, {});
            if (response.status === 200) {
                console.log("Conexión exitosa");
                if (response.data != null) {
                    console.log("El usuario y la contraseña son válidos");
                    const globalUser: User = {
                        nombres: response.data.names,
                        apellidos: response.data.surnames,
                        tipoDocumento: response.data.idType,
                        numeroDocumento: response.data.id,
                        correo: response.data.mail,
                        telefono: response.data.phone,
                        admin: response.data.admin,
                    }

                    sessionStorage.setItem('userData', JSON.stringify(globalUser));
                } else {
                    console.log(response.data, usuario, password);
                    console.log("El usuario y la contraseña NO son válidos");
                }

                if (response.data != null) {
                    router.push('landing-page')
                } else {
                    handleClick()
                }
            } else {
                console.log('Error al realizar el ingreso')
            }
        } catch (error) {
            console.log("Este es el error en el ingreso ", error);
        }

    };

    useEffect(() => {
        console.log(usuario),
            [usuario]
    });

    useEffect(() => {
        console.log(password),
            [password]
    });

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsuario = (event) => {
        setUsuario(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setError(false)
    }



    return (

        <ThemeProvider theme={defaultTheme}>

            <Header title='ROOMPLANNER' />
            <Grid container component="main" sx={{ height: '100vh' }}>

                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}
                    className='mt-0'
                />
                <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Hay errores en las credenciales. Verifique.
                    </Alert>
                </Snackbar>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <HotelIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Inicia Sesión en Roomplanner
                        </Typography>
                        <Container >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Correo electrónico"
                                name="email"
                                onChange={handleChangeUsuario}
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                onChange={handleChangePassword}
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                onClick={handleSubmit}
                                fullWidth
                                className='btn bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md hover:shadow-blue-700'
                            >
                                Iniciar Sesión
                            </Button>
                            <Grid container>
                                {/* <Grid item xs>
                                    <Link href="#" variant="body2">
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </Grid> */}
                                <Grid item>
                                    <Link href="/signup-page" variant="body2">
                                        {"¿No tienes una cuenta?. Créala"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider >

    );

}
export default SignInComponent;