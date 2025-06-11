"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Entrada_1 = __importDefault(require("../io/Entrada"));
var delete_1 = __importDefault(require("./delete"));
var DeleteCliente = /** @class */ (function (_super) {
    __extends(DeleteCliente, _super);
    function DeleteCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    DeleteCliente.prototype.delete = function () {
        var entrada = new Entrada_1.default();
        var i = 1;
        var condicao = true;
        var cliDelete = -1;
        while (condicao) {
            console.log('Lista de clientes: \n');
            this.clientes.forEach(function (cliente) {
                console.log("\n            [".concat(i, "] -  Nome: ").concat(cliente.nome, " | ").concat(cliente.getCpf.getValor, " \n            "));
                i++;
            });
            cliDelete = entrada.receberNumero('Qual cliente deseja excluir do cadastro: ');
            if (cliDelete < 1 || cliDelete > this.clientes.length) {
                console.log('Insira um valor váliod');
            }
            else {
                condicao = false;
            }
        }
        cliDelete = cliDelete - 1;
        this.clientes.splice(cliDelete, 1);
        console.log('Cliente removido da lista da empresa!');
    };
    return DeleteCliente;
}(delete_1.default));
exports.default = DeleteCliente;
