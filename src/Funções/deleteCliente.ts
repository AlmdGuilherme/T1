import Cliente from "../Entidades/Cliente";
import Entrada from "../io/Entrada";
import Delete from "./delete";

export default class DeleteCliente extends Delete{
  private clientes: Array<Cliente>

  constructor(clientes: Array<Cliente>){
    super()
    this.clientes = clientes
  }

  public delete(): void {
      let entrada = new Entrada()
      let i = 1
      let condicao = true
      let cliDelete = -1
      while (condicao){
        console.log('Lista de clientes: \n')
        this.clientes.forEach(cliente => {
          console.log(`
            [${i}] -  Nome: ${cliente.nome} | ${cliente.getCpf.getValor} 
            `)
            i++
      })
      cliDelete = entrada.receberNumero('Qual cliente deseja excluir do cadastro: ')
      if (cliDelete < 1 || cliDelete > this.clientes.length) {
        console.log('Insira um valor váliod')
      } else {
        condicao = false
      }
      }
      cliDelete = cliDelete - 1
      this.clientes.splice(cliDelete, 1)
      console.log('Cliente removido da lista da empresa!')
  }
}