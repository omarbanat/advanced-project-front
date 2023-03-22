import React, { useState, useEffect } from 'react';
import './courses.css';
import Axios from 'axios';
import StudentsCourseCard from '../components/Courses/StudentsCourseCard';
import StudentsAssignmentsCard from '../components/Assignments/StudentsAssignmentsCard';
import { Button } from '@mui/material';
import AddAssisngmentCard from '../components/Assignments/AddAssignmentCard';
import MentorAssignmentsCard from '../components/Assignments/MentorAssignmentsCard';

function MentorAssignments() {
  const API_URL = process.env.REACT_APP_API_URL;

  const [assignments, setAssignments] = useState([]);
  const [assignmentsSubmissions, setAssignmentsSubmissions] = useState([]);

  const [render, setRender] = useState(false);
  const [enroll, setEnroll] = useState(false);

  const [addNewAssignment, setAddNEwAssignment] = useState(false);

  const closeAddAssignment = () => {
    setAddNEwAssignment(!addNewAssignment);
  };

  const addAssignment = () => {
    setAddNEwAssignment(!addNewAssignment);
  };

  const rerender = () => {
    setRender((prev) => !prev);
    setAddNEwAssignment(false);
  };

  useEffect(() => {
    console.log('API: ', API_URL);
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
  }, [render]);

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
  }, [render]);

  console.log(assignments, 'assignments');
  console.log(assignmentsSubmissions, 'assignmentsSubmissions');
  const assig = assignments.map((assignment) => {
    const filteredSubmissions =
      assignmentsSubmissions &&
      assignmentsSubmissions.length > 0 &&
      assignmentsSubmissions.filter((submission) => {
        return submission.assignmentID === assignment.id;
      });
    console.log(filteredSubmissions, '');
    return (
      <MentorAssignmentsCard
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
        onClick={addAssignment}
      >
        Add New Assignment
      </Button>
      {addNewAssignment && (
        <AddAssisngmentCard close={closeAddAssignment} render={rerender} />
      )}
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="course-card">{assig}</div>
    </>
  );
}

export default MentorAssignments;
