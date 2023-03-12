import './CourseCards.css'
import cardlogo from '../assets/cardimg.png'


const CourseCards = () =>{
    return(
        <div className="card-grid">
  <div className="card">
    <img src={cardlogo} alt="cardlogo 1" />
    <h3 className="card-title">Full Stack Web Dev</h3>
    <h4>04/04/2023  -  04/06/2023</h4>
    <p className="card-dis">This course will introduce the basics of every programming language used for web development</p>
    <button>ENROLL NOW</button>
  </div>
  <>
  <div className="card">
    <img src={cardlogo} alt="cardlogo 2" />
    <h3 className="card-title">Full Stack Web Dev</h3>
    <h4>04/04/2023  -  04/06/2023</h4>
    <p className="card-dis">This course will introduce the basics of every programming language used for web development</p>
    <button>ENROLL NOW</button>
  </div>
  <div className="card">
    <img src={cardlogo} alt="cardlogo 3" />
    <h3 className="card-title">Full Stack Web Dev</h3>
    <h4>04/04/2023  -  04/06/2023</h4>
    <p className="card-dis">This course will introduce the basics of every programming language used for web development</p>
    <button>ENROLL NOW</button>
  </div>
</>

</div>
    )
}
export default CourseCards