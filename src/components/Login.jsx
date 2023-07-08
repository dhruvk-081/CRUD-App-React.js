import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
// import "./Login.css";

const Login = () => {
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://64a963a18b9afaf4844aa065.mockapi.io/authentication", {
        useremail,
        password,
      });

      // Assuming the API returns a token upon successful login
      const token = response.data.token;

      // Store the token in localStorage or a state management solution (e.g., Redux)
      localStorage.setItem("token", token);
      navigate("/read");
    } catch (error) {
      console.log("Login failed", error);
      alert("Login failed", error)
    }
  };

  return (
    <>
    <Header />
      <div className="container">
        <h2 className="mt-5 mb-5">
          <i class="bi bi-person-fill"></i> Login
        </h2>
        <form action="">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" value={useremail} placeholder="User Email" onChange={(e) => setUserEmail(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              User Email
            </label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
            <button className="btn btn-primary" type="submit" onClick={handleLogin}>
              <i class="bi bi-person-fill"></i> Login
            </button>
            <button className="btn btn-secondary mx-2">
              <Link to="/signup">
                <i class="bi bi-person-plus-fill"></i> Signup
              </Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
