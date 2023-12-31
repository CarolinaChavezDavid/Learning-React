#  <img width="30" alt="image" src="https://github.com/CarolinaChavezDavid/Learning-React/assets/77591347/becc2183-7fa6-4928-983a-a29c6b0989b1"> Learning-React

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
yarn install
yarn dev 
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
they are asyncronous with **async** we can make a function to return a promise, and with the async, we may handle errors with try-catch
```
const promise = new Promise ((resolve, reject) => {
 //http call
 resolve( http call );
})

promise.then().catch;
```
</details>

### Components
Components are small pieces of code that are encapsulated, reusable and could or could not have states. An state could how the information of a component could be in certain moment

#### Props, communication between components

### Hooks
 * **useEffect** Lets you perform side effects in function components
 * **useReducer** An alternative to useState. Accepts a type reducer ```(state, action) => newState``` and returns the current state paired with a method ```dispatch``` (action object).
 * **Thunks** The word "thunk" is a programming term that means "a piece of code that does some delayed work". Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.

> ℹ️ Components with many status updates distributed through various event handlers can be overwhelming. For these cases, you can consolidate all the state update logic outside of the component into a single function, called reducer.
   
### Testing
We can test React applications with [JEST](https://jestjs.io/)

### Useful commands

```
npm start
```
start react project

###  Deploy
[Netify](https://www.netlify.com/)
Front-end application deployment

### Redux
Redux -> Design pattern based on reducer to manage the state
Redux Toolkit -> A set of tools to easly implement Redux in a project
it's an open source library from JavaScript. It's a Predictable State Container for JS Apps

* **Thunks** action with asynchronous that excecutes another action

![image](https://github.com/CarolinaChavezDavid/Learning-React/assets/77591347/da819d28-3a31-46c7-8d5c-5c1cd8784930)
