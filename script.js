const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const specialChars=["%", "*", "/", "-", "+", "="];
let output="";

// define function to calculate based on button clicked.
const calculate=(btnvalue)=>{
if(btnvalue === "=" && output !== ""){
    // if output has % replacce with '/100' before evaluating.
    output=eval(output.replace("%","/100"));
} else if(btnvalue==="AC"){
    output="";
} 

else if(btnvalue==="DEL"){    
    // if del button is click then delete last character from the output
    output=output.toString().slice(0,-1);
}else{
    // if output is empty and button is specialchars then return
    if(output==="" && specialChars.includes(btnvalue)) return;
    output+=btnvalue;
}
    display.value=output;
};

// add event listener to buttons, call calculate() on click.
buttons.forEach((button)=>{
//    button click listener calls calculate() with dataset value as argument.
button.addEventListener("click",(e)=> calculate(e.target.dataset.value));
})