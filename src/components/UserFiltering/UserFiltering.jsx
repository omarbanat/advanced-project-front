import AdminUsersDropDownTogle from './AdminUsersDropDownTogle';
import plusIcon from '../../assets/plus.svg';
import './UserFiltering.css';

const UserFiltering = () => {
  return (
    <div className="user-filtering__container">
      <AdminUsersDropDownTogle />
      <div className="user-filtering__btn-container">
        <img src={plusIcon} />
        <button
          onClick={() => console.log('first')}
          className="user-filtering__add-user"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default UserFiltering;
