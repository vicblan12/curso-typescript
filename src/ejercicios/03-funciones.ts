

/*
    ===== Código de TypeScript =====
*/

//El tercer number equivale al tipo de dato de la salida
function sumar(a: number, b: number): number {
    return a + b;
}
    //Funcion flecha
const sumaFlecha = (a:number, b:number):number => {
    return a + b;
}
//Colocando valores por defecto con typescript
//Solo mandamos 2 valores de 3 esperados
function multiplicar(numero: number, otroNumero?: number, base:number = 2):number {
    return numero * base;
}

// const resultado = multiplicar(7, 8);

// console.log(resultado);

//Se coloca void porque es una funcion que no retorna nada

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR, curarT:number ): void {
    
    personaje.pv += curarT;

}

const newPerson: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv);
    }

}

curar( newPerson, 20 );

newPerson.mostrarHp();
