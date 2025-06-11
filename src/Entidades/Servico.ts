export default class Service {
  public nome!: string;
  private valor: number

  constructor(nome:string, valor: number){
    this.nome = nome
    this.valor = valor
  }

  public get getValorServico(): number {
    return this.valor
  }
}