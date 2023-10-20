
// ciclo for per la stampa della lista da 1 a 100 in console
for (let i = 1; i <= 100; i++) {

    let result;
    // valori multipli sia di 5 che di 3
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";

        // valori multipli di 5
    } else if (i % 5 === 0) {
        result = "Buzz";

        // valori multipli di 3
    } else if (i % 3 === 0) {
        result = "Fizz";

    } else {
        result = i;
    }

    console.log(result)
}