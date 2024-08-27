"use client"
import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const DesignDodgers = () => {
    return (
        <Container id='dodgersSection' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', minHeight: '100vh' }}>
                <Typography variant='h5' sx={{ mb: 1 }}>
                <Typography sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    In our current 2024 roster, my home team's big four!
                </Typography>
                <Box
                    component={'img'}
                    sx={{
                        height: {xs: 400, md: 892, lg: 892},
                        width: {xs: '100%', md: 800, lg: 800},
                        display: 'flex',
                        justifyContent: 'center',
                        margin: 'auto'
                    }}
                    src='/img/design-dodgers.png'
                    alt='Dodgers Big Four'
                />
                </Typography>
        </Container>
    );
}


export default DesignDodgers;
