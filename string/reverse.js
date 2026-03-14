const sentence='I am learning JavaScript';

let reverse='';
for(const letter of sentence){
    // console.log(letter);
    reverse=letter+reverse
}
// console.log(reverse);


//ignore koray valo
let rev='';
for(let i=0; i<sentence.length; i++){
    // console.log(sentence[i]);

    const letter=sentence[i];
    rev=letter+rev;
}  
// console.log(rev);



//shorter way to reverse a string
const rev2=sentence.split('').reverse().join('');
console.log(rev2);