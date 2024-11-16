// Number.1 


console.log("This is ex1.js");



// number.2

var firstName = "Mitu";
var lastName = "Akter";

var fullName = firstName + " " + lastName;

console.log(fullName);


var age = 25;

console.log(age);


document.getElementById("student_message").innerHTML="Hi, my name is "+ fullName +" , I am " + age +" I'm year years old and I'm learning javascript.";



// Number.3

var num1 = 101;
var num2 = 7;


document.getElementById("result").innerHTML= num1 / num2;



// number.4

    var number1 = "988866552";
    var number2 = "99087612366";
    var number3 = "876543123";

    if(number1.length == 9) {
        console.log("number1 is valid");
    } else {
        console.log("number1 is unvalid");
    }

    if(number2.length == 9) {
        console.log("number2 is valid");
    } else {
        console.log("number2 is unvalid");
    }

    if(number3.length == 9) {
        console.log("number3 is valid");
    } else {
        console.log("number3 is unvalid");
    }


    // number.5

    var power = Math.pow(32,6);

    console.log(power);
    


    // number.7

    var quantity = "25";
    console.log(quantity += quantity); 

    var number = 6;
    console.log( (7+5) / number + 2 ); 

    var pressure;
    console.log(pressure); 

    var temperature = null;
    console.log(temperature); 

    var pressure;
    console.log(typeof pressure); 

    
    var temperature = null;
    console.log(typeof temperature);


    // number.8


    // show the url with https:// here

var getAddress = document.getElementById("url_1").innerText;

var modifieAddress ="https://" + getAddress;

document.getElementById("url_2").innerText = modifieAddress;



// show the url without https:// here

var getAddress = document.getElementById("url_3").innerText;

var modifieAddress = getAddress.replace("https://" , "");

document.getElementById("url_4").innerText= modifieAddress;



