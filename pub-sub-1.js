const eventHandler = function(item) {
    console.log("fired: " + item)
}

const eventHandler2 = function(item) {
    console.log("Moved: "+ item)
}

function Event() {
    this.handler = []

    this.subscribe = function(fn) {
        this.handler(fn)
    }

    this.unsubscribe = function(fn) {
        this.handler = this.handler.filter((item) => item !== fn)
    }

    this.fire = function(msg) {
        this.handler.forEach((fn) => {
            fn(msg)
        })
    }
}

const event1 = new Event();

event1.subscribe(eventHandler)
event1.fire('event #1')

event1.unsubscribe(eventHandler)
event1.fire('event #2')

event1.subscribe(eventHandler)
event1.subscribe(eventHandler2)
event1.fire('event #3')