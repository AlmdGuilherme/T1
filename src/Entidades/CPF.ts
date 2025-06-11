export default class CPF{
  private valor: string;
  private dataEmissao: Date;
  constructor(valor:string, dataEmmissao: Date){
    this.valor = valor
    this.dataEmissao = dataEmmissao
  }

  public get getValor(){
    return this.valor
  }

  public get getDataEmissao(){
    return this.dataEmissao;
  }
}