const express = require("express");
const app = express();

const port = 80;

app.get("/", (req, res)=>{
    res.send("This is the homepage of myfirst express app with Pratik");
});
app.get("/about", (req, res)=>{
    res.send("This is the about page of myfirst express app with Pratik");
});
app.post("/about", (req, res)=>{
    res.send("This is the post about page of myfirst express app with Pratik");
});
//when we want to send the status code.
app.get("/this", (req, res)=>{
    res.status(400).send("This page is NOT FOUND.");
});

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})