import './Attendances.css';
import AdminAttendanceTable from '../components/AdminAttendanceTable';
import DropDownToggle from '../components/DropDownTogle';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import MonthsComp from '../components/MonthsComp';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function Attendances() {
  const [course, setCourse] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [username, setUsername] = useState(null);
  const [courses, setCourses] = useState([]);
  const [data, setData] = useState([]);

  const years = ['2023', '2022', '2021', '2020', '2019', '2018'];

  const filteredData =
    data &&
    data
      .filter((data) =>
        username
          ? data.fName === username.fName && data.lName === username.lName
          : data
      )
      .filter((data) => year && data.date.slice(0, 4) === year);

  const fetchData = async () => {
    const coursesResponse = await axios.get(`${API_URL}/courses/get`);
    const coursesData = coursesResponse.data.data;
    setCourses(coursesData);
  };

  const fetchWholeData = async (id) => {
    const res = await axios.get(`${API_URL}/getAttendancesByCourseID/${id}`);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="attendances__title">Attendances</h1>
      <div className="attendances__upper-container">
        <div className="attendances__container-left">
          <div className="attendances__dropdown-toggles">
            <DropDownToggle
              key={Math.random()}
              title="Select course title"
              data={courses}
              input={course}
              setInput={setCourse}
              fetchWholeData={fetchWholeData}
              type="courses"
            />
            <DropDownToggle
              key={Math.random()}
              title="Select user name"
              data={data}
              // data={Array.from(new Set(data.map((obj) => obj.fName))).map(
              //   (name) => data.find((obj) => obj.fName === name)
              // )}
              input={username}
              setInput={setUsername}
              type="usernames"
            />
            <DropDownToggle
              key={Math.random()}
              title="Select year"
              data={years}
              input={year}
              setInput={setYear}
              type="years"
            />
          </div>
          <MonthsComp setMonth={setMonth} />
        </div>
        <Calendar />
      </div>
      <div className="attendances__table">
        <AdminAttendanceTable filteredData={filteredData} />
      </div>
    </div>
  );
}

export default Attendances;
