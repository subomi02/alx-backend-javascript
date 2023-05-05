export default function iterateThroughObject(reportWithIterator) {
  const employeeIterator = reportWithIterator();
  let result = "";
  let current = employeeIterator.next();

  while (!current.done) {
    result += `${current.value}|`;
    current = employeeIterator.next();
  }

  return result.slice(0, -1);
}
