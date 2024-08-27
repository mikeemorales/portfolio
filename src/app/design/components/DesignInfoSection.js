import React from 'react'
import {Box, Container, Typography} from "@mui/material";

const DesignInfoSection = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box id='DesignInfoSection' sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <Typography variant='h4' sx={{ fontWeight: 700 }}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Although I'm currently a developer, I will always have a <Box component='span' className='gradient-text-2'>love for design.</Box> Here are some things that help me stay <Box component='span' className='gradient-text-2'>creative.</Box> 
                </Typography>
            </Box>
        </Container>
    );
}

export default DesignInfoSection