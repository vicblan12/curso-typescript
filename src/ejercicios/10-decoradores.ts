

/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

@reportableClassDecorator
class miSuperClase {
  public miPropiedad: string = 'ABD123'

  imprimir() {
      console.log('Hola Mundo')
  }
}

console.log( miSuperClase )

const miClase = new miSuperClase();

console.log( miClase.miPropiedad )
