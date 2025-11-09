// 1. Teacher Interface
interface Teacher {
  readonly firstName: string; // only set during initialization
  readonly lastName: string; // only set during initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // Allow arbitrary extra properties
  [key: string]: any;
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // arbitrary property
};

console.log(teacher3);
/*
Output:
{
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false
}
*/

// 2. Directors Interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};

console.log(director1);
/*
Output:
{
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17
}
*/
