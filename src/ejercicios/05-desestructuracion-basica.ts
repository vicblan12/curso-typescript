

/*
    ===== Código de TypeScript =====
*/


interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anio: number,
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const {autor, anio} = reproductor.detalles

// console.log('El volumen actual es de: ', reproductor.volumen);
// console.log('El segundo actual es de: ', reproductor.segundo);
// console.log('La cancion actual es de: ', reproductor.cancion);
// console.log('El autor es de: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

//En los arreglos los nombres van por posicion
// const [ goku, vegeta, trunks ] = dbz;
const [ , , trunks ] = dbz;

// console.log('Personaje 1: ', goku)
// console.log('Personaje 2: ', vegeta)
console.log('Personaje 3: ', trunks)
