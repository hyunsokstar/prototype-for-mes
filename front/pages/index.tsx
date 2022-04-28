import React from "react";
import GridTable from "../components/GridTable";
import axios from "axios";


const Home = () => {
    const testAxios = async () => {
        alert("테스트 버튼 클릭");
        const data = {name:"hyun"};
        const result = await axios.post('http://localhost:3065/post', data);  
        console.log("resullt : ", result.data.message);
    }

    return (
        <>
            <button onClick={testAxios}>
                test button
            </button>
            <div>Hello, Next!</div>
            <GridTable />
        </>
    );
};

export default Home;
