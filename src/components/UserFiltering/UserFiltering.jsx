import { useState } from 'react';
import AdminUsersDropDownTogle from './AdminUsersDropDownTogle';
import plusIcon from '../../assets/plus.svg';

import './UserFiltering.css';
import AdminUserPopupForm from '../AdminUserPopupForm/AdminUserPopupForm';

const UserFiltering = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="user-filtering__container">
      {showPopup && <AdminUserPopupForm setShowPopup={setShowPopup} />}
      {/* <AdminUsersDropDownTogle /> */}
      <div className="user-filtering__btn-container">
        <img src={plusIcon} alt="plus" />
        <button
          onClick={() => setShowPopup(true)}
          className="user-filtering__add-user"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default UserFiltering;
