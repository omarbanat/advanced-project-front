import Axios from 'axios'
import React, { useState, useEffect } from 'react'

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/user/getAll").then(
      (response) => {
        console.log(response.data); // Log the response data to the console
        if (response) {
          setUsers(response.data.message);
        } else {
          console.log("Response data is not an array:", response.data);
        }
      },
      (error) => {
        console.log(error); // Log any errors to the console
      }
    );
  }, []);

 

  return (
    <div>
    {users.map((user) => (
      <div key={user.id}>
        <h1>Name:  {user.fName}     {user.lName}</h1>
        <br/>
        <h3>Email: {user.email}</h3>
        <br/>
      </div>
    ))}
    </div>
  );
}

export default Users;
