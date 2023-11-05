import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from '@mui/material/Link';
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
                <Link href='/'>
                    <Image src={'/images/logo.jpg'} alt='Logo' width={70} height={100}>
                    </Image>
                </Link>
                <Typography
                    className='text-4xl font-bold font-sans ml-8'
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
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
            </Toolbar>
        </React.Fragment >
    );
}

export default Header;