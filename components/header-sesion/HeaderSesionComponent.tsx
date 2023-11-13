import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Link from '@mui/material/Link';
interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {

    const router = useRouter();

    const { title } = props;

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
                <Typography>
                    Sesión iniciada
                </Typography>
            </Toolbar>
        </React.Fragment >
    );
}

export default Header;