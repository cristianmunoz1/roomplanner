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

const HeaderSesion = (props: HeaderProps) => {
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

export default HeaderSesion;