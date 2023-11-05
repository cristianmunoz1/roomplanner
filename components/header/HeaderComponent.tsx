import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';

interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {

    const router = useRouter();

    const handleRegistrarseClick = () => {
        router.push('signup-page');
    };

    const handleIniciarsesionClick = () => {
        router.push('signin-page');
    };

    const { title } = props;

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <LocalHotelIcon
                    className=' text-4xl  text-teal-400 border-solid border-black border-2 bg-teal-950 p-0 '></LocalHotelIcon>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
                <Button variant="outlined" size="small" onClick={handleRegistrarseClick}>
                    Registrarse
                </Button>
                <Button variant="outlined" size="small" style={{ marginLeft: "5px" }} onClick={handleIniciarsesionClick}>
                    Iniciar sesión
                </Button>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
            </Toolbar>
        </React.Fragment>
    );
}

export default Header;