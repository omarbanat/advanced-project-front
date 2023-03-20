import React, { useState, useEffect } from 'react';
import './courses.css';
import Axios from 'axios';
import MentorCourseCard from '../components/MentorCourseCard';

function MentorCourses() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [courseCards, setCourseCards] = useState([]);
  const [courseCycle, setCourseCycle] = useState([]);

  // const handleDeleteCard = (id) => {
  //   const dl = window.confirm('Are you sure you want to delete this course?');
  //   if (dl)
  //     Axios.delete(`${API_URL}/courses/delete/${id}`).then(
  //       (response) => {
  //         setCourseCards(courseCards.filter((card) => card.id !== id));
  //         alert('course deleted');
  //         console.log('course deleted');
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // };
  // const [zid, setZid] = useState(false);

  // const closeAddCourse = () => {
  //   setZid(!zid);
  // };

  // const addCourse = () => {
  //   setZid(!zid);
  // };
  const [courses, setCourses] = useState([]);

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
  }, []);

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
  }, []);

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
        <label>Start </label>
        <input type="date" value={cycle.startDate} readOnly />
        <br />
        <label>End </label>
        <input type="date" value={cycle.endDate} zreadOnly />
      </div>
    ));
    //  console.log(dateInputs)
    // console.log(filteredCycle)
    return (
      <MentorCourseCard
        key={item.id}
        courseID={item.id}
        title={item.title}
        description={item.description}
        durationByDays={item.durationByDays}
        // deleteCard={() => handleDeleteCard(item.id)}
        dates={dateInputs}
        cycle={filteredCycle}
      />
    );
  });

  return (
    <>
      <div className="course-card">{brom}</div>
    </>
  );
}

export default MentorCourses;
