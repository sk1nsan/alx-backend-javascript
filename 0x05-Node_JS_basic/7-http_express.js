const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, output) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (output) {
        let result = '';
        const students = {};
        const data = output.trim().split('\n').slice(1);
        for (const i of data) {
          const row = i.split(',');
          if (students[row[3]] === undefined) {
            students[row[3]] = [row[0]];
          } else {
            students[row[3]].push(row[0]);
          }
        }
        result += 'This is the list of our students\n';
        result += `Number of students: ${data.length}\n`;
        for (const [key, value] of Object.entries(students)) {
          result += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
        }
        resolve(result.trim());
      }
    });
  });
}

const app = express();
app.get('/', (req, res) => {
  res.status(200).end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((value) => {
    res.status(200).end(value);
  })
    .catch(() => {
      res.status(500);
      res.write('This is the list of our students\n');
      res.end('Cannot load the database');
    });
});

app.listen(1245);
module.exports = app;
