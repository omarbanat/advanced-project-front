import axios from 'axios';
async function getCourses() {
    try {
      const response = await axios.get('/api/courses/getAll');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


  import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCourses();
      setCourses(data);
    }
    fetchData();
  }, []);

  return (
    <div>d</div>
  );
}
