// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and store the returned ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with an age
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row using the returned ID
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the same ID
CRUD.deleteRow(newRowID);
