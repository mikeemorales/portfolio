import React from 'react'
import {Box, Container} from "@mui/material";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";

const pageInfo = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Work',
        href: '/portfolio'
    },
    {
        title: 'Design',
        href: '/design'
    },
    {
        title: 'About',
        href: '/about'
    },
]

const TopNav = () => {
    return (
        <Container>
            <AppBar
                component='nav'
                position='fixed'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255,255,255,0)',
                    boxShadow: 'none',
                    mt: 5
                }}
            >
                <Box sx={{  display: 'flex', justifyContent: 'center', gap: 10, fontWeight: 700 }}>
                    {pageInfo.map((page) => (
                        <Link key={page} href={page.href}>{page.title}</Link>
                    ))}
                </Box>
            </AppBar>
        </Container>
    )
}

export default TopNav