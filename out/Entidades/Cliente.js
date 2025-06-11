"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, gender) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this._cpf = cpf;
        this.gender = gender;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    Cliente.prototype.adicionarRG = function (rg) {
        this.rgs.push(rg);
    };
    Cliente.prototype.adicionarTelefone = function (Cel) {
        this.telefones.push(Cel);
    };
    Cliente.prototype.adicionarProdutos = function (Prod) {
        this.produtosConsumidos.push(Prod);
    };
    Cliente.prototype.adicionarServicos = function (Serv) {
        this.servicosConsumidos.push(Serv);
    };
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this._cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getGender", {
        get: function () {
            return this.gender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRgs", {
        get: function () {
            return this.rgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefones", {
        get: function () {
            return this.telefones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setNewName", {
        set: function (newNome) {
            this.nome = newNome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setNewNomeSocial", {
        set: function (newNomeSocial) {
            this.nomeSocial = newNomeSocial;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setNewGender", {
        set: function (newGender) {
            this.gender = newGender;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.addNewPhone = function (newPhone) {
        this.telefones.push(newPhone);
    };
    Cliente.prototype.removePhone = function (index) {
        var telefones = this.telefones;
        telefones.splice(index, 1);
    };
    Cliente.prototype.updateTelefone = function (index, newDDD, newTel) {
        var telefone = this.telefones[index];
        telefone.setNewDDD = newDDD;
        telefone.setNewNum = newTel;
    };
    Cliente.prototype.addNewRG = function (newRG) {
        this.rgs.push(newRG);
    };
    Cliente.prototype.removeRG = function (index) {
        var listaRg = this.rgs;
        listaRg.splice(index, 1);
    };
    Cliente.prototype.updateRG = function (index, value, newDate) {
        var rg = this.rgs[index];
        rg.setNewValor = value;
        rg.setNewDate = newDate;
    };
    return Cliente;
}());
exports.default = Cliente;
