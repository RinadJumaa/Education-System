import { useParams, Outlet } from "react-router-dom";
import { getCourses } from "../data/Courses";
import '../css/mainstyle.css'

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
      <h3 className="h3style">Students Registered in Course: {id}</h3>
      <div className="infostyle">
        
        {list.map((student) => ( //in the array contains all students that is registered in the course
          
          <div
            className="liststyle"
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