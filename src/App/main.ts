import Entrada from "../io/Entrada";
import Empresa from "../Entidades/Empresa";
import cadastroClientes from "../Funções/cadastroClientes";
import listagemClientes from "../Funções/listagemClientes";
import updateCliente from "../Funções/updateCliente";
import DeleteCliente from "../Funções/deleteCliente";

console.log('Group World Beauty - Bem vindo ao sistema de cadastro de clientes!\n')
let company = new Empresa()
let condicao = true

while(condicao){
  console.log(`
    Menu: 
    1 - Cadastrar cliente 
    2 - Atualizar cliente
    3 - Excluir clientes
    4 - Listar clientes/produtos/serviços
    5 - Sair
    `)

    let entrada = new Entrada()
    let choice = entrada.receberNumero('Selecione uma opção: ')
    
    switch(choice){
      case 1:
        let cadastradoCliente = new cadastroClientes(company.getClientes)
        cadastradoCliente.cadastrar()
        break;
      case 2:
        if (company.getClientes.length === 0){
          console.log('Não há clientes cadastrados')
        } else {
          let listarUpdate = new listagemClientes(company.getClientes)
          let updateUsers = new updateCliente(company.getClientes)
          listarUpdate.listagemUpdate()
          updateUsers.update()
        }
        break
      case 3:
        if (company.getClientes.length === 0){
          console.log('Não há clientes cadastrados')
        } else {
          let deleteUser = new DeleteCliente(company.getClientes)
          deleteUser.delete()
        }
        break
      case 4:
        if (company.getClientes.length === 0){
          console.log('Não há clientes cadastrados')
        } else {
          let listar = new listagemClientes(company.getClientes)
          console.log(`
            Listagem geral:
            1 - Listar clientes
            2 - Listar 10 clientes que consumiram mais produtos/serviços
            3 - Listar clientes por gênero
            4 - Listar produtos/serviços mais consumidos por gênero
            5 - Listar 10 clientes que menos consumiram produtos
            6 - Listar 5 clientes que mais consumiram em valor
            `)
            let listChoice = entrada.receberNumero('Selecione uma opção: ')
            switch(listChoice){
              case 1:
                listar.listagem()
                break
              case 2:
                listar.moreProdServ()
                break
              case 3:
                listar.listPerGender()
                break
              case 4:
                listar.servProdPerGender()
                break
              case 5:
                listar.lessProdServ()
                break
              case 6:
                listar.listPerValue()
                break
              default:
                console.log('Opção inválida! Selecione uma das opções disponíveis no menu.')
            }
        }
        break;
      case 5:
        condicao = false
        console.log('Saindo do sistema...')
        break
      default:
        console.log('Opção inválida! Insira uma das opções disponíveis no menu.')
    }
}