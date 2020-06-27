namespace IForm {
    export type FormType = 'inline' | 'block'
    export type FormState = 'active' | 'disable'

    export interface FormInfo {
        type: FormType
        state: FormState
    }
}
