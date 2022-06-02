export class Dog {
    private _age;
    private _color;

    constructor(age: number, color: string) {
        this._age = age;
        this._color = color;
    }


    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }
}
