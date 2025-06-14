"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CPF = /** @class */ (function () {
    function CPF(valor, dataEmmissao) {
        this.valor = valor;
        this.dataEmissao = dataEmmissao;
    }
    Object.defineProperty(CPF.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CPF.prototype, "getDataEmissao", {
        get: function () {
            return this.dataEmissao;
        },
        enumerable: false,
        configurable: true
    });
    return CPF;
}());
exports.default = CPF;
