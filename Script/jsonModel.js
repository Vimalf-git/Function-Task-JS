const per=`[
    {
    "name":"vimal",
    "occupation":"IT"
},{
    "name":"siva",
    "occupation":"agri"
}

]`

var sample= '{"tcs":"sdfs","cts":"sdfgd",}';
var a = '{"name":"kamal","age":60}';
let obj =[
    "raj",
    "mannai"
]
console.log(obj.valueOf(1)+"objMethod")
console.log("sample"+typeof(sample))
const b=JSON.parse(per)
console.log(typeof(b));
console.log(b);
console.log(JSON.stringify(b));

b.map(a=>{
    console.log(a.occupation);
})

let arr=[9,2,3,1]

arr.map(a=>{
   // console.log(a*2);
})

// for(let i=0;i<2;i++){
//     console.log(b.name[i]+"hi");
// }

const lo=arr.reduce((acc,cu)=>{
     return cu>acc?acc=cu:cu=acc;
})
//console.log(lo);

const user=[
    {name:"vimal",age:25},
    {name:"siva",age:25}
]
const check=new Map();
const usechec=user.reduce((ac,cu)=>{
if(ac[cu.age]){
   // check.set(cu.age)
   console.log(cu.age);
}else{
   // console.log(cu.age);
}
return ac;
},{})
