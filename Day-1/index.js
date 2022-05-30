// console.log("My name is Zaw Min Htwe");
// console.log("My name is Zaw Min Htwe");
// window.alert("this is alert");
// window.alert('One Single Code');

// single line comment

/*
This is multiline comment line 
*/


//Two steps *********************************************************
// 
// ကြေညာခြင်းမှာ သုံးမျိုးရှီပါသည်။ declaration (var, let ,const)
// မှတ်တမ်းတင်ခြင်း assignment (= assignment operator)
// let age; //undefined
// let firstName = "Zaw Min " //stirng
// let lastName = "Htwe"
// age = 21; //integer (or) number
// let student = true //boolean

// age = age + 1


// console.log("Hello ", firstName);
// console.log(firstName + lastName);
// console.log(student);
// document.getElementById("p1").innerHTML = age;

// // string နဲ့ variable ပေါ င်း ရေး ချ င် ရင် + sign ကို သုံး ပါ တယ်
// document.getElementById("p2").innerHTML = "You are " + age + " ÿear old";
// document.getElementById("p3").innerHTML = "Hello " + firstName + "...";


// // Three Step ******************************************************
// // arithmetic expression is a combination of...
// // operand(Values, variables, etc)
// // operators(+ - * / %)
// //         that can be evaluated to a value
// let students = 20;

// students = students + 21;
// console.log("+", students);
// students = students - 21;
// console.log("-", students);
// students = students * 21;
// console.log("*", students);
// students = students / 21;
// console.log("/", students);
// students = students % 3;
// console.log("%", students);

// students += 1;
// console.log(students);


// students -= 1;
// console.log(students);


// students *= 2;
// console.log(students);


// students /= 2;
// console.log(students);


// // operator precedence
// // 1. parenthesis()
// // 2. exponents
// // 3. multiplication & division
// // 4. addition & subtraction
// let result = 1 + 2 * (3 + 4);
// console.log(result);

// ***********************day four start*********************************************
// easy waywith a window prompt
// let username = window.prompt("What is your name");
// console.log(username);

// // dificult way with textbox

// let username1;
// document.getElementById("button").onclick = function() {
//     username = document.getElementById("name").value;
//     console.log(username);
//     document.getElementById("label").innerHTML = "Hello" + username1;
// }


// ***********************day five start********************************************
// Type Conversion = change the datatype of a value to another(strings, numbers, booleans)
// let age = window.prompt("How old are you?");

// console.log(typeof age);
// age = Number(age);
// age += 1;
// console.log(age);




// let x,y,z;

// x = Number("3.14");
// y=String(3.14);
// z= Boolean("12");

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

// ***********************day six start********************************************
//const = "data type တစ်မျိုးကို ပြောင်းလဲလို့မရအောင်တားဆီးထားခြင်းဖြစ်ပါသည်။"

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2* PI * radius;
// console.log("The curcumference is: ", circumference);


// ***********************day seven start********************************************
// let x = 3; 
// let y = 4; 
// let z = 5; 
// //x= Math.round(x); // ငါးထက်ကျော်ရင် ၄ယူတယ် မကျော်ရင် ၃ ယူတယ်
// //x= Math.floor(x); // အောက်ကို ချယူ
// //x= Math.ceil(x); // အပေါ်ကို တိုးယူ
// // x = Math.pow(x,2);
// // x = Math.sqrt(x);
// // x= Math.abs(x);
// x = Math.PI;
// x = Math.max(x,y,z);
// x = Math.min(x,y,z);
// console.log(x);

// ***********************day eight start********************************************
//c = root a square + b square formular

/*let c,a,b;
a = window.prompt("Type of your number A :");
a = Number(a);

b = window.prompt("Type of your number B :");
b = Number(b);

a = Math.pow(a,2);
b = Math.pow(b,2);
c = Math.sqrt(a+b);

console.log(a);
console.log(b);
console.log(c);
*/

// document.getElementById("submitButton").onclick = function(){

//     a = document.getElementById("a_value").value;
//     a = Number(a);
    
//     b = document.getElementById("b_value").value;
//     b = Number(b);
    
//     a = Math.pow(a,2);
//     b = Math.pow(b,2);
//     c = Math.sqrt(a+b);

//     console.log(c);

//     document.getElementById("c_value").innerHTML = "The Answer is :" + c;

// }

// ***********************day nine start********************************************
// let count = 0;
// let price = 30000;

// document.getElementById("decrease").onclick = function(){
//     count -= 1;
//     document.getElementById("value").innerHTML = count * price;
// }

// document.getElementById("increase").onclick= function(){
//     count +=1;
//     document.getElementById("value").innerHTML = count * price;
// }

// document.getElementById("reset").onclick = function(){
//     count =0;
//     document.getElementById("value").innerHTML = count * price;
// }
// ***********************day ten start********************************************

let x,y,z;

document.getElementById("btn").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("x").innerHTML = x;
    document.getElementById("y").innerHTML = y;
    document.getElementById("z").innerHTML = z;
}