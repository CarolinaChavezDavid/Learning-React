
// Desestructuración

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};


const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 32.884,
            lng: -12.2343
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );


