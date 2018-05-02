console.log("starting app");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js")
const _ = require("lodash");

console.log(_.isString(true));
console.log(_.isString("Robin"));

var filteredArray = _.uniq(["Jon"]);
console.log(filteredArray);
// var res = notes.addNote();
// console.log(res);

var addition = notes.add(2,5);
console.log(addition);

// var user = os.userInfo();
//
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username} you are ${notes.age}`);
