let multiply = (num1, num2) => {
    return num1 * num2;
}

let toCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit - 32);
}

let padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (let i =1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}

let power = (base, expnent) => {
    let result = 1;
    for (let i = 0; i < expnent; i++) {
        result *= base;
    }
    return result;
}

let greet = (who) =>{
    console.log("hello " + who);
}

console.log(padZeros(1,5));


