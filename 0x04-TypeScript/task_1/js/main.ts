// ------------------------------
// 3. Printing teachers
// ------------------------------

// Interface describing the function signature
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage:
console.log(printTeacher("John", "Doe")); // J. Doe

// ------------------------------
// 4. Writing a class
// ------------------------------

// Interface for the class constructor
export interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class methods
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

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

// Example usage:
const student = new StudentClass("Alice", "Smith");
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working
