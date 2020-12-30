const person = {
    name: 'Alison',
    age: 26,
    location :{
        city: 'Philadelphia',
        temp: 92
    }
};
const { name = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}.`);
const { city, temp: temperature } = person.location;
if(city && temperature) {
    console.log(`Its's ${temperature} in ${city}.`)
}
