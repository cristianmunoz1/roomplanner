import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Container } from '@mui/material';

interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {

    const router = useRouter();

    const handleRegistrarseClick = () => {
        router.push('signup-page');
    };
    //implementación del menu
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleCloseSession = () => {
        sessionStorage.setItem('userData', null)
        router.push('/')
    }

    const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleIniciarsesionClick = () => {
        router.push('signin-page');
    };

    const handleViewReserves = () => {
        router.push('/reserves-page')
    }

    const handleMyViewReserves = () => {
        router.push('/my-reserves-page')
    }

    const { title } = props;

    const [userData, setUserData] = React.useState(null);

    React.useEffect(() => {
        const user = sessionStorage.getItem('userData')
        if (user) {
            setUserData(JSON.parse(user));
        }

    }, []
    )

    React.useEffect(() => {
        console.log(userData),
            [userData]
    })


    if (userData === null) {
        return (
            <React.Fragment>
                <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 0 }}>
                    <Link href='/'>
                        <Image src={'/images/logo.jpg'} alt='Logo' width={70} height={70}>
                        </Image>
                    </Link>
                    <Typography
                        className='text-4xl font-bold font-mono ml-40'
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        sx={{ flex: 1 }}
                    >
                        {title}
                    </Typography>
                    <Button className='bg-blue-500 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400 text-white font-bold py-2 px-3 mx-3 border-b-4 border-blue-700 hover:border-blue-500 rounded' size="small" onClick={handleRegistrarseClick}>
                        Registrarse
                    </Button>
                    <Button className='bg-blue-500 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' size="small" style={{ marginLeft: "5px" }} onClick={handleIniciarsesionClick}>
                        Iniciar sesión
                    </Button>
                </Toolbar>
            </React.Fragment >
        );
    } else {
        return (

            <React.Fragment>
                <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 0 }}>
                    <Link href='/'>
                        <Image src={'/images/logo.jpg'} alt='Logo' width={70} height={70}>
                        </Image>
                    </Link>
                    <Typography
                        className='text-4xl font-bold font-mono ml-40'
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        sx={{ flex: 1 }}
                    >
                        {title}
                    </Typography>
                    <AccountCircleIcon className='mr-3 text-4xl' />
                    <Typography className='font-bold text-xl mr-3'>
                        Hola, {userData.nombres}
                    </Typography>

                    <ArrowCircleRightIcon onClick={handleMenu} className='text-blue-500 text-4xl cursor-pointer'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined} />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleMyViewReserves}>Mis reservas</MenuItem>
                        <MenuItem onClick={handleViewReserves}>Reservas</MenuItem>
                        <MenuItem onClick={handleCloseSession}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </React.Fragment >
        );
    }

}

export default Header;