export default class HolbertonCourse {
  constructor(name, length, students) {
    this.verifyName(name);
    this.verifyLength(length);
    this.verifyStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this.verifyName(newName);
  }

  verifyName(newName) {
    if (typeof (newName) !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this.verifyLength(newLength);
  }

  verifyLength(newLength) {
    if (typeof (newLength) !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this.verifyStudents(newStudents);
  }

  verifyStudents(newStudents) {
    if (!(newStudents instanceof Array)) {
      throw TypeError('Students must be an array');
    }

    this._students = newStudents;
  }
}
