
//Função que faz a conta de saldo da Rankeada
function saldoRankeadas(qtdVitorias, qtdDerrotas){
    let resultadoSaldo = (qtdVitorias - qtdDerrotas);

    return resultadoSaldo;
}

//Lista dos níveis 
let arrayDeNivel = [
    {max: 10, min: 0, nome: "Ferro"},
    {max: 20, min: 11, nome: "Bronze"},
    {max: 50, min: 21, nome: "Prata"},
    {max: 80, min: 51, nome: "Ouro"},
    {max: 90, min: 81, nome: "Diamante"},
    {max: 100, min: 91, nome: "Lendário"},
    {max: Infinity, min: 101, nome: "Imortal"}
];

// resultato do saldo de acordo com os parâmetros colocados (qtdVitorias e qtdDerrotas)
let resultado = saldoRankeadas(225,5);

// resultato da verificação dos níveis
let resuldadoNivel = verificaNivel(resultado)

//For para percorrer cada Linha do array e fazer uma verificação de se o resuldado da
// função saldoRankeadas(passada pelos parâmetros) for maior ou igual ao mínino do nosso nível e se for menor ou igual
//ao valor máximo do nível, com isso, ele retorna o saldo da função acima e o nome do nível de acordo com a verificação
function verificaNivel(saldoRankeadas){
    for(let nivel of arrayDeNivel){
        if(saldoRankeadas >= nivel.min && saldoRankeadas <= nivel.max){
            let resposta = `O Herói tem de saldo de ${resultado} está no nível de ${nivel.nome}`
            return resposta;
        } 
    }
    return "Nível não encontrado "
}   

console.log(resuldadoNivel)




