import React, { useState } from "react";
import CustomInput from "./CustomInput";
import axios from "axios";
import { resourceLimits } from "worker_threads";


function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e: any) => {
    e.preventDefault();

    console.log("username : ", username);
    console.log("password : ", password);

    console.log("hi");

    const login_result = await axios.patch("http://localhost:3065/users/login", { username, password });
    console.log("login result : ", login_result);

    if(login_result.data.ok){
      alert("토큰 설정 ok")
      localStorage.setItem('mes-token' , login_result.data.data.accessToken);
    } else {
      alert("no anything")
    }

  };


  return (
    <div
      style={{
        marginTop: 200,
        maxWidth: 350,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h3>Login</h3>
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

export default Login