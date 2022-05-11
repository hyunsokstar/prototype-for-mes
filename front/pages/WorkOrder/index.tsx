
import React, { useState } from 'react'
import GridTable from "../../components/GridTable"

function hyun_test(e: any) {
  console.log("e : ", e.target.value);
}


// onChange={(event) => {
//   let eventValue = event.target.value
//   if(isNumberInput){
//     if(checkIfNegative(event.target.value)){
//       Notiflix.Report.warning('경고', '음수일 수 없습니다.', '확인')
//       return
//     }
//     eventValue= RemoveFirstZero(event.target.value)
//   }
//   if(column.key === 'mold_name') {
//     onRowChange({
//       ...row,
//       [column.key]: eventValue,
//       wip_name: eventValue ? eventValue+'-1' : undefined,
//       isChange: true
//     })
//   }else if(column.key === "goal"){
//     onRowChange({ ...row, [column.key]: eventValue, isChange: true })
//     if(selector.selectRow === 1){
//       selector.machineList.map((v,i)=>{
//         if(i !== 0){
//           v.goal = Number(eventValue)
//         }
//       })
//     }else{
//       selector.machineList[selector.selectRow].goal = Number(eventValue);
//     }
//     dispatch(insert_machine_list({...selector}))
//   }else{
//     onRowChange({ ...row, [column.key]: eventValue, isChange: true })
//   }
// }}

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
        setRow={(event:any) => {

        }}
        columns={columns}
        rows={basicRows}
      />
    </div>

  )

}

export default App;