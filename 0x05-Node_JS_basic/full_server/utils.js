const fs = require('fs');

module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, output) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (output) {
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
        resolve(students);
      }
    });
  });
};
