import { useParams, Outlet } from "react-router-dom";
import { getCourses } from "../data/Courses";
//import { getStudents } from "../data/Students";

export default function StudentsInCourse() {
  let params = useParams(); //returns an object of key from the current URL 
  let courses = getCourses(); //get the list of courses
  //let students = getStudents();
  let id = params.coursename; //course name from the url
    
  /* returns the registered students in a specific course
  find the students who's registered in the course
   then copy the students array to the list array
  */
   function getStudentsInCourse() {
    let list =[]
    courses.forEach(element => {
    if(element.name===id){
      list = element.students
    }
  });
    console.log(list)
    return list
  }

  let list = getStudentsInCourse()
  
  let count = 1;

  return (
    <div>
      <h3 style={{
        margin: "10px",
        color:'#b30000'
      }}>Students Registered in Course: {id}</h3>
      <div
        style={{
          //borderRight: "solid 1px",
          margin: "1rem",
          fontWeight: "450",
          color:'blue'          
        }}
      >
        
        {list.map((student) => ( //in the array contains all students that is registered in the course
          
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