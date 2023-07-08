import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setDesc(localStorage.getItem("desc"));
    setDueDate(localStorage.getItem("dueDate"));
    setStatus(localStorage.getItem("status"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log("Id...", id);
    axios
      .put(`https://64a8d3eedca581464b86029b.mockapi.io/crudapp/${id}`, {
        title: title,
        desc: desc,
        dueDate: dueDate,
        status: status,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2 className="">Update task</h2>
      <form action="">
        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Add Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="10" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
        </div>

        <div className="row g-2">
          <div className="col-md">
            <div className="form-floating">
              <input type="date" className="form-control" placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
              <label htmlFor="floatingInputGrid">Due Date</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option defaultValue>Select</option>
                <option value="Incomplete">Incomplete</option>
                <option value="In-progress">In progress</option>
                <option value="Completed">Completed</option>
              </select>
              <label htmlFor="floatingSelectGrid">Status</label>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
          <button className="btn btn-primary" type="submit" onClick={handleUpdate}>
            Update Task
          </button>
          <Link to="/read">
            <button className="btn btn-secondary mx-2"> Back </button>
          </Link>
        </div>
      </form>
      {/* <button>
        <span id="boot-icon" className="bi bi-plus" style="font-size: 200px; -webkit-text-stroke-width: 7.6px; color: transparent; background-clip: text; background-image: -webkit-linear-gradient(top, rgb(255, 255, 0), rgb(255, 0, 0)); opacity: 1; border: hidden; border-radius: 22%; background-color: rgb(242, 242, 242);"></span>
      </button> */}
    </>
  );
};

export default Update;
