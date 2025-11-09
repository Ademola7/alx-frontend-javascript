// task_3/js/interface.ts

// A type alias for a row ID
export type RowID = number;

// An interface describing a row element
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // optional field
}
