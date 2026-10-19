//var num1 = Number(prompt("Enter First NO"));
// var num2 = Number(prompt("Enter second NO"));

// var userName = prompt("Enter Your Name");
// alert(userName);

// var num1 = +prompt("Enter first No");
// var num2 = +prompt("Enter second No");
// alert(num1 + num2);

// var currentYear = 2026;
// var userAge = Number(prompt("Enter Your Age"));
// var yearOfBirth = currentYear - userAge;
// alert(yearOfBirth)

// var num1 = Number(prompt("Enter first No"));
// var num2 = Number(prompt("Enter second no"));
// console.log("Add = "  , (num1 + num2));
// console.log("Sub = " , (num1 - num2));
// console.log("Multi = " , (num1 * num2));
// console.log("Div = " , (num1 / num2));
// console.log("Rem = " , (num1 % num2));

// var text;
// console.log(typeof text)

// var num1 = 30;
// console.log(typeof num1)
// var text = "hello";
// console.log(typeof text)
// var bool = true;
// console.log(typeof bool)

// var text = "hello";
// console.log(text)
// var text = 30;
// console.log(text)
// var text = true;
// console.log(text)

// console.log(5 > 3)
// console.log(6 < 4)
// console.log(4 <= 5)
// console.log(3 >= 5)
// console.log(6 !=3 )
// console.log(9 == 9)
// console.log("9" == 9)
// console.log(9 === 9)
// console.log("9" === 9)

// var a = 8;
// var b = 4;
// console.log(a < b && a > b)
// console.log(a < b || a > b)
// var a = prompt("enter no");
// console.log(parseFloat(a));
// console.log(parseInt(a));

// var age = 6;
// if(age > 10){
//     console.log("age is greater then 10")
// }
// else{
//     console.log("age is less then 10")
// }

// var marks = prompt("enter no");
// if(marks >= 80){
//     console.log("A+ grade")
// }else if(marks >= 70){
//     console.log("A grade")
// }else if(marks >= 60){
//     console.log("B grade")
// }else if(marks >= 50){
//     console.log("C grade")
// }else{
//     console.log("Fail")
// }

// var day = prompt("enter day")
// if(day == "saturday" || day == "sunday"){
//     console.log("weekend")
// }else{
//     console.log("weekday")
// }

// var balance = 50000;
// var withdraw = prompt("Enter amount");
// if(withdraw <= 0){
//     console.log("Invaild amount")
// }else if (withdraw > balance){
//     console.log("In sufficient balance")
// }else if(withdraw % 500 !==0){
//     console.log("enter multiple of 500")
// }else{
//     console.log("payment successfull")
//     console.log("final balance =" , balance - withdraw)
//     console.log("withdrawal amount =" , withdraw)
//  }

// for(var i =1; i <= 10; i++){
//     console.log(i)
// }

// var i =1;
// while(i <= 10){
//     console.log(i);
//     i++
// }

// var i = 1;
// do{
//     console.log(i);
//     i++
// }
// while(i <=10);

// for(var i = 10; i >= 1; i--){
//     console.log(i)
// }

// var i =10;
//  while(i >= 1){
//     console.log(i);
//     i--
// }

// var i = 10;
// do{
//     console.log(i);
//     i--
// }
// while(i >=1);

// for(var i = 1; i <= 10; i++){
//     console.log(2,'x',i,"=",2*i)
// }

// function print() {
//     console.log("hello")
//     console.log("hello")
//     console.log("hello")
//     console.log("hello")
//     console.log("hello")
//     console.log("hello")
//     console.log("=======")
// }

// print();
// print();

// function add() {
//     var a = 20;
//     var b = 35;
//     console.log(a + b);
// }

// add();

// function sub() {
//     var a = 20;
//     var b = 35;
//     console.log(a - b);
// }

// sub();

// function multi() {
//     var a = 20;
//     var b = 35;
//     console.log(a * b);
// }

// multi();

// function div() {
//     var a = 20;
//     var b = 35;
//     console.log(a / b);
// }

// div();

// function print(name) {
//     console.log("hello" , name)
// }

// print("ali");
// print("sara");
// print("raza");
// print("sana");

// function add(a , b) {
//     console.log(a + b);
// }
// add(10 , 5)
// add(2 , 5)
// add(4 , 7)

//function statement / declear
// function print() {
//     console.log("hello")
// }
// print()

//function expression
// var print = function(){ parameter
//     console.log("hello")
// }
// print() argumment

// var a = 10;
// let b = 12;
// const c = 14;

// console.log(a)
// console.log(b)
// console.log(c)

//hoisting
// console.log(a)
// console.log(b)
// console.log(c)

// var a = 10;

// var b = 12;

// var c = 15;

// console.log(b)
// const b = 12;
// const c = 15;
// console.log(c)

// function print(){
//     console.log("hello 0")
//     console.log("hello 1")
//     console.log("hello 2")
//     return;
//     console.log("hello 3")
//     console.log("hello 4")
// }
// print();

// function add(a , b){
//     return a + b;
// }
// console.log(add(10 , 7))

//recursion
// function count(n){
//     if(n === 55){
//         return;
//     }
//     console.log(n)
//     count(n - 1)
// }
// count(70)

//array
//var fruits = ["mango" , "banana" , "apple" , "grape" , "kiwi" , "watermelon" , "pomegranate"]
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

//array method
// fruits.push("orange");//add new element at end
// console.log(fruits)

// fruits.pop("orange");// remove last element
// console.log(fruits)

// fruits.shift("mango");//remove first element
// console.log(fruits)

// fruits.unshift("pineapple");//add new element at the start
// console.log(fruits)

//console.log(fruits.indexOf("pomegranate"))

// const box = document.querySelector("#box");
// const para = document.createElement("p");
// para.textContent = "Hello World";
// box.appendChild(para);

// function add(){
//     let userInput = document.querySelector("#input");
//     let para = document.createElement("p");
//     para.textContent = userInput.value;
//     userInput.value = "";
//     let box = document.querySelector("#box");
//     box.appendChild(para);
// }

//object
let student = {
    name: "ali",
    age: 20,
    rollNo: 123,
    city: "Karachi"
}

//Javascript Object Notation - JSON
let data = JSON.stringify(student);
console.log(data)

let jsonData = '{"name":"ali", "age":20, "rollNo":123, "city":"Karachi"}';

let changeToObject = JSON.parse(jsonData);
console.log(changeToObject)

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))


// console.log(student.city)

// let box = document.querySelector("#box")
// console.log(box.classList.contains("new"))

// let student = {
//     name: "ali" ,
//     age: 20,
//     rollNo: 123,
//     city: "Karachi" ,
// }

// student.city = "lahore";
// student.country = "Pakistan"

// console.log(student.country)

// let button = document.querySelector("#btn");

// button.addEventListener("click", function(){
//     alert("hello world");
// })


// function show(){
//     alert("hello world");
// }

