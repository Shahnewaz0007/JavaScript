function even(numbers){
    let evenNumbers=[]; // Create an empty array to store even numbers
    for(const num of numbers){
        if(num %2==0)
        {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

const numbers=[1,2,3,4,5,6,7,8,9,10];
const evenNums=even(numbers);       
console.log(evenNums); // Output: [2, 4, 6, 8, 10]