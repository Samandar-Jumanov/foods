import React from 'react';
import { IMeal } from '../../types/meals';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const MealsItem: React.FC<IMeal> = ({ slug, title, image, creator, summary }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}> 
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
            Created by: {creator}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MealsItem;
