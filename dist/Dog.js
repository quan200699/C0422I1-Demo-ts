"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(age, color) {
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
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map