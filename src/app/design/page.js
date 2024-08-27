"use client"
import {useState} from "react";
import {Container} from "@mui/material";
import BottomNav from "@/app/components/BottomNav";
import DesignDodgers from "./components/Dodgers";
import DesignUsOpen from "./components/UsOpen";
import DesignInfoSection from "./components/DesignInfoSection";

export default function Design() {
    const sectionIDs = ['DesignInfoSection', 'dodgersSection', 'usOpenSection'];
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    return (
        <>
            <Container maxWidth='true'>
                <DesignInfoSection/>
                <DesignDodgers/>
                <DesignUsOpen/>
            </Container>
            <BottomNav sectionIDs={sectionIDs} currentSectionIndex={currentSectionIndex} setCurrentSectionIndex={setCurrentSectionIndex} />
        </>
    )
}
