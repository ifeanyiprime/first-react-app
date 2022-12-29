import "./index.css";
import Employee from "./components/Employee";
import EditEmployee from "./components/EditEmployee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import { FormGroup } from "react-bootstrap";
import Header from "./components/Header";
import Employees from "./pages/Employees";

function App() {
  return (
    <Header>
      <Employees />
    </Header>
  );
}

export default App;
