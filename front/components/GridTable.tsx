import React from 'react'
import DataGrid from 'react-data-grid';
import styled from "styled-components";

interface IProps {
  columns: Array<any>
  rows: Array<any>
  setRow: (row: (state) => { rows: any }) => void
}

const DataGridTable = styled(DataGrid)`
  ::-webkit-scrollbar-thumb{
    background:#484848;
  }
`;

function GridTable({ columns, rows, setRow }: IProps) {
  console.log("Grid Table 출력 확인!!");

  const  onGridRowsUpdated = ({ fromRow, toRow, updated }: any) => {
        setRow(state => {
            const rows = state.rows.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated };
            }
            return { rows };
        });
    };

  return (
    <>
      hi
      {/* <DataGrid columns={columns} rows={rows} /> */}
      <DataGridTable
        onRowsChange={setRow}
        columns={columns}
        rows={rows}
        enableCellSelect={true}
        // rowGetter={i => rows[i]}

      />

    </>
  )
}

export default GridTable