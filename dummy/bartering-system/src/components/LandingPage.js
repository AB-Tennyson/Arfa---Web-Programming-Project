// src/components/LandingPage.js

import React from 'react';
import { Button, Typography, Container } from '@mui/material';

const LandingPage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Bartering System
      </Typography>
      <Typography variant="h6" paragraph>
        A new way to exchange goods and services without money. Join us today!
      </Typography>
      <Button variant="contained" color="primary" href="/signin">
        Sign In
      </Button>
    </Container>
  );
};

export default LandingPage;
