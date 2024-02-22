import React from 'react'
import {Box, Container, Typography} from "@mui/material";

const FinxWebSocketComponent = () => {
    return (
        <Container id='finxWebSockeet' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', minHeight: '100vh' }}>
            <Typography variant='h5' sx={{ mb: 1 }}>FinX Crypto Websocket</Typography>
            <Typography sx={{ mb: 2 }}>
                While under the mentorship of Geoff FIte, we created a live spot position component using webhooks that established a direct
                connection with live crypto feeds. *This was a major component of a side project that is no longer active*
            </Typography>
            <Box
                component={'img'}
                sx={{
                    height: {xs: 200, md: 300, lg: 400},
                    width: {xs: 350, md: 600, lg: 800},
                    mx: 'auto'
                }}
                src='/img/finx-websocket.gif'
                alt='finx style guide'
            />
        </Container>
    )
}

export default FinxWebSocketComponent