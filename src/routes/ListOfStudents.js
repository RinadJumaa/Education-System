import { Outlet, Link } from "react-router-dom";
import { getStudents } from "../data/Students";
import '../css/mainstyle.css'

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
    <div className="divstyle">
      <nav className="navstyle">
        <h3 className="titlestyle">List of Students</h3>
          {students.map((student) => ( //in the array contains all students that is registered
            
            <div className="liststyle"
              key={student}
            >
              {/* display the array content (the students names) */}
              <Link className="navlinkstyle"
                to={`/studentslist/${student.name}`}
                key={student.name}
              >
                {student.name}
              </Link>
            </div>
          ))}
      </nav>
      <Outlet/>
    </div>
   
  );
}