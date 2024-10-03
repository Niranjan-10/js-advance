const testFunction = () => {
    let count = 0

    return function() {
        count++;
        if(count < 4) {
            throw "failed"
        } else {
            return "Hello"
        }
    }
}

const circuitBreaker = (fn, failureCount, timeThreshold) => {
    let failures = 0;
    let timeSinceLastFailure = 0;
    let isClosed = false

    return function(...args) {
        if(isClosed) {
            const diff = Date.now() - timeSinceLastFailure;

            if(diff > timeThreshold) {
                isClosed = false
            } else {
                console.log("Service unavailable")
                return;
            }
        }

        try {
            const result = fn(...args);
            failures = 0;
            return result
        } catch(error) {
            failures++;
            timeSinceLastFailure = Date.now();

            if(failures >= failureCount) {
                isClosed = true
            }
            console.log("Error")
        }
    }

}

let t = testFunction()

const c = circuitBreaker(t, 3, 200)

c()
c()
c()

c()
c()
c()
c()
c()
c()

setTimeout(() => {
    console.log(c())
}, 300)
