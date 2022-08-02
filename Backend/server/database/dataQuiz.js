const { response } = require('express')
const db = require('../../conection/conection.js')

const QuestionRes = [
    {
        index: 1, 
        question: "HTML é uma linguagem de: ",
        item: {
            a: "Certificação",
            b: "Programação",
            c: "Desenvolvimento Web",
            d: "Linguagem de marcação"
        },
        response: "d"
    },
    {
        index: 2,
        question: "CSS tem como principal função em um site:",
        item: {
            a: "Estrutura",
            b: "Dinâmica",
            c: "Desenvolvimento Web",
            d: "Estilização"
        },
        response: "d"
    },
    {
        index: 3,
        question: "A linguagem JAVASCRIPT pode ter várias funções dentro de um site, como:",
        item: {
            a: "Deixar sites dinâmicos",
            b: "Estruturar sites",
            c: "Estilizar sites",
            d: "Estilizar botões"
        },
        response: "a",
    },
    {
        index: 4,
        question: "O inventor da apple se chama:",
        item: {
            a: "Bill Gates",
            b: "Steve Jober",
            c: "Mosely Gates",
            d: "Steve Jobs"
        },
        response: "d",
    },
    {
        index: 5,
        question: "Qual o nome do invetor da Microsoft?",
        item: {
            a: "Bill Gates",
            b: "Steve jobs",
            c: "Mark zuckenberg",
            d: "João Pedro Brito Sousa"
        },
        response: "a"
    },
    {
        index: 6,
        question: "Para que serve o cooler dentro de um computador?",
        item: {
            a: "Evitar aquecimento das peças ",
            b: "Fornecer energia ao computador ao girar",
            c: "Processa dados rápidos ",
            d: "Armazenar dados"
        },
        response: "a"
    },
    {
        index: 7,
        question: "Qual dos seguintes nomes são navegadores web?",
        item: {
            a: "Windows",
            b: "Linux",
            c: "Mozila Firefox",
            d: "Linux Mint"
        },
        response: "c"
    },
    {
        index: 8,
        question: "Qual dos seguintes nomes é um sistema operacional:",
        item: {
            a: "Google Chrome",
            b: "Ubuntu",
            c: "Brave",
            d: "Visual Studio"
        },
        response: "b"
    },

    {
        index: 9,
        question: "Qual a função de um HD?",
        item: {
            a: "Armazenar memórias RAM",
            b: "Resfriar o computador",
            c: "Processa dados rápidos",
            d: "Armazenar dados"
        },
        response: "d"
    },
    {
        index: 10,
        question: "Você gostou do jogo?",
        item: {
            a: "SIM",
            b: "NAO",
            c: 'UM POUCO',
            d: 'NEUTRO'
        },
        response: "a"
    }
]

QuestionRes.forEach((element, index)=>{
   index++
   db.collection("Quiz").doc(`${index}`).set(element)
})

module.exports = db