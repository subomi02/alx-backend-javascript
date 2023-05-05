//Olasubomi
export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();
  let index = 0;
  
  return {
    next() {
      if (index >= employees.length) {
        return { done: true };
      }
      
      const value = employees[index];
      index++;
      
      return { value, done: false };
    }
  };
}
