let arrval=[13,22,26,14,97,99];

console.log("-------------------------------")
console.log("--------ODD NO---------")


//Function

/**
 * here function perform a task is find the odd no from the
 * given array
 * @param {} arrval 
 * @returns 
 */
function findOdd(arrval){
    let setVal=[];
    for(let i=0;i<arrval.length;i++){
        if(arrval[i]%2!=0){
            setVal.push(arrval[i]);
        }
    }
    return setVal;
}

console.log("Tradional Function---->"+" "+findOdd(arrval));

//Anonymouse Function

/**
 * here function perform a task is find the odd no from the
 * given array
 * @param {} arrval 
 * @returns 
 */

let anonymFindOdd=function(arrval){
    let setVal=[];
    for(let i=0;i<arrval.length;i++){
        if(arrval[i]%2!=0){
            setVal.push(arrval[i]);
        }
    }
    return setVal;
}
console.log("Anonymouse Function---->"+" "+anonymFindOdd(arrval))

//Arrow Function

/**
 * here function perform a task is find the odd no from the
 * given array
 * @param {} arrval 
 * @returns 
 */

let arrowFindOdd=(arrval)=>{
    let setVal=[];
    for(let i=0;i<arrval.length;i++){
        if(arrval[i]%2!=0){
            setVal.push(arrval[i]);
        }
    }
    return setVal;
}

console.log("Arrow Function-------->"+" "+arrowFindOdd(arrval));

//IIFE 

/**
 * here function perform a task is find the odd no from the
 * given array
 * @param {} arrval 
 * @returns 
 */

let IffeFindOdd=(function(arrval){
    let setVal=[];
    for(let i=0;i<arrval.length;i++){
        if(arrval[i]%2!=0){
            setVal.push(arrval[i]);
        }
    }
    return setVal;
})(arrval)

console.log("IIFE----------------->"+" "+IffeFindOdd);