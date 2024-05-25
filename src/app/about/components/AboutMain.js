import React from 'react'
import {Box, Container, Typography} from "@mui/material";
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
        <Container sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <Typography variant={'h5'} sx={{ mb: 3 }}>Contact Me:</Typography>
                <Typography sx={{ mb: 3 }}>j.mikeemorales@gmail</Typography>
                <Typography variant={'h5'} sx={{ mb: 3 }}>Socials:</Typography>
                {socialLinks.map((link, index) => (
                    <Link key={index} href={link.href} target={'_blank'}>{link.icon}</Link>
                ))}
            </Box>
        </Container>
    )
}

export default AboutMain