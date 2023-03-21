import React, { useState, useEffect } from 'react';
import './courses.css';
import Axios from 'axios';
import StudentsCourseCard from '../components/Courses/StudentsCourseCard';
import StudentsAssignmentsCard from '../components/Assignments/StudentsAssignmentsCard';

function Assignments() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [courseCards, setCourseCards] = useState([]);
  const [courseCycle, setCourseCycle] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [assignmentsSubmissions, setAssignmentsSubmissions] = useState([]);

  const [courses, setCourses] = useState([]);
  const [enroll, setEnroll] = useState(false);
  const [render, setRender] = useState(false);


  const handleEnroll = () => {
    setEnroll((preV) => !preV);
  };

  const rerender = () => {
  setRender((prev) => !prev);
};
 
  // useEffect(() => {
  //   Axios.get(`${API_URL}/courses/get`).then(
  //     (response) => {
  //       if (response.data) {
  //         console.log(response);
  //         setCourses(response.data.data);
  //       } else {
  //         console.log('Response data is not an array:', response.data);
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }, [enroll]);

  // useEffect(() => {
  //   Axios.get(`${API_URL}/courseCycle/get`).then(
  //     (response) => {
  //       console.log(response.data.data);
  //       if (response.data) {
  //         setCourseCycle(response.data.data);
  //       } else {
  //         console.log('Response data is not an array:', response.data);
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }, [enroll]);

  useEffect(() => {
    Axios.get(`${API_URL}/assignments/get`).then(
      (response) => {
        console.log('helloooooooo', response);
        if (response.data) {
          setAssignments(response.data);
        } else {
          console.log('Response data is not an array:', response.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [enroll]);

  useEffect(() => {
    Axios.get(`${API_URL}/assignmentsSubmission/get`).then(
      (response) => {
        console.log(response.data);
        if (response.data) {
          setAssignmentsSubmissions(response.data);
        } else {
          console.log('Response data is not an array:', response.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [enroll]);

  // const brom = courses.map((item) => {
  //   const filteredCycle = courseCycle.filter(
  //     (cycle) => cycle.courseID === item.id
  //   );
  //   const filterdEnrollments = enrollments.filter(
  //     (enrollment) => enrollment.courseCycleID === filteredCycle[0]?.id
  //   );

  // const assig = assignments.map((assignments) => {
  //   return {
  //    title : assignments.title , description :assignments.description
  //   }
  // })
  //   console.log('sdjidhsfihids', assig)

  //   const mkansal = filterdEnrollments.map(
  //     (enrollment) => enrollment.cancelled
  //   );
  //   const enrolled = filterdEnrollments.map(
  //     (enrollment) => enrollment.enrolled
  //   );
  //   const dateInputs = filteredCycle.map((cycle, index) => (
  //     <div
  //       key={`{cycle.courseID}-${index}`}
  //       style={{
  //         display: 'flex',
  //         flexDirection: 'row',
  //         alignItems: 'flex-start ',
  //         fontSize: '1.2rem',
  //         justifyContent: 'space-around',
  //       }}
  //     >
  //       <h3>{cycle.startDate}</h3>
  //       <h3>{cycle.endDate}</h3>
  //     </div>
  //   ));

  //   let endDate;
  //   let startDate;
  //   let currentDate;
  //   if (filteredCycle.length > 0 && filteredCycle[0]) {
  //     const cycle = filteredCycle[0];
  //     startDate = new Date(cycle.startDate);
  //     endDate = new Date(cycle.endDate);
  //     currentDate = new Date();
  //   }
 console.log(assignments, 'assignments')
 console.log(assignmentsSubmissions,'assignmentsSubmissions')
  const assig = assignments.map((assignment) => {
   const filteredSubmissions =
     assignmentsSubmissions &&
     assignmentsSubmissions.length > 0 &&
     assignmentsSubmissions.filter((submission) => {
       return submission.assignmentID === assignment.id;
     });
console.log(filteredSubmissions, '')
    return (
      <StudentsAssignmentsCard
        key={assignment.id}
        title={assignment.title}
        description={assignment.description}
        grade={assignment.grade}
        dueDate={assignment.dueDate}
        submission={filteredSubmissions}
        id={assignment.id}
        render={rerender}
      />
    );
  });

  return (
    <>
      <div className="course-card">{assig}</div>
    </>
  );
}

export default Assignments;
