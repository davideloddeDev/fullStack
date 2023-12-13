/*
array di oggetti
*/

const users = [
    {
        name: "Alessandro",
        age: 31
    },
    {
        name: "Giovanni",
        age: 20
    }
]

//const popUser = users.pop()

//console.log(popUser)
/*
const pushUser = users.push({
    name: "Francesca",
    age: 18
})*/
//console.log(users)

/*const filterUser = users.filter((user) => {
    return user.age > 30
})*/

//console.log(filterUser)

/*let filterUser = []
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        console.log(`nome: ${users[i].name}; età: ${users[i].age}`)
        filterUser.push({
            nome: users[i].name,
            age: users[i].age
        })
        
    }
    
    
}
console.log(filterUser)*/

/*let sumAge = users.reduce((acc, utente) => acc + utente.age, 0)
let sumAge1 = users.reduce((acc, utente) => {
    return acc + utente.age
},0)*/
/*let myTotal = 0
for (let index = 0; index < users.length; index++) {
    //console.log(users[index].age)
    myTotal += users[index].age
    

}
console.log(myTotal)
//console.log(`la somma dell'età è: ${sumAge}`)

users.forEach((element) => {
    console.log(element.name)
})

for (let index = 0; index < users.length; index++) {
    console.log(users[index].name)
    
}*/

let usersMap = users.map((user) => {
    return user.name
    
})

console.log(usersMap)

let arr = []

for (let index = 0; index < users.length; index++) {
    arr.push(users[index].name);
    
}

console.log(arr)



