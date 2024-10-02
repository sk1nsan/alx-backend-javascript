module.exports = function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('Resolved');
    reject(Error('reject'));
  });
};
