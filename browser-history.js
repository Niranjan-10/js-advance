function BrowserHistory() {
    this.history = [] 
    this.index = -1

    this.visit = function(url){
        this.history[++this.index] = url;
        this.history.length = this.index+1
    }

    this.current = function(){
        console.log(this.history)
        return this.history[this.index]
    } 

    this.backward = function() {
        this.index = Math.max(0, --this.index)
    }

    this.forward = function() {
        this.index = Math.min(this.history.length-1, ++this.index)
    }
}




const bh = new BrowserHistory()

bh.visit('A')
console.log(bh.current())

bh.visit('B')
console.log(bh.current())


bh.visit('C')
console.log(bh.current())

bh.visit('D')
console.log(bh.current())

bh.backward()
console.log(bh.current())