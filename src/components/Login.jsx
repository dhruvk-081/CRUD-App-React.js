import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { toast } from "react-toastify";
// import "./Login.css";

const Login = () => {
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      //   axios
      //     .get("https://64a963a18b9afaf4844aa065.mockapi.io/authentication")
      //     .then((response) => {
      //       const users = response.data;

      //       const user = users.find((user) => user.email === useremail);

      //       if (user && user.password === password) {
      //         alert("Login successful");
      navigate("/dashboard");
      toast.success("Login Successfully !");
      //       } else {
      //         alert("Invalid email or password");
      //       }
      //     })
      //     .catch((error) => {
      //       console.log("Login failed", error);
      //       alert("Login failed", error);
      //     });
      // }
    }
  };

  const validate = () => {
    let result = true;
    if (useremail === "" || useremail === null) {
      toast.error("please enter email");
      result = false;
    }
    if (password === "" || password === null) {
        toast.error("please enter password");
      result = false;
    }

    return result;
  };

  return (
    <>
      <Header />
      <div id="widt-50" className="container">
        <h2 className="mt-5 mb-5">
          <i className="bi bi-person-fill"></i> Login
        </h2>
        <form action="">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" value={useremail} placeholder="User Email" onChange={(e) => setUserEmail(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              User Email
            </label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
            <button className="btn btn-primary" type="submit" onClick={handleLogin}>
              <i className="bi bi-person-fill"></i> Login
            </button>
            <button className="btn btn-secondary" onClick={() => navigate("/signup")}>
              <i className="bi bi-person-plus-fill"></i> Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
