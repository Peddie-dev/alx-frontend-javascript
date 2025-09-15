// task_3/js/interface.ts

// A type alias for RowID
export type RowID = number;

// An interface describing the shape of a row in the DB
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // optional
}
