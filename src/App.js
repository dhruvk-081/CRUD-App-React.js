import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/dashboard" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
