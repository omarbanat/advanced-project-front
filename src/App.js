import './App.css';
import React from 'react';
import AdminSideBar from './components/Admin-SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Announcements from './pages/Announcements';
import Assignments from './pages/Assignments';
import Attendances from './pages/Attendances';
import ClassesSections from './pages/ClassesSections';
import CourseEnrollments from './pages/CourseEnrollments';
import Courses from './pages/Courses';
import Users from './pages/Users';
import AddCourseCard from './components/AddCourseCard';
import MentorCourses from './pages/MentorCourses';

function App() {
  return (
    <AdminSideBar>
      <Routes>
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/attendances" element={<Attendances />} />
        <Route path="/sections" element={<ClassesSections />} />
        <Route path="/enrollments" element={<CourseEnrollments />} />
        <Route path="/admin/courses" element={<Courses />} />
        <Route path="/mentor/courses" element={<MentorCourses />} />

        {/* <Route path="/courses/add" element={<AddCourseCard />} /> */}
        <Route path="/users" element={<Users />} />
      </Routes>
    </AdminSideBar>
  );
}

export default App;
