const college={
    name:'ABC College',
    location:'City XYZ',
    class:['11','12'],
    unique:{
        color:'white',
        result:5,
        
    }
}

//console.log(college.unique.color); // white

console.log(college.unique.result);

delete college.class;
console.log(college);
