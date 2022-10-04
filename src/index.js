import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import SearchCourses from './routes/SearchCourse'
import ListOfStudent from './routes/ListOfStudents'
import PaidStudents from './routes/PaidStudents'
import StudentsInCourse from './routes/StudentsInCourse'
import StudentsList from './routes/RegisteredStudents'
import StudentInfo from './routes/StudentInfo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} >

        {/* nested routes */}
        <Route path="courselist" element={<SearchCourses/>}>
          <Route path=":coursename" element={<StudentsInCourse/>}/>
        </Route>
        
        <Route path='studentslist' element ={<ListOfStudent/>}/>
        <Route path='registeredstudents' element ={<StudentsList/>}>
          <Route path=':studentinfo' element ={<StudentInfo/>}/>
        </Route>
        <Route path='finanialreports' element ={<PaidStudents/>}/>
        </Route>
      </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
