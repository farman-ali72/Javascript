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
// var var;           
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
// ==========xxxxxxxxxx==========


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
// ==========xxxxxxxxxx==========


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
// ==========xxxxxxxxxx==========



// Chapter 27 
// (Random Numbers)

// var randomNumber = Math.floor(Math.random() * 50) + 1; 

// var randomNum = Math.random();

// var diceRoll = Math.floor(Math.random() * 6) + 1; 

// var toss = Math.random() < 0.5 ? "Heads" : "Tails";
// ==========xxxxxxxxxx==========


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

// 10-05-25
// chapter 31-34
// (DATE METHODS)


// var dayName = ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];
// var now = new Date()
// var dayOfTheWeek = now.getDay()
// var theDayName = dayName[dayOfTheWeek];
// console.log(theDayName)


  
    
    // function showDateTime() {
    //   var now = new Date();         
    //   var dateTime = now.toLocaleString(); 
    //   document.getElementById("myTime").innerHTML = dateTime; 
    // }

    // showDateTime();


    // current date
// var today = new Date();

// day names
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// day index (0 = Sunday, 1 = Monday, ...)
// var dayIndex = today.getDay();

// Alert the first 3 letters of the day
// alert(days[dayIndex]);


// current date
// var today = new Date();

// current day 
// var day = today.getDay();

// Check if it's Saturday (6) or Sunday (0)
// if (day === 0 || day === 6) {
//   alert("It's Fun day");
// }


// current date
// var today = new Date();

// current day of the month (1–31)
// var date = today.getDate();

// if (date < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }



// var currentDate = new Date();

// Calculate milliseconds since Jan 1, 1970
// Divide by 60000 to convert milliseconds to minutes
// minutesSinceEpoch = currentDate.getTime() / 60000;

// // result
// alert("Minutes since Jan. 1, 1970: " + minutesSinceEpoch);


// current time
// var now = new Date();

// current hour (0 to 23)
// var hour = now.getHours();

// Check if it's before 12 noon
// if (hour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }


// // Create a Date object for 1st Ramadan (June 18, 2015)
// var ramadanStart = new Date("01-03-2025");

// var today = new Date();

// var timeDifference = today - ramadanStart;

// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Alert the result
// alert(daysPassed + " days have passed since 1st Ramadan, 2025");



// var age = prompt("Please enter your age:");

// current year
// var currentYear = new Date().getFullYear();

// Calculate birth year
// var birthYear = currentYear - age;

// Show the result in the browser
// document.write("Your age is: " + age + "<br>");
// document.write("Your birth year is: " + birthYear);
// ==========xxxxxxxxxx==========


// chapter 35 to 38
// (FUNCTION)


// function showDateTime() {
//   var now = new Date();
//   document.write("Current Date and Time: " + now);
// }
// Call the function
// showDateTime();


// function userFullName(firstName, lastName) {
//   var fullName = firstName + " " + lastName;

//   alert("Hello, " + fullName + "!");
// }

// userFullName("Farman", "Ali");


// function addTwoNumbers() {
//   var num1 = +(prompt("Enter the first number:"));

//   var num2 = +(prompt("Enter the second number:"));

//   // Calculate the sum
//   var sum = num1 + num2;

//   // Return the sum
//   return sum;
// }

// Call the function and show the result
// var result = addTwoNumbers();
// alert("The sum of the two numbers is: " + result);


// function square(num) {
//   return num * num;
// }

// // Example usage:
// var result = square(5);
// alert("The square is: " + result);


// function showCounting(start, end) {
//   document.write("<h3>Counting from " + start + " to " + end + ":</h3>");
  
//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }

// var startNum = parseInt(prompt("Enter the start number:"));
// var endNum = parseInt(prompt("Enter the end number:"));

// showCounting(startNum, endNum);
// ==========xxxxxxxxxx==========

// // Chapter 31 to 34 
// (Date & Time)

// var currentDate = new Date();

// var dateString = new Date().toString();

// var currentDay = currentDate.getDay();

// var today = new Date();
// var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert("Today is: " + weekDays[today.getDay()]);

// var now = new Date();
// var currentYear = now.getFullYear();
// var currentMonth = now.getMonth();
// var currentDateNum = now.getDate();
// var currentDayOfWeek = now.getDay();
// var currentHour = now.getHours();
// var currentMinute = now.getMinutes();
// var currentSecond = now.getSeconds();
// var currentMillisecond = now.getMilliseconds();

// var futureDate = new Date(2020, 11, 31);

// var birthday1992 = new Date(1992, 1, 2);

// alert(new Date("Jan 1, 1980").getTime());

// var futureYearDate = new Date();
// futureYearDate.setFullYear(2025);

// function resetToJanuary(dateObj) {
//     dateObj.setMonth(0);
//     return dateObj;
// }

// var midMonthDate = new Date();
// midMonthDate.setDate(15);

// function updateMinutes(dateObj) {
//     var enteredMinutes = parseInt(prompt("Enter minutes:"), 10);
//     dateObj.setMinutes(enteredMinutes);
//     return dateObj;
// }

// function incrementHours(dateObj, hrs) {
//     dateObj.setHours(dateObj.getHours() + hrs);
//     return dateObj;
// }

// function getAgeFromDOB(dobString) {
//     var birth = new Date(dobString);
//     var now = new Date();
//     var age = now.getFullYear() - birth.getFullYear();

//     var monthDiff = now.getMonth() - birth.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
//         age--;
//     }

//     return age;
// }

// var inputDOB = prompt("Enter your date of birth (YYYY-MM-DD):");
// alert("Your age is: " + getAgeFromDOB(inputDOB));


// // Chapter 35 to 37 
// (Functions)

// function showAlert() {
//     alert("This is an alert");
// }

// function promptUserName() {
//     var nameInput = prompt("Enter name");
// }

// function executeFunctions() {
//     showAlert();
//     promptUserName();
// }

// function displayUserName() {
//     var inputName = prompt("Enter name");
//     alert("Your name is: " + inputName);
// }
// displayUserName();

// function mergeValues(x, y, z) {
//     // Do something
// }
// mergeValues("value1", "hello", 5);

// function combineStrings(strA, strB) {
//     var combined = strA + strB;
// }

// function computeProduct(x, y, z) {
//     var product = x * y * z;
// }

// function calculateAverage(nums) {
//     var total = nums.reduce((sum, n) => sum + n, 0);
//     return total / nums.length;
// }

// function totalSum(x, y) {
//     return x + y;
// }

// function getArrayAverage(arr) {
//     var sum = arr.reduce((acc, val) => acc + val, 0);
//     return sum / arr.length;
// }

// function returnTen() {
//     return 10;
// }
// var result = returnTen();

// function countLetters(str) {
//     return str.length;
// }

// function updateYear(dateObj, yearVal) {
//     dateObj.setFullYear(yearVal);
//     return dateObj;
// }

// function determineAge(dobInput) {
//     var birthDate = new Date(dobInput);
//     var current = new Date();
//     var years = current.getFullYear() - birthDate.getFullYear();
//     if (
//         current.getMonth() < birthDate.getMonth() ||
//         (current.getMonth() === birthDate.getMonth() && current.getDate() < birthDate.getDate())
//     ) {
//         years--;
//     }
//     return years;
// }

// function checkNameExistence(name) {
//     var nameList = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
//     return nameList.includes(name);
// }

// function repeatChar(char) {
//     return char.repeat(10);
// }

// function reverseList(array) {
//     return array.reverse();
// }

// function reverseDigits(num) {
//     return parseInt(num.toString().split('').reverse().join(''));
// }

// function checkPalindrome(str) {
//     var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return cleanStr === cleanStr.split('').reverse().join('');
// }

// function convertToTitleCase(sentence) {
//     return sentence.split(' ').map(word =>
//         word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ');
// }

// function findMinAndMax(values) {
//     return [Math.min(...values), Math.max(...values)];
// }

// // Chapter 38 (Local vs. Global Variables)

// function displayLocal() {
//     var message = "I am a local variable";
//     console.log(message);
// }
// displayLocal();

// var globalMessage = "I am global";

// function showGlobal() {
//     console.log(globalMessage);
// }
// showGlobal();

// // Chapter 39, 40 (Switch Statements)

// var scoreGrade = 'B';

// switch (scoreGrade) {
//     case 'A':
//         console.log("Excellent!");
//         break;
//     case 'B':
//         console.log("Good Job!");
//         break;
//     case 'C':
//         console.log("You passed.");
//         break;
//     case 'D':
//         console.log("Try harder next time.");
//         break;
//     default:
//         console.log("Invalid grade.");
// }

// var inputCity = prompt("Enter your city name:");

// switch (inputCity.toLowerCase()) {
//     case 'karachi':
//         alert("Welcome to the City of Lights!");
//         break;
//     case 'lahore':
//         alert("Welcome to the Heart of Pakistan!");
//         break;
//     case 'islamabad':
//         alert("Welcome to the Capital!");
//         break;
//     default:
//         alert("City not recognized.");
// }




// var day = 1;

// switch (day) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thrusday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//         case 6:
//             console.log("Saturday")
//             break;
//             case 7:
//             console.log("Sunday")

//     default:
//         break;
// }
// =================================xxx=================================


// chapter 38 - 42
// FUNCTIONS| SWITCH | WHILE.. DO-WHILE |

// function power(a, b) {
//     var result = 1;

//     if (b < 0) {
//         a = 1 / a;
//         b = -b;
//     }

//     for (var i = 0; i < b; i++) {
//         result *= a;
//     }

//     return result;
// }

// console.log(power(2, 3));  // Output: 8
// console.log(power(5, -2)); // Output: 0.04
// console.log(power(7, 0));  // Output: 1



// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true; // It's a leap year
//     } else {
//         return false; // Not a leap year
//     }
// }

// // Example usage
// let year = parseInt(prompt("Enter a year:"));
// if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }




// // Function to calculate average marks
// function calculateAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }

// // Function to calculate percentage
// function calculatePercentage(m1, m2, m3) {
//     let totalMarks = m1 + m2 + m3;
//     let percentage = (totalMarks / 300) * 100; // assuming each subject is out of 100
//     return percentage;
// }

// // Main function to call others and display result
// function mainFunction() {
//     let m1 = parseFloat(prompt("Enter marks for subject 1:"));
//     let m2 = parseFloat(prompt("Enter marks for subject 2:"));
//     let m3 = parseFloat(prompt("Enter marks for subject 3:"));

//     let avg = calculateAverage(m1, m2, m3);
//     let perc = calculatePercentage(m1, m2, m3);

//     console.log("Average Marks: " + avg.toFixed(2));
//     console.log("Percentage: " + perc.toFixed(2) + "%");
// }

// // Call the main function
// mainFunction();



// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; // return index when character is found
//         }
//     }
//     return -1; // return -1 if character not found
// }

// // Example usage
// let inputString = prompt("Enter a string:");
// let searchChar = prompt("Enter a character to find:");

// let index = customIndexOf(inputString, searchChar);

// if (index !== -1) {
//     console.log("Character '" + searchChar + "' found at index: " + index);
// } else {
//     console.log("Character '" + searchChar + "' not found.");
// }



// function deleteVowels(sentence) {
//     let result = "";
//     let vowels = "aeiouAEIOU";

//     for (let i = 0; i < sentence.length && i < 25; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }

//     return result;
// }

// // Example usage
// let input = prompt("Enter a sentence (max 25 characters):");
// let noVowels = deleteVowels(input);
// console.log("Sentence without vowels: " + noVowels);



// // Convert kilometers to meters
// function toMeters(km) {
//     return km * 1000;
// }

// // Convert kilometers to feet
// function toFeet(km) {
//     return km * 3280.84;
// }

// // Convert kilometers to inches
// function toInches(km) {
//     return km * 39370.1;
// }

// // Convert kilometers to centimeters
// function toCentimeters(km) {
//     return km * 100000;
// }

// // Main program
// let km = parseFloat(prompt("Enter distance between two cities in kilometers:"));

// console.log("Distance in meters: " + toMeters(km).toFixed(2) + " m");
// console.log("Distance in feet: " + toFeet(km).toFixed(2) + " ft");
// console.log("Distance in inches: " + toInches(km).toFixed(2) + " in");
// console.log("Distance in centimeters: " + toCentimeters(km).toFixed(2) + " cm");



// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;

//     if (hoursWorked > regularHours) {
//         let overtimeHours = hoursWorked - regularHours;
//         return overtimeHours * overtimeRate;
//     } else {
//         return 0;
//     }
// }

// // Main Program
// let hours = parseInt(prompt("Enter total hours worked by employee:"));

// if (isNaN(hours) || hours < 0) {
//     console.log("Invalid input. Please enter a valid number of hours.");
// } else {
//     let overtimePay = calculateOvertimePay(hours);
//     console.log("Overtime pay is: Rs. " + overtimePay.toFixed(2));
// }

