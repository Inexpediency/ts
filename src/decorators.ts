function Log(constructor: Function) {
    console.log('\nClass')
    console.log(constructor)
}

function LogProp(target: any, propName: string | Symbol) {
    console.log('\nProperty')
    console.log(target)
    console.log(propName)
}

function LogMethod(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('\nMethod')
    console.log(target)
    console.log(propName)
    console.log(descriptor)
}

@Log
class ComponentWithLogs {
    @LogProp
    name: string

    constructor(name: string) {
        this.name = name
    }

    @LogMethod
    get componentName() {
        return this.name
    }

    @LogMethod
    logName(): void {
        console.log(`Component Name: ${this.name}`)
    }
}

// --

interface ComponentDecorator {
    selector: string
    template: string
}

function Component(config: ComponentDecorator) {
    return function <T extends { new(...args: any[]): object }>
    (Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args)

                const el = document.querySelector(config.selector)!
                el.innerHTML = config.template
            }
        }
    }
}

@Component({
    selector: '#card',
    template: `
      <div class="card">
        <div class="card-content">
          <span class="card-title"> Card Component </span>
        </div>
      </div>
    `
})
class CardComponent {
    constructor(public name: string) {}
}

const card = new CardComponent('My Card Component')

// --


