import React, { useState } from "react";
import GridTable from "../components/GridTable";
import axios from "axios";



const Home = () => {
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);

    const testAxios = async () => {
        alert("테스트 버튼 클릭");
        const data = { name: "hyun" };
        const result = await axios.post('http://localhost:3065/post', data);
        console.log("columns : ", result.data.columns);
        console.log("rows : ", result.data.rows);

        setColumns(result.data.columns);
        setRows(result.data.rows);
    }

    return (
        <>
            <button onClick={testAxios}>
                test button
            </button>
            <div>Hello, Next!</div>
            <GridTable columns={columns} rows = {rows}/>
        </>
    );
};

export default Home;

