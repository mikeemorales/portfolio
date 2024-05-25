"use client"
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Box, Container, Typography} from "@mui/material";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const itemData = [
    {
        img: '/img/voxx-ui-2.png',
        title: 'voxx full',
    },
    {
        img: '/img/voxx-figma.png',
        title: 'figma component',
    },
    {
        img: '/img/voxx-ui-1.png',
        title: 'figma messages',
    },
    {
        img: '/img/voxx-trifold.png',
        title: 'trifold'
    },
    {
        img: '/img/voxx-folder.png',
        title: 'marketing folder',
    },
];

const VoxxCarousel = () => {
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
        <Container id='voxxCarousel' sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                <Typography variant='h5' sx={{ mb: 3 }}>
                    Voxx Analytics (now part of Within3)
                </Typography>
                <Typography sx={{ mb: 3 }}>
                    The redesign of the corporate website and company marketing material, creating a better user
                    experience while increasing the sales lead pipeline, reducing bounce rate, and increasing
                    potential client visibility by almost 200%.
                </Typography>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item, index) => (
                        <ImageListItem key={item.img} onClick={() => openLightbox(index)}>
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                width={25}
                                height={25}
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


export default VoxxCarousel;
