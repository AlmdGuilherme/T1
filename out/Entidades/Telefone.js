"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phone = /** @class */ (function () {
    function Phone(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    Object.defineProperty(Phone.prototype, "getDDD", {
        get: function () {
            return this.ddd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "getNumero", {
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "setNewDDD", {
        set: function (ddd) {
            this.ddd = ddd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "setNewNum", {
        set: function (num) {
            this.numero = num;
        },
        enumerable: false,
        configurable: true
    });
    return Phone;
}());
exports.default = Phone;
