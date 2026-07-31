var nome = "Catani";
let idade: number = 19;

console.log(nome, idade)

type User = {
    name: string,
    age: number
}

let userHenrique: User = {name: nome, age: idade}
console.log(userHenrique)