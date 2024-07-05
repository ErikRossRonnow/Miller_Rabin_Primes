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

function MillerRabin(n) { //need to fix the modpow thing!
    if (n > 2 && n % 2 == 0) {
        return false;
    }
    let s = 0;
    let t = n - 1;
    while (t % 2 == 0) {
        s = s+1;
        t = t/2;
    } //now n-1 = 2**s * t

    let x = Math.floor(Math.random() * (n-1)) + 1; //random number between 1 and n-1
    let L = new Array(n).fill(Math.pow(x, t)); //list of x**t

    for (let i = 0; i <= s; i++) {
        L[i] = Math.pow(L[i], Math.pow(2,i)) % n; 
    } // x**(2**i * t) for i=0,...,s
    
    if (Math.pow(x, n-1) % n != 1) {
        return false;
    }

    for (let j=1; j <= s; j++) { //might be wrong xD

        if ((L[j] % n) == (1 % n) && ( (L[j-1] % n) != (1 % n) || (L[j-1] % n) != (-1 % n) )) {
            return false;
        } //checking fake sqrt!
    }

    return true; //probably true bitchasss

    //need to implement some kind of way to make sure the same x doesnt get chosen twice. 

}