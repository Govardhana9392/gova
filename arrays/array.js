// let x=[20,40]
// let z=x.push(300,50)
// console.log(z);
// console.log(x);
// console.log(x.push("hello"));
// console.log(x);


// let x=[20,40]
// let z=x.unshift(300,50)
// console.log(z);
// console.log(x);
// console.log(x.push("hello"));
// console.log(x);
// console.log(x.unshift("array started"));
// console.log(x);


// let x=[20,"hello",40,50,10]
// let z=x.pop()
// console.log(z);
// console.log(x);
// console.log(x.pop());
// console.log(x);
// console.log(x.shift());
// console.log(x);
// console.log(x.shift());
// console.log(x);


// let x=[20,30,80,90,'h']
// console.log(x.slice(2,4));
// console.log(x);
// console.log(x.slice(0,4));
// console.log(x.slice(-4,-1));
// console.log(x.slice(-1,1));



// let x=[10,30,50,60]
// let y=x.splice(0,2,500,600,700)
// console.log(y);
// console.log(x);
// console.log(x.splice(2,0,5));
// console.log(x);
// console.log(x.splice(0,1,4));
// console.log(x);



//map() :



// let x=[30,51,81]
// let ans=x.map(function f1(a,b,c)
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(a+1);
//     return a+1
// })
// console.log(ans);


// let y=[10,20,30]
// let x=y.map((y1)=>
// {
//     console.log(y1);
//     return "done"
// })
// console.log(x);

// let x=[11,21,31,41,51]
// let ans=x.map((a,b)=>
// {
//     return b+1
// })
// console.log(ans);


// let x=[17,21,11,4,1,6]
// let ans=x.map((a,b)=>
// {
//     console.log(a);
//     return a+b
// })
// console.log(ans);


// let ar=[90,8,5,3,3]
// let ans=ar.forEach((a,b,c)=>
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     return 2*a
// })
// console.log(ans);


// filter() :  


// let x=[100,80,50,35,90]
// let res=x.filter((a)=>
// {
//     console.log(a);
//     return a>=50
// })
// console.log(res);


let x=[100,80,50,35,90]
let res=x.filter((a)=>
{
    console.log(a);
    return "null"
})
console.log(res);