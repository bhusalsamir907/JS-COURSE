// document.getElementById('para0').innerHTML = "Writing js code";
// let marks = {
//     ravi: 90,
//     shubham: 80,
//     harry: 99
// };

// function paraChnge() {
//     document.getElementById('spn').innerHTML = "This is first paragraph from JS";
// }


// document.getElementById("para1").innerHTML = marks.harry;

// //  Functions in JS
// function myFunction(a, b) {
//     return a * b;
// }

// document.getElementById("para2").innerHTML = myFunction(10, 20);

// //  Avg function
// function avg(a, b) {
//     return (a + b) / 2;

// }
// c1 = avg(20, 10);
// document.getElementById('spn1').innerHTML = c1;

// // Conditionals in JS 
// function ageValidation() {
//     let age = prompt("Enter Your Age:");

//     if (age >= 18) {
//         document.write("<br><br>Elligible to Vote")
//     }
//     else {
//         document.write("Not Eligible");
//     }

// }


// // Arrays iteration 
// // technique 1

// let arr=['samir bhusal', '&nbsp ravi sharma', '&nbsp Kalo usa', '&nbsp Sanjay karki'];
// // document.write(arr);
// for(let i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br><br>");
// }

// // Break and Continue

// for(let i=0;i<arr.length;i++){
//     if(i==2){
//         break; //break exits the loop after 2 index
//         // continue; // index 2 is cancled and other are carried.
//     }
//     document.write(arr[i]+"<br><br>");
// }

// // Array Methods

// let myArr=['USA', 'Iphone', 32, null, true];
// document.write(myArr.length +"<br><br>");
// document.write(myArr+'<br><br>');

// myArr.pop();//pop methods removes last elements of an array (i.e. true);
// document.write(myArr.length+'<br><br>');
// document.write(myArr+'<br><br>');
// myArr.push("Samir Bhusal"); //inserts/appends new elements at end of array
// document.write(myArr+'<br><br>');

// // myArr.shift(); //Removes first element in an array.
// // document.write(myArr+'<br><br>');

// myArr.unshift("Legion"); //appends new elements at start of an array.
// document.write(myArr+'<br><br>');
// // document.write(myArr.toString());
// document.write(myArr.sort());

// String Methods in JS
// let myStrng ="Samir Bhusal learning JS";
//  document.write(myStrng+"<br><br>");
//  document.write("Length of myStrng :&nbsp"+ myStrng.length +"<br>");
// //  document.write(myStrng.indexOf("JS"));
//  document.write(myStrng.lastIndexOf("JS"));
//  document.write("<br>");
//  document.write(myStrng.slice(0,7));

//  document.write("<br>");
// document.write(myStrng.replace("Samir", "Rishab"));

// 





// Dates in JS


let myDate = new Date();
document.write("<br>" + myDate.getUTCFullYear() + "<br>");
document.write("<br>" + myDate.getDate() + "<br>");
document.write("<br>" + myDate.getUTCMilliseconds() + "<br>");

// DOM Manipulations JS

document.getElementById('btn').style.border = '2px solid red';
let elem = document.getElementById('btn');
// document.write(elem);
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);
// elemClass[0].style.background="white";
elemClass[0].classList.add('bg-primary');

// Selecting Using Query
sel = document.querySelector('.container');
console.log(sel);

sel = document.querySelectorAll('.container');
console.log(sel);


// JS Events

function paraChnge() {
    document.getElementById('spn').innerHTML = 'JS Click event changes the paragraph.'
}

document.getElementById('btn').addEventListener('click', function () {
    document.getElementById('para0').innerHTML = "HTML DOM addEventListener() Method Used";
})

document.getElementById('btn').addEventListener('mouseover', function () {
    document.getElementById('spn1').innerHTML = "Mouse Over btn";
})

firstContainer.addEventListener('mouseout', function () {
    document.getElementById('para2').innerHTML = "Mouse out of container";
})