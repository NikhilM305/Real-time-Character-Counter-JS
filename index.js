const textarea=document.getElementById("textarea");

const counter=document.getElementById("counter")
let paragraph=document.getElementById("total")
let remaining=document.getElementById("remaining")
textarea.addEventListener("keydown",()=>{
    updatecounter()
    
})

function updatecounter(){
  paragraph.innerText=textarea.value.length;
  
  remaining.innerText=textarea.getAttribute("maxlength")-textarea.value.length
}



