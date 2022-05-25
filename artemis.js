    //   ATIVIDADE UM DE JAVASCRIPT

    //   let valor1 = Number(prompt("Preencha o valor 1"));
    //   let valor2 = Number(prompt("Preencha o valor 2"));
    //   let soma = valor1 + valor2
    //   console.log(`A soma do ${valor1} com ${valor2} é ${soma}.`)

    //   let mult = valor1 * valor2
    //   console.log(`A multiplicação do ${valor1} com ${valor2} é ${mult}.`)

    //   let div = valor1 / valor2
    //   console.log(`A divisão do ${valor1} com ${valor2} é ${div}.`)

    //   if(valor1 %2 == 0 && valor2 %2 == 0) {
    //       console.log('Ambos os valores são pares')
    //   } else
    //   if(valor1 %2 !==0 && valor2 %2 !== 0) {
    //       console.log('Ambos os valores são impares!')
    //   } else
    //   if (valor1 %2 ===0 && valor2 %2 !==0) {
    //   console.log('O valor 1 é Par e o valor 2 é Impar')
    //  } else
    //  if(valor1 %2 !==0 && valor2 %2 === 0) {
    //      console.log('O valor 1 é Impar e o valor 2 é Par')
    //  }

    //  let multi = (valor1*valor2) - (Math.min(valor1,valor2))
    //  console.log(`A multiplicação dos valores - o menor valor é ${multi}`)


    // ATIVIDADE DOIS DE JAVASCRIPT

//     let lista = [
//         "alface",
//         "tomate",
//         "limão",
//         "Morango",
//         "Pera",
//         "Maça",
//         "Uva",
//         "Ovo"
    
//     ]

//     console.log(lista)

// // Exibe os dados da lista
//     console.log("Itens da lista", lista)

// // Exibe quantidade de itens
//     console.log("qtde de itens", lista.length)

// // Junto os itens separados por uma virgula
//     console.log(lista.join(" , "))

// // Pegar a primera posição da lista 
//     console.log(lista[0])

// // Pegar o ultimo item da lista
//     console.log(lista [lista.length - 1])
// // OR
//     let tamanho = lista.length
//     let posicao = tamanho- 1
//     let ultimo = lista [posicao]
//     console.log(ultimo)
// // Penultimo da lista
//    let posicao2 = tamanho - 2
//    let penultimo = lista [posicao2]
//    console.log(penultimo)

// // Outra maneira usando função splice

//    console.log(lista.splice(-1)) // -2, -3, etc 

// // Procurando a partir do primeiro item

//    console.log(lista.splice(1)) // 2, 3, etc 
   
//    console.log(lista.splice(1,1)) // inicio do corte, final do corte

// // Retornar o item do meio da lista
  
//    let totalItens = lista.length
//    let isPar = totalItens % 2 == 0;
//    if (isPar) {
//        let meioInicio = totalItens / 2 - 1 
//        console.log("Corte = ", + meioInicio)
//        console.log("Meio Par = ", lista[meioInicio], lista[meioInicio + 1])
//    } else {
//        let meioInicio = Math.round(totalItens / 2 - 1);
//        console.log("Corte = ", + meioInicio)
//        console.log("Meio Impar = " + lista[meioInicio])
//    }


   

   // ATIVIDADE ARRAY 

        let valor1 = Number(prompt("Preencha o valor 1"));
        let valor2 = Number(prompt("Preencha o valor 2"));
            
       // let soma = valor1 + valor2
        console.log(`A soma do ${valor1} com ${valor2} é ${soma}.`)


        let mult = valor1 * valor2
        console.log(`A multiplicação do ${valor1} com ${valor2} é ${mult}.`)

            
        let div = valor1 / valor2
        console.log(`A divisão do ${valor1} com ${valor2} é ${div}.`)

        let lista = [];
        let virgula = lista.join(" , ");
        let isPar = "";
    //     if(valor1 %2 == 0 && valor2 %2 == 0) {
    //         isPar = ('Ambos os valores são pares')
    //     } else
    //     if(valor1 %2 !==0 && valor2 %2 !== 0) {
    //         isPar = ('Ambos os valores são impares!')
    //     } else
    //     if (valor1 %2 ===0 && valor2 %2 !==0) {
    //         isPar = ('O valor 1 é Par e o valor 2 é Impar')
    //    } else
    //    if(valor1 %2 !==0 && valor2 %2 === 0) {
    //        isPar = ('O primeiro é impar e o segundo valor é Par')
    //    }
    
       let multi = (valor1*valor2) - (Math.min(valor1,valor2))
       console.log(`A multiplicação dos valores - o menor valor é ${multi}`)

       lista.push(virgula)
       lista.push(soma, mult, div, multi, isPar)
       console.log(lista)
    
       

    // USANDO FUNÇÃO PARA SUBSTITUIR IF / ELSE

    function soma (valor1,valor2) {
        return   valor1 + valor2
    }

    function isPar (valor1) {
        let resto = valor1 %2;
        return resto == 0;
    }



    // Função que informa o ANO de nascimento e retorna idade 

    let idade = Number(prompt("Qual a sua idade?"))
    function data (idade){
        let ano = 2022
        return ano - idade;
    }
   data()
   console.log(data)