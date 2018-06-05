// Function Statments

function greet(){
    console.log('Hi');
}
greet();

//First Class Functions

function logGreeting(fn){
    fn();
}
logGreeting(greet);

// Function Expressions

var greetMe = function (){
    console.log('Hi Talha');
}

greetMe();

// In First Class 

logGreeting(greetMe);

// Using Functions Expression as Arguments

logGreeting(function(){
    console.log('Hi Talha !')
})