import './App.css';
import React from 'react';
import AdminSideBar from "./components/Admin-SideBar"
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Announcements from './pages/Announcements';
import Assignments from './pages/Assignments';
import Attendances from './pages/Attendances';
import ClassesSections from './pages/ClassesSections';
import CourseEnrollments from './pages/CourseEnrollments';
import Courses from './pages/Courses';
import Users from './pages/Users';
import LoginPage from './components/loginPage/LoginPage';
import Register from './components/registerPage/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

function AdminLayout() {
  return (
    <>
      <AdminSideBar />
      <Routes>
        <Route path='/announcements' element={<Announcements />} />
        <Route path='/assignments' element={<Assignments />} />
        <Route path='/attendances' element={<Attendances />} />
        <Route path='/sections' element={<ClassesSections />} />
        <Route path='/enrollments' element={<CourseEnrollments />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </>
  )
}

export default App;
