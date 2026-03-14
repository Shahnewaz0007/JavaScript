const friends = ['John', 'Jane', 'Doe'];

for(const friend of friends){
    console.log(friend);
}

for(let i=0;i<friends.length;i++){
    console.log(i);
    console.log(friends[i]); // undefined for i >= friends.length
}


const numbers= [1, 2, 3, 4, 5];

for(let i=0;i<numbers.length;i++){
    // console.log(numbers[i]);
}

let i=0;
while(i<numbers.length){
    console.log(numbers[i]);
    i++;
}