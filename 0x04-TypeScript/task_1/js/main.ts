interface Teacher {
  [index: string]: any;
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
}
