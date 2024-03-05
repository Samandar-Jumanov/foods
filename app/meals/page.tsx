import Link from "next/link";
import MealsGrid from "../../components/meals/meals-grid";
import { Typography, Button, Box } from '@mui/material';


const mealsData = [
    { Id :"1" , title : "meal" , summary : "Summary" ,slug :"Slug" , image  :"No image " , creator:"Created "}
]
const Meals = () => {
  return (
    <Box sx={{
      '& > :not(style)': { m: 1 },
      textAlign: 'center',
      p: 2,
      backgroundColor: '#f9f9f9', 
      borderRadius: 2,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)', 
      margin: '2rem auto', 
      maxWidth: 'md', 
    }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
        Discover Your Next Favorite Meal
      </Typography>
      <Typography variant="h6" component="p" color="textSecondary" paragraph>
        Explore a wide variety of dishes and find new flavors to add to your culinary adventures.
      </Typography>
      {/* <MealsGrid meals={mealsData}/> */}
    </Box>
  );
};

export default Meals;
