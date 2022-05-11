import React, { useState, useEffect } from "react";
import GridTable from "../components/GridTable";
import axios from "axios";

const defaultColumns = [
    { key: 'id', name: 'ID' , editable: true},
    { key: 'name', name: '성명' , editable: true},
    { key: 'position', name: '직책' , editable: true},
    { key: 'telephone', name: '전화번호' , editable: true},
    { key: 'job', name: '직업' ,editable: true},
];

const Home = () => {
    const [columns, setColumns] = useState(defaultColumns);
    const [rows, setRows] = useState([]);

    const getListForPostModel = async () => {
        const result = await axios.post('http://localhost:3065/post');
        console.log("result : ", result);
        console.log("result : ", result.data.length);

        if (result.data.length > 0) {
            console.log("result.data.length : ", result.data.length);
            setRows(result.data);
        } else {
            alert("result is empty : " + result)
        }
    }

    useEffect(() => {
        // getListForPostModel()
        return () => {
        }
    }, [])

    return (
        <>
            <button>
                test button
            </button>
            <div>Hello, Next!</div>
            <GridTable columns={columns} rows={rows} />
        </>
    );
};

export default Home;