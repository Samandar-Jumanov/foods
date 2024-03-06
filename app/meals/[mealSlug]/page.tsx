// Import necessary components and functions
import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import Image from 'next/image';
import { getMealBySlug } from '../../../lib/meals';
import { IMeal } from '../../../types/meals';
import { notFound } from "next/navigation";
import defautImage from '../../icon.png'

// MealDetails component for rendering meal details
async function MealDetails({ params  }: any ) {
  const mealSlug  = params.mealSlug;

  const meal : IMeal | null  = await getMealBySlug(mealSlug as string);

  if(!meal) {
       return notFound();
  } 

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Created by:</Typography>
          <Typography>{meal?.creator}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Some other info:</Typography>
          <Typography>Lorem ipsum</Typography>
        </Grid>
      </Grid>
      <Paper elevation={3} sx={{ my: 4, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <Image src={`/${meal?.image}` || defautImage.src} alt={meal?.title || "Default image"} width={500} height={300} style={{ borderRadius: '8px' }} />
        </Box>
        <Typography variant="h3" gutterBottom align="center">
          {meal?.title}
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
          {meal?.summary}

        </Typography>
      </Paper>
    </Container>
  );
}



export default MealDetails;
