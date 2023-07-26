console.log(`This is my module.`);

function average(arr)
{
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
// module.exports = {
//     avg: average,
//     name: "Pratik",
//     repo: "Github"    
// }

// Since module.exports is an object so we can also do thing like

module.exports.name = "Pratik";

// name = key and "Pratik" = value