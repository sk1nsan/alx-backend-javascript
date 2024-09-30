export default function createIteratorObject(report) {
  let result = [];
  for (const empolyee of Object.values(report.allEmployees)) {
    result = [...result, ...empolyee];
  }
  return result;
}
