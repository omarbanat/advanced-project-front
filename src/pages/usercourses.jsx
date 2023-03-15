import React, { useState, useEffect } from 'react';
import UserCoursesNav from '../components/UserCoursesNav.jsx';
import UserCoursesCards from '../components/CourseCards.jsx';
import axios from 'axios';

const AliCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/courses')
      .then(res => {
        setCourses(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <UserCoursesNav />
      <UserCoursesCards courses={courses} />
      <UserCoursesCards courses={courses} />
      <UserCoursesCards courses={courses} />
      <UserCoursesCards courses={courses} />
      <UserCoursesCards courses={courses} />
      <UserCoursesCards courses={courses} />
      <UserCoursesCards courses={courses} />
    </div>
  )
}

export default AliCourses

