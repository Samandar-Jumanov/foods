// In MealsGrid component

import { Grid } from '@mui/material';
import MealsItem from './meals-items'; // Make sure the path is correct
import { IMeal } from '../../types/meals';

interface MealsGridProps {
  meals: IMeal[];
}

const MealsGrid: React.FC<MealsGridProps> = ({ meals }) => {
  return (
    <Grid container spacing={2} justifyContent="center" >
      {meals.map((meal) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={meal.id}>
          <MealsItem meal={meal} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MealsGrid;
