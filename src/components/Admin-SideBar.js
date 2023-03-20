import './admin-sidebar.css';

import React, { useState } from 'react'

import profile from '../assets/profile.png'

import {
    FaUsers,FaNewspaper,FaTasks,FaCalendarCheck,FaLayerGroup,FaBook,


} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function AdminSideBar({children}) {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen (!isOpen)

    const menuItem = [
      {
        path: '/users',
        name: 'Users',
        icon: <FaUsers />,
      },
      {
        path: '/admin/courses',
        name: 'Courses',
        icon: <FaBook />,
      },
      {
        path: '/mentor/courses',
        name: 'Courses',
        icon: <FaBook />,
      },
      {
        path: '/assignments',
        name: 'Assignments',
        icon: <FaTasks />,
      },

      {
        path: '/announcements',
        name: 'Announcements',
        icon: <FaNewspaper />,
      },

      {
        path: '/attendances',
        name: 'Attendances',
        icon: <FaCalendarCheck />,
      },
      {
        path: '/sections',
        name: 'Sections',
        icon: <FaLayerGroup />,
      },
    ];

  return (
    <div style={{backgroundColor: 'whitesmoke'}}>
    <div className='admin-container'>
        <div className='admin-sidebar'>
            <div className='admin-top_section'>
                <h1 className='admin-logo'>MAKO LMS</h1>
                <div className='admin-bars'>
                    <img src={profile} alt="profile pic"/>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="admin-link" activeclassname="admin-active">
                            <div className='admin-icon'>{item.icon}</div>
                            <div className='admin-link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
        <main className='admin-insideNav'>{children}</main>

        
    </div>
   </div>
  )
}

export default AdminSideBar