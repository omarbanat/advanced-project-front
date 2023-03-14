import './MonthsComp.css';
import MonthComp from './MonthComp';

const MonthsComp = ({ setMonth }) => {
  return (
    <div className="months-component">
      <MonthComp onClick={() => setMonth('January')}>JAN</MonthComp>
      <MonthComp onClick={() => setMonth('February')}>FEB</MonthComp>
      <MonthComp onClick={() => setMonth('March')}>MAR</MonthComp>
      <MonthComp onClick={() => setMonth('April')}>APR</MonthComp>
      <MonthComp onClick={() => setMonth('May')}>MAY</MonthComp>
      <MonthComp onClick={() => setMonth('June')}>JUN</MonthComp>
      <MonthComp onClick={() => setMonth('July')}>JUL</MonthComp>
      <MonthComp onClick={() => setMonth('August')}>AUG</MonthComp>
      <MonthComp onClick={() => setMonth('September')}>SEP</MonthComp>
      <MonthComp onClick={() => setMonth('October')}>OCT</MonthComp>
      <MonthComp onClick={() => setMonth('November')}>NOV</MonthComp>
      <MonthComp onClick={() => setMonth('December')}>DEC</MonthComp>
    </div>
  );
};

export default MonthsComp;
