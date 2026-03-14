const nums=[1,2,3,4,5];
// console.log(nums.reverse()); // [5, 4, 3, 2, 1]

const rev_nums=[];
for(const num of nums){
    // console.log(num);
    rev_nums.unshift(num);
}
// console.log(rev_nums);

const rev_nums2=[];
for(let i=0;i<nums.length;i++){
    const num=nums[i];
    rev_nums2.unshift(num);

}
console.log(rev_nums2);


//reverse side
const names=['John', 'Jane', 'Doe'];
for(let i=names.length-1;i>=0;i--){
    const name=names[i];
    console.log(name);
}