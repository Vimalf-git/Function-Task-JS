let pal1="vimal";
let pal2="mom";
let pal3="121";
let pal4="41234";

console.log("-------------------------------")
console.log("---------PALINDROME---------")
//Traditional funtional Method

/**
 * Here i use traditional functiona method and get parameter from function call
 * and then convert to lower case and reverse the value using iteration and store 
 * then check palindrome. 
 * @param {pal4} palindrome 
 * @returns 
 */

function tradPalindrom(palindrome){
    let palString="";
    let caseCheck=palindrome.toLowerCase();
    for(let i=palindrome.length-1;i>=0;i--){
        palString += palindrome.charAt(i); 
    }
    if(palString===palindrome){
        return "valid palindrome";
    }else{
        return "Not an palindrome";
    }
}

console.log(tradPalindrom(pal4));


//Anonymouse Function
/**
 * Here i use traditional functiona method and get parameter from function call
 * and then convert to lower case and reverse the value using iteration and store 
 * then check palindrome. 
 * @param {pal4} palindrome 
 * @returns 
 */
let anonymPalindrome=function(palindrome){
    let palString="";
    let caseCheck=palindrome.toLowerCase();
    for(let i=palindrome.length-1;i>=0;i--){
        palString += palindrome.charAt(i); 
    }
    if(palString===palindrome){
        return "valid palindrome";
    }else{
        return "Not an palindrome";
    }    
}
console.log(anonymPalindrome(pal3));


//Arrow Function


/**
 * Here i use traditional functiona method and get parameter from function call
 * and then convert to lower case and reverse the value using iteration and store 
 * then check palindrome. 
 * @param {pal4} palindrome 
 * @returns 
 */
//ternary operator used
let arrowPalindrome=(palindrome)=>{
    let palString="";
    let caseCheck=palindrome.toLowerCase();
    for(let i=palindrome.length-1;i>=0;i--){
        palString += palindrome.charAt(i); 
    }
        return (palString===palindrome)?"valid palindrome":"Not an valid Palindrome";    
}
console.log(arrowPalindrome(pal3));



//IIFE


/**
 * Here i use traditional functiona method and get parameter from function call
 * and then convert to lower case and reverse the value using iteration and store 
 * then check palindrome. 
 * @param {pal4} palindrome 
 * @returns 
 */

//ternary operator used
let IifePalin=(function(palindrome){
    let palString="";
    let caseCheck=palindrome.toLowerCase();
    for(let i=palindrome.length-1;i>=0;i--){
        palString += palindrome.charAt(i); 
    }
        return (palString===palindrome)?"valid palindrome":"Not an valid Palindrome";    
})(pal1);

console.log(IifePalin);