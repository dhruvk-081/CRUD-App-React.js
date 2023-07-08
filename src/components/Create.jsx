import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("clciekd");

    if (title !== "" && desc !== "" && dueDate !== "" && status !== "") {
      axios
        .post("https://64a8d3eedca581464b86029b.mockapi.io/crudapp", {
          title: title,
          desc: desc,
          dueDate: dueDate,
          status: status,
        })
        .then(() => {
          history("/read");
        })
        .catch((error) => {
          console.error(error);
        });

      setTitle("");
      setDesc("");
      setDueDate("");
      setStatus("");
    } else {
      alert("All fields are mandatory !");
    }
  };
  return (
    <>
      <h2 className="mt-5">Create new task</h2>
      <form action="">
        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Add Title" onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="10" placeholder="Description" onChange={(e) => setDesc(e.target.value)}></textarea>
        </div>

        <div className="row g-2">
          <div className="col-md">
            <div className="form-floating">
              <input type="date" className="form-control" placeholder="Due Date" onChange={(e) => setDueDate(e.target.value)} />
              <label htmlFor="floatingInputGrid">Due Date</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <select className="form-select" onChange={(e) => setStatus(e.target.value)}>
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
          <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
            Add Task
          </button>
          <button className="btn btn-secondary">
            <Link to="/read">Back</Link>
          </button>
        </div>
      </form>
      {/* <button>
        <span id="boot-icon" className="bi bi-plus" style="font-size: 200px; -webkit-text-stroke-width: 7.6px; color: transparent; background-clip: text; background-image: -webkit-linear-gradient(top, rgb(255, 255, 0), rgb(255, 0, 0)); opacity: 1; border: hidden; border-radius: 22%; background-color: rgb(242, 242, 242);"></span>
      </button> */}
    </>
  );
};

export default Create;
