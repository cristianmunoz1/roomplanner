import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HotelIcon from '@mui/icons-material/Hotel';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Axios from 'axios';
import { useEffect, useState } from 'react';



const defaultTheme = createTheme();

const handleSignUp = async () => {
  try {
    const response = await Axios.post('endpoint', {

    })
  } catch (error) {

  }
}

function SignUp() {

  /*Hooks para guardar todos los campos del formulario*/
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState(1);
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [contrasena1, setContrasena1] = useState('');

  /* Hooks para guardar errores en los campos */
  const [errorNombres, setErrorNombres] = useState(false);
  const [errorApellidos, setErrorApellidos] = useState(false);
  const [errorNumeroDocumento, setErrorNumeroDocumento] = useState(false);
  const [errorCorreo, setErrorCorreo] = useState(false);
  const [errorTelefono, setErrorTelefono] = useState(false);
  const [errorContrasena, setErrorContrasena] = useState(false);
  const [errorContrasena1, setErrorContrasena1] = useState(false);

  /* Funciones para validar que los campos sean correctos */
  const validarNombres = (nombres: string) => {
    const expRegNombres = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]{3,}$/u;
    const validacionNombres = expRegNombres.test(nombres);
    if (nombres.length === 0 || validacionNombres) {
      setErrorNombres(false);
    } else {
      setErrorNombres(true);
    }
  }

  const validarApellidos = (apellidos: string) => {
    const expRegApellidos = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]{3,}$/u;
    const validacionApellidos = expRegApellidos.test(apellidos);
    if (apellidos.length === 0 || validacionApellidos) {
      setErrorApellidos(false);
    } else {
      setErrorApellidos(true);
    }
  }

  const validarNumeroIdentificacion = (numero: string) => {
    const expRegCedulaCiudadania = /^\d{5,10}$/;
    const expRegCedulaExtranjeria = /^(\d{1,6}|)$/;
    const expRegPasaporte = /^([A-Z\d]+|)$/;

    if (tipoDocumento === 1) {
      setErrorNumeroDocumento(expRegCedulaCiudadania.test(numero));
    } else if (tipoDocumento === 2) {
      setErrorNumeroDocumento(expRegCedulaExtranjeria.test(numero));
    } else if (tipoDocumento === 3) {
      setErrorNumeroDocumento(expRegPasaporte.test(numero));
    }
  }

  const validarCorreo = (correo: string) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    setErrorCorreo(emailPattern.test(correo));
  }

  const validarTelefono = (telefono: string) => {
    const expRegTelefono = /^3\d{9}$/;
    setErrorTelefono(expRegTelefono.test(telefono));
  }

  const validarContrasena = (contrasena: string) => {
    const expRegContrasena = /^(?=.*[A-ZÑ])(?=.*[a-z])(?=.*\d)(?=.*[.,;])[A-Za-zÑñ\d.,;]{10,20}$/;
    setErrorContrasena(expRegContrasena.test(contrasena));
  }

  const validarContrasena1 = (contrasena1: string) => {
    if (contrasena === contrasena1) {
      setErrorContrasena1(false);
    } else {
      setErrorContrasena1(true);
    }
  }


  /* Funciones para manejar los cambios de los campos */
  const handleChangeName = (event) => {
    setNombres(event.target.value);
  }

  const handleChangeApellidos = (event) => {
    setApellidos(event.target.value);
  }

  const handleChangeTipo = (event) => {
    setTipoDocumento(event.target.value);
  }

  const handleChangeNumeroIdentificacion = (event) => {
    setNumeroDocumento(event.target.value);
  }

  const handleChangeCorreo = (event) => {
    setCorreo(event.target.value);
  }


  const handleChangeContrasena = (event) => {
    setContrasena(event.target.value);
  }

  const handleChangeContrasena1 = (event) => {
    setContrasena1(event.target.value);
  }

  /* Funciones para manejar los cambios de estado y asignar errores a los campos */
  /*   useEffect(() => {
      
      , [apellidos]
    }); */


  useEffect(() => {
    validarNombres(nombres),
      [nombres]
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <HotelIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nombres"
                  autoFocus
                  error={errorNombres}
                  onChange={handleChangeName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellidos"
                  name="lastName"
                  error={errorApellidos}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="type-id">Tipo documento</InputLabel>
                    <Select
                      labelId="type-id"
                      id="type-id"
                      value={tipoDocumento.toString}
                      label="Tipo de Identificación"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Cedula de ciudadania</MenuItem>
                      <MenuItem value={2}>Cedula de extranjeria</MenuItem>
                      <MenuItem value={3}>Pasaporte</MenuItem>

                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cedula"
                  label="Numero de documento"
                  name="cedula"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Telefono"
                  label="Número telefónico"
                  name="telefono"
                  autoComplete="telefono"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password1"
                  label="Contraseña"
                  type="password1"
                  id="password1"
                  autoComplete="new-password1"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Repetir contraseña"
                  type="password2"
                  id="password2"
                  autoComplete="new-password2"
                />
              </Grid>
            </Grid>
            <Button
              className='bg-blue-500 hover:shadow-lg hover:shadow-blue-300'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleChangeName}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin-page" variant="body2">
                  ¿Ya tienes una cuenta? Iniciar sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;