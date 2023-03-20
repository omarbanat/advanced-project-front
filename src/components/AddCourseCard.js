import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Icon } from '@mui/material';
import course from '../assets/course.jpg';
import Button from '@mui/material/Button';
import axios from 'axios';
import { IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import zIndex from '@mui/material/styles/zIndex';

// import { display, textAlign } from '@mui/system';

const API_URL = process.env.REACT_APP_API_URL;

export default function AddCourseCard(props) {
  const [formData, setFormData] = useState({
    title: '',
    durationByDays: '',
    description: '',
    date: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get the form data
    const { target: form } = event;
    const title = form[0].value;
    const durationByDays = form[1].value;
    const date = form[2].value;
    const description = form[3].value;

    // Update the state with the form data
    setFormData({
      title,
      durationByDays,
      date,
      description,
    });
    console.log(formData);
    // Send a POST requeconsst to your API endpoint
    axios
      .post(`${API_URL}/courses/add`, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ marginBottom: '2.5rem' }}>
      <Card sx={{ maxWidth: 380 }}>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton
            onClick={props.close}
            sx={{
              position: 'absolute',
              marginLeft: '20.8rem',
              marginTop: '-0.4rem',
              color: 'white',
              backgroundColor: 'transparent',
            }}
          >
            <CloseIcon sx={{ fontSize: '2.3rem' }} />
          </IconButton>
          <CardMedia
            component="img"
            height="350"
            image={course}
            alt="green iguana"
            sx={{ width: '100%', objectFit: 'fill' }}
          />

          <CardContent style={{ padding: '0px' }}>
            <div style={{ textAlign: 'center' }}>
              <h3>
                Title
                <input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="write course title"
                  type="string"
                  required
                />
              </h3>
              <h5>
                DurationByDays
                <input
                  value={formData.durationByDays}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      durationByDays: e.target.value,
                    })
                  }
                  placeholder="days"
                  type="number"
                  style={{ width: '3rem' }}
                  required
                />
                Days
              </h5>

              <Typography gutterBottom variant="h5" component="div">
                {/* <>
                  <input
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    placeholder="date"
                    type="date"
                    
                  />{' '}
                </> */}
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              <>
                Description
                <input
                  required
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="write course description"
                  type="text"
                  style={{ height: '3rem', width: '23rem' }}
                />
              </>
            </Typography>
          </CardContent>
        </div>

        <Button
          style={{
            display: 'block',
            margin: '0 auto',
            padding: '0.5rem 10.1rem',
            marginTop: '10px',
          }}
          variant="contained"
          type="submit"
        >
          submit
        </Button>
      </Card>
    </form>
  );
}
