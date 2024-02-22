"use client"
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Box, Container, Typography} from "@mui/material";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const itemData = [
    {
        img: '/img/mediantrx-landing.png',
        title: 'FinX Hero and Nav',
    },
    {
        img: '/img/mediantrx-product.png',
        title: 'FinX section 1',
    },
    {
        img: '/img/mediantrx-faq.png',
        title: 'FinX section 1',
    },
];

const MediantRxCarousel = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <Container id='mediantRxCarousel' sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                <Typography variant='h5' sx={{ mb: 1 }}>
                    Mediant RX
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    The corporate site I developed for Mediant RX, an ActivePure Technology-powered air purifier. ActivePure
                    Technology is proven to neutralize pathogens, including the virus that causes COVID-19, on surfaces
                    and in the air.
                </Typography>
                <ImageList variant="standard" cols={3} gap={8}>
                    {itemData.map((item, index) => (
                        <ImageListItem key={item.img} onClick={() => openLightbox(index)}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                {lightboxOpen && (
                    <Lightbox
                        mainSrc={itemData[lightboxIndex].img}
                        nextSrc={itemData[(lightboxIndex + 1) % itemData.length].img}
                        prevSrc={itemData[(lightboxIndex + itemData.length - 1) % itemData.length].img}
                        onCloseRequest={closeLightbox}
                        onMovePrevRequest={() => setLightboxIndex((lightboxIndex + itemData.length - 1) % itemData.length)}
                        onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % itemData.length)}
                        imageLoadErrorMessage={null}
                    />
                )}
            </Box>
        </Container>
    );
}


export default MediantRxCarousel;
