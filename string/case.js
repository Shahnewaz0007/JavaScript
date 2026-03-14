const school='RAJ UK Uttara Model School';
console.log(school.toLowerCase());  
console.log(school.toUpperCase());  

const subject='Bangla';
const book='bangla';

if(subject==book){
    console.log('I am reading');
}
else{
    console.log('I am not reading');
}

const drink=' water'; 
const liquid='  water';
if(drink.trim()==liquid.trim()){ // trim() removes whitespace from both ends of a string
    console.log('I am drinking');
}  
else{
    console.log('I am not drinking');
}