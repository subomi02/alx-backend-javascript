export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating student objects
const studentA: Student = {
  firstName: "Harry",
  lastName: "Yoon",
  age: 22,
  location: "Seoul, South Korea",
};
const studentB: Student = {
  firstName: "Anjali",
  lastName: "Prajapati",
  age: 22,
  location: "Lodz, Poland",
};

// Creating a list of students
const studentsList: Array<Student> = [
  studentA,
  studentB,
];

// Defining the CSS styles for the table
const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
export const displayStudents = (students: Array<Student>): void => {
  // Creating the table element
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');

  // Creating table headers
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tableHead.insertAdjacentElement('beforeend', headRow);

  // Creating table rows for each student
  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  // Assembling the table structure
  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);

  // Appending the table to the document body
  document.body.insertAdjacentElement('beforeend', table);
};

// Calling the displayStudents function with the studentsList array
displayStudents(studentsList);

// Creating a <style> element and adding the CSS styles to it
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;

// Adding the <style> element to the document head
document.head.insertAdjacentElement('beforeend', styleSheetElement);

// Setting the document title
document.title = 'Task 0';
