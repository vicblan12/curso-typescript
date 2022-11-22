

/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string,
    hijos?: string[]
  }
  
  const pasajero1: Pasajero = {
    nombre: 'Fernando'
  }
  
  const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
  }
  
  function printHijos( pasajero: Pasajero ): void {
  
    const cuantosHijos = pasajero.hijos?.length || 0; // Si hijo es undefined o no existe devuelve 0
  
    console.log( cuantosHijos )
  
  }
  
  printHijos( pasajero1 );