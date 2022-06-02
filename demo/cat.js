export class Cat {
    constructor(name, age, color) {
        this._name = name;
        this._age = age;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
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
