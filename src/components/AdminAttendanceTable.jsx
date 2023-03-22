import React from 'react';
import { MDBDataTable } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './AdminAttendanceTable.css';

const AdminAttendanceTable = ({ filteredData }) => {
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
        field: 'attendanceType',
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
