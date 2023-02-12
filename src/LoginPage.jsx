// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import loginBanner from "./assets/images/login banner.png";
import PersonIcon from "@mui/icons-material/Person";
import { Icon } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
function LoginPage(props) {
  const [formData, setFormData] = React.useState({});
  const handleFormData = (event) => {
    let tempFormData = { ...formData };
    tempFormData[event.target.id] = event.target.value;
    setFormData(tempFormData);
  };
  const handleSubmit = () => {
    props.onLogin
      ? props.onLogin(formData)
      : console.log("formData:", formData);
  };
  return (
    <div className="App">
      <div className="App-header">
        <div className="loginCard">
          <div className="leftPanel">
            <div className="title">Welcome to Zeus</div>
            <div className="subtitle">
              Where opportunity meets with excellence
            </div>
            <img src={loginBanner} alt="" />
          </div>
          <div className="rightPanel">
            <div className="title drk">Welcome to Zeus</div>
            <div className="subtitle drk mb-4">
              Where opportunity meets with excellence
            </div>

            <div className="formGroup">
              <Icon color={"white"}>
                <PersonIcon></PersonIcon>
              </Icon>
              <input
                type="text"
                className="formControl"
                placeholder="Username"
                id="username"
                onChange={handleFormData}
              />
            </div>
            <div className="formGroup">
              <Icon color={"white"}>
                <KeyIcon></KeyIcon>
              </Icon>
              <input
                className="formControl"
                placeholder="Password"
                type="password"
                id="password"
                onChange={handleFormData}
              />
            </div>
            <div className="linkText">
              <a className="">Forget Password?</a>
            </div>

            <div className="">
              <button onClick={handleSubmit} className="loginBtn">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
