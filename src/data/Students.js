//list of students objects
let StudentsList = [
    {
      name: "Rinad Jumaa",
      email: "rinadjumaa72@gmail.com",
      operation: "Registered",
      Paid: true,
    },
    {
        name: "Hanan Mohammad",
        email: "hnmoh123@gmail.com",
        operation: "Registered",
        Paid: true,
    },
    {
        name: "Janan Jumaa",
        email: "jumaajannan@gmail.com",
        operation: "unRegistered",
        Paid: false,
    },
    {
        name: "Laila Daher",
        email: "laylaaysdh@gmail.com",
        operation: "Registered",
        Paid: false,
    },
    {
      name: "Lama Ayyad",
      email: "lamaaaaayad@gmail.com",
      operation: "Registered",
      Paid: false,
    },
    {
      name: "Munya Daher",
      email: "munyadhr45@gmail.com",
      operation: "unRegistered",
      Paid: false,
    },
    {
      name: "Ruba Khatib",
      email: "khatibruba234244@gmail.com",
      operation: "Registered",
      Paid: true,
    }
  ];
  
  //get all students objects
  export function getStudents() {
    return StudentsList;
  }

  export function getRegisteredStudents() {
    return StudentsList.forEach(
      (student) => StudentsList.operation === "Registered"
    );
  }

  // export function getStudents(paid) {
  //   return StudentsList.find(
  //     (student) => StudentsList.paid === paid
  //   );
  // }