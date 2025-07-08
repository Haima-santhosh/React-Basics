let arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
let arr2=arr.map((item,index)=>`<p>${item},${index}</p>`)
console.log(arr2)



// const test=()=>
// {
//     console.log("Helloo");
    
// }
// test()