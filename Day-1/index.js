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
// let price = 100;
// price= price.toLocaleString("en-US");
// price= price.toLocaleString("hi-IN");
// price= price.toLocaleString("de-DE");

// price = price.toLocaleString("en-US",{style:"currency",currency:"USD"});
// price = price.toLocaleString(undefined,{style:"unit",unit:"celsius"});
// console.log(price);

// ***********************day twenty-four start********************************************
// const answer = Math.floor(Math.random() *10 +1);
// console.log(answer)


// let guesses =0;
// document.getElementById("submitButton").onclick = function(){
//    let guess = document.getElementById("guessField").value;
//    guesses +=1;

//    if(guess == answer){
//        alert(`${answer} is the #.It took you ${guesses} guesses`);
//    }else if(guess < answer ){
//         alert("Too Small")
//    }else{
//        alert("Too Big")
//    }

//    document.getElementById("guessField").value="";
// }


// ***********************day twenty-five start********************************************
// document.getElementById("submitButton").onclick = function(){
//     let temp;
//     if(document.getElementById("cButton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°"

//     }else if(document.getElementById("fButton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toFahrenheit(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°"
//     }else{
//         document.getElementById("tempLabel").innerHTML = "Select a Unit"
//     }
// }

// // let temp=27;
// // temp=toFahrenheit(temp);
// // console.log(temp);


// function toCelsius(temp){
// return (temp-32) *(5/9);
// }
// function toFahrenheit(temp){
// return temp *9 /5 +32;
// }

// ***********************day twenty-six start********************************************
// array think of it asavariable
//that can store multiple values
// let fruits=["apple","orange","banana"];
// fruits[2]="coconut";
// fruits.push("lemon");   // add an element
// fruits.pop(); // removes last element.
// fruits.unshift("mango");// add element to beginning
// fruits.shift();   // removes element from beginnin



// var dogs = new Array("Bulldog","Beagle","Labrador","How to");
// for(var i = 0; i <= dogs.length; i++){
//     console.log(dogs[i]);
//     console.log(dogs.indexOf("Beagle"));
// }

// let prices =[5,10,15,20,25];
// console.log(prices.sort());
// console.log(prices.sort().reverse());
// for(let price of prices){
//     console.log(price);
// }

// console.log(dogs[0]);
// console.log(fruits);
         

// ***********************day twenty-seven start********************************************                        
//2D array = An array of arrays
// let fruits = ["apples","oranges","bananas"];
// let vegetables =["carrots","onions","potatoes"];
// let meats=["eggs","chicken","fish"];

// let groceryList=[fruits,vegetables,meats];     
// groceryList[1][1] = "steak";// replace with row and colunm
// for(let list of groceryList){
//     // console.log(list)
//     for(let food of list){
//         console.log(food);
//     }
// }

// ***********************day twenty-eight start********************************************                        
//spread operator = allows an itemrable such as na array or string to be epanded in plaes where zero or more argumtnts are expected 
// ... 

// let numbers =[1,2,3,4,5,6,7,8,9];
// // console.log(...numbers);
// // console.log(Math.max(...numbers));

// let class1=["Spongebob","Patrick","Zaw Min Htwe"]
// let class2=["Spongebob1","Patrick1","Zaw Min Htwe1"]

// class1.push(...class2)
// console.log(class1)


// ***********************day twenty-nine start********************************************                        

// let a=1;
// let b=3;
// let c=8;
// let d=15;
// let e=5;
// let f=12;
// let g=13;

// console.log(sum(a,b,c));

//ကိုယ်လိုချင်သလိုမရလို့ ရအောင်လုပ်မည်
// function sum(a,b){
//     return a+b;
// }

// function sum(a,b,c){
//     return a+b+c;
// }

// function sum(a,b,c,d){
//     return a+b+c+d;
// }

// function sum(x,y,...numbers){
//     let total =0;
//     for(let number of numbers){
//         total += number
//     }
//     return total;
// }

// ***********************day thirty start********************************************                        

    // sum(12,13,displayConsole)

    // function sum(x,y,callBack){
    //     let result = x+y
    //     callBack(result);
    //  } 

    //  function displayConsole(output){
    //      console.log(output);
    //  }


// ***********************day thirty-one start********************************************                        

// let students = ["aung","naung","zaw min htwe","thaw zin htun"];

// students.forEach(capitalize)
// students.forEach(print)

// function capitalize(element,index,array){
//     array[index]=element[0].toUpperCase() + element.substring(1);

// }

// function print(element){
//     console.log(element)
// }

// console.log(students);

// ***********************day thirty-two start********************************************                        
//array.map() = executes a provided callback function once for each array element And creates a new array
// let numbers =[1,2,3,4,5,6,7,8,9];
// let squares = numbers.map(square);

// squares.forEach(print);

// function square(element){
//   try {
//     return Math.pow(element,2);
//   } catch (error) {
//       console.log(error)
//   }
// }

// function print(element){
//     console.log(element);
// }


//array.filter() = creates a new array with all elements that pass the test provided by a function
// let ages =[13,16,18,22,25,28,35,40];

// function checkAge(element){
//     return element >=18;
// }

// let adults = ages.filter(checkAge);
// adults.forEach(print)


// ***********************day thirty-three start********************************************                        
//array ထဲမှာ ရှိတဲ့ တန်ဖိုးတွေကို ပေါင်းချင်ရင် reduce() ကိုသုံးပါတယ် 
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// let prices=[5,10,15,20,25,30,10];

// prices =prices.reduce((total,current)=>{
//         return 	total + current;
// },0);
// console.log(prices);

// let total=prices.reduce(checkout);

// console.log(`The total is:$ ${total}`);

// function checkout(total,element){
//     return total+element;
// }


// ***********************day thirty-four start********************************************                        
// let grades = [100,200,300,150,250,350,400,800,600];


// grades.sort(descendingSort).forEach(print);// ငယ်စဉ်ကြီးလိုက်စီပေးပါတယ်
// console.log(grades);

// grades = grades.sort(ascendingSort);
// grades.forEach(print)


// function descendingSort(x,y){ //ကြီစဉ်ငယ်လိုက်
//     return y-x;
// }

// function ascendingSort(x,y){ //ငယ်စဉ်ကြီးလိုက်
//     return x-y;
// }

// function print(element){
//     console.log(element)
// }

// ***********************day thirty-five start********************************************                        
// let count =0;
// document.getElementById("value").innerHTML = count;

// function increase()
// {
//     count += 1
//     document.getElementById("value").innerHTML = count;
// }


// function decrease()
// {
//     count -= 1
//     document.getElementById("value").innerHTML = count;
// }

// ***********************day thirty-six start********************************************                        
// arrow function =>
// let grades = [100,50,75,150,200];
// grades.sort(descendingSort);
// grades.forEach(print);
// console.log(grades);

// function descendingSort(x,y){
//     return y-x;
  
// }

// function print(element){
//     console.log(element)
// }
// အပေါ်က function နဲ့ရေးထားတာလည်း အတူတူပါပဲ အတိုနည်းပါ အခုအောက်ကဟာက
// let price =[1000,1500,2000,8000,500,4500];
// price.sort((x,y)=>x-y);
// price.forEach((element)=>console.log(element))

// ***********************day thirty-seven start********************************************                        
// let cards = ["A","2","3","4","5","6","7","8","B","K"]

// shuffle(cards);
// console.log(cards)


// function shuffle(array){ //ကလန်ဖန်ထိုးခြင်း
// let currentIndex = array.length;
//     while(currentIndex !=0){
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -=1;
       
//         let temp = array[currentIndex];
//         array[currentIndex]= array[randomIndex];
//         array[randomIndex]= temp;
//     }
//     return array;
// }

// ***********************day thirty-eight start********************************************                        
//nested functions = functin inside other functions.   
                    // Outer functions have access to inner function
                    // inner functions are "hidden from outside"
                    // used in closures (future video topic)

// let userName = "Zaw Min Htwe";
// let userInbox =10;

// login();

// function login(){

//     displayUserName();
//     displayInbox();

//     function displayUserName(){
//         console.log(`Welcome ${userName}`)
//     }

//     function displayInbox(){
//         console.log(`You have ${userInbox} message`)
//     }
// }

// ***********************day thirty-nine start********************************************                        
// Map = object that holds key-value pairs of any data type

// const store =new Map([
//     ["t-shirt",20],
//     ["jean-shirt",100],
//     ["foot",50],
//     ["underwear",30],
//     ["socks",800],
//     ["cycle",2000],
//     ["glass",200],
// ]);

// let shoppingCart =0;
// store.get("t-shirt");
// store.set("hat",40);
// store.delete("foot");
// console.log(store.has("hat"));
// console.log(store.size)

// store.forEach((value,key)=>console.log(`${key} $ ${value}`))

// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("jean-shirt");
// console.log(shoppingCart)

// ***********************day forty start********************************************                        
//object = A group of properties and methods
//          properties = what an object has
//          methods = what an object can do
//          use . to access properties/ methods

// const cycle1 = {
//     //properties
//     model:"YAMAHA",
//     color:"White",
//     year: 2022,

//     //methods
//     drive:function(){
//         console.log(`You drive the ${this.model}`);
//     },
//     brake: function(){
//         console.log("You step on the breaks");
//     }
// }
// const cycle2 = {
//     //properties
//     model:"R1",
//     color:"Black",
//     year: 2023,

//     //methods
//     drive:function(){
//         console.log(`You drive the ${this.model}`);
//     },
//     brake: function(){
//         console.log("You step on the breaks");
//     }
// }
// console.log(cycle1.model);
// console.log(cycle1.drive());
// console.log(cycle2.drive());

// ***********************day forty-one start********************************************                        
// class = objects တစ်ခုကို ဆိုတာက မိတ္တူကူးသလိုမျိုးပါ 
//              သူ့မှာ properties နဲ့ methods တွေရှိပါတယ်
//              နောက်ပြီူးတော့ unique properties လို့ ခေါ်တဲ့ constructor ရှိပါတယ်

class Player{
    score =0;
    //class ထဲမှာ method တွေရေးရငင် function ဆိုတဲ့ keywords မလိုပါဘူး
     stop(){
         console.log("You stoped the game");
     }
     start(){
         console.log("You started the game");
        
     }
     exit(){
         console.log("You exited the game");
     }
}

const player1 = new Player();
player1.stop();
console.log(player1.score +=1);