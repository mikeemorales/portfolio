"use client";
import React from 'react';
import { Box, Button, Container } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BottomNav = ({ sectionIDs, currentSectionIndex, setCurrentSectionIndex }) => {
	const scrollToSection = (direction) => {
		if (!sectionIDs || sectionIDs.length === 0) {
			return;
		}

		const newIndex = direction === 'down' ? currentSectionIndex + 1 : currentSectionIndex - 1;

		if (newIndex < 0 || newIndex >= sectionIDs.length) return;

		const nextSectionID = sectionIDs[newIndex];
		const nextSectionY = document.getElementById(nextSectionID).getBoundingClientRect().top + window.scrollY;

		window.scrollTo({
			top: nextSectionY,
			behavior: 'smooth',
		});

		// Update the current section index
		setCurrentSectionIndex(newIndex);
	};

	return (
		<Container>
			<Box
				sx={{
					position: 'fixed',
					bottom: '20px',
					left: '50%',
					transform: 'translateX(-50%)',
					display: 'flex',
					gap: 3,
				}}
			>
				<Button variant='outlined' sx={{ color: '#FFFFFF', borderColor: '#FFFFFF' }} onClick={() => scrollToSection('down')}>
					<KeyboardArrowDownIcon />
				</Button>
				<Button variant='outlined' sx={{ color: '#FFFFFF', borderColor: '#FFFFFF' }} onClick={() => scrollToSection('up')}>
					<KeyboardArrowUpIcon />
				</Button>
			</Box>
		</Container>
	);
}

export default BottomNav;
