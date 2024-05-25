"use client"
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Box, Container, Typography} from "@mui/material";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const itemData = [
    {
        img: '/img/hoppit-fullpage.gif',
        title: 'fullpage gif'
    },
    {
        img: '/img/hoppit-figma-layout.png',
        title: 'voxx full',
    },
    {
        img: '/img/hoppit-products.png',
        title: 'figma component',
    },
    {
        img: '/img/hoppit-product-trilogy.png',
        title: 'figma messages',
    },
    {
        img: '/img/hoppit-checkout.png',
        title: 'trifold'
    },
];

const HoppitBrewingCarousel = () => {
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
        <Container id='hoppitBrewingCarousel' sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                <Typography variant='h5' sx={{ mb: 3 }}>
                    The Hoppit Brewing Company (UI/UX)
                </Typography>
                <Typography sx={{ mb: 3 }}>
                    What started off as set of beer growlers for a wedding gift, has now become a full-fledged and fictional brewing company.
                    Designed in Figma, while creating all product images in Adobe Illustrator, Photoshop, and Dimension 3D.
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


export default HoppitBrewingCarousel;
