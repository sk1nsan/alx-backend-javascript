const fs = require('fs');
const { console } = require('inspector');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    let count = -1;
    const csStudents = [];
    const sweStudents = [];
    fs.readFile(path, 'utf8', (err, data) => {
      console.log(err);
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        for (const i of data.split('\n')) {
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
        console.log(`Number of students: ${count}`);
        console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
        resolve(true);
      }
    });
  });
};
