import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Grid,
  Divider
} from '@mui/material';
import { toast } from 'react-toastify';

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudentDetails();
  }, [id]);

  const fetchStudentDetails = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/students/${id}`);
      if (!response.ok) {
        throw new Error('Student not found');
      }
      const data = await response.json();
      setStudent(data);
    } catch (error) {
      toast.error(error.message);
      navigate('/students');
    }
  };

  if (!student) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Student Details
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Name
            </Typography>
            <Typography variant="body1">{student.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Email
            </Typography>
            <Typography variant="body1">{student.email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Phone
            </Typography>
            <Typography variant="body1">{student.phone || 'N/A'}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Address
            </Typography>
            <Typography variant="body1">{student.address || 'N/A'}</Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/students/${id}/edit`)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/students')}
          >
            Back to List
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default StudentDetail;
