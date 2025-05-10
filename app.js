// Date: 15-03-25
// javascript class 01
// chapter cover 01 to 03

// CHAPTER 01 ===START===
// Chapter 1 (Alerts)

// var firstName = "Farman";
// var lastName = "Ali";
// var email = "Fa.72@gmail.com";
// var phoneNumber = "1234567890";
// var password = "mySecret123";

// // Alerts
// alert(firstName);
// alert(lastName);
// alert(email);
// alert(phoneNumber);
// alert(password);


// alert("I'm learning JavaScript!");
// ====End====

// CHAPTER 02 ===START===
// Chapter 2 (Variables for string)

// var fullName = "farman ali";
// alert(fullName);

// var MyFav;
// MyFav = "black";
// alert(MyFav);

// var teamName = "Code Warriors";
// alert(teamName);

// var bestMan = "Farman";
// bestMan = "Ali";     
// alert(bestMan);          
// ====End====

// CHAPTER 03 ===START===
// Chapter 3 (Variables for numbers)

// var caseQty;
// caseQty = 804;
// alert(caseQty)

// var num = "8";
// num = Number(num);
// var result = num + 5;
// alert(result)

// var sum;
// sum = 2 + 2;
// alert(sum)

// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// alert(orderTotal)

// var num = 10;
// num = num + 20;
// alert(num);

// =================================xxx=================================

// Date: 12-04-25
// javascript class 02
// chapter cover 04 to 11

// chapter 04
// (Variable names Legal and Illegal)

// var productCost = 3.45;
// console.log(productCost);

// var age = 23;
// console.log(age)

// var firstName ="Farman"
// var lastName = " Ali"
// var fullName = firstName + lastName;
// console.log(fullName);

// Legal & Illegal Variables
// Legal Variable Names
// var name;
// var _name;
// var $name;
// var name1;
// var firstName;
// var first_name;
// var user123;
// var myVar;
// var $dollar_and_underscore_;
// var camelCaseVariable;

// Illegal Variable Names
// var 1name;         // Starts with number
// var first name;    // Contains space
// var var;           // Reserved keyword
// var function;      // Reserved keyword
// var @name;         // Invalid character "@"
// var my-name;       // Hyphen not allowed
// var new;           // Reserved keyword
// var let;           
// ==========xxxxxxxxxx==========


// Chapter 5 
// (Math Expression I)

// var remainder = 13 % 3;
// console.log(remainder); //Output: 1

// var num = 20 % 6;
// console.log(num); //Output: 2

// var largeNum = 1000 * 2000;
// console.log(largeNum) //output: 2000000

// var x = 20;
// var y = 10;
// var result = x - y;
// console.log(result); //output; 10

// var remainderNumber = 15 % 4;
// console.log(remainderNumber); //output: 03

// var num = 10 * 5;
// alert(num)
// ==========xxxxxxxxxx==========


// Chapter 6 
// (Math Expression II)

// var x = 5;
// x += 1; // now x is 6
// let x = 5;
// x++; // now x is 6

// var x = 100;
// x--;             // x becomes 99
// console.log(x); // Output: 99

// var x = 50;
// var y = x++;
// var y = ++x;    // Output: 51
// console.log(y) // Output: 50

// var y = 50;
// var z = --y;
// console.log(z)  // Output: 49

// var num = 10;
// var newNum = num--;
// console.lof(newNum) // Output: 09

// var num = 10;
// num++
// alert(num)
// ==========xxxxxxxxxx==========


// Chapter 7 
// (Math Expression III)

// var calculatedNum = 2 + (2 * 6);
// console.log(calculatedNum) //Output: 14

// var calculatednum = (2 + 2) * 6;
// console.log(calculatednum); // output: 24 

// var calculatedNum = (2 + 2) * (4 + 2);
// console.log(calculatedNum) // output: 24

// var calculatedNum = ((2 + 2) * 4) + 2;
// console.log(calculatedNum) // output; 18
// Explain
// 2 + 2 = 4;
// 4 * 4 = 16;
// 16 + 2 =18;

// 2 + 2 * 4 + 10
// var cost = (2 + 2) * (4 + 10);
// console.log(cost); // output: 56

// 2 + 2 * 4 + 10
// var cost = (2 * 4) + 2 + 10;
// console.log(cost); // output: 20

// 4 / 2 * 4
// ?
// ==========xxxxxxxxxx==========


// Chapter 8 
// (Concatenating Text Strings)

// var num = "2" + "2";
// console.log(num); // output: 22

// var message = ("Hello," + "Dolly");
// alert(message);

// alert("33" + 3); // Output: 333

// alert("pakistan"+" "+"Zindabad");

// var result = "The number is " + 5;
// alert(result)

// var firstNum = "Hello, ";
// var secondNum = "world!";
// var result = firstNum + secondNum;
// alert(result)
// ==========xxxxxxxxxx==========


// Chapter 9
//  (Prompts)

// var enterName = prompt("Enter your name")

// var country = prompt("Country?", "China");
// alert("You entered: " + country);

// var yourName = prompt(Enter Your Name"); //Wrong code
// var yourName = prompt("Enter Your Name"); //Right code 
// alert(yourName);

// var userName = prompt("What is your name?", "Ali");
// alert(userName)

// var message = "What is your favorite color?";
// var defaultColor = "Blue";
// var userColor = prompt(message, defaultColor);

// var answer = prompt("What is your name","Ali")
// ==========xxxxxxxxxx==========


// Chapter 10
// (if statements)

// var city = prompt("Enter Your City Name: ")
// if (city == "karachi") {
//     alert("bht garmi hai bhai karachi me ")
// }


// var x = 10;
// var y = 10;

// if (x === y) {
//     let userZ = prompt("What is the value of z?");
//     console.log("The value of z is " + userZ)
//   }
  

// var ZipCode = 10010
// if (ZipCode == 10010) {
//     alert("karachi")
// } else{
//     alert("Please write correct city")
// }


// var x = 10;
// if (x === 10 ) {
//     var x = 20;
// }
// alert(x)
// ==========xxxxxxxxxx==========


// Chapter 11 
// (Comparison Operators)

// var a = +prompt();
// var b = +prompt()
// if (a !== b){
//     alert("A brabar nh hai B kay ")
// }


// var a = 20;
// var b = 10;
// if (a >= b) {
//     console.log("A bra hai B se")
//   } else {
//     console.log("a chota hai b se");
//   }


// var a = 20;
// var b = 10;
// if(a >= b){
//     alert("G blkul bhai ap sai keh rahy ho A bra hai b se ya brabar hai B kay ")
// }


// var num = 10;
// if(num !== 20){
//     var num2 = 5;
// }
//   alert(num2)


// var num1 = 5;
// var num2 = 10;

// if (num1 !== num2) {
//   alert("Mubarak ho!");
// }


// var UserName = prompt("enter your name")
// if (UserName !== "ali"){
//     alert("match nh hua")
// }
// ==========xxxxxxxxxx==========


// chapter 12
// IF ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS


// var chk = prompt("koi word ya num lekhain");

// if (chk >= "0" && chk <= "9"){
//     alert("ye ek number hai")
// }
//  else if (chk >= "A" && chk <= "Z"){
//     alert("ye ek capital letter hai")
//  }
//  else if (chk >= "a" && chk <= "z"){
//     alert("ye ek small letter hai")
//  }
// else{
//     alert("ye na toh num hai or na he koi words")
// }


// var num1 = +prompt("first number");
// var num2 = +prompt("Second number");
    
// if (num1 > num2){
//     alert("num1 bra hai num2 se")
// }
// else if (num1 < num2){
//     alert("num1 chota hai num2 se ")
// }
// else{
//     alert("Dno num brabar nh hai")
// }


// var num = +prompt("Nagative value & Positive value");

// if (num > 0){
//     alert("Positive")
// }
// else if (num < 0 ){
//     alert("Negative")
// }
// else{
//     alert("Zero")
// }


// var chk = prompt("vowel value enter kare").toLowerCase();

// if (chk.length !== 1){
//     alert("vowels lekho meri jan")
// }
// else{
// if (chk === "a" || chk === "e" || chk === "i" || chk === "o" || chk === "u"){
//     alert("true")
// }
// else {
// alert("false")
// }
// }


// var correctPassword = "abc123"
// var userpassword = prompt("Enter you password");
// if(!userpassword){
//     alert("meri jan password toh dalo")
// } 
// else if(correctPassword === userpassword){
//     alert("Mashallah bhai ap ne sai password enter kiya hai!")
// }
// else{
//     alert("jan ap ne wrong password enter kiya hai SORRY!")
// }


// var greeting ;
// var hour = +prompt();

// if (hour < 18){
//     alert("Good Day")
// } else{
//     greeting = "Good Evening"
// }

// var time = +prompt("Enter your time!");
// if (time > 0 && time < 1200){
//     alert("Assalamu alaikum GOOD MORNING!")
// } 
// else if(time > 1200 && time < 1700){
//     alert("Good afternoon bhai den kase guzar rha hai ap ka!")
// } 
// else if(time > 1700 && time < 2100){
//     alert("Good Evening!")
// } 
// else if(time > 2100 && time < 2359){
//     alert("Good night jan ab so jao !")
// } else{
//     alert("bhya ap ne time ghaklat enter kiya hai ")
// }
// =================================xxx=================================

// 02-05-25
// Chapter 14 & 16 
// ARRAYS

// var firstName = [];


// var fruits = ["Banana", "Apple", "Orange", "Mango", "Red Apple"]
// console.log(fruits)


// var numbers = [10,20,30,40,50,60,70,80,90]
// console.log(numbers)


// var truthValue = [true, false, true, false];
// console.log(truthValue);


// var mixedArray = [20, "Apple", 2.1, true, ]
// console.log(mixedArray)

// Question number 07 ?


// var studentName = ["Ali", "Raza", "Hamza"];
// var sutdentScore = [400, 450, 500];
// var studentList = document.getElementById("student-list");

// Question number 08 ?


// var city = ["Karachi", "Lahore", "Skardu", "Multan"];
// var mainCity = city.slice(0, 3)
// console.log(mainCity)


// var array = ["This ", " is ", " my ", " cat"];
// var result = array.join(""); 
// console.log(result)


// var line = [];
// line.push("ali")
// line.push("farman")
// line.push("raza")
// console.log(line)

// line.shift()
// console.log(line)
// ==========xxxxxxxxxx==========

// Chapter 17 - 20
//  (for Loops)

// for (var i = 0; i < 10; i++) {
//     console.log("Number of Loop: " + (i + 1));
// }


// for (var i = 0; i <= 12; i++){
//     console.log("ye loop number hai " + i)
// }


// for var i = 0 i <= 4 i++ this is wrong code 
// for (var i = 0; i <= 4; i++)


// for (var count = 0; count <= 100; count++){
//     console.log(count)
// }


// for (var i = 2; i > -1; i--){
//     console.log(i)
// }


// var pet = ["cat", "dog", "rabbit"]
// for( var i = 0; i < pet.length; i++){
//     console.log(pet[i]);
// }

// for(var i = 0; i < 10; i++){
//     if (i === 1){
//         alert(i);
//         break;
//     }
// }


// var matchFound = false;
// var nameList = ["farman", "ali", "raza", "hussain"];
// var userInput = prompt("Enter user name");
// for(var i = 0; i < nameList.length; i++){
//     if(userInput === nameList[i]){
//         alert("Shukria yahi naam hai")
//         matchFound = true;
//         break;
//     }
// }
// if (!matchFound){
//     alert("aesa koi naam nhe hai")
// }
// ==========xxxxxxxxxx==========

// chapter 17-20
// ARRAYS AND LOOP

// var emptyArray = [ [], [], [], [] ]
// console.log(emptyArray)


// for (var i = 1; i <= 10; i++){
//     console.log(i)
// }



// Table tyar hai bhai ap use kr sakty ho

// var tableNumber = +prompt("Enter Table Number")

// for(var i = 1; i <= 10; i++){
//     alert(tableNumber + "x" + i + "=" + (tableNumber*i))
// }
// =================================xxx=================================


// 03-05-25
// chapter 21-25
// STRING METHODS

// 1.
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Hello! " + (fullName))

// 2.
// var favMobile = prompt("Enter your fav mobile name:")
// var inputLength = favMobile.length;

// document.writeln("your fav mobile name is " + favMobile + "<br>")
// document.writeln("your mobile lenght is:" + inputLength);

// 3.
// var world = "pakistan"
// var index = world.indexOf("n")

// alert(index)

// 4.
// var text = "Hello World";    
// var lastIndex = text.lastIndexOf('l'); 
//  console.log(lastIndex)

// 5.
//   let word = "Pakistani";
//   let character = word.charAt(3);
//   document.getElementById("result").innerText = + character;

// 6.
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// console.log("new city:" + newCity);

// =================================xxx=================================


// Chapter 21 
// (Changing Case)

// var allLower = userInput.toLowerCase(); 

// var x = "HELLO";
// x = x.toLowerCase(); 

// var y = "hello";
// y = y.toUpperCase(); 

// var originalString = "HELLO WORLD";
// var newString = originalString.toLowerCase(); 

// var array = ["HELLO", "WORLD", "JAVA"];
// var lowercaseElement = array[0].toLowerCase();

// var text = "hello world";
// alert(text.toUpperCase()); 

// var cityName = "kaRacHi";
// cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase(); 




// Chapter 22-25 
// (Strings)

// var sameWords = "captain";
// var sliced = sameWords.slice(1, 3); 

// var sameWords = "captain";
// var sliced = sameWords.slice(1, 3); 

// var animal = "elephant";
// var seg = animal.slice(3, 7); 

// var string = "elephant";
// var numChars = string.length;

// var string = "elephant";
// var length = string.length; 
// var slicedString = string.slice(1, length - 3); 

// var text = "To be or not to be.";
// var indx = text.indexOf("be"); 

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be"); 

// var text = "go to go";
// var indx = text.lastIndexOf("go"); 

// if (string.indexOf(indexNum) !== -1) {
   
//   }

//   var str = "abcde";
// var charAtIndex2 = str.charAt(2); 

// var text = "The quick brown fox jumps over the lazy dog.";
// var cha = text.charAt(9); 

// var str = "Hello!";
// var x = str.charAt(str.length - 1); 

// var input = "abcdef";
// var cha = input.charAt(4); 

// if (string.charAt(2) === "x") { 
//   }

//   var str = "hello";
//   var arr = [];
//   for (var i = 0; i < str.length; i++) {
//     arr.push(str.charAt(i)); 
//   }

//   var reply = "no one is here";
//   var revisedReply = reply.replace("no", "yes"); 

//   var str = "1 is the first number";
// var newStr = str.replace("1", "one"); 

// var y = x.replace(/a/g, "z"); 




// Chapter 26 
// (Rounding Numbers)

// var roundedNumber = Math.round(4.5); 

// var origNum = 4.2;
// var roundNum = Math.ceil(origNum); 

// var origNum = 4.8;
// var roundNum = Math.floor(origNum); 

// var origNum = 3.7;
// var roundedNum = Math.round(origNum); 

// var roundToZero = Math.round(0.5);





// Chapter 27 
// (Random Numbers)

// var randomNumber = Math.floor(Math.random() * 50) + 1; 

// var randomNum = Math.random();

// var diceRoll = Math.floor(Math.random() * 6) + 1; 

// var toss = Math.random() < 0.5 ? "Heads" : "Tails";




// Chapter 28-29 
// (Converting Strings)

// var str = "123";
// var num = parseInt(str);

// var num2 = Number(str);

// function convertToInt(str) {
//     return parseInt(str);
//   }
  
//   var result = convertToInt("123");
//   console.log(result);

//   var str = "3.14";
// var num = parseFloat(str); 
// var num2 = Number(str);
// var str = "123.45";
// if (!isNaN(str)) {
//   var num = parseFloat(str); 
//   console.log(num);
// } else {
//   console.log("Cannot convert to a number");
// }

// var num = 42;
// var str = num.toString(); 

// var str2 = num + "";

// function convertToString(num) {
//     return num.toString(); 
//   }
  
//   var result = convertToString(42);
//   console.log(result); 

//   var str = "3.14";
// var integerPart = parseInt(str); 
// console.log(integerPart); 


// Chapter 30 
// (Controlling the Length of Decimals)

// var num = 3.14159265359; 
// var newNum = num.toFixed(4).toString(); 
// console.log(newNum); 

// var num = 3.14159265359; 
// num = Number(num.toFixed(2)); 
// console.log(num); 

// var num = 3.14159265359;
// if (num.toFixed(2).toString().length > 4) {
//   console.log("The number has more than 4 characters.");
// }

// var num = 7.987654321; 
// alert(num.toFixed(2).toString()); 

// =================================xxx=================================

