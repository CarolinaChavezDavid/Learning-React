# Learning-React

<img width="1176" alt="image" src="https://github.com/CarolinaChavezDavid/Learning-React/assets/77591347/5d8c2932-ec74-4e8a-9430-b93278e8f4af">

Is a Library is declarative, predictible, efficient, works with components and helps to build small and large applications, works in the server side with node 

### JSX = JS + XML
```
const h1Tag = <h1>Hola Mundo</h1>
const h1Tag = document.createElement('h1', null, `Hola, soy ${ nombre } );
```
<img width="50" alt="image" src="https://github.com/CarolinaChavezDavid/Learning-React/assets/77591347/4ff73389-17f4-4c06-968a-1866ae16d520"> 

### Javascript basics

#### Variables
```
const name = 'Carolina';  // if the value is naver changed
let lastName = 'Chávez';
```

#### String templates
```
 const fullName = `Hola ${name} ${lastName}`;
```

#### Literal Objects
```
 const person ={
  name : 'Alice',
  lastName: 'Wild',
  age: 26,
  address: {
    city: 'Athens',
    zip: '34564'
}
};
```
```
const otherPerson = person; 
```
Referes to the exact same memory space, so any modification to 'otherPerson' will affect the same way the object 'Person'

```
const otherPerson = {...person"};
```
Using the spread operator from Javascript, you will make a copy or clone of the object.

### Useful commands

```
npm start
```
start react project
