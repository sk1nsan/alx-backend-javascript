module.exports = class AppController {
  static getHomepage(request, response) {
    response.status(200).end('Hello Holberton School!');
  }
};
