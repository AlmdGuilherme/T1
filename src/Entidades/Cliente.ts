import CPF from "./CPF";
import Product from "./Produto";
import RG from "./RG";
import Service from "./Servico";
import Phone from "./Telefone";

export default class Cliente {
  public nome: string;
  public nomeSocial: string;
  private _cpf: CPF;
  public gender: string;
  private rgs: Array<RG>;
  private dataCadastro: Date;
  private telefones: Array<Phone>;
  private produtosConsumidos: Array<Product>;
  private servicosConsumidos: Array<Service>;

  constructor(nome: string, nomeSocial: string, cpf: CPF, gender: string) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this._cpf = cpf;
    this.gender = gender
    this.rgs = []; 
    this.dataCadastro = new Date(); 
    this.telefones = []; 
    this.produtosConsumidos = []; 
    this.servicosConsumidos = []; 
  }


  public adicionarRG(rg: RG): void {
    this.rgs.push(rg)
  }

  public adicionarTelefone(Cel: Phone): void{
    this.telefones.push(Cel)
  }

  public adicionarProdutos(Prod: Product): void{
    this.produtosConsumidos.push(Prod)
  }

  public adicionarServicos(Serv: Service): void{
    this.servicosConsumidos.push(Serv)
  }

  public get getCpf(): CPF {
    return this._cpf;
  }

  public get getGender() : string{
    return this.gender
  }

  public get getRgs(): Array<RG> {
    return this.rgs;
  }

  public get getDataCadastro(): Date {
    return this.dataCadastro;
  }

  public get getTelefones(): Array<Phone> {
    return this.telefones;
  }

  public get getProdutosConsumidos(): Array<Product> {
    return this.produtosConsumidos;
  }

  public get getServicosConsumidos(): Array<Service> {
    return this.servicosConsumidos;
  }

  public set setNewName(newNome: string){
    this.nome = newNome
  }

  public set setNewNomeSocial(newNomeSocial: string){
    this.nomeSocial = newNomeSocial
  }

  public set setNewGender(newGender: string){
    this.gender = newGender
  }

  public addNewPhone(newPhone: Phone){
    this.telefones.push(newPhone)
  }

  public removePhone(index: number){
    let telefones = this.telefones
    telefones.splice(index, 1)
  }

  public updateTelefone(index: number, newDDD: string, newTel: string){
    let telefone = this.telefones[index]
    telefone.setNewDDD = newDDD
    telefone.setNewNum = newTel
  }

  public addNewRG(newRG: RG){
    this.rgs.push(newRG)
  }

  public removeRG(index: number){
    let listaRg = this.rgs
    listaRg.splice(index, 1)
  }

  public updateRG(index: number, value: string, newDate: Date){
    let rg = this.rgs[index]
    rg.setNewValor = value
    rg.setNewDate = newDate
  }
}