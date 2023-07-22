const fs = require("fs");
let text = fs.readFileSync("README.md", "utf-8");
console.log("The contents of the file is: \n");
console.log(text);

text = text.replace("WebDev", "BackEnd");
console.log(text);

console.log("Creating a new file.........");
fs.writeFileSync("BackEnd.text", text);