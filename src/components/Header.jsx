import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid mx-5">
          <span class="navbar-brand">Task Manager App</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="d-flex navbar-nav" role="search">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to={"/"}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to={"/login"}>
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/read"}>
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
