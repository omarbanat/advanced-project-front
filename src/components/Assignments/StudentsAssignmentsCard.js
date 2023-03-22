import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup, CardActionArea } from '@mui/material';
import course from '../../assets/course.jpg';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactModal from 'react-modal';

import axios from 'axios';

export default function StudentsAssignmentsCard(props) {
  const API_URL = process.env.REACT_APP_API_URL;

  // const brom = props.submission.map((submission) => {
  //   return submission.id
  // })

  // console.log(brom
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      height: '76&',
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [submitForm, setSubmitForm] = useState({
    
    submission: '',
    assignmentID: props.id
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubmitForm({ ...submitForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API_URL}/assignmentsSubmission/add`, submitForm)
      .then((response) => {
        console.log(response);
        props.render();

      })
      .catch((error) => {
        console.log(error.response.data);
      });
      
  };
const graded =
  Array.isArray(props.submission) &&
  props.submission.map((item) => {
    return item.grade;
  });
  
   let firstNonNullGrade = null;
   for (let i = 0; i < graded.length; i++) {
     if (graded[i] !== null) {
       firstNonNullGrade = graded[i];
       break;
     }
   }

  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Card sx={{ width: 855, height: '100%' }}>
      <CardContent style={{ padding: '0px', height: '23.9rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'sans-serif', backgroundColor: Array.isArray(props.submission) &&
      props.submission.length > 0 ?'silver' : "blue" }}>
            {props.title}
          </h1>
          <h2
            style={{ fontFamily: 'serif', marginTop: '2.3rem', color: 'red' }}
          >
            Deadline {props.dueDate}
          </h2>
        </div>
        <br />
        <Typography variant="body1" color="text.primary">
          {showFullDescription
            ? props.description
            : props.description.substring(0, 1000)}
          {props.description.length > 1000 && !showFullDescription && (
            <a href="#" onClick={() => setModalIsOpen(true)}>
              View more
            </a>
          )}
        </Typography>

        <ReactModal
          appElement={document.getElementById('root')}
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
        >
          <IconButton
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              backgroundColor: 'transparent',
              color: 'black',
              zIndex: '1',
            }}
            onClick={() => setModalIsOpen(false)}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="body1" color="text.primary">
            {props.description}
          </Typography>
        </ReactModal>
      </CardContent>
      {Array.isArray(props.submission) &&
      props.submission.length > 0 &&
      typeof props.submission[0] === 'object' ? (
        <div>
          <h3
            style={{
              fontFamily: 'cursive',
              marginTop: '2.3rem',
            }}
          >
            Full Grade
            <input
              required
              style={{ width: '4.5rem', height: '3rem' }}
              name="grade"
              value={props.grade}
              readOnly
            />
          </h3>
          <h3
            style={{
              fontFamily: 'cursive',
              marginTop: '2.3rem',
            }}
          >
            Your Grade
            <input
              required
              style={{ width: '4.5rem', height: '3rem' }}
              name="grade"
              value={firstNonNullGrade}
              readOnly
            />
          </h3>
          <label
            style={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              padding: '0.7rem 0rem',
              marginTop: '10px',
              fontSize: '1.3rem',
              fontFamily: 'serif',
              backgroundColor: '#71706E',
              color: 'white',
            }}
            variant="contained"
          >
            Submitted
          </label>
        </div>
      ) : (
        <form style={{ marginTop: '-3rem' }} onSubmit={handleSubmit}>
          <h4 style={{ fontFamily: 'fantasy' }}>Submission:</h4>
          <input
            style={{ width: '25rem', height: '3.3rem' }}
            type="text"
            placeholder="Enter your link here"
            name="submission"
            onChange={handleChange}
            value={submitForm.submission}
          />
          <h3
            style={{
              fontFamily: 'cursive',
              marginTop: '2.3rem',
            }}
          >
            Full Grade
            <input
              required
              style={{ width: '4.5rem', height: '3rem' }}
              name="grade"
              value={props.grade}
              readOnly
            />
          </h3>
          <Button
            onSubmit={handleSubmit}
            style={{
              display: 'block',
              margin: '0 auto',
              padding: '0.7rem 23.95rem',
              marginTop: '10px',
              fontFamily: 'initial',
              fontSize: '1.3rem',
              backgroundColor: 'red',
            }}
            variant="contained"
          >
            Submit
          </Button>
        </form>
      )}
    </Card>
  );
}
