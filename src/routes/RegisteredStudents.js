import { Link, Outlet } from "react-router-dom";
import { getStudents} from "../data/Students";
import '../css/mainstyle.css'

export default function StudentsList() {
  let students = getStudents();
  let str = 'Registered'
  
  const registeredlist = ()=>{
    let list =[]
    students.forEach(element => {
    if(element.operation==="Registered"){
      list.push(element)
    }
    
    
  });
    console.log(list)
    return list
}
let registeredstudents = registeredlist()


  return (
    <div className="divstyle">
      <nav className="navstyle">
        <h3 className="titlestyle">Registered Students</h3>
        {registeredstudents.map((student) => (
          <Link className="navlinkstyle"
            to={`/registeredstudents/${student.name}`}
            key={student.name}
          >
            {student.name}
          </Link>
        ))}
      </nav>
      <Outlet/>
    </div>
   
  );
}