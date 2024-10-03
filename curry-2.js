const sum = (...args) => {
    if(!args.length) {
        return 0
    }
    
    let total = 0;
    for(let i of args) {
        total+=i
    }

    return function(...arguments) {
        if(arguments.length>0) {
            let subTotal = 0;
            for(let i=0; i< arguments.length; i++) {
                subTotal+=arguments[i]
            }
            return sum(total+subTotal)
        } else {
            return total
        }
    }
}

const res = sum(1, 2, 3, 4)();
const res1 = sum(1)(2)(3)(4)();

const res2 = sum(1,2)(3,4)()
const res3 = sum(1,2, 3)(4)()
const res4 = sum(1)(2, 3,4)()
const res5 = sum()

console.log(res1, res, res2, res3, res4, res5)

