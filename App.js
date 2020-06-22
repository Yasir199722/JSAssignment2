// ==== Chapter 21-25 and Task # 1

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var firstName, lastName, fullName;
// fullName = 'firstName' + 'lastName';
// alert("Welcome!"+ firstName + lastName);

// ==== Chapter 21-25 and Task # 2

// var mobile = prompt("Enter Your Favourite Phone");
// if(mobile === "Huwaei"){
//     document.write("My Favourite Phone is Huwaei" + "Length Of String : 6");
// }
// else if(mobile === "Samsung"){
//     document.write("My Favourite Phone is Samsung Galaxy S6 Edge Plus"+ "<br>"+ "Length Of String : 28");
// }
// else if(mobile === "iPhone"){
//     document.write("My Favourite Phone is iPhone Eleven Plus"+ "<br>"+ "Length Of String : 16");
// }
// else if(mobile === "Oppo"){
//     document.write("My Favourite Phone is Oppo O9"+ "<br>"+ "Length Of String : 6");
// }
// else if(mobile === "Vivo"){
//     document.write("My Favourite Phone is Vivo V6"+ "<br>"+ "Length Of String : 6");
// }
// else{
//     document.write("This mobile is not in our category!")
// }

// ==== Chapter 21-25 and Task # 3

// var n = document.write("Pakistani".indexOf("n")+"<br>");
// document.write("String : Pakistani"+"<br>"+ "Index of 'n': 7");

// ==== Chapter 21-25 and Task # 4

// var  str = document.write("Hello World".lastIndexOf("l")+"<br>");
// document.write("String : Hello World"+"<br>"+ "Last Index of 'l': 9");

// ==== Chapter 21-25 and Task # 5

// var firstChar = document.write("Pakistani".charAt(3)+"<br>");
// document.write("String : Pakistani"+"<br>"+ "Last Index of '3': i");

// ==== Chapter 21-25 and Task # 6

// var firstName = "Yasir";
// var lastName = "Khan";
// var result = firstName.concat(lastName);
// document.write(result);

// ==== Chapter 21-25 and Task # 7

// var string = "Hyderabad";
// document.write(string+"<br>");
// var newstring = string.replace(/Hyder/,'Islam');
// document.write(newstring+"<br>");
// document.write("City : Hyderabad"+"<br>");
// document.write("After replacement : Islamabad");

// ==== Chapter 21-25 and Task # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message+"<br>");
// var newmessage = message.replace(/and/g, '&');
// document.write(newmessage);

// ==== Chapter 21-25 and Task # 9

// var string = "472";
// var number = document.write(string+"<br>");
// document.write("Value : 472"+"<br>"+"Type : String"+"<br>"+"Value : 472"+"<br>"+"Type : Number")

// ==== Chapter 21-25 and Task # 10

// var input = prompt("Enter Input");
// input = input.toUpperCase();
// document.write(input);

// ==== Chapter 21-25 and Task # 11

// var input = prompt("Enter Input");
// input = input.toUpperCase(0);
// input = input.toLowerCase;
// document.write(input);

// ==== Chapter 21-25 and Task # 12

// var num = 35.36;
// var mytrunc = Math.trunc(num);
// document.write(mytrunc+ "36"+"<br>");
// document.write("Number : 35.36"+ "<br>");
// document.write("Result : 3536")


// ==== Chapter 21-25 and Task # 13

// var username = prompt("Enter your username");
// if(username === "cm@d"){
//     alert("Please Enter A Valid Username");
// }
// else if(username === "ya[ir"){
//     alert("Please Enter A Valid Username")
// }
// else if(username === "gho]s"){
//     alert("Please Enter A Valid Username")
// }
// else if(username === "yasir!"){
//     alert("Please Enter A Valid Username")
// }
// else{
//     alert("Welcome !")
// }

// ==== Chapter 21-25 and Task # 14

// var arr =  ["Cake", "Apple Pie", "Cookie", "Chips", "Paties"];
// input = prompt("Welcome To ABC Bakery. What do you want to order sir/ma'am?");
// if(input === "Cake"){
//     alert("Cake is available at index0 in our bakery")
// }
// if(input === "Apple Pie"){
//     alert("Apple Pie is available at index1 in our bakery")
// }
// if(input === "Cookie"){
//     alert("Cookie is available at index2 in our bakery")
// }
// if(input === "Chips"){
//     alert("Chips is available at index3 in our bakery")
// }
// if(input === "Paties"){
//     alert("Paties is available at index4 in our bakery")
// }
// if(input === "Pastry"){
// 	alert("Pastry is not available in our bakery!")
// }

// ==== Chapter 21-25 and Task # 15

// var password = prompt("Enter Your Password")
// var str = "password";
// /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(str);
// if(password === "A-Z" && "a-z" && "0-9"){
//     alert("You have  entered a valid password");
// }
// else if(password !== "A-Z" && "a-z" && "0-9"){
//     alert("You have not entered a valid password")
// }
// else if(password !== password.length){
//     alert("You have not entered 7 didits in your password ")
// }else{
//     alert("You have entered a valid password"+ "<br>"+ "Welcome!")
// }


// ==== Chapter 21-25 and Task # 16

// var university = "University Of Karachi";
// var arr = university.split(', ');
// document.write(arr);

// ==== Chapter 21-25 and Task # 17

// var str = "Pakistan";
// var result = str.charAt(str.length-1);
// document.write(result+"<br>");
// document.write("User input : Pakistan"+"<br>");
// document.write("Last character of input : n");

// ==== Chapter 21-25 and Task # 18

// var r = "the quick brown fox jumps over the lazy dog";
// document.write(r.match(/the/g).length+"<br>");
// document.write("Text : The quick brown fox jumps over the lazy dog"+"<br>");
// document.write("There are 2 occurences of word 'the'");

// ==== Chapter 26-30 and Task # 1

// var number = 3.45214;
// document.write("number : "+number+"<br>")
// document.write("round off value : "+Math.round(number)+"<br>");
// document.write("floor value : "+Math.floor(3.45214)+"<br>");
// document.write("ceil value : "+Math.ceil(number));

// ==== Chapter 26-30 and Task # 2

// var number = -2.673;
// document.write("number : "+number+"<br>")
// document.write("round off value : "+Math.round(number)+"<br>");
// document.write("floor value : "+Math.floor(number)+"<br>");
// document.write("ceil value : "+Math.ceil(number));

// ==== Chapter 26-30 and Task # 3

// var number = -4;
// document.write(Math.abs(number)+"<br>");
// document.write("The absolute value of -4 is 4");

// ==== Chapter 26-30 and Task # 4

// var dice = Math.random();
// document.write("random dice value : "+dice+"<br>");

// ==== Chapter 26-30 and Task # 5

// var prob1 = Math.floor(Math.random() * 2) +1;

// var prob2 = Math.floor(Math.random() * 2) +1;

// if( prob1 === prob2){
//    document.write('You Got TAIL');
//  }else{
//    document.write('You Got HEAD');

// ==== Chapter 26-30 and Task # 6

// var x = Math.floor((Math.random() * 100) + 1);
// document.write(x);

// ==== Chapter 26-30 and Task # 7

// var kilograms = prompt("Enter your weight in kilograms");
// if(kilograms === "50"){
//     document.write("The weight of user is 50");
// } 
// else if(kilograms === "50kgs"){
//     document.write("The weight of user is 50 kilograms");
// }
// else if(kilograms === "50.2kgs"){
//     document.write("The weight is 50.2 kilograms");
// }
// else if(kilograms === "50.3kgs"){
//     document.write("The weight of user is 50.3 kilograms");
// }else{
//     document.write("Please Enter your weight");
// }

// ==== Chapter 26-30 and Task # 8

// var number =  prompt("Enter a number between 1 and 10");
// if(number === "1"){
//     alert("Try Again ! \n Prevent this page from creating additional dialogs");
// }
// else if(number === "2"){
//     alert("Try Again ! \n Prevent this page from creating additional dialogs");  
// }
// else if(number === "3"){
//     alert("Try Again ! \n Prevent this page from creating additional dialogs");  
// }
// else if(number === "4"){
//     alert("Try Again ! \n Prevent this page from creating additional dialogs");  
// }
// else if(number === "5"){
//     alert("Congrulations ! \n You have entered the correct number");  
// }
// else if(number === "6"){
//     alert("Try Again ! \n Prevent this page from creating additional dialogs");  
// }
// else if(number === "7"){
//     alert("Try Again ! \n Prevent this page from creating additional dialogs");  
// }
// else if(number === "8"){
//     alert("Try Again ! \n Prevent this page from creating additional dialogs");  
// }
// else if(number === "9"){
//     alert("Try Again ! \n Prevent this page from creating additional dialogs");  
// }
// else if(number === "10"){
//     alert("Try Again ! \n Prevent this page from creating additional dialogs");  
// }else{
//     alert("Please Enter A Number");
// }

// ==== Chapter 31-34 and Task # 1

// var rightnow = new Date();
// document.write(rightnow);

// ==== Chapter 31-34 and Task # 2

// var d = new Date();
// var currentmonth = d.getMonth();
// document.write(currentmonth);

// ==== Chapter 31-34 and Task # 3

// var daynames = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var theday = now.getDay();
// var nameoftoday = daynames[theday];
// document.write(nameoftoday+"<br>");

// ==== Chapter 31-34 and Task # 4

// var daynames = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var theday = now.getDay();
// var nameoftoday = daynames[theday];
// if(daynames === "Sun" && "Sat"){
//     alert("It's Fun day !");
// }else{
//     alert("It's Working Day")
// }

// ==== Chapter 31-34 and Task # 5

// var days ;
// alert("First Fifteen Days Of The Month");
// for(days = 0; days <= 15; days++){
//     document.write(days);
// }

// ==== Chapter 31-34 and Task # 6

// var dt = new Date();
// var d = new Date("January 1,1970: 01:15:00:526");
// var n = d.getUTCDate();
// var milli = d.getUTCMilliseconds("526");
// var min = d.getUTCMinutes("15");
// document.write(dt+"<br>");
// document.write(milli+"<br>");
// document.write(min);

// ==== Chapter 31-34 and Task # 7

// var newTime = new Date()
// var hours = newTime.getHours()
// if (hours<=11){
//     document.write("Its AM")
// }else{
//     document.write("Its PM")
// }

// ==== Chapter 31-34 and Task # 8

// var newDate = new Date("Dec 31,2020")
// var newDatemilli = newDate.getTime()
// var currentDate = new Date()
// var currentDatemilli = currentDate.getTime()
// var diff = newDatemilli - currentDatemilli
// var seconds = diff/(1000*60*60*24)
// document.write(seconds)

// ==== Chapter 31-34 and Task # 9

// var lastDate = new Date("March 1,2020")
// var lastDatemilli = lastDate.getTime()
// var currentDate = new Date()
// var currentDatemilli = currentDate.getTime()
// var diff = currentDatemilli - lastDatemilli
// var days = diff/(1000*60*60*24)
// days = Math.floor(days)
// document.write(days + " "+ "Days Since 1st Ramadan")

// ==== Chapter 31-34 and Task # 10

// var date = new Date()
// date.toString();
// document.write(date);

// ==== Chapter 31-34 and Task # 11

// var date = new Date()
// date.toString();
// document.write(date);

// ==== Chapter 31-34 and Task # 12

// var object = new Date();
// var reset = alert("6/22/1920");

// ==== Chapter 31-34 and Task # 1

// var dob = "1997";
// var present = "2020";
// document.write("Your Age is : "+ (present - dob)+"<br>" +"Your Birth Year is 1997");

// ==== Chapter 31-34 and Task # 14
// var Company = "K-ELECTRIC BILL"
// var CustomerName = "Yasir Khan";
// var CurrentMonth = "June";
// var numberofunits = 410;
// var  chargeperunit = 16;
// var latepaymentsurcharge = 150;
// var netamountPayablewithinduedate = numberofunits * chargeperunit;
// var grossamountpayableafterduedate = netamountPayablewithinduedate +latepaymentsurcharge;
// document.write(Company+"<br>"+"Cuatomer Name :"+CustomerName+"<br>"+"Current Month : "+CurrentMonth+"<br>"+"Number Of Units : "+numberofunits+"<br>"+"Charge Per Unit"+chargeperunit+"<br>"+"Net Amount Payable Within Due Date :"+netamountPayablewithinduedate+"<br>"+"Gross Amount Payable After Due Date"+grossamountpayableafterduedate);

// === Chapter 35-38 abd Task # 1

// function getdate(){
//     var now = new Date();
//     document.write(now)

// }
// getdate();

// === Chapter 35-38 abd Task # 2

// function getfullname(){
//     var firstName = prompt("Enter Your First Name");
//     var lastName = prompt("Enter Your Last Name");
//     alert("Welcome");
// }
// getfullname();

// === Chapter 35-38 abd Task # 3

// function getadd(){
//     var firstnum = prompt("Enter Your First Number");
//     var secondnum = + prompt("Enter Your Number"); 
//     var sum = +firstnum + +secondnum;
//     document.write(sum);
// }
// getadd();

// === Chapter 35-38 abd Task # 4

// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     }
//     else if(opr === "*"){
//         return num1 * num2
//     }else{
//         return "Incorrect Operator!"
//     }
// }

// var result = calc(5,"+",5);
// var result1 = calc(4,"-",3);
// var result2 = calc(4,"*",9);
// document.write(result+ "<br>");
// document.write(result1+ "<br>");
// document.write(result2);

// === Chapter 35-38 abd Task # 5

// var x =prompt("Enter a number");
// function myfunction(){
    
//     var result = x*x;
//     document.write(result);
// }
// myfunction();

// === Chapter 35-38 abd Task # 6

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = prompt("Enter a number");
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);


// === Chapter 35-38 abd Task # 7

// num1 = prompt("Enter a number")
// function sum() 
// {
//     var num = +num1 + +1;
//     document.write(num);
    
// }
// sum();
   
// === Chapter 35-38 abd Task # 8

// var y = prompt("Enter The Value of Base")
// var z = prompt("Enter The Value of Perpendicular")

// function phythagoras1(){
//     var x = (y*y)+(z*z);
//     document.write("The value of Hypotenuse : "+x);
// }
// phythagoras1();

// var y = prompt("Enter The Value of Base")
// var z = prompt("Enter The Value of Perpendicular")

// function phythagoras(){
//     var x = (y*y)+(z*z);
//     document.write("The value of Square : "+x);
// }
// phythagoras();

// === Chapter 35-38 abd Task # 8


//     var arr=prompt("enter any string")
//     arr.length
//     var arr1=[]
//     for(i=arr.length;i>=0;i--){
//     arr1.push(arr[i])    
//     }
// var a=arr1.slice(0,arr1.length)
// a=a.toString()
// document.write(a)

// === Chapter 35-38 abd Task # 11

// var msg =prompt("enter any message")
// var str=msg.length
// var con =msg.slice(0,msg.indexOf(" "))
// document.write(con)
// var firstletter=con.charAt(0)
//  firstletter= firstletter.toUpperCase()
// document.write(firstletter + con.slice(1))

// === Chapter 35-38 abd Task # 14

// function calcCircumferrence(r){
//     var result=2*(22/7)*r
//     return result

// }
// document.write( calcCircumferrence(7)+"<br>")
// function square(a){
//         var result=a*a
//         return result
//     }
// function calcArea(){
//     var re9sult1 = 3.142*(square(7))
//     return result1
// }
// document.write(calcArea())



