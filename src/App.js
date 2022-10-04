//import logo from './logo.svg';
import './App.css';
import { Outlet,Link } from "react-router-dom";

function App() {
  return (
    <div className='Main'>
    <Link className='title' to='/'>Education System</Link>
    <nav className='mainnav'>
      <Link className='linkclass' to="/courselist">Courses List</Link> |{" "}
      <Link className='linkclass' to="/studentslist">List of Students</Link> |{" "}
      <Link className='linkclass' to="/registeredstudents">Registered Students</Link> |{" "}
      <Link className='linkclass' to="/finanialreports">Financial Reports</Link> {" "}
    
    </nav>
    
    <Outlet />
  </div>
  );
}

export default App;
