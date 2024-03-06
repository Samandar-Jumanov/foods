"use client"
import { Container, CssBaseline, Typography } from '@mui/material';
import React from 'react';
import SignupForm from "../../components/account/signUp";

const Signup: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <SignupForm />
    </Container>
  );
};

export default Signup;
