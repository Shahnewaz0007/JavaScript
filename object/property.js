const person={
    name :'John',
    age:25,
    isStudent:true,
    subjects:['Math', 'Science', 'History'],
    'fav places':['Paris', 'New York', 'Tokyo']
}
//console.log(person); // John's information

//accessing properties

// console.log(person.name); // John
// console.log(person.age); // 25
// console.log(person.isStudent); // true
// console.log(person.subjects); // ['Math', 'Science', 'History']

//third bracket diye access
console.log(person['age']);


//exceptions
//console.log(person.fav places); // SyntaxError: Unexpected identifier
console.log(person['fav places']); // ['Paris', 'New York', 'Tokyo']