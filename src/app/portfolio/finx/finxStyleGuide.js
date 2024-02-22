import React from 'react'
import {Box, Container, Typography} from "@mui/material";

const FinXStyleGuide = () => {
    return (
        <Container id='finxStyleGuide' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', minHeight: '100vh' }}>
                <Typography variant='h5' sx={{ mb: 1 }}>FinX Style Guide</Typography>
                <Typography sx={{ mb: 2 }}>
                    With my previous knowledge of design, I created the FinX company style guide that
                    was implemented in all their present and future applications. This included color schemes,
                    typography, iconography, CSS for all CTA components and how to implement them into the stack,
                    downloadable resources, and visible light and dark mode examples.
                </Typography>
                <Box
                    component={'img'}
                    sx={{
                        height: {xs: 250, md: 550, lg: 550},
                        width: {xs: '100%', md: 750, lg: 750},
                        mx: 'auto'
                    }}
                    src='/img/finx-styleguide.gif'
                    alt='finx style guide'
                />
        </Container>
    )
}

export default FinXStyleGuide