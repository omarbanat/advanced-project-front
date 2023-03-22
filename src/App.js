import './App.css';
import React from 'react';
import AdminSideBar from "./components/Admin-SideBar"
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Assignments from './pages/Assignments';
import Attendances from './pages/Attendances';
import ClassesSections from './pages/ClassesSections';
import CourseEnrollments from './pages/CourseEnrollments';
import Courses from './pages/Courses';
import Users from './pages/Users';
import Announcements from './pages/announcementsPage/Announcements';


function App() {
  return (
     <BrowserRouter>
     <AdminSideBar>
     <Routes>
      <Route path='/announcements' element={<Announcements />} />
      <Route path='/assignments' element={<Assignments />} />
      <Route path='/attendances' element={<Attendances />} />
      <Route path='/sections' element={<ClassesSections />} />
      <Route path='/enrollments' element={<CourseEnrollments />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/users' element={<Users />} />
     </Routes>
     </AdminSideBar>
     </BrowserRouter>
  )
}

export default App;
