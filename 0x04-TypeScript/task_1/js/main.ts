// main.ts

// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// 2. Directors interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// 3. Example usage of Directors
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 4. Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 5. Implement printTeacher
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// 6. Example usage of printTeacher
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Mary", "Smith")); // Output: M. Smith

// main.ts

// 1. Interface describing constructor of the class
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// 2. Interface describing the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 3. Implement the StudentClass
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// 4. Example usage
const student1: StudentClassInterface = new StudentClass("Henry", "Omino");
console.log(student1.displayName());     // Output: Henry
console.log(student1.workOnHomework()); // Output: Currently working




