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
let age; //undefined
let firstName = "Zaw Min " //stirng
let lastName = "Htwe"
age = 21; //integer (or) number
let student = true //boolean

age = age + 1


console.log("Hello ", firstName);
console.log(firstName + lastName);
console.log(student);
document.getElementById("p1").innerHTML = age;

// string နဲ့ variable ပေါ င်း ရေး ချ င် ရင် + sign ကို သုံး ပါ တယ်
document.getElementById("p2").innerHTML = "You are " + age + " ÿear old";
document.getElementById("p3").innerHTML = "Hello " + firstName + "...";


// Three Step ******************************************************
// arithmetic expression is a combination of...
// operand(Values, variables, etc)
// operators(+ - * / %)
//         that can be evaluated to a value
let students = 20;

students = students + 21;
console.log("+", students);
students = students - 21;
console.log("-", students);
students = students * 21;
console.log("*", students);
students = students / 21;
console.log("/", students);
students = students % 3;
console.log("%", students);

students += 1;
console.log(students);


students -= 1;
console.log(students);


students *= 2;
console.log(students);


students /= 2;
console.log(students);


// operator precedence
// 1. parenthesis()
// 2. exponents
// 3. multiplication & division
// 4. addition & subtraction
let result = 1 + 2 * (3 + 4);
console.log(result);