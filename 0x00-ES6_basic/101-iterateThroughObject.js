export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  let employeeIterator = reportWithIterator();
  let employee = employeeIterator.next();

  while (!employee.done) {
    result += `${employee.value}|`;
    employee = employeeIterator.next();
  }

  // Remove the trailing |
  result = result.slice(0, -1);

  return result;
}
