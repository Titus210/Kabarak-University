// get two numbers from user
var number_one = Number(window.prompt("Enter first number"));
var number_two = Number(window.prompt("Enter second number"));
var number_three = Number(window.prompt("Enter third number"));


// function to find max
function findMax(x, y, z) {
    if (x > y && x > z) {
        return x;
    }
    else if (y > x && y > z)
        return y;
    else
        return z;
}

var max = String(findMax(number_one, number_two, number_three))

console.log(max)


// display to user
document.getElementById('sum').innerHTML = max;