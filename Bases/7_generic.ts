const arrayOfNums: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrs: Array<string> = ['a', 'c', 'd']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNums)
reverse(arrayOfStrs)
