import * as React from 'react';
import Header from '../components/header/HeaderComponent';
import { Container } from '@mui/material';
import 'tailwindcss/tailwind.css';

export default function roomDetailsPage() {
    return (
        <Container maxWidth="lg">
            <Header title='ROOMPLANNER'></Header>
        </Container>

    );
}