"use strict";
exports.__esModule = true;
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog(age, color) {
        this._age = age;
        this._color = color;
    }
    Object.defineProperty(Dog.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}());
exports.Dog = Dog;
