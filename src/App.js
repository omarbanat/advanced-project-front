import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './components/loginPage/LoginPage';
import RegisterPage from './components/registerPage/Register';
import Dashboard from './Dashboard';

import Announcements from './pages/Announcements';
import Assignments from './pages/Assignments';
import Attendances from './pages/Attendances';
import ClassesSections from './pages/ClassesSections';
import CourseEnrollments from './pages/CourseEnrollments';
import Courses from './pages/Courses';
import Users from './pages/Users';
import MentorCourses from './pages/MentorCourses';
import StudentsCourses from './pages/StudentsCourses';
import MentorAssignments from './pages/MentorAssignments';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* <Route path="/users" element={<Users />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/mentor/assignments" element={<MentorAssignments />} />
        <Route path="/attendances" element={<Attendances />} />
        <Route path="/sections" element={<ClassesSections />} />
        <Route path="/enrollments" element={<CourseEnrollments />} />
        <Route path="/admin/courses" element={<Courses />} />
        <Route path="/mentor/courses" element={<MentorCourses />} />
        <Route path="/courses" element={<StudentsCourses />} /> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
