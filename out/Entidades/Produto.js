"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    Object.defineProperty(Product.prototype, "getValorProduto", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.default = Product;
