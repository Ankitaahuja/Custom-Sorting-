
var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];
  
  // sort by value
  // items.sort(function (a, b) {
  //   return a.value - b.value;
  // });
  
  // sort by name
  students.sort(function(a, b) {
    
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    // if (a.age > b.age){
      return b.age - a.age;
    // }
  });