import Link from "next/link";
import MealsGrid from "../../components/meals/meals-grid";
import { Typography, Box } from '@mui/material';
import { getFoods } from '../../lib/meals';
import { IMeal } from "../../types/meals";
import { Suspense } from "react";
import LoadingPage from './loading-out'

 async function GotMeals () {
  const meals: IMeal[] = await getFoods();
  return  <MealsGrid meals={meals} />
}


const Meals = async () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      p: 3,
      borderRadius: 3,
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      backgroundColor: '#f5e0d3', 
      color: "black",
      margin: '2rem auto',
      maxWidth: 'md',
      gap: 2, 
      textAlign: 'center',
      '& h1': {
        fontWeight: 700,
        color: '#1976d2', 
        marginBottom: 2,
        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
      },
      '& p': {
        maxWidth: '80%',
        marginBottom: { xs: 2, sm: 3 }, 
        fontSize: { xs: '0.875rem', sm: '1rem' }, 
      },
    }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Discover Your Next Favorite Meal
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Explore a wide variety of dishes and find new flavors to add to your culinary adventures.
      </Typography>
       <Suspense fallback={<LoadingPage/>}> 
          <GotMeals/>
        </Suspense>
    </Box>
  );
};

export default Meals;
