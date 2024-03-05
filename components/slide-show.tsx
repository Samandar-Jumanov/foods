"use client"

import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import Image from 'next/image';
import { Fade } from '@mui/material';

interface SlideImage {
  img: string;
  alt: string;
};


const slideImages: SlideImage[] = [
  { img: '/images/dumplings.jpg', alt: 'Steamed dumplings' },
  { img: '/images/macncheese.jpg', alt: 'Creamy mac and cheese' },
  { img: '/images/schnitzel.jpg', alt: 'Crispy schnitzel' },
];

// Styled Box for animation
const AnimatedBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

export const SlideShow: React.FC = () => {
  const [currIndex, setCurrIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prevIdx) => (prevIdx < slideImages.length - 1 ? prevIdx + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Fade in={true} timeout={1000}>
        <AnimatedBox
          key={currIndex}
          marginRight={2}
          borderRadius={1}
          overflow="hidden"
          boxShadow={3}
        >
          <Image
            src={slideImages[currIndex].img}
            alt={slideImages[currIndex].alt}
            width={300} 
            height={200}
            layout="fixed"
          />
        </AnimatedBox>
      </Fade>
    </Box>
  );
};
