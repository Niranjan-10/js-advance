const arr = []

Array.prototype.listeners = {}

Array.prototype.addListener = function(name, callback) {
    if(!this.listeners[name]) {
        this.listeners[name] = [];
    }
    this.listeners[name].push(callback)
}

Array.prototype.pushWithEvent = function(event, args) {
    this.push(...args)
    this.triggerEvent(event, args)
}

Array.prototype.popWithEvent = function(event) {
    const element = this.pop()
    // console.log(element)
    this.triggerEvent(event, element)
}

Array.prototype.triggerEvent = function(eventName, elements) {
    // console.log("======>", this.listeners)
    if(this.listeners[eventName]) {
        this.listeners[eventName].forEach((callback) => {
            callback(eventName, elements, this)
        })
    }
}

Array.prototype.removeListener = function(eventName, callback) {
    if(this.listeners[eventName]) {
        this.listeners[eventName] = this.listeners[eventName].filter((e) => e !== callback)
    }
}



arr.addListener('add', (eventName,  items, array) => {
    console.log("Items are added", items)
})

arr.addListener('remove', (eventName,  items, array) => {
    console.log("Items are removed")
})

arr.pushWithEvent('add', [4, 5])
arr.popWithEvent('remove')