
import React, { useState } from 'react'
import GridTable from "../../components/GridTable"

function hyun_test(e: any) {
  console.log("e : ", e.target.value);
}

function TextEditor({
  row,
  column,
  onRowChange,
  onClose
}: any) {
  return (
    <input
    style={{textAlign: 'center',  border:"none" }}
      onChange={(event) => {
        let eventValue = event.target.value
        onRowChange({ ...row, [column.key]: eventValue, isChange: true })
      }}
    />
  );
}

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title', editable: "true", editor: TextEditor }
];

const rows = [
  { id: 0, title: 'Example2' },
  { id: 1, title: 'Demo' }
];

function App() {
  const [basicRows, setBasicRows] = useState(rows);
  const [sortColumns, setSortColumns] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(() => new Set());


  // return <DataGrid columns={columns} rows={basicRows} />;


  return (
    <div>
      <h2>hyun table</h2>
      <GridTable
        // setRow={(e) => {
        //   console.log("테이블 정보 : ", e);
        // }}
        setRow={(e:[]) => {
          console.log("basicRows : ", basicRows);
          console.log("e : ", e);
          setBasicRows([...e])

        }}
        columns={columns}
        rows={basicRows}
      />
    </div>

  )

}

export default App;