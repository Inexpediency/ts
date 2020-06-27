const message: string = 'Hello'
const isFetching: boolean = true
const int: number = 3e10

const arr: Array<number> = [1, 1, 2, 3, 5]
const arr1: number[] = [1, 1, 2, 3, 5]

// Tuple
const person: [string, number] = ['Ruslan', 16]

// Any
let variable: any = 42
variable = 'any'

// Functions
function sayMyName(name: string): void {
    console.log(name)
}

// Never
function throwError(message: string): never {
    throw new Error(message)
}
function infinite(): never {
    while (true) {}
}

// Custom Types
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 12
const id2: ID = '12'

type SomeType = string | null | undefined
