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
var cadastro_1 = __importDefault(require("./cadastro"));
var Cliente_1 = __importDefault(require("../Entidades/Cliente"));
var CPF_1 = __importDefault(require("../Entidades/CPF"));
var Entrada_1 = __importDefault(require("../io/Entrada"));
var Produto_1 = __importDefault(require("../Entidades/Produto"));
var Servico_1 = __importDefault(require("../Entidades/Servico"));
var Telefone_1 = __importDefault(require("../Entidades/Telefone"));
var RG_1 = __importDefault(require("../Entidades/RG"));
var cadastroClientes = /** @class */ (function (_super) {
    __extends(cadastroClientes, _super);
    function cadastroClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new Entrada_1.default();
        return _this;
    }
    cadastroClientes.prototype.cadastrar = function () {
        console.log('Início do cadastro de cliente(s):\n');
        var nome = this.entrada.receberTexto('Informe o nome do cliente: ');
        var nomeSocial = this.entrada.receberTexto('Informe o nome social do cliente: ');
        var valorCpf = this.entrada.receberTexto('Informe o valor do CPF: ');
        var dataCpf = this.entrada.receberTexto('Informe a data de emissão do documento (dd/mm/yyyy): ').split('/');
        var cliGender = this.entrada.receberTexto('Informe o gênero do cliente: ');
        var cliente = new Cliente_1.default(nome, nomeSocial, new CPF_1.default(valorCpf, new Date(Number(dataCpf[2]), Number(dataCpf[1]), Number(dataCpf[0]))), cliGender);
        var quantidadeRG = this.entrada.receberNumero('Quantos RG deseja cadastrar? ');
        for (var i = 0; i < quantidadeRG; i++) {
            var valorRg = this.entrada.receberTexto('Informe o valor do RG: ');
            var dataRg = this.entrada.receberTexto('Informe a data de emissão do documento (dd/mm/yyyy): ').split('/');
            cliente.adicionarRG(new RG_1.default(valorRg, new Date(Number(dataRg[2]), Number(dataRg[1]), Number(dataCpf[0]))));
        }
        var quantidadeTelefone = this.entrada.receberNumero('Quantos telefones deseja cadastrar? ');
        for (var i = 0; i < quantidadeTelefone; i++) {
            var TelDdd = this.entrada.receberTexto('Informe o DDD do Telefone: ');
            var TelNum = this.entrada.receberTexto('Informe o número do Telefone: ');
            cliente.adicionarTelefone(new Telefone_1.default(TelDdd, TelNum));
        }
        var quantidadeProdutos = this.entrada.receberNumero('Quantos produtos consumidos deseja cadastrar? ');
        for (var i = 0; i < quantidadeProdutos; i++) {
            var prodName = this.entrada.receberTexto('Informe o nome do produto consumido: ');
            var prodValue = this.entrada.receberNumero('Informe o valor do produto: ');
            cliente.adicionarProdutos(new Produto_1.default(prodName, prodValue));
        }
        var quantidadeServicos = this.entrada.receberNumero('Quantos serviços consumidos deseja cadastrar? ');
        for (var i = 0; i < quantidadeServicos; i++) {
            var servName = this.entrada.receberTexto('Informe o nome do serviço consumido: ');
            var servValue = this.entrada.receberNumero('Informe o valor do serviço: ');
            cliente.adicionarServicos(new Servico_1.default(servName, servValue));
        }
        this.clientes.push(cliente);
        console.log("".concat(nome, " foi cadastrado com sucesso!"));
        console.log("Total de clientes da empresa ".concat(this.clientes.length));
    };
    return cadastroClientes;
}(cadastro_1.default));
exports.default = cadastroClientes;
