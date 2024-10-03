const asyncTask = function(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Completing ${i}`)
        }, 100*i)
    })
}

const promises = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5)
]

const asyncSeriesExecutor = (promises) => {
    if(!promises || !promises?.length) {
        return;
    }

    const promise = promises?.shift();

    promise.then((res) => {
        console.log(res)
        asyncSeriesExecutor(promises) 
    }).catch((e) => console.log(e))

}


asyncSeriesExecutor(promises);