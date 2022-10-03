//list of courses objects

let CoursesList = [
    {
      name: "Math",
      students: ["Rinad Jumaa", "Hanan Mohammad", "Laila Daher"]
    },
    {
        name: "Full Stack",
        students: ["Hanan Mohammad","Rinad Jumaa", "Ruba Khatib", "Lama Ayyad", "Laila Daher"]
    },
    {
        name: "Data Structure",
        students:[ "Hanan Mohammad","Lama Ayyad","Laila Daher"]
    },
    {
        name: "Algorithm",
        students: ["Rinad Jumaa","Ruba Khatib", "Lama Ayyad"]
    },
    {
        name: "Artificial Intellegence",
        students: ["Ruba Khatib","Rinad Jumaa", "Hanan Mohammad"]
    },
    {
      name: "Operating Systems",
      students: ["Hanan Mohammad","Lama Ayyad","Laila Daher","Ruba Khatib"]
    },
    {
      name: "Machine Learning",
      students: ["Rinad Jumaa","Laila Daher"]
    },
    {
      name: "Compiler",
      students: ["Hanan Mohammad","Laila Daher","Ruba Khatib"]
    },

  ];

  //return list of courses object
  export function getCourses() {
    return CoursesList;
  }

  