
"use strict";

function pow(x,n) {
    let product = x;
    for (let i = 1; i < n; i++) {
        product *= x;
    }
    return product;
}

while (true) {
    let x = +prompt('input x', '');
    let n = +prompt('input n', '');
    if ((n % 1 === 0) && (n >= 1)) {
        alert(pow(x, n));
    } else {
          alert('Please make sure "n" you input is an integer!');
    }
}

