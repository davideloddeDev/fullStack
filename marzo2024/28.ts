type MyAlias = string | number;

const hello: MyAlias = "Hello";
const guys: MyAlias = 8;

console.log(hello + " " + guys)

type MyAlias2 = {
    name: string;
    age: number;
}

const person: MyAlias2 = {
    name: "Davide",
    age: 22
}

const persons:MyAlias2[] = [
    {
        name: "Davide",
        age: 30
    },
    {
        name: "Arianna",
        age: 22
    }
]

