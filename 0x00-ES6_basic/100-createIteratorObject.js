export default function createIteratorObject(report) {
const emyees = Object.values(report.allEmployees).flat();
let index = 0;
  
return {
next() {
if (index >= emyees.length) {
return { done: true };
}
      
const value = emyees[index];
index += 1;
return { value, done: false };
},
};
}
