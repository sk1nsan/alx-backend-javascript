interface Teacher {
  [index: string]: any;
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName, lastName) {
  return firstName[0] + "." + lastName;
}

interface Student {
  firstName: string,
  lastName: string,
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this.firstName;
  }
}
