export default class Phone {
  private ddd: string;
  private numero: string;
  constructor(ddd: string, numero: string){
    this.ddd = ddd;
    this.numero = numero
  }

  public get getDDD(){
    return this.ddd;
  }

  public get getNumero(){
    return this.numero
  }

  public set setNewDDD(ddd:string){
    this.ddd = ddd
  }

  public set setNewNum(num: string){
    this.numero = num
  }
}