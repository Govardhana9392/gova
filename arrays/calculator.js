let y=document.getElementsByClassName("btn")
console.log(y);
let display=document.querySelector("input")
console.log(display);
for(let i=0;i<y.length;i++){
y[i].addEventListener("click",()=>
{
    console.log(y[i]);
    
    display.value+=y[i].innerHTML
})
}
let allClear=document.querySelector("#ac")
console.log(allClear);
allClear.addEventListener("click",()=>
{
    display.value=""
})
let delonebyone=document.querySelector("#ce")
console.log(delonebyone);
delonebyone.addEventListener("click",()=>
{
    display.value=display.value.slice(0,display.value.length-1)
})


let ans=document.querySelector("#eual")

