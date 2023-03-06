import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CourseEnrollments() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        

        <Card.Title>Course title</Card.Title>
        <Card.Text className='enrollment'>
          course description
        </Card.Text>
        <h5 className='enrollmentstart'>start date</h5>
        <h5 className='enrollmentEnd'>end date</h5>
        <Button variant="primary">ENROLL NOW</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseEnrollments;