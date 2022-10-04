import {Outlet } from "react-router-dom";
import { getStudents } from "../data/Students";
import '../css/mainstyle.css'

export default function PaidStudents() {
  
  let students = getStudents(); //get the list of students objects
  
  /*find the students who the paid property is true
  if its true, then add the student name the list array
  */
  const studentlist = ()=>{
    let list =[]
    students.forEach(element => {
    if(element.Paid===true){
      list.push(element.name)
    }
    
    
  });
    console.log(list)
    return list
}

  let list = studentlist()
  
  let count =1;

  return (
    <div>
      <h3 className="h3style">List of students that paid</h3>
      <div className="infostyle">
        
        {list.map((student) => ( //in the array contains all students that paid
          
          <div className="liststyle"
            key={student}
          >
            {/* display the array content (the students names) */}
            {(count++)+ ": " +student} 
          </div>
        ))}
      </div>
      <Outlet/>
    </div>
   
  );
}