const momentjs = require("moment"); //importing -es6 syntax
const bcrypt = require("bcrypt");

//moment is a module

console.log(momentjs("21072022", "DDMMYYYY").fromNow());

const originalpassword = "protect0987";
const wrongpassword = "prouiwhdw0987";
const hashedPassword = bcrypt.hashSync(originalpassword, 8);

console.log(hashedPassword);

console.log(bcrypt.compareSync(originalpassword, hashedPassword)); //true
console.log(bcrypt.compareSync(wrongpassword, hashedPassword)); //false
