"use client";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, Container, useMediaQuery} from "@mui/material";

const champsRound = [
    "- Learned to understand and write object-oriented code by programming in Swift 5 (UIKit) and Objective-C languages.",
    "- Handled ui-related tickets and updated storyboards to match Figma specifications and properly implemented conditionals to improve our game modes further.",
    "- Learned version control with Git, where we would handle creating and maintaining branches, sending pull requests, pulling down code, rebasing and cherry-picking commits, and code reviews.",
    "- Managed daily/weekly tasks with JIRA in bi-weekly code sprints.",
    "- Had daily standup to keep the team updated on progress."
]

const finxTasks = [
    "- Brainstorm, wireframe, and systems design in Figma",
    "- Design and implement responsive and user-friendly frontend sections using the React library and Material UI Styling",
    "- Develop and maintain backend functionalities, with a focus on building efficient API calls using Python",
    "- Handle AWS for cloud storage in S3, Dynamo DB records, EC2 Instances",
    "- Work closely with our Product Manager and QA Engineer to ensure scalability and optimized performance for our product platforms",
    "- Address tickets and issues through JIRA during our code sprints",
    "- Proper code documentation in Notion"
]

const finxAchievements = [
    "- Successfully handled the redesign of our corporate website, creating an efficient and responsive user experience while increasing potential client visibility and addressing all SOC2 compliance issues.",
    "- Applied my previous knowledge of design and created the FinX company style guide that is implemented in all our present and future applications. This includes color schemes, typography, iconography, CSS for all CTA sections and how to implement them into the stack, downloadable resources, and visible light and dark mode examples.",
    "- Created a live spot position component using webhooks to establish a direct connection with live crypto feeds. *This was a major component of a project that is no longer active"
]

const voxxTasks = [
    "- Worked closely with CEO to design and develop marketing material for pharmaceutical and life-science conventions attended multiple times per year.",
    "- Was in charge of rebranding and redesigning the entire corporate website.",
    "- Developed single landing pages for product platforms.",
    "- Assisted in the design and implementation of email marketing campaigns ran through HubSpot.",
    "- Handled all other design requests from various departments."
];

const voxxAchievements = [
    "- Successfully led the redesign of the corporate website, creating a better user experience while increasing the sales lead pipeline, reducing bounce rate, and increasing potential client visibility by almost 200%.",
    "- Created the entire company marketing packet that was handed out during conferences and life-science conventions attended multiple times per year.",
    "- Led the design for our marketing campaigns in Hubspot and Partner Rewards program."
];

const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CareerTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container sx={{ height: 450, backgroundColor: 'rgba(255,255,255,0)'}}>
            <Box>
                <Tabs variant={isMobile ? 'scrollable' : 'standard'} scrollButtons={isMobile ? 'auto' : 'none'} value={value} onChange={handleChange} aria-label="Career Tabs">
                    <Tab label="FinX Capital Markets" {...a11yProps(0)} sx={{ color: 'white', borderBottom: 'none' }} />
                    <Tab label="Champions Round" {...a11yProps(1)} sx={{ color: 'white', borderBottom: 'none' }} />
                    <Tab label="Voxx Analytics" {...a11yProps(2)} sx={{ color: 'white', borderBottom: 'none' }} />
                </Tabs>
            </Box>
            <Box sx={{ maxHeight: '40vh', overflowY: 'auto', width: '100%' }}>
                <CustomTabPanel value={value} index={0}>
                    <Box sx={{ maxHeight: '100%', overflowY: 'auto' }}>
                        <Typography variant='subtitle2' sx={{ mb: 2 }}>
                            July 2022 - Feb 2024
                        </Typography>
                        <Typography sx={{ mb: 3 }}>
                            FinX Capital Markets (previously Fite Analytics) is an industry-leading analytics firm for fixed income. I was brought on
                            as an entry-level developer, where I was mentored by CEO & Staff Engineer Geoff Fite.
                        </Typography>
                        {finxTasks.map((item, index) => (
                            <Typography key={index}>{item}</Typography>
                        ))}
                        <Typography variant='h6' sx={{mt: 2, mb: 1, fontWeight: 700}}>Achievements:</Typography>
                        {finxAchievements.map((item) => (
                            <Typography key={item}>{item}</Typography>
                        ))}
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box sx={{ maxHeight: '100%', overflowY: 'auto' }}>
                        <Typography variant='subtitle2' sx={{ mb: 2 }}>
                            Feb 2022 - May 2022
                        </Typography>
                        <Typography sx={{ mb: 3, color: 'white' }}>
                            In the Spring of 2022, I joined a micro fantasy sports start-up as an iOS development intern.
                            Here is where I:
                        </Typography>
                        {champsRound.map((item) => (
                            <Typography key={item}>{item}</Typography>
                        ))}
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Box sx={{ maxHeight: '100%', overflowY: 'auto' }}>
                        <Typography variant='subtitle2' sx={{ mb: 2 }}>
                            Jan 2016 - Aug 2021
                        </Typography>
                        <Typography sx={{ mb: 3, color: 'white' }}>
                            In the Spring of 2016, I joined a data analytics company that specialized in the pharmaceutical industry.
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Initially hired as a scan technician to process and edit documents, I quickly became the company's full-time
                            web and graphic designer, while also seeking to obtain my degree in Design.
                        </Typography>
                        {voxxTasks.map((item) => (
                            <Typography key={item}>{item}</Typography>
                        ))}
                        <Typography variant='h6' sx={{mt: 2, mb: 1, fontWeight: 700}}>Achievements:</Typography>
                        {voxxAchievements.map((item) => (
                            <Typography key={item}>{item}</Typography>
                        ))}
                    </Box>
                </CustomTabPanel>
            </Box>
        </Container>
    );
}

export default CareerTabs