export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const newStudents = studentList.filter((student) => student.location === city)
    .map((student) => {
      for (const studentGrade of newGrades) {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade; // eslint-disable-line no-param-reassign
          break;
        } else {
          student.grade = 'N/A'; // eslint-disable-line no-param-reassign
        }
      }
      return student;
    });
  return newStudents;
}
