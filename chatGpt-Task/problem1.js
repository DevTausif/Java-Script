function getPassedStudent(students){
    let passStd = []
    for(let std of students){
        if(std.marks >=50){
            passStd.push(std.name)
        }
    }
    return passStd
}
const students = [
    { name: 'Alice', marks: 85 },
    { name: 'Bob', marks: 40 },
    { name: 'Charlie', marks: 72 },
    { name: 'David', marks: 30 }
  ];
  const passed_Student = getPassedStudent(students)
  console.log(passed_Student)

  