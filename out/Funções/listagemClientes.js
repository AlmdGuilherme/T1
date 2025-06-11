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
var listar_1 = __importDefault(require("./listar"));
var Entrada_1 = __importDefault(require("../io/Entrada"));
var listagemClientes = /** @class */ (function (_super) {
    __extends(listagemClientes, _super);
    function listagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    listagemClientes.prototype.listagem = function () {
        if (this.clientes.length === 0) {
            console.log('Ainda não há clientes cadastrados!');
        }
        else {
            console.log('Lista de Clientes: ');
            this.clientes.forEach((function (cliente) {
                console.log("\n          Nome: ".concat(cliente.nome, "\n          Nome Social: ").concat(cliente.nomeSocial, "\n          CPF: ").concat(cliente.getCpf.getValor, "\n          "));
                console.log('-'.repeat(25));
            }));
        }
    };
    listagemClientes.prototype.listagemUpdate = function () {
        if (this.clientes.length === 0) {
            console.log('Ainda não há clientes cadastrados!');
        }
        else {
            console.log('Lista de Clientes: ');
            var i_1 = 1;
            this.clientes.forEach((function (cliente) {
                console.log("\n            ".concat(i_1, " | ").concat(cliente.nome, "\n          "));
                console.log('-'.repeat(25));
                i_1++;
            }));
        }
    };
    listagemClientes.prototype.moreProdServ = function () {
        if (this.clientes.length === 0 || this.clientes.length < 10) {
            console.log('Ainda não há clientes o suficiente cadastrados!');
        }
        else {
            var clientesConsumo_1 = [];
            var entrada = new Entrada_1.default();
            var opcao = entrada.receberNumero('1 - Listar por produtos | 2 - Listar por serviços - ');
            switch (opcao) {
                case 1:
                    console.log('Listagem dos 10 clientes que mais consumiram produtos');
                    this.clientes.forEach((function (cliente) {
                        var totalProdutos = cliente.getProdutosConsumidos.length;
                        clientesConsumo_1.push({ client: cliente, consumoTotal: totalProdutos });
                    }));
                    clientesConsumo_1.sort(function (a, b) { return b.consumoTotal - a.consumoTotal; });
                    for (var i = 0; i < 10; i++) {
                        var item = clientesConsumo_1[i];
                        console.log("\n              ".concat(i, "\u00B0 Cliente:\n              Nome | ").concat(item.client.nome, "\n              Total de produtos consumidos | ").concat(item.consumoTotal, "\n            "));
                    }
                    break;
                case 2:
                    console.log('Listagem dos 10 clientes que mais consumiram serviços');
                    this.clientes.forEach((function (cliente) {
                        var totalServicos = cliente.getServicosConsumidos.length;
                        clientesConsumo_1.push({ client: cliente, consumoTotal: totalServicos });
                    }));
                    clientesConsumo_1.sort(function (a, b) { return b.consumoTotal - a.consumoTotal; });
                    for (var i = 0; i < 10; i++) {
                        var item = clientesConsumo_1[i];
                        console.log("\n              ".concat(i, "\u00B0 Cliente:\n              Nome | ").concat(item.client.nome, "\n              Total de servi\u00E7os consumidos | ").concat(item.consumoTotal, "\n            "));
                    }
                    break;
                default:
                    console.log('Selecione uma opção válida');
            }
        }
    };
    listagemClientes.prototype.listPerGender = function () {
        if (this.clientes.length === 0) {
            console.log('Não há clientes cadastrados');
        }
        else {
            var clientesGender_1 = {};
            this.clientes.forEach((function (cliente) {
                var generoCliente = cliente.getGender.toUpperCase();
                if (!clientesGender_1[generoCliente]) {
                    clientesGender_1[generoCliente] = [];
                }
                clientesGender_1[generoCliente].push(cliente.nome);
            }));
            console.log("Clientes listados por g\u00EAnero:");
            for (var genero in clientesGender_1) {
                console.log("\nnG\u00EAnero: ".concat(genero));
                var nomeClientes = clientesGender_1[genero];
                nomeClientes.forEach(function (nome) {
                    console.log("Nome | ".concat(nome));
                });
            }
        }
    };
    listagemClientes.prototype.servProdPerGender = function () {
        if (this.clientes.length === 0) {
            console.log('Ainda não há clientes o suficiente cadastrados!');
        }
        else {
            var genderConsumeList_1 = {};
            var entrada = new Entrada_1.default();
            var opcao = entrada.receberNumero('1 - Listar produtos | 2 - Listar serviços - ');
            switch (opcao) {
                case 1:
                    this.clientes.forEach((function (cliente) {
                        var clientGender = cliente.getGender.toUpperCase();
                        if (!genderConsumeList_1[clientGender]) {
                            genderConsumeList_1[clientGender] = {};
                        }
                        cliente.getProdutosConsumidos.forEach(function (produto) {
                            var nomeProduto = produto.nome;
                            if (!genderConsumeList_1[clientGender][nomeProduto]) {
                                genderConsumeList_1[clientGender][nomeProduto] = 0;
                            }
                            genderConsumeList_1[clientGender][nomeProduto]++;
                        });
                    }));
                    for (var gender in genderConsumeList_1) {
                        console.log("G\u00EAnero | ".concat(gender, " \n"));
                        console.log("Produtos mais consumidos: \n");
                        for (var produto in genderConsumeList_1[gender]) {
                            console.log("Produto | ".concat(produto, " - ").concat(genderConsumeList_1[gender][produto]));
                        }
                    }
                    break;
                case 2:
                    this.clientes.forEach((function (cliente) {
                        var clientGender = cliente.getGender.toUpperCase();
                        if (!genderConsumeList_1[clientGender]) {
                            genderConsumeList_1[clientGender] = {};
                        }
                        cliente.getServicosConsumidos.forEach(function (servico) {
                            var nomeServico = servico.nome;
                            if (!genderConsumeList_1[clientGender][nomeServico]) {
                                genderConsumeList_1[clientGender][nomeServico] = 0;
                            }
                            genderConsumeList_1[clientGender][nomeServico]++;
                        });
                    }));
                    for (var gender in genderConsumeList_1) {
                        console.log("G\u00EAnero | ".concat(gender, " \n"));
                        console.log("Servi\u00E7os mais consumidos: \n");
                        for (var servico in genderConsumeList_1[gender]) {
                            console.log("Servi\u00E7o | ".concat(servico, " - ").concat(genderConsumeList_1[gender][servico]));
                        }
                    }
                    break;
                default:
                    console.log('Selecione uma opção válida');
            }
        }
    };
    listagemClientes.prototype.lessProdServ = function () {
        if (this.clientes.length === 0 || this.clientes.length < 10) {
            console.log('Ainda não há clientes o suficiente cadastrados!');
        }
        else {
            var clientesMenosConsumo_1 = [];
            var entrada = new Entrada_1.default();
            var opcao = entrada.receberNumero('1 - Listar por produtos | 2 - Listar por serviços - ');
            switch (opcao) {
                case 1:
                    console.log('Listagem dos 10 clientes que menos consumiram produtos');
                    this.clientes.forEach((function (cliente) {
                        var totalProdutos = cliente.getProdutosConsumidos.length;
                        clientesMenosConsumo_1.push({ client: cliente, totalConsumo: totalProdutos });
                    }));
                    clientesMenosConsumo_1.sort(function (a, b) { return a.totalConsumo - b.totalConsumo; });
                    for (var i = 0; i < 10; i++) {
                        var item = clientesMenosConsumo_1[i];
                        console.log("\n              ".concat(i, "\u00B0 Cliente:\n              Nome | ").concat(item.client.nome, "\n              Total de produtos consumidos | ").concat(item.totalConsumo, "\n            "));
                    }
                    break;
                case 2:
                    console.log('Listagem dos 10 clientes que menos consumiram serviços');
                    this.clientes.forEach((function (cliente) {
                        var totalServicos = cliente.getServicosConsumidos.length;
                        clientesMenosConsumo_1.push({ client: cliente, totalConsumo: totalServicos });
                    }));
                    clientesMenosConsumo_1.sort(function (a, b) { return a.totalConsumo - b.totalConsumo; });
                    for (var i = 0; i < 10; i++) {
                        var item = clientesMenosConsumo_1[i];
                        console.log("\n              ".concat(i, "\u00B0 Cliente:\n              Nome | ").concat(item.client.nome, "\n              Total de servi\u00E7os consumidos | ").concat(item.totalConsumo, "\n            "));
                    }
                    break;
                default:
                    console.log('Selecione uma opção válida');
            }
        }
    };
    listagemClientes.prototype.listPerValue = function () {
        if (this.clientes.length === 0 || this.clientes.length < 5) {
            console.log('Ainda não há clientes o suficiente cadastrados');
        }
        else {
            var clientesMaisValor_1 = [];
            this.clientes.forEach((function (cliente) {
                var produtos = cliente.getProdutosConsumidos;
                var valorProduto = 0;
                produtos.forEach((function (produto) {
                    valorProduto += produto.getValorProduto;
                }));
                var servicos = cliente.getServicosConsumidos;
                var valorServicos = 0;
                servicos.forEach((function (servico) {
                    valorServicos += servico.getValorServico;
                }));
                var valorConsumoTotal = valorProduto + valorServicos;
                clientesMaisValor_1.push({ client: cliente, totalValor: valorConsumoTotal });
            }));
            clientesMaisValor_1.sort(function (a, b) { return b.totalValor - a.totalValor; });
            for (var i = 0; i < 5; i++) {
                var item = clientesMaisValor_1[i];
                console.log("\n          ".concat(i, "\u00B0 Cliente:\n          Nome | ").concat(item.client.nome, "\n          Valor consumido em produtos e servi\u00E7os | R$ ").concat(item.totalValor, "\n          "));
            }
        }
    };
    return listagemClientes;
}(listar_1.default));
exports.default = listagemClientes;
