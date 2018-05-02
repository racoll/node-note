console.log("starting app");

//3rd party node modules
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
// node modules i've created and required
const notes = require("./notes.js")

const argv = yargs.argv;
var command = process.argv[2];
console.log("Command: ", command);
console.log("Yargs", argv);

if (command === "add") {
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("command not recognised");
}
