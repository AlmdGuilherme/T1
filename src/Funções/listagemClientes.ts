import Cliente from "../Entidades/Cliente";
import Listar from "./listar";
import Entrada from "../io/Entrada";

export default class listagemClientes extends Listar{
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>){
    super()
    this.clientes = clientes
  }

  public listagem(): void {
    if (this.clientes.length === 0){
      console.log('Ainda não há clientes cadastrados!')
    } else {
      console.log('Lista de Clientes: ')
      this.clientes.forEach((cliente => {
        console.log(`
          Nome: ${cliente.nome}
          Nome Social: ${cliente.nomeSocial}
          CPF: ${cliente.getCpf.getValor}
          `)
          console.log('-'.repeat(25))
      }))
    }
  }

  public listagemUpdate(): void{
    if (this.clientes.length === 0){
      console.log('Ainda não há clientes cadastrados!')
    } else {
      console.log('Lista de Clientes: ')
      let i = 1
      this.clientes.forEach((cliente => {
        console.log(`
            ${i} | ${cliente.nome}
          `)
          console.log('-'.repeat(25))
          i++
      }))
    }
  }

  public moreProdServ(): void {
    if (this.clientes.length === 0 || this.clientes.length < 10){
      console.log('Ainda não há clientes o suficiente cadastrados!')
    } else {
      let clientesConsumo:{client: Cliente; consumoTotal: number}[] = []
      let entrada = new Entrada()
      let opcao = entrada.receberNumero('1 - Listar por produtos | 2 - Listar por serviços - ')
      switch(opcao){
        case 1:
          console.log('Listagem dos 10 clientes que mais consumiram produtos')
          this.clientes.forEach((cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.length
            clientesConsumo.push({client: cliente, consumoTotal: totalProdutos})
          }))
          clientesConsumo.sort((a, b) => b.consumoTotal - a.consumoTotal)
          for (let i = 0; i < 10; i++){
            const item = clientesConsumo[i]
            console.log(`
              ${i}° Cliente:
              Nome | ${item.client.nome}
              Total de produtos consumidos | ${item.consumoTotal}
            `)
          }
          break
        case 2:
          console.log('Listagem dos 10 clientes que mais consumiram serviços')
          this.clientes.forEach((cliente => {
          const totalServicos = cliente.getServicosConsumidos.length
          clientesConsumo.push({client: cliente, consumoTotal: totalServicos})
          }))
          clientesConsumo.sort((a, b) => b.consumoTotal - a.consumoTotal)
          for (let i = 0; i < 10; i++){
            const item = clientesConsumo[i]
            console.log(`
              ${i}° Cliente:
              Nome | ${item.client.nome}
              Total de serviços consumidos | ${item.consumoTotal}
            `)
          }
          break
        default:
          console.log('Selecione uma opção válida')
      }
    }
  }

  public listPerGender(): void{
    if (this.clientes.length === 0){
      console.log('Não há clientes cadastrados')
    } else {
      const clientesGender : {[key: string]: string[]} = {}
      this.clientes.forEach((cliente => {
        let generoCliente = cliente.getGender.toUpperCase()
        if (!clientesGender[generoCliente]){
          clientesGender[generoCliente] = []
        }

        clientesGender[generoCliente].push(cliente.nome)
      }))

      console.log(`Clientes listados por gênero:`)
      for (const genero in clientesGender){
        console.log(`\nnGênero: ${genero}` )
        const nomeClientes = clientesGender[genero]
        nomeClientes.forEach(nome =>{
          console.log(`Nome | ${nome}`)
        })
      }
    }
  }

  public servProdPerGender(){
    if(this.clientes.length === 0 ){
      console.log('Ainda não há clientes o suficiente cadastrados!')
    } else {
      const genderConsumeList : {[key:string]: {[key:string] : number}} = {}
      let entrada = new Entrada()
      let opcao = entrada.receberNumero('1 - Listar produtos | 2 - Listar serviços - ')
      switch(opcao){
        case 1:
          this.clientes.forEach((cliente => {
            let clientGender = cliente.getGender.toUpperCase()
            if (!genderConsumeList[clientGender]){
              genderConsumeList[clientGender] = {}
            }
            cliente.getProdutosConsumidos.forEach(produto => {
              const nomeProduto = produto.nome
              if (!genderConsumeList[clientGender][nomeProduto]){
                genderConsumeList[clientGender][nomeProduto] = 0
              }
              genderConsumeList[clientGender][nomeProduto]++
            })
          }))
          for(const gender in genderConsumeList){
            console.log(`Gênero | ${gender} \n`)
            console.log(`Produtos mais consumidos: \n`)
            for (const produto in genderConsumeList[gender]){
              console.log(`Produto | ${produto} - ${genderConsumeList[gender][produto]}`)
            }
          }
          break
        case 2:
          this.clientes.forEach((cliente => {
            let clientGender = cliente.getGender.toUpperCase()
            if(!genderConsumeList[clientGender]){
              genderConsumeList[clientGender] = {}
            }
            cliente.getServicosConsumidos.forEach(servico => {
              const nomeServico = servico.nome
              if (!genderConsumeList[clientGender][nomeServico]){
                genderConsumeList[clientGender][nomeServico] = 0
              }
              genderConsumeList[clientGender][nomeServico]++
            })
          }))
          for(const gender in genderConsumeList){
            console.log(`Gênero | ${gender} \n`)
            console.log(`Serviços mais consumidos: \n`)
            for (const servico in genderConsumeList[gender]){
              console.log(`Serviço | ${servico} - ${genderConsumeList[gender][servico]}`)
            }
          }
          break
        default:
          console.log('Selecione uma opção válida')
      }
    }
  }

  public lessProdServ(): void{
    if(this.clientes.length === 0 || this.clientes.length < 10){
      console.log('Ainda não há clientes o suficiente cadastrados!')
    } else {
      let clientesMenosConsumo: {client: Cliente; totalConsumo: number}[] = []
      let entrada = new Entrada()
      let opcao = entrada.receberNumero('1 - Listar por produtos | 2 - Listar por serviços - ')
      switch (opcao){
        case 1:
          console.log('Listagem dos 10 clientes que menos consumiram produtos')
          this.clientes.forEach((cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.length
            clientesMenosConsumo.push({client: cliente, totalConsumo: totalProdutos})
          }))
          clientesMenosConsumo.sort((a, b) => a.totalConsumo - b.totalConsumo)
          for (let i = 0; i < 10; i++){
            let item = clientesMenosConsumo[i]
            console.log(`
              ${i}° Cliente:
              Nome | ${item.client.nome}
              Total de produtos consumidos | ${item.totalConsumo}
            `)
          }
          break
        case 2:
          console.log('Listagem dos 10 clientes que menos consumiram serviços')
          this.clientes.forEach((cliente => {
            const totalServicos = cliente.getServicosConsumidos.length
            clientesMenosConsumo.push({client: cliente, totalConsumo: totalServicos})
          }))
          clientesMenosConsumo.sort((a, b) => a.totalConsumo - b.totalConsumo)
          for (let i = 0; i < 10; i++){
            let item = clientesMenosConsumo[i]
            console.log(`
              ${i}° Cliente:
              Nome | ${item.client.nome}
              Total de serviços consumidos | ${item.totalConsumo}
            `)
          }
          break
        default:
          console.log('Selecione uma opção válida')
      }
    }
  }

  public listPerValue(): void{
    if (this.clientes.length === 0 || this.clientes.length < 5){
      console.log('Ainda não há clientes o suficiente cadastrados')
    } else {
      let clientesMaisValor : {client: Cliente; totalValor: number}[] = []
      this.clientes.forEach((cliente => {
        let produtos = cliente.getProdutosConsumidos
        let valorProduto = 0
        produtos.forEach((produto => {
          valorProduto += produto.getValorProduto
        }))
        let servicos = cliente.getServicosConsumidos
        let valorServicos = 0
        servicos.forEach((servico =>{
          valorServicos += servico.getValorServico
        }))
        const valorConsumoTotal = valorProduto + valorServicos
        clientesMaisValor.push({client: cliente, totalValor: valorConsumoTotal})
      }))
      clientesMaisValor.sort((a, b) => b.totalValor - a.totalValor)

      for(let i = 0; i < 5; i++){
        let item = clientesMaisValor[i]
        console.log(`
          ${i}° Cliente:
          Nome | ${item.client.nome}
          Valor consumido em produtos e serviços | R$ ${item.totalValor}
          `)
      }
    }
  }
}