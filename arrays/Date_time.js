// function f1(){
//         const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
//         const months=["january","february","march","april","may","june","july","august","september","october","november","december"];
//         let date=new Date();
//         let dayName=days[date.getDay()];
//         let day=date.getDate();
//         let monthName=months[date.getMonth()];
//         let year=date.getFullYear();
//         let seconds=date.getSeconds();
//         let hours=date.getHours();
//         let minutes=date.getMinutes();
//         return  `${hours}-${minutes}-${seconds}-${dayName}-${day+1}-${monthName}-${year}`;
// }
// console.log(f1());




// let headings=document.getElementsByTagName('h1');
// Array.from(headings).map(element=>
// {
// element.style.color=`green`;
// });


// let evenNumbers=(...numbers)=>numbers.filter(num=>num%2===1);
// console.log(evenNumbers(12,13,14,15,16,23,122,234,87,908,86,55));



//find maxElement

// function maxElement(arr){
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// return max
// }
// let numbers=[12,34,42,112,24,53,98,76,5]
// console.log(maxElement(numbers));



//reverse an array without reverse keyword

// function reverseArray(arr){
//     let reversedArray=[]
//     for(let i=arr.length-1;i>=0;i--){
//         reversedArray.push(arr[i])
//     }
//     return reversedArray
// }
// let numbers=[2,4,6,9,5,2,9]
// let reversedNumbers=reverseArray(numbers)
// console.log(reversedNumbers);



const longestString = findLongestString("hello", "world", "this", "is", "the", "longest", "string");
console.log(longestString); // Output: "longest"
