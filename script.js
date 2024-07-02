const body = document.querySelector("body");

promptANumber();
linkToRick();

function promptANumber() {
    let text;
    
    let n = prompt("Primality test:\n\nPlease enter your number:");
    if (n == null || n == "") {
      text = "User cancelled the prompt.";
    } else if (Number(n) == NaN) {
      text = "It is not a number";
    }
    else {
        body.innerHTML += "The number you have entered is: " + n + "<br><br>";

        if (isPrime(n)) {
            text = "It is a prime number.";
        } else {
            text = "It is not a prime number.";
        }
        body.innerHTML += text;
    }
    
}

function isPrime(n) {
    return true;
}

function linkToRick() {
    body.innerHTML += "<br><br><a href=\"https://www.youtube.com/watch?v=xvFZjo5PgG0\">Link to original paper</a>";
}