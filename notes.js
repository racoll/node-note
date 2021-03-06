console.log("starting notes.js");

var addNote = (title, body) => {
  console.log("Adding note", title, body);
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = (title) => {
  console.log("Getting note", title);
};

var removeNote = (title) => {
  console.log("Removing note", title);
};

module.exports = {
  addNote,
  //same as: 'addNote: addNote' on it's own
  getAll,
  getNote,
  removeNote
};
