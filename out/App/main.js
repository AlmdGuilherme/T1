"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Entrada_1 = __importDefault(require("../io/Entrada"));
var Empresa_1 = __importDefault(require("../Entidades/Empresa"));
var cadastroClientes_1 = __importDefault(require("../Fun\u00E7\u00F5es/cadastroClientes"));
var listagemClientes_1 = __importDefault(require("../Fun\u00E7\u00F5es/listagemClientes"));
var updateCliente_1 = __importDefault(require("../Fun\u00E7\u00F5es/updateCliente"));
var deleteCliente_1 = __importDefault(require("../Fun\u00E7\u00F5es/deleteCliente"));
console.log('Group World Beauty - Bem vindo ao sistema de cadastro de clientes!\n');
var company = new Empresa_1.default();
var condicao = true;
while (condicao) {
    console.log("\n    Menu: \n    1 - Cadastrar cliente \n    2 - Atualizar cliente\n    3 - Excluir clientes\n    4 - Listar clientes/produtos/servi\u00E7os\n    5 - Sair\n    ");
    var entrada = new Entrada_1.default();
    var choice = entrada.receberNumero('Selecione uma opção: ');
    switch (choice) {
        case 1:
            var cadastradoCliente = new cadastroClientes_1.default(company.getClientes);
            cadastradoCliente.cadastrar();
            break;
        case 2:
            if (company.getClientes.length === 0) {
                console.log('Não há clientes cadastrados');
            }
            else {
                var listarUpdate = new listagemClientes_1.default(company.getClientes);
                var updateUsers = new updateCliente_1.default(company.getClientes);
                listarUpdate.listagemUpdate();
                updateUsers.update();
            }
            break;
        case 3:
            if (company.getClientes.length === 0) {
                console.log('Não há clientes cadastrados');
            }
            else {
                var deleteUser = new deleteCliente_1.default(company.getClientes);
                deleteUser.delete();
            }
            break;
        case 4:
            if (company.getClientes.length === 0) {
                console.log('Não há clientes cadastrados');
            }
            else {
                var listar = new listagemClientes_1.default(company.getClientes);
                console.log("\n            Listagem geral:\n            1 - Listar clientes\n            2 - Listar 10 clientes que consumiram mais produtos/servi\u00E7os\n            3 - Listar clientes por g\u00EAnero\n            4 - Listar produtos/servi\u00E7os mais consumidos por g\u00EAnero\n            5 - Listar 10 clientes que menos consumiram produtos\n            6 - Listar 5 clientes que mais consumiram em valor\n            ");
                var listChoice = entrada.receberNumero('Selecione uma opção: ');
                switch (listChoice) {
                    case 1:
                        listar.listagem();
                        break;
                    case 2:
                        listar.moreProdServ();
                        break;
                    case 3:
                        listar.listPerGender();
                        break;
                    case 4:
                        listar.servProdPerGender();
                        break;
                    case 5:
                        listar.lessProdServ();
                        break;
                    case 6:
                        listar.listPerValue();
                        break;
                    default:
                        console.log('Opção inválida! Selecione uma das opções disponíveis no menu.');
                }
            }
            break;
        case 5:
            condicao = false;
            console.log('Saindo do sistema...');
            break;
        default:
            console.log('Opção inválida! Insira uma das opções disponíveis no menu.');
    }
}
