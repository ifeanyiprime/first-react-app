import { clear } from '@testing-library/user-event/dist/clear';
import './App.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      <header className="App-header">
        {showEmployees ?
        <>
          <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value)
          }} />
          <Employee name="Ifeanyi" role="Senior developer"> </Employee>
          <Employee name="Joshua" role="Machine Learning Engineer"> </Employee>
          <Employee name="Precious" role={role}> </Employee>
        </>
        :  <p>You are not allowed to see the employees</p>
}
      </header>
    </div>
  );
}

export default App;
