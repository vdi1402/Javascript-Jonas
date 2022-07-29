//creating objects using object literal syntax

let myDetails = {
  firstName: "vidhi",
  lastName: "Tomar",

  PhoneNumber: 7011402547,
  age: 2022 - 1999,
  friends: ["megha", "bhaskar", "tannu", "Ashu"],
};

console.log(myDetails);

//ways of getting Properties from an Objects
// using the Dot notation

console.log(myDetails.firstName, myDetails.lastName);

//using the Bracket Notation
console.log(myDetails["firstName"]);

// example: let's say a user gets a prompt that what he wants to know about vidhi
/*
let knowAboutVidhi = prompt(
  "what do you want to know about vidhi choose between firstName , lastName , age , friends"
);

console.log(myDetails.knowAboutVidhi); //the dot notaion will not work here because knowAboutVidhi is nt property of myDetails so here we need to use bracket notation
console.log(myDetails[knowAboutVidhi]);
*/
myDetails.song = "kesariya tera";

console.log(`${myDetails.firstName} has ${myDetails.friends.length} friends and ${myDetails.friends[0] } is my bestie! `)

