import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AdminUsers from '../components/AdminUsers/AdminUsers';
import UserFiltering from '../components/UserFiltering/UserFiltering';
import UserRoleSelector from '../components/UserRoleSelector/UserRoleSelector';

import './Users.css';

const API_URL = process.env.REACT_APP_API_URL;

function Users() {
  const [users, setUsers] = useState([]);
  const [filterBy, setFilterBy] = useState(null);
  const [usersNum, setUsersNum] = useState({});

  const fetchUsers = async () => {
    const response = await axios.get(`${API_URL}/user/getAll`);
    const data = response.data.message;
    let [students, mentors, admins] = [0, 0, 0];
    data.forEach((el) => {
      if (el.role === 'student') students++;
      else if (el.role === 'mentor') mentors++;
      else admins++;
      setUsersNum({
        students: students,
        mentors: mentors,
        admins: admins,
      });
    });
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <div className="users__top-comp">
        <UserRoleSelector
          usersNum={usersNum}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
        <UserFiltering />
      </div>
      <AdminUsers users={users} filterBy={filterBy} />
    </div>
  );
}

export default Users;
