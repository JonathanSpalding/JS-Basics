//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name) {
    if (name === "Tyler"){
        return true;
    }else{
        return false;
    }
}
console.log(isTyler(name));


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName() {
    var person = prompt("Enter your name");
    return person;
}
console.log(getName());

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function getName() {
    var person = prompt("Enter your name");
    return person;
}
alert("Welcome " + getName());

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
//A parameter contains no value; it’s simply a placeholder for the value that will be passed to the function. An argument contains a value (even if it’s null or an empty string)

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
/* FALSY:
false
0
null
NaN
undefined

If it is not trusy, then it is falsy. So do an else if statement to see if it is true else it is false?
*/ "you should check if this is correct"


//Next Problem



//Create a function called myName that returns your name

  //Code Here
function myName() {
  name = "Jon Spalding";
  return name;
}
console.log(myName());  

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = name;
//Now alert the result of invoking newMyName
alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function(){
  return function(name) {
    return name;
  };
};

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

console.log(innerFn("Jon"));
