class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}: Typescript version is ${this.version}]`
    }
}

//---

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

//---

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go(): void {
        console.log('Go')
    }
}

class Cat extends Animal {
    public serVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()

// --

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render() {
        console.log('Component on render')
    }

    info(): string {
        return 'This is component info'
    }
}
