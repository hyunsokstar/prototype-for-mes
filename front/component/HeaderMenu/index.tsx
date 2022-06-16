import React, { useState } from "react";
import axios from "axios";
import CustomInput from "../../pages/mes/login/CustomInput";



function HeaderMenu() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const loginHandler = async (e: any) => {
      e.preventDefault();
  
      console.log("username : ", username);
      console.log("password : ", password);
  
      console.log("hi");
  
      const result = await axios.patch("http://localhost:3065/users/login", { username, password });
      console.log("result : ", result);
  
    };
  
  
    return (
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          justifyContent:"flex-end",
          marginRight: "10px",
          marginTop: 10,
          maxWidth: "100%",
          marginLeft: "auto",
          // marginRight: "auto",
        }}
      >
        <form onSubmit={loginHandler}>
          <CustomInput label="회원 id" value={username} setValue={setUsername} />
          <CustomInput
            label="비밀번호"
            value={password}
            setValue={setPassword}
            type="password"
          />
          <button type="submit">로그인</button>
        </form>
      </div>)
}

export default HeaderMenu