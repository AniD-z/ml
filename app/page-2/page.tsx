"use client";

import StudentInfoForm from '@/components/student-info-form'
import Image from "next/image";
import manWithRobot from "@/public/images/man-with-robot.png";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, Box, Grid, Typography, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
  },
});

export default function StudentInfoPage() {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '1rem', md: '2rem' },
          position: 'relative', // Added for absolute positioning of the back button
        }}
      >
        <IconButton
          onClick={() => router.back()}
          sx={{
            position: 'absolute',
            top: { xs: '1rem', md: '2rem' },
            left: { xs: '1rem', md: '2rem' },
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
            transition: 'background-color 0.3s ease',
            zIndex: 1000,
          }}
          aria-label="Go back"
        >
          <ArrowBackIcon />
        </IconButton>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} lg={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ position: 'relative', width: '100%', height: { xs: '200px', md: '300px', lg: '400px' } }}>
              <Image
                src={manWithRobot}
                alt="Man with robot"
                layout="fill"
                objectFit="contain"
                priority
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={7}>
            <Box sx={{ backgroundColor: '#ffffff', borderRadius: '5rem', overflow: 'hidden' }}>
              
              <StudentInfoForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}