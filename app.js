const readline = require("readline")

const entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question("Digite o seu nome: ", function(nome){
    
    let nomeDoCliente = nome

    entradaDeDados.question("Qual é o produto escolhido: ", function(produto){

        let produtoEscolhido = produto

        entradaDeDados.question("Qual seria o valor da sua compra: ", function(valor){

            let valorDaCompra = valor

            entradaDeDados.question("insira a taxa de juros: ", function(taxa){
                
                let taxaDeJuros = taxa

                entradaDeDados.question("insira o tempo de pagamento: ", function(tempo){

                    let tempoDePagamento = tempo

                    let montante = Number(valor) * (1 + Number(taxa/100)) ** Number(tempo)
                    console.log(montante)
                })
            })
        })    
    })
})


