// **1. Check if a number is within a given range.**
// Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

const numberSeries1 = { min: 0, max: 5 }
const numberSeries2 = { min: 4, max: 5 }
const numberSeries3 = { min: 6, max: 10 }
const numberSeries4 = { min: 5, max: 5 }


const InRange = (object, number) => {
     if ((number >= object['min']) && (number <= object['max'])) {
         return true;
     } else {
         return false;
     }
}
console.log(InRange(numberSeries1, 4));//prints true
console.log(InRange(numberSeries2, 4));//prints true
console.log(InRange(numberSeries3, 4));//prints false
console.log(InRange(numberSeries4, 4));//prints false
   

// **2. Scrabble.**
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
const scrabbleScore = [
{ tile: "N", score: 1 },
{ tile: "K", score: 5 },
{ tile: "Z", score: 10 },
{ tile: "X", score: 8 },
{ tile: "D", score: 2 },
{ tile: "A", score: 1 },
{ tile: "E", score: 1 }
]
//this one way with reduce
let maxScrabbleScore = scrabbleScore.reduce(function(tile, score) {
    return tile + score.score;
  }, 0);
  
  console.log("The player's maximum score:", maxScrabbleScore); // it prints The player's maximum score: 28


//this is another way with a loop
let sum = 0;
for (i = 0; i < scrabbleScore.length; i++) {
  sum += scrabbleScore[i].score;
}
console.log( "The player's maximum score: " + sum ); // it prints The player's maximum score: 28

////this is another way with a for in loop
let sum1 = 0;
for (const i in scrabbleScore) {
    sum1 += scrabbleScore[i].score;
    
  }

console.log( "The player's maximum score: " + sum1 );




// **3. Is it an empty object?**
// Write a program that returns true if an object is empty, and false if otherwise.


const object1 = {} 
const object2 = {a: 1} 

//this is one way
const isEmpty = object => {
    for (let key in object) {
    if (object.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
console.log(isEmpty(object1));//true
console.log(isEmpty(object2));//false

//this is another way 
const isEmpty2 = object => {
    if (Object.keys(object).length === 0 && object.constructor === Object) {
        return true;
    } else {
        return false;
    }
}
console.log(isEmpty2(object1));//true
console.log(isEmpty2(object2));//false




// **4. Counting Letters.**
// Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

//one way
const countLetters = (string) => {

    let spellChars = {};
    string.replace(/\S/g, function(l){spellChars[l] = (isNaN(spellChars[l]) ? 1 : spellChars[l] + 1);});
    return spellChars;
    }
console.log(countLetters("tree"));//it prints: { t: 1, r: 1, e: 2 }

 //a second way   
 const countLetters2 = (param) => {
      return [...param].reduce((result, nextChar) => { 
              result[nextChar] = result[nextChar] ? result[nextChar] + 1 : 1; 
              return result 
          }, {}); 
  }
  console.log(countLetters2("tree"));//it prints: { t: 1, r: 1, e: 2 }

//a 3rd way!!
  function countCharacters (testStr) {
    const charArray = testStr.split('')
    let charCount = {}
    for (let letter of charArray) {
      charCount[letter] = (charCount[letter] || 0) + 1
    }
    return charCount;
  }
  
  const test = 'a string with different characters'
  console.log(countCharacters("tree")); //it prints: { t: 1, r: 1, e: 2 }




  // **5. Free Shipping.**
// Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// - freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// - freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// - freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
const order1 = {"Sponge": 3.50, "Soap": 5.99 };
const order2 = { "Surround Sound Equipment": 499.99 };
const order3 = { "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 };

//one way of doing it
function freeShipping(object) {
  let total = 0;
   for (let property in object) {
       total += object[property];
     } 
     if (total > 50) {
       return true; 
     } else {
         return false;
        
     }
}
console.log(freeShipping(order1));//false
console.log(freeShipping(order2));//true
console.log(freeShipping(order3));//false

//another way
function freeShipping1(obj) {
  if (Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0) > 50) {
     return true;
    } else {
     return false;
    }
}

console.log(freeShipping1(order1));//false
console.log(freeShipping1(order2));//true
console.log(freeShipping1(order3));//false


// **6. Programming Object.**


const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming);


// Change the difficulty to the value of 7.
programming["difficulty"] = 7;
console.log(programming);

//Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

// - Write a command to add a new key called isFun and a value of true to the programming object.

programming.isFun = true;
console.log(programming);


// - Using a loop, iterate through the languages array and console.log all of the languages.

for (let i = 0; i < programming.languages.length; i++){
    console.log(programming.languages[i]);//will give all the languages
}

//or this way with for-in loop
for (i in programming.languages) {
  console.log(programming.languages[i]);
  
}
////ANSWER: it prints  
  //JavaScript
  // Python
  // Ruby
  // Go

// - Using a loop, console.log all of the keys in the programming object.
for (const key in programming) {
  console.log(key);
}
// //ANSWER: it prints
// languages
// isChallenging
// isRewarding
// difficulty
// isFun

// - Using a loop, console.log all of the values in the programming object.
for (const value in programming) {
  if (programming.hasOwnProperty(value)) {
    console.log(programming[value]);
 }
}
//ANSWER: it prints
// [ 'JavaScript', 'Python', 'Ruby', 'Go' ]
// true
// true
// 7
// true

// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. 

const programming2 = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
  print: function() { if (this.isChallenging === true && this.isRewarding ===true ) {
    console.log(`Learning programing languages "${this.languages}" is rewarding and challenging.`);
       }
  },  

};
programming2.print();// it prints :
// [ 'JavaScript', 'Python', 'Ruby', 'Go' ]
// true
// true
// 7
// true
// Learning programing languages "JavaScript,Python,Ruby" is rewarding and challenging.


//**Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.
console.log(programming2); 
// if you dont call the method and console.log the object it prints : "print: [Function: print]" instead of the method. It recognizes it a sa  type of function but doesnt print if without calling it.

//**Bonus**:
// - Make sure that any other code cannot delete or change properties of the object.


let frozenObject = Object.freeze(programming2);
frozenObject === programming2 ; //true

delete frozenObject.languages; // not allowed (delete)
frozenObject.profession = "doctor 👨‍⚕️ ";// it will not add it
frozenObject.age = 22; // it will not add it
frozenObject.isChallenging = false;  // not allowed (assign)
delete frozenObject.isRewarding;  // not allowed (delete)
frozenObject.isChallenging = 'No';  // not allowed (update)
frozenObject.isRewarding = 'Yes'; // not allowed (update)