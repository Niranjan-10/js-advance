const calculator = {
    total: 0,
    add: function(value) {
        this.total += value
        return this
    },
    subtract: function(value) {
        this.total -= value
        return this
    },
    multiply: function(value) {
        this.total *= value
        return this
    }
}

calculator.add(10).multiply(20).subtract(20)

console.log(calculator.total)
