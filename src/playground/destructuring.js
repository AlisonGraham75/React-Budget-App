// object destructuring

const person = {
    name: 'Alison',
    age: 26,
    location :{
        city: 'Philadelphia',
        temp: 92
    }
};

//curly braces used in destructuring. 
const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}.`);
const { city, temp: temperature } = person.location;
if(city && temperature) {
    console.log(`Its's ${temperature} in ${city}.`)
}

//Array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city1, state = 'New York'] = address;
console.log(`You are in ${city1} ${state}`);
