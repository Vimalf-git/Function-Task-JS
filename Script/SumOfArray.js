let arr=[30,50,10,20];

console.log("-------------------------------")
console.log("---------SUM OF ARRAY---------")

//Function

/**
 * Here function perform a task is add all the vslue from the given array
 * @param {} arr 
 * @returns 
 */
function tradSumOfArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
}
console.log("Tradional Function------->"+" "+tradSumOfArray(arr));


//Anonymouse function

/**
 * Here function perform a task is add all the vslue from the given array
 * @param {} arr 
 * @returns 
 */

let anonymSumArray=function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
}
console.log("Anonymouse Function----->"+" "+anonymSumArray(arr));

//ArrowFunction

/**
 * Here function perform a task is add all the vslue from the given array
 * @param {} arr 
 * @returns 
 */

let ArrowSumArray=()=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
}
console.log("Arrow Function--------->"+" "+ArrowSumArray(arr));


//IIFE Method

/**
 * Here function perform a task is add all the vslue from the given array
 * @param {} arr 
 * @returns 
 */

let IifeSumArray=(function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
})(arr);
console.log("IIFE------------------>"+" "+IifeSumArray)