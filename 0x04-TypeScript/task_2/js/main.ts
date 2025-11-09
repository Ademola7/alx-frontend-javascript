// 1. DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 2. TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 3. Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// 4. Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// 5. createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// 6. Example usage
const employee1 = createEmployee(200);
console.log(employee1.constructor.name); // Teacher

const employee2 = createEmployee(1000);
console.log(employee2.constructor.name); // Director

const employee3 = createEmployee("$500");
console.log(employee3.constructor.name); // Director

// Assuming Director and Teacher classes are already defined
// as in the previous task with createEmployee function

// 1. Type predicate to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// 2. Execute work based on employee type
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// 3. Example usage
executeWork(createEmployee(200)); // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks

// Define a string literal type allowing only 'Math' or 'History'
type Subjects = "Math" | "History";

// Function that takes one of those literal types as a parameter
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Example usage:
console.log(teachClass("Math")); // Output: Teaching Math
console.log(teachClass("History")); // Output: Teaching History
