# Learning-React

<img width="1176" alt="image" src="https://github.com/CarolinaChavezDavid/Learning-React/assets/77591347/5d8c2932-ec74-4e8a-9430-b93278e8f4af">

Is a Library is declarative, predictible, efficient, works with components and helps to build small and large applications, works in the server side with node 

### Tools to create React Apps
* ⚛️ [Create React App](https://create-react-app.dev/)
 ```
 npx create-react-app my-app
 ```
* 🌩️ [Vite](https://vitejs.dev/)
```
 npm create vite@latest
 npm run dev

yarn create vite
 ```
### JSX = JS + XML
```
const h1Tag = <h1>Hola Mundo</h1>
const h1Tag = document.createElement('h1', null, `Hola, soy ${ nombre } );
```
<img width="50" alt="image" src="https://github.com/CarolinaChavezDavid/Learning-React/assets/77591347/4ff73389-17f4-4c06-968a-1866ae16d520"> 

### Javascript basics

<details>
 <summary>Javascript basics</summary>
 
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

#### Arrays
functions: find, filter, map
```
const myArray = [1, 2, 3, 4];
let array2 = [...myArray, 5];
const array3 = array.map(function(number){
 return number * 2;
});
```

#### Functions
```
const greet = function(name){
 return `Hola, ${name}`
}
```

```
const greet = (name) => {
 return `Hola, ${name}`
};

const greet = (name) =>  `Hola, ${name}`;

```

#### Promises
they are asyncronous with **async** we can make a function to return a promise, with the async we may handle errors with try-catch
```
const promise = new Promise ((resolve, reject) => {
 //http call
 resolve( http call );
})

promise.then().catch;
```
</details>

### Components
Components are small pieces of code encapsulated and reusable that could or could not have states. An state could how the information of a component could be in certain moment

#### Props, comunication between components

### Hooks

### Testing
We can test React application with [JEST](https://jestjs.io/)

### Useful commands

```
npm start
```
start react project

###  Deploy
[Netify](https://www.netlify.com/)
Front-end application deployment
