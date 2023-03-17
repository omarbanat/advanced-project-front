// import React, { useState, useEffect } from 'react';
// import UserCoursesNav from '../components/UserCoursesNav.jsx';
// import CourseCard from '../components/CourseCards.jsx';
// import axios from 'axios';


// const AliCourses = () => {
//   const [course, setCourses] = useState([]);
//    const [courseCycle, setCourseCycle] =useState([]);

//   const getAllCourses = ()=>
//   axios
//   .get("http://localhost:8000/api/courses/get")
//   .then((res)=>{
//     setCourses(res.data.data)
//     console.log(res.data.data)  
//   })
//   .catch((e)=>console.error(`error:{${e}}`))

//   const getAllCourseCycles = () =>
//   axios
//     .get("http://localhost:8000/api/courseCycle/getByID/{id}")
//     .then((res)=>{
//       setCourseCycle(res.data.data)
//       console.log(res.data.data)
//     })
//     .catch((e)=>console.error(`error:{${e}}`))


//   const courseCard = course.map((subject)=>{
//     const currentCourseCycle = courseCycle.find(cycle => cycle.courseId === subject.id);
//     return(
//       <CourseCard 
//       key={subject.id}
//       title={subject.title}
//       description={subject.description}
//       durationByDays={subject.durationByDays}
//       startDate={currentCourseCycle.startDate}
//       endDate={currentCourseCycle.endDate}
//       />
//     )
//   })

//   useEffect(()=>{
//     getAllCourses();
//     getAllCourseCycles();
//   },[])

//   return (
//     <div>
//       <UserCoursesNav />
//       <div className='cardsblabla'>
//         {courseCard}
//       </div>
//     </div>
//   )
// }

// export default AliCourses


import React, { useState, useEffect } from 'react';
import UserCoursesNav from '../components/UserCoursesNav.jsx';
import CourseCard from '../components/CourseCards.jsx';
import axios from 'axios';

const AliCourses = () => {
  const [courses, setCourses] = useState([]);
  const [courseCycles, setCourseCycles] = useState([]);

  const getAllCourses = () => {
    axios
      .get('http://localhost:8000/api/courses/get')
      .then((res) => {
        setCourses(res.data.data);
        console.log(res.data.data)
      })
      .catch((e) => console.error(`Error: ${e}`));
  };

  const getAllCourseCycles = () => {
    axios
      .get('http://localhost:8000/api/courseCycle/getAll')
      .then((res) => {
        setCourseCycles(res.data.data);
        console.log(res.data.data)
      })
      .catch((e) => console.error(`Error: ${e}`));
  };  

  useEffect(() => {
    getAllCourses();
    getAllCourseCycles();
  }, []);

  return (
    <div>
      <UserCoursesNav />
      <div className="cardsblabla">
  {courses.map((each, key) => (
    <CourseCard
      key={key}
      course={each}
      courseCycle={courseCycles && courseCycles.find((cycle) => cycle.courseId === each.id)}
    />
  ))}
</div>
    </div>
  );
};

export default AliCourses;