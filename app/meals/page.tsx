"use client"

import React, { Suspense } from 'react';
import Link from "next/link";
import MealsGrid from "../../components/meals/meals-grid";
import { Typography, Box, Container, useTheme } from '@mui/material';
import { getFoods } from '../../lib/meals';
import { IMeal } from "../../types/meals";
import LoadingPage from './loading-out';

const GotMeals = async () => {
  const meals: IMeal[] = await getFoods();
  return <MealsGrid meals={meals} />
}

const Meals = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
        color: theme.palette.text.primary,
        width: '100%', 
        gap: 2,
        textAlign: 'center',
      }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{
          fontWeight: 700,
          color: theme.palette.primary.main,
          marginBottom: 2,
          fontSize: { xs: '1.75rem', sm: '2.125rem', md: '2.5rem', lg: '3rem' },
        }}>
          Discover Your Next Favorite Meal
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{
          maxWidth: '80%',
          margin: 'auto',
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
        }}>
          Explore a wide variety of dishes and find new flavors to add to your culinary adventures.
        </Typography>
        <Suspense fallback={<LoadingPage/>}>
          <GotMeals/>
        </Suspense>
      </Box>
    </Container>
  );
};

export default Meals;
