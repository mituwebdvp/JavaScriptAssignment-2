// This function is to show hello world


/*\
 1, dfdff
 3 dfd
4. multiline comments

*/
//dfdfd


// document.getElementById("blue_box").innerHTML="This is my first experiment in javascripts";


// var count = 6;
// console.log(typeof count);




// var firstName = "Mitu";
// var lastName = "Akter";

// var fullName =firstName + " " +lastName;

// console.log(fullName);




// var num1 =20;
// var num2 =5;

// var sum = num1 + num2;

// console.log(sum / 2);


// var birthTitle = "Birth of date";
// var birthDate = "1998";
// var birthDetails = birthTitle + " " +birthDate;

// console.log(birthDetails);




// var firstNumber ="40";
// var secoundNumber ="20";

// console.log( parseInt(firstNumber) + parseInt(secoundNumber));



// var firstNumber ="40.05";
// var secoundNumber ="20";
// var sum = (parseFloat(firstNumber) + parseInt(secoundNumber));
// console.log(sum);


// var firstNumber = "40.05";
// var secoundNumber = "20";
// console.log(parseFloat(firstNumber) + parseInt(secoundNumber));


// var birthDay = "22nd september";
// var currentDate = "21st October";

// if(birthDay === "21st october") {
//     console.log("Happy Birthday.");

// } else {
//     console.log("Sorry, Today is not your birthday.");
// }


// minusfigure


// function minusNumber (parameter1 , parameter2) {
//     var result = parameter1 - parameter2 ;
//     alert(result);
// }

// minusNumber(1024,128);



// // multiplicationfigure


// function multiplicationNumber (number1 , number2) {
//     var result = number1 * number2;
//     console.log(result);
// }


// multiplicationNumber(500,5);




// return result

// function divisionNumber (number1 , number2) {
//     var result = number1 / number2;
//     return result;
// }


// var divisionresult = (divisionNumber (1024 , 128));
// var divisionresult2 = (divisionNumber (1000 , 128));
// var divisionresult3 = (divisionNumber (1100 , 128));

// alert(divisionresult);

// alert(divisionresult2);

// alert(divisionresult3);

// console.log(divisionresult,divisionresult2,divisionresult3);



// document.getElementById("click-me").onclick = function() {
//     alert('You clicked the button');
// };


// document.getElementById("hover-me").onmouseover = function() {
//     alert('You moved the cursor over the button');
// };

// document.getElementById("leave-me").onmouseout = function() {
//     alert('You moved the cursor out of the button');
// };


// document.clickHere = function() {
//     alert('On Click');
// };


                        // navbar onclick close

// document.getElementById("color_button").onclick = function() {
//     document.getElementById("color_button2").style.background = "red";
//     document.getElementById("color_button2").style.display = "inline";
//     document.getElementById("crossbar").style.display = "inline";
// }


// document.getElementById("crossbar").onclick = function() {
//     document.getElementById("color_button2").style.display = "none";
//     document.getElementById("crossbar").style.display = "none";
// }







var clickButton = document.getElementById("color_button2");
var showButton = document.getElementById("box2");


clickButton.onclick = function() {
    document.getElementById('box2').classList.add("show")
}


showButton.onclick = function() {
    document.getElementById("box2").classList.remove("show")
}