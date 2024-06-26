"use client"
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Container, Typography} from "@mui/material";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const itemData = [
    {
        img: '/img/finx-hero.png',
        title: 'FinX Hero and Nav',
    },
    {
        img: '/img/finx-section1.png',
        title: 'FinX section 1',
    },
    {
        img: '/img/finx-section2.png',
        title: 'FinX section 2',
    },
    {
        img: '/img/finx-tabs.png',
        title: 'FinX tabs',
    },
    {
        img: '/img/finx-opensource.png',
        title: 'FinX open source',
    },
    {
      img: '/img/finx-map.png',
        title: 'FinX location map'
    },
    {
        img: '/img/finx-footer.png',
        title: 'Finx footer',
    },
    {
        img: '/img/finx-js-websocket.gif',
        title: 'javascript websocket',
    },
];

const FinxImageCarousel = () => {
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
        <Container id='finxCarousel' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', minHeight: '100vh' }}>
                <Typography variant='h5' sx={{ mb: 1 }}>
                    FinX Web Site
                </Typography>
                <Typography variant='caption' sx={{ mb: 1 }}>
                    <a href='https://www.finx.io/' target="_blank">www.finx.io</a>
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    The corporate website of FinX Capital Markets that I developed. Working alongside my project manager, we managed to build a website with greater user experience, while adhering to SOC2 compliance.
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
        </Container>
    );
}


export default FinxImageCarousel;
