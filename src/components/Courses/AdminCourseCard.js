import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import course from '../../assets/course.jpg';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

import ReactModal from 'react-modal';

import axios from 'axios';

// import Axios from 'axios';

// import { display, textAlign } from '@mui/system';

export default function CourseCard(props) {
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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { target: form } = event;
    const startDate = form[0].value;
    const endDate = form[1].value;

    setFormData({
      courseID: props.courseID,
      startDate,
      endDate,
    });
    setBtnClicked(false);

    axios
      .post(`${API_URL}/courseCycle/add`, formData)
      .then((response) => {
        console.log(response);
        props.render();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [btnClicked, setBtnClicked] = useState(false);

  // const [dltBtn, setDltBtn] = useState(false);

  const [showFullDescription, setShowFullDescription] = useState(false);

  // const [date, setDate] = useState(false);

  const lol = () => {
    setBtnClicked((prevState) => !prevState);
  };

  return (
    <Card sx={{ maxWidth: 380, height: '100%' }}>
      {/* <IconButton onClick={props.deleteCard}>
        Delete
        <DeleteIcon />
      </IconButton> */}
      <IconButton
        onClick={props.deleteCard}
        sx={{
          position: 'absolute',
          zIndex: 1,
          marginLeft: '-0.6rem',
          marginTop: '-0.55rem',
          color: 'white',
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <DeleteIcon sx={{ fontSize: '2.3rem', boxShadow: 'none' }} />
      </IconButton>
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
      <CardContent style={{ padding: '0px', height: '11.9rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'sans-serif' }}> {props.title} </h1>
          <h4 style={{ fontFamily: 'serif' }}> {props.durationByDays} Days</h4>

          <Typography gutterBottom variant="h5" component="div">
            {props.dates.length > 0 ? (
              props.dates
            ) : btnClicked ? (
              <div>
                <form onSubmit={handleFormSubmit} key={props.courseID}>
                  <input
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                    placeholder="date"
                    type="date"
                    name="startDate"
                  />
                  <input
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                    placeholder="date"
                    type="date"
                    name="endDate"
                  />
                  <input type="submit" />
                </form>
              </div>
            ) : (
              ''
            )}
          </Typography>
        </div>

        <Typography variant="body2" color="text.secondary">
          {showFullDescription
            ? props.description
            : props.description.substring(0, 52)}
          {props.description.length > 100 && !showFullDescription && (
            <label>
              <a href="#" onClick={() => setModalIsOpen(true)}>
                View more
              </a>
            </label>
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
              position: 'relative',
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
      {!props.dates.length > 0 ? (
        <Button
          style={{
            display: 'block',
            margin: '0 auto',
            padding: '0.5rem 7.15rem',
            marginTop: '10px',
            fontFamily: 'initial',
          }}
          variant="contained"
          onClick={lol}
        >
          Add Course Timing
        </Button>
      ) : (
        <label
          style={{
            display: 'block',
            margin: '0 auto',
            padding: '0.7rem 9.35rem',
            marginTop: '10px',
            fontFamily: 'inherit',
            backgroundColor: 'blue',
            color: 'white',
          }}
          variant="contained"
        >
          Published
        </label>
      )}
    </Card>
  );
}
