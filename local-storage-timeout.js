window.localStorage = {
    getItem(key) {
        let result = JSON.parse(window.localStorage.getItem(key))

        if(result) {
            if(result.expireTime <= Date.now()) {
                window.localStorage.removeItem(key);
                return null
            }

            return result.data
        }

        return null
    },

    setItem(key, value, maxAge= 30*60*60*1000) {

        let result = {
            data: value
        }

        if(maxAge) {
            result.expireTime = Date.now() + maxAge;
        }

        window.localStorage.setItem(key, JSON.stringify(result))
    },

    removeItem(key) {
        window.localStorage.removeItem(key)
    },

    clear() {
        window.localStorage.clear()
    }
}