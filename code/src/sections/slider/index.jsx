import React from 'react';
import { Container, Box, Typography, TextField } from '@mui/material';
import sliderImage from '../../assets/hexnode-kiosk.webp'
import CustomButton from '../../components/button';

const MainSlider = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0A0C23',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            flex: 1,
            color: 'white',
            paddingRight: { xs: 0, md: 30 },
            paddingTop: { xs: 20, md: 0 },
            textAlign: { xs: 'center', md: 'left' },
            marginBottom: { xs: '2rem', md: '0' },
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'stretch', sm: 'center' },
              marginTop: '1rem',
            }}
          >
            <TextField
              placeholder="Your Work Email"
              variant="outlined"
              size='medium'
              sx={{
                flex: 1,
                marginBottom: { xs: '1rem', sm: '0' },
                marginRight: { sm: '1rem' },
                backgroundColor: 'white',
                borderRadius: '4px',
              }}
            />
            <CustomButton content='GET STARTED NOW!' size='large' paddingX='17px'/>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={sliderImage}
            alt="Hexnode Devices"
            sx={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MainSlider;
