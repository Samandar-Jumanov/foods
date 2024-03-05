import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import ImagePicker from '../../../components/image-picker';

const ShareMeals = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" gutterBottom>
        Share Your Meal
      </Typography>
      <TextField
        required
        id="title"
        name="title"
        label="Title"
        variant="outlined"
      />
      <TextField
        id="summary"
        name="summary"
        label="Summary"
        multiline
        rows={4}
        variant="outlined"
      />
      <TextField
        required
        id="creator"
        name="creator"
        label="Creator"
        variant="outlined"
      />
      <ImagePicker name="mealImage" labelVal="Upload Image" />
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default ShareMeals;
