import React from 'react'
import {Box, Container, Grid, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

const socialLinks = [
    {
        href: 'https://www.linkedin.com/in/mikee-morales-51661293/',
        icon: <LinkedInIcon/>,
    },
    {
        href: 'https://www.instagram.com/mikeemorales/',
        icon: <InstagramIcon/>
    }
]

const AboutMain = () => {
    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} lg={6}>
                    <Box>
                        <Typography variant={'h5'} sx={{ mb: 3 }}>Contact Me:</Typography>
                        <Typography>j.mikeemorales@gmail</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Box>
                        <Typography variant={'h5'} sx={{ mb: 3 }}>Socials:</Typography>
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.href} target={'_blank'}>{link.icon}</Link>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutMain