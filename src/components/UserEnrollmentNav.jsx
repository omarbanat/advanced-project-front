import "./UserEnrollmentNav.css"
import iconsbell from '../assets/notification.svg'
import iconsdoor from '/home/alihomsi/Documents/projects/advanced project frontend/advanced-project-frontend/src/assets/logout.svg'
const UserEnrollmentNav = () => {
  return (
    <div className="top-bar">
    <div className="username">
<h3>Omar Banat</h3>
    </div>
    <div className="navbaru">
        <nav className="nav">
            <ul>
              <li><a href="/usercourses">Courses</a></li>
              <li><a href="/userEnrollment">Enrolled Courses</a></li>
              <li><a href="students attendance.html">Attendance
            </a></li>
              
            </ul>
          </nav>
</div>
<div className="icons">
<button className="button"><img className="icon" src={iconsbell} alt="icon"/></button>
<button className="button"><img className="icon" src={iconsdoor} alt='icon'/></button>
</div>
</div>
  )
}

export default UserEnrollmentNav
