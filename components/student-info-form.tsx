'use client'

import React, { useState } from 'react'
import {
  Button,
  TextField,
  Switch,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  Typography,
  Grid,
  Paper,
  Box,
  IconButton
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/navigation'

export default function StudentInfoForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    partTimeJob: false,
    absentDays: 0,
    extraCurricular: false,
    selfStudyHours: 0,
    careerAspiration: '',
    marks: {
      math: 0,
      chem: 0,
      phy: 0,
      hist: 0,
      geo: 0,
      english: 0,
      bio: 0
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }))
  }

  const handleSwitchChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [name]: event.target.checked }))
  }

  const handleMarksChange = (subject: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      marks: { ...prev.marks, [subject]: Number(e.target.value) }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data to be sent to backend:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: '800px', margin: 'auto', position: 'relative' }}>
        <IconButton 
          onClick={() => router.back()} 
          sx={{ position: 'absolute', top: 16, left: 16 }}
          aria-label="Go back"
        >
          <ArrowBackIcon />
        </IconButton>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: '#ffffff' }}>
            Student Information Form
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.partTimeJob}
                    onChange={handleSwitchChange('partTimeJob')}
                    name="partTimeJob"
                    color="primary"
                  />
                }
                label="Part-time Job"
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Number of Absent Days"
                name="absentDays"
                type="number"
                value={formData.absentDays}
                onChange={handleInputChange}
                inputProps={{ min: 0 }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.extraCurricular}
                    onChange={handleSwitchChange('extraCurricular')}
                    name="extraCurricular"
                    color="primary"
                  />
                }
                label="Extra Curricular Activities"
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Weekly Self Study Hours"
                name="selfStudyHours"
                type="number"
                value={formData.selfStudyHours}
                onChange={handleInputChange}
                inputProps={{ min: 0 }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="career-aspiration-label">Career Aspiration</InputLabel>
                <Select
                  labelId="career-aspiration-label"
                  value={formData.careerAspiration}
                  onChange={(e) => setFormData(prev => ({ ...prev, careerAspiration: e.target.value as string }))}
                  label="Career Aspiration"
                >
                  <MenuItem value="science">Accountant</MenuItem>
                  <MenuItem value="engineering">Artist</MenuItem>
                  <MenuItem value="medicine">Banker</MenuItem>
                  <MenuItem value="arts">Arts</MenuItem>
                  <MenuItem value="business">Business Owner</MenuItem>
                  <MenuItem value="other">Construction Engineer</MenuItem>
                  <MenuItem value="arts">Designer</MenuItem>
                  <MenuItem value="arts">Doctor</MenuItem>
                  <MenuItem value="arts">Game Developer</MenuItem>
                  <MenuItem value="arts">Government Officer</MenuItem>
                  <MenuItem value="arts">Real Estate Developer</MenuItem>
                  <MenuItem value="arts">Scientist</MenuItem>
                  <MenuItem value="arts">Lawyer</MenuItem>
                  <MenuItem value="arts">Software Engineer</MenuItem>
                  <MenuItem value="arts">Stock Investor</MenuItem>
                  <MenuItem value="arts">Writer</MenuItem>
                  <MenuItem value="arts">Teacher</MenuItem>
                  <MenuItem value="arts">Unknown</MenuItem>







                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#ffffff' }}>
              Subject Marks
            </Typography>
            <Grid container spacing={2}>
              {Object.keys(formData.marks).map((subject) => (
                <Grid item xs={12} sm={6} md={4} key={subject}>
                  <TextField
                    fullWidth
                    label={subject.charAt(0).toUpperCase() + subject.slice(1)}
                    name={subject}
                    type="number"
                    value={formData.marks[subject as keyof typeof formData.marks]}
                    onChange={handleMarksChange(subject)}
                    inputProps={{ min: 0, max: 100 }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Button 
              type="submit" 
              variant="contained" 
            
              sx={{
                backgroundColor: '#111111',
                '&:hover': {
                  backgroundColor: '#3949ab',
                },
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: '#ffffff' }}>
              SUBMIT
            </Typography>
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  )
}