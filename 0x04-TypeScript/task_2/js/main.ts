// Define a string literal type allowing only 'Math' or 'History'
export type Subjects = "Math" | "History";

// Function that accepts only a Subjects type
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// Example usage
console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History
