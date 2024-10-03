function getTestFunc() {
    let callCounter = 0;

    return async () => {
        callCounter += 1;

        if(callCounter < 5) {
            throw new Error('Not yet');
        }
    }
}

function wait(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}

function retryWithDelay(operation, retry=3, delay=50, finalError= "Failed") {
    return new Promise((resolve, reject) => {
        return operation().then(resolve).catch((e) => {
            if(retry > 0) {
                return wait(delay)
                .then(retryWithDelay.bind(null, operation, retry-1, delay, finalError))
                .then(resolve)
                .catch(reject)
            } 
            return reject(finalError)
        })
    })
}

const test = async () => {
    await retryWithDelay(getTestFunc(), 5) 
    console.log('success')

    await retryWithDelay(getTestFunc(), 3)
    console.log('Will fail before getting here')
}

test().catch(console.error)