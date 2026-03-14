const person={
    name :'John',
    age:25,
    salary:50000,
    isStudent:true,
    subjects:['Math', 'Science', 'History'],
    'fav places':['Paris', 'New York', 'Tokyo']
}
// new value adding
person.salary=60000;
person['age']=30;

console.log(person);