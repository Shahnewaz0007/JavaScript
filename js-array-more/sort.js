const persons=['rakib','nokib','sajib','shuvo','shakib'];
const sortedPersons=persons.sort();
console.log(sortedPersons);


//sort --> ascending--small to large ,descending--large to small

const numbers=[4,7,12,8,43,6,1];
// const num_asc=numbers.sort(); // not working properly

const num_asc=numbers.sort(function(a,b){return a-b}); // working properly
console.log(num_asc); // [1, 4, 6, 7, 8, 12, 43]

const num_dsc=numbers.sort(function(a,b){return b-a}); //  working properly
console.log(num_dsc); // [43, 12, 8, 7, 6, 4, 1]