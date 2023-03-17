import './CourseCards.css'
import cardlogo from '../assets/cardimg.png'



const CourseCard = ({course}) =>{
    return(
        <div className="card-grid">
  <div className="card">
    <img src={cardlogo} alt="cardlogo 1" />
    <h3 className="card-title">{course.title}</h3>
    <h4>{course.durationByDays}</h4>
    <p className="card-dis">{course.description}</p>
    <button>ENROLL NOW</button>
  </div>
  

</div>
    )
}
export default CourseCard