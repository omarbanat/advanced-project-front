import { useState } from 'react';
import './AdminUserPopupForm.css';
import closeIcon from '../../assets/close.svg';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const AdminUserPopupForm = ({ setShowPopup }) => {
  const [userInfo, setUserInfo] = useState({
    fName: '',
    lName: '',
    email: '',
    DOB: '',
    password: '123456789',
    phoneNumber: '',
    gender: 'male',
    role: 'admin',
  });

  const addNewUser = async () => {
    const resss = await axios.post(
      `${API_URL}/user/add`,
      JSON.stringify(userInfo),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('RES: ', resss);
    if (resss.status === 201) {
      console.log('RElo');
      window.location.reload(true);
    }
  };

  return (
    <div className="popup-form">
      <div className="popup-form__close">
        <img
          src={closeIcon}
          alt="close"
          onClick={() => setShowPopup(false)}
        ></img>
      </div>
      <div className="popup-form__container">
        <div>
          <label>
            First Name:
            <input
              type="text"
              placeholder="Ex: Steve"
              value={userInfo.fName}
              onChange={(e) =>
                setUserInfo((prev) => {
                  return { ...prev, fName: e.target.value };
                })
              }
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              placeholder="Ex: Jobs"
              value={userInfo.lName}
              onChange={(e) =>
                setUserInfo((prev) => {
                  return { ...prev, lName: e.target.value };
                })
              }
            />
          </label>
        </div>
        <label>
          Email:
          <input
            type="text"
            placeholder="Ex: youremail@gmail.com"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            value={userInfo.DOB}
            onChange={(e) =>
              setUserInfo((prev) => {
                return { ...prev, DOB: e.target.value };
              })
            }
          />
        </label>
        <label>
          Phone Number:
          <input
            type="number"
            placeholder="Ex: 96176843642"
            value={userInfo.phoneNumber}
            onChange={(e) =>
              setUserInfo((prev) => {
                return { ...prev, phoneNumber: e.target.value };
              })
            }
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={userInfo.gender}
            onChange={(e) =>
              setUserInfo((prev) => {
                return { ...prev, gender: e.target.value };
              })
            }
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Role:
          <select
            name="role"
            value={userInfo.role}
            onChange={(e) =>
              setUserInfo((prev) => {
                return { ...prev, role: e.target.value };
              })
            }
          >
            <option value="admin">Admin</option>
            <option value="mentor">Mentor</option>
            <option value="student">Student</option>
          </select>
        </label>
      </div>
      <button onClick={addNewUser}>ADD NEW USER</button>
    </div>
  );
};

export default AdminUserPopupForm;
