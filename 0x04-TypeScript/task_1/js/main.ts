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



