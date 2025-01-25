const str = "Ultimate Javascript / FrontEnd Guide"
const words = ["Front", "End", "Javascript"]

function highlight(str, keywords) {
    const uniqueKeyWords = new Set(keywords);

    let words = str.split(' ')

    const result = words.map( word => {
        let output = ''

        if(uniqueKeyWords.has(word)) {
            output = `<string>${word}</string>`
        } else {
            for(let i=0; i < word.length; i++) {
                const prefix = word.slice(0, i+1)
                const suffix = word.slice(i+1)

                if(uniqueKeyWords.has(prefix) && uniqueKeyWords.has(suffix)) {
                    output = `<string>${prefix}${suffix}</string>`
                    break;
                } else if(uniqueKeyWords.has(prefix) && !uniqueKeyWords.has(suffix)) {
                    output = `<string>${prefix}</string>${suffix}`
                } else if(!uniqueKeyWords.has(prefix) && uniqueKeyWords.has(suffix)) {
                    output = `${prefix}<string>${suffix}</string>`
                }
            }
        }
      return output !== ''? output : word  
    })

    return result.join(' ')
}

const result = highlight(str, words)
console.log(result)