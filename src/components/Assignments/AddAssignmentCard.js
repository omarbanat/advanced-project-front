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

export default function AddAssisngmentCard(props) {
  const API_URL = process.env.REACT_APP_API_URL;

  const [submitForm, setSubmitForm] = useState({
    title: '',
    dueDate: '',
    description: '',
    grade: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubmitForm({ ...submitForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API_URL}/assignments/add`, submitForm)
      .then((response) => {
        console.log(response);
        props.render();
        props.close();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <Card sx={{ width: 550 }}>
      <CardContent
        style={{
          padding: '0px',
          height: '36.2rem',
        }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <h2 style={{ fontFamily: 'cursive' }}>
              Add Assignment Title
              <input
                required
                style={{ textAlign: 'center' }}
                name="title"
                value={submitForm.title}
                onChange={handleChange}
                placeholder="Enter Your title Here"
              />
            </h2>
            <br />
            <h2
              style={{
                fontFamily: 'cursive',
                marginTop: '2.3rem',
              }}
            >
              Add Deadline
              <input
                required
                type="datetime-local"
                name="dueDate"
                value={submitForm.dueDate}
                onChange={handleChange}
              />
            </h2>
          </div>
          <br />
          <br />
          <br />
          <h3
            style={{
              fontFamily: 'cursive',
              marginTop: '2.3rem',
            }}
          >
            Add Description
            <input
              required
              style={{ width: '20rem', height: '5rem' }}
              name="description"
              value={submitForm.description}
              onChange={handleChange}
              placeholder=" Enter Your description"
            />
          </h3>{' '}
          <h3
            style={{
              fontFamily: 'cursive',
              marginTop: '2.3rem',
            }}
          >
            Full Grade
            <input
              type="number"
              required
              style={{ width: '4rem', height: '2.5rem' }}
              name="grade"
              value={submitForm.grade}
              onChange={handleChange}
            />
          </h3>
          <Button
            onClick={handleSubmit}
            style={{
              display: 'block',
              margin: '0 auto',
              padding: '1.15rem 11.65rem',
              marginTop: '10px',
              fontFamily: 'initial',
              fontSize: '1rem',
              backgroundColor: 'red',
            }}
            variant="contained"
          >
            Create Assignment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
