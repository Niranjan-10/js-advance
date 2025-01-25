const obj = {
    a: {
        b: {
            c: [1, 2, 3]
        }
    }
}

function get(obj, path) {
    if(path === "" || path.length === 0) {
        return undefined
    }

    if(Array.isArray()) {
        path = path.join('.')
    }

    let extractPath = []

    for(let i=0; i < path.length; i++) {
        if(path[i] !== '[' && path[i] !== ']' && path[i] !== ".") {
            extractPath.push(path[i])
        }
    }

  
    const value = extractPath.reduce((resource, path) => resource[path], obj)

    return value ? value : undefined
}



console.log(get(obj, 'a.b.c'))
console.log(get(obj, 'a.b.c.0'))
console.log(get(obj, 'a.b.c[1]'))
console.log(get(obj, 'a.b.c[3]'))