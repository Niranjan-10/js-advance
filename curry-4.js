const add = (...x) => {
    let sum = x

    function resultFn(...y) {
        sum = [...sum, ...y];
        return resultFn
    }

    resultFn.valueOf = function() {
        return sum.reduce((a, b) => a+b, 0)
    }

    resultFn.value = valueOf

    return resultFn
}

// console.log(add(1)(2).value() == 3)
// console.log(add(1, 2)(3).value() == 6)
// console.log(add(1)(2)(3).value() == 6)
console.log(add(1)(2)+3)
