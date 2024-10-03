let obj = {
    i: 0
}

const handler = {
    get(target, property) {
        if(property === "i") {
            target[property] = target[property] + 1

            return target[property]
        }
    }
}


obj = new Proxy(obj, handler)

console.log(obj.i)
console.log(obj.i)
console.log(obj.i)