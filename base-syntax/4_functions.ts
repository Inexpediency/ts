function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string):string {
    return str.trim().toUpperCase()
}

//

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

function position(): MyPosition
function position(a: number, b: number): MyPosition

function position(a?: number, b?:number) {
    if (!a && !b) {
        return { x: undefined, y: undefined }
    }

    if (a && !b) {
        return { x: a, y: undefined, default: '2' }
    }

    return { x: a, y: b }
}

console.log(position())
console.log(position(1, 2))
