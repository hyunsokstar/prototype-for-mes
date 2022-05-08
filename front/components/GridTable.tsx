import React from 'react'
import DataGrid from 'react-data-grid';
import styled from "styled-components";

interface IProps {
  columns: Array<any>
  rows: Array<any>
}

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: '성명' },
  { key: 'postion', name: '직책' },
  { key: 'telephone', name: '전화번호' },
  { key: 'email', name: '이메일' },
];

// const rows = [
//   { id: 0, name: 'Example', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
//   { id: 1, name: 'hyun', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
//   { id: 2, name: '회장', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
//   { id: 3, name: '01049038056', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
//   { id: 4, name: 'terecal@daum.net', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
//   { id: 5, name: 'terecal@daum.net', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
//   { id: 6, name: 'terecal@daum.net', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
//   { id: 7, name: 'terecal@daum.net', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
//   { id: 8, name: 'terecal@daum.net', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
//   { id: 9, name: 'terecal@daum.net', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
// ];


const DataGridTable = styled(DataGrid)`
  ::-webkit-scrollbar-thumb{
    background:#484848;
  }
`;

function GridTable({ columns, rows }: IProps) {
  console.log("Grid Table 출력 확인!!");

  return (
    <>
      hi
      {/* <DataGrid columns={columns} rows={rows} /> */}
      <DataGridTable columns={columns} rows={rows} />



    </>
  )
}

export default GridTable