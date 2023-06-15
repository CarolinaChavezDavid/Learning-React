
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;


console.log( saludar2('Caro') );
console.log( saludar3('Alice') );
console.log( saludar4() );


const getUser = () => ({
        uid: 'jjf3999',
        username: 'CarolinaCH'
});


const user = getUser();
console.log(user);

const getUsuarioActivo = ( nombre ) =>({
    uid: 'jjf3999',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );



