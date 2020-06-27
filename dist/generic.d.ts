declare const cars: string[];
declare const cars2: Array<string>;
declare const promise: Promise<string>;
declare function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R;
declare const merged: {
    name: string;
} & {
    age: number;
};
interface ILength {
    length: number;
}
declare function withCount<T extends ILength>(value: T): {
    value: T;
    count: string;
};
declare function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R): T[R];
declare const person: {
    name: string;
    age: string;
};
declare class Collection<T> {
    private _items;
    constructor(_items?: T[]);
    add(item: T): void;
    remove(item: T): void;
    get items(): T[];
}
declare const strings: Collection<string>;
interface Car {
    model: string;
    year: number;
}
declare function createAndValidateCar(model: string, year: number): Car;
declare const carsArray: Array<string>;
