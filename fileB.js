let users = [
    {
        id: 1,
        name: "Mario",
        surname: "Rossi",
        age: 35,
        languages: ["html", "css", "javascript"]
    },
    {
        id: 2,
        name: "Franco",
        surname: "Verdi",
        age: 34,
        languages: ["python", "javascript"]
    }
];

//let loop = users.forEach(e => console.log(e.name))

for (let i = 0; i < users.length; i++){
    console.log(users[i].name)
}
