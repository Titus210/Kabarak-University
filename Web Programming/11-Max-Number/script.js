// get two numbers from user
var number_one = Number(window.prompt("Enter first number"));
var number_two = Number(window.prompt("Enter second number"));


// function to find max
function findMax(x, y) {
    if (x > y) {
        return x;
    }
    else
        return y;
}

var max = String(findMax(number_one, number_two))

console.log(max)


// display to user
document.getElementById('sum').innerHTML = max;