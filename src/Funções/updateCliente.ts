import Cliente from "../Entidades/Cliente";
import CPF from "../Entidades/CPF";
import RG from "../Entidades/RG";
import Phone from "../Entidades/Telefone";
import Entrada from "../io/Entrada";
import Update from "./update";

export default class updateCliente extends Update{
  private clientes: Array<Cliente>

   constructor(clientes: Array<Cliente>){
     super()
     this.clientes = clientes
   }
   
   public update(): void {
    let entrada = new Entrada()
    let condicao = true
    let clienteUpdate = 0
    while (condicao){
      clienteUpdate = entrada.receberNumero('Qual cliente deseja atualizar os dados: ')
      if (clienteUpdate < 1 || clienteUpdate > this.clientes.length){
        console.log('Insira um índice válido!')
      } else {
        condicao = false
      }
    }
    let changeNames = entrada.receberTexto(`Deseja mudar o nome do cliente - ${this.clientes[clienteUpdate-1].nome}? [S/N]: `).toUpperCase()
    if (changeNames === 'S'){
      let newNome = entrada.receberTexto('Informe o nome do cliente: ')
      let newNomeSocial = entrada.receberTexto('Informe o nome social do cliente: ')
      this.clientes[clienteUpdate-1].nome = newNome
      this.clientes[clienteUpdate-1].nomeSocial = newNomeSocial
    } 
    let changeGender = entrada.receberTexto(`Deseja mudar o gênero do cliente - ${this.clientes[clienteUpdate-1].nome}? [S/N]: `).toUpperCase()
    if (changeGender === 'S'){
      let newGender = entrada.receberTexto('Informe o novo gênero do cliente')
      this.clientes[clienteUpdate-1].gender = newGender
    }
    let changePhone = entrada.receberTexto('Deseja fazer alguma modificação nos telefones? [S/N]: ').toUpperCase()
    if (changePhone === 'S'){
      console.log(`
        1| Adicionar telefone
        2| Atualizar número
        3| Remover telefone
        `)
        let optionPhone = entrada.receberNumero(`O que deseja fazer (1/2/3): `)
        switch (optionPhone){
          case 1:
            let newDDD = entrada.receberTexto('Informe o DDD do novo número: ')
            let newNum = entrada.receberTexto('Informe o número do novo telefone: ')
            this.clientes[clienteUpdate-1].addNewPhone(new Phone(newDDD, newNum))
            console.log('Telefone adicionado com sucesso!')
            break
          case 2:
            if (this.clientes[clienteUpdate-1].getTelefones.length === 0){
              console.log(`Não há números cadastrados no cliente: ${this.clientes[clienteUpdate-1].nome}`)
            } else {
              let telIndex = 1
              this.clientes[clienteUpdate-1].getTelefones.forEach(tel => {
                console.log(`
                  ${telIndex} | (${tel.getDDD}) - ${tel.getNumero}
                  `)
                  telIndex++
                })
              let phoneToChange = entrada.receberNumero('Informe qual número deseja modificar: ')
              if (phoneToChange < 1 || phoneToChange > this.clientes[clienteUpdate-1].getTelefones.length){
                console.log('Valor inválido, voltando ao menu...')
              } else {
                phoneToChange =  phoneToChange -1
                let newDDD = entrada.receberTexto('Informe o DDD do novo número: ')
                let newNum = entrada.receberTexto('Informe o número do novo telefone: ')
                this.clientes[clienteUpdate-1].updateTelefone(phoneToChange, newDDD, newNum)
                console.log('Número atualizado com sucesso!')
              }
            }
            break
          case 3:
            if (this.clientes[clienteUpdate-1].getTelefones.length === 0){
              console.log(`Não há números cadastrados no cliente: ${this.clientes[clienteUpdate-1].nome}`)
            } else {
              let telIndex = 1
              this.clientes[clienteUpdate-1].getTelefones.forEach(tel => {
                console.log(`
                  ${telIndex} | (${tel.getDDD}) - ${tel.getNumero}
                  `)
                  telIndex++
                })
              let phoneToChange = entrada.receberNumero('Informe qual número deseja excluir: ')
              if (phoneToChange < 1 || phoneToChange > this.clientes[clienteUpdate-1].getTelefones.length){
                console.log('Valor inválido, voltando ao menu...')
              } else {
                phoneToChange =  phoneToChange -1
                this.clientes[clienteUpdate-1].removePhone(phoneToChange)
                console.log('Número removido com sucesso!')
              }
            }
            break
          default:
            console.log('Opção inválida')
        }
    }
    let changeRG = entrada.receberTexto('Deseja fazer alguma modificação no(s) RG(s)? [S/N]: ').toUpperCase()
    if (changeRG === 'S'){
      console.log(`
        1| Adicionar RG
        2| Modificar RG
        3| Remover RG
        `)
      let optionRG = entrada.receberNumero('O que deseja fazer (1/2/3): ')
      switch (optionRG){
        case 1:
          let newValue = entrada.receberTexto('Informe o valor do novo RG: ')
          let newDataEmissao = entrada.receberTexto('Informa a data de emissão do RG (dd/mm/yyyy): ').split('/')
          let newRG = new RG(newValue, new Date(Number(newDataEmissao[2]), Number(newDataEmissao[1]), Number(newDataEmissao[0])))
          this.clientes[clienteUpdate-1].addNewRG(newRG)
          break
        case 2:
          if (this.clientes[clienteUpdate-1].getRgs.length === 0){
            console.log(`Não há RG cadastrado no cliete: ${this.clientes[clienteUpdate-1].nome}`)
          } else {
            let rgIndex = 1
            this.clientes[clienteUpdate-1].getRgs.forEach(rg => {
              console.log(`
                ${rgIndex} | ${rg.getValor}
                `)
              rgIndex++
            })
            let rgToChange = entrada.receberNumero('Qual RG deseja alterar: ')
            if (rgToChange < 1 || rgToChange > this.clientes[clienteUpdate-1].getRgs.length){
              console.log('Valor inválido, voltando ao menu...')
            } else {
              rgToChange = rgToChange-1
              let newValue = entrada.receberTexto('Informe o novo valor do RG: ')
              let newDate = entrada.receberTexto('Informe a data de emissão do documento (dd/mm/yyyy): ').split('/')
              this.clientes[clienteUpdate-1].updateRG(rgToChange, newValue, new Date(Number(newDate[2]), Number(newDate[1]), Number(newDate[0])))
              console.log('RG alterado com sucesso!')
            }
          }
          break
        case 3:
          if (this.clientes[clienteUpdate-1].getRgs.length === 0){
            console.log(`Não há RG  cadastrado no cliente: ${this.clientes[clienteUpdate-1].nome}`)
          } else {
            let rgIndex = 1
            this.clientes[clienteUpdate-1].getRgs.forEach(rg => {
              console.log(`
                ${rgIndex} | ${rg.getValor}
                `)
              rgIndex++
            })
            let rgToChange = entrada.receberNumero('Qual rg deseja alterar: ')
            if (rgToChange < 1 || rgToChange > this.clientes[clienteUpdate-1].getRgs.length){
              console.log('Valor inválido, voltando ao menu....')
            } else {
              rgToChange = rgIndex-1
              this.clientes[clienteUpdate-1].removeRG(rgToChange)
              console.log('RG removido com sucesso!')
            }
          }
          break
        default:
          console.log('Opção inválida')
      }
    }
    console.log('Dados atualizados com sucesso!')
  }
}


// let changePhone = entrada.receberTexto(`Deseja adicionar um novo telefone ao cliente - ${this.clientes[clienteUpdate-1].nome}? [S/N]: `).toUpperCase()
//     if (changePhone === 'S'){
//       let telI = 1
//       this.clientes[clienteUpdate-1].getTelefones.forEach(tel => {
//         console.log(`
//           ${telI} - (${tel.getDDD}) ${tel.getNumero}
//           `)
//           telI++
//           condicao = true
//       })
//       let newTelDDD = entrada.receberTexto('Informe o DDD do novo número: ')
//       let newTelNum = entrada.receberTexto('Informe o número do novo telefone: ')
//       this.clientes[clienteUpdate-1].addNewPhone(new Phone(newTelDDD, newTelNum))
//     }
//     changePhone = entrada.receberTexto(`Deseja modificar algum telefone do cliente - ${this.clientes[clienteUpdate-1].nome}? [S/N]: `).toUpperCase()
//     if (changePhone === 'S'){
//       if (this.clientes[clienteUpdate-1].getTelefones.length <= 1){
//         console.log('É necessário ter pelo menos um telefone cadastrado, portanto, não será possível modificar nenhum número')
//       } else {
//         let telI = 1
//         this.clientes[clienteUpdate-1].getTelefones.forEach(tel => {
//           console.log(`
//             ${telI} - (${tel.getDDD}) ${tel.getNumero}
//             `)
//           telI++
//         })
//         condicao = true
//         let telUpdate = -1
//         while (condicao){
//           telUpdate = entrada.receberNumero('Informe qual telefone modificar exlcuir: ')
//           if (telUpdate < 1 || telUpdate > this.clientes[clienteUpdate-1].getTelefones.length){
//             console.log('Insira um valor válido')
//           }
//           condicao = false
//         }
//         telUpdate =  telUpdate-1
//         let newTelDDD = entrada.receberTexto('Informe o DDD do novo número: ')
//         let newTelNum = entrada.receberTexto('Informe o número do novo telefone: ')
//         this.clientes[clienteUpdate-1].updateTelefone(telUpdate, newTelDDD, newTelNum)
//         }
//     }