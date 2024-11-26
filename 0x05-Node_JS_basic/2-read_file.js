const fs = require('fs');

module.exports = function countStudents(path) {
  let count = -1;
  const csStudents = [];
  const sweStudents = [];
  try {
    const file = fs.readFileSync(path, 'utf8');
    for (const i of file.split('\n')) {
      if (i === '') {
        break;
      }
      count += 1;
      if (i.includes('CS')) {
        csStudents.push(i.slice(0, i.indexOf(',')));
      }
      if (i.includes('SWE')) {
        sweStudents.push(i.slice(0, i.indexOf(',')));
      }
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
  console.log(`Number of students: ${count}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
};
