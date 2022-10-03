import { Outlet } from "react-router-dom";
import { getStudents } from "../data/Students";

export default function ListOfStudent() {

  let students = getStudents(); //get the list of students objects
  
  /* returns the registered students
  find the students who's registered
   then add the student name the list array
  */
  const registeredlist = ()=>{
    let list =[]
    students.forEach(element => {
    if(element.operation==="Registered"){
      list.push(element.name)
    }
    
    
  });
    console.log(list)
    return list
}
  let registeredstudents = registeredlist()

/* returns the un registered students
  find the students who's un registered
   then add the student name the list array
  */
  const unregisteredlist = ()=>{
    let list =[]
    students.forEach(element => {
    if(element.operation==="unRegistered"){
      list.push(element.name)
    }
    
    
  });
    console.log(list)
    return list
}
  let unregisteredstudents = unregisteredlist()
  let regcount =1, unregcount =1;
  

  return (
    <div>
      <div style={{
          border: "solid 1px"
        }}>
        <h3 style={{
          margin: "10px",
          color:'#b30000'
        }}>List of Registered Students</h3>
        <div
          style={{
            //borderRight: "solid 1px",
            margin: "1rem",
            fontWeight: '450',
            color:'blue'
          }}
        >
          
          {registeredstudents.map((student) => ( //in the array contains all students that is registered
            
            <div
              style={{ 
                display: "block",
                margin: "1rem 0",
                //borderRight: "solid 1px",
              }}
              key={student}
            >
              {/* display the array content (the students names) */}
              {(regcount++) + ": " + student}
            </div>
          ))}
          
        </div>
      </div>
      <h3 style={{
        margin: "10px",
        color:'#b30000'
      }}>List of UnRegistered Students</h3>
      <div
        style={{
          //borderRight: "solid 1px",
          margin: "1rem",
          fontWeight: '450',
          color:'blue'
        }}
      >
        {/* display the array content (the students names) */}
        {unregisteredstudents.map((student) => ( //in the array contains all students that is registered    
          <div
            style={{ display: "block", margin: "1rem 0" }}
            key={student}
          >
            {(unregcount++) + ": " + student}
          </div>
        ))}
        
      </div>
      <Outlet/>
    </div>
   
  );
}