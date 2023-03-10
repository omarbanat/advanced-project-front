import './MonthsComp.css';
import MonthComp from './MonthComp';

const MonthsComp = ({ setMonth }) => {
  return (
    <div className="months-component">
      <MonthComp onClick={() => setMonth('january')}>JAN</MonthComp>
      <MonthComp onClick={() => setMonth('february')}>FEB</MonthComp>
      <MonthComp onClick={() => setMonth('march')}>MAR</MonthComp>
      <MonthComp onClick={() => setMonth('april')}>APR</MonthComp>
      <MonthComp onClick={() => setMonth('may')}>MAY</MonthComp>
      <MonthComp onClick={() => setMonth('june')}>JUN</MonthComp>
      <MonthComp onClick={() => setMonth('july')}>JUL</MonthComp>
      <MonthComp onClick={() => setMonth('august')}>AUG</MonthComp>
      <MonthComp onClick={() => setMonth('september')}>SEP</MonthComp>
      <MonthComp onClick={() => setMonth('october')}>OCT</MonthComp>
      <MonthComp onClick={() => setMonth('november')}>NOV</MonthComp>
      <MonthComp onClick={() => setMonth('december')}>DEC</MonthComp>
    </div>
  );
};

export default MonthsComp;
