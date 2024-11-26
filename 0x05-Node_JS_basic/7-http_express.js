const express = require('express');
const fs = require('fs');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let count = -1;
  const csStudents = [];
  const sweStudents = [];
  fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
      throw (new Error('Cannot load the database'));
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
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${count}\n`);
      res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
      res.end();
    }
  });
});

app.listen(1245);
module.exports = app;
