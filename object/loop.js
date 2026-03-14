const mobile={
    brand:'apple',
    price:1000,
    color:'white',
    camera:'12mp'
}

//for of-->array
//for in-->object
// for(const prop in mobile){
//     // console.log(prop);
//     // console.log(mobile[prop]);
// }

const keys=Object.keys(mobile);
for(const key of keys){
    console.log(key, ':', mobile[key]);
}