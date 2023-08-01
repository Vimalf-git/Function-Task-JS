console.log("-------------------------------")
console.log("---------STRING TITTLE CAPITAL--------")

//Tradional function

/**
 * Using val local parameter get the input and the split the
 * String value with value and store as array.And the iterate each array value
 * and set first character as captial so i used here chartAt default method and "0"
 *  for first character after that concatenate remaing value 
 * at last return array to string with space using join method.
 * @param {"i am vimal"} val 
 * @returns StringValue
 */
function changeTittleCaps(val){
    let sep=val.split(" ");
    for(let i=0;i<sep.length;i++){
      sep[i]= sep[i].charAt(0).toUpperCase() +sep[i].slice(1);        
    }
    return sep.join(" ");
}
const traditionalVal=changeTittleCaps("i am vimal");
console.log("Traditional functional--->"+" "+traditionalVal);

// Anonymous Function

/**
 * Using val local parameter get the input and the split the
 * String value with value and store as array.And the iterate each array value
 * and set first character as captial so i used here chartAt default method and "0"
 *  for first character after that concatenate remaing value 
 * at last return array to string with space using join method.
 * @param {"i am vimal"} val 
 * @returns StringValue
 */

var AnonyChangeTittleCaps = function (val) {
    
    let sep=val.split(" ");
    for(let i=0;i<sep.length;i++){
      sep[i]= sep[i].charAt(0).toUpperCase() +sep[i].slice(1);        
    }
    return sep.join(" ");
};
let anonymousWay=AnonyChangeTittleCaps("hi how are you ");
console.log("Anonymous Function--->"+" "+anonymousWay);

//ArrowFunction-(Es6)

/**
 * Using val local parameter get the input and the split the
 * String value with value and store as array.And the iterate each array value
 * and set first character as captial so i used here chartAt default method and "0"
 *  for first character after that concatenate remaing value 
 * at last return array to string with space using join method.
 * @param {"i am vimal"} val 
 * @returns StringValue
 */

var ArrowTittleCaps =(val)=>{
    
    let sep=val.split(" ");
    for(let i=0;i<sep.length;i++){
      sep[i]= sep[i].charAt(0).toUpperCase() +sep[i].slice(1);        
    }
    return sep.join(" ");
};
console.log("Arrow Function--->"+" "+ArrowTittleCaps("welcome all techies "));


//Immediate invoke function expression
  
/**
 * Using val local parameter get the input and the split the
 * String value with value and store as array.And the iterate each array value
 * and set first character as captial so i used here chartAt default method and "0"
 *  for first character after that concatenate remaing value 
 * at last return array to string with space using join method.
 * @param {"i am vimal"} val 
 * @returns StringValue
 */

let IIFEWayFindVal=(function (val){

    let sep=val.split(" ");
    for(let i=0;i<sep.length;i++){
      sep[i]= sep[i].charAt(0).toUpperCase() +sep[i].slice(1);        
    }
    return sep.join(" ");
})("i am learn mern stack");

console.log("IIFE--->"+" "+IIFEWayFindVal);


