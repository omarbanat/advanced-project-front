import React, { useState, useEffect } from 'react';
import UserCoursesNav from '../components/UserCoursesNav.jsx';
import CourseCard from '../components/CourseCards.jsx';
import axios from 'axios';


const AliCourses = () => {
  const [course, setCourses] = useState([]);

  const getAllCourses = ()=>
  axios
  .get("http://localhost:8000/api/courses/get")
  .then((res)=>{
    setCourses(res.data.data)
    console.log(res.data.data)
  })
  .catch((e)=>console.error(`error:{${e}}`))

  const courseCard = course.map((subject)=>{
    return(
      <CourseCard 
      key={subject.id}
      title={subject.title}
      description={subject.description}
      durationByDays={subject.durationByDays}
      />
    )
  })

  useEffect(()=>{
    getAllCourses();
  },[])

  return (
    <div>
      <UserCoursesNav />
      <div className='cardsblabla'>
      {course.map((each , key)=>(
        <CourseCard
        key={key}
        course={each}/>
      ))}
      </div>
      
      
    </div>
  )
}

export default AliCourses