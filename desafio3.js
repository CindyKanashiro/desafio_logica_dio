class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }
    atacar(){
        console.log(`o ${this.tipo} atacou usando`)
    }
}

let arrayTipo = [
    {tipo: "Mago", ataque: "magia"},
    {tipo: "Guerreiro", ataque: "espada"},
    {tipo: "Monge", ataque: "artes marciais"},
    {tipo: "Ninja", ataque: "shuriken"}
]


function atacar(tipo){
    for(let index of arrayTipo){
        if(tipo === index.tipo){
            return (`o ${tipo} atacou usando ${index.ataque}`)
        }
    }

}

let magoAtaca = atacar("Mago");
let ninjaAtaca = atacar("Ninja");
console.log(magoAtaca);
console.log(ninjaAtaca);