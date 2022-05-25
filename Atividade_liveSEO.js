// // Atividades 1 //
// //TODO 1 //
// let valor1 = Number(prompt("Preenchan o valor 1"));
// let valor2 = Number(prompt("Preenchan o valor 2"));
// let soma = valor1 + valor2
// alert('A soma dos valores é: v' + soma)
// console.log('A soma dos valores é' ,{soma});

// //TODO 2 //
// let valor1 = Number(prompt("Preencha o valor 1"));
// let valor2 = Number(prompt("Preencha o valor 2"));
// let mult = valor1 * valor2
// alert('A multiplicação dos valores é: ' + multi)
// console.log('A multiplicação dos valores é' ,{multi});

// //TODO 3 //
// let valor1 = Number(prompt("Preencha o valor 1"));
// let valor2 = Number(prompt("Preencha o valor 2"));
// let div = valor1 / valor2
// alert('A divisão dos valores é: ' + div)
// console.log('A divisão dos valores é' ,{div});

// //TODO 4 e 5 //
// let valor1 = Number(prompt("Preencha o valor 1"));
// let valor2 = Number(prompt("Preencha o valor 2"));
// if (valor1 %2 === 0 && valor2 %2 ===0){
//         alert('Ambos os valores são PARES!');
// }
// else 
//     if (valor1 %2 !== 0 && valor2 %2 !== 0){
//         alert('Ambos os valores são ÍMPARES');
// }
// else
//     if (valor1 %2 === 0 && valor2 %2 !==0){
//         alert('O valor 1 é PAR e o valor 2 é Ímpar')
// }
// else
//     if (valor1 %2 !== 0 && valor2 %2 ===0){
//         alert('O valor 1 é IMPAR e o valor 2 é PAR')
// }

// //TODO 6 //
// let valor1 = Number(prompt("Preencha o valor 1"));
// let valor2 = Number(prompt("Preencha o valor 2"));
// let multi = (valor1 * valor2) - (Math.min(valor1,valor2))
//         alert('A multiplicação dos valores menos o MENOR valor é: ' + multi)
// console.log('A multiplicação dos valores menos o MENOR valor é: ' ,{multi});


// // Atividade Arrays - javascript // 
let valor1 = parseInt(prompt("Informe o primeiro valor: "));
let valor2 = parseInt(prompt("Informe o segundo valor: "));
let soma = valor1 + valor2;
let mult = valor1 * valor2;
let div = valor1 / valor2;
let isPar = "";
let asterisco = lista.join(" * ");

if (valor1 %2 === 0 && valor2 %2 ===0){
        isPar=('Ambos os valores são PARES!');
}
else 
    if (valor1 %2 !== 0 && valor2 %2 !== 0){
        isPar=('Ambos os valores são ÍMPARES');
}
else
    if (valor1 %2 === 0 && valor2 %2 !==0){
        isPar=('O valor 1 é PAR e o valor 2 é Ímpar')
}
else
    if (valor1 %2 !== 0 && valor2 %2 ===0){
        isPar=('O valor 1 é IMPAR e o valor 2 é PAR')
}
let multi = (valor1 * valor2) - (Math.min(valor1,valor2))
let lista = [];
lista.push(soma, mult, div, multi, isPar)
lista.push(asterisco)
console.log(lista)


