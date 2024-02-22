import React from 'react'
import {Box, Container, Typography} from "@mui/material";

const infoSection = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box id='infoSection' sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <Typography variant='h3' sx={{ fontWeight: 700 }}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    With a Degree in Design and experience as a <Box component='span' className='gradient-text-2'>Graphic/Web Designer</Box> for over five years, I made a career change to <Box component='span' className='gradient-text-2'>Software Development</Box> in 2021.
                </Typography>
            </Box>
        </Container>
    );
}

export default infoSection