console.log("This is tutorial 53");
function greet(name)
{
    console.log(name + " is a good boy.");
}
let name1 = "Pratik";
let name2 = "Shubham";
let name3 = "Rohan";
let name4 = "Sagar";

greet(name1);
greet(name2);
greet(name3);
greet(name4);

// default value
// if the arguments are not passed then the functions take default values.

function greetText(name, text = "Default greetings")
{
    console.log(text + " "+ name+", Have a good day.");
}
greetText(name1, "Hello");
greetText(name1);


// if we write return at the last of any function then it returns a val.

function sum(a, b, c)
{
    return a+b+c;
    // anything written after the return value is unreachable.
}

console.log(sum(5,6,4));
