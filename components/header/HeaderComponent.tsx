import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

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
                    <MenuIcon></MenuIcon>
                </Toolbar>
            </React.Fragment >
        );
    }

}

export default Header;