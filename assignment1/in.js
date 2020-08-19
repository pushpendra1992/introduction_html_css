function sumOfSquares(n) {
    let sum = 0;
    while (n > 0) {
        let a = Math.sqrt(n);
        a = Math.floor(a)
        sum += 1;

        if ((a * a) === n)
            return sum;
        else
            n = n - (a * a);
    }
}

let n = 19;
let x = sumOfSquares(n);
console.log(x);



function sumOfSquares(n) {
    if (Math.sqrt(n) - Math.floor(Math.sqrt(n)) == 0)
        return 1;
    if (n <= 3)
        return n;
    let sum = n;
    for (let i = 1; i <= n; i++) {
        let sqr = i * i;
        if (sqr > n)
            break;
        else
            sum = Math.min(sum, 1 + sumOfSquares(n - sqr));
    }
    return sum;
}

let n = 18;
let x = sumOfSquares(n);
console.log(x);