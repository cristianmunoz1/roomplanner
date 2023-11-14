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
import Select from '@mui/material/Select';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { set } from 'date-fns';
import { Alert, Snackbar } from '@mui/material';


const defaultTheme = createTheme();

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
  const [admin, setAdmin] = useState(false);
  const [state, setState] = useState(true)

  /* Hooks para guardar errores en los campos */
  const [errorNombres, setErrorNombres] = useState(false);
  const [errorApellidos, setErrorApellidos] = useState(false);
  const [errorNumeroDocumento, setErrorNumeroDocumento] = useState(false);
  const [errorCorreo, setErrorCorreo] = useState(false);
  const [errorTelefono, setErrorTelefono] = useState(false);
  const [errorContrasena, setErrorContrasena] = useState(false);
  const [errorContrasena1, setErrorContrasena1] = useState(false);
  const [errores, setErrores] = useState(true);
  const [errorDuplicados, setErrorDuplicados] = useState(false)
  const [registrado, setRegistrado] = useState(false);

  const [registerUser, setRegisterUser] = useState({

    id: '1007460166',
    idType: 2,
    names: 'Cristian',
    surnames: 'Munoz',
    mail: 'satanas@gmail.com',
    phone: '3154987911',
    password: 'Cristian123',
    state: false,
    admin: false
  })

  useEffect(() => {
    setRegisterUser({
      id: numeroDocumento,
      idType: tipoDocumento,
      names: nombres,
      surnames: apellidos,
      mail: correo,
      phone: telefono,
      password: contrasena,
      state: false,
      admin: false
    }),
      [nombres, apellidos, tipoDocumento, numeroDocumento, correo, telefono, contrasena, contrasena1]
  });

  /* Funciones para validar que los campos sean correctos */
  const validarVacio = (cadena: string): boolean => {
    if (cadena.length === 0) {
      return true;
    } else {
      return false;
    }

  }

  const validarNombres = (nombres: string) => {
    const expRegNombres = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]{3,}$/u;
    const validacionNombres = expRegNombres.test(nombres);
    if (validarVacio(nombres) || validacionNombres) {
      setErrorNombres(false);
    } else {
      setErrorNombres(true);
    }
  }

  const validarApellidos = (apellidos: string) => {
    const expRegApellidos = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]{3,}$/u;
    const validacionApellidos = expRegApellidos.test(apellidos);
    if (validarVacio(apellidos) || validacionApellidos) {
      setErrorApellidos(false);
    } else {
      setErrorApellidos(true);
    }
  }

  const validarNumeroIdentificacion = (numero: string) => {
    const expRegCedulaCiudadania = /^\d{5,10}$/;
    const expRegCedulaExtranjeria = /^E(\d{1,6}|)$/;
    const expRegPasaporte = /^([A-Z\d]+|)$/;

    if (validarVacio(numero)) {
      setErrorNumeroDocumento(false);
    } else {
      if (tipoDocumento === 1) {
        setErrorNumeroDocumento(!expRegCedulaCiudadania.test(numero));
      } else if (tipoDocumento === 2) {
        setErrorNumeroDocumento(!expRegCedulaExtranjeria.test(numero));
      } else if (tipoDocumento === 3) {
        setErrorNumeroDocumento(!expRegPasaporte.test(numero));
      }
    }

  }

  const validarCorreo = (correo: string) => {
    const emailPattern = /^(?:[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}|)$/;
    const errorCorreo1 = emailPattern.test(correo)
    setErrorCorreo(!errorCorreo1);
  }

  const validarTelefono = (telefono: string) => {
    const expRegTelefono = /^(3\d{9})?$/;
    setErrorTelefono(!expRegTelefono.test(telefono));
  }

  const validarContrasena = (contrasena: string) => {
    const expRegContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,20}$/

    if (contrasena.length === 0) {
      setErrorContrasena(false);
    } else {
      setErrorContrasena(!expRegContrasena.test(contrasena));
    }

  }

  const validarContrasena1 = (contrasena1: string) => {
    if (contrasena === contrasena1) {
      setErrorContrasena1(false);
    } else {
      setErrorContrasena1(true);
    }
  }

  const validarErrores = () => {
    if (validarVacio(nombres) || validarVacio(apellidos) || validarVacio(numeroDocumento) || validarVacio(correo) || validarVacio(telefono) || validarVacio(contrasena) || validarVacio(contrasena1) || (errorNombres) || (errorApellidos) || (errorNumeroDocumento) || (errorCorreo) || (errorTelefono) || (errorContrasena) || (errorContrasena1)) {
      setErrores(true);
      // enqueueSnackbar('Tiene errores en el formulario, revise nuevamente');
    } else {
      setErrores(false);
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

  const handleChangeTelefono = (event) => {
    setTelefono(event.target.value);
  }

  const handleChangeContrasena = (event) => {
    setContrasena(event.target.value);
  }

  const handleChangeContrasena1 = (event) => {
    setContrasena1(event.target.value);
  }

  /* Función para enviar los datos al back */
  const handleSubmit = async () => {

    scrollTop();
    if (errores == true) {
      console.log("Hay campos vacíos o tiene errores en el formulario, verifique")
    } else {
      try {

        const response = await Axios.post('http://localhost:8090/roomplanner/api/customer/save', registerUser);
        console.log(response.status, 'Este es el código de respueta de la API')
        if (response.status === 201) {
          setRegistrado(true);
        } else {
          console.log('Error al realizar el registro')
        }
      } catch (error) {
        if (error.request.status === 500) {
          console.log("El usuario ya está creado en la plataforma")
          setErrorDuplicados(true);
        }
      }
    }
  }

  /* Funciones para manejar los cambios de estado y asignar errores a los campos */
  useEffect(() => {
    validarNombres(nombres),
      [nombres]
  });

  useEffect(() => {
    validarApellidos(apellidos),
      [apellidos]
  });

  useEffect(() => {
    validarNumeroIdentificacion(numeroDocumento),
      [numeroDocumento]
  });

  useEffect(() => {
    validarCorreo(correo),
      [correo]
  });

  useEffect(() => {
    validarTelefono(telefono),
      [telefono]
  });

  useEffect(() => {
    validarContrasena(contrasena),
      [contrasena]
  });

  useEffect(() => {
    validarContrasena1(contrasena1),
      [contrasena1]
  });

  useEffect(() => {
    validarErrores();
  })

  const scrollTop = () => {
    window.scroll(0, 0);
  }

  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Snackbar open={errorDuplicados} autoHideDuration={6000}>
          <Alert severity="error" sx={{ width: '100%' }}>
            El usuario ya existe en la plataforma. Inicie Sesión
          </Alert>
        </Snackbar>

        <Snackbar open={registrado} autoHideDuration={6000}>
          <Alert severity="success" sx={{ width: '100%' }}>
            ¡El usuario fué registrado correctamente!
          </Alert>
        </Snackbar>
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
                  onChange={handleChangeApellidos}
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
                      value={tipoDocumento}
                      label="Tipo de Identificación"
                      onChange={handleChangeTipo}
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
                  error={errorNumeroDocumento}
                  onChange={handleChangeNumeroIdentificacion}
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
                  error={errorCorreo}
                  onChange={handleChangeCorreo}
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
                  error={errorTelefono}
                  onChange={handleChangeTelefono}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password1"
                  label="Contraseña"
                  type="password"
                  id="password1"
                  autoComplete="new-password1"
                  error={errorContrasena}
                  onChange={handleChangeContrasena}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Repetir contraseña"
                  type="password"
                  id="password2"
                  autoComplete="new-password2"
                  error={errorContrasena1}
                  onChange={handleChangeContrasena1}
                />
              </Grid>
            </Grid>
            <Button
              className='bg-blue-500 hover:shadow-lg hover:shadow-blue-300'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
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