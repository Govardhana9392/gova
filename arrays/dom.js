// let ans=document.getElementById("first")
// console.log(ans);
// console.log(ans.innerText);
// console.log(ans.innerHTML);
// console.log(ans.textContent);
// let s=document.getElementById("third")
// console.log(s);
// console.log(s.innerHTML);
// s.innerHTML="bye bye"

// let res=document.getElementById("x")
// console.log(res);
// console.log(res.innerHTML);
// console.log(res.innerText);
// console.log(res.textContent);


// let x=document.getElementById("a")
// console.log(x);
// console.log(x.innerHTML);

// let ans=document.getElementsByClassName("x")
// console.log(ans);
// console.log(ans[0]);
// console.log(ans[1]);
// console.log(ans[0].innerHTML);
// console.log(ans[1].innerHTML);

// for(let i=0;i<ans;i++)
// {
//     console.log(ans);
//     console.log(ans[i].innerHTML);
// }
// console.log(Array.isArray(ans));
// let ar=Array.from(ans)
// console.log(ar);
// console.log(Array.isArray(ar));
// ar.map((a)=>{
    
// })


//02-08-2024

// function f1()
// {
//     let y=prompt("enter your name")
//     console.log("my name is "+y);
// }

// let y=document.getElementsByTagName("button")
// console.log(y);
// console.log(y[0]);


// function f1()
// {
//     let x=document.querySelector("input")
//     // console.log(x);
//     let res=x.value
//     document.querySelector("h1").innerHTML=res 
// }

// function f1()
// {
// let x=document.querySelector("#a").value
// let y=document.querySelector("#b").value
// let z=Number(x)+Number(y)
// document.querySelector("#h11").innerHTML=z
// }

// function f2()
// {
//     let a=document.querySelector("#e")
// document.querySelector("h2").innerHTML=a
// }



// function f1()
// {
//     let x=document.querySelector("input").value
//     console.log(x);
//     document.querySelector("p").style.fontSize=x+"px"
    
// }

// function f3()
// {
//    let x= document.querySelector("#w").value
//    console.log(x);
//    let y=document.querySelector("#h").value
//    console.log(y);
//    document.querySelector("img").style.width=x+"px"
//    document.querySelector("img").style.height=y+"px"

   
// }
// f3()



function f4(){
let x=document.querySelector("#one").value
console.log(x);
let y=document.querySelector("#two").value
console.log(y);
let z=document.querySelector("#three").value
console.log(z);
let c=document.querySelector("#four").value
console.log(c);

document.querySelector("div").style.height=x+"px"
document.querySelector("div").style.width=y+"px"
document.querySelector("div").style.borderRadius=z+"px"
document.querySelector("div").style.backgroundColor=c
}
f4()
