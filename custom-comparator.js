// Write a sorting function (sometimes called a custom comparator), that sorts the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.

const customComparator = (students)=>{
  students.sort((student1, student2)=>{
    if (student1.name > student2.name) {
      return 1;
    } else if (student1.name < student2.name) {
      return -1;
    } else {
      return student2.age - student1.age;
    }
  });
  return students;
};

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log(customComparator(students));
