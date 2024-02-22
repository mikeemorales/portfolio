import React from 'react'
import {Box, Container, Typography} from "@mui/material";

const HeroSection = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box id='heroSection' sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <Typography variant='h2' sx={{ fontWeight: 700 }}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Howdy. My name is Mikee Morales and I'm a <Box component='span' className='gradient-text'>Software Developer.</Box>
                </Typography>
            </Box>
        </Container>
    );
}

export default HeroSection
