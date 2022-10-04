import { useParams } from "react-router-dom";
import { getStudents } from "../data/Students";
import '../css/mainstyle.css'

export default function StudentInfo() {
  let params = useParams();
  let id = params.studentinfo
  let students = getStudents()
  //console.log(student)

  function getStudentsInfo() {
    let list =[]
    students.find(element => {
    if(element.name===id){
      list = element
    }
  });
    console.log(list)
    return list
  }

  let student = getStudentsInfo()

  return (
    <main className="info">
      <h3 className="h3style">Name: {student.name}</h3>
      <p>
        Email: {student.email}
      </p>
      <p>Operation: {student.operation}</p>
      <p>Paid: {student.Paid.toString()}</p>
    </main>
  );
}