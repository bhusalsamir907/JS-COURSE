document.getElementById('para0').innerHTML = "Writing js code";
let marks = {
    ravi: 90,
    shubham: 80,
    harry: 99
};

function paraChnge() {
    document.getElementById('spn').innerHTML = "This is first paragraph from JS";
}


document.getElementById("para1").innerHTML = marks.harry;

//  Functions in JS
function myFunction(a, b) {
    return a * b;
}

document.getElementById("para2").innerHTML = myFunction(10, 20);

//  Avg function
function avg(a, b) {
    return (a + b) / 2;

}
c1 = avg(20, 10);
document.getElementById('spn1').innerHTML = c1;

// Conditionals in JS 
function ageValidation() {
    let age = prompt("Enter Your Age:");

    if (age >= 18) {
        document.write("<br><br>Elligible to Vote")
    }
    else {
        document.write("Not Eligible");
    }

}

