function InMemorySearch() {
    this.entities  = new Map()

    this.addDocuments = function(nameSpace, ...documents) {
        const existing = this.entities.get(nameSpace)
        if(!existing) {
            this.entities.set(nameSpace, [...documents])
        } else {
            this.entities.set(nameSpace, [...existing,...documents])
        }
    }

    this.search = function(key, filterFn, orderByFn) {
        const docs = this.entities.get(key)

        const filtered = docs.filter((doc) => filterFn(doc))

        if(orderByFn) {
            const {key, asc} = orderByFn
            return filtered.sort((a, b) => {
                if(asc) {
                    return a[key] - b[key]
                } else {
                    return b[key] - a[key]
                }
            })
        }

        return filtered
    }
}   



const searchEngine = new InMemorySearch()

searchEngine.addDocuments(
    'Movies',
    {name: 'Avenger', rating: 8.5, year: 2017},
    {name: 'Black Adam', rating: 8.7, year: 2022},
    {name: 'John Wick 4', rating: 8.2, year: 2023},
    {name: 'Black Panther', rating: 9.0, year: 2022}
)

console.log(
    searchEngine.search(
        'Movies',
        (e) => e.rating > 8.5,
        {key: 'rating', asc: false} 
    )
)