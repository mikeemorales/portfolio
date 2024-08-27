"use client"
import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const DesignUsOpen = () => {
    return (
        <Container id='usOpenSection' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', minHeight: '100vh' }}>
                <Typography variant='h5' sx={{ mb: 1 }}>
                <Typography sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    A design submission to USGA for the 2020 U.S. Open @ Winged Foot.
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
                    src='/img/design-usopen.png'
                    alt='US Open @ Winged Foot'
                />
                </Typography>
        </Container>
    );
}


export default DesignUsOpen;
