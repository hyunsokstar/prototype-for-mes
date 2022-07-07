import React, { useState } from "react";
import axios from "axios";
import CustomInput from "../../pages/mes/login/CustomInput";
import LogoutComponent from "../../component/LogOut"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducer';
import userSlice from '../../slices/user';


function HeaderMenu() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  const email = useSelector((state: RootState) => state.user.email);
  console.log('email', email);



  const loginHandler = async (e: any) => {
    e.preventDefault();

    console.log("username : ", username);
    console.log("password : ", password);

    // console.log("hi");

    const result = await axios.patch("http://localhost:3065/users/login", { username, password });
    console.log("result : ", result);

    // dispatch(setUser());
    if (result.data.ok) {
      dispatch(
        userSlice.actions.setUser({
          email: result.data.user_id,
          name: result.data.user_id,
          accessToken: result.data.data.accessToken,
        }),
      );

      localStorage.setItem('mes-token' , result.data.data.accessToken);

    } else {
      alert("login 실패")
    }


  };


  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "10px",
        marginTop: 10,
        maxWidth: "100%",
        marginLeft: "auto",
        // marginRight: "auto",
      }}
    >

      {isLoggedIn ? <LogoutComponent /> :
        <form onSubmit={loginHandler}>
          <CustomInput label="회원 id" value={username} setValue={setUsername} />
          <CustomInput
            label="비밀번호"
            value={password}
            setValue={setPassword}
            type="password"
          />
          <button type="submit">로그인</button>
        </form>} &nbsp;&nbsp;&nbsp;&nbsp;


    </div>)
}

export default HeaderMenu