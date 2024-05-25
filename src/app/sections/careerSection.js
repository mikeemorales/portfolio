import React from 'react'
import {Box, Container, Grid, Typography} from "@mui/material";
import CareerTabs from "@/app/sections/CareerTabs";

const CareerSection = () => {
    return (
        <Container>
            <Box id="careerSection" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: {xs: '100vh', md: '100vh', lg: '100vh'}}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <Typography variant='h4' sx={{ mb: 1, fontWeight: 700, textAlign: 'center' }}>
                            Career
                        </Typography>
                        <CareerTabs/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default CareerSection