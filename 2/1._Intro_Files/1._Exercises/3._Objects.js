// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 
//dot notation
console.log(myObj.message);

//bracket notation 
console.log(myObj["message"]);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age.

var myOwnObject = {
    "name": "Mathias",
    "Age": 24
}
    console.log(myOwnObject)

// --------------------------------------
// Exercise 3 - Add a property 

var stackOverflow = {};

stackOverflow.isAllowed = true

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

delete thisSong.description;

thisSong ['about'] = "Just a tribute"

console.log(thisSong)
// remove the property "description" and add a property called "about" that should say "Just a tribute." 


// --------------------------------------


//Array
var fruits = [1, "banana", {}]