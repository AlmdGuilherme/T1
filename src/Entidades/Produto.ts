export default class Product {
    public nome!: string
    private valor: number

    constructor(nome: string, valor: number){
        this.nome = nome
        this.valor = valor
    }

    public get getValorProduto(): number{
        return this.valor
    }
}