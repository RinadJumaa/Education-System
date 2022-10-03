import {NavLink, Outlet, useSearchParams} from "react-router-dom";
import { getCourses } from "../data/Courses";

  
  export default function SearchCourses() {
    let courses = getCourses(); //get the list of courses
    let [searchParams, setSearchParams] = useSearchParams(); // read and modify the query string in the URL
  
    return (
      <div style={
        { display: "flex",}}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
            backgroundColor:"antiquewhite",
            
          }}
        >
          <input 
          style={{
            padding:'10px',
            fontWeight:'bold',
            fontSize: '15px'
          }}
            value={searchParams.get("filter") || ""} 
            onChange={(event) => { //change at the moment
              let filter = event.target.value; //the element that im focusing on (input element)
              if (filter) {
                setSearchParams({ filter }); // modify the url adding filter and the text im typing in the textfeild
              } else { //else Im not writing anything (value= "" )
                setSearchParams({});
              }
            }}
          />
          {courses
            .filter((course) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = course.name.toLowerCase();
              return name.startsWith(filter.toLowerCase()); //returns the courses that only starts with what Im typing
            })
            .map((course) => (//display the courses
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                  fontWeight: "bold",
                  textDecoration:'none'
                })}
                //when clicking on the course it will direct me to /courselist/(the name of the course)
                to={`/courselist/${course.name}`} 
                key={course.students}
              >
                {/* displaying the courses names  */}
                {course.name} 
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    );
  }