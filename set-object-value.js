const object = { 'a':  [{ 'b' : { 'c': 3} }] }

const helper = (object, path, value) => {
    let [current, ...rest] = path;

    if(rest.length > 0) {
        if(!object[current]) {
            const isNumber = `${+rest[0]}` === rest[0]
            object.current = isNumber ? [] : {}
        }

        if(typeof object[current] !== 'object') {
            const isNumber = `${+rest[0]}` === rest[0]
            object[current] = helper(isNumber? []: {}, rest, value)
        } else {
            object[current] = helper(object[current], rest, value)
        }
    } else {
        console.log("=======>", object,value)
        object[current] = value
    }

    return object
}


const set = (object, path, value) => {
    let pathArr = path;

    if(typeof path === "string") {
        pathArr = path.replace('[', '.').replace(']', '').split('.')
    helper(object, path, value)
}
}



set(object, 'a[0].b.c', 4)
console.log(object.a[0])