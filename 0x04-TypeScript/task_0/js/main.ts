// main.ts

// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two student objects with types
const student1: Student = {
  firstName: "Henry",
  lastName: "Omino",
  age: 27,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  location: "Mombasa",
};

// 3. Put them into an array
const studentsList: Student[] = [student1, student2];

// 4. Render a table using Vanilla JavaScript DOM APIs
const table: HTMLTableElement = document.createElement("table");
table.border = "1"; // quick styling

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// 5. Append the table to the document body
document.body.appendChild(table);
