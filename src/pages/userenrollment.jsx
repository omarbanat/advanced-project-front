import React, {useState, useEffect} from "react"
import UserEnrollmentNav from "../components/UserEnrollmentNav"
import EnrollmentCards from "../components/UserEnrollmentCards"
import axios from "axios";

const AliEnrollment =() =>{
// const [enrollment , setEnrollments] = useState([]);
// const getAllEnrollments = ()=>
// axios
// .get("http://localhost:8000/api/enrollment/getAll")
// .then((res)=>{
//     setEnrollments(res.data.data)
//     console.log(res.data.data)
// })
// .catch((e)=>console.error(`error:{${e}}`))
// const enrollmentCards = enrollment.map((subject)=>{
//     return(
//         <EnrollmentCards
//         key={subject.id}
//     )
// })
return(
   <div><UserEnrollmentNav />
   <EnrollmentCards />

   </div>
)
}
export default AliEnrollment