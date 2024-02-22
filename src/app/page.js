"use client"
import HeroSection from "@/app/sections/HeroSection";
import BottomNav from "@/app/components/BottomNav";
import CareerSection from "@/app/sections/careerSection";
import InfoSection from "@/app/sections/infoSection";
import {Box, Container} from "@mui/material";
import {useState} from "react";

export default function Home() {
    const sectionIDs = ['heroSection', 'infoSection', 'careerSection'];
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    return (
        <Container maxWidth='true'>
            <Box>
                <HeroSection />
                <InfoSection />
                <CareerSection />
            </Box>
            <BottomNav sectionIDs={sectionIDs} currentSectionIndex={currentSectionIndex} setCurrentSectionIndex={setCurrentSectionIndex} />
        </Container>
    );
}
