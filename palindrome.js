const display=document.getElementById("display");

//this is a function used to reverse the string so that it can be compared to the original one hence determining if it's a palindrome
function reverseString(str){
    return str.split("").reverse().join("");
}

function inputCheck(){
    //this trims all the spaces present in the word you just typed and goes ahead to convert it into lowercase
  const input = display.value.trim().toLowerCase();

  //callling the first function in the main function
  const reversed=reverseString(input);

  //this is the real thing now which checks if the word below is a palindrome and alerts
    if(input==reversed){
        alert("Nice👌work"+" "+input+" "+"is a palindrome");
    }else{
        alert("Not today please!");
    }
//this one sets the value back to none afterthe test is donee and the results are out(clear)
    display.value="";
}