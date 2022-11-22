

/*
    ===== Código de TypeScript =====
*/

// Realizamos la importación de la interfaz. El objeto carritoCompra va a ser del tipo Producto importado

//Importamos de igual manera la función calculaISV

import { Producto, calculaISV } from './06-desestructuracion-funcion'

//Producto[] porque es de tipo array

const carritoCompra: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];


const [monto, isv] = calculaISV( carritoCompra );

console.log( 'Total: ', monto );
console.log( 'Impuesto: ', isv );
