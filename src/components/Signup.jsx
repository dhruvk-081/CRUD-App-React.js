import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const generateToken = () => {
    const randomToken = Math.random().toString(36).substr(2, 8);
    return randomToken;
  };

  const handleAuth = (e) => {
    e.preventDefault();
    // console.log("clciekd");

    if (name !== "" && useremail !== "" && password !== "") {
      const token = generateToken();

      axios
        .post("https://64a963a18b9afaf4844aa065.mockapi.io/authentication", {
          name: name,
          useremail: useremail,
          password: password,
          token: token,
        })
        .then(() => {
          toast.success("Signup Successfully !");
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
          toast.error(error);
        });

      setName("");
      setUserEmail("");
      setPassword("");
    } else {
      toast.error("All fields are mandatory !");
    }
  };

  return (
    <>
      <div id="widt-50" className="container">
        <h2 className="mb-5">
          <i className="bi bi-person-plus-fill"></i> Signup
        </h2>
        <form action="">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" value={name} placeholder="UserName" onChange={(e) => setName(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Username
            </label>
          </div>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" value={useremail} placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
            <button className="btn btn-primary" type="submit" onClick={handleAuth}>
              <i className="bi bi-person-plus-fill"></i> Signup
            </button>
            <button className="btn btn-secondary" onClick={() => navigate("/")}>
              <i className="bi bi-person-fill"></i> Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

// https://64a963a18b9afaf4844aa065.mockapi.io/authentication
