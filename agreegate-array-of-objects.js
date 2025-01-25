const endorsements = [
    {skill: 'css', user: 'Bill'},
    {skill: 'javascript', user: 'Chad'},
    {skill: 'javascript', user: 'Bill'},
    {skill: 'css', user: 'Sue'},
    {skill: 'javascript', user: 'Sue'},
    {skill: 'html', user: 'Sue'},
]

function aggregate(arr, on, who) {
    const agg = arr.reduce( (acc, item) => {
        const onValue = item[on]
        const whoValue = item[who]

        if(acc[onValue]) {
            acc[onValue] = {
                [on]: onValue,
                [who]: [...acc[onValue][who], whoValue]
            }
        } else {
            acc[onValue] = {
                [on] : onValue,
                [who]: [whoValue]
            }
        }

        return acc
    }, {})

    return Object.values(agg)
}

console.log(aggregate(endorsements, "user", "skill"))