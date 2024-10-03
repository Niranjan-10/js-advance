function factorial(n) {
    if(n == 0 || n == 1) {
        return 1
    }
    return factorial(n-1) * n
}

function memoize(func) {
    const memo = {};

    return function(...args) {
        if(memo[args]) {
            console.log("======>")
            return memo[args]
        }

        memo[args] = func(...args)
        return memo[args]
    }
}

const memoizedFunc = memoize(factorial)
const a = memoizedFunc(100)
console.log(a)
const b = memoizedFunc(100)
console.log(b)

