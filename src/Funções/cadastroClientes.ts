import Cadastro from "./cadastro"
import Cliente from '../Entidades/Cliente'
import CPF from "../Entidades/CPF"
import Entrada from "../io/Entrada"
import Product from "../Entidades/Produto"
import Service from "../Entidades/Servico"
import Phone from "../Entidades/Telefone"
import RG from "../Entidades/RG"


export default class cadastroClientes extends Cadastro {
  private clientes: Array<Cliente>
  private entrada: Entrada

  constructor(clientes: Array<Cliente>){
    super()
    this.clientes = clientes
    this.entrada = new Entrada()
  }

  public cadastrar(): void {
    console.log('Início do cadastro de cliente(s):\n')
    let nome = this.entrada.receberTexto('Informe o nome do cliente: ')
    let nomeSocial = this.entrada.receberTexto('Informe o nome social do cliente: ')
    let valorCpf = this.entrada.receberTexto('Informe o valor do CPF: ')
    let dataCpf = this.entrada.receberTexto('Informe a data de emissão do documento (dd/mm/yyyy): ').split('/') 
    let cliGender = this.entrada.receberTexto('Informe o gênero do cliente: ')
    let cliente = new Cliente(nome, nomeSocial, new CPF(valorCpf, new Date(Number(dataCpf[2]), Number(dataCpf[1]), Number(dataCpf[0]))), cliGender)
    let quantidadeRG = this.entrada.receberNumero('Quantos RG deseja cadastrar? ')
    for(let i = 0; i < quantidadeRG; i++){
      let valorRg = this.entrada.receberTexto('Informe o valor do RG: ')
      let dataRg = this.entrada.receberTexto('Informe a data de emissão do documento (dd/mm/yyyy): ').split('/')
      cliente.adicionarRG(new RG(valorRg, new Date(Number(dataRg[2]), Number(dataRg[1]), Number(dataCpf[0]))))
    }
    let quantidadeTelefone = this.entrada.receberNumero('Quantos telefones deseja cadastrar? ')
    for(let i = 0; i < quantidadeTelefone; i++){
      let TelDdd = this.entrada.receberTexto('Informe o DDD do Telefone: ')
      let TelNum = this.entrada.receberTexto('Informe o número do Telefone: ')
      cliente.adicionarTelefone(new Phone(TelDdd, TelNum))
    }
    let quantidadeProdutos = this.entrada.receberNumero('Quantos produtos consumidos deseja cadastrar? ')
    for(let i = 0; i < quantidadeProdutos; i++){
      let prodName = this.entrada.receberTexto('Informe o nome do produto consumido: ')
      let prodValue = this.entrada.receberNumero('Informe o valor do produto: ')
      cliente.adicionarProdutos(new Product(prodName, prodValue))
    }
    let quantidadeServicos = this.entrada.receberNumero('Quantos serviços consumidos deseja cadastrar? ')
    for (let i = 0; i < quantidadeServicos; i++){
      let servName = this.entrada.receberTexto('Informe o nome do serviço consumido: ')
      let servValue = this.entrada.receberNumero('Informe o valor do serviço: ')
      cliente.adicionarServicos(new Service(servName, servValue))
    }
    this.clientes.push(cliente)
    console.log(`${nome} foi cadastrado com sucesso!`)
    console.log(`Total de clientes da empresa ${this.clientes.length}`)
  }
}