import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");

  const navigate = useNavigate();

  function getData() {
    axios
      .get("https://64a8d3eedca581464b86029b.mockapi.io/crudapp")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios.delete(`https://64a8d3eedca581464b86029b.mockapi.io/crudapp/${id}`).then(() => {
      getData();
    });
  }

  const setToLocalStorage = (id, title, desc, dueDate, status) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("desc", desc);
    localStorage.setItem("dueDate", dueDate);
    localStorage.setItem("status", status);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    // console.log("filter--", filter);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    // console.log("sort--", sort);
  };

  const filteredTasks = filter === "all" ? data : data.filter((task) => task.status === filter);

  const sortedTasks = sort === "dueDate" ? [...filteredTasks].sort((a, b) => a.dueDate.localeCompare(b.dueDate)) : filteredTasks;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center pb-2 mb-1 mt-5">
        <h2 className="">Dashboard</h2>
        <button className="btn btn-danger align-self-right">Logout</button>
      </div>
      <div className="d-flex justify-content-start align-items-center mt-5">
        <div className="mx-3">
          <label htmlFor="filter">Filter:</label>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Incomplete">Incomplete</option>
            <option value="In-progress">In progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="">
          <label htmlFor="sort">Sort:</label>
          <select id="sort" value={sort} onChange={handleSortChange}>
            <option value="">None</option>
            <option value="dueDate">Due Date</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>

      <div className="container-fluid mt-5 mb-5">
        <div className="wrapper row">
          {filteredTasks.map((item) => {
            return (
              <div className="card mb-3" style={{ width: "18rem" }} key={item.id}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                  <p className="card-text">{item.desc} ...</p>
                  {/* <h5 id="r-m" onClick={goto}>Read More</h5> */}
                </div>
                <div className="card-body">
                  <p className="card-text mt-3">
                    <small className="text-muted">Due Date : {item.dueDate}</small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Status : {item.status}</small>
                  </p>
                </div>

                <div className="card-footer">
                  <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                    <Link to={"/update"} className="btn btn-primary" onClick={() => setToLocalStorage(item.id, item.title, item.desc, item.dueDate, item.status)}>
                      Edit
                    </Link>
                    <button className="btn btn-danger align-self-right" onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-inline justify-content-md-end mb-5 mx-5 fixed-bottom">
        <Link to={"/create"} className="btn btn-primary p-3">
          <i className="bi bi-plus-circle"> Add </i>
        </Link>
      </div>
    </>
  );
};

export default Read;

// style={{marginRight: spacing + 'em'}}
