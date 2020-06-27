interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

let rect1: Rect = {
    id: '1',
    // color: '#FFFFF',
    size: {
        width: 20,
        height: 30,
    }
}
rect1.color = 'white'
// rect.id = '1' -> Error: readonly

const rect2 = <Rect>{}
const rect3 = {} as Rect

//

interface RectWithArea extends Rect{
    getArea: () => number
}

const rect4: RectWithArea = {
    id: '2',
    size: {
        width: 20,
        height: 30,
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

//

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

//

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1 px black',
    margin: '5px'
}
