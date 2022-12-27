import "./index.css";
import Employee from "./components/Employee";
import EditEmployee from "./components/EditEmployee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import { FormGroup } from "react-bootstrap";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployee] = useState([
    {
      id: 1,
      name: "Wilson",
      role: "UI/UX Designer",
      img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-837358.jpg&fm=jpg&w=640&h=427&_gl=1*1y5ozn4*_ga*MTYxMjQ5MDQyMi4xNjY4ODIxNzA1*_ga_8JE65Q40S6*MTY2ODgyMTcxNi4xLjEuMTY2ODgyMzQ3NS4wLjAuMA..",
    },
    {
      id: 2,
      name: "Stanley",
      role: "Back End Enginer",
      img: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg&w=640&h=424&_gl=1*pwz0bg*_ga*MTYxMjQ5MDQyMi4xNjY4ODIxNzA1*_ga_8JE65Q40S6*MTY2ODgyMTcxNi4xLjEuMTY2ODgyMzQzOS4wLjAuMA..",
    },
    {
      id: 3,
      name: "Charles",
      role: "Front End Developer",
      img: "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-845457.jpg&fm=jpg&w=640&h=473&_gl=1*nq5qa*_ga*MTYxMjQ5MDQyMi4xNjY4ODIxNzA1*_ga_8JE65Q40S6*MTY2ODgyMTcxNi4xLjEuMTY2ODgyMzUxMC4wLjAuMA..",
    },
    {
      id: 4,
      name: "Emma",
      role: "Lead Designer",
      img: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-762080.jpg&fm=jpg&w=640&h=427&_gl=1*om3bxo*_ga*MTYxMjQ5MDQyMi4xNjY4ODIxNzA1*_ga_8JE65Q40S6*MTY2ODgyMTcxNi4xLjEuMTY2ODgyMzU0Ny4wLjAuMA..",
    },
    {
      id: 5,
      name: "Damiel",
      role: "Project Manager",
      img: "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?cs=srgb&dl=pexels-hasibullah-zhowandai-819530.jpg&fm=jpg&w=640&h=427&_gl=1*1eohsc0*_ga*MTYxMjQ5MDQyMi4xNjY4ODIxNzA1*_ga_8JE65Q40S6*MTY2ODgyMTcxNi4xLjEuMTY2ODgyMzU3OS4wLjAuMA..",
    },
    {
      id: 6,
      name: "Ruby",
      role: "UI/UX Designer",
      img: "https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?cs=srgb&dl=pexels-luizclas-1848565.jpg&fm=jpg&w=640&h=960&_gl=1*10v29q9*_ga*MTYxMjQ5MDQyMi4xNjY4ODIxNzA1*_ga_8JE65Q40S6*MTY2ODgyMTcxNi4xLjEuMTY2ODgyMzYxMC4wLjAuMA..",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return Object.assign(employee, { name: newName, role: newRole });
      }
      return employee;
    });
    setEmployee(updatedEmployees);
  }

  function addEmployee(name, role, image) {
    let newEmployee = {
      id: uuidv4(),
      name,
      role,
      img: image,
    };
    console.log(newEmployee);
    setEmployee([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="App">
      <header className="App-header">
        {showEmployees ? (
          <>
            <input
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setRole(e.target.value);
              }}
            />
            <div className="flex flex-wrap justify-center">
              {employees.map((employee, cur) => {
                //console.log(uuidv4())

                const editEmployee = (
                  <EditEmployee
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    updateEmployee={updateEmployee}
                  />
                );
                return (
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    updateEmployee={updateEmployee}
                    editEmployee={editEmployee}
                  />
                );
              })}
            </div>
            <AddEmployee addEmployee={addEmployee} />
          </>
        ) : (
          <p>You are not allowed to see the employees</p>
        )}
      </header>
      <div> Checking if this works</div>
    </div>
  );
}

export default App;
