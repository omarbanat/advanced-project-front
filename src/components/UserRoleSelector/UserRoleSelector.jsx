import './UserRoleSelector.css';

const UserRoleSelector = ({ usersNum, filterBy, setFilterBy }) => {
  return (
    <div className="user-role-selector">
      <div
        className={`user-role-selector__students ${
          filterBy === 'student' ? 'user-role-selector__clicked' : ''
        }`}
        onClick={() => setFilterBy('student')}
      >
        <p>Students</p>
        <div className="user-role-selector__students__num">
          {usersNum.students}
        </div>
      </div>
      <div
        className={`user-role-selector__mentors ${
          filterBy === 'mentor' ? 'user-role-selector__clicked' : ''
        }`}
        onClick={() => setFilterBy('mentor')}
      >
        <p>Mentors</p>
        <div className="user-role-selector__mentors__num">
          {usersNum.mentors}
        </div>
      </div>
      <div
        className={`user-role-selector__admins ${
          filterBy === 'admin' ? 'user-role-selector__clicked' : ''
        }`}
        onClick={() => setFilterBy('admin')}
      >
        <p>Admins</p>
        <div className="user-role-selector__admins__num">{usersNum.admins}</div>
      </div>
    </div>
  );
};

export default UserRoleSelector;
