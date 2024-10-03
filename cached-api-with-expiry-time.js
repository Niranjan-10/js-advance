const generateKey = (path, config) => {
    const key = Object
        .keys(config)
        .sort((a,b) => a.localeCompare(b))
        .map((k) => k + ":" + config[k].toString())
        .join("&")
    console.log("======>", path+key)
    return path+key
}

const makeApiCall = async (path, config) => {
    try {
        let response = await fetch(path, config);
        response = await response.json()

        return response
    } catch(e) {
        console.log("error", e)
    }

    return null
}

const cacheAPICall = (time) => {
    const cache = {}

    return async function(path, config={}) {
        const key = generateKey(path, config)

        const entry = cache[key]

        // If there is no cache data or the value is expired
        if(!entry || Date.now() > entry.expiryTime) {
            console.log("making api call")
            try {
                const value = await makeApiCall(path, config)
                cache[key] = {value, expiryTime: Date.now()+time }
            } catch(e) {
                console.log("Error")
            }
        } 

        return cache[key].value
    }
}

const call = cacheAPICall(1000)

call("https://jsonplaceholder.typicode.com/todos/1", {})
    .then((a) => console.log(a))
    .catch(err => console.log(err))

setTimeout(() => {
    call("https://jsonplaceholder.typicode.com/todos/1", {})
        .then((a) => console.log(a))
        .catch(err => console.log(err))  
}, 700)

setTimeout(() => {
    call("https://jsonplaceholder.typicode.com/todos/1", {})
        .then((a) => console.log(a))
        .catch(err => console.log(err))  
}, 2000)