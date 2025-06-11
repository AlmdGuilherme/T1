import Cliente from "./Cliente";
import Product from "./Produto";
import Service from "./Servico";

export default class Empresa{
  private clientes: Array<Cliente>;
  private produtos: Array<Product>;
  private servicos: Array<Service>;

  constructor(){
    this.clientes = [];
    this.produtos = []
    this.servicos = [];
  }

  public get getClientes(){
    return this.clientes;
  }

  public get getProdutos(){
    return this.produtos;
  }

  public get getServicos(){
    return this.servicos;
  }
}