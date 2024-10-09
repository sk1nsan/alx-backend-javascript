interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}


const student1: Student = {
  firstName: "Braxton",
  lastName: "Trudy",
  age: 18,
  location: "UK",
}

const student2: Student = {
  firstName: "Nassim",
  lastName: "Ahmed",
  age: 19,
  location: "Egypt",
}

const studentslist: Array<Student> = [student1, student2];

const table = document.createElement('table');

for (const student of studentslist) {
  const row = document.createElement('tr');
  const data1 = document.createElement('td');
  const data2 = document.createElement('td');
  data1.appendChild(document.createTextNode(student.firstName));
  data2.appendChild(document.createTextNode(student.location));
  row.appendChild(data1);
  row.appendChild(data2);
  table.appendChild(row);
}

document.body.appendChild(table);
