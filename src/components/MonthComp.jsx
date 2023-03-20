import './MonthComp.css';

const MonthComp = ({ children, onClick }) => {
  return (
    <button className="month-comp__button" onClick={onClick}>
      {children}
    </button>
  );
};

export default MonthComp;
