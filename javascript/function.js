//normal function
function addition() {
    let a = 10, b = 20;
    console.log('Addition of ' + a + ' & ' + b + ' :' + (a + b));
}

addition();

//call by value

function multiplication(c, d) {

    console.log('Multiplication of ' + c + ' & ' + d + ':' + (c * d));

}

let x = 10, y = 2;

multiplication(x, y);

//return value.
function squre(number) {
    sqr=number*number;
    return sqr;
}

let a=9;

console.log('Squre of '+a+' :'+squre(a));