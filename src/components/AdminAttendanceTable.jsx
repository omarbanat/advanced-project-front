import React from 'react';
import { MDBDataTable } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './AdminAttendanceTable.css';

const AdminAttendanceTable = ({ filteredData }) => {
  // filteredData &&
  // filteredData.map((el) => {
  // const datess = el.all_dates.split(',');
  // const attends = el.all_attendances.split(',');
  // return datess.map((el, idx) => {
  // const checc = { date: el, status: attends[idx] };
  // return checc;
  // });

  const data = {
    columns: [
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 300,
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 300,
      },
    ],
    rows: filteredData,
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
      className="admin-attendance-table__table"
    />
  );
};

export default AdminAttendanceTable;
