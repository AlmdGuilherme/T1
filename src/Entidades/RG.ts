export default class RG{
  private valor: string;
  private dataEmissao: Date

  constructor(valor: string, dataEmissao: Date){
    this.valor = valor;
    this.dataEmissao = dataEmissao
  }

  public get getValor(){
    return this.valor
  }

  public get getDataEmissao(){
    return this.dataEmissao
  }

  public set setNewValor(value: string){
    this.valor = value
  }

  public set setNewDate(newDate: Date){
    this.dataEmissao = newDate
  }
}