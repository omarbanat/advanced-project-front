import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import course from '../assets/course.jpg';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

import ReactModal from 'react-modal';

import axios from 'axios';

export default function MentorCourseCard(props) {
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

  const [formData, setFormData] = useState({
    courseID: props.courseID,
    startDate: '',
    endDate: '',
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [btnClicked, setBtnClicked] = useState(false);

  const [dltBtn, setDltBtn] = useState(false);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const lol = () => {
    setBtnClicked((prevState) => !prevState);
  };

  let endDate;
  let startDate;
  let currentDate;
  if (props.cycle.length > 0 && props.cycle[0]) {
    const cycle = props.cycle[0];
    startDate = new Date(cycle.startDate);
    endDate = new Date(cycle.endDate);
    currentDate = new Date();
  }

  //     if (startDate < currentDate) {
  //       return (
  //         <Button
  //           style={{
  //             display: 'block',
  //             margin: '0 auto',
  //             padding: '0.5rem 7.1rem',
  //             marginTop: '10px',
  //           }}
  //           variant="contained"
  //           disableElevation
  //         >
  //           Starting Soon
  //         </Button>
  //       );
  //     } else {
  //       return (
  //         <Button
  //           style={{
  //             display: 'block',
  //             margin: '0 auto',
  //             padding: '0.5rem 7.1rem',
  //             marginTop: '10px',
  //           }}
  //           variant="contained"
  //           disableElevation
  //         >
  //           In Progress
  //         </Button>
  //       );
  //     }
  //   } else {
  //     return null; // or render a fallback component
  //   }
  // }

  //   const cycle = props.cycle[0];
  //   const currentDate = new Date();

  //   const propDate = new Date(cycle.startDate);

  //   console.log('cycle date', cycle);
  //   const mentorDate = () => {
  //     if (propDate < currentDate) {
  //       <Button
  //         style={{
  //           display: 'block',
  //           margin: '0 auto',
  //           padding: '0.5rem 7.1rem',
  //           marginTop: '10px',
  //         }}
  //         variant="contained"
  //         disableElevation
  //       >
  //         Starting Soon
  //       </Button>;
  //     } else if (propDate > currentDate) {
  //       <Button
  //         style={{
  //           display: 'block',
  //           margin: '0 auto',
  //           padding: '0.5rem 7.1rem',
  //           marginTop: '10px',
  //         }}
  //         variant="contained"
  //         disableElevation
  //       >
  //         in progress
  //       </Button>;
  //     } else if (propDate > currentDate) {
  //     }
  //   };

  return (
    props.dates.length > 0 && (
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
        <CardContent style={{ padding: '0px', height: '6.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'sans-serif' }}> {props.title} </h1>
            <h4 style={{ fontFamily: 'serif' }}>
              {props.durationByDays} Days{' '}
            </h4>

            <Typography gutterBottom variant="h5" component="div">
              {props.dates.length > 0 ? props.dates : btnClicked}
            </Typography>
          </div>

          <Typography variant="body2" color="text.secondary">
            {showFullDescription
              ? props.description
              : props.description.substring(0, 52)}
            {props.description.length > 100 && !showFullDescription && (
              <div>
                <n />
                <a href="#" onClick={() => setModalIsOpen(true)}>
                  View more
                </a>
              </div>
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
            {/* <IconButton
            style={{
              marginLeft: '22rem',
              fontStyle: 'oblique',
              backgroundColor: 'blue',
              color: 'black',
            }}
            onClick={() => setModalIsOpen(false)}
          >
            <CloseIcon />
          </IconButton> */}
            <Typography variant="body1" color="text.primary">
              {props.description}
              {/* <br />
            {
              <a
                href="#"
                style={{
                  marginLeft: '21rem',
                  marginTop: '-2rem',
                  fontStyle: 'oblique',
                  fontSize: '2rem',
                  backgroundColor: 'blue',
                  color: 'black',
                  padding: '2px',
                }}
                onClick={() => setModalIsOpen(false)}
              >
                EXIT
              </a>
            } */}
            </Typography>
          </ReactModal>
        </CardContent>

        {endDate < currentDate && (
          <label
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '0 auto',
              marginTop: '1.7rem',
              padding: '0.7rem',
              backgroundColor: 'blue',
              fontFamily: 'cursive',
              color: 'white',
            }}
            variant="contained"
          >
            Ended
          </label>
        )}

        {startDate > currentDate && endDate > currentDate && (
          <label
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '0 auto',
              marginTop: '1.7rem',
              padding: '0.7rem',
              backgroundColor: 'blue',
              fontFamily: 'cursive',
              color: 'white',
            }}
            variant="contained"
          >
            Starting Soon
          </label>
        )}

        {startDate < currentDate && endDate > currentDate && (
          <label
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '0 auto',
              fontFamily: 'cursive',
              color: 'white',
              marginTop: '1.7rem',
              padding: '0.7rem',
              backgroundColor: 'blue',
            }}
            variant="contained"
          >
            In progress
          </label>
        )}
      </Card>
    )
  );
}
