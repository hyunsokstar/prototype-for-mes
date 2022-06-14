import React, { useState, useEffect } from "react";
import GridTable from "../components/GridTable";
import axios from "axios";
import { SelectColumn } from "react-data-grid";
import { PlaceholderBox } from "../components/Formatter/PlaceholderBox";


function TextEditor({ row, column, onRowChange, onClose }: any) {
  console.log("row : ", row);
  console.log("column : ", column); 

  return (
    <input
      style={{ textAlign: "center", border: "none", width:"100%", height:"100%" }}
      onChange={(event) => {
        // alert("row change !!")
        let eventValue = event.target.value;
        onRowChange({ ...row, [column.key]: eventValue, isChange: true });
      }}
    />
  );
}

const defaultColumns = [
  { key: "id", name: "ID", editable: true, editor: TextEditor ,},
  { key: "name", name: "성명", editable: true, editor: TextEditor ,},
  { key: "position", name: "직책", editable: true, editor: TextEditor ,},
  { key: "telephone", name: "전화번호", editable: true, editor: TextEditor ,  },
  { key: "job", name: "직업", editable: true , editor: TextEditor ,  },
];

const Home = () => {
  const [rows, setRows] = useState([]);
  const [selectList, setSelectList] = useState<Set<any>>(new Set());
  const [columns, setColumns] = useState(defaultColumns);
  const [selectRow, setSelectRow] = useState<number>(0);

  const [pageInfo, setPageInfo] = useState<{ page: number; total: number }>({
    page: 1,
    total: 1,
  });

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

  const getListForPostModel = async (page?: number) => {

    let path = {
      page: page ?? 1,
      renderItem: 18,
    }

    let tmp_url = "http://localhost:3065/post";

    Object.values(path).map(v => {
      if (v) {
        tmp_url += `/${v}`
      }
    })

    console.log("tmp_url : ", tmp_url); // http://localhost:3065/post/1/18

    try {
      const result = await axios.get(tmp_url);
      console.log("result : ", result);
      setRows(result.data)
      
    } catch (error) {
      console.log("error : ", error);
      
    }


    // if (result.data.length > 0) {
    //   setRows(result.data);
    // } else {
    //   alert("result is empty : " + result);
    // }

  };

  useEffect(() => {
    getListForPostModel();
    return () => { };
  }, []);

  const competeId = (rows) => {
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
        handphone: "",
        job: "",
      },
      ...rows,
    ]);
  };

  const deleteHandler = async () => {
    const delete_ids = selectList;
    alert("delete_ids : " + delete_ids);
    let delete_ids_array = [];

    // delete_ids.map((id)=> {
    //   console.log("id : ", id);
    // })

    for (let id of delete_ids) {
      console.log("id : ", id);
      delete_ids_array.push(id);
    }

    const result = await axios.delete("http://localhost:3065/post", {
      data: {
        deleteIds: delete_ids_array,
      },
    });

    setRows(result.data.posts);

    console.log("result.data.messge : ", result.data.message);
    alert("result.data.message : " + result.data.message);
  };

  return (
    <>
      메인 페이지 12
      <br />
      <div
        style={{
          // border: "1px solid green",
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <button onClick={addRow}>행 추가</button>
        <button onClick={saveHandler}>저장 하기</button>
        <button onClick={deleteHandler}>삭제 하기</button>
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
          competeId(e);
        }}
      />
    </>
  );
};

export default Home;