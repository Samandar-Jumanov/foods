// In MealsItem component

import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import Link from 'next/link';
import { IMeal } from '../../types/meals';

interface MealsItemProps {
  meal: IMeal;
}

const MealsItem: React.FC<MealsItemProps> = ({ meal }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={meal.image}
          alt={meal.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {meal.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {meal.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  color="info">
          <Link href={`/meals/${meal.slug}`} passHref>
               Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default MealsItem;
