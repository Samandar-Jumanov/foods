"use client"

// MealsError.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export const MealsError: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', 
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 3,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We're having trouble loading the meals page , Please try again later 
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go Back Home
        </Button>
      </Link>
    </Box>
  );
};

export default MealsError;
