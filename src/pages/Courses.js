import React, { useState, useEffect } from 'react';
import CourseCard from '../components/AdminCourseCard';

import './courses.css';

import Axios from 'axios';
import AddCourseCard from '../components/AddCourseCard';
import Button from '@mui/material/Button';
// import { display } from '@mui/system';

function Courses() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [courseCards, setCourseCards] = useState([]);
  const [courseCycle, setCourseCycle] = useState([]);
  const [render,setRender] = useState(false)

  const handleDeleteCard = (id) => {
    const dl = window.confirm('Are you sure you want to delete this course?');
    if (dl)
      Axios.delete(`${API_URL}/courses/delete/${id}`).then(
        (response) => {
          setCourseCards(courseCards.filter((card) => card.id !== id));
          alert('course deleted');
          console.log('course deleted');
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const [zid, setZid] = useState(false);

  const closeAddCourse = () => {
    setZid(!zid);
  };

  const addCourse = () => {
    setZid(!zid);
  };
  const [courses, setCourses] = useState([]);

  const rerender = () => {
    setRender(prev => !prev)
  }

  useEffect(() => {
    Axios.get(`${API_URL}/courses/get`).then(
      (response) => {
        if (response.data) {
          console.log(response);
          setCourses(response.data.data);
        } else {
          console.log('Response data is not an array:', response.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [render]);

  useEffect(() => {
    Axios.get(`${API_URL}/courseCycle/get`).then(
      (response) => {
        console.log(response.data.data);
        if (response.data) {
          setCourseCycle(response.data.data);
        } else {
          console.log('Response data is not an array:', response.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [render]);

  // const barmeTenye = courseCycle.map((item) => {
  //   return {
  //     startDate: item.startDate,
  //     endDate: item.endDate,
  //     courseID: item.courseID,
  //   };
  // });

  const brom = courses.map((item) => {
    // filter courseCycle by courseID that matches current item's id
    const filteredCycle = courseCycle.filter(
      (cycle) => cycle.courseID === item.id
    );

    const dateInputs = filteredCycle.map((cycle, index) => (
      <div
        key={`cycle.courseID}-${index}`}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start ',
          fontSize: '1.2rem',
          justifyContent: 'space-between',
        }}
      >
        <label className="admin-mentor-course-label">Start </label>
        <input type="date" value={cycle.startDate} readOnly />
        <br />
        <label className="admin-mentor-course-label">End </label>
        <input type="date" value={cycle.endDate} readOnly />
      </div>
    ));
    //  console.log(dateInputs)
    // console.log(filteredCycle)
    return (
      <CourseCard
        key={item.id}
        courseID={item.id}
        title={item.title}
        description={item.description}
        durationByDays={item.durationByDays}
        deleteCard={() => handleDeleteCard(item.id)}
        dates={dateInputs}
        render={rerender}
      />
    );
  });

  return (
    <>
      <Button
        style={{
          display: 'block',
          margin: '0 auto',
          padding: '1rem 1.7rem',
          backgroundColor: 'blue',
          marginTop: '0.9rem',
          marginBottom: '0.9rem',
          marginLeft: '0rem',
        }}
        variant="contained"
        onClick={addCourse}
      >
        Add new course
      </Button>
      {zid && <AddCourseCard close={closeAddCourse} render={rerender}/>}
      <div className="course-card">{brom}</div>
    </>
  );
}

export default Courses;
