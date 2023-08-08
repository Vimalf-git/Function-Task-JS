const users = [
    {firstName: "Kamal",lastName: "Hasan",age:60},
    {firstName: "Donald",lastName: "Trump",age:60},
    {firstName: "Rajini",lastName: "Kanth",age:50},
    {firstName: "Ajith",lastName: "Kumar",age:40},
    {firstName: "Kamal",lastName: "Hasan",age:60}
    ];
    
    //List full names
    //var output1 = users.map((x)=>x.name.common +" "+ x.lastName)
   // console.log(output1);
//finding ages example {60:2 , 70:1 , 40:1} // {}
var output = users.reduce(function(acc,curr){
//initially check wthether age is present or not 
if(acc[curr.age]){
   acc[curr.age]=acc[curr.age]+1;  //{60:2,}
   console.log(acc[curr.age])
   //console.log(acc[curr.age])
}
else{
   acc[curr.age]=1   //{60:1,70:1,40:1}
}
return acc;
},{})
console.log(output['40']);






let vimal={}

vimal[2]="ddsds"
//vimal[users[0].age]=1
console.log(vimal);
//console.log(vimal[users[0].age])

//getter and setter

const getsetexample={
   username:"muthuswamy",
   occupation:"TL",
   // details:function(){                                //Example of template literal and this keyword

   //    return `${this.occupation} ${this.username}`;
   // }

   // get details(){
   //    return getsetexample.username;
   // },
   // set details(n){
   //    this.username=n;
   // }
};
getsetexample.username="vimal";
console.log(getsetexample);