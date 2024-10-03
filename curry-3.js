function sum(a, b, c, d) {
    return a+b+c+d
}

let curry = (fn) => {
    let helper = (...args) => {
        if(args.length >= fn.length) {
            return fn(...args)
        } else {
            let temp = (...args2) => {
                return helper(...args, ...args2)
            }
            return temp
        }
    }

    return helper
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3, 4, 5))
console.log(curriedSum(1)(2, 3)(4,5))
// console.log(curriedSum(1)(2)(3)(4)(5))