// import React from "react";
import { useEffect, useState } from "react";

import DataGrid from "react-data-grid";
import styled from "styled-components";

interface IProps {
  columns: Array<any>;
  rows: Array<any>;
  setRow: (row: (state) => { rows: any }) => void;
}

const DataGridTable = styled(DataGrid)`
  ::-webkit-scrollbar-thumb {
    background: #484848;
  }
`;

function GridTable({
  headerList,
  rows,
  // setRow,
  selectList,
  setSelectList,
  setRow,
}: IProps) {
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(
    selectList ?? new Set()
  );

  // console.log("Grid Table 출력 확인!!");
  const rowKeyGetter = (row: any) => {
    return row.id;
  };

  const onGridRowsUpdated = ({ fromRow, toRow, updated }: any) => {
    setRow((state) => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  return (
    <>
      <DataGridTable
        onRowsChange={setRow}
        onSelectedRowsChange={(e) => {
          console.log("onSelectedRowsChange : ", e);
          setSelectList(e);
        }}
        columns={headerList}
        rows={rows}
        enableCellSelect={true}
        rowKeyGetter={rowKeyGetter}
        // onRowsChange={setRow}
        selectedRows={selectList}
      />
    </>
  );
}

export default GridTable;
