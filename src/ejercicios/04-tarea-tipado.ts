

/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion: () => string;
    //mostrarDireccion(): void // Yo lo hice asi y tambien funciono alv c:
}

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion : {
        calle: 'main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );