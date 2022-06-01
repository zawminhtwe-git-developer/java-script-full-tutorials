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

// let x,y,z;

// document.getElementById("btn").onclick = function(){
//     x = Math.floor(Math.random() * 6) + 1;
//     y = Math.floor(Math.random() * 6) + 1;
//     z = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("x").innerHTML = x;
//     document.getElementById("y").innerHTML = y;
//     document.getElementById("z").innerHTML = z;
// }
// ***********************day elevel start********************************************
// let userName = "    Zaw Min Htwe";
// let phone = "096-611-146-60"
// userName.length;
// userName.charAt(0);
// // userName = userName.indexOf("w");
// // userName = userName.lastIndexOf("w");
// userName = userName.trim();
// userName= userName.toUpperCase();
// userName= userName.toLowerCase();

// phoneNumber = phone.replace("-","");
// phoneNumber = phone.replaceAll("-","");
// console.log(phoneNumber)
// console.log(userName);

// ***********************day twelve start********************************************
// let fullName ="zaw Min Htwe";
// let firstName;
// let lastName;

// // firstName= fullName.slice(0,3);
// // lastName= fullName.slice(4);

// // console.log(firstName)
// // console.log(lastName)

// firstName= fullName.slice(0,fullName.indexOf(" ")).charAt("0").toUpperCase();
// lastName= fullName.slice(fullName.indexOf(" ")+1);


// console.log(firstName)
// console.log(lastName)


// ***********************day thirteen start********************************************

// let age = 16;
// if(age>=60){
//     console.log("You are a senior citizen");
// }else if(age>=18){
//     console.log("You are adult");
// }else if(age<=0){
//     console.log("You are not born yet");
//  }else{
//     console.log("You are child")
// }
// ***********************day fourteen start********************************************
// document.getElementById("submit").onclick = function(){
//     const check = document.getElementById("check");

//     if(check.checked){
//         console.log("You are subscribed");
//     }else{
//         console.log("You are not subscribed");
//     }
// }


// document.getElementById("card").onclick = function(){
//     const kbz = document.getElementById("kbz");
//     const aya = document.getElementById("aya");
//     const yoma = document.getElementById("yoma");

//     if(kbz.checked){
//         console.log("You are paying with kbz");
//     }else if(aya.checked){
//         console.log("You are paying with aya");
//     }else if(yoma){
//         console.log("You are paying with yoma");
//     }
// }

// ***********************day fifteen start********************************************

// let grade = 0;
// switch(true){
//     case grade >= 90:
//         console.log("You did great!");
//         break;
//     case grade >= 80:
//         console.log("You did good!");
//         break;
//     case grade >= 70:
//         console.log("You did ok!");
//         break;
//     case grade >= 60:
//         console.log("You did barely!");
//         break;
//     case grade >= 40:
//         console.log("You did pass!");
//         break;
//     case grade <= 40:
//         console.log("You did fail!");
//         break;
//     default:
//         console.log(grade,"It is not a letter grade");
// }
// ***********************day sixteen start********************************************
// ကိုယ်စစ်ထားတဲ့ ဟာမှားနေရင်တောင် ပထမ တစ်ခါတော့ အလုပ်လုပ်ပေးသည်။

// let userName = "";
// do{
//     userName = window.prompt("Enter your name");
// }while(userName == "")
// console.log("Hello ",userName);

// ***********************day seventeen start********************************************
// for (statement 1; statement 2; statement 3) {
//     code block to be executed
//   }

// let i = 5;
// for(i;i<=100;i+=1){
//     console.log(i)
// }

// ***********************day eighteen start********************************************
// for(let i =1;i<=20;i+=1){
//     if(i==13){
//         break;//ဆိုတာဟာ ၁၃ နဲ့ညီသွားရင် အလုပ်မလုပ်တော့ပါ
//         continue; //ဆိုတာဟာ ၁၃ မပါပဲ ဆက်လုပ်ပါတယ်
//     }
//     console.log(i);
// }


// ***********************day nineteen start********************************************
// let symbol = window.prompt("Enterr a symbol to use");
// let rows = window.prompt("Enter  #  of rows");
// let columns = window.prompt("Enter  #  of columns");

// for(let i = 1; i<=rows;i+=1){
//     for(let j=1 ;j <=columns;j+=1){
//      document.getElementById("myRectangle").innerHTML += symbol;   
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>";
// }

// ***********************day twenty start********************************************
// let userName="Zaw Min Htwe" // gloal variable

// zmh();
// getInfo();

// function zmh(){
//     console.log(userName);
// }

// function getInfo(){
//    let userName ="Naung Naung";//local variable
//    let age = 32;

//     showInfo(userName,age);
// }

// function showInfo(a,b){
//     console.log("Your name is :",a);
//     console.log("Your age is :",b);

// }

// ***********************day twenty-one start********************************************
// let area;
// let width;
// let height;

// width = window.prompt("Enterr width");
// width=Number(width);
// height = window.prompt("Enterr height");
// height = Number(height)



// area = getArea(width , height);

// console.log("The area is :",area);

// function getArea(width,height){
//     return width * height;
// }

// ***********************day twenty-two start********************************************
// let = variables are limited to block scope{}
// var = variables are limited to function(){}


// global variable = is declared outside any function
// if global, var will change browser's window properties

// var name ="ZMH";
// doSomething();

// function doSomething(){
//     for(let i = 1; i<=3;i+=1){
//         console.log(i);
//     }
   
// }

// ***********************day twenty-three start********************************************
//(``) = allows embedded variables and expression

// let userName = window.prompt("Type your name?");
// let items = window.prompt("Type of Items * 350 Ks");
// let price = 350 * items;

// console.log(`Welcome to ${userName}`);
// console.log(`Your items is ${items}`);
// console.log(`Totally Amount ${price}`);

// ***********************day twenty-four start********************************************
let price = 100;
// price= price.toLocaleString("en-US");
// price= price.toLocaleString("hi-IN");
// price= price.toLocaleString("de-DE");

// price = price.toLocaleString("en-US",{style:"currency",currency:"USD"});
price = price.toLocaleString(undefined,{style:"unit",unit:"celsius"});
console.log(price);
