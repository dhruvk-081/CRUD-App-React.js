import { Route, Routes } from "react-router-dom";
import "./App.css";
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
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
