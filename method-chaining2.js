function computeAmount() {
    this.amount = 0

    this.thousand = function(val) {
        this.amount = 1000*val+this.amount
        return this
    }

    this.hundred = function(val) {
        this.amount = 100*val + this.amount
        return this
    }

    this.value = function() {
        return this.amount
    }
}

const result = new computeAmount()

console.log(result.thousand(2).hundred(3).value())