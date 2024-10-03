const val = {salary: 10000}

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3)

function pipe(...args) {

    return function(val) {
        for(let f of args) {
            val = f(val)
        }

        return val
    }
}


const result = pipe(getSalary, addBonus, deductTax)(val)
console.log(result)