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

    @Bind
    logName(): void {
        console.log(`Component Name: ${this.name}`)
    }
}

function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
    const origin = descriptor.value

    return {
        configurable: true,
        enumerable: false,
        get() {
            return origin.bind(this)
        }
    }
}

const card = new CardComponent('My Card Component')

const btn = document.querySelector('#btn')
btn?.addEventListener('click', card.logName)

// --

type ValidatorType = 'required' | 'email'

interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType
    }
}

const validators: ValidatorConfig = {}

function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required',
    }
}

function validate(obj: any): boolean {
    const objConfig = validators[obj.constructor.name]
    if (!objConfig) {
        return true
    }

    let isValid = true
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key]
        }
    })

    return isValid
}

class Form {
    @Required
    public email: string | void

    constructor(email?: string) {
        this.email = email
    }
}

const form = new Form()

if (validate(form)) {
    console.log(form)
} else {
    console.log('Validation Error')
}

const validForm = new Form('email@mail.io')

if (validate(validForm)) {
    console.log(validForm)
} else {
    console.log('Validation Error')
}
