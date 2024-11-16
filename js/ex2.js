

// 1 Number


function divisionNumbers(c) {
    var result = (9 * c / 5) + 32
    return result;
}

var divisionResult = divisionNumbers(38);
console.log(divisionResult);


document.getElementById("fahr_1").innerHTML=divisionResult;



function divisionNumber(c) {
    var result = (9 * c / 5) + 32
    return result;
}

var divisionResult = divisionNumber(24);

console.log(divisionResult);

document.getElementById("fahr_2").innerHTML = divisionResult;



function divisionNumber(c) {
    var result = (9 * c / 5) + 32
    return result;
}

var divisionResult = divisionNumber(-1);

document.getElementById("fahr_3").innerHTML=divisionResult;



// 2 number


var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
classification.shift();
console.log(classification);


var classification = [ "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
classification.shift();
console.log(classification);


var classification = [ "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
classification.shift();
console.log(classification);
document.getElementById("best_students").innerHTML = classification;




// 3 number

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}


// A)

console.log(course.title);
document.getElementById("course_title").innerHTML = course.title;


// B)

console.log(course['categories'][0]);
document.getElementById("main_category").innerHTML = course['categories'][0];


// C)

function number ( num1, num2, num3, num4, num5,) {
    var sum = num1 + num2 + num3 + num4 + num5 ;
    console.log(sum);
}

number(420,80,33,20,4);

var average=(420/557)*100;
console.log(average);

var roundNumber = Math.round(75.40394973070018);
console.log(roundNumber);

var name = "75";
name += "%";

console.log(name);

document.getElementById("reviews_5_stars").innerHTML = name;



// 4 number

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.pop();
shoppingList.shift();
shoppingList.unshift("Chocolate");
console.log(shoppingList);


var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.push("Cheese");
shoppingList.push("Eggs");
console.log(shoppingList);
