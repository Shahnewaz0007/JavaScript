const address='Bangalore';
const city=address.slice(0,5); // slice(start, end) - end is not included
console.log(city);


const sentence='I am learning JavaScript';
//console.log(sentence.split(' ')); // split(separator) - splits the string into an array of substrings based on the specified separator

console.log(sentence.split('a')); // splits the string at every occurrence of 'a' and returns an array of substrings

const Friend=['Rahim', 'Karim', 'Jabbar'];
console.log(Friend.join('-')); // join() is a method of array, it cannot be used on a string
