const name='John';
const surname='Doe';
const fullname=name + ' ' + surname;
// console.log(fullname);
const fullname2=name.concat(' ', surname);  
console.log(fullname2);


//includes
console.log(surname.includes('D')); //true
console.log(surname.includes('d')); //false