const cars: string[] = ['Ford', 'Audi']
const cars2: Array<string> = ['Ford', 'Audi']

const promise = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve('Promise resolve')
    }, 2000)
})

promise.then(data => {
    console.log(data.toLowerCase().trim())
})

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Ruslan'}, {age: 16})
console.log(merged.name)
console.log(merged.age)
// const mergedError = mergeObjects('aa', 1) -> return error
    
// --

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `in this object ${value.length} symbols`
    }
}

console.log(withCount('Hello TypeScript'))
console.log(withCount(['I', 'Am', 'Array']))
// console.log(withCount(1)) -> Error

// --

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: 'Ruslan',
    age: '16',
}
console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job')) -> Error

// --

class Collection<T> {
    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

const strings = new Collection(['I', 'Am', 'TypeScript', 'v3.9.5'])
strings.add('!')
strings.remove('Am')
console.log(strings.items)

// --

interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    return car as Car
}

// --

const carsArray: Readonly<Array<string>> = ['Ford', 'Audi']
// carsArray.shift() -> Error
console.log(carsArray[1])

const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}
// ford.model = 'Ferrari' -> Error
