import React, { useState } from "react";
import GridTable from "../components/GridTable";
import axios from "axios";

const defaultColumns = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: '성명' },
  { key: 'position', name: '직책' },
  { key: 'telephone', name: '전화번호' },
  { key: 'job', name: '직업' },
];


const Home = () => {
    const [columns, setColumns] = useState(defaultColumns);
    const [rows, setRows] = useState([]);

    const testAxios = async () => {
        const data = { name: "hyun" };
        const result = await axios.post('http://localhost:3065/post', data);
        console.log("result : ", result);

        if (result.data.length > 0) {
            console.log("result.data.length : ", result.data.length);
            setRows(result.data);
        } else {
            alert("result is empty : " + result)
        }    
    }

    return (
        <>
            <button onClick={testAxios}>
                test button
            </button>
            <div>Hello, Next!</div>
            <GridTable columns={columns} rows={rows} />
        </>
    );
};

export default Home;