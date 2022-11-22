

/*
    ===== Código de TypeScript =====
*/

//Clases extendidas

class personaNormal {
   constructor(
    public nombre: string,
    public direccion: string
    ){

   }
}

class Heroe extends personaNormal{
    //  alterEgo: string; // es porque solo se puede acceder dentro de la clase
    //  edad: number; //Public es cuando puedo leer desde fuera de la clase
    //  nombreReal: number; //Static, se puede acceder al valor sin crear una instancia de la clase

    constructor ( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
         ) {
            super( nombreReal, 'New York, USA' ); //Hay que hacer un llamado al super de la clase
         }

}


const ironman = new Heroe('Ironman', 25, 'Victor Blanco');

console.log( ironman )

