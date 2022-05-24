import React, { useState, useEffect } from "react";
import GridTable from "../components/GridTable";
import axios from "axios";
import { SelectColumn } from "react-data-grid";

function TextEditor({ row, column, onRowChange, onClose }: any) {
  return (
    <input
      style={{ textAlign: "center", border: "none" }}
      onChange={(event) => {
        // alert("row change !!")
        let eventValue = event.target.value;
        onRowChange({ ...row, [column.key]: eventValue, isChange: true });
      }}
    />
  );
}

const defaultColumns = [
  { key: "id", name: "ID", editable: true ,editor: TextEditor },
  { key: "name", name: "성명", editable: true ,editor: TextEditor},
  { key: "position", name: "직책", editable: true ,editor: TextEditor},
  { key: "telephone", name: "전화번호", editable: true ,editor: TextEditor},
  { key: "job", name: "직업", editor: TextEditor, editable: true },
];

const Home = () => {
  const [rows, setRows] = useState([]);
  const [selectList, setSelectList] = useState<Set<any>>(new Set());
  const [columns, setColumns] = useState(defaultColumns);
  const [selectRow, setSelectRow] = useState<number>(0);

  const saveHandler = async () => {
    console.log("save handler click");
    // const rowData = rows;
    // rows.map((row) => {
    //   console.log("row : ", row);
    // });
    // {id: 1, name: 'hyun', position: 'tere', telephone: '01049038056', job: 'tere', …}

    const rowData = rows.map((row: any) => {
      if (selectList.has(row.id)) {
        return {
          id: row.id,
          name: row.name,
          position: row.position,
          telephone: row.telephone,
          job: row.job,
        };
      } else {
      }
    });

    console.log("rowData : ", rowData);

    try {
      // 현재 테이블 행 데이터를 데이터로 데이터 입력 요청
      const result = await axios.post("http://localhost:3065/post", rowData);
      console.log("result : ", result);
      setRows([...result.data]);
      alert("데이터 추가 성공");
    } catch (error) {
      console.error(error);
    }
  };

  const getListForPostModel = async () => {
    const result = await axios.get("http://localhost:3065/post");
    // console.log("result : ", result);
    // console.log("result : ", result.data.length);

    if (result.data.length > 0) {
      // console.log("result.data.length : ", result.data.length);
      setRows(result.data);
    } else {
      alert("result is empty : " + result);
    }
  };

  useEffect(() => {
    getListForPostModel();
    return () => {};
  }, []);

  const competeId = (rows) => {
    // const tempRow = [...rows]
    // const spliceRow = [...rows]
    // spliceRow.splice(selectRow, 1)
    // const isCheck = spliceRow.some((row)=> row.tmpId === tempRow[selectRow].tmpId && row.tmpId !== undefined && row.tmpId !== '')

    // if(spliceRow){
    //   if(isCheck){
    //     return Notiflix.Report.warning(
    //       '아이디 경고',
    //       `중복되는 아이디가 존재합니다.`,
    //       '확인'
    //     );
    //   }
    // }

    setRows(rows);
  };

  const addRow = () => {
    const random_id = Math.random() * 1000;

    let items = {};
    setRows([
      {
        ...items,
        id: random_id,
        name: null,
        position: "",
        handphone:"",
        job:""
      },
      ...rows,
    ]);
  }

  return (
    <>
      메인 페이지
      <br />
      <div
        style={{
          border: "1px solid green",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button onClick={addRow}>행 추가</button>
        <button onClick={saveHandler}>저장 하기</button>


      </div>
      <div>Hello, Next!</div>
      <GridTable
        editable
        resizable
        rows={rows}
        headerList={[SelectColumn, ...columns]}
        selectList={selectList}
        //@ts-ignore
        setSelectList={(e) => {
          console.log("Asdsad : ", e);
          setSelectList(e);
        }}
        setSelectRow={setSelectRow}
        setRow={(e) => {
          console.log("e : ", e);

          let tmp: Set<any> = selectList;

          e.map((v, i) => {
            if (v.isChange) tmp.add(v.id);
          });
          setSelectList(tmp);
          competeId(e)
        }}
      />
    </>
  );
};

export default Home;
