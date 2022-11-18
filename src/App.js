import './App.css';
import Employee from './components/Employee';

function App() {
  console.log("We're about to list the employees");
  const showEmployees = true;
  return (
    <div className="App">
      <header className="App-header">
        {console.log("inside the return")}
        {showEmployees ?
        <> 
        <Employee> </Employee>
        <Employee> </Employee>
        <Employee> </Employee>
        <Employee> </Employee>
        <Employee> </Employee>
        </>
        :  <p>You are not allowed to see the employees</p>
}
      </header>
    </div>
  );
}

export default App;
