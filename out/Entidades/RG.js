"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RG = /** @class */ (function () {
    function RG(valor, dataEmissao) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }
    Object.defineProperty(RG.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RG.prototype, "getDataEmissao", {
        get: function () {
            return this.dataEmissao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RG.prototype, "setNewValor", {
        set: function (value) {
            this.valor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RG.prototype, "setNewDate", {
        set: function (newDate) {
            this.dataEmissao = newDate;
        },
        enumerable: false,
        configurable: true
    });
    return RG;
}());
exports.default = RG;
