import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StudentList from '../pages/StudentList';
import StudentForm from '../pages/StudentForm';
import StudentDetail from '../pages/StudentDetail';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/students" replace />} />
      <Route path="/students" element={<StudentList />} />
      <Route path="/students/new" element={<StudentForm />} />
      <Route path="/students/:id" element={<StudentDetail />} />
      <Route path="/students/:id/edit" element={<StudentForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
