// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // only modifiable at initialization
  readonly lastName: string; // only modifiable at initialization
  fullTimeEmployee: boolean; // always defined
  yearsOfExperience?: number; // optional
  location: string; // always defined
  [key: string]: any; // allow any additional property
}

// Example teachers
const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "New York",
  yearsOfExperience: 5,
};

const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "London",
};

// Add any extra property like 'contract'
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);

// Interface describing the constructor parameters
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class methods
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
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

// Example usage
const student = new StudentClass({ firstName: "John", lastName: "Doe" });

console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
