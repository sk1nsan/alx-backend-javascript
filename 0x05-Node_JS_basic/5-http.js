const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    let result = '';
    let count = -1;
    const csStudents = [];
    const sweStudents = [];
    fs.readFile(path, 'utf8', (err, data) => {
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
        result += `Number of students: ${count}\n`;
        result += `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`;
        result += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
        resolve(result);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    countStudents(process.argv[2]).then(
      (value) => {
        res.end(value);
      },
      () => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      },
    );
  }
});
app.listen(1245);
module.exports = app;
