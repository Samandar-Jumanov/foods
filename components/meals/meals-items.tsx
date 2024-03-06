import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import Link from 'next/link';
import { IMeal } from '../../types/meals';

interface MealsItemProps {
  meal: IMeal;
}

const MealsItem: React.FC<MealsItemProps> = ({ meal }) => {
  return (
    <Card sx={{ maxWidth: 345, display: 'flex', 
    flexDirection: 'column', justifyContent: 'space-between',
     m: 1, borderRadius: '16px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
      <CardActionArea component={Link} href={`/meals/${meal.slug}`} sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="194" 
          image={meal.image}
          alt={meal.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {meal.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {meal.summary.length > 100 ? meal.summary.substring(0, 100) + "..." : meal.summary} // Summary shortened for uniformity
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} href={`/meals/${meal.slug}`} sx={{ justifyContent: 'center', width: '100%' }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MealsItem;
