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

import ReactModal from 'react-modal';

import axios from 'axios';

export default function StudentCourseCard(props) {
  const API_URL = process.env.REACT_APP_API_URL;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      height: '40%',
    },
  };

  // console.log('heeellllllooooo', props.enrollment[i].cancelled);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cancelModalIsOpen, setCancelModalIsOpen] = useState(false);

  const [btnClicked, setBtnClicked] = useState(false);

  const [enroll, setEnroll] = useState(false);

  const [enrollForm, setEnrollForm] = useState({
    courseCycleID: props.cycle.length > 0 && props.cycle[0].id,
    userID: 1,
    enrolled: false,
    cancelled: false,
    cancellationReason: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEnrollForm({ ...enrollForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEnroll(true);

    axios
      .post(`${API_URL}/enrollment/add`, enrollForm)
      .then((response) => {
        console.log(response);
        props.onEnroll();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  console.log('dsdsdsf', props.enrollments);

  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Card sx={{ maxWidth: 380, height: '100%' }}>
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <CardMedia
          component="img"
          height="305"
          image={course}
          alt="green iguana"
          sx={{ width: '100%', objectFit: 'fill' }}
        />
      </CardActionArea>
      <CardContent style={{ padding: '0px', height: '9.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'sans-serif' }}> {props.title} </h2>
          <h4 style={{ fontFamily: 'serif' }}>{props.durationByDays} Days </h4>

          <Typography gutterBottom variant="h5" component="div">
            {props.dates.length > 0 ? props.dates : btnClicked}
          </Typography>
        </div>

        <Typography variant="body2" color="text.secondary">
          {showFullDescription
            ? props.description
            : props.description.substring(0, 52)}
          {props.description.length > 100 && !showFullDescription && (
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
      {props.enrolled.every((enrolled) => enrolled === 0) && (
        <form onSubmit={handleSubmit}>
          <Button
            type="submit"
            name="enrolled"
            value={enrollForm.enrolled}
            onClick={() => {
              setEnrollForm({ ...enrollForm, enrolled: true });
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '0 auto',
              fontFamily: 'cursive',
              color: 'white',
              marginTop: '1.7rem',
              padding: '0.4rem 7.7rem',
              backgroundColor: 'blue',
              fontSize: '1.13rem',
              cursor: 'pointer',
            }}
            variant="contained"
          >
            Enroll now
          </Button>
        </form>
      )}

      {props.cancelled.some((cancelled) => cancelled > 0) && (
        <label
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
            fontFamily: 'cursive',
            color: 'white',
            marginTop: '1.7rem',
            padding: '0.7rem 9rem',
            backgroundColor: 'blue',
            fontSize: '1.13rem',
          }}
          variant="contained"
        >
          cancelled
        </label>
      )}

      {props.enrolled.some((enrolled) => enrolled > 0) &&
        props.cancelled.every((cancelled) => cancelled === 0) && (
          <form onSubmit={handleSubmit}>
            <div>
              <Button
                name="cancelled"
                value="true"
                onChange={handleChange}
                onClick={() => {
                  setCancelModalIsOpen(true);
                }}
                type="button"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '0 auto',
                  fontFamily: 'cursive',
                  color: 'white',
                  marginTop: '1.7rem',
                  padding: '0.48rem 5.3rem',
                  backgroundColor: 'red',
                  fontSize: '1.13rem',
                  cursor: 'pointer',
                }}
                variant="contained"
              >
                Cancel Enrollment
              </Button>
              {cancelModalIsOpen ? (
                <ReactModal
                  appElement={document.getElementById('root')}
                  isOpen={cancelModalIsOpen}
                  onRequestClose={() => setCancelModalIsOpen(false)}
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
                    onClick={() => setCancelModalIsOpen(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                  <form onSubmit={handleSubmit}>
                    <textarea
                      name="cancellationReason"
                      type="text"
                      placeholder="Cancellation reason"
                      value={enrollForm.cancellationReason}
                      onChange={handleChange}
                      style={{
                        display: 'block',
                        width: '80%',
                        height: '3rem',
                        marginBottom: '0.5rem',
                        padding: '0.5rem',
                      }}
                    />
                    <button
                      name="cancelled"
                      value={enrollForm.cancelled}
                      onChange={handleChange}
                      type="submit"
                      onClick={() => {
                        setEnrollForm({ ...enrollForm, cancelled: true });
                      }}
                    >
                      Submit
                    </button>
                  </form>
                </ReactModal>
              ) : null}
            </div>
          </form>
        )}
    </Card>
  );
}
