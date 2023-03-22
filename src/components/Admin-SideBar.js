import './admin-sidebar.css';

import React, { useState } from 'react';

import profile from '../assets/profile.png';

import {
  FaUsers,
  FaNewspaper,
  FaTasks,
  FaCalendarCheck,
  FaLayerGroup,
  FaBook,
  FaSignOutAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function AdminSideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: '/dashboard/users',
      name: 'Users',
      icon: <FaUsers />,
    },
    {
      path: '/dashboard/admin/courses',
      name: 'Courses',
      icon: <FaBook />,
    },
    {
      path: '/dashboard/courses',
      name: 'Courses',
      icon: <FaBook />,
    },
    {
      path: '/dashboard/mentor/courses',
      name: 'Courses',
      icon: <FaBook />,
    },
    {
      path: '/dashboard/assignments',
      name: 'Assignments',
      icon: <FaTasks />,
    },
    {
      path: '/dashboard/mentor/assignments',
      name: 'Assignments',
      icon: <FaTasks />,
    },

    {
      path: '/dashboard/announcements',
      name: 'Announcements',
      icon: <FaNewspaper />,
    },

    {
      path: '/dashboard/attendances',
      name: 'Attendances',
      icon: <FaCalendarCheck />,
    },
    {
      path: '/dashboard/sections',
      name: 'Sections',
      icon: <FaLayerGroup />,
    },
    {
      path: '/',
      name: 'Logout',
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <div className="admin-container">
        <div className="admin-sidebar">
          <div className="admin-top_section">
            <h1 className="admin-logo">MAKO LMS</h1>
            <div className="admin-bars">
              <img src={profile} alt="profile pic" />
            </div>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={`admin-link ${
                  item.name === 'Logout' ? 'logout-btn' : ''
                }`}
                activeclassname="admin-active"
                onClick={() => {
                  if (item.name === 'Logout')
                    sessionStorage.removeItem('token');
                }}
              >
                <div className="admin-icon">{item.icon}</div>
                <div className="admin-link_text">{item.name}</div>
              </NavLink>
            ))}
          </div>
        </div>
        <main className="admin-insideNav">{children}</main>
      </div>
    </div>
  );
}

export default AdminSideBar;
