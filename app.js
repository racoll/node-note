console.log("starting app");

//3rd party node modules
const fs = require("fs");
const _ = require("lodash");
// node modules i've created and required
const notes = require("./notes.js")


var command = process.argv[2];
console.log("Command: ", command);

if (command === "add") {
  console.log("adding new note");
} else if (command === "list") {
  console.log("listing all notes");
} else if (command === "read") {
  console.log("fetching note");
} else if (command === "remove") {
  console.log("removing note");
} else {
  console.log("command not recognised");
}
