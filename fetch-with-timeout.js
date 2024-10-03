function fetchWithTimeOut(url, delay) {
    return new Promise((resolve, reject) => {

        const controller = new AbortController();
        const signal = controller.abort.signal;
        let timerId = null

        fetch(url, { signal }).then((res) => {
            res.json().then((result) => {
                clearTimeout(timerId)
                resolve(result)
            }).catch((err) => {
                reject(err)
            })
        }).catch((e) => {
            reject(e)
        })

        timerId = setTimeout(() => {
            console.log("Aborted")
            controller.abort()
        }, delay)
    })
}


fetchWithTimeOut("https://jsonplaceholder.typicode.com/todos/1", 0).then((resp) => {
    console.log(resp)
}).catch((e) => {
    console.log("Error", e)
})