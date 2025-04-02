function f5(){
   let x= document.querySelector("#one").value
    // console.log(x);
   let y= document.querySelector("#two").value
    // console.log(y);
    let z= document.querySelector("#three").value
    let a= document.querySelector("#four").value
    // console.log(z);
    document.querySelector("h1").innerHTML=`rgba(${x},${y},${z},${a})`
    document.querySelector("body").style.backgroundColor=`rgba(${x},${y},${z},${a})`;
    
}
f5()



// function f1(){
// let r=Math.trunc(Math.random()*256);
// let s=Math.trunc(Math.random()*256);
// let t=Math.trunc(Math.random()*256);
// document.querySelector("button").innerHTML=`rgb(${r},${s},${t})`
// document.querySelector("body").style.backgroundColor=`rgb(${r},${s},${t})`;
// }