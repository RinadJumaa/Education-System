import {Outlet } from "react-router-dom";
import { getStudents } from "../data/Students";

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
      <h3 style={{ //inline style
        margin: "10px",
        color:'#b30000'
      }}>List of students that paid</h3>
      <div
        style={{
          margin: "1rem",
          fontWeight: "450",
          color:'blue'
        }}
      >
        
        {list.map((student) => ( //in the array contains all students that paid
          
          <div
            style={{ display: "block", margin: "1rem 0" }}
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