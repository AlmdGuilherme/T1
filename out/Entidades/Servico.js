"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Service = /** @class */ (function () {
    function Service(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    Object.defineProperty(Service.prototype, "getValorServico", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    return Service;
}());
exports.default = Service;
