import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
          alert("Signup Successfully !");
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
          alert(error);
        });

      setName("");
      setUserEmail("");
      setPassword("");
    } else {
      alert("All fields are mandatory !");
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="mt-5 mb-5">
          <i class="bi bi-person-plus-fill"></i> Signup
        </h2>
        <form action="">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="UserName" onChange={(e) => setName(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Username
            </label>
          </div>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
            <button className="btn btn-primary" type="submit" onClick={handleAuth}>
              <i class="bi bi-person-plus-fill"></i> Signup
            </button>
            <button className="btn btn-secondary">
              <Link to="/">
                <i class="bi bi-person-fill"></i> Login
              </Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

// https://64a963a18b9afaf4844aa065.mockapi.io/authentication
