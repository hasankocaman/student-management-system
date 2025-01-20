import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Button,
  IconButton,
  Typography
} from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import { toast } from 'react-toastify';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/students`);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      toast.error('Failed to fetch students');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await fetch(`${process.env.REACT_APP_API_URL}/students/${id}`, {
          method: 'DELETE',
        });
        toast.success('Student deleted successfully');
        fetchStudents();
      } catch (error) {
        toast.error('Failed to delete student');
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Students
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/students/new')}
        sx={{ mb: 2 }}
      >
        Add New Student
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>
                  <IconButton 
                    color="primary"
                    onClick={() => navigate(`/students/${student.id}`)}
                  >
                    <Visibility />
                  </IconButton>
                  <IconButton 
                    color="secondary"
                    onClick={() => navigate(`/students/${student.id}/edit`)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton 
                    color="error"
                    onClick={() => handleDelete(student.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default StudentList;
