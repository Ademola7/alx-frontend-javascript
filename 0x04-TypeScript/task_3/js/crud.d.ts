// task_3/js/crud.d.ts

import { RowID, RowElement } from "./interface";

declare module "./crud" {
  // Define the type signatures for the functions exported in crud.js
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
