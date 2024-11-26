const readDatabase = require('../utils');

module.exports = class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((output) => {
      const result = ['This is the list of our students'];
      for (const [key, value] of Object.entries(output)) {
        result.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      response.status(200).end(result.join('\n'));
    })
      .catch(() => {
        response.status(500).end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).end('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2]).then((output) => {
      response.status(200).end(`List: ${output[major].join(', ')}`);
    })
      .catch(() => {
        response.status(500).end('Cannot load the database');
      });
  }
};
