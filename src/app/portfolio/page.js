"use client"
import {Container} from "@mui/material";
import BottomNav from "@/app/components/BottomNav";
import FinxImageCarousel from "@/app/portfolio/finx/finxCardCarousel";
import {useState} from "react";
import FinxStyleGuide from "@/app/portfolio/finx/finxStyleGuide";
import VoxxCarousel from "@/app/portfolio/voxx/VoxxCarousel";
import MediantRxCarousel from "@/app/portfolio/mediantrx/MediantRxCarousel";
import FinxWebSocketComponent from "@/app/portfolio/finx/finxWebSocketComponent";

export default function Portfolio() {
    const sectionIDs = ['finxCarousel', 'finxStyleGuide', 'finxWebSockeet', 'voxxCarousel', 'mediantRxCarousel'];
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    return (
        <>
            <Container maxWidth='true'>
                <FinxImageCarousel/>
                <FinxStyleGuide/>
                <FinxWebSocketComponent/>
                <VoxxCarousel/>
                <MediantRxCarousel/>
            </Container>
            <BottomNav sectionIDs={sectionIDs} currentSectionIndex={currentSectionIndex} setCurrentSectionIndex={setCurrentSectionIndex} />
        </>
    )
}
