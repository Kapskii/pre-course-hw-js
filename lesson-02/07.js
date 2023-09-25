let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = {
    ...passportMarried,
    married: true,
    address: {
        ...passportMarried.address
    }
};
passportMarried2.married = true
console.log(passportMarried);
console.log(passportMarried2);



let pow = (x,n) => {
    let result = x**n;
    console.log(result);
    return result
}




pow(3, 2) // 9
pow(3, 3) //27
