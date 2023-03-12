import axios from 'axios';

import { MDBDataTable } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import restoreIcon from '../../assets/restore.svg';

import './AdminUsers.css';
import { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const AdminUsers = ({ users, filterBy }) => {
  const [APIMessage, setAPIMessage] = useState('');

  const deleteUser = async (id) => {
    const response = await axios.delete(`${API_URL}/user/delete/${id}`);
    setAPIMessage(response.data.message);
    setTimeout(() => {
      setAPIMessage('');
    }, [2000]);
  };

  const allUsers =
    users &&
    users.map((el, idx) => {
      return {
        ...el,
        editDelete: (
          <div className="admin-users__table__edit-delete">
            <img
              src={editIcon}
              alt="edit"
              onClick={() => console.log('EDIT: ', idx)}
            />
            <img
              src={deleteIcon}
              alt="delete"
              onClick={() => deleteUser(el.id)}
            />
            <img
              src={restoreIcon}
              alt="restore"
              onClick={() => console.log('RESTORE: ', idx)}
            />
          </div>
        ),
      };
    });

  const filteredUsers =
    filterBy && allUsers.filter((el) => el.role === filterBy);

  const data = {
    columns: [
      {
        label: 'First Name',
        field: 'fName',
        sort: 'asc',
        width: 300,
      },
      {
        label: 'Last Name',
        field: 'lName',
        sort: 'asc',
        width: 300,
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 300,
      },
      {
        label: 'Date of Birth',
        field: 'DOB',
        sort: 'asc',
        width: 300,
      },
      {
        label: 'Phone Number',
        field: 'phoneNumber',
        sort: 'asc',
        width: 300,
      },
      {
        label: 'Gender',
        field: 'gender',
        sort: 'asc',
        width: 300,
      },
      {
        label: 'Edit - Delete - Restore',
        field: 'editDelete',
        sort: 'asc',
        width: 300,
      },
    ],
    rows: filterBy ? filteredUsers : allUsers,
  };

  return (
    <div>
      <div className={`${APIMessage ? 'api-call-response-message ' : ''}`}>
        {APIMessage}
      </div>
      <MDBDataTable
        striped
        bordered
        hover
        data={data}
        className="admin-users__table"
      />
    </div>
  );
};

export default AdminUsers;
