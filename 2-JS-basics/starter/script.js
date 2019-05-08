/****************************
* Variables and Data Types
*

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);


job = 'Teacher';
console.log(job);

//Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';

*/

/*********************
 * Variable mutation and type coercion


 var firstName = 'John';
 var age = 28;

 //Type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried);

 //Variable mutation
 age = 'twenty eight';
 job = 'driver';

 alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried);

 var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName)
*/

/*************************
 * Basic Operators
 

 var now, yearJohn, yearMark, ageJohn, ageMark;
     now = 2019;
    ageJohn = 28;
    ageMark = 33;
    yearJohn = now - ageJohn;
    yearMark = now - ageMark;

 console.log(yearJohn)

 //Math operators
 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 2);

 //Logic operators
var johnOlder = ageJohn > ageMark;
    console.log(johnOlder)

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
var x;
console.log(typeof x);

*/

/*******************
 * Operator precedence

 var now = 2019;
 var yearJohn = 1989;
 var fullAge = 18;

 var isfullAge = now - yearJohn >= fullAge;
 console.log(isfullAge)

 //table of precedence in resource manual

 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;

 console.log(average);

 //multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y)

 //More operators
 x *= 2; 
 console.log(x);
 x++;
 console.log(x);
*/


 /*******************************
  * Challenge 1
  */

  /*
  M & J comparing BMI
  BMI = mass / height^2

1.   Store M & J mass and height as variables
2. Calculate BMIs
3. Create bool variable with information about whether Mark has higher BMI than John.
4. Print string containing the variable. 


var jMass, mMass, jHeight, mHeight;
jMass = 92;
jHeight = 1.95;
mMass = 78;
mHeight = 1.69;

function calcBMI(height1, mass1, height2, mass2){
var calculated1 = mass1 / (height1 * height1);
var calculated2 = mass2 / (height2 * height2);
return console.log(calculated1 > calculated2);
}

calcBMI(jHeight, jMass, mHeight, mMass)

****/



/******
 * If/else and flow control
 

 var firstName = 'John'
 var civilStatus = 'single';

 if (civilStatus === 'married'){
     console.log(firstName + ' is married!')
 } else{
     console.log( firstName + ' will hopefully marry soon :)');
    
 }


 //using bool vals
 var isMarried = true;

 //if (true/false is stored in var name, no need to equate)
 if (isMarried){
    console.log(firstName + ' is married!')
} else{
    console.log( firstName + ' will hopefully marry soon :)');
}

//Retry challenge 1

var jMass, mMass, jHeight, mHeight;
jMass = 92;
jHeight = 1.95;
mMass = 78;
mHeight = 1.69;

var BMImark = mMass / (mHeight * mHeight);
var BMIjohn = jMass / (jHeight * jHeight);

if (BMImark > BMIjohn){
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.' )
}

/****
 * Realized the mathematical assumption of BMI calculations is that when unfurled, your skin's surface area is a square based on your height. Calculates the ratio of surface area to mass.
 */


 /************************
  * Bool logic


  var firstName = 'John';
  var age = 21;

  if(age < 13){
     console.log(firstName + ' is a boy.')
  } else if (age >= 13 && age < 20) { //Between 13 and 20;; age >= 13 AND age < 20)
     console.log(firstName + ' is a teenager.')
  } else if (age >= 20 && age < 30 ){
    console.log(firstName + ' is a young man.')
  } else {
    console.log(firstName + ' is a man.')
  }

  */








  /******
   * Ternary Operator and Switch Statements

var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');



//My own invention below:
/**
 *  Bartender!!
 * 
var age = prompt('Bartender: How old are you?');
var drink = age >= 21 ? 'beer' : 'juice';

age >= 21 ?
console.log('You\'re pretty old. Have a ' + drink +'!') : console.log('You\'re too young to be drinking! How about a ' + drink + '?')



//Switch statement

var job = 'cop';
switch (job) {
    case 'teacher' : 
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver' : 
        console.log( firstName + ' drives an Uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default : 
        console.log(firstName + ' is a student.')
}


/*  Translate to a switch statement
var firstName = 'John';
var age = 21;

if(age < 13){
   console.log(firstName + ' is a boy.')
} else if (age >= 13 && age < 20) { //Between 13 and 20;; age >= 13 AND age < 20)
   console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30 ){
  console.log(firstName + ' is a young man.')
} else {
  console.log(firstName + ' is a man.')
}


switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
    console.log(firstName + ' is a man.');
}


*/



/****
 * Truthy falsy and equality operators

 // falsy values: undefined, null, 0, '', NaN
 // truthy: NOT falsy

 var height;

 height = 23;

 if(height || height == 0) {
     console.log('Variable is defined');
 } else {
     console.log('Variable is not defined.')
 }

 //using == {type coercion} vs === {strict}

 if (height == '23') {
     console.log(' The == does type coercion!')
 }

 */





 /****** CHALLENGE #2: LOGIC WINNERS
  * 
J & M play quiddich.
J's team scored 89, 120, 103 points
M's team 116, 94, 123

1. Average score
2. Which team has higher average?
3. Change scores to alter winners.

4. L's team 97, 134, 105
5. generate different outcomes to test the logic 

function calcAvScore(scores) {
   var avgScore = (scores[0] + scores[1] + scores[2]) / 3;
   return console.log(avgScore)
}

var johnScore = (89 + 120 + 103) / 3;
var markScore = (116 + 94 + 123) / 3;
var louiseScore = (97 + 117 + 110) / 3;

if (johnScore > markScore){
    console.log('John wins with ' + johnScore + ' points')
} else if (markScore > johnScore){
    console.log('Mark wins with ' + markScore + ' points')
} else {
    console.log('Nobody wins this time.')
}

*/

/******
 * FUNCTIONS
 

 function calcAge(birthYear) {
    return 2019 - birthYear
 };

var ageJohn = calcAge(1995);

//Function Declaration: creates a function in the environment accessible to expressions
function retirementYears(year, firstName){
    var age = calcAge(year);
    var retirement = 65 - age;

    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years');}
    else if (retirement < 0){
        console.log( firstName + ' is already retired!')
    }
}

retirementYears(1990, 'John');
retirementYears(1801, 'Anne');


//Function Expression: produces an immediate result
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives an Uber in NYC!';
        case 'designer':
            return firstName + ' designs websites!';
        default:
            return firstName + ' does something else.';
    }
};

console.log(whatDoYouDo('teacher', 'James'));
*/





/***
 * ARRAYŠ
 
var names = ['Jon', 'Circe', 'Hodor'];

//not cannon
var years = new Array(1990, 1969, 1948);

//elements start from 0 init
console.log(names[0]);
console.log(names.length);

names[1] = 'Bran';
names[names.length] = 'Arya';
console.log(names);


//Different datatypes

var nightsWatch = ['Jon', 'Snow', 'Castle Black']

nightsWatch.push('resigned');
nightsWatch.unshift('Bastard');
nightsWatch.pop()
console.log(nightsWatch);

//locate element position
console.log(nightsWatch.indexOf(20))

//test if element is in array
var isNW = nightsWatch.indexOf('Jon') === -1 ? 'Jon is not in the nights watch anymore.' : 'Jon!';
console.log(isNW);

*/


/**
 * CODING CHALLENGE 3


 'When less than $50, tip 20%,  When between 50 and 200 tip 15%, when over $200, 10% '
 //return 2 Arrays: all 3 tips, all 3 final amounts


 function tipCalculator(price){
    //control
    var percentage
    if (price < 50){
        percentage = 0.20;
    } else if (price > 50 && price < 200){
        percentage = 0.15;
    } else {
        percentage = 0.10
    }
    return percentage * price;
 }

 //test
console.log(tipCalculator(148));
tipCalculator(270);

var totals, tips;
var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])]

console.log(tips)

var totals = [bills[0] + tips[0],
            bills[1] + tips[1],
        bills[2] + tips[2]]

console.log(totals)
*/




/*********
 * Objects and properties


 //Orderless blobs of information with properties
 var jonSnow = {
    firstName: 'Jon',
    wolfName : 'Ghost',
    sisters: 2,
    brothers: 4,
    occupation: 'King',
    parents: ['Ned Stark', 'Catlynn Stark', 'Rhaegar Targaryan', 'Lyanna Stark'],
    bestfriends: ['Tormund'],
    isMarried: false
 }

 console.log(jonSnow)


// recall properties uing the dot operator
jonSnow.isMarried

//new Object syntax
var aryaStark = new Object();
aryaStark.firstName = 'Arya';
//empty property
aryaStark.wolfName = '';

 */






/*******************
 *Objects and methods


 var jonSnow = {
    firstName: 'Jon',
    birthYear: 1991,
    wolfName : 'Ghost',
    sisters: 2,
    brothers: 4,
    occupation: 'King',
    parents: ['Ned Stark', 'Catlynn Stark', 'Rhaegar Targaryan', 'Lyanna Stark'],
    bestfriends: ['Tormund'],
    isMarried: false,
    //read another value from the object into a method-function using the `this` keyword
    calcAge: function(){
        return 2019 - this.birthYear;
    }
 };

jonSnow.age = jonSnow.calcAge();
*/




/********
 * CHALLENGE #4
 
  M & J comparing BMI
  BMI = mass / height^2

1.   Store M & J mass and height as an object
2. Calculate BMIs using a method
3. Create bool variable with information about whether Mark has higher BMI than John.
4. Print string containing the name and BMI of the higher.

var John = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.5,
    mass: 185,
    BMI: function(){
        this.calculatedBMI = this.mass / (this.height * this.height);
        return this.calculatedBMI;
    }
}
John.BMI()


var Mark = {
    firstName: 'Mark',
    lastName: 'Markham',
    height: 1.5,
    mass: 125,
    BMI: function(){
        this.calculatedBMI = this.mass / (this.height * this.height);
        return this.calculatedBMI;
    }
}
Mark.BMI()


if (John.calculatedBMI > Mark.calculatedBMI) {
    console.log(John.firstName + ' ' + John.lastName + ' has a BMI of ' + John.calculatedBMI);
    } else if (Mark.calculatedBMI > John.calculatedBMI) {
    console.log(Mark.firstName + ' ' + Mark.lastName + ' has a BMI of ' + Mark.calculatedBMI);
    } else {
    console.log('It\'s a tie')};
*/





/************
 * LOOPS IN JAVASCRIPT
 

 //The FOR loop

//initialize counter by setting initial value, sep with `;` 
//then follow with condition, then the function of incrementation

for (var i = 1; i <= 10; i +=2 ) {
    console.log(i)
}

// i = 0, 0 < 10  true, log i to console, i++ 
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 9, 1 < 10 true, log i to console, i++
// i = 10, 10 < 10 false, exit the loop!

// use += to reassign the calculated value to i
var nightsWatch = ['Jon', 'Snow', 'Castle Black']

for (var i = 0; i < nightsWatch.length; i++) {
  console.log(nightsWatch[i])
};


//WHILE 
var i = 0;
while(i < nightsWatch.length){
    console.log(nightsWatch[i]);
    i++;
};



var names = ['Jon', 2, 'Circe', 'Hodor', 'Rob', 'Arya', 'Brandon', 'Sandor', 'Sansa'];

for (var i = 0; i < names.length; i++){

    //if and continue can be used without braces
    //only execute log if type is string; will continue through whole loop and skip nontypes

    if (typeof names[i] !== 'string') continue;

    console.log(names[i]);
};


for (var i = 0; i < names.length; i++){

    //if and continue can be used without braces
    //only execute log if type is string. break out of loop if not!

    if (typeof names[i] !== 'string') break;

    console.log(names[i]);
};

//Looping backwards
var names = ['Jon', 2, 'Circe', 'Hodor', 'Rob', 'Arya', 'Brandon', 'Sandor', 'Sansa'];

for (var i = names.length; i >= 0; i--){

    //if and continue can be used without braces
    //only execute log if type is string; will continue through whole loop and skip nontypes

    if (typeof names[i] !== 'string') continue;

    console.log(names[i]);
};
*/






/******
 * TIP CALCULATOR REBOOT 
 * CHALLENGE # 5
 

 
'When less than $50, tip 20%,  When between 50 and 200 tip 15%, when over $200, 10% '
//return 2 Arrays: all TIPS, all TOTALS


var fam1 = {
    famName: 'John',
    bills:[124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.total = [];

        for( var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50){
                percentage = 0.20;
            } else if (bill > 50 && bill < 200){
                percentage = 0.15;
            } else if (bill > 200) {
                percentage = 0.10};
         this.tips[i] = percentage * bill;
         this.total[i] = bill + bill * percentage;
            };
    }
};

fam1.calcTips();
console.log(fam1);

'MARK'

var fam2 = {
    famName: 'Mark',
    bills: [150, 77, 110, 90, 10],
    calcTips: function() {
    this.tips = [];
    this.total = [];

    for( var i = 0; i < this.bills.length; i++) {
        var percentage;
        var bill = this.bills[i];

        if (bill < 100){
            percentage = 0.20;
        } else if (bill >= 100 && bill < 300){
            percentage = 0.10;
        } else {
            percentage = 0.25;
        }
         this.tips[i] = percentage * bill;
         this.total[i] = bill + bill * percentage;
        };
    }
}

fam2.calcTips();
console.log(fam2)

*/