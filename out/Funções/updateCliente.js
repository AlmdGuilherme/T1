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
var RG_1 = __importDefault(require("../Entidades/RG"));
var Telefone_1 = __importDefault(require("../Entidades/Telefone"));
var Entrada_1 = __importDefault(require("../io/Entrada"));
var update_1 = __importDefault(require("./update"));
var updateCliente = /** @class */ (function (_super) {
    __extends(updateCliente, _super);
    function updateCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    updateCliente.prototype.update = function () {
        var entrada = new Entrada_1.default();
        var condicao = true;
        var clienteUpdate = 0;
        while (condicao) {
            clienteUpdate = entrada.receberNumero('Qual cliente deseja atualizar os dados: ');
            if (clienteUpdate < 1 || clienteUpdate > this.clientes.length) {
                console.log('Insira um índice válido!');
            }
            else {
                condicao = false;
            }
        }
        var changeNames = entrada.receberTexto("Deseja mudar o nome do cliente - ".concat(this.clientes[clienteUpdate - 1].nome, "? [S/N]: ")).toUpperCase();
        if (changeNames === 'S') {
            var newNome = entrada.receberTexto('Informe o nome do cliente: ');
            var newNomeSocial = entrada.receberTexto('Informe o nome social do cliente: ');
            this.clientes[clienteUpdate - 1].nome = newNome;
            this.clientes[clienteUpdate - 1].nomeSocial = newNomeSocial;
        }
        var changeGender = entrada.receberTexto("Deseja mudar o g\u00EAnero do cliente - ".concat(this.clientes[clienteUpdate - 1].nome, "? [S/N]: ")).toUpperCase();
        if (changeGender === 'S') {
            var newGender = entrada.receberTexto('Informe o novo gênero do cliente');
            this.clientes[clienteUpdate - 1].gender = newGender;
        }
        var changePhone = entrada.receberTexto('Deseja fazer alguma modificação nos telefones? [S/N]: ').toUpperCase();
        if (changePhone === 'S') {
            console.log("\n        1| Adicionar telefone\n        2| Atualizar n\u00FAmero\n        3| Remover telefone\n        ");
            var optionPhone = entrada.receberNumero("O que deseja fazer (1/2/3): ");
            switch (optionPhone) {
                case 1:
                    var newDDD = entrada.receberTexto('Informe o DDD do novo número: ');
                    var newNum = entrada.receberTexto('Informe o número do novo telefone: ');
                    this.clientes[clienteUpdate - 1].addNewPhone(new Telefone_1.default(newDDD, newNum));
                    console.log('Telefone adicionado com sucesso!');
                    break;
                case 2:
                    if (this.clientes[clienteUpdate - 1].getTelefones.length === 0) {
                        console.log("N\u00E3o h\u00E1 n\u00FAmeros cadastrados no cliente: ".concat(this.clientes[clienteUpdate - 1].nome));
                    }
                    else {
                        var telIndex_1 = 1;
                        this.clientes[clienteUpdate - 1].getTelefones.forEach(function (tel) {
                            console.log("\n                  ".concat(telIndex_1, " | (").concat(tel.getDDD, ") - ").concat(tel.getNumero, "\n                  "));
                            telIndex_1++;
                        });
                        var phoneToChange = entrada.receberNumero('Informe qual número deseja modificar: ');
                        if (phoneToChange < 1 || phoneToChange > this.clientes[clienteUpdate - 1].getTelefones.length) {
                            console.log('Valor inválido, voltando ao menu...');
                        }
                        else {
                            phoneToChange = phoneToChange - 1;
                            var newDDD_1 = entrada.receberTexto('Informe o DDD do novo número: ');
                            var newNum_1 = entrada.receberTexto('Informe o número do novo telefone: ');
                            this.clientes[clienteUpdate - 1].updateTelefone(phoneToChange, newDDD_1, newNum_1);
                            console.log('Número atualizado com sucesso!');
                        }
                    }
                    break;
                case 3:
                    if (this.clientes[clienteUpdate - 1].getTelefones.length === 0) {
                        console.log("N\u00E3o h\u00E1 n\u00FAmeros cadastrados no cliente: ".concat(this.clientes[clienteUpdate - 1].nome));
                    }
                    else {
                        var telIndex_2 = 1;
                        this.clientes[clienteUpdate - 1].getTelefones.forEach(function (tel) {
                            console.log("\n                  ".concat(telIndex_2, " | (").concat(tel.getDDD, ") - ").concat(tel.getNumero, "\n                  "));
                            telIndex_2++;
                        });
                        var phoneToChange = entrada.receberNumero('Informe qual número deseja excluir: ');
                        if (phoneToChange < 1 || phoneToChange > this.clientes[clienteUpdate - 1].getTelefones.length) {
                            console.log('Valor inválido, voltando ao menu...');
                        }
                        else {
                            phoneToChange = phoneToChange - 1;
                            this.clientes[clienteUpdate - 1].removePhone(phoneToChange);
                            console.log('Número removido com sucesso!');
                        }
                    }
                    break;
                default:
                    console.log('Opção inválida');
            }
        }
        var changeRG = entrada.receberTexto('Deseja fazer alguma modificação no(s) RG(s)? [S/N]: ').toUpperCase();
        if (changeRG === 'S') {
            console.log("\n        1| Adicionar RG\n        2| Modificar RG\n        3| Remover RG\n        ");
            var optionRG = entrada.receberNumero('O que deseja fazer (1/2/3): ');
            switch (optionRG) {
                case 1:
                    var newValue = entrada.receberTexto('Informe o valor do novo RG: ');
                    var newDataEmissao = entrada.receberTexto('Informa a data de emissão do RG (dd/mm/yyyy): ').split('/');
                    var newRG = new RG_1.default(newValue, new Date(Number(newDataEmissao[2]), Number(newDataEmissao[1]), Number(newDataEmissao[0])));
                    this.clientes[clienteUpdate - 1].addNewRG(newRG);
                    break;
                case 2:
                    if (this.clientes[clienteUpdate - 1].getRgs.length === 0) {
                        console.log("N\u00E3o h\u00E1 RG cadastrado no cliete: ".concat(this.clientes[clienteUpdate - 1].nome));
                    }
                    else {
                        var rgIndex_1 = 1;
                        this.clientes[clienteUpdate - 1].getRgs.forEach(function (rg) {
                            console.log("\n                ".concat(rgIndex_1, " | ").concat(rg.getValor, "\n                "));
                            rgIndex_1++;
                        });
                        var rgToChange = entrada.receberNumero('Qual RG deseja alterar: ');
                        if (rgToChange < 1 || rgToChange > this.clientes[clienteUpdate - 1].getRgs.length) {
                            console.log('Valor inválido, voltando ao menu...');
                        }
                        else {
                            rgToChange = rgToChange - 1;
                            var newValue_1 = entrada.receberTexto('Informe o novo valor do RG: ');
                            var newDate = entrada.receberTexto('Informe a data de emissão do documento (dd/mm/yyyy): ').split('/');
                            this.clientes[clienteUpdate - 1].updateRG(rgToChange, newValue_1, new Date(Number(newDate[2]), Number(newDate[1]), Number(newDate[0])));
                            console.log('RG alterado com sucesso!');
                        }
                    }
                    break;
                case 3:
                    if (this.clientes[clienteUpdate - 1].getRgs.length === 0) {
                        console.log("N\u00E3o h\u00E1 RG  cadastrado no cliente: ".concat(this.clientes[clienteUpdate - 1].nome));
                    }
                    else {
                        var rgIndex_2 = 1;
                        this.clientes[clienteUpdate - 1].getRgs.forEach(function (rg) {
                            console.log("\n                ".concat(rgIndex_2, " | ").concat(rg.getValor, "\n                "));
                            rgIndex_2++;
                        });
                        var rgToChange = entrada.receberNumero('Qual rg deseja alterar: ');
                        if (rgToChange < 1 || rgToChange > this.clientes[clienteUpdate - 1].getRgs.length) {
                            console.log('Valor inválido, voltando ao menu....');
                        }
                        else {
                            rgToChange = rgIndex_2 - 1;
                            this.clientes[clienteUpdate - 1].removeRG(rgToChange);
                            console.log('RG removido com sucesso!');
                        }
                    }
                    break;
                default:
                    console.log('Opção inválida');
            }
        }
        console.log('Dados atualizados com sucesso!');
    };
    return updateCliente;
}(update_1.default));
exports.default = updateCliente;
// let changePhone = entrada.receberTexto(`Deseja adicionar um novo telefone ao cliente - ${this.clientes[clienteUpdate-1].nome}? [S/N]: `).toUpperCase()
//     if (changePhone === 'S'){
//       let telI = 1
//       this.clientes[clienteUpdate-1].getTelefones.forEach(tel => {
//         console.log(`
//           ${telI} - (${tel.getDDD}) ${tel.getNumero}
//           `)
//           telI++
//           condicao = true
//       })
//       let newTelDDD = entrada.receberTexto('Informe o DDD do novo número: ')
//       let newTelNum = entrada.receberTexto('Informe o número do novo telefone: ')
//       this.clientes[clienteUpdate-1].addNewPhone(new Phone(newTelDDD, newTelNum))
//     }
//     changePhone = entrada.receberTexto(`Deseja modificar algum telefone do cliente - ${this.clientes[clienteUpdate-1].nome}? [S/N]: `).toUpperCase()
//     if (changePhone === 'S'){
//       if (this.clientes[clienteUpdate-1].getTelefones.length <= 1){
//         console.log('É necessário ter pelo menos um telefone cadastrado, portanto, não será possível modificar nenhum número')
//       } else {
//         let telI = 1
//         this.clientes[clienteUpdate-1].getTelefones.forEach(tel => {
//           console.log(`
//             ${telI} - (${tel.getDDD}) ${tel.getNumero}
//             `)
//           telI++
//         })
//         condicao = true
//         let telUpdate = -1
//         while (condicao){
//           telUpdate = entrada.receberNumero('Informe qual telefone modificar exlcuir: ')
//           if (telUpdate < 1 || telUpdate > this.clientes[clienteUpdate-1].getTelefones.length){
//             console.log('Insira um valor válido')
//           }
//           condicao = false
//         }
//         telUpdate =  telUpdate-1
//         let newTelDDD = entrada.receberTexto('Informe o DDD do novo número: ')
//         let newTelNum = entrada.receberTexto('Informe o número do novo telefone: ')
//         this.clientes[clienteUpdate-1].updateTelefone(telUpdate, newTelDDD, newTelNum)
//         }
//     }
