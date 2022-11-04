import "../styles/login.scss";
import { useState } from "react";
import axios from "axios";
import qs from "qs";
import { url } from "../config";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({
      ...loginInfo,
      username: e.target.value,
    });
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({
      ...loginInfo,
      password: e.target.value,
    });
  };
  async function getData() {
    // const res = await axios.post(url + "auth/signin", loginInfo);
    const res = await axios.post(url + "auth/signin", loginInfo, {
      headers: {
        accessControlAllowOrigin: "*",
      },
    });
    const token = res.data;
    localStorage.setItem("apiKey", "bearer " + token.access_token);
    console.log("getItem", localStorage.getItem("apiKey"));
  }
  async function onLogin() {
    await getData();
  }

  return (
    <div className="admin-wrapper">
      <div className="admin-content">
        <p>Login to Jaethem8 Admin</p>
        <table>
          <tbody>
            <tr>
              <td>username</td>
              <td>
                <input type="text" onChange={(e) => onUsernameChange(e)} />
              </td>
            </tr>
            <tr>
              <td>password</td>
              <td>
                <input type="password" onChange={(e) => onPasswordChange(e)} />
              </td>
            </tr>
            <tr>
              <td>Login?</td>
              <td>
                <button onClick={() => onLogin()}>Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
