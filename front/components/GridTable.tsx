import React from 'react'
import DataGrid from 'react-data-grid';
import styled from "styled-components";

interface IProps {
  columns: Array<any>
  rows: Array<any>
  setRow: (row: Array<any>) => void
}

const DataGridTable = styled(DataGrid)`
  ::-webkit-scrollbar-thumb{
    background:#484848;
  }
`;

function GridTable({ columns, rows, setRow }: IProps) {
  console.log("Grid Table 출력 확인!!");

  return (
    <>
      hi
      {/* <DataGrid columns={columns} rows={rows} /> */}
      <DataGridTable
        onRowsChange={setRow}
        columns={columns}
        rows={rows}
        enableCellSelect={true}
      />

    </>
  )
}

export default GridTable