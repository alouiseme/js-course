///////////////////////////////////////
// Lecture: Hoisting
/*
//>>>>Can declare functions after using them
calculateAge(1965);

function calculateAge(year){
    console.log(2019 - year);
}

calculateAge(1990);

//>>>>Hoisting does not work for function expressions. Cannot call function expression before definition
var retirement = function(year){
    console.log(65 - (2019 - year) + ' years left until retirement.');
};

retirement(1990);


// Variables will return undefined before they are defined
console.log(age);

var age = 20;
console.log(age);


///age defined in global execution context will return global value
//age defined in function context will return local value

function forlab(){
    var age = 65;
    console.log(age);
}

forlab();
console.log(age);





///////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the differece between execution stack and scope chain



var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}


///////////////////////////////////////
// Lecture: The this keyword

calcAge(1990);

function calcAge(year){
    console.log(2019 - year);
    console.log(this);
}

var toucaBertie = {
    candle: 'Peppermint Panic Blaster',
    year: 2019,
    calcDate: function(){
        console.log(2019 - this.year);

        function innerFunction(){
            console.log(this);

        }
        innerFunction();
    }
}
toucaBertie.calcDate();
var Mike = {
    name: 'Touca',
    year: 1998,
    
}

Mike.calcDate = toucaBertie.calcDate;
Mike.calcDate();

*/