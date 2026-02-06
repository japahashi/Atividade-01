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

                entradaDeDados.question("O senhor(a) deseja pagar em anos ou meses? \nCaso seja em meses digite [1] se for em anos digite [2]: ", function(opcao){

                    let opcaoDeCompra = opcao
                

                    entradaDeDados.question("insira em quanto tempo o(a) senhor(a) deseja pagar: ", function(tempo){

                        let tempoDePagamento = tempo
                    

                        if(nome == "" || produto == "" || valor == "" || taxa == "" || tempo == ""){
                        console.log("ERRO: O(S) CAMPO(s) DEVE(M) SER PREENCHIDO(S)!!!")

                        }else if(isNaN(valor) + isNaN(taxa) + isNaN(tempo)){
                        console.log("ERRO: SOMENTE NUMEROS SÃO PERMITIDOS NOS CAMPOS!!! ")

                        }else if(opcao == 1){

                            let montante = Number(valor) * (1 + Number(taxa/100)) ** Number(tempo)

                                let valorDoAcrecimo = Number(montante) - Number(valor)

                                console.log(`******************* [VIVA MODA] *******************

Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}
A compra do produto ${produto}, tem um valor de: ${valor}
A sua compra será parcelada em ${taxa} vezes e o Sr(a) pagará: ${montante.toFixed(2)}
O acréscimo realizado ao valor de: ${valor} será de ${valorDoAcrecimo.toFixed(2)}
                                                                                            
Muito obrigado por escolher a VIVA MODA!!!
                                                                    
***************************************************`)
       
                        }else if(opcao == 2){
                            
                            let montante = Number(valor) * (1 + Number(taxa/100)) ** Number(tempo*12)

                                let valorDoAcrecimo = Number(montante) - Number(valor)

                                console.log(`******************* [VIVA MODA] *******************

Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}
A compra do produto ${produto}, tem um valor de: ${valor}
A sua compra será parcelada em ${taxa} vezes e o Sr(a) pagará: ${montante.toFixed(2)}
O acréscimo realizado ao valor de: ${valor} será de ${valorDoAcrecimo.toFixed(2)}
                                                        
Muito obrigado por escolher a VIVA MODA!!!
                                
***************************************************`)
                        }

                    })
                })
            })
        })    
    })
})
