
# Introcduction to Miller Rabin Primality Test
<button onclick="promptANumber()">Naïve Primality Test</button>
<p id="prompt"/>

<!--Theory start-->
<!--Theory ends-->

<a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Link to original paper &#129763;</a>

<script>
   const promptParagraph = document.querySelector("#prompt");
   const spacing = "<br>";
   var numberRegex = /^\d+$/;

   function promptANumber() {
      let text;
      let n = prompt("Primality test:\n\nPlease enter your number: (Recommend number less than 13 digits)", "100123456789");
      promptParagraph.innerHTML = "Running..."; // FIXME Why this one is not showing?!?!?!
      if (n == null || n == "") {
         return;
      }
      else if (numberRegex.test(n) == false) {
         alert("Please input an integer.");
      }
      else {
         let tmp = isPrime(n);
         if (tmp === true) {
            text = `${n} is a prime number.`;
         } else {
            text = `${n} is not a prime number. One factor is ${tmp}.`;
         }
         promptParagraph.innerHTML = text;
      }
   }

   // isPrime either returns true or one factor of n
   function isPrime(n) {
      n = BigInt(n);
      for (let i = BigInt(2); i <= BigInt(Math.floor(Math.sqrt(Number(n)))); i++){
         console.log(i);
         if (n % i == BigInt(0)) return i;
      }
      return true;
   }
</script>